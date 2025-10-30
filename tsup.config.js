import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.js'],
  format: ['cjs', 'esm'],
  dts: false,
  splitting: true,
  sourcemap: true,
  clean: true,
  minify: true,
  metafile: true,
  target: 'es2020',
  outDir: 'dist',
  external: ['react', 'react-dom', 'styled-components'],
  loader: {
    '.js': 'jsx',
  },
  outExtension({ format }) {
    return { js: format === 'esm' ? '.mjs' : '.cjs' };
  },
});
