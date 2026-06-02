import { resolve } from 'path'
import { defineConfig } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // ⚡ MAIN PROCESS
  main: {
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'src/main/index.ts')
        },
        output: {
          format: 'cjs',
          entryFileNames: '[name].js'
        },
        external: [
          'electron',
          'electron-store',
          'electron-updater',
          'puppeteer',
          'puppeteer-extra',
          'puppeteer-extra-plugin-stealth',
          '@nut-tree-fork/nut-js',
          'prismjs',
          'face-api.js',
          'bcryptjs',
          'loudness',
          'screenshot-desktop',
          'node-window-manager',
          'clipboardy',
          '@google-cloud/local-auth',
          'googleapis',
          'tesseract.js',
          '@xenova/transformers',
          'vectordb',
          'pdf-parse',
          'mammoth',
          'sharp',
          'canvas',
          'onnxruntime-node',
          'onnxruntime-web',
          'node-telegram-bot-api',
        ]
      }
    }
  },

  // 🔐 PRELOAD
  preload: {
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'src/preload/index.ts')
        },
        output: {
          format: 'cjs',
          entryFileNames: '[name].js'
        },
        external: ['electron']
      }
    }
  },

  // 💻 RENDERER
  renderer: {
    root: resolve(__dirname, 'src/renderer'),
    publicDir: resolve(__dirname, 'src/renderer/src/public'),

    resolve: {
      alias: {
        '@renderer': resolve(__dirname, 'src/renderer/src')
      }
    },

    plugins: [react(), tailwindcss()],

    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'src/renderer/index.html')
        },
        output: {
          // ✅ FIXED: Function instead of Object
          manualChunks: (id) => {
            if (id.includes('framer-motion') || id.includes('gsap')) {
              return 'ui-motion'
            }
            if (id.includes('@monaco-editor')) {
              return 'editor'
            }
            if (id.includes('@huggingface')) {
              return 'huggingface'
            }
            if (id.includes('react-markdown') || id.includes('remark-gfm')) {
              return 'markdown'
            }
            if (
              id.includes('node_modules/react/') ||
              id.includes('node_modules/react-dom/') ||
              id.includes('node_modules/react-router-dom/')
            ) {
              return 'vendor'
            }
          }
        }
      }
    }
  }
})