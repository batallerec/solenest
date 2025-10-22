/**
 * Email Service using EmailJS
 * Handles sending emails through the contact form
 */

import emailjs from '@emailjs/browser'

// EmailJS configuration
const EMAILJS_CONFIG = {
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  USER_ID: import.meta.env.VITE_EMAILJS_USER_ID
}

/**
 * Initialize EmailJS with the public key
 */
const initializeEmailJS = () => {
  if (EMAILJS_CONFIG.PUBLIC_KEY) {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
  } else {
    console.warn('EmailJS Public Key not found. Please check your environment variables.')
  }
}

/**
 * Send email through EmailJS
 * @param {Object} templateParams - Email template parameters
 * @returns {Promise} - EmailJS send promise
 */
export const sendEmail = async (templateParams) => {
  try {
    // Initialize EmailJS
    initializeEmailJS()

    // Validate required configuration
    if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID) {
      throw new Error('EmailJS configuration is incomplete. Please check your environment variables.')
    }

    // Send email
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.USER_ID || EMAILJS_CONFIG.PUBLIC_KEY
    )

    return {
      success: true,
      message: 'Email sent successfully!',
      response
    }
  } catch (error) {
    console.error('Email sending failed:', error)
    return {
      success: false,
      message: error.message || 'Failed to send email. Please try again.',
      error
    }
  }
}

/**
 * Format contact form data for email template
 * @param {Object} formData - Contact form data
 * @returns {Object} - Formatted template parameters
 */
export const formatContactFormData = (formData) => {
  return {
    from_name: `${formData.firstName} ${formData.lastName}`,
    from_email: formData.email,
    subject: formData.subject || 'Contact Form Submission',
    message: formData.message,
    to_name: 'Solenest Team', // Recipient name
    reply_to: formData.email
  }
}

export default {
  sendEmail,
  formatContactFormData
}
