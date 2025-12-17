
const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

const PROCESS_LIST = [
    { input: 'C:/Users/ASUS/.gemini/antigravity/brain/f1e42f25-0236-4576-8fae-d49f6b070b5c/green_marigold_1766009456394.png', output: 'c:/Users/ASUS/Card/src/assets/real_marigold.png' },
    { input: 'C:/Users/ASUS/.gemini/antigravity/brain/f1e42f25-0236-4576-8fae-d49f6b070b5c/green_petal_1766009575895.png', output: 'c:/Users/ASUS/Card/src/assets/real_rose_petal.png' },
    { input: 'C:/Users/ASUS/.gemini/antigravity/brain/f1e42f25-0236-4576-8fae-d49f6b070b5c/green_divider_1766009592167.png', output: 'c:/Users/ASUS/Card/src/assets/gold_divider.png' }
];

async function processImages() {
    for (const item of PROCESS_LIST) {
        try {
            console.log(`Processing ${item.input}...`);
            const image = await Jimp.read(item.input);

            // Scan every pixel
            image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
                const red = this.bitmap.data[idx + 0];
                const green = this.bitmap.data[idx + 1];
                const blue = this.bitmap.data[idx + 2];
                // const alpha = this.bitmap.data[idx + 3];

                // Simple Green Screen Logic
                // If Green is dominant and significantly brighter than Red and Blue
                if (green > 100 && green > red + 40 && green > blue + 40) {
                    this.bitmap.data[idx + 3] = 0; // Set Alpha to 0 (Transparent)
                }
                // refine edges (despill) - if it's somewhat green but not full background, reduce green
                else if (green > red && green > blue) {
                    // slight edge clean up often needed
                    // simple approach: reduce green to avg of red/blue if it exceeds them too much
                    // this.bitmap.data[idx + 1] = Math.max(red, blue); 
                }
            });

            await image.writeAsync(item.output);
            console.log(`Saved transparent image to ${item.output}`);
        } catch (err) {
            console.error(`Error processing ${item.input}:`, err);
        }
    }
}

processImages();
