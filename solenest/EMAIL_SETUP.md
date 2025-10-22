# Email Functionality Setup Guide

This guide will help you set up the email functionality for your Solenest website using EmailJS.

## 🚀 Quick Setup

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create an Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

### 3. Create an Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

**Template Settings:**
- **Template Name**: Contact Form
- **Template ID**: contact_form (or any ID you prefer)

**Email Template Content:**
```
Subject: New Contact Form Submission from {{from_name}}

Hello {{to_name}},

You have received a new message through your website contact form:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
Solenest Website Contact Form

Reply to: {{reply_to}}
```

### 4. Get Your Credentials
1. Go to **Account** → **General**
2. Note down your **Public Key** (User ID)
3. Note down your **Service ID** (from step 2)
4. Note down your **Template ID** (from step 3)

### 5. Configure Environment Variables
1. Create a `.env` file in your project root (copy from `env.example`)
2. Add your EmailJS credentials:

```env
# EmailJS Configuration
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_USER_ID=your_user_id_here
```

### 6. Test the Email Functionality
1. Start your development server: `npm run dev`
2. Fill out the contact form on your website
3. Submit the form
4. Check if you receive the email

## 🔧 Troubleshooting

### Common Issues:

1. **"EmailJS configuration is incomplete"**
   - Check that all environment variables are set correctly
   - Make sure the `.env` file is in the project root
   - Restart your development server after adding environment variables

2. **"Failed to send email"**
   - Verify your EmailJS service is properly configured
   - Check that your email template ID matches the one in your environment variables
   - Ensure your email service is active in EmailJS dashboard

3. **Environment variables not loading**
   - Make sure your `.env` file starts with `VITE_`
   - Restart your development server
   - Check that the `.env` file is not in `.gitignore`

### Testing Steps:

1. **Local Testing:**
   ```bash
   npm run dev
   ```
   - Open http://localhost:5173
   - Navigate to the contact section
   - Fill out and submit the form
   - Check your email inbox

2. **Production Testing:**
   ```bash
   npm run build
   npm run preview
   ```
   - Test the same process on the production build
   - Deploy to your hosting platform
   - Test on the live website

## 📧 Email Template Variables

The contact form sends these variables to your email template:

- `{{from_name}}` - Sender's full name (First + Last name)
- `{{from_email}}` - Sender's email address
- `{{subject}}` - Subject line (defaults to "Contact Form Submission")
- `{{message}}` - The message content
- `{{to_name}}` - Recipient name (set to "Solenest Team")
- `{{reply_to}}` - Sender's email for easy replies

## 🔒 Security Notes

- Never commit your `.env` file to version control
- EmailJS public keys are safe to use in frontend applications
- The free tier includes 200 emails per month
- For production, consider upgrading to a paid plan for higher limits

## 📱 Features Included

✅ **Form Validation** - Client-side validation for required fields and email format
✅ **Loading States** - Visual feedback during email sending
✅ **Success/Error Messages** - Toast notifications for user feedback
✅ **Responsive Design** - Works perfectly on all devices
✅ **Floating Labels** - Modern form UI with animated labels
✅ **Auto-reset** - Form clears after successful submission

## 🎯 Next Steps

1. Set up your EmailJS account and service
2. Configure the environment variables
3. Test the functionality locally
4. Deploy to production
5. Monitor email delivery and user feedback

For any issues or questions, refer to the [EmailJS documentation](https://www.emailjs.com/docs/) or check the browser console for error messages.
