import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// "preview" mode builds one self-contained HTML file with hash routing,
// used only to show the site before it is deployed.
export default defineConfig(({ mode }) => ({
  plugins: [react(), ...(mode === 'preview' ? [viteSingleFile()] : [])],
  define: { __PREVIEW__: JSON.stringify(mode === 'preview') },
  build: mode === 'preview' ? { outDir: 'dist-preview', rollupOptions: { input: 'preview.html' } } : {},
}));
