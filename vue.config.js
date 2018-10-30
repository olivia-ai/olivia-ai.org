// vue.config.js
module.exports = {
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
    },
    appleMobileWebAppCapable: 'yes',
    themeColor: '#f32173',
    msTileColor: '#fff',
    iconPaths: {
      favicon32: "img/icons/favicon-32x32.png",
      favicon16: "img/icons/favicon-16x16.png",
      appleTouchIcon: "img/icons/apple-touch-icon-152x152.png",
      msTileImage: "img/icons/msapplication-icon-144x144.png"
    }
  }
}