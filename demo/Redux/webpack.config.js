module.exports = {
    entry: './index.jsx',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.jsx?$/, loader: 'babel-loader'}
        ]
    },
    devServer: {
        contentBase: './public'
    }
}