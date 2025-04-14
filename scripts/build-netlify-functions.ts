import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Ensure netlify/functions directory exists
const functionsDir = path.join(rootDir, 'netlify', 'functions');
if (!fs.existsSync(functionsDir)) {
  fs.mkdirSync(functionsDir, { recursive: true });
}

// Build the API function
console.log('Building Netlify functions...');
exec(
  'esbuild netlify/functions/api.ts --platform=node --packages=external --bundle --format=esm --outdir=netlify/functions',
  { cwd: rootDir },
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Error building functions: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
    }
    if (stdout) {
      console.log(`stdout: ${stdout}`);
    }
    console.log('Netlify functions built successfully!');
  }
);

// Update package.json for Netlify
const pkgJsonPath = path.join(rootDir, 'package.json');
const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'));

// Add "@types/aws-lambda": "^8.10.119" to devDependencies if not already present
if (!pkgJson.devDependencies['@types/aws-lambda']) {
  console.log('Adding @types/aws-lambda to package.json...');
  
  // We can't modify package.json directly, so let's just print instructions
  console.log('\nPlease install @types/aws-lambda manually:');
  console.log('npm install --save-dev @types/aws-lambda');
}

console.log('\nBuild process completed!');