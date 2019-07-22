// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module.rule('loaders')
      .test(/\.(png|svg|gif|md)$/)
      .use('file')
      .loader('file-loader')
      .end()
  },
  pwa: {
    name: "Olivia",
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    themeColor: '#ff3aaf',
    msTileColor: '#fff',
    iconPaths: {
      favicon32: "img/icons/favicon-32x32.png",
      favicon16: "img/icons/favicon-16x16.png",
      appleTouchIcon: "img/icons/apple-touch-icon-152x152.png",
      msTileImage: "img/icons/msapplication-icon-144x144.png"
    },
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
    }
  },
  pluginOptions: {
    cordovaPath: "cordova"
  }
}