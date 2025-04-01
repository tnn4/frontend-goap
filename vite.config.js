
/*see: https://vite.dev/config/*/
export default {
  // ...
  // generate source maps for debugging
  build: {
    // sourcemap: command === 'serve' ? 'inline' : false
    // inline = the sourcemap will be appended to resulting output file as a data URI
    sourcemap: 'inline'
  }
}



