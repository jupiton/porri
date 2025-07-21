const http = require('http');

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

const baseUrl = 'http://localhost:3001';

console.log('🔍 Test du carrousel - Vérification des images...\n');

async function testImage(imageName) {
  return new Promise((resolve) => {
    const url = `${baseUrl}/images/${imageName}`;
    
    http.get(url, (response) => {
      if (response.statusCode === 200) {
        console.log(`✅ ${imageName} - Accessible (${response.headers['content-length']} bytes)`);
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
    console.log('🎉 Toutes les images du carrousel sont accessibles !');
    console.log('\n💡 Le carrousel devrait maintenant fonctionner correctement.');
    console.log('   - Rechargez la page http://localhost:3001');
    console.log('   - Vous devriez voir les images changer toutes les 5 secondes');
    console.log('   - Cliquez sur les points en bas pour naviguer manuellement');
  } else {
    console.log('⚠️  Certaines images ne sont pas accessibles.');
  }
}

testAllImages(); 