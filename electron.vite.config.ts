import { resolve } from "path";
import { defineConfig } from "electron-vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  main: {
    resolve: {
      externalConditions: ['node'],
      alias: {
        'electron': 'electron'  // Ensure electron resolves to the actual module
      }
    },
    build: {
      rollupOptions: {
        external: ["electron", "electron-store", "puppeteer-extra", "puppeteer-extra-plugin-stealth", "puppeteer-extra-plugin-block-resources", "@nut-tree-fork/nut-js", "prismjs"],
        preserveEntrySignatures: 'strict',
        output: {
          format: 'cjs',
          interop: 'auto',
          // Prevent Rollup from optimizing away the named imports
          exports: 'named'
        }
      },
    },
    plugins: [
      {
        name: 'fix-electron-imports-post',
        apply: 'build',
        enforce: 'post',
        async generateBundle(outputOptions, bundle) {
          for (const [fileName, asset] of Object.entries(bundle)) {
            if (fileName.endsWith('index.js') && typeof asset.code === 'string') {
              let code = asset.code;
              
              // Remove the problematic __toESM wrapper if it exists
              code = code.replace(
                /let electron = require\("electron"\);\s*electron = require_chunk\.__toESM\(electron[^;]*\);/g,
                'let electron;'
              );
              
              // Replace top-level "let electron = require("electron");" with lazy getter
              code = code.replace(
                /^let electron = require\("electron"\);/m,
                `let _electron = null;
function getElectron() {
  if (!_electron) {
    try {
      // In Electron, the module system is patched to handle electron
      _electron = require("electron");
    } catch (e) {
      // Fallback: try to load from the preload context
      if (global.electron) {
        _electron = global.electron;
      } else if (typeof window !== 'undefined' && window.electron) {
        _electron = window.electron;
      } else {
        throw new Error("Electron module not available");
      }
    }
  }
  return _electron;
}
const electron = new Proxy({}, {
  get(target, prop) {
    const e = getElectron();
    return e ? e[prop] : undefined;
  }
});`
              );
              
              asset.code = code;
            }
          }
        }
      }
    ]
  },
  preload: {
    build: {
      rollupOptions: {
        external: ["electron"],
      },
    },
  },
  renderer: {
    publicDir: resolve("src/renderer/src/public"),
    resolve: {
      alias: {
        "@renderer": resolve("src/renderer/src"),
      },
    },
    plugins: [react(), tailwindcss()],
  },
});
