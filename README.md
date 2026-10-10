# uptux.de

Website der UpTux UG, gebaut mit **Next.js (App Router) und TypeScript**. Next.js rendert beim Build jede Seite zu fertigem HTML (`output: 'export'`), sodass Suchmaschinen den vollständigen Inhalt ohne JavaScript sehen. Deutsch ist die Standardsprache, Englisch liegt unter `/en/`.

## Entwicklung

```bash
npm install
npm run dev              # Entwicklungsserver auf http://localhost:3000
npm run typecheck        # TypeScript prüfen
npm run build            # statische Seite für uptux.de nach out/
npm run build:github-io  # Test-Build für jochngst.github.io/UpTux-Website (noindex)
```

## Aufbau

- `src/content/de/`, `src/content/en/` Inhalte der Seiten je Sprache
- `src/app/(de)/…`, `src/app/(en)/en/…` Routen (je Sprache ein eigenes Root-Layout mit passendem `lang`)
- `src/lib/paths.ts` URLs aller Seiten in beiden Sprachen (Grundlage für Sprachumschalter und hreflang)
- `src/lib/seo.ts` Seitentitel, Meta-Beschreibungen, strukturierte Daten
- `src/lib/i18n.ts` Texte für Navigation, Footer und Buttons
- `src/lib/site.ts` Firmendaten (Impressum, strukturierte Daten)
- `src/components/Blocks.tsx` wiederverwendbare Bausteine, u. a. die Liste der Industrie-Protokolle
- `src/app/sitemap.ts`, `src/app/robots.ts` Sitemap und robots.txt

Neue Seite: Inhalt in `src/content/<sprache>/` anlegen, URL in `src/lib/paths.ts` und Titel/Beschreibung in `src/lib/seo.ts` eintragen, Route unter `src/app/` anlegen (siehe bestehende `page.tsx`).

## Deployment

Jeder Push auf `main` baut die Seite per GitHub Actions (`.github/workflows/deploy.yml`) und veröffentlicht sie auf GitHub Pages (Einstellungen: Pages → Source: **GitHub Actions**). Die Vorlage für diese Datei liegt in `docs/deploy-workflow.yml`; sie muss einmal manuell nach `.github/workflows/deploy.yml` kopiert werden.

Für den Umzug auf uptux.de im Workflow `npm run build:github-io` durch `npm run build` ersetzen. Dann wird die Domain (`CNAME`) gesetzt und die Indexierung durch Suchmaschinen eingeschaltet.
