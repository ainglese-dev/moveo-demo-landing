# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a demo landing page for MOVEO, a health service for elderly adults in Bogotá, Colombia. The site should be built as a static multi-page website with Spanish content focused on converting visitors into consultation bookings.

## Recommended Tech Stack (from PRD)

- **Primary**: Astro (static, content-first, good for SEO)
- **Alternative**: Vite + lightweight framework if interactivity needed
- **Deployment**: GitHub Actions → build → deploy to `gh-pages`
- **Forms**: Netlify forms or simple serverless webhook → Google Sheets/email

## Development Commands

When implementing the project with Astro:
```bash
npm create astro@latest .
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands
```

## Key Requirements

### Pages Structure
- Home (Hero with looping MP4/GIF background)
- Servicios (program details)
- Sobre (credentials, approach)
- Testimonios (placeholders)
- Contacto (form + WhatsApp button)
- Legal (Habeas Data/privacy)

### Primary CTA
- WhatsApp: `+57 3142265559`
- Contact form fields: nombre del adulto, relación con el adulto, teléfono/WhatsApp, comentario

### Color Palette
- Deep Blue: PANTONE 2748C
- Bright Blue: PANTONE 2738C  
- Purple: PANTONE 274BC
- Yellow: PANTONE 12-C
- Additional hex codes: #FFF241, #A85FF7, #8A30FF, #3A50FF, #FF564C
- Note: Several hex codes in PRD appear malformed and need verification

### Design Guidelines
- Typography: Inter or Poppins, ≥18px body text for accessibility
- Buttons: large, high-contrast (yellow accent on dark background)
- Hero background: light motion video, 1280×720, 5-8s duration, <3MB
- Tone: warm, clinical-friendly, professional

### Content Language
All content is in Spanish - refer to PRD.md for complete copy text for each page section.

## Deployment Target

Live demo should be deployed to: `https://ainglese-dev.github.io/moveo-demo-landing/`

## Forms Integration

Contact form should capture leads and integrate with WhatsApp CTA for consultation booking.