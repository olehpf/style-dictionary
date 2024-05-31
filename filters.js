const StyleDictionary = require('style-dictionary');

StyleDictionary.registerFilter({
  name: 'isTextTransform',
  matcher: function(token) {
    return token.attributes.category === 'font' && ['lowercase', 'uppercase'].includes(token.value);
  }
});

const styleDictionary = StyleDictionary.extend('config.json');

styleDictionary.buildAllPlatforms();