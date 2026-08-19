/**
 * CertificateExporter.ts
 * Backwards compatibility wrapper for CertificateExportManager.
 */

import { CertificateExportManager, ExportFormat, ExportOptions } from './CertificateExportManager';

export type { ExportFormat, ExportOptions };

export class CertificateExporter {
  public static async exportCertificate(
    targetContainer: HTMLElement,
    format: ExportFormat,
    options: ExportOptions
  ): Promise<{ success: boolean; error?: string }> {
    return await CertificateExportManager.export(targetContainer, format, options);
  }
}
