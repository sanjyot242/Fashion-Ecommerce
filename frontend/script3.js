import fs from 'fs';
import path from 'path';
import combinedTokens from './combinedTokens.json' assert { type: 'json' }; // Import combinedTokens.json
import customClasses from './tailwindCustomClasses.json' assert { type: 'json' }; // Import tailwindCustomClasses.json

// Replace CSS variables with actual color values from combinedTokens.json
const replaceCSSVariablesWithValues = (classes, tokens) => {
  const updatedClasses = { ...classes };

  // Function to replace 'var(--color)' with actual color value from tokens
  const replaceVariableWithColor = (value) => {
    const cssVariableMatch = value.match(/var\(--([^)]+)\)/);
    if (cssVariableMatch) {
      const cssVariableName = cssVariableMatch[1]; // Extract color name, e.g., "gray-900"
      return tokens[cssVariableName] || value; // Replace with actual color value if it exists
    }
    return value; // Return original value if no match
  };

  // Process textColor
  Object.keys(updatedClasses.textColor).forEach((key) => {
    updatedClasses.textColor[key] = replaceVariableWithColor(updatedClasses.textColor[key]);
  });

  // Process backgroundColor
  Object.keys(updatedClasses.backgroundColor).forEach((key) => {
    updatedClasses.backgroundColor[key] = replaceVariableWithColor(updatedClasses.backgroundColor[key]);
  });

  // Process borderColor
  Object.keys(updatedClasses.borderColor).forEach((key) => {
    updatedClasses.borderColor[key] = replaceVariableWithColor(updatedClasses.borderColor[key]);
  });

  return updatedClasses;
};

// Replace variables in customClasses with actual values from combinedTokens
const updatedCustomClasses = replaceCSSVariablesWithValues(customClasses, combinedTokens.colors);

// Write the updated customClasses back to a file
const outputPath = path.resolve('./tailwindCustomClassesUpdated.json');
fs.promises.writeFile(outputPath, JSON.stringify(updatedCustomClasses, null, 2))
  .then(() => console.log('Updated custom classes with actual color values'))
  .catch(err => console.error('Error writing the file:', err));
