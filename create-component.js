#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// 1. Get arguments from terminal
const [,, targetDir] = process.argv;

if (!targetDir) {
  console.error('❌ Please provide a directory path. Example: node create-component.js src/components/ui/MyNewButton');
  process.exit(1);
}

// 2. Extract the component folder name to use as our base name
const componentDirName = path.basename(targetDir);

// 3. Helper helpers to format the casings accurately
const toPascalCase = (str) => str.replace(/(^\w|-\w)/g, m => m.replace('-', '').toUpperCase());
const toKebabCase = (str) => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
const toCamelCase = (str) => str.replace(/-./g, m => m[1].toUpperCase()).replace(/^./, m => m.toLowerCase());

// Generate the specific case shapes
const namePascal = toPascalCase(componentDirName);
const nameKebab  = toKebabCase(componentDirName);
const nameCamel  = toCamelCase(namePascal); // Safe transition from Pascal to Camel

// 4. Define the file blueprints
const filesToCreate = [
  {
    name: `${namePascal}.astro`,
    content: `---\n// ${namePascal}.astro\n---\n`
  },
  {
    name: `${nameKebab}.css`,
    content: `/* --- ${nameKebab}.css --- */\n/* CSS companion for ./${namePascal}.astro */\n`
  },
  {
    name: `${nameCamel}.ts`,
    content: `/// <reference path="./${namePascal}.astro" />\n/**\n * ${nameCamel}.ts\n * Component variants\n */\n`
  },
  {
    name: `${namePascal}.types.ts`,
    content: `/// <reference path="./${namePascal}.astro" />\n/**\n * ${namePascal}.types.ts\n * Type definitions\n */\n`
  }
];

// 5. Run the creation loop
try {
  // Ensure the directory exists (creates nested folders if they don't exist yet)
  fs.mkdirSync(targetDir, { recursive: true });

  console.log(`📁 Target directory verified: ${targetDir}\n`);

  filesToCreate.forEach(file => {
    const filePath = path.join(targetDir, file.name);
    
    // Check if file already exists so we don't accidentally wipe work
    if (fs.existsSync(filePath)) {
      console.log(`⚠️ Skipped: ${file.name} (already exists)`);
    } else {
      fs.writeFileSync(filePath, file.content, 'utf8');
      console.log(`✅ Created: ${file.name}`);
    }
  });

  console.log('\n🎉 Component boilerplate successfully generated!');
} catch (error) {
  console.error('❌ An error occurred while writing files:', error.message);
}