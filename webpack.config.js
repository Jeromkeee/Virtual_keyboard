const path = require('path')

module.exports = {
    mode: 'development',
    entry: './indexGen.js', //'./src/indexGen.js'
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}