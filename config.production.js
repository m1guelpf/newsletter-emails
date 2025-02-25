module.exports = {
  build: {
    destination: {
      path: 'build_production',
    },
  },

  inlineCSS: {
    enabled: true,
  },

  cleanup: {
    removeUnusedCSS: {
      enabled: true,
      uglify: true,
    },
    preferBgColorAttribute: true,
  },

  minify: {
    minifyCSS: true,
    maxLineLength: 500,
    collapseWhitespace: true,
    processConditionalComments: true,
  },
}
