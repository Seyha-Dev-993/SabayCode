/**
 * ImageLoader.ts
 * Backwards compatibility wrapper for CertificateAssetsLoader.
 */

import { CertificateAssetsLoader } from './CertificateAssetsLoader';

export class ImageLoader {
  public static async waitUntilLoaded(container: HTMLElement): Promise<boolean> {
    return await CertificateAssetsLoader.waitUntilLoaded(container);
  }

  public static validateImages(container: HTMLElement): { valid: boolean; total: number; failed: number } {
    const report = CertificateAssetsLoader.validate(container);
    return {
      valid: report.valid,
      total: report.totalImages,
      failed: report.failedImages,
    };
  }
}
