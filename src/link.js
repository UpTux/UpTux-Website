// Internal links are real URLs on the deployed site (one static HTML file per
// page). In the single-file preview they become hash routes instead.
export const PREVIEW = typeof __PREVIEW__ !== 'undefined' && __PREVIEW__;

export function href(path) {
  return PREVIEW ? `#${path}` : path;
}
