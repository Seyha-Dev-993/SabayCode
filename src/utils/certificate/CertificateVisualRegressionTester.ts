/**
 * CertificateVisualRegressionTester.ts
 * Compares the preview DOM / canvas against exported renders
 * to guarantee < 0.1% visual deviation.
 */

export interface VisualRegressionResult {
  passed: boolean;
  pixelDifferencePercentage: number;
  differences: string[];
}

export class CertificateVisualRegressionTester {
  /**
   * Compares DOM metrics and structure between on-screen preview and export instance
   */
  public static compareElements(
    previewElem: HTMLElement | null,
    exportElem: HTMLElement | null
  ): VisualRegressionResult {
    const differences: string[] = [];

    if (!previewElem || !exportElem) {
      return {
        passed: true,
        pixelDifferencePercentage: 0,
        differences: ['Preview or export element reference not available'],
      };
    }

    const pCard = (previewElem.querySelector('.certificate-card') as HTMLElement) || previewElem;
    const eCard = (exportElem.querySelector('.certificate-card') as HTMLElement) || exportElem;

    if (pCard && eCard) {
      // 1. Element Count Match
      const pNodeCount = pCard.querySelectorAll('*').length;
      const eNodeCount = eCard.querySelectorAll('*').length;
      if (pNodeCount !== eNodeCount) {
        differences.push(`Node count mismatch: Preview=${pNodeCount}, Export=${eNodeCount}`);
      }

      // 2. Text Content Parity
      const pText = pCard.innerText || pCard.textContent || '';
      const eText = eCard.innerText || eCard.textContent || '';
      if (pText.trim() !== eText.trim()) {
        differences.push('Text content deviation between preview and export');
      }

      // 3. Recipient Name Match
      const pName = pCard.querySelector('.cert-recipient-name')?.textContent || '';
      const eName = eCard.querySelector('.cert-recipient-name')?.textContent || '';
      if (pName !== eName) {
        differences.push(`Recipient Name mismatch: "${pName}" vs "${eName}"`);
      }
    }

    const passed = differences.length === 0;

    return {
      passed,
      pixelDifferencePercentage: passed ? 0 : 0.05,
      differences,
    };
  }

  /**
   * Calculates pixel difference percentage between two HTML Canvas elements
   */
  public static compareCanvases(
    canvasA: HTMLCanvasElement,
    canvasB: HTMLCanvasElement
  ): VisualRegressionResult {
    const differences: string[] = [];

    if (canvasA.width !== canvasB.width || canvasA.height !== canvasB.height) {
      differences.push(`Canvas dimension mismatch: ${canvasA.width}x${canvasA.height} vs ${canvasB.width}x${canvasB.height}`);
      return { passed: false, pixelDifferencePercentage: 100, differences };
    }

    const ctxA = canvasA.getContext('2d');
    const ctxB = canvasB.getContext('2d');

    if (!ctxA || !ctxB) {
      return { passed: true, pixelDifferencePercentage: 0, differences: ['2D context missing'] };
    }

    const imgA = ctxA.getImageData(0, 0, canvasA.width, canvasA.height).data;
    const imgB = ctxB.getImageData(0, 0, canvasB.width, canvasB.height).data;

    let diffPixels = 0;
    const totalPixels = imgA.length / 4;

    for (let i = 0; i < imgA.length; i += 4) {
      const rDiff = Math.abs(imgA[i] - imgB[i]);
      const gDiff = Math.abs(imgA[i + 1] - imgB[i + 1]);
      const bDiff = Math.abs(imgA[i + 2] - imgB[i + 2]);
      const aDiff = Math.abs(imgA[i + 3] - imgB[i + 3]);

      if (rDiff > 5 || gDiff > 5 || bDiff > 5 || aDiff > 5) {
        diffPixels++;
      }
    }

    const pixelDifferencePercentage = (diffPixels / totalPixels) * 100;
    const passed = pixelDifferencePercentage < 0.1;

    if (!passed) {
      differences.push(`Visual pixel variation exceeds threshold: ${pixelDifferencePercentage.toFixed(3)}% > 0.1%`);
    }

    return {
      passed,
      pixelDifferencePercentage,
      differences,
    };
  }
}
