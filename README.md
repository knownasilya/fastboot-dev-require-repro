# fastboot-dev-require

Running in fastboot returns the following error (notice how most of the traces point to dev versions).
I'm not sure how to prevent this dev behaviour. I've tried webpack `mode: 'production'`, `NODE_ENV=production`, and even node's `node --conditions=default ...`.

```
 ReferenceError: document is not defined
    at eval (webpack://__ember_auto_import__/./node_modules/decode-named-character-reference/index.dom.js?:6:39)
    at Module../node_modules/decode-named-character-reference/index.dom.js (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/chunk.vendors-node_modules_ember-welcome-page_dist_components_welcome-page_js-node_modules_rehype-s-58af1e.23022ef0e16eafd5da7e.js:146:1)
    at __webpack_require__ (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/chunk.app.596ddd11b5f2e1127bd0.js:108:42)
    at eval (webpack://__ember_auto_import__/./node_modules/micromark-core-commonmark/dev/lib/character-reference.js?:6:90)
    at Module../node_modules/micromark-core-commonmark/dev/lib/character-reference.js (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/chunk.vendors-node_modules_ember-welcome-page_dist_components_welcome-page_js-node_modules_rehype-s-58af1e.23022ef0e16eafd5da7e.js:751:1)
    at __webpack_require__ (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/chunk.app.596ddd11b5f2e1127bd0.js:108:42)
    at eval (webpack://__ember_auto_import__/./node_modules/micromark/dev/lib/constructs.js?:22:84)
    at Module../node_modules/micromark/dev/lib/constructs.js (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/chunk.vendors-node_modules_ember-welcome-page_dist_components_welcome-page_js-node_modules_rehype-s-58af1e.23022ef0e16eafd5da7e.js:1180:1)
    at __webpack_require__ (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/chunk.app.596ddd11b5f2e1127bd0.js:108:42)
    at eval (webpack://__ember_auto_import__/./node_modules/micromark/dev/lib/parse.js?:11:72)
    at Module../node_modules/micromark/dev/lib/parse.js (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/chunk.vendors-node_modules_ember-welcome-page_dist_components_welcome-page_js-node_modules_rehype-s-58af1e.23022ef0e16eafd5da7e.js:1246:1)
    at __webpack_require__ (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/chunk.app.596ddd11b5f2e1127bd0.js:108:42)
    at eval (webpack://__ember_auto_import__/./node_modules/mdast-util-from-markdown/dev/lib/index.js?:7:80)
    at Module../node_modules/mdast-util-from-markdown/dev/lib/index.js (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/chunk.vendors-node_modules_ember-welcome-page_dist_components_welcome-page_js-node_modules_rehype-s-58af1e.23022ef0e16eafd5da7e.js:366:1)
    at __webpack_require__ (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/chunk.app.596ddd11b5f2e1127bd0.js:108:42)
    at eval (webpack://__ember_auto_import__/./node_modules/remark-parse/lib/index.js?:5:82)
    at Module../node_modules/remark-parse/lib/index.js (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/chunk.vendors-node_modules_ember-welcome-page_dist_components_welcome-page_js-node_modules_rehype-s-58af1e.23022ef0e16eafd5da7e.js:1510:1)
    at __webpack_require__ (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/chunk.app.596ddd11b5f2e1127bd0.js:108:42)
    at eval (webpack://__ember_auto_import__/./node_modules/remark-parse/index.js?:5:71)
    at Module../node_modules/remark-parse/index.js (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/chunk.vendors-node_modules_ember-welcome-page_dist_components_welcome-page_js-node_modules_rehype-s-58af1e.23022ef0e16eafd5da7e.js:1499:1)
    at __webpack_require__ (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/chunk.app.596ddd11b5f2e1127bd0.js:108:42)
    at Module.eval [as callback] (webpack://__ember_auto_import__/../../../../private/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/cache-332-webpack_bundler_ember_auto_import_webpack/app.cjs?:17:47)
    at Module.exports (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/vendor/loader/loader.js:106:1)
    at Module._reify (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/vendor/loader/loader.js:143:1)
    at Module.reify (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/vendor/loader/loader.js:130:1)
    at Module.exports (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/vendor/loader/loader.js:104:1)
    at requireModule (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/vendor/loader/loader.js:27:1)
    at ModuleRegistry.get (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/addon-tree-output/ember-resolver/resolvers/classic/index.js:24:1)
    at Class._extractDefaultExport (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/addon-tree-output/ember-resolver/resolvers/classic/index.js:380:1)
    at Class.resolveOther (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/addon-tree-output/ember-resolver/resolvers/classic/index.js:109:1)
    at Class.resolve (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/addon-tree-output/ember-resolver/resolvers/classic/index.js:155:1)
    at resolve (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@ember/-internals/container/index.js:788:1)
    at Registry.resolve (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@ember/-internals/container/index.js:536:1)
    at Registry.resolve (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@ember/-internals/container/index.js:538:1)
    at factoryFor (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@ember/-internals/container/index.js:246:1)
    at Container.factoryFor (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@ember/-internals/container/index.js:192:1)
    at ApplicationInstance.factoryFor (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@ember/-internals/runtime/lib/mixins/container_proxy.js:113:1)
    at ResolverImpl.lookupHelper (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@ember/-internals/glimmer/index.js:4470:1)
    at resolveComponentOrHelper (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@glimmer/opcode-compiler.js:312:1)
    at encodeOp (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@glimmer/opcode-compiler.js:2135:1)
    at pushOp (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@glimmer/opcode-compiler.js:2067:1)
    at /var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@glimmer/opcode-compiler.js:1781:1
    at Compilers.compile (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@glimmer/opcode-compiler.js:417:1)
    at compileStatements (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@glimmer/opcode-compiler.js:2070:1)
    at maybeCompile (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@glimmer/opcode-compiler.js:2049:1)
    at CompilableTemplateImpl.compile (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@glimmer/opcode-compiler.js:2032:1)
    at Object.evaluate (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@glimmer/runtime.js:2973:1)
    at AppendOpcodes.evaluate (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@glimmer/runtime.js:1052:1)
    at LowLevelVM.evaluateSyscall (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@glimmer/runtime.js:4214:1)
    at LowLevelVM.evaluateInner (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@glimmer/runtime.js:4185:1)
    at LowLevelVM.evaluateOuter (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@glimmer/runtime.js:4178:1)
    at VM.next (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@glimmer/runtime.js:5009:1)
    at VM._execute (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@glimmer/runtime.js:4996:1)
    at VM.execute (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@glimmer/runtime.js:4971:1)
    at /var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@glimmer/runtime.js:5054:1
    at runInTrackingTransaction (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@glimmer/validator.js:138:1)
    at TemplateIteratorImpl.sync (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@glimmer/runtime.js:5054:1)
    at /var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@ember/-internals/glimmer/index.js:4715:1
    at RootState.render (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@ember/-internals/glimmer/index.js:4684:1)
    at /var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@ember/-internals/glimmer/index.js:4980:1
    at inTransaction (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@glimmer/runtime.js:4090:1)
    at Renderer._renderRoots (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@ember/-internals/glimmer/index.js:4962:1)
    at Renderer._renderRootsTransaction (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@ember/-internals/glimmer/index.js:5006:1)
    at Renderer._renderRoot (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@ember/-internals/glimmer/index.js:4951:1)
    at Renderer._appendDefinition (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@ember/-internals/glimmer/index.js:4876:1)
    at Renderer.appendOutletView (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/@ember/-internals/glimmer/index.js:4864:1)
    at invokeWithOnError (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/backburner.js:292:1)
    at Queue.flush (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/backburner.js:197:1)
    at DeferredActionQueues.flush (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/backburner.js:360:1)
    at Backburner._end (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/backburner.js:801:1)
    at Backburner._boundAutorunEnd (/var/folders/kw/7vmtd5m91sn1kwsvblc7z1080000gn/T/broccoli-15339j12XgX6Y5NLk/out-334-broccoli_merge_trees/assets/backburner.js:525:1)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
```

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://cli.emberjs.com/release/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd fastboot-dev-require`
* `yarn install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `yarn lint`
* `yarn lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://cli.emberjs.com/release/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
