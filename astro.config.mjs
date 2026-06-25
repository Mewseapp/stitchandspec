import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

const site = process.env.PUBLIC_SITE_URL || 'https://stitchandspec.com';

export default defineConfig({
  site,
  integrations: [sitemap()],
  output: 'static',
  adapter: cloudflare()
});