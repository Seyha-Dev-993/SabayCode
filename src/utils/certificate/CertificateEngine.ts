/**
 * CertificateEngine.ts
 * Core certificate rendering and execution engine.
 * Manages layout freezing, visual locks, DOM settling, and coordinates
 * font, asset, and layout validation before export.
 */

import { CertificateFontLoader } from './CertificateFontLoader';
import { CertificateAssetsLoader } from './CertificateAssetsLoader';
import { CertificateLayoutValidator, CertificateValidationResult } from './CertificateLayoutValidator';

export class CertificateEngine {
  /**
   * Prepares and validates environment for certificate rendering
   */
  public static async prepareEnvironment(): Promise<void> {
    CertificateFontLoader.injectFonts();
    await CertificateFontLoader.waitUntilLoaded();
  }

  /**
   * Settles React render cycles with double requestAnimationFrame
   */
  public static async settleRender(): Promise<void> {
    return new Promise<void>((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
    );
  }

  /**
   * Freezes animations, hover states, transitions, and transforms during capture
   */
  public static freezeLayout(element: HTMLElement): () => void {
    const originalStyle = element.getAttribute('style') || '';
    element.classList.add('cert-engine-freeze');

    const styleTag = document.createElement('style');
    styleTag.id = 'cert-engine-freeze-styles';
    styleTag.innerHTML = `
      .cert-engine-freeze, .cert-engine-freeze * {
        animation: none !important;
        transition: none !important;
        transform: none !important;
        caret-color: transparent !important;
        user-select: none !important;
      }
    `;
    document.head.appendChild(styleTag);

    return () => {
      element.classList.remove('cert-engine-freeze');
      element.setAttribute('style', originalStyle);
      const tag = document.getElementById('cert-engine-freeze-styles');
      if (tag) tag.remove();
    };
  }

  /**
   * Runs complete validation suite across fonts, images, SVGs, safe zones, and DOM metrics
   */
  public static async validateCertificate(
    element: HTMLElement
  ): Promise<CertificateValidationResult> {
    await this.prepareEnvironment();
    await CertificateAssetsLoader.waitUntilLoaded(element);
    return CertificateLayoutValidator.validate(element);
  }
}
