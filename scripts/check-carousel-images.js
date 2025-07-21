const fs = require('fs');
const path = require('path');

// Images du carrousel
const carouselImages = [
  'porri-village.jpg',
  'porri-ruelles.jpg', 
  'porri-architecture.jpg',
  'porri-place.jpg',
  'porri-eglise.jpg',
  'porri-paysage.jpg',
  'porri-chataigniers.jpg',
  'porri-mer.jpg'
];

const imagesDir = path.join(__dirname, '../public/images');

console.log('🔍 Vérification des images du carrousel...\n');

// Vérifier chaque image
carouselImages.forEach((imageName, index) => {
  const imagePath = path.join(imagesDir, imageName);
  
  if (fs.existsSync(imagePath)) {
    const stats = fs.statSync(imagePath);
    const sizeKB = Math.round(stats.size / 1024);
    console.log(`✅ ${imageName} - ${sizeKB}KB`);
  } else {
    console.log(`❌ ${imageName} - MANQUANTE`);
  }
});

console.log('\n📊 Résumé :');
const existingImages = carouselImages.filter(img => 
  fs.existsSync(path.join(imagesDir, img))
);

console.log(`- Images présentes : ${existingImages.length}/${carouselImages.length}`);
console.log(`- Images manquantes : ${carouselImages.length - existingImages.length}`);

if (existingImages.length === carouselImages.length) {
  console.log('\n🎉 Toutes les images du carrousel sont disponibles !');
} else {
  console.log('\n⚠️  Certaines images sont manquantes.');
} 