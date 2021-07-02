const path = require('path');
const webpack = require('webpack');

module.exports = {

    mode: 'development',
    devtool: 'eval',  // 배포 단계에서는 hidden-source-map
    resolve: {
        extensions: ['.jsx', '.js'],
    },
 
    entry: {
        app: './client',
    },

    module: {

        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [['@babel/preset-env', {targets: { browsers: ['> 5% in KR', 'last 2 chrome versions'],},debug: true,}], '@babel/preset-react'],
                plugins: [],
            },
        }],
    },
    plugins:[
        new webpack.LoaderOptionsPlugin({ debug: true }),
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    },
};