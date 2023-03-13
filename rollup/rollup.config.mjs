// eslint-disable-next-line import/extensions
import plugins from './plugins.mjs';

export default [
  {
    input: 'lib/index.js',
    output: [
      {
        file: 'dist/index.mjs',
        format: 'es',
        sourcemap: true,
      },
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [...plugins()],
  },
];
