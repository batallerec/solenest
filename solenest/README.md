# Solenest - Premium Clog Slippers Website

A modern, responsive advertisement website for Solenest business-casual clog slippers built with Vite + React + Tailwind CSS.

## Features

- **Modern Design**: Clean, minimalist design with warm neutral tones (beige, brown, cream)
- **Responsive Layout**: Mobile-first design that works perfectly on all devices
- **Smooth Animations**: Hover effects, smooth scrolling, and subtle transitions
- **Accessibility**: Optimized for accessibility and fast loading
- **SEO Ready**: Proper meta tags and semantic HTML structure

## Sections

1. **Hero Section**: Tagline "Where Comfort Meets Style" with product showcase
2. **About Section**: Introduction to Solenest and unique value propositions
3. **Features Section**: Benefits with icons/cards (suede, cork soles, adjustable fit)
4. **Product Gallery**: Featured products with pricing and color options
5. **Contact/Footer**: Contact form, business information, and newsletter signup

## Technology Stack

- **Vite**: Fast build tool and development server
- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Inter Font**: Clean, modern typography

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd solenest-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
solenest-website/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Features.jsx
│   │   ├── ProductGallery.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Customization

### Colors

The color palette is defined in `tailwind.config.js`:

- **Primary**: Warm brown tones (#8B6F5B, #5C4033, etc.)
- **Accent**: Mustard yellow tones (#D4A74B, etc.)
- **Background**: Light beige/cream tones

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Animations

Custom animations are defined in the Tailwind config:
- `fade-in`: Fade in effect
- `slide-up`: Slide up with fade
- `float`: Floating animation for product images

## Business Information

**Brand**: Solenest  
**Tagline**: "Where Comfort Meets Style"  
**Product**: Business-Casual Clogs Slippers  
**Target Market**: Students, young professionals, hybrid/remote workers, style-conscious adults aged 15–45

## Contact Information

- **Email**: hello@solenest.com
- **Phone**: +63 917 123 4567
- **Address**: Manila, Philippines

## License

This project is created for Solenest business use.
