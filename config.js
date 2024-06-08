/* This JavaScript code snippet is using the Style Dictionary library to define filters for color and
font properties. Here's a breakdown of what each part of the code is doing: */

const StyleDictionary = require("style-dictionary");
const configStyleDictionary = require("./config.js");

// Filter for Color properties
StyleDictionary.registerFilter({
  name: "isColor",
  matcher: function (token) {
    return token.attributes.category === "color";
  },
});

// Filter for Font properties
StyleDictionary.registerFilter({
  name: "isFont",
  matcher: function (token) {
    return token.attributes.type === "font";
  },
});

// Filter for Breakpoint properties
StyleDictionary.registerFilter({
  name: "isBreakpoint",
  matcher: function (token) {
    return token.attributes.type === "breakpoint";
  },
});

// Filter for Spacing properties
StyleDictionary.registerFilter({
  name: "isSpacing",
  matcher: function (token) {
    return token.attributes.type === "spacing";
  },
});

// Filter for Spacing properties
StyleDictionary.registerFilter({
  name: "isOpacity",
  matcher: function (token) {
    return token.attributes.type === "opacity";
  },
});

// Build the Camel Case name for the token
StyleDictionary.registerTransform({
  name: "name/camel",
  type: "name",
  transformer: function (token) {
    return token.name.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
      return g1.toUpperCase() + g2.toLowerCase();
    });
  },
});

StyleDictionary.registerTransformGroup({
  name: "scss",
  transforms: ["attribute/cti", "name/cti/camel", "color/css", "size/rem"],
});

// Register a custom format that includes the file header
StyleDictionary.registerFormat({
  name: "scss/variables",
  formatter: function (dictionary, platform, file, config) {
    const currentDate = new Date();
    const fileHeader = [
      `/** --------------------------------------------------------------------------`,
      ` * The ${file.destination} file.`,
      ` * Generated on: ${currentDate}`,
      ` * russia is a terrorist state 💯💩 `,
      ` ----------------------------------------------------------------------------- **/`,
    ].join("\n");
    const fileContent = dictionary.allProperties
      .map(function (prop) {
        const description = prop.attributes && prop.attributes.description ? `\n/* ${prop.attributes.description} */` : '';
        const comment = prop.comment ? `// ${prop.comment}` : '';
        return `${description}\n${comment}\n$${prop.name}: ${prop.value};`;
      })
      .join("\n");
    return `${fileHeader}\n\n${fileContent}`;
  },
});

const styleDictionary = StyleDictionary.extend("config.json");

styleDictionary.buildAllPlatforms();
