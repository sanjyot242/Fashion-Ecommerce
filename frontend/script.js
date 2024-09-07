import fs from 'fs';
import path from 'path';

// Paths to your CSS files
const primitiveModePath = path.resolve('./_primitive-mode-1.css');
const spacingTokensPath = path.resolve('./_spacing-tokens-mode-1.css');
const primitiveSpacersPath = path.resolve('./_primitive-spacers-mode-1.css');
const semanticModePath = path.resolve('./_semantic-mode-1.css');

// Function to extract tokens from CSS content
const extractTokens = (fileContent) => {
  const tokens = {};
  const regex = /'(.*?)':\s(.*?);/g;
  let match;

  while ((match = regex.exec(fileContent)) !== null) {
    tokens[match[1]] = match[2];
  }

  return tokens;
};

// Read and parse the CSS files asynchronously
const readAndParseFiles = async () => {
  try {
    const primitiveTokens = extractTokens(await fs.promises.readFile(primitiveModePath, 'utf8'));
    const spacingTokens = extractTokens(await fs.promises.readFile(spacingTokensPath, 'utf8'));
    const primitiveSpacers = extractTokens(await fs.promises.readFile(primitiveSpacersPath, 'utf8'));
    const semanticTokens = extractTokens(await fs.promises.readFile(semanticModePath, 'utf8'));

    // Combine all tokens into one object
    const combinedTokens = {
      colors: {},
      spacing: {},
      padding: {},
      borderRadius: {},
    };

    // Map tokens into Tailwind's structure
    Object.keys(primitiveTokens).forEach((key) => {
      if (key.includes('gray') || key.includes('primary') || key.includes('success') || key.includes('warning') || key.includes('destructive') || key.includes('information')|| key.includes('shades'))  {
        combinedTokens.colors[key] = primitiveTokens[key];
      }
    });

    Object.keys(spacingTokens).forEach((key) => {
      if (key.startsWith('padding-padding')) {
        const paddingKey = key.replace('padding-padding-', '');
        combinedTokens.padding[paddingKey] = spacingTokens[key];
      } else if (key.startsWith('radius-radius')) {
        const radiusKey = key.replace('radius-radius-', '');
        combinedTokens.borderRadius[radiusKey] = spacingTokens[key];
      }
    });

    Object.keys(primitiveSpacers).forEach((key) => {
      combinedTokens.spacing[key] = primitiveSpacers[key];
    });

    // Output the combined tokens as a JSON file
    const outputPath = path.resolve('./combinedTokens.json');
    await fs.promises.writeFile(outputPath, JSON.stringify(combinedTokens, null, 2), 'utf8');

    console.log('Combined tokens outputted to combinedTokens.json');
  } catch (error) {
    console.error('Error reading or parsing files:', error);
  }
};

// Call the function to read and process the files
readAndParseFiles();
