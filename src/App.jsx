import { Header, Footer } from './components/Layout.jsx';
import { findRoute, alternatesOf } from './routes.js';
import { LangContext } from './i18n.js';

export default function App({ path }) {
  const route = findRoute(path);
  const { Page } = route;
  return (
    <LangContext.Provider value={route.lang}>
      <a className="skip-link" href="#inhalt">{route.lang === 'en' ? 'Skip to content' : 'Zum Inhalt springen'}</a>
      <Header pageId={route.id} alternates={alternatesOf(route)} />
      <main id="inhalt">
        <Page />
      </main>
      <Footer />
    </LangContext.Provider>
  );
}
