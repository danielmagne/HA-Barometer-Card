import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRootDir = path.resolve(__dirname);

export default {
  input: 'src/ha-barometer-card.ts',
  output: {
    file: 'dist/ha-barometer-card.js',
    format: 'es',
    sourcemap: true,
    inlineDynamicImports: true
  },
  plugins: [
    alias({
      entries: [
        {
          find: 'custom-card-helpers',
          replacement: path.resolve(projectRootDir, 'src/shims/custom-card-helpers.ts')
        }
      ]
    }),
    resolve({ browser: true }),
    commonjs(),
    json(),
    typescript({
      tsconfig: './tsconfig.json',
      outDir: 'dist'
    }),
    terser({
      output: { comments: false }
    })
  ]
};
