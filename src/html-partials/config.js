const path = require('path')


const partialOrder = [
  'App', // => path/to/App.partial.html
  /*
  {
    name: 'App', // => path/.../App.partial.html
    otherConfig: '...', // check docs here: https://www.npmjs.com/package/html-webpack-partials-plugin
  }
  */
]


function buildPath(partial) {
  return path.resolve(__dirname, partial+'.partial.html')
}


function buildHtmlWebpackPartialConfig(partial) {
  if (typeof partial === 'string') {
    return {
      path: buildPath(partial)
    }
  }

  const { partialName, ...config } = partial
  config.path = buildPath(partial.name)

  return config
}


module.exports = partialOrder.map(buildHtmlWebpackPartialConfig)