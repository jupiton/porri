const fs = require('fs');
const path = require('path');

const carouselImages = [
  'porri-carousel-1.jpg',
  'porri-carousel-2.jpg',
  'porri-carousel-3.jpg',
  'porri-carousel-4.jpg',
  'porri-carousel-5.jpg',
  'porri-carousel-6.jpg',
  'porri-carousel-7.jpg',
  'porri-carousel-8.jpg'
];

const imagesDir = path.join(__dirname, '../public/images');

console.log('🎠 Vérification des images du carrousel...\n');

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

if (existingImages.length === carouselImages.length) {
  console.log('\n🎉 Toutes les images du carrousel sont disponibles !');
  console.log('\n🖼️  Le carrousel affiche maintenant :');
  console.log('   1. porri-carousel-1.jpg');
  console.log('   2. porri-carousel-2.jpg');
  console.log('   3. porri-carousel-3.jpg');
  console.log('   4. porri-carousel-4.jpg');
  console.log('   5. porri-carousel-5.jpg');
  console.log('   6. porri-carousel-6.jpg');
  console.log('   7. porri-carousel-7.jpg');
  console.log('   8. porri-carousel-8.jpg');
  console.log('\n🔄 Rechargez http://localhost:3001 pour voir le carrousel !');
} else {
  console.log('\n⚠️  Certaines images sont manquantes.');
} 