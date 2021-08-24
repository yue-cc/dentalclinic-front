module.exports = {
  publicPath: './',

  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '佳友牙醫診所'
        return args
      })
  },

  transpileDependencies: [
    'vuetify'
  ]
}
