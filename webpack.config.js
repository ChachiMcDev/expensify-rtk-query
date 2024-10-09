const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = (env) => {
    const { production } = env;

    return {
        entry: './src/app.js',
        mode: production ? 'production' : 'development',
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'bundle.js'
        },
        devtool: production ? 'source-map' : 'eval-cheap-source-map',
        devServer: {
            static: {
                directory: path.join(__dirname, 'public')
            },
            historyApiFallback: true,
            compress: true,
            port: 9000,
        },
        plugins: [new MiniCssExtractPlugin({
            filename: 'styles.css'
        })],
        module: {
            rules: [{
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                //use: ['style-loader', 'css-loader', 'sass-loader'],
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }]
        }

    }

}