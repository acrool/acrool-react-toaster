import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import * as path from 'node:path';
import {visualizer} from 'rollup-plugin-visualizer';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        eslint(),
        react(),
        svgr(),
        dts({
            insertTypesEntry: true,
        }),
        visualizer() as Plugin,
    ],
    css: {
        modules: {
            localsConvention: 'camelCase',
            scopeBehaviour: 'local',
            generateScopedName: 'acrool-react-toaster__[local]',
        }
    },
    build: {
        minify: process.env.NODE_ENV === 'production',
        sourcemap: process.env.NODE_ENV !== 'production',
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            formats: ['es'],
            fileName: (format) => `acrool-react-toaster.${format}.js`,
        },
        cssTarget: 'chrome61',
        rollupOptions: {
            // motion 不打包進 dist，由使用端安裝一份，才能與使用端共用並只取用到的部分
            external: ['react', 'react-dom', 'react/jsx-runtime', /^motion(\/|$)/],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react/jsx-runtime': 'ReactJsxRuntime',
                },
            },
        },
    },
});
