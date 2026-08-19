/**
 * CertificateImageExporter.ts
 * Captures the locked 1400px x 990px certificate DOM element at 4x scale
 * using html2canvas and converts to high-resolution PNG or JPEG images.
 */

import html2canvas from 'html2canvas';
import { CertificateFontLoader } from './CertificateFontLoader';
import { certificateStyles } from '../../components/certificate/certificateStyles';

export class CertificateImageExporter {
  /**
   * Replaces unsupported CSS color functions like oklch or color-mix with rgb fallbacks
   * in cloned DOM nodes during canvas rendering.
   */
  private static sanitizeClonedDoc(clonedDoc: Document): void {
    try {
      const resolveColorValue = (colorStr: string): string => {
        try {
          const dummy = clonedDoc.createElement('div');
          dummy.style.color = 'rgb(0, 0, 0)';
          dummy.style.color = colorStr;
          clonedDoc.body.appendChild(dummy);
          const computed = clonedDoc.defaultView?.getComputedStyle(dummy).color;
          dummy.remove();
          if (
            computed &&
            !computed.includes('oklch') &&
            !computed.includes('color-mix') &&
            !computed.includes('light-dark')
          ) {
            return computed;
          }
        } catch {
          // fallback
        }
        return 'rgb(37, 99, 235)'; // Default blue
      };

      const replaceColorFunctions = (cssText: string): string => {
        if (
          !cssText ||
          (!cssText.includes('oklch') &&
            !cssText.includes('color-mix') &&
            !cssText.includes('light-dark'))
        ) {
          return cssText;
        }

        const keywords = ['oklch', 'color-mix', 'light-dark', 'lab', 'lch'];
        let result = '';
        let i = 0;

        while (i < cssText.length) {
          let matched = false;
          for (const kw of keywords) {
            if (
              cssText.startsWith(kw + '(', i) &&
              (i === 0 || !/[a-zA-Z0-9_-]/.test(cssText[i - 1]))
            ) {
              let depth = 0;
              let start = i;
              let end = i + kw.length;

              while (end < cssText.length) {
                if (cssText[end] === '(') depth++;
                else if (cssText[end] === ')') {
                  depth--;
                  if (depth === 0) {
                    end++;
                    break;
                  }
                }
                end++;
              }

              const fullFunc = cssText.slice(start, end);
              result += resolveColorValue(fullFunc);
              i = end;
              matched = true;
              break;
            }
          }

          if (!matched) {
            result += cssText[i];
            i++;
          }
        }

        return result;
      };

      // 1. Process style tags
      const styleNodes = Array.from(clonedDoc.querySelectorAll('style'));
      for (const styleNode of styleNodes) {
        if (styleNode.textContent) {
          styleNode.textContent = replaceColorFunctions(styleNode.textContent);
        }
      }

      // 2. Process inline style attributes
      const elementsWithStyle = Array.from(
        clonedDoc.querySelectorAll('[style]')
      ) as HTMLElement[];
      for (const el of elementsWithStyle) {
        const styleAttr = el.getAttribute('style');
        if (styleAttr) {
          el.setAttribute('style', replaceColorFunctions(styleAttr));
        }
      }
    } catch (err) {
      console.warn('CertificateImageExporter: Error sanitizing cloned styles:', err);
    }
  }

