const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        "corejs": 3,
                                        "useBuiltIns": "usage",
                                        "debug": true,
                                        "modules": false
                                    }
                                ],
                                ["@babel/preset-react"]
                            ],
                            plugins: [
                                "@babel/plugin-proposal-class-properties"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html"
        }),

    ],
    devServer: {
        open: true
    }
}