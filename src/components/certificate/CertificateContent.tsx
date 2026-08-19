/**
 * CertificateContent.tsx
 * Single Source of Truth Certificate Component.
 * Pixel-Perfect match to reference design: Geometric Bauhaus Grid Palette + Clean Corporate Typography.
 * Locked 1400px x 990px A4 Landscape Canvas.
 */

import React, { useEffect, useState } from 'react';
import { SabayCodeLogo } from '../SabayCodeLogo';
import { generateCertificateQRCode } from '../../utils/qrCodeGenerator';

export interface CertificateContentProps {
  studentName?: string;
  courseTitle?: string;
  courseName?: string;
  language?: 'en' | 'kh' | 'km';
  getFormattedDate?: () => string;
  issueDate?: string;
  certId?: string;
  certificateId?: string;
  instructorName?: string;
  instructorTitle?: string;
  tagline?: string;
  badgeText?: string;
  logoUrl?: string;
  recognitionText?: string;
  verificationUrl?: string;
}

const KHMER_MONTHS = ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'];
const KHMER_DIGITS = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];

const toKhmerNumber = (numStr: string | number): string => {
  return String(numStr).replace(/\d/g, (d) => KHMER_DIGITS[parseInt(d, 10)]);
};

const formatCertificateDate = (
  rawDate: string | undefined,
  isKhmer: boolean,
  getFormattedDate?: () => string
): string => {
  if (getFormattedDate) {
    return getFormattedDate();
  }
  if (!rawDate) {
    const now = new Date();
    if (isKhmer) {
      return `ថ្ងៃទី${toKhmerNumber(now.getDate())} ខែ${KHMER_MONTHS[now.getMonth()]} ឆ្នាំ${toKhmerNumber(now.getFullYear())}`;
    }
    return now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }

  // If rawDate already contains Khmer characters, return as is
  if (/[\u1780-\u17FF]/.test(rawDate)) {
    return rawDate;
  }

  if (isKhmer) {
    const parsed = new Date(rawDate);
    if (!isNaN(parsed.getTime())) {
      return `ថ្ងៃទី${toKhmerNumber(parsed.getDate())} ខែ${KHMER_MONTHS[parsed.getMonth()]} ឆ្នាំ${toKhmerNumber(parsed.getFullYear())}`;
    }
  }

  return rawDate;
};

const getKhmerBadgeText = (text: string): string => {
  const upper = (text || '').toUpperCase();
  if (upper.includes('ACHIEVEMENT')) return 'នៃការសម្រេចជោគជ័យ';
  if (upper.includes('COMPLETION')) return 'នៃការបញ្ចប់ការសិក្សា';
  if (upper.includes('EXCELLENCE')) return 'នៃឧត្តមភាពវិជ្ជាជីវៈ';
  if (upper.includes('MASTERY')) return 'នៃភាពស្ទាត់ជំនាញ';
  return text;
};

const getRecipientFontSize = (name: string, isKhmer: boolean): string => {
  const len = (name || '').trim().length;
  if (isKhmer) {
    if (len > 40) return '28px';
    if (len > 30) return '34px';
    if (len > 20) return '40px';
    if (len > 12) return '46px';
    return '52px';
  }
  if (len > 50) return '32px';
  if (len > 35) return '40px';
  if (len > 25) return '48px';
  if (len > 18) return '56px';
  return '64px';
};

