// Company facts used across pages and in structured data.
export const site = {
  url: 'https://uptux.de',
  name: 'UpTux',
  legalName: 'UpTux UG (haftungsbeschränkt)',
  street: 'Schönhardt 9',
  zip: '74535',
  city: 'Mainhardt',
  region: 'Baden-Württemberg',
  country: 'DE',
  email: 'info@uptux.de',
  securityEmail: 'security@uptux.de',
  managingDirector: 'Jochen Gast',
  contentResponsible: ['Jochen Gast', 'Patrick Dahlke'],
  court: 'Amtsgericht Stuttgart',
  hrb: 'HRB 780490',
  vatId: 'DE344779836',
  copyrightFrom: 2021,
  geo: { lat: 49.117, lng: 9.538 },
} as const;

/** Sub-path the site is served from ('' on uptux.de, '/UpTux-Website' on github.io). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** A build under a sub-path is a test deployment and stays out of search engines. */
export const isTestBuild = basePath !== '';
