import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const config = {
  // Source directory
  sourceDir: path.join(__dirname, '../public/images'),
  // Output directory
  outputDir: path.join(__dirname, '../public/small_images'),
  // Image sizes to generate
  sizes: {
    small: { width: 400, height: 300 },    // For cards
    medium: { width: 800, height: 600 },   // For detail views
    thumbnail: { width: 200, height: 150 } // For previews
  },
  // Quality settings
  quality: {
    jpeg: 85,
    webp: 80,
    png: 90
  }
};

// Ensure output directory exists
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Get all image files recursively
function getAllImageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllImageFiles(fullPath));
    } else if (/\.(jpg|jpeg|png|webp)$/i.test(item)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Process a single image
async function processImage(imagePath) {
  try {
    const relativePath = path.relative(config.sourceDir, imagePath);
    const dirName = path.dirname(relativePath);
    const fileName = path.basename(imagePath, path.extname(imagePath));
    const ext = path.extname(imagePath).toLowerCase();
    
    console.log(`Processing: ${relativePath}`);
    
    // Create output directory structure
    const outputBaseDir = path.join(config.outputDir, dirName);
    ensureDir(outputBaseDir);
    
    // Process each size
    for (const [sizeName, dimensions] of Object.entries(config.sizes)) {
      const outputPath = path.join(outputBaseDir, `${fileName}_${sizeName}.webp`);
      
      await sharp(imagePath)
        .resize(dimensions.width, dimensions.height, {
          fit: 'cover',
          position: 'center'
        })
        .webp({ quality: config.quality.webp })
        .toFile(outputPath);
      
      console.log(`  ✓ Created ${sizeName}: ${path.relative(config.outputDir, outputPath)}`);
    }
    
    // Also create a PNG fallback for the small size
    const pngFallbackPath = path.join(outputBaseDir, `${fileName}_small.png`);
    await sharp(imagePath)
      .resize(config.sizes.small.width, config.sizes.small.height, {
        fit: 'cover',
        position: 'center'
      })
      .png({ quality: config.quality.png })
      .toFile(pngFallbackPath);
    
    console.log(`  ✓ Created PNG fallback: ${path.relative(config.outputDir, pngFallbackPath)}`);
    
  } catch (error) {
    console.error(`Error processing ${imagePath}:`, error.message);
  }
}

// Main function
async function main() {
  console.log('🖼️  Starting image resizing process...\n');
  
  // Ensure output directory exists
  ensureDir(config.outputDir);
  
  // Get all image files
  const imageFiles = getAllImageFiles(config.sourceDir);
  
  if (imageFiles.length === 0) {
    console.log('No images found in the source directory.');
    return;
  }
  
  console.log(`Found ${imageFiles.length} images to process:\n`);
  
  // Process each image
  for (const imagePath of imageFiles) {
    await processImage(imagePath);
  }
  
  console.log('\n✅ Image resizing completed!');
  console.log(`📁 Small images saved to: ${config.outputDir}`);
  console.log('\nGenerated sizes:');
  console.log('  - small: 400x300px (for cards)');
  console.log('  - medium: 800x600px (for detail views)');
  console.log('  - thumbnail: 200x150px (for previews)');
  console.log('\nFormats: WebP (primary) + PNG (fallback)');
}

// Run the script
main().catch(console.error);
