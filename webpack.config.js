const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/assets/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // supprime les fichiers anciens à chaque build
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // au lieu de style-loader
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html', // ton template HTML source
      filename: 'index.html',
      inject: 'body', // insère le JS en bas du <body>
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      `...`, // ← garde les minimizers par défaut (comme Terser)
      new CssMinimizerPlugin(),
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'), // dossier à servir
    },
    open: true,         // ouvre le navigateur automatiquement
    hot: true,          // active le hot reload
    port: 3000,         // port (change si besoin)
  },
};
