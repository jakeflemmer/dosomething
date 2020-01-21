var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
		entry : ["babel-polyfill", './src/index.js'],
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js',
				publicPath: '/'
    },
    module : {
        rules : [
            {test : /\.(js|jsx)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']},
						{test : /\.(jpg|png)$/, use:['url-loader']}
        ]
    },
		mode:'development',
		devServer: {
			historyApiFallback: true
		},
    plugins : [
        new HtmlWebpackPlugin ({
            template : './src/index.html'
        })
    ],
		resolve: {
			extensions: ['.js', '.jsx'],
		}
};
