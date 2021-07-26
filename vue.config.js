module.exports = {
    chainWebpack: config => {
        config.module.rules[{
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
        publicPath:'/kikolog/'
      }]
    }
}