export const CertificateContent: React.FC<CertificateContentProps> = ({
  studentName = 'Seyha Nan',
  courseTitle,
  courseName,
  language = 'en',
  getFormattedDate,
  issueDate,
  certId,
  certificateId,
  instructorName = 'Seyha Nan',
  instructorTitle = 'Lead Instructor & Founder',
  tagline = 'Learn • Build • Grow',
  badgeText = 'OF ACHIEVEMENT',
  logoUrl,
  recognitionText,
  verificationUrl,
}) => {
  const isKhmerLang = language === 'km' || language === 'kh';
  const isKhmerRecipientName = /[\u1780-\u17FF]/.test(studentName || '');

  const effectiveCourseName = courseName || courseTitle || (isKhmerLang ? 'ការអភិវឌ្ឍគេហទំព័រ Full-Stack & React' : 'Full-Stack Web Development & React');
  const effectiveCertId = certificateId || certId || 'SC-2026-000145';
  const cleanId = effectiveCertId.replace(/^SABAY-CERT-/, '').replace(/^SC-/, '');
  const formattedCertId = `SABAY-CERT-${cleanId}`;
  
  const effectiveDate = formatCertificateDate(issueDate, isKhmerLang, getFormattedDate);
  const effectiveVerifyUrl = verificationUrl || `https://sabaycode.com/certificate/${formattedCertId}`;

  const processTemplateVariables = (text?: string): string => {
    if (!text) return '';
    return text
      .replace(/\{\{\s*student_name\s*\}\}/g, studentName || '')
      .replace(/\{\{\s*course_name\s*\}\}/g, effectiveCourseName || '')
      .replace(/\{\{\s*issue_date\s*\}\}/g, effectiveDate || '')
      .replace(/\{\{\s*certificate_id\s*\}\}/g, formattedCertId || '')
      .replace(/\{\{\s*instructor_name\s*\}\}/g, instructorName || '')
      .replace(/\{\{\s*instructor_title\s*\}\}/g, instructorTitle || '')
      .replace(/\{\{\s*tagline\s*\}\}/g, tagline || '');
  };

  // Auto-translate default parameters if in Khmer mode
  const effectiveTagline = isKhmerLang && (!tagline || tagline === 'Learn • Build • Grow')
    ? 'រៀន • អភិវឌ្ឍ • រីកចម្រើន'
    : processTemplateVariables(tagline);

  const effectiveBadgeText = isKhmerLang
    ? (getKhmerBadgeText(badgeText) || 'នៃការសម្រេចជោគជ័យ')
    : processTemplateVariables(badgeText);

  const effectiveInstructorTitle = isKhmerLang && (!instructorTitle || instructorTitle === 'Lead Instructor & Founder')
    ? 'ប្រធានគ្រូបង្រៀន & ស្ថាបនិក'
    : processTemplateVariables(instructorTitle);

  const processedInstructorName = processTemplateVariables(instructorName);
  const processedCourseName = processTemplateVariables(effectiveCourseName);
  const processedRecognitionText = recognitionText ? processTemplateVariables(recognitionText) : null;

  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');

  useEffect(() => {
    generateCertificateQRCode(effectiveVerifyUrl).then((url) => {
      if (url) setQrCodeDataUrl(url);
    });
  }, [effectiveVerifyUrl]);

  return (
    <div id="certificate-export" className="certificate-card">
      {/* 1. VECTOR GEOMETRIC MOSAIC OVERLAY (Exact match to reference art) */}
      <svg className="cert-bg-svg" viewBox="0 0 1400 990" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* TOP-RIGHT MOSAIC GEOMETRIC GRID */}
        <g id="top-right-mosaic">
          {/* Row 1 */}
          <rect x="1000" y="0" width="135" height="95" fill="#1E3A8A" />
          <path d="M 1000 0 A 95 95 0 0 1 1135 95 L 1000 95 Z" fill="#22D3EE" />

          <rect x="1135" y="0" width="135" height="95" fill="#22D3EE" />
          <rect x="1270" y="0" width="130" height="95" fill="#1E3A8A" />

          {/* Row 2 */}
          <rect x="1135" y="95" width="135" height="105" fill="#22D3EE" />
          <rect x="1270" y="95" width="130" height="105" fill="#1E3A8A" />

          {/* Row 3 */}
          <rect x="1135" y="200" width="135" height="95" fill="#84CC16" />
          <rect x="1270" y="200" width="130" height="95" fill="#1E3A8A" />
          <path d="M 1270 295 L 1400 200 L 1400 295 Z" fill="#84CC16" />

          {/* Floating Dark Blue Dot */}
          <circle cx="1060" cy="150" r="22" fill="#1E3A8A" />
        </g>

        {/* BOTTOM-LEFT MOSAIC GEOMETRIC GRID */}
        <g id="bottom-left-mosaic">
          {/* Row 1 */}
          <rect x="0" y="740" width="100" height="100" fill="#22D3EE" />
          <path d="M 0 840 A 100 100 0 0 1 100 740 L 0 740 Z" fill="#1E3A8A" />
          <rect x="100" y="740" width="100" height="100" fill="#1E3A8A" />

          {/* Row 2 */}
          <rect x="0" y="840" width="100" height="80" fill="#1E3A8A" />
          <path d="M 0 840 L 100 920 L 0 920 Z" fill="#22D3EE" />
          <rect x="100" y="840" width="100" height="80" fill="#2563EB" />

          {/* Row 3 */}
          <rect x="0" y="920" width="100" height="70" fill="#84CC16" />
          <path d="M 0 920 A 70 70 0 0 0 70 990 L 0 990 Z" fill="#1E3A8A" />
          <rect x="100" y="920" width="100" height="70" fill="#22D3EE" />
          <path d="M 100 990 L 200 920 L 200 990 Z" fill="#84CC16" />

          {/* Floating Blue Dot */}
          <circle cx="235" cy="790" r="22" fill="#3B82F6" />
        </g>

        {/* BOTTOM-RIGHT MOSAIC GEOMETRIC GRID */}
        <g id="bottom-right-mosaic">
          <rect x="1270" y="470" width="130" height="130" fill="#1E3A8A" />
          <path d="M 1270 470 L 1400 600 L 1270 600 Z" fill="#22D3EE" />

          <rect x="1170" y="600" width="100" height="140" fill="#2563EB" />
          <path d="M 1170 740 L 1270 600 L 1270 740 Z" fill="#22D3EE" />
          <rect x="1270" y="600" width="130" height="140" fill="#1E3A8A" />

          <rect x="1170" y="740" width="100" height="120" fill="#22D3EE" />
          <rect x="1270" y="740" width="130" height="120" fill="#1E3A8A" />
          <path d="M 1270 860 L 1400 740 L 1400 860 Z" fill="#84CC16" />

          <rect x="1170" y="860" width="100" height="130" fill="#84CC16" />
          <path d="M 1170 860 L 1270 990 L 1170 990 Z" fill="#22D3EE" />
          <rect x="1270" y="860" width="130" height="130" fill="#1E3A8A" />

          {/* Floating Lime Green Dot */}
          <circle cx="1360" cy="440" r="22" fill="#84CC16" />
        </g>

        {/* ACCENT ROW OF SMALL SQUARES */}
        {/* Top Accent Row */}
        <g id="top-square-row">
          <rect x="850" y="58" width="12" height="12" fill="#22D3EE" />
          <rect x="872" y="58" width="12" height="12" fill="#1E3A8A" />
          <rect x="894" y="58" width="12" height="12" fill="#84CC16" />
          <rect x="916" y="58" width="12" height="12" fill="#60A5FA" />
        </g>

        {/* Left Margin Accent Column */}
        <g id="left-square-col">
          <rect x="46" y="415" width="12" height="12" fill="#22D3EE" />
          <rect x="46" y="460" width="12" height="12" fill="#1E3A8A" />
          <rect x="46" y="505" width="12" height="12" fill="#84CC16" />
          <rect x="46" y="550" width="12" height="12" fill="#60A5FA" />
        </g>

        {/* Bottom Accent Row */}
        <g id="bottom-square-row">
          <rect x="910" y="925" width="12" height="12" fill="#22D3EE" />
          <rect x="932" y="925" width="12" height="12" fill="#1E3A8A" />
          <rect x="954" y="925" width="12" height="12" fill="#84CC16" />
          <rect x="976" y="925" width="12" height="12" fill="#60A5FA" />
        </g>
      </svg>

      {/* 2. TOP BRAND LOGO SECTION */}
      <div className="cert-header">
        <div className="cert-brand-block">
          {logoUrl ? (
            <img src={logoUrl} alt="Logo" className="cert-logo-img" />
          ) : (
            <SabayCodeLogo size={44} showText={true} showSubtitle={true} subtitle={effectiveTagline} textColor="dark" />
          )}
        </div>

        {/* Verification Seal */}
        <div className="cert-seal-stamp">
          <span className={`cert-seal-text ${isKhmerLang ? 'km-seal-text' : ''}`}>
            {isKhmerLang ? (
              <>បញ្ជាក់<br/>ផ្លូវការ</>
            ) : (
              <>OFFICIAL<br/>VERIFIED</>
            )}
          </span>
        </div>
      </div>

      {/* 3. MAIN CENTER CONTENT SECTION */}
      <div className="cert-center-block">
        {/* CERTIFICATE Title */}
        <h1 className={`cert-main-title ${isKhmerLang ? 'km-title' : ''}`}>
          {isKhmerLang ? 'វិញ្ញាបនបត្រ' : 'CERTIFICATE'}
        </h1>

        {/* Pill Badge */}
        <div className={`cert-pill-badge cert-award-badge ${isKhmerLang ? 'km-text' : ''}`}>
          <span>{effectiveBadgeText}</span>
        </div>

        {/* Subtitle Line */}
        <p className={`cert-subtitle-presented ${isKhmerLang ? 'km-text' : ''}`}>
          {isKhmerLang
            ? 'វិញ្ញាបនបត្រនេះត្រូវបានប្រគល់ជូនដោយមោទនភាពចំពោះ'
            : 'THIS CERTIFICATE IS PROUDLY PRESENTED FOR HONORABLE ACHIEVEMENT TO'}
        </p>

        {/* Recipient Name in Cursive Script */}
        <div
          className={`cert-recipient-name cert-recipient-name-script ${isKhmerRecipientName ? 'km-text' : ''}`}
          style={{
            fontSize: getRecipientFontSize(studentName, isKhmerRecipientName),
            fontFamily: isKhmerRecipientName
              ? "'Kantumruy Pro', 'Poppins', sans-serif"
              : "'Playball', 'Great Vibes', 'Playfair Display', cursive, sans-serif",
            letterSpacing: isKhmerRecipientName ? 'normal' : undefined,
          }}
        >
          {studentName || 'Student Name'}
        </div>

        {/* Solid Underline */}
        <div className="cert-divider-line"></div>

        {/* Description Text */}
        <p className={`cert-description-para cert-description-text ${isKhmerLang ? 'km-text' : ''}`}>
          {processedRecognitionText ? (
            processedRecognitionText
          ) : isKhmerLang ? (
            <>
              សម្រាប់ការបញ្ចប់ដោយជោគជ័យនូវវគ្គសិក្សាកម្រិតអាជីពលើប្រធានបទ{' '}
              <strong>{processedCourseName}</strong> ដោយទទួលបានលទ្ធផលបច្ចេកទេស និងការតស៊ូព្យាយាមយ៉ាងអស្ចារ្យក្រោមក្របខ័ណ្ឌសិក្សាទ្វិភាសាសាបាយកូដ។
            </>
          ) : (
            <>
              This certifies that <strong>{studentName}</strong> has successfully completed the professional curriculum in{' '}
              <strong>{processedCourseName}</strong> with outstanding technical performance, dedication, and practical mastery under the SabayCode Platform.
            </>
          )}
        </p>
      </div>

      {/* 4. FOOTER & SIGNATURES SECTION */}
      <div className="cert-footer-row">
        {/* Bottom Left: Issue Date & Cert Verification */}
        <div className="cert-footer-col-left cert-meta-item">
          <div className={`cert-date-value ${isKhmerLang ? 'km-text' : ''}`}>{effectiveDate}</div>
          <div className="cert-footer-underline"></div>
          <div className={`cert-footer-label ${isKhmerLang ? 'km-text' : ''}`}>
            {isKhmerLang ? 'កាលបរិច្ឆេទ' : 'DATE'}
          </div>
          <div className="cert-id-value">
            {isKhmerLang ? 'លេខសម្គាល់:' : 'ID:'}{' '}
            <span className="cert-id-highlight">{formattedCertId}</span>
          </div>
        </div>

        {/* Bottom Center: QR Code Verification Badge */}
        <div className="cert-footer-col-center">
          <div className="cert-qr-container cert-qr-block">
            {qrCodeDataUrl ? (
              <img src={qrCodeDataUrl} alt="QR Verification" className="cert-qr-image" />
            ) : (
              <svg width="48" height="48" viewBox="0 0 100 100" fill="none">
                <rect width="100" height="100" fill="#FFFFFF" />
                <path d="M 10 10 H 40 V 40 H 10 Z M 20 20 V 30 H 30 V 20 Z" fill="#1E3A8A" />
                <path d="M 60 10 H 90 V 40 H 60 Z M 70 20 V 30 H 80 V 20 Z" fill="#1E3A8A" />
                <path d="M 10 60 H 40 V 90 H 10 Z M 20 70 V 80 H 30 V 70 Z" fill="#1E3A8A" />
              </svg>
            )}
          </div>
          <span className={`cert-qr-label ${isKhmerLang ? 'km-text' : ''}`}>
            {isKhmerLang ? 'ស្កេនដើម្បីផ្ទៀងផ្ទាត់' : 'SCAN TO VERIFY'}
          </span>
        </div>

        {/* Bottom Right: Signature Block */}
        <div className="cert-footer-col-right cert-sig-item">
          <div className="cert-signature-font">
            {processedInstructorName}
          </div>
          <div className="cert-footer-underline"></div>
          <div className={`cert-footer-label ${isKhmerLang ? 'km-text' : ''}`}>
            {isKhmerLang ? 'ហត្ថលេខា' : 'SIGNATURE'}
          </div>
          <div className={`cert-instructor-text ${isKhmerLang ? 'km-text' : ''}`}>
            {processedInstructorName} • <span className="cert-instructor-title">{effectiveInstructorTitle}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
