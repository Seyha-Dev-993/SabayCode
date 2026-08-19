/**
 * CertificatePrintExporter.ts
 * Opens landscape print dialog using high-resolution PNG image captures.
 */

import { CertificateImageExporter } from './CertificateImageExporter';

export class CertificatePrintExporter {
  /**
   * Opens print window using generated HD PNG image
   */
  public static async printCertificate(
    element: HTMLElement,
    studentName: string,
    scale = 4
  ): Promise<void> {
    const canvas = await CertificateImageExporter.renderToCanvas(element, scale);
    const imgData = canvas.toDataURL('image/png', 1.0);

    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Print Certificate - ${studentName}</title>
            <style>
              @page { size: landscape; margin: 0; }
              body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; background: white; }
              img { width: 100vw; height: auto; max-height: 100vh; object-fit: contain; }
            </style>
          </head>
          <body>
            <img src="${imgData}" onload="window.print(); window.close();" />
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  }
}
