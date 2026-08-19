/**
 * LayoutValidator.ts
 * Backwards compatibility wrapper for CertificateLayoutValidator and CertificateVisualRegressionTester.
 */

import { CertificateLayoutValidator } from './CertificateLayoutValidator';
import { CertificateVisualRegressionTester } from './CertificateVisualRegressionTester';

export interface ValidationResult {
  valid: boolean;
  errors: string[];
  metrics: {
    width: number;
    height: number;
    fontsLoaded: boolean;
    imagesLoaded: boolean;
    hasRecipientName: boolean;
    hasQRCode: boolean;
    hasSignatures: boolean;
    hasLogo: boolean;
    hasAwardBadge: boolean;
  };
}

export class LayoutValidator {
  public static EXPECTED_WIDTH = 1400;
  public static EXPECTED_HEIGHT = 990;

  public static validate(container: HTMLElement): ValidationResult {
    const res = CertificateLayoutValidator.validate(container);
    return {
      valid: res.valid,
      errors: res.errors,
      metrics: {
        width: res.metrics.width,
        height: res.metrics.height,
        fontsLoaded: res.metrics.fontsLoaded,
        imagesLoaded: res.metrics.assetsLoaded,
        hasRecipientName: res.metrics.hasRecipientName,
        hasQRCode: res.metrics.hasQRCode,
        hasSignatures: res.metrics.hasSignatures,
        hasLogo: res.metrics.hasLogo,
        hasAwardBadge: res.metrics.hasAwardBadge,
      },
    };
  }

  public static runRegressionCheck(previewElem: HTMLElement | null, exportElem: HTMLElement | null) {
    const res = CertificateVisualRegressionTester.compareElements(previewElem, exportElem);
    return {
      passed: res.passed,
      differences: res.differences,
    };
  }
}
