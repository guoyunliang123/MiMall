module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    // proxy: {
    //   '/activity': {
    //     target: 'https://www.imooc.com',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '/activity': '/activity'
    //     }
    //   }
    // }
    proxy: {
      '/api': {
        target: 'https://www.imooc.com',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}