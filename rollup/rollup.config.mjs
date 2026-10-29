// eslint-disable-next-line import/extensions
import plugins from './plugins.mjs';

export default [
	{
		input: 'lib/index.js',
		output: [
			{
				name: 'main',
				file: 'dist/index.umd.js',
				format: 'umd',
				sourcemap: true,
				// Prevents __esModule from being emitted if a default export is ever added: consumers using `import helpers from` would then get only that default
				esModule: false
			}
		],
		plugins: [...plugins()]
	}
];
