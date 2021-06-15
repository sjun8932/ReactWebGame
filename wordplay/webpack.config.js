const path = require('path');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app:['./client'], // client.jsx 안에서 WordRelay를 불러들이고 있으니 배열안에 client.jsx만 넣으면 된다.
    }, // 입력

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
               presets: ['@babel/preset-env', '@babel/preset-react'],
               plugins: ['@babel/plugin-proposal-class-properties'], 
            },
        }],
    },

    output: {
       path: path.join(__dirname, 'dist'), // C:\Users\SANGJUN\Desktop\SANGJUN\Programming\Workspace\vscode_workspace\ReactWebGame\wordplay\dist 이렇게 긴 파일 주소를 짧게 처리
       filename: 'app.js'
    } // 출력
};
