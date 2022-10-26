module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        // 这里的选项会传递给 postcss-loader
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 37.5, //效果的宽度/10
            unitPrecision: 5,
            propList: ['*'], //需要转换属性
            // selectorBlackList: ['.borderBottom'], //不编译选择器
            replace: true,
            mediaQuery: false,
            minPixelValue: 0,
            exclude: /node_modules/i
          })
        ]
      }
    }
  },
  devServer: {
    proxy: {
      '/ajax': {
        target: 'https://m.maoyan.com/',
        changeOrigin: true,
      }
    }
  }

}