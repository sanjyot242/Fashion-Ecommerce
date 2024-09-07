import fs from 'fs';
import path from 'path';

// Path to your CSS file
const semanticFilePath = path.resolve('./_semantic-mode-1.css');

// Function to extract tokens and format for Tailwind
const generateTailwindClasses = (fileContent) => {
  const tailwindClasses = {
    textColor: {},
    backgroundColor: {},
    borderColor: {}
  };

  const regex = /'(.*?)':\s*(.*?);/g;
  let match;

  while ((match = regex.exec(fileContent)) !== null) {
    const className = match[1];
    const value = match[2].trim();

    // Map to text color classes
    if (className.startsWith('text-')) {
      const formattedClass = className.replace('text-text-', 'text-');
      tailwindClasses.textColor[formattedClass] = value;
    }

    // Map to background color classes
    if (className.startsWith('background-')) {
      const formattedClass = className.replace('background-bg-', 'bg-');
      tailwindClasses.backgroundColor[formattedClass] = value;
    }

    // Map to border color (stroke) classes
    if (className.startsWith('stroke-')) {
      const formattedClass = className.replace('stroke-stroke-', 'stroke-');
      tailwindClasses.borderColor[formattedClass] = value;
    }
  }

  return tailwindClasses;
};

// Read and process the CSS file
const processSemanticFile = async () => {
  try {
    const fileContent = await fs.promises.readFile(semanticFilePath, 'utf8');
    const customClasses = generateTailwindClasses(fileContent);

    // Output the custom utility classes
    const outputPath = path.resolve('./tailwindCustomClasses.json');
    await fs.promises.writeFile(outputPath, JSON.stringify(customClasses, null, 2), 'utf8');

    console.log('Custom utility classes outputted to tailwindCustomClasses.json');
  } catch (error) {
    console.error('Error reading or processing the file:', error);
  }
};

// Run the script
processSemanticFile();
