/**
 * FontLoader.ts
 * Backwards compatibility wrapper for CertificateFontLoader.
 */

import { CertificateFontLoader } from './CertificateFontLoader';

export class FontLoader {
  public static injectFonts(): void {
    CertificateFontLoader.injectFonts();
  }

  public static async waitUntilLoaded(): Promise<boolean> {
    return await CertificateFontLoader.waitUntilLoaded();
  }

  public static checkFontsStatus(): { loaded: boolean; missing: string[] } {
    return CertificateFontLoader.checkFontsStatus();
  }
}
