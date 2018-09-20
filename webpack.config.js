const HtmlWebPackPlugin = require("html-webpack-plugin");
const devMode = process.env.NODE_ENV !== 'production';


const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }  
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : 
                "css-loader",
                "postcss-loader",
                "sass-loader"
        ]
      }
    ]
  },
  plugins: [htmlPlugin]
};