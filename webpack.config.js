const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"), // build nantr file kuthe thevychi to path
    filename: "bundle.js", // bundle file cha name
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html", // dom madhe initially index.html load kryla
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000, // index.js chi size limits
    maxAssetSize: 512000, // assets chi size limits
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: {
          loader: "babel-loader", // library to load js and jsx files
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, 
        use: ["style-loader", "css-loader", "sass-loader"], //lib to load styling files
      }
    ],
  },
};
