module.exports = function (eleventyConfig) {
  // Copy CSS and fonts to `_site/`
  eleventyConfig.addPassthroughCopy({ 'src/css': 'css', 'src/fonts': 'fonts' });

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
  };
};
