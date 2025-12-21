import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsDir = path.join(__dirname, 'src/assets');

const tasks = [
    // Large JPEGs
    {
        input: 'card_front.jpg',
        output: 'card_front_optimized.jpg',
        type: 'jpeg',
        width: 1920
    },
    {
        input: 'card_inside.jpg',
        output: 'card_inside_optimized.jpg',
        type: 'jpeg',
        width: 1920
    },
    {
        input: 'card_details.jpg',
        output: 'card_details_optimized.jpg',
        type: 'jpeg',
        width: 1920
    },
    // Flowers (Convert to WebP)
    {
        input: 'real_marigold.png',
        output: 'real_marigold_optimized.webp',
        type: 'webp',
        width: 500
    },
    {
        input: 'real_rose_petal.png',
        output: 'real_rose_petal_optimized.webp',
        type: 'webp',
        width: 500
    }
];

async function optimize() {
    console.log('Starting batch optimization...');

    for (const task of tasks) {
        const inputPath = path.join(assetsDir, task.input);
        const outputPath = path.join(assetsDir, task.output);

        try {
            console.log(`Processing: ${task.input}...`);
            let pipeline = sharp(inputPath);

            // Resize if width is specified
            if (task.width) {
                pipeline = pipeline.resize(task.width, null, {
                    fit: 'inside',
                    withoutEnlargement: true
                });
            }

            // Format specific settings
            if (task.type === 'jpeg') {
                pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
            } else if (task.type === 'webp') {
                pipeline = pipeline.webp({ quality: 80, effort: 6 }); // Effort 6 = slower but better compression
            }

            await pipeline.toFile(outputPath);

            // Log results
            const oldStats = await fs.stat(inputPath);
            const newStats = await fs.stat(outputPath);
            const oldSize = (oldStats.size / 1024 / 1024).toFixed(2);
            const newSize = (newStats.size / 1024 / 1024).toFixed(2);
            const reduction = ((1 - newStats.size / oldStats.size) * 100).toFixed(1);

            console.log(`✓ ${task.output}: ${oldSize}MB -> ${newSize}MB (-${reduction}%)`);

        } catch (err) {
            console.error(`✗ Error processing ${task.input}:`, err.message);
        }
    }
    console.log('Batch optimization complete!');
}

optimize();
