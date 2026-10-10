import { renderToString } from 'react-dom/server';
import App from './App.jsx';

export { routes, notFound, redirects, alternatesOf } from './routes.js';
export { site } from './site.js';

export function render(path) {
  return renderToString(<App path={path} />);
}
