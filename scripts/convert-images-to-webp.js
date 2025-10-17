import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ASSETS_DIR = join(__dirname, '../src/assets');
const PUBLIC_DIR = join(__dirname, '../public');
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png'];
const WEBP_QUALITY = 85;

async function convertImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  
  if (!IMAGE_EXTENSIONS.includes(ext)) {
    return;
  }

  const outputPath = filePath.replace(new RegExp(`${ext}$`), '.webp');
  
  try {
    await sharp(filePath)
      .webp({ quality: WEBP_QUALITY })
      .toFile(outputPath);
    
    const originalStats = await stat(filePath);
    const webpStats = await stat(outputPath);
    const savedPercentage = ((1 - webpStats.size / originalStats.size) * 100).toFixed(1);
    
    console.log(`✅ Converted: ${basename(filePath)} → ${basename(outputPath)}`);
    console.log(`   Size: ${(originalStats.size / 1024).toFixed(1)}KB → ${(webpStats.size / 1024).toFixed(1)}KB (${savedPercentage}% smaller)`);
  } catch (error) {
    console.error(`❌ Error converting ${filePath}:`, error.message);
  }
}

async function processDirectory(directory) {
  try {
    const entries = await readdir(directory, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = join(directory, entry.name);
      
      if (entry.isDirectory()) {
        await processDirectory(fullPath);
      } else if (entry.isFile()) {
        await convertImage(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${directory}:`, error.message);
  }
}

async function main() {
  console.log('🖼️  Starting image conversion to WebP format...\n');
  
  console.log('📁 Processing assets directory...');
  await processDirectory(ASSETS_DIR);
  
  console.log('\n📁 Processing public directory...');
  await processDirectory(PUBLIC_DIR);
  
  console.log('\n✨ Image conversion complete!');
  console.log('\n📝 Next steps:');
  console.log('1. Update <img> tags to use <OptimizedImage> component');
  console.log('2. Verify WebP images are loading correctly');
  console.log('3. Run a production build: npm run build');
  console.log('4. Test with PageSpeed Insights');
}

main().catch(console.error);

