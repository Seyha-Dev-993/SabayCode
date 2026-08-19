import QRCode from 'qrcode';

/**
 * Generates a high-definition QR Code Data URL for certificate verification URLs
 */
export async function generateCertificateQRCode(
  verificationUrl: string
): Promise<string> {
  try {
    const dataUrl = await QRCode.toDataURL(verificationUrl, {
      width: 300,
      margin: 1,
      color: {
        dark: '#0F172A', // Slate-900
        light: '#FFFFFF', // Transparent / White
      },
      errorCorrectionLevel: 'H',
    });
    return dataUrl;
  } catch (err) {
    console.error('Failed to generate QR Code:', err);
    return '';
  }
}
