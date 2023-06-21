// Utils
import path from 'path'
import { fileURLToPath } from 'url'
import { build } from 'vite'

// Constants
import templateMetaInfo from '../templateMetaInfo/index.js'
const BASE_PREVIEW_COMPONENT_PATH = '../src/components/previews/'

// Plugins
import react from '@vitejs/plugin-react'
import nodeResolve from '@rollup/plugin-node-resolve'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

async function runBuild() {
	await build({
		envFile: false,
		configFile: false,
		root: path.resolve(__dirname, '../src'),
		mode: 'production',
		plugins: [
			cssInjectedByJsPlugin({
				// topExecutionPriority: true,
				relativeCSSInjection: true,
				// jsAssetsFilterFunction: function customJsAssetsfilterFunction(outputChunk) {
				// 	return outputChunk.fileName.includes('index.js')
				// },
			}),
			react(),
			nodeResolve(),
		],
		// assetsInclude: ['**/*.png', '**/*.svg'],
		publicDir: false,
		build: {
			// target: 'es2015',
			cssCodeSplit: true,
			assetsInlineLimit: 10000,
			rollupOptions: {
				input: genEntryPoints(templateMetaInfo),
				external: ['react', 'react/jsx-runtime', 'react-dom'],
				// maxParallelFileOps: 20,
				// plugins: [],
				preserveEntrySignatures: 'allow-extension',
				output: {
					// manualChunks: () => 'app',
					// inlineDynamicImports: false,
					chunkFileNames: 'shared_chunks/[name]-[hash].js',
					assetFileNames: 'common_assets/[name]-[hash][extname]',
					entryFileNames: 'templates/[name].js',
					dir: './dist',
					// file: '',
					format: 'es',
					globals: {
						react: 'react',
						'react-dom': 'ReactDOM',
						'react/jsx-runtime': 'react/jsx-runtime',
					},
					// paths: {}, // Important - CDN link
					// plugins: [],
					// preserveModules: false,
					// preserveModulesRoot: 'src',
				},
			},
			// lib: {
			// 	entry: genEntryPoints(templateMetaInfo)[0],
			// 	name: 'MyLib',
			// 	fileName: genFilename,
			// 	formats: ['es'],
			// },
		},
	})
}

runBuild()

function genFilename(format, entryName) {
	return `${entryName}_template_${format}.js`
}

function genEntryPoints(templateMetaInfo) {
	const entryPoints = {}
	for (let key in templateMetaInfo) {
		entryPoints[`${key}/index`] = path.resolve(
			__dirname,
			BASE_PREVIEW_COMPONENT_PATH + templateMetaInfo[key].componentPath
		)
	}
	return entryPoints
}
