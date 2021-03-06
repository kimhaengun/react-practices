const path = require('path');

module.exports = (env) => {

    const entry = path.resolve(`src/${env.src}/index.js`);

    return {
        mode: 'development',
        entry: entry,
        output: {
            path: path.resolve('public'),
            filename: 'bundle.js',
            assetModuleFilename: 'assets/images/[hash][ext]'
        },
        module: {
            rules: [{
                test: /\.js$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    configFile: path.resolve('config/babel.config.json')
                }
            }, {
                test: /\.(sa|sc|c)ss$/i,
                use:['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
                type: 'asset/resource'
            }]
        },
        devtool: "eval-source-map",
        devServer: {
            host: '0.0.0.0',
            port: 9999,
            // inline: true
            hot: false,
            compress: true,
            historyApiFallback: true
        }
    };
}