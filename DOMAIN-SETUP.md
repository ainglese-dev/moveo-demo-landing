# Domain Configuration Guide

This guide explains how to switch between GitHub Pages and a custom domain for the MOVEO landing page.

## Current Setup

The site is currently configured to work on:
- **Development**: `http://localhost:4321/` (local development)
- **Production**: `https://ainglese-dev.github.io/moveo-demo-landing/` (GitHub Pages)

## Switching to a Custom Domain

When you're ready to use a custom domain (e.g., `https://moveo-health.com`), follow these steps:

### 1. Environment Variable Method (Recommended)

Set the `CUSTOM_DOMAIN` environment variable:

```bash
# For production builds
CUSTOM_DOMAIN=https://moveo-health.com npm run build

# Or set it in your deployment environment
export CUSTOM_DOMAIN=https://moveo-health.com
```

### 2. Manual Configuration Method

Edit `src/utils/path.ts` and update the custom domain configuration:

```typescript
// Update this section in src/utils/path.ts
custom: {
  site: 'https://your-actual-domain.com', // Replace with your domain
  base: ''
}
```

## How It Works

The path utility (`src/utils/path.ts`) automatically handles:

1. **Base Path Generation**: 
   - GitHub Pages: `/moveo-demo-landing/contacto`
   - Custom Domain: `/contacto`

2. **Asset Paths**: 
   - GitHub Pages: `/moveo-demo-landing/favicon.svg`
   - Custom Domain: `/favicon.svg`

3. **Navigation Links**: All links automatically work in both environments

## Benefits

✅ **No Code Changes**: Switch environments with just an environment variable
✅ **Development Ready**: Local development works seamlessly
✅ **SEO Friendly**: Proper canonical URLs in all environments
✅ **Future Proof**: Easy transition from GitHub Pages to custom domain

## Testing

### GitHub Pages (Current)
Visit: `https://ainglese-dev.github.io/moveo-demo-landing/`
All navigation should work correctly within the subdirectory.

### Custom Domain (Future)
When you set up your custom domain, all links will automatically work without the subdirectory prefix.

## Deployment Notes

- **GitHub Pages**: No changes needed, works automatically
- **Custom Domain**: Set `CUSTOM_DOMAIN` environment variable before building
- **Build Systems**: The configuration works with any static site host (Netlify, Vercel, etc.)