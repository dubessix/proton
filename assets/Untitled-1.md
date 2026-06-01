for chnage config.json show ing

index.html file is not found in /src/renderer directory.

error during start dev server and electron app:

Error: build.rollupOptions.input option is required in the electron vite renderer config.

    at BasicMinimalPluginContext.configResolved (file:///home/debjeet-dhar/Desktop/Dukanlink/saas1/proton/node_modules/electron-vite/dist/chunks/lib-q6ns0vZr.js:571:23)

    at file:///home/debjeet-dhar/Desktop/Dukanlink/saas1/proton/node_modules/vite/dist/node/chunks/node.js:34730:87

    at Array.map (<anonymous>)

    at resolveConfig (file:///home/debjeet-dhar/Desktop/Dukanlink/saas1/proton/node_modules/vite/dist/node/chunks/node.js:34730:68)

    at async _createServer (file:///home/debjeet-dhar/Desktop/Dukanlink/saas1/proton/node_modules/vite/dist/node/chunks/node.js:26179:65)

    at async createServer (file:///home/debjeet-dhar/Desktop/Dukanlink/saas1/proton/node_modules/electron-vite/dist/chunks/lib-7y7CgM8M.js:58:22)

    at async CAC.<anonymous> (file:///home/debjeet-dhar/Desktop/Dukanlink/saas1/proton/node_modules/electron-vite/dist/cli.js:67:9)

debjeet-dhar@jeet-developer:~/Desktop/Dukanlink/saas1/proton$

and

dev log Uncaught (in promise)
Object
msg
:
"operation is manually canceled"
type
:
"cancelation"
[[Prototype]]
:
Object
before in prosma
ink/saas1/proton$ npm run dev

> iris-ai@1.3.0 dev
> electron-vite dev

vite v8.0.15 building ssr environment for development...
Warning: Invalid output options (1 issue found)

- For the "interop". Invalid key: Expected never but received "interop".
  (node:9983) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///home/debjeet-dhar/Desktop/Dukanlink/saas1/proton/postcss.config.js?t=1780318106268 is not specified and it doesn't parse as CommonJS.
  Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
  To eliminate this warning, add "type": "module" to /home/debjeet-dhar/Desktop/Dukanlink/saas1/proton/package.json.
  (Use `node --trace-warnings ...` to show where the warning was created)
  transforming (71) node_modules/electron-updater/out
  transforming (88) node_modules/@xenova/transformers
  transforming (119) node_modules/electron-updater/ou
  transforming (124) node_modules/loudness/impl/darwi
  transforming (214) node_modules/googleapis/build/sr
  transforming (216) node_modules/googleapis/build/sr
  transforming (218) node_modules/googleapis/build/sr
  transforming (219) node_modules/googleapis/build/sr
  transforming (222) node_modules/googleapis/build/sr
  transforming (223) node_modules/googleapis/build/sr
  transforming (224) node_modules/googleapis/build/sr
  transforming (229) node_modules/googleapis/build/sr
  ✓ 2385 modules transformed.
  out/main/addon.node 14.92 kB
  out/main/chunk-Cek0wNdY.js 2.13 kB
  out/main/dist-BqvjOomG.js 2.53 kB
  out/main/multipart-parser-D-bKPKc-.js 8.78 kB
  out/main/multipart-parser-CG1V6bya.js 8.78 kB
  out/main/multipart-parser-BmPf0cDH.js 8.79 kB
  out/main/chunks-CyELfv9m.js 11.95 kB
  out/main/coerce-qevt6Vmm.js 17.35 kB
  out/main/src-C6ClITCc.js 22.14 kB
  out/main/src-BfcxzU83.js 42.42 kB
  out/main/src-BbbwH31v.js 42.46 kB
  out/main/src-DyeZ5yQC.js 42.50 kB
  out/main/prompt-B-B0Ouzr.js 50.08 kB
  out/main/from-DEj0mZMJ.js 173.55 kB
  out/main/follow-redirects-CzzIWTgW.js 266.61 kB
  out/main/dist-DzP6JdK8.js 849.25 kB
  out/main/transformers-Bixtb-Xr.js 1,678.06 kB
  out/main/index.js 37,360.89 kB

[EVAL] Use of direct `eval` function is strongly discouraged as it poses security risks and may cause issues with minification.

- Use of direct `eval` here. in node_modules/onnxruntime-web/dist/ort-web.node.js at 62147..62151
  │
  │ Help: Consider using indirect eval. For more information, check the documentation: https://rolldown.rs/guide/troubleshooting#avoiding-direct-eval

[PLUGIN_TIMINGS] Your build spent significant time in plugins. Here is a breakdown:

- vite:node-asset (59%)
- vite:node-worker (29%)
- vite:module-path (11%)
  See https://rolldown.rs/options/checks#plugintimings for more details.

✓ built in 40.81s

electron main process built successfully

---

vite v8.0.15 building ssr environment for development...
✓ 3 modules transformed.
out/preload/index.js 2.60 kB

✓ built in 55ms

electron preload scripts built successfully

---

dev server running for the electron renderer process at:

➜ Local: http://localhost:5173/
➜ Network: use --host to expose

starting electron app...

Prism language components not available: Error: Cannot find module './prism-markup'
Require stack:

- /home/debjeet-dhar/Desktop/Dukanlink/saas1/proton/out/main/index.js
  at Module.\_resolveFilename (node:internal/modules/cjs/loader:1483:15)
  at s.\_resolveFilename (node:electron/js2c/browser_init:2:140113)
  at wrapResolveFilename (node:internal/modules/cjs/loader:1056:27)
  at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1101:12)
  at require.resolve (node:internal/modules/helpers:171:31)
  at /home/debjeet-dhar/Desktop/Dukanlink/saas1/proton/out/main/index.js:880047:33
  at handleId (/home/debjeet-dhar/Desktop/Dukanlink/saas1/proton/out/main/index.js:879885:41)
  at /home/debjeet-dhar/Desktop/Dukanlink/saas1/proton/out/main/index.js:879888:19
  at Array.map (<anonymous>)
  at handleId (/home/debjeet-dhar/Desktop/Dukanlink/saas1/proton/out/main/index.js:879887:41) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
  '/home/debjeet-dhar/Desktop/Dukanlink/saas1/proton/out/main/index.js'
  ]
  }
  (node:10307) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
  (Use `electron --trace-deprecation ...` to show where the warning was created)clear

after prisma
npm run dev

> iris-ai@1.3.0 dev
> electron-vite dev

vite v8.0.15 building ssr environment for development...
Warning: Invalid output options (1 issue found)

- For the "interop". Invalid key: Expected never but received "interop".
  (node:11643) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///home/debjeet-dhar/Desktop/Dukanlink/saas1/proton/postcss.config.js?t=1780318482442 is not specified and it doesn't parse as CommonJS.
  Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
  To eliminate this warning, add "type": "module" to /home/debjeet-dhar/Desktop/Dukanlink/saas1/proton/package.json.
  (Use `node --trace-warnings ...` to show where the warning was created)
  ✓ 2385 modules transformed.
  out/main/addon.node 14.92 kB
  out/main/chunk-Cek0wNdY.js 2.13 kB
  out/main/dist-BqvjOomG.js 2.53 kB
  out/main/multipart-parser-D-bKPKc-.js 8.78 kB
  out/main/multipart-parser-CG1V6bya.js 8.78 kB
  out/main/multipart-parser-BmPf0cDH.js 8.79 kB
  out/main/chunks-CyELfv9m.js 11.95 kB
  out/main/coerce-qevt6Vmm.js 17.35 kB
  out/main/src-C6ClITCc.js 22.14 kB
  out/main/src-BfcxzU83.js 42.42 kB
  out/main/src-BbbwH31v.js 42.46 kB
  out/main/src-DyeZ5yQC.js 42.50 kB
  out/main/prompt-B-B0Ouzr.js 50.08 kB
  out/main/from-DEj0mZMJ.js 173.55 kB
  out/main/follow-redirects-CzzIWTgW.js 266.61 kB
  out/main/dist-DzP6JdK8.js 849.25 kB
  out/main/transformers-Bixtb-Xr.js 1,678.06 kB
  out/main/index.js 37,360.89 kB

[EVAL] Use of direct `eval` function is strongly discouraged as it poses security risks and may cause issues with minification.

- Use of direct `eval` here. in node_modules/onnxruntime-web/dist/ort-web.node.js at 62147..62151
  │
  │ Help: Consider using indirect eval. For more information, check the documentation: https://rolldown.rs/guide/troubleshooting#avoiding-direct-eval

[PLUGIN_TIMINGS] Your build spent significant time in plugins. Here is a breakdown:

- vite:node-asset (46%)
- vite:node-worker (34%)
- vite:module-path (19%)
  See https://rolldown.rs/options/checks#plugintimings for more details.

✓ built in 17.94s

electron main process built successfully

---

vite v8.0.15 building ssr environment for development...
✓ 3 modules transformed.
out/preload/index.js 2.60 kB

✓ built in 101ms

electron preload scripts built successfully

---

dev server running for the electron renderer process at:

➜ Local: http://localhost:5173/
➜ Network: use --host to expose

starting electron app...

Prism language components not available: Error: Cannot find module './prism-markup'
Require stack:

- /home/debjeet-dhar/Desktop/Dukanlink/saas1/proton/out/main/index.js
  at Module.\_resolveFilename (node:internal/modules/cjs/loader:1483:15)
  at s.\_resolveFilename (node:electron/js2c/browser_init:2:140113)
  at wrapResolveFilename (node:internal/modules/cjs/loader:1056:27)
  at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1101:12)
  at require.resolve (node:internal/modules/helpers:171:31)
  at /home/debjeet-dhar/Desktop/Dukanlink/saas1/proton/out/main/index.js:880047:33
  at handleId (/home/debjeet-dhar/Desktop/Dukanlink/saas1/proton/out/main/index.js:879885:41)
  at /home/debjeet-dhar/Desktop/Dukanlink/saas1/proton/out/main/index.js:879888:19
  at Array.map (<anonymous>)
  at handleId (/home/debjeet-dhar/Desktop/Dukanlink/saas1/proton/out/main/index.js:879887:41) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
  '/home/debjeet-dhar/Desktop/Dukanlink/saas1/proton/out/main/index.js'
  ]
  }
  (node:11796) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
  (Use `electron --trace-deprecation ...` to show where the warning was created)
  [11796:0601/182734.302826:ERROR:content/browser/browser_main_loop.cc:274] GLib-GObject: ../../../gobject/gsignal.c:2685: instance '0x381c1078a9d0' has no handler with id '6264'
