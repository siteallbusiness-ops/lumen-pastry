import { readdir, stat, unlink } from 'node:fs/promises';
import { join, relative } from 'node:path';
import sharp from 'sharp';

const IMAGE_ROOT = new URL('../public/images', import.meta.url).pathname;
const WEBP_QUALITY = 85;

async function collectPngFiles(dir, files = []) {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      await collectPngFiles(fullPath, files);
      continue;
    }

    if (entry.name.toLowerCase().endsWith('.png')) {
      files.push(fullPath);
    }
  }

  return files;
}

async function convertImage(inputPath) {
  const outputPath = inputPath.replace(/\.png$/i, '.webp');
  const before = (await stat(inputPath)).size;

  await sharp(inputPath)
    .webp({ quality: WEBP_QUALITY, effort: 6 })
    .toFile(outputPath);

  const after = (await stat(outputPath)).size;
  const saved = Math.round((1 - after / before) * 100);

  await unlink(inputPath);

  return {
    file: relative(IMAGE_ROOT, inputPath),
    before,
    after,
    saved,
  };
}

const files = await collectPngFiles(IMAGE_ROOT);

if (files.length === 0) {
  console.log('No PNG files found in public/images.');
  process.exit(0);
}

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const result = await convertImage(file);
  totalBefore += result.before;
  totalAfter += result.after;
  console.log(
    `${result.file} → ${result.file.replace(/\.png$/i, '.webp')} (${formatBytes(result.before)} → ${formatBytes(result.after)}, -${result.saved}%)`
  );
}

console.log(
  `\nConverted ${files.length} images. Total: ${formatBytes(totalBefore)} → ${formatBytes(totalAfter)} (-${Math.round((1 - totalAfter / totalBefore) * 100)}%)`
);

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}
