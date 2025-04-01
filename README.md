# Doing frontend with node

node/npm acts as build tool

## install nvm to install node
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash`

## Bundler
need a bundler to build src code compatible with browser, we'll use vite bc its recommended
`npm create vite@latest`

## Typescript
use typescript
`npm install typescript`

## build project
`npm run build`

lol this is not the typescript you are looking for: https://stackoverflow.com/questions/67677320/this-is-not-the-tsc-command-you-are-looking-for

`npm uninstall -g tsc`
`npm uninstall tsc`
`npm install -D typescript` (-d is short for --save-dev development dependences that are only used during development)

## What does -D mean in `npm install -D typescript`
In the context of `npm install -D`, the `-D` flag is shorthand for `--save-dev`. This flag tells npm to install a package as a **development dependency** rather than a regular dependency.

### Here's what it means:
- **`--save-dev` / `-D`**: When you use this flag, npm adds the package to the `devDependencies` section of your `package.json`. This is typically used for packages that are needed only during development (like testing frameworks, build tools, linters, etc.), but not in production.

For example:
```bash
npm install --save-dev webpack
```
or equivalently:
```bash
npm install -D webpack
```

This would install `webpack` and save it in your `devDependencies`, meaning it's not required in a production environment.

### In contrast:
- **Without `-D`**: If you install a package without the `-D` flag, npm will add it to the `dependencies` section, meaning it's a package that your project needs to run, both in development and production.

Let me know if you need further clarification!

output will be in `public`




# import vs require?
see [difference between import and require](https://stackoverflow.com/questions/46677752/the-difference-between-requirex-and-import-x)
- https://medium.com/@ebojacky/all-you-need-to-know-about-module-importation-for-back-end-and-front-end-development-in-js-bbc51301ffa8
- https://fredriccliver.medium.com/how-can-i-use-an-npm-module-in-front-end-javascript-63d54d53c005)

in vite
```js
/*see: https://vite.dev/config/*/
export default {
  // generate source maps for debugging
  build: {
    // inline = the sourcemap will be appended to resulting output file as a data URI
    sourcemap: 'inline'
  }
}
```

# Debugging and Troublshooting

##  debug js before bundling?
generate source maps
- https://www.reddit.com/r/learnjavascript/comments/v14nl5/how_to_debug_js_while_using_webpack/
- https://vite.dev/config/build-options.html
- https://www.aemvite.dev/guide/front-end/vite/

In typescript if a file is declared and not read prepend a `_`
- https://stackoverflow.com/questions/50011443/tslint-how-to-disable-error-somevariable-is-declared-but-its-value-is-never-rea

# Can't find a type declaration
- https://stackoverflow.com/questions/41292559/could-not-find-a-declaration-file-for-module-module-name-path-to-module-nam