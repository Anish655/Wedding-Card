import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'src/assets/card_bg_clear.jpg');
const outputPath = path.join(__dirname, 'src/assets/card_bg_optimized.jpg');

async function optimize() {
    try {
        console.log('Reading image:', inputPath);

        await sharp(inputPath)
            .resize(1920, null, { // Width 1920, auto height
                fit: 'inside',
                withoutEnlargement: true
            })
            .jpeg({
                quality: 80,
                mozjpeg: true // Use mozjpeg for better compression
            })
            .toFile(outputPath);

        console.log('Done! Saved to:', outputPath);

        // Get file stats
        const fs = await import('fs/promises');
        const stats = await fs.stat(outputPath);
        console.log(`New size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);

    } catch (err) {
        console.error('Error optimizing image:', err);
    }
}

optimize();
