// Finishing touches for GitHub Pages after `next build` wrote the site to out/.
import fs from 'node:fs';

const isTest = !!process.env.SITE_BASE;

// GitHub Pages' Jekyll would hide the _next/ folder without this file.
fs.writeFileSync('out/.nojekyll', '');

// The custom domain is only set for the real site, not the github.io test build.
if (!isTest) fs.writeFileSync('out/CNAME', 'uptux.de\n');

// Old URL from the previous website.
const base = process.env.SITE_BASE || '';
fs.mkdirSync('out/philosophy', { recursive: true });
fs.writeFileSync(
  'out/philosophy/index.html',
  `<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Weiterleitung</title><meta name="robots" content="noindex"><link rel="canonical" href="https://uptux.de/ueber-uns/"><meta http-equiv="refresh" content="0; url=${base}/ueber-uns/"></head><body><a href="${base}/ueber-uns/">Weiter</a></body></html>`,
);
console.log(`Postbuild done (${isTest ? 'test build for ' + base : 'uptux.de'}).`);
