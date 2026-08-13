import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

function seoFiles(siteUrl) {
  const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n  <url>\n    <loc>${siteUrl}/</loc>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n    <xhtml:link rel="alternate" hreflang="es" href="${siteUrl}/" />\n    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/" />\n  </url>\n</urlset>\n`;
  const files = { '/robots.txt': ['text/plain', robots], '/sitemap.xml': ['application/xml', sitemap] };

  return {
    name: 'seo-files',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const file = files[req.url];
        if (!file) return next();
        res.setHeader('Content-Type', file[0]);
        res.end(file[1]);
      });
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots });
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  if (!env.VITE_SITE_URL) throw new Error('VITE_SITE_URL is not set in frontend/.env');
  return {
    plugins: [react(), seoFiles(env.VITE_SITE_URL)],
    server: {
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: true,
      hmr: { clientPort: 443 },
    },
  };
});
