import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path';
import dts from 'vite-plugin-dts';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), dts({include: ['lib'], rollupTypes: true})],

    build: {
        copyPublicDir: false,
        sourcemap: false,
        emptyOutDir: true,
        lib: {
            entry: resolve(__dirname, 'lib/main.ts'),
            name: 'BatchWidgetsLib',
            fileName: 'batchWidgetLib',
            formats: ['es', 'umd'],
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        }
    },
})
