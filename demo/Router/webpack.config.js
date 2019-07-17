
module.exports = {
    entry: __dirname + '/jsx/app.jsx',
    output: {
        path: __dirname + '/js',
        filename: 'bundle.js'
    },
    devServer: {
        // 指定页面加载目录,加载页面默认为index.html
        contentBase: './',
        // 修改JSX后，页面自动刷新
        inline: true
    },
    module: {
        rules: [
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    }
}