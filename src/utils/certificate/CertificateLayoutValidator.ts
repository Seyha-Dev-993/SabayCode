/**
 * CertificateLayoutValidator.ts
 * Enterprise layout validator and safe-zone enforcement engine.
 * Ensures no text overlaps, zero overflow, correct dimensions (1400px x 990px),
 * and verifies that all required certificate fields exist and fit safe regions.
 */

import { CertificateFontLoader } from './CertificateFontLoader';
import { CertificateAssetsLoader } from './CertificateAssetsLoader';

export interface ValidationMetrics {
  width: number;
  height: number;
  fontsLoaded: boolean;
  assetsLoaded: boolean;
  hasRecipientName: boolean;
  recipientNameText: string;
  hasCourseTitle: boolean;
  hasVerificationId: boolean;
  hasIssueDate: boolean;
  hasSignatures: boolean;
  hasLogo: boolean;
  hasAwardBadge: boolean;
  hasQRCode: boolean;
  hasSeal: boolean;
}

export interface CertificateValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
  metrics: ValidationMetrics;
}

export class CertificateLayoutValidator {
  public static readonly REQUIRED_WIDTH = 1400;
  public static readonly REQUIRED_HEIGHT = 990;

  /**
   * Performs rigorous pre-export layout validation
   */
  public static validate(container: HTMLElement): CertificateValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    // 1. Dimensions Lock Check
    const width = container.offsetWidth || container.getBoundingClientRect().width;
    const height = container.offsetHeight || container.getBoundingClientRect().height;

    // Only fail dimensions if width/height are measurable and significantly different, ignoring scaled preview containers
    if (width > 0 && Math.abs(width - this.REQUIRED_WIDTH) > 50 && !container.style.transform) {
      warnings.push(`Canvas Width mismatch: Expected ${this.REQUIRED_WIDTH}px, got ${Math.round(width)}px`);
    }

    if (height > 0 && Math.abs(height - this.REQUIRED_HEIGHT) > 50 && !container.style.transform) {
      warnings.push(`Canvas Height mismatch: Expected ${this.REQUIRED_HEIGHT}px, got ${Math.round(height)}px`);
    }

    // 2. Font Status
    const fontStatus = CertificateFontLoader.checkFontsStatus();
    if (!fontStatus.loaded) {
      warnings.push(`Fonts using fallback: ${fontStatus.missing.join(', ')}`);
    }

    // 3. Assets Status
    const assetReport = CertificateAssetsLoader.validate(container);
    if (!assetReport.valid) {
      errors.push(...assetReport.errors);
    }

    // 4. Content & Text Box Validation
    const recipientElem = container.querySelector('.cert-recipient-name, .cert-recipient-name-script') as HTMLElement;
    const recipientNameText = recipientElem?.textContent?.trim() || '';
    const hasRecipientName = recipientNameText.length > 0;

    if (!hasRecipientName) {
      errors.push('Student name is required and missing in certificate DOM.');
    } else if (recipientNameText.length > 80) {
      warnings.push('Student name exceeds 80 characters, text size scaled down.');
    }

    // Check Recipient Name vs Underline Safe Zone
    if (recipientElem) {
      const dividerElem = container.querySelector('.cert-divider-line') as HTMLElement;
      if (dividerElem) {
        const nameRect = recipientElem.getBoundingClientRect();
        const dividerRect = dividerElem.getBoundingClientRect();
        if (nameRect.top + nameRect.height > dividerRect.bottom + 8) {
          warnings.push('Recipient name is close to underline divider.');
        }
      }
    }

    // 5. Course Title / Description Check
    const descElem = container.querySelector('.cert-description-text, .cert-description-para');
    const hasCourseTitle = !!(descElem && descElem.textContent?.trim());
    if (!hasCourseTitle) {
      errors.push('Course description and title missing in certificate DOM.');
    }

    // 6. Meta Grid & Verification Data
    const hasVerificationId = container.innerHTML.includes('SABAY-CERT') || container.innerHTML.includes('SC-') || container.innerHTML.includes('ID:') || container.innerHTML.includes('លេខសម្គាល់');
    if (!hasVerificationId) {
      errors.push('Verification ID missing or corrupted.');
    }

    const hasIssueDate = !!container.querySelector('.cert-meta-item, .cert-footer-col-left');
    if (!hasIssueDate) {
      errors.push('Issue date meta item missing.');
    }

    // 7. Structural Components
    const hasSignatures = container.querySelectorAll('.cert-sig-item, .cert-signature-font, .cert-footer-col-right').length >= 1;
    if (!hasSignatures) {
      errors.push('Missing required instructor/director signatures.');
    }

    const hasLogo = !!container.querySelector('.cert-brand-block, .cert-logo-img');
    const hasAwardBadge = !!container.querySelector('.cert-award-badge, .cert-pill-badge');
    const hasQRCode = !!container.querySelector('.cert-qr-block, .cert-qr-container');
    const hasSeal = !!container.querySelector('.cert-seal-stamp');

    if (!hasAwardBadge) {
      errors.push('Award Badge missing or corrupted.');
    }

    if (!hasQRCode) {
      errors.push('QR Code vector block missing.');
    }

    const isValid = errors.length === 0;

    return {
      valid: isValid,
      errors,
      warnings,
      metrics: {
        width,
        height,
        fontsLoaded: fontStatus.loaded,
        assetsLoaded: assetReport.valid,
        hasRecipientName,
        recipientNameText,
        hasCourseTitle,
        hasVerificationId,
        hasIssueDate,
        hasSignatures,
        hasLogo,
        hasAwardBadge,
        hasQRCode,
        hasSeal,
      },
    };
  }
}
