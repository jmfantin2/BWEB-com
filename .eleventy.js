module.exports = function (eleventyConfig) {
  // Tell Eleventy to copy `src/css/` into `_site/css/`
  eleventyConfig.addPassthroughCopy({ 'src/css': 'css' });

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
  };
};
