/**
 * CertificateAssetsLoader.ts
 * Verifies and preloads all images, logos, badges, signatures, and SVG vectors
 * inside the certificate element before export.
 */

export interface AssetValidationReport {
  valid: boolean;
  totalImages: number;
  failedImages: number;
  totalSVGs: number;
  failedSVGs: number;
  errors: string[];
}

export class CertificateAssetsLoader {
  /**
   * Preloads and waits for all images and SVGs inside target container.
   */
  public static async waitUntilLoaded(container: HTMLElement, maxRetries = 2): Promise<boolean> {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      const imagesLoaded = await this.loadImages(container);
      const svgsLoaded = this.validateSVGs(container).valid;

      if (imagesLoaded && svgsLoaded) {
        return true;
      }

      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    const report = this.validate(container);
    return report.valid;
  }

  /**
   * Internal helper to load all <img> tags inside container
   */
  private static async loadImages(container: HTMLElement): Promise<boolean> {
    const images = Array.from(container.querySelectorAll('img')) as HTMLImageElement[];
    if (images.length === 0) return true;

    const loadPromises = images.map(async (img) => {
      if (img.complete && img.naturalWidth > 0) {
        return true;
      }

      return new Promise<boolean>((resolve) => {
        const handleComplete = () => {
          img.removeEventListener('load', handleComplete);
          img.removeEventListener('error', handleComplete);
          resolve(img.complete && img.naturalWidth > 0);
        };

        if (img.complete) {
          handleComplete();
        } else {
          img.addEventListener('load', handleComplete);
          img.addEventListener('error', handleComplete);
        }

        if ('decode' in img) {
          img.decode().then(() => resolve(true)).catch(() => {});
        }
      });
    });

    const timeoutPromise = new Promise<boolean>((resolve) =>
      setTimeout(() => resolve(false), 4000)
    );

    const results = await Promise.race([Promise.all(loadPromises), timeoutPromise]);
    return Array.isArray(results) ? results.every(Boolean) : false;
  }

  /**
   * Validates SVG elements are rendered in DOM with valid dimensions
   */
  public static validateSVGs(container: HTMLElement): { valid: boolean; total: number; failed: number } {
    const svgs = Array.from(container.querySelectorAll('svg')) as SVGSVGElement[];
    let failed = 0;

    for (const svg of svgs) {
      const rect = svg.getBoundingClientRect();
      const hasAttrDim = svg.hasAttribute('viewBox') || svg.hasAttribute('width') || svg.clientWidth > 0;
      if ((rect.width === 0 || rect.height === 0) && !hasAttrDim) {
        // SVG has 0 rendered size and no fallback dimensions
        failed++;
      }
    }

    return {
      valid: failed === 0,
      total: svgs.length,
      failed,
    };
  }

  /**
   * Full validation report for all certificate assets
   */
  public static validate(container: HTMLElement): AssetValidationReport {
    const errors: string[] = [];

    // 1. Image validation
    const images = Array.from(container.querySelectorAll('img')) as HTMLImageElement[];
    let failedImages = 0;
    for (const img of images) {
      if (!img.complete || img.naturalWidth === 0) {
        failedImages++;
        errors.push(`Broken image asset: ${img.src || 'unnamed image'}`);
      }
    }

    // 2. SVG validation
    const svgRes = this.validateSVGs(container);
    if (!svgRes.valid) {
      errors.push(`${svgRes.failed} SVG elements failed rendering metrics.`);
    }

    // 3. Essential components check (with multi-selector fallbacks)
    if (!container.querySelector('.cert-brand-block, .cert-logo-img, .cert-header')) {
      errors.push('Logo asset block missing or corrupted.');
    }

    if (!container.querySelector('.cert-award-badge, .cert-pill-badge')) {
      errors.push('Award Badge SVG missing or corrupted.');
    }

    if (!container.querySelector('.cert-qr-block, .cert-qr-container, .cert-qr-image')) {
      errors.push('QR Code vector block missing.');
    }

    if (!container.querySelector('.cert-seal-stamp, .cert-seal-text')) {
      errors.push('Verification Seal missing.');
    }

    return {
      valid: errors.length === 0,
      totalImages: images.length,
      failedImages,
      totalSVGs: svgRes.total,
      failedSVGs: svgRes.failed,
      errors,
    };
  }
}
