module.exports = {
    devServer: {
      proxy: {
        'weather': {
          target:'http://api.openweathermap.org/data/2.5',
          ws: true,
          changeOrigin: true
        }
      }
    },
  }