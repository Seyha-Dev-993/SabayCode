/**
 * CertificatePDFExporter.ts
 * Generates PDF documents strictly from high-resolution PNG image captures.
 * NEVER re-renders HTML for PDF, guaranteeing 100% parity with preview.
 */

import { jsPDF } from 'jspdf';
import { CertificateImageExporter } from './CertificateImageExporter';

export class CertificatePDFExporter {
  /**
   * Generates landscape PDF from rendered certificate canvas or element
   */
  public static async exportPDF(
    element: HTMLElement,
    filename: string,
    scale = 4
  ): Promise<void> {
    // 1. Render HD Canvas
    const canvas = await CertificateImageExporter.renderToCanvas(element, scale);

    // 2. Convert Canvas directly to PNG data URL
    const pngDataUrl = canvas.toDataURL('image/png', 1.0);

    // 3. Create Landscape PDF matching exact 1400x990 dimensions
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [1400, 990],
      hotfixes: ['px_scaling'],
    });

    // 4. Embed PNG directly into PDF canvas page
    pdf.addImage(pngDataUrl, 'PNG', 0, 0, 1400, 990, undefined, 'FAST');

    // 5. Save PDF
    pdf.save(`${filename}.pdf`);
  }
}
