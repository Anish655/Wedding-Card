
import sharp from 'sharp';
import path from 'path';

async function generateNarrowMobileBg() {
    const inputPath = 'C:/Users/ASUS/.gemini/antigravity/brain/a562f1bf-da38-48c0-b424-6901f486a688/card_bg_mobile_v2_1766322047416.png';
    const outputPath = 'src/assets/card_bg_mobile.png';

    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(`Input dimensions: ${metadata.width}x${metadata.height}`);

    // Mobile Wallpaper Logic (v5):
    // Create an image that is TALL (1080x1920).
    // Extract Left and Right panels.
    // Overlap them significantly so they fill the screen width but are "close" to center.
    // This removes the "middle yellow parts".

    const targetWidth = 1080;
    const targetHeight = 1920;

    // Extract roughly 40% panels
    const panelWidth = Math.floor(metadata.width * 0.40);

    const leftPanel = await sharp(inputPath)
        .extract({ left: 0, top: 0, width: panelWidth, height: metadata.height })
        .toBuffer();

    const rightPanel = await sharp(inputPath)
        .extract({ left: metadata.width - panelWidth, top: 0, width: panelWidth, height: metadata.height })
        .toBuffer();

    // Resize panels to fill the target Height (1920)
    // This will scale them up significantly.
    const resizedLeft = await sharp(leftPanel).resize({ height: targetHeight }).toBuffer();
    const resMeta = await sharp(resizedLeft).metadata();
    console.log(`Resized panel width: ${resMeta.width}`);

    const resizedRight = await sharp(rightPanel).resize({ height: targetHeight }).toBuffer();

    // Composite:
    // Left Panel at x=0.
    // Right Panel at x = targetWidth - panelWidth.
    // If panelWidth > 540 (half of 1080), they will overlap in middle.
    // If original width 1024 * 0.4 = 410.
    // Scaling: 1920 / 1024 = 1.875.
    // New Width: 410 * 1.875 = ~768px.
    // Left Panel (768px) at 0. Ends at 768.
    // Right Panel (768px) at 1080 - 768 = 312. Starts at 312.
    // Overlap zone: 312 to 768 (456px overlap).
    // This means the "middle" is a mix, but the sides (where figures are) are preserved at edges.
    // Figures are usually in the middle of these panels.
    // If figures are centered in the 768px panel, they will be at ~384px from left edge.
    // 384px is approx 35% of 1080 screen width. So they will be visible!

    await sharp({
        create: {
            width: targetWidth,
            height: targetHeight,
            channels: 4,
            background: { r: 255, g: 253, b: 208, alpha: 1 }
        }
    })
        .composite([
            { input: resizedLeft, gravity: 'west' },
            { input: resizedRight, gravity: 'east' }
        ])
        .toFile(outputPath);

    console.log(`Generated overlapping tall mobile bg (v5) at ${outputPath}`);
}

generateNarrowMobileBg().catch(console.error);
