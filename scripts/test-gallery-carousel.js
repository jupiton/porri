const http = require('http');

const carouselImages = [
  'porri-eglise.jpg',
  'porri-ruelles.jpg', 
  'porri-paysage.jpg',
  'porri-chataigniers.jpg',
  'porri-architecture.jpg',
  'porri-mer.jpg',
  'porri-village.jpg',
  'porri-place.jpg'
];

const baseUrl = 'http://localhost:3001';

console.log('🖼️  Test du carrousel avec les images de la galerie...\n');

async function testImage(imageName) {
  return new Promise((resolve) => {
    const url = `${baseUrl}/images/${imageName}`;
    
    http.get(url, (response) => {
      if (response.statusCode === 200) {
        const sizeKB = Math.round(response.headers['content-length'] / 1024);
        console.log(`✅ ${imageName} - Accessible (${sizeKB}KB)`);
        resolve(true);
      } else {
        console.log(`❌ ${imageName} - Erreur HTTP ${response.statusCode}`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.log(`❌ ${imageName} - Erreur de connexion`);
      resolve(false);
    });
  });
}

async function testAllImages() {
  const results = await Promise.all(carouselImages.map(testImage));
  const successCount = results.filter(Boolean).length;
  
  console.log(`\n📊 Résultat : ${successCount}/${carouselImages.length} images accessibles`);
  
  if (successCount === carouselImages.length) {
    console.log('🎉 Toutes les images de la galerie sont accessibles !');
    console.log('\n🏔️  Images du carrousel :');
    carouselImages.forEach((img, index) => {
      console.log(`   ${index + 1}. ${img}`);
    });
    console.log('\n💡 Le carrousel devrait maintenant afficher :');
    console.log('   - Église Saint-Jean-Baptiste');
    console.log('   - Ruelles pittoresques');
    console.log('   - Vue sur la Casinca');
    console.log('   - Châtaigniers');
    console.log('   - Architecture traditionnelle');
    console.log('   - Vue sur la mer');
    console.log('   - Village de Porri');
    console.log('   - Place du village');
    console.log('\n🔄 Rechargez http://localhost:3001 pour voir le carrousel !');
  } else {
    console.log('⚠️  Certaines images ne sont pas accessibles.');
  }
}

testAllImages(); 