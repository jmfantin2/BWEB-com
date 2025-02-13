module.exports = function (eleventyConfig) {
  // Copy CSS and fonts to `_site/`
  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' });
  eleventyConfig.addPassthroughCopy({ 'src/css': 'css' });
  eleventyConfig.addPassthroughCopy({ 'src/fonts': 'fonts' });
  eleventyConfig.addPassthroughCopy('src/favicon.ico');

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
  };
};
