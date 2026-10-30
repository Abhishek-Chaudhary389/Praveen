export const BOOKING_PHONE = '7767000838';
export const BOOKING_PHONE_INT = '917767000838';
export const BOOKING_PHONE_DISPLAY = '+91 77670 00838';
export const BOOKING_EMAIL = 'booking@parveenfleets.in';

/**
 * Dispatches any booking or reservation query simultaneously to:
 * 1. WhatsApp (+91 77670 00838)
 * 2. Email (booking@parveenfleets.in)
 */
export function sendBookingQuery({ subject, message, details }) {
  const waUrl = `https://wa.me/${BOOKING_PHONE_INT}?text=${encodeURIComponent(message)}`;
  const emailBody = details || message;
  const mailtoUrl = `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

  // 1. Open WhatsApp in a new tab
  try {
    window.open(waUrl, '_blank');
  } catch (err) {
    console.warn('Could not open WhatsApp window:', err);
  }

  // 2. Trigger Email client simultaneously
  setTimeout(() => {
    try {
      const a = document.createElement('a');
      a.href = mailtoUrl;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      console.warn('Could not trigger mailto:', err);
    }
  }, 350);
}
