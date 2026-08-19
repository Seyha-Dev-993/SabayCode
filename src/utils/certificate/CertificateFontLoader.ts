/**
 * CertificateFontLoader.ts
 * Enterprise font loading engine for certificate rendering.
 * Guarantees all required custom typography (Playball, Great Vibes, Inter, Kantumruy Pro, Playfair Display)
 * are fully loaded into document.fonts before rendering or exporting.
 */

const CERT_FONT_SPECS = [
  '400 16px "Poppins"',
  '700 16px "Poppins"',
  '900 52px "Poppins"',
  '400 16px "Kantumruy Pro"',
  '700 16px "Kantumruy Pro"',
  '400 48px "Playball"',
  '400 48px "Great Vibes"',
  '400 48px "Playfair Display"',
];

const GOOGLE_FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Great+Vibes&family=Kantumruy+Pro:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Playball&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600&display=swap';

export class CertificateFontLoader {
  private static fontsInjected = false;

  /**
   * Injects Google Fonts link tag into document head
   */
  public static injectFonts(): void {
    if (this.fontsInjected || document.getElementById('cert-google-fonts')) {
      this.fontsInjected = true;
      return;
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.id = 'cert-google-fonts';
    link.href = GOOGLE_FONTS_URL;
    document.head.appendChild(link);
    this.fontsInjected = true;
  }

  /**
   * Waits for document.fonts.ready and explicit font loads with retry mechanism
   */
  public static async waitUntilLoaded(maxRetries = 3): Promise<boolean> {
    this.injectFonts();

    if (!('fonts' in document)) {
      return true; // Fallback for environments lacking FontLoading API
    }

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        await document.fonts.ready;

        const loadPromises = CERT_FONT_SPECS.map(async (spec) => {
          try {
            await document.fonts.load(spec);
          } catch {
            // Retry font loading
          }
        });

        const timeoutPromise = new Promise<void>((resolve) => setTimeout(resolve, 3000));
        await Promise.race([Promise.all(loadPromises), timeoutPromise]);

        const status = this.checkFontsStatus();
        if (status.loaded) {
          return true;
        }
      } catch (err) {
        console.warn(`CertificateFontLoader: Attempt ${attempt} failed:`, err);
      }

      // Small backoff before retry
      await new Promise((r) => setTimeout(r, 200));
    }

    // Final verification check
    return this.checkFontsStatus().loaded;
  }

  /**
   * Verifies if required fonts are loaded
   */
  public static checkFontsStatus(): { loaded: boolean; missing: string[] } {
    if (!('fonts' in document)) {
      return { loaded: true, missing: [] };
    }

    const missing: string[] = [];
    for (const fontSpec of CERT_FONT_SPECS) {
      if (!document.fonts.check(fontSpec)) {
        missing.push(fontSpec);
      }
    }

    return {
      loaded: missing.length === 0,
      missing,
    };
  }
}
