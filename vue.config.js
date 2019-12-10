module.exports = {
  publicPath: './',
  pwa: { /* disabling PWA until finished */
    serviceWorker: false,
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/sw.js', /* Empty file. */
    },
  },
};
