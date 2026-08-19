/**
 * certificateStyles.ts
 * Strict CSS rules for the 1400px x 990px locked certificate canvas.
 * Exact visual match to the geometric Bauhaus reference image design.
 */

export const certificateStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playball&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Kantumruy+Pro:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

  #certificate-export.certificate-card,
  .certificate-card {
    width: 1400px !important;
    height: 990px !important;
    min-width: 1400px !important;
    max-width: 1400px !important;
    min-height: 990px !important;
    max-height: 990px !important;
    background: #ffffff !important;
    position: relative !important;
    overflow: hidden !important;
    font-family: 'Poppins', 'Kantumruy Pro', -apple-system, BlinkMacSystemFont, sans-serif !important;
    border: 1px solid #cbd5e1 !important;
    box-sizing: border-box !important;
    padding: 55px 90px 60px 90px !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
    color: #0f172a !important;
    z-index: 1 !important;
    text-align: left !important;
    margin: 0 !important;
    transform-origin: top left !important;
  }

  /* Disable transitions inside certificate */
  .certificate-card * {
    box-sizing: border-box !important;
    flex-wrap: nowrap !important;
  }

  /* Vector Background SVG Overlay */
  .cert-bg-svg {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 1400px !important;
    height: 990px !important;
    pointer-events: none !important;
    z-index: 0 !important;
  }

  /* Header Section */
  .cert-header {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    position: relative !important;
    z-index: 10 !important;
    width: 1220px !important;
    height: 70px !important;
  }

  .cert-brand-block {
    display: flex !important;
    align-items: center !important;
    gap: 12px !important;
  }

  .cert-logo-img {
    height: 48px !important;
    max-height: 48px !important;
    width: auto !important;
    max-width: 220px !important;
    object-fit: contain !important;
  }

  .cert-seal-stamp {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    width: 48px !important;
    height: 48px !important;
    border-radius: 9999px !important;
    border: 2px solid #1e3a8a !important;
    background: #eff6ff !important;
    color: #1e3a8a !important;
    font-weight: 800 !important;
    font-size: 8px !important;
    text-align: center !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05) !important;
    flex-shrink: 0 !important;
    margin-right: 16px !important;
  }

  .cert-seal-text {
    text-transform: uppercase !important;
    font-weight: 900 !important;
    line-height: 1.15 !important;
    font-size: 8px !important;
    letter-spacing: 0.05em !important;
    font-family: 'Poppins', sans-serif !important;
  }

  .cert-seal-text.km-seal-text {
    font-family: 'Kantumruy Pro', sans-serif !important;
    font-size: 7.5px !important;
    line-height: 1.25 !important;
    font-weight: 700 !important;
    letter-spacing: 0 !important;
    text-transform: none !important;
  }

  /* Center Content Block */
  .cert-center-block {
    position: relative !important;
    z-index: 10 !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
    width: 1220px !important;
    margin-top: 10px !important;
    margin-bottom: 10px !important;
  }

  .cert-main-title {
    font-size: 56px !important;
    font-weight: 800 !important;
    letter-spacing: 0.12em !important;
    color: #1e3a8a !important;
    font-family: 'Poppins', sans-serif !important;
    line-height: 1.25 !important;
    min-height: 70px !important;
    margin: 0 0 16px 0 !important;
    padding: 0 !important;
    display: block !important;
    text-transform: uppercase !important;
  }

  .cert-main-title.km-title {
    font-family: 'Kantumruy Pro', sans-serif !important;
    font-size: 46px !important;
    font-weight: 800 !important;
    letter-spacing: 0.02em !important;
    line-height: 1.3 !important;
    min-height: 60px !important;
    margin: 0 0 14px 0 !important;
    padding: 0 !important;
    display: block !important;
    text-transform: none !important;
  }

  .cert-pill-badge {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    background: #2563eb !important;
    color: #ffffff !important;
    font-size: 13.5px !important;
    font-weight: 700 !important;
    letter-spacing: 0.14em !important;
    padding: 7px 32px 8px 32px !important;
    border-radius: 9999px !important;
    text-transform: uppercase !important;
    text-align: center !important;
    vertical-align: middle !important;
    box-shadow: 0 4px 14px rgba(37, 99, 235, 0.25) !important;
    font-family: 'Poppins', sans-serif !important;
    line-height: 1.2 !important;
    margin: 0 auto !important;
    position: relative !important;
    z-index: 5 !important;
    box-sizing: border-box !important;
  }

  .cert-pill-badge span {
    display: inline-block !important;
    line-height: 1.2 !important;
    vertical-align: middle !important;
  }

  .cert-pill-badge.km-text {
    font-family: 'Kantumruy Pro', sans-serif !important;
    font-size: 13px !important;
    letter-spacing: 0 !important;
    padding: 8px 28px !important;
    text-transform: none !important;
  }

  .cert-subtitle-presented {
    font-size: 14px !important;
    font-weight: 800 !important;
    letter-spacing: 0.08em !important;
    color: #1e3a8a !important;
    text-transform: uppercase !important;
    margin-top: 24px !important;
    margin-bottom: 18px !important;
    line-height: 1.4 !important;
    min-height: 20px !important;
    display: block !important;
    position: relative !important;
    font-family: 'Poppins', sans-serif !important;
  }

  .cert-recipient-name-script {
    font-weight: normal !important;
    color: #1e3a8a !important;
    line-height: 1.3 !important;
    min-height: 64px !important;
    margin: 0 0 6px 0 !important;
    padding-bottom: 4px !important;
    white-space: nowrap !important;
    overflow: visible !important;
    display: block !important;
    position: relative !important;
  }

  .cert-recipient-name-script.km-text {
    font-weight: 700 !important;
  }

  .cert-divider-line,
  .cert-line-navy {
    width: 480px !important;
    height: 3px !important;
    background: #1e3a8a !important;
    margin: 8px auto 22px auto !important;
    border-radius: 2px !important;
    display: block !important;
    clear: both !important;
  }

  .cert-description-para {
    width: 820px !important;
    font-size: 15px !important;
    line-height: 1.8 !important;
    color: #475569 !important;
    text-align: center !important;
    margin: 0 auto !important;
    letter-spacing: normal !important;
    word-break: normal !important;
    white-space: normal !important;
    display: block !important;
    position: relative !important;
    clear: both !important;
    font-family: 'Poppins', 'Kantumruy Pro', sans-serif !important;
  }

  .cert-description-para strong,
  .certificate-card strong {
    font-weight: 800 !important;
    color: #1e3a8a !important;
    display: inline !important;
    position: static !important;
    float: none !important;
    margin: 0 !important;
    padding: 0 !important;
    line-height: inherit !important;
    font-family: inherit !important;
    letter-spacing: inherit !important;
    vertical-align: baseline !important;
  }

  /* Khmer text protection */
  .km-text,
  .certificate-card .km-text {
    letter-spacing: normal !important;
    text-transform: none !important;
    font-family: 'Kantumruy Pro', sans-serif !important;
  }

  .cert-description-para.km-text strong,
  .certificate-card .km-text strong {
    font-family: 'Kantumruy Pro', 'Poppins', sans-serif !important;
    font-weight: 800 !important;
    color: #1e3a8a !important;
    display: inline !important;
  }

  /* Footer & Signatures Row - Fixed to 860px centered to clear bottom-left (235px) and bottom-right (1170px) vector graphics */
  .cert-footer-row {
    position: relative !important;
    z-index: 10 !important;
    display: flex !important;
    justify-content: space-between !important;
    align-items: flex-end !important;
    width: 860px !important;
    margin: 0 auto !important;
    padding-bottom: 10px !important;
  }

  .cert-footer-col-left {
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start !important;
    text-align: left !important;
    width: 280px !important;
  }

  .cert-footer-col-center {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    width: 200px !important;
    text-align: center !important;
  }

  .cert-footer-col-right {
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-end !important;
    text-align: right !important;
    width: 280px !important;
  }

  .cert-date-value {
    font-size: 15px !important;
    font-weight: 700 !important;
    color: #0f172a !important;
    line-height: 1.5 !important;
    min-height: 26px !important;
    margin: 0 0 10px 0 !important;
    padding: 0 !important;
    font-family: 'Poppins', sans-serif !important;
    display: block !important;
  }

  .cert-footer-underline {
    width: 220px !important;
    height: 2px !important;
    background: #1e3a8a !important;
    margin: 0 0 10px 0 !important;
    display: block !important;
    border-radius: 1px !important;
  }

  .cert-footer-col-right .cert-footer-underline {
    margin-left: auto !important;
    margin-right: 0 !important;
  }

  .cert-footer-label {
    font-size: 13px !important;
    font-weight: 800 !important;
    color: #1e3a8a !important;
    letter-spacing: 0.12em !important;
    text-transform: uppercase !important;
    font-family: 'Poppins', sans-serif !important;
  }

  .cert-footer-label.km-text {
    font-family: 'Kantumruy Pro', sans-serif !important;
    font-size: 13px !important;
    letter-spacing: 0.02em !important;
    text-transform: none !important;
    font-weight: 800 !important;
  }

  .cert-id-value {
    font-size: 10px !important;
    color: #94a3b8 !important;
    font-family: monospace !important;
    margin-top: 4px !important;
  }

  .cert-id-highlight {
    color: #1e3a8a !important;
    font-weight: 700 !important;
  }

  .cert-qr-container {
    padding: 6px !important;
    background: #ffffff !important;
    border: 1.5px solid #cbd5e1 !important;
    border-radius: 12px !important;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05) !important;
    width: 66px !important;
    height: 66px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

  .cert-qr-image {
    width: 52px !important;
    height: 52px !important;
    object-fit: contain !important;
  }

  .cert-qr-label {
    font-size: 9px !important;
    font-weight: 800 !important;
    color: #64748b !important;
    text-transform: uppercase !important;
    letter-spacing: 0.1em !important;
    margin-top: 6px !important;
    font-family: 'Poppins', sans-serif !important;
  }

  .cert-qr-label.km-text {
    font-family: 'Kantumruy Pro', sans-serif !important;
    font-size: 9.5px !important;
    letter-spacing: 0 !important;
    text-transform: none !important;
    font-weight: 700 !important;
  }

  .cert-signature-font {
    font-size: 44px !important;
    color: #1e3a8a !important;
    line-height: 1.4 !important;
    min-height: 62px !important;
    padding-bottom: 6px !important;
    margin: 0 0 6px 0 !important;
    white-space: nowrap !important;
    overflow: visible !important;
    display: block !important;
    font-family: 'Playball', 'Great Vibes', cursive, sans-serif !important;
  }

  .cert-instructor-text {
    font-size: 11px !important;
    font-weight: 600 !important;
    color: #475569 !important;
    margin-top: 4px !important;
    font-family: 'Poppins', sans-serif !important;
  }

  .cert-instructor-title {
    color: #94a3b8 !important;
  }
`;

