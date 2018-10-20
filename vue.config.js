module.exports = {
  baseUrl: ".",
  pwa: {
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "./src/service-worker.js"
    },
    iconPaths: {
      appleTouchIcon: "images/icons/icon-152x152.png",
      maskIcon: null,
      msTileImage: "images/icons/icon-144x144.png"
    }
  }
}