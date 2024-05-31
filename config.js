/* This JavaScript code snippet is using the Style Dictionary library to define filters for color and
font properties. Here's a breakdown of what each part of the code is doing: */

const StyleDictionary = require('style-dictionary');
const configStyleDictionary = require('./config.js');

// Filter for color properties
StyleDictionary.registerFilter({
  name: 'isColor',
  matcher: function (token) {
    return token.path[0] === 'light' || token.path[0] === 'dark';
  }
});

// Filter for font properties
StyleDictionary.registerFilter({
  name: 'isFont',
  matcher: function (token) {
    return token.path[0] === 'desktop' || token.path[0] === 'mobile';
  }
});

const styleDictionary = StyleDictionary.extend('config.json');
styleDictionary.buildAllPlatforms();