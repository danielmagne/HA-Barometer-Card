import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

const isProd = process.env.BUILD === 'production';

export default {
  input: 'src/ha-barometer-card.ts',
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    nodeResolve(),
    typescript({
      tsconfig: './tsconfig.json',
      clean: true,
    }),
    ...(isProd ? [terser()] : []),
  ],
  treeshake: isProd,
};
