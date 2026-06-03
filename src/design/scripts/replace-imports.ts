/**
 * replace-imports.ts
 *
 * Recursively scans a directory and replaces absolute-style imports
 * of `/src/types/variants.types` with a relative import path.
 *
 * Usage:
 *   pnpm tsx scripts/replace-imports.ts ./src
 *
 * Inputs:
 *   - rootDir: directory to scan
 *
 * Output:
 *   - Files modified in-place
 */

import fs from 'node:fs';
import path from 'node:path';

/**
 * Target replacement rules
 */
const TARGET_IMPORT = `/src/types/variants.types`;
const REPLACEMENT = `../../types/variants.types`;

/**
 * Recursively walk directory and collect file paths
 */
function walk(dir: string, files: string[] = []): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath, files);
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Replace import strings in a file if needed
 */
function processFile(filePath: string): void {
  const ext = path.extname(filePath);

  // Only process relevant source files
  if (!['.ts', '.tsx', '.astro', '.js', '.jsx'].includes(ext)) return;

  const original = fs.readFileSync(filePath, 'utf8');

  if (!original.includes(TARGET_IMPORT)) return;

  const updated = original.replaceAll(
    `from '${TARGET_IMPORT}'`,
    `from '${REPLACEMENT}'`
  );

  if (updated !== original) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

/**
 * Entry point
 */
function run(): void {
  const rootDir = process.argv[2];

  if (!rootDir) {
    console.error('Usage: tsx scripts/replace-imports.ts <directory>');
    process.exit(1);
  }

  const absRoot = path.resolve(rootDir);
  const files = walk(absRoot);

  for (const file of files) {
    processFile(file);
  }

  console.log('Done.');
}

run();