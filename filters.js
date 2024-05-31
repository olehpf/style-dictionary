const StyleDictionary = require('style-dictionary');

// Filter for color properties
StyleDictionary.registerFilter({
  name: 'isColor',
  matcher: function(token) {
    return token.path[0] === 'light';
  }
});

// Filter for font properties
StyleDictionary.registerFilter({
  name: 'isFont',
  matcher: function(token) {
    return token.path[0] === 'size';
  }
});

const styleDictionary = StyleDictionary.extend('config.json');

styleDictionary.buildAllPlatforms();