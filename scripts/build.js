import fs from 'fs/promises'
import esbuild from 'esbuild'

const outdir = './dist'
const root = './src'

export const config = {
	entryPoints: [`${root}/index.ts`],
	outdir,
    
	target: 'safari14',
	format: 'esm',

	bundle: true,
	splitting: true,
	
	minify: true,
	sourcemap: false,
	legalComments: 'none',

	logLevel: 'info',
	color: true
}

// Cleaning
await fs.rm(outdir, { recursive: true, force: true })

esbuild.build(config)