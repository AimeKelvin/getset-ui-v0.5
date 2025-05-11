import * as QRCode from 'qrcode';
import { createHash, randomBytes } from 'crypto';

/**
 * Generates a secure, salted hash from the pass code
 */
function generateSecureHash(code: string): string {
  const salt = randomBytes(8).toString('hex'); // Shorter salt for frontend perf
  return createHash('sha256').update(code + salt).digest('hex');
}

/**
 * Generates a QR code as a data URL
 */
export async function generateQRCodeDataUrl(code: string): Promise<string> {
  const secureHash = generateSecureHash(code);
  return await QRCode.toDataURL(secureHash);
}
