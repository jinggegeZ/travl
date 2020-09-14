module.exports = {
    devServer: {
      proxy: {
        '/api': {
          ws: false,
          target: 'http://v.juhe.cn/',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        },
      }
    }
  }