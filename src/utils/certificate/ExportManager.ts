/**
 * ExportManager.ts
 * Backwards compatibility wrapper for CertificateExportManager.
 */

import { CertificateExportManager, ExportFormat, ExportOptions } from './CertificateExportManager';
import { ValidationResult, LayoutValidator } from './LayoutValidator';

export class ExportManager {
  public static async prepareEnvironment(): Promise<void> {
    await CertificateExportManager.prepareEnvironment();
  }

  public static validateCertificate(container: HTMLElement): ValidationResult {
    return LayoutValidator.validate(container);
  }

  public static async export(
    container: HTMLElement,
    format: ExportFormat,
    options: ExportOptions
  ): Promise<{ success: boolean; error?: string }> {
    return await CertificateExportManager.export(container, format, options);
  }

  public static checkRegression(previewContainer: HTMLElement | null, exportContainer: HTMLElement | null) {
    return CertificateExportManager.checkRegression(previewContainer, exportContainer);
  }
}
