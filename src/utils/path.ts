// Path utility for handling base paths and domain configuration
// This allows the site to work on GitHub Pages subdirectories and custom domains

/**
 * Configuration for different deployment environments
 */
const config = {
  // GitHub Pages configuration
  github: {
    site: 'https://ainglese-dev.github.io',
    base: '/moveo-demo-landing'
  },
  
  // Future custom domain configuration
  // Update this when you get your domain
  custom: {
    site: 'https://moveo-health.com', // PLACEHOLDER - Update with your actual domain
    base: ''
  }
};

/**
 * Get the current environment configuration
 */
function getConfig() {
  // Check if we have a custom domain environment variable
  const customDomain = import.meta.env.CUSTOM_DOMAIN;
  
  if (customDomain) {
    return {
      site: customDomain,
      base: ''
    };
  }
  
  // Default to GitHub Pages in production, local in development
  if (import.meta.env.PROD) {
    return config.github;
  }
  
  // Local development
  return {
    site: 'http://localhost:4321',
    base: ''
  };
}

/**
 * Get the base path for the current environment
 */
export function getBasePath(): string {
  return getConfig().base;
}

/**
 * Get the full site URL for the current environment
 */
export function getSiteUrl(): string {
  return getConfig().site;
}

/**
 * Create a path that works in all environments
 * @param path - The path to make base-aware (e.g., '/contacto', '/servicios')
 */
export function createPath(path: string): string {
  const basePath = getBasePath();
  
  // Remove leading slash from path if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Handle root path
  if (cleanPath === '' || cleanPath === 'index') {
    return basePath || '/';
  }
  
  // Combine base path with the route
  return `${basePath}/${cleanPath}`;
}

/**
 * Create an absolute URL for the current environment
 * @param path - The path to make into an absolute URL
 */
export function createUrl(path: string): string {
  const siteUrl = getSiteUrl();
  const fullPath = createPath(path);
  
  // Remove trailing slash from site URL and leading slash from path if both exist
  const cleanSiteUrl = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
  const cleanPath = fullPath.startsWith('/') ? fullPath : `/${fullPath}`;
  
  return `${cleanSiteUrl}${cleanPath}`;
}

/**
 * Get asset path (for favicons, images, etc.)
 */
export function getAssetPath(asset: string): string {
  // Remove leading slash from asset if present
  const cleanAsset = asset.startsWith('/') ? asset.slice(1) : asset;
  const basePath = getBasePath();
  
  if (basePath) {
    return `${basePath}/${cleanAsset}`;
  }
  
  return `/${cleanAsset}`;
}