  /**
   * Captures HTML element into HTMLCanvasElement
   */
  public static async renderToCanvas(
    element: HTMLElement,
    scale = 4
  ): Promise<HTMLCanvasElement> {
    await CertificateFontLoader.waitUntilLoaded();

    const certElement =
      (element.querySelector('#certificate-export') as HTMLElement) ||
      (element.querySelector('.certificate-card') as HTMLElement) ||
      element;

    return await html2canvas(certElement, {
      scale,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      width: 1400,
      height: 990,
      windowWidth: 1400,
      windowHeight: 990,
      scrollX: 0,
      scrollY: 0,
      onclone: (clonedDoc) => {
        this.sanitizeClonedDoc(clonedDoc);

        // Copy ALL style and stylesheet link elements from document.head to clonedDoc.head
        const stylesAndLinks = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]'));
        stylesAndLinks.forEach((node) => {
          clonedDoc.head.appendChild(node.cloneNode(true));
        });

        // Inject master certificateStyles as the last style tag to take absolute priority
        const styleTag = clonedDoc.createElement('style');
        styleTag.id = 'cert-styles-master';
        styleTag.innerHTML = certificateStyles;
        clonedDoc.head.appendChild(styleTag);

        const clonedCert =
          (clonedDoc.querySelector('#certificate-export') as HTMLElement) ||
          (clonedDoc.querySelector('.certificate-card') as HTMLElement);

        if (clonedCert) {
          // Reset inline styles on strong elements to prevent html2canvas text misalignment
          const strongs = clonedCert.querySelectorAll('strong');
          strongs.forEach((st) => {
            st.style.display = 'inline';
            st.style.position = 'static';
            st.style.float = 'none';
            st.style.verticalAlign = 'baseline';
            st.style.color = '#1e3a8a';
            st.style.fontWeight = '800';
          });

          // Explicit layout stabilization on key typographic landmarks
          const mainTitle = clonedCert.querySelector('.cert-main-title') as HTMLElement;
          if (mainTitle) {
            mainTitle.style.display = 'block';
            mainTitle.style.lineHeight = '1.25';
            mainTitle.style.minHeight = '70px';
            mainTitle.style.marginBottom = '16px';
            mainTitle.style.padding = '0px';
          }

          const pillBadge = clonedCert.querySelector('.cert-pill-badge') as HTMLElement;
          if (pillBadge) {
            pillBadge.style.display = 'inline-flex';
            pillBadge.style.alignItems = 'center';
            pillBadge.style.justifyContent = 'center';
            pillBadge.style.textAlign = 'center';
            pillBadge.style.verticalAlign = 'middle';
            pillBadge.style.padding = pillBadge.classList.contains('km-text') ? '8px 28px' : '7px 32px 8px 32px';
            pillBadge.style.boxSizing = 'border-box';
            pillBadge.style.lineHeight = '1.2';
            pillBadge.style.position = 'relative';
            pillBadge.style.zIndex = '5';
          }

          const sigElem = clonedCert.querySelector('.cert-signature-font') as HTMLElement;
          if (sigElem) {
            sigElem.style.display = 'block';
            sigElem.style.lineHeight = '1.4';
            sigElem.style.minHeight = '62px';
            sigElem.style.paddingBottom = '6px';
            sigElem.style.marginBottom = '6px';
          }

          const dateElem = clonedCert.querySelector('.cert-date-value') as HTMLElement;
          if (dateElem) {
            dateElem.style.display = 'block';
            dateElem.style.lineHeight = '1.5';
            dateElem.style.minHeight = '26px';
            dateElem.style.marginBottom = '10px';
          }

          // Reset all parent positions up to body so clonedCert is visible at (0, 0)
          let current: HTMLElement | null = clonedCert;
          while (current && current !== clonedDoc.body) {
            current.style.position = 'static';
            current.style.left = '0px';
            current.style.top = '0px';
            current.style.margin = '0px';
            current.style.padding = '0px';
            current.style.transform = 'none';
            current.style.opacity = '1';
            current.style.visibility = 'visible';
            current = current.parentElement;
          }

          clonedDoc.body.style.margin = '0px';
          clonedDoc.body.style.padding = '0px';
          clonedDoc.body.style.overflow = 'hidden';
          clonedDoc.body.style.background = '#ffffff';

          clonedCert.style.position = 'absolute';
          clonedCert.style.left = '0px';
          clonedCert.style.top = '0px';
          clonedCert.style.width = '1400px';
          clonedCert.style.height = '990px';
          clonedCert.style.margin = '0px';
          clonedCert.style.transform = 'none';
          clonedCert.style.zIndex = '999999';
          clonedCert.style.opacity = '1';
          clonedCert.style.visibility = 'visible';
          clonedCert.style.display = 'flex';
        }
      },
    });
  }

  /**
   * Exports image file (PNG / JPEG) to user download
   */
  public static async exportImage(
    element: HTMLElement,
    format: 'png' | 'jpeg',
    filename: string,
    scale = 4
  ): Promise<void> {
    const canvas = await this.renderToCanvas(element, scale);
    const mimeType = format === 'png' ? 'image/png' : 'image/jpeg';
    const dataUrl = canvas.toDataURL(mimeType, 0.98);

    const link = document.createElement('a');
    link.download = `${filename}.${format}`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
