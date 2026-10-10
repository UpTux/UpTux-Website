import { hydrateRoot, createRoot } from 'react-dom/client';
import { useEffect, useState } from 'react';
import '@fontsource-variable/inter';
import './styles.css';
import App from './App.jsx';
import { PREVIEW } from './link.js';
import { findRoute } from './routes.js';

function hashPath() {
  const [path, anchor] = (window.location.hash.slice(1) || '/').split('#');
  return { path: path || '/', anchor };
}

// Preview only: hash-based navigation inside one HTML file.
function PreviewApp() {
  const [loc, setLoc] = useState(hashPath);
  useEffect(() => {
    const onChange = () => setLoc(hashPath());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  useEffect(() => {
    document.title = findRoute(loc.path).title;
    const el = loc.anchor && document.getElementById(loc.anchor);
    if (el) el.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [loc]);
  return <App key={loc.path} path={loc.path} />;
}

const root = document.getElementById('root');
if (PREVIEW) {
  createRoot(root).render(<PreviewApp />);
} else {
  hydrateRoot(root, <App path={window.__PATH__ || '/'} />);
}
