// Renders every route to a static HTML file in dist/ so search engines get the
// full content without running JavaScript. Also writes sitemap, robots, CNAME.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const { render, routes, notFound, redirects, site, alternatesOf } = await import(path.join(root, 'dist-ssr/entry-server.js'));

// A sub-path build (e.g. /UpTux-Website/ on github.io) is a test deployment:
// it is kept out of search engines and gets no CNAME.
const base = (process.env.SITE_BASE || '/').replace(/\/$/, '');
const isTest = base !== '';
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const today = new Date().toISOString().slice(0, 10);

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: `${site.url}/`,
  logo: `${site.url}/logo.png`,
  email: site.email,
  slogan: 'Get your software right',
  description: 'IT-Dienstleister für die Digitalisierung mittelständischer Industrieunternehmen: Anlagenanbindung, Retrofit, individuelle Software und industrielle Bildverarbeitung.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.street,
    postalCode: site.zip,
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: site.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
  vatID: site.vatId,
  knowsAbout: ['Industrie 4.0', 'Retrofit', 'OPC UA', 'MQTT', 'EtherCAT', 'DDS', 'Zenoh', 'CANopen', 'ASAM MDF4', 'Industrielle Bildverarbeitung', 'Embedded-Software', 'Penetration Testing'],
  areaServed: 'DE',
};

function crumbsLd(route) {
  if (!route.crumbs) return null;
  const items = [{ name: route.lang === 'en' ? 'Home' : 'Start', path: alternatesOf({ id: 'home' })[route.lang] }];
  route.crumbs.forEach((name, i) => {
    const isLast = i === route.crumbs.length - 1;
    const match = routes.find((r) => r.lang === route.lang && r.crumbs && r.crumbs[r.crumbs.length - 1] === name);
    items.push({ name, path: isLast ? route.path : match?.path });
  });
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: `${site.url}${it.path}` })),
  };
}

function head(route) {
  const url = `${site.url}${route.path}`;
  const isHome = route.id === 'home';
  const ld = [
    isHome ? organization : null,
    isHome ? { '@context': 'https://schema.org', '@type': 'WebSite', name: 'UpTux', url: url, inLanguage: route.lang === 'en' ? 'en' : 'de-DE', publisher: { '@id': `${site.url}/#organization` } } : null,
    crumbsLd(route),
  ].filter(Boolean);
  const alt = route.noindex || isTest ? null : alternatesOf(route);
  return [
    `<title>${esc(route.title)}</title>`,
    `<meta name="description" content="${esc(route.description)}" />`,
    route.noindex || isTest ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${url}" />`,
    '<meta name="theme-color" content="#061A19" />',
    `<link rel="icon" href="${base}/favicon.svg" type="image/svg+xml" />`,
    `<link rel="icon" href="${base}/favicon-32.png" sizes="32x32" type="image/png" />`,
    `<link rel="apple-touch-icon" href="${base}/apple-touch-icon.png" />`,
    '<meta property="og:type" content="website" />',
    `<meta property="og:locale" content="${route.lang === 'en' ? 'en_GB' : 'de_DE'}" />`,
    ...(alt ? [
      `<link rel="alternate" hreflang="de" href="${site.url}${alt.de}" />`,
      `<link rel="alternate" hreflang="en" href="${site.url}${alt.en}" />`,
      `<link rel="alternate" hreflang="x-default" href="${site.url}${alt.de}" />`,
    ] : []),
    '<meta property="og:site_name" content="UpTux" />',
    `<meta property="og:title" content="${esc(route.title)}" />`,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${site.url}/og-image.png" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    ...ld.map((o) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`),
    `<script>window.__PATH__=${JSON.stringify(route.path)}</script>`,
  ].join('\n    ');
}

function write(file, html) {
  const out = path.join(dist, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
}

for (const route of [...routes, notFound]) {
  const html = template.replace('<html lang="de">', `<html lang="${route.lang}">`).replace('<!--app-head-->', head(route)).replace('<!--app-html-->', render(route.path));
  write(route === notFound ? '404.html' : path.join(route.path, 'index.html'), html);
}

for (const [from, to] of Object.entries(redirects)) {
  write(path.join(from, 'index.html'), `<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Weiterleitung</title><link rel="canonical" href="${site.url}${to}"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=${base}${to}"></head><body><a href="${base}${to}">Weiter zu ${site.url}${to}</a></body></html>`);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routes.map((r) => {
  const alt = alternatesOf(r);
  return `  <url><loc>${site.url}${r.path}</loc><lastmod>${today}</lastmod><priority>${r.priority}</priority>` +
    `<xhtml:link rel="alternate" hreflang="de" href="${site.url}${alt.de}"/><xhtml:link rel="alternate" hreflang="en" href="${site.url}${alt.en}"/></url>`;
}).join('\n')}
</urlset>
`;
write('sitemap.xml', sitemap);
if (isTest) {
  write('robots.txt', 'User-agent: *\nDisallow: /\n');
} else {
  write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);
  write('CNAME', 'uptux.de\n');
}
write('.nojekyll', '');
console.log(`Prerendered ${routes.length} pages (de + en) + 404 + ${Object.keys(redirects).length} redirect(s).`);
