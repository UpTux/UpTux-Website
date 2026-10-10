import { Header, Footer } from './components/Layout.jsx';
import { findRoute } from './routes.js';

export default function App({ path }) {
  const { Page } = findRoute(path);
  return (
    <>
      <a className="skip-link" href="#inhalt">Zum Inhalt springen</a>
      <Header path={path} />
      <main id="inhalt">
        <Page />
      </main>
      <Footer />
    </>
  );
}
