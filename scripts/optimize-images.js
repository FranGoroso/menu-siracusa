import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';
import sharp from 'sharp';

const DIST_DIR = 'dist';
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

/**
 * Optimiza imágenes para mejorar el rendimiento
 */
async function optimizeImages() {
  console.log('🖼️ Optimizing images in build directory...');
  
  try {
    // Encontrar todas las imágenes en el directorio de distribución
    const imagePaths = await findImages(DIST_DIR);
    console.log(`Found ${imagePaths.length} images to optimize.`);
    
    // Optimizar cada imagen
    for (const imagePath of imagePaths) {
      await optimizeImage(imagePath);
    }
    
    console.log('✅ Image optimization complete!');
  } catch (error) {
    console.error('❌ Error optimizing images:', error);
    process.exit(1);
  }
}

/**
 * Busca recursivamente todas las imágenes en un directorio
 */
async function findImages(dir, images = []) {
  const files = await readdir(dir);
  
  for (const file of files) {
    const path = join(dir, file);
    const stats = await stat(path);
    
    if (stats.isDirectory()) {
      await findImages(path, images);
    } else if (IMAGE_EXTENSIONS.includes(extname(file).toLowerCase())) {
      images.push(path);
    }
  }
  
  return images;
}

/**
 * Optimiza una imagen individual
 */
async function optimizeImage(imagePath) {
  try {
    const ext = extname(imagePath).toLowerCase();
    const image = sharp(imagePath);
    
    // Análisis básico de la imagen
    const metadata = await image.metadata();
    
    // Configuración basada en el tipo de imagen
    let optimizedImage;
    
    switch (ext) {
      case '.jpg':
      case '.jpeg':
        optimizedImage = image.jpeg({ quality: 80 });
        break;
      case '.png':
        optimizedImage = image.png({ quality: 80, compressionLevel: 9 });
        break;
      case '.webp':
        optimizedImage = image.webp({ quality: 80 });
        break;
      default:
        console.log(`Skipping unsupported image: ${imagePath}`);
        return;
    }
    
    // Reducir dimensiones si son mayores de 1200px en cualquier dirección
    if (metadata.width > 1200 || metadata.height > 1200) {
      optimizedImage = optimizedImage.resize(
        metadata.width > metadata.height ? 1200 : null,
        metadata.width <= metadata.height ? 1200 : null,
        { fit: 'inside' }
      );
    }
    
    // Guardar la imagen optimizada
    await optimizedImage.toBuffer().then(data => {
      return sharp(data).toFile(imagePath);
    });
    
    console.log(`Optimized: ${imagePath}`);
  } catch (error) {
    console.error(`Error optimizing ${imagePath}:`, error);
  }
}

// Ejecutar la optimización
optimizeImages();
