# uptux.de

Website der UpTux UG. React-Komponenten, die beim Build zu statischem HTML gerendert werden (eine HTML-Datei pro Seite), damit Suchmaschinen den vollständigen Inhalt sehen.

## Entwicklung

```bash
npm install
npm run dev            # lokaler Entwicklungsserver
npm run build          # statische Seite nach dist/
npm run build:preview  # eine einzelne HTML-Datei zur Vorschau (dist-preview/)
```

## Aufbau

- `src/pages/` Inhalte der einzelnen Seiten
- `src/routes.js` URLs, Seitentitel und Meta-Beschreibungen (SEO)
- `src/site.js` Firmendaten (Impressum, strukturierte Daten)
- `src/components/Blocks.jsx` u. a. die Liste der Industrie-Protokolle
- `scripts/prerender.mjs` erzeugt HTML je Seite, `sitemap.xml`, `robots.txt`, `CNAME`

Eine neue Seite: Komponente in `src/pages/` anlegen und in `src/routes.js` eintragen. Sitemap und Meta-Tags entstehen automatisch.

## Deployment

Testphase: Die Seite läuft unter https://jochngst.github.io/UpTux-Website/ (Build mit `npm run build:github-io`, ohne Suchmaschinen-Indexierung). Für uptux.de wird mit `npm run build` gebaut.

Aktuell liegt die gebaute Seite im Branch `gh-pages` (Repository-Einstellungen: Pages → Source: Deploy from a branch → `gh-pages` / root). Die Domain `uptux.de` ist über `CNAME` hinterlegt.

Automatisches Deployment: Inhalt von `scripts/deploy-workflow.yml` als `.github/workflows/deploy.yml` anlegen und unter Pages → Source „GitHub Actions“ wählen. Danach baut und veröffentlicht jeder Push auf `main` die Seite selbst.
