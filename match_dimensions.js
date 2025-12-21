
import sharp from 'sharp';

async function matchDimensions() {
    const originalPath = 'src/assets/card_bg_optimized.jpg';
    const newPath = 'src/assets/card_bg_desktop_resized.png';
    const outputPath = 'src/assets/card_bg_desktop_resized.png';

    const original = sharp(originalPath);
    const metaOriginal = await original.metadata();

    console.log(`Original Dimensions: ${metaOriginal.width}x${metaOriginal.height}`);

    const newImg = sharp(newPath);
    const metaNew = await newImg.metadata();
    console.log(`New AI Dimensions: ${metaNew.width}x${metaNew.height}`);

    // Resize new image to exactly match original dimensions
    // This might stretch it if aspect ratio is slightly different, but user asked for "similar length breadth"
    await newImg
        .resize(metaOriginal.width, metaOriginal.height, { fit: 'fill' }) // 'fill' forces exact dims
        .toFile(outputPath);

    console.log(`Resized image saved to ${outputPath}`);
}

matchDimensions().catch(console.error);
