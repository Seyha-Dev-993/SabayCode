/**
 * CertificateExportManager.ts
 * Enterprise pipeline manager coordinating validation, visual locks,
 * and high-resolution multi-format exporting (PNG, JPEG, PDF, Print).
 */

import { CertificateEngine } from './CertificateEngine';
import { CertificateLayoutValidator, CertificateValidationResult } from './CertificateLayoutValidator';
import { CertificateImageExporter } from './CertificateImageExporter';
import { CertificatePDFExporter } from './CertificatePDFExporter';
import { CertificatePrintExporter } from './CertificatePrintExporter';
import { CertificateVisualRegressionTester } from './CertificateVisualRegressionTester';

export type ExportFormat = 'png' | 'jpeg' | 'pdf' | 'print';

export interface ExportOptions {
  studentName: string;
  courseTitle: string;
  certId: string;
  language?: 'en' | 'kh' | 'km';
  scale?: number;
}

export interface ExportResult {
  success: boolean;
  error?: string;
  validation?: CertificateValidationResult;
}

export class CertificateExportManager {
  /**
   * Pre-warms typography and vector environment
   */
  public static async prepareEnvironment(): Promise<void> {
    await CertificateEngine.prepareEnvironment();
  }

  /**
   * Validates target certificate DOM element before export
   */
  public static validate(element: HTMLElement): CertificateValidationResult {
    return CertificateLayoutValidator.validate(element);
  }

  /**
   * Executes deterministic multi-step export pipeline
   */
  public static async export(
    targetContainer: HTMLElement,
    format: ExportFormat,
    options: ExportOptions
  ): Promise<ExportResult> {
    if (!targetContainer) {
      return { success: false, error: 'Certificate target element not found' };
    }

    const certElement =
      (targetContainer.querySelector('#certificate-export') as HTMLElement) ||
      (targetContainer.querySelector('.certificate-card') as HTMLElement) ||
      targetContainer;

    try {
      // Step 1: Wait for Fonts
      await CertificateEngine.prepareEnvironment();

      // Step 2 & 3: Settle React rendering cycles
      await CertificateEngine.settleRender();

      // Step 4: Run Validation
      const validation = await CertificateEngine.validateCertificate(certElement);
      if (!validation.valid) {
        console.warn('CertificateExportManager: Validation errors found:', validation.errors);
        return {
          success: false,
          error: `Export Aborted - Validation Failed: ${validation.errors.join('; ')}`,
          validation,
        };
      }

      // Step 5: Freeze Layout & Visual Lock
      const unfreeze = CertificateEngine.freezeLayout(certElement);

      const scale = options.scale || 4;
      const cleanName = (options.studentName || 'Student').trim().replace(/\s+/g, '_');
      const filename = `SabayCode_Certificate_${cleanName}_${options.certId}`;

      // Step 6 & 7: Export according to requested format
      if (format === 'png' || format === 'jpeg') {
        await CertificateImageExporter.exportImage(certElement, format, filename, scale);
      } else if (format === 'pdf') {
        await CertificatePDFExporter.exportPDF(certElement, filename, scale);
      } else if (format === 'print') {
        await CertificatePrintExporter.printCertificate(certElement, options.studentName, scale);
      }

      // Step 8: Unfreeze layout
      unfreeze();

      return {
        success: true,
        validation,
      };
    } catch (err: any) {
      console.error('CertificateExportManager: Pipeline error during export:', err);
      return {
        success: false,
        error: err?.message || 'Failed to complete certificate export pipeline',
      };
    }
  }

  /**
   * Runs automated visual regression comparison
   */
  public static checkRegression(previewElem: HTMLElement | null, exportElem: HTMLElement | null) {
    return CertificateVisualRegressionTester.compareElements(previewElem, exportElem);
  }
}
