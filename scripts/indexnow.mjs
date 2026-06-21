#!/usr/bin/env node
import fs from 'node:fs';

const site = process.env.PUBLIC_SITE_URL || 'https://stitchandspec.com';
const key = process.env.INDEXNOW_KEY || 'stitchandspec-indexnow-key';
const keyLocation = `${site}/indexnow-key.txt`;
const sitemap = 'dist/sitemap-index.xml';

if (!fs.existsSync(sitemap)) {
  console.error('Build first so dist/sitemap-index.xml exists.');
  process.exit(1);
}

const urls = fs.readFileSync(sitemap, 'utf8')
  .match(/<loc>(.*?)<\/loc>/g)
  ?.map((x) => x.replace(/<\/?loc>/g, '')) ?? [site];

const payload = { host: new URL(site).host, key, keyLocation, urlList: urls };
console.log(JSON.stringify(payload, null, 2));
console.log('\nSubmit with: curl -X POST https://api.indexnow.org/indexnow -H "Content-Type: application/json" -d @indexnow-payload.json');
fs.writeFileSync('indexnow-payload.json', JSON.stringify(payload, null, 2));
