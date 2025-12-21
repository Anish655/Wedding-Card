
import sharp from 'sharp';

async function generateMobileBg() {
    const inputPath = 'src/assets/card_bg_optimized.jpg';
    const outputPath = 'src/assets/card_bg_mobile.png';

    // Desktop Dimensions: roughly landscape.
    // We want to extract the decorative side panels.
    // Let's assume the panels are roughly 20-25% of the width.

    const metadata = await sharp(inputPath).metadata();
    const width = metadata.width;
    const height = metadata.height;

    const panelWidth = Math.floor(width * 0.28); // Increased slightly to catch full arch

    // Output dimensions for mobile (e.g. 1080x1920 or similar aspect 9:16)
    // We'll scale the original height to match the new height if needed, 
    // or just create a canvas based on the original height but taller aspect?
    // Let's create a standard HD mobile canvas.
    const targetWidth = 1080;
    const targetHeight = 1920;

    console.log(`Original: ${width}x${height}`);
    console.log(`Extracting panels of width: ${panelWidth}`);

    // 1. Extract Left Panel (Bride + Shehnai)
    const leftPanel = await sharp(inputPath)
        .extract({ left: 0, top: 0, width: panelWidth, height: height })
        .toBuffer();

    // 2. Extract Right Panel (Groom + Tabla)
    const rightPanel = await sharp(inputPath)
        .extract({ left: width - panelWidth, top: 0, width: panelWidth, height: height })
        .toBuffer();

    // 3. Create a cream-colored background canvas
    // We pick a color from the center of the original image or use the CSS var #FFFDD0 (Cream)
    // #FFFDD0 is rgb(255, 253, 208)

    // We need to resize the panels to fit the new height (1920) while maintaining aspect ratio? 
    // If we just stretch height, they look distorted.
    // If we scale them up, they get wider.
    // Let's place them continuously.

    // Strategy: Resize panels to match targetHeight (1920)
    // New Panel Width?
    const scaleFactor = targetHeight / height;
    const scaledPanelWidth = Math.floor(panelWidth * scaleFactor);

    console.log(`Scaling panels by ${scaleFactor.toFixed(2)} to height 1920. New Width: ${scaledPanelWidth}`);

    const resizedLeft = await sharp(leftPanel).resize({ height: targetHeight }).toBuffer();
    const resizedRight = await sharp(rightPanel).resize({ height: targetHeight }).toBuffer();

    // 4. Composite
    await sharp({
        create: {
            width: targetWidth,
            height: targetHeight,
            channels: 4,
            background: { r: 255, g: 253, b: 208, alpha: 1 } // Cream background
        }
    })
        .composite([
            { input: resizedLeft, gravity: 'west' }, // Place on left edge
            { input: resizedRight, gravity: 'east' } // Place on right edge
        ])
        .toFile(outputPath);

    console.log('Mobile background generated at:', outputPath);
}

generateMobileBg().catch(console.error);
