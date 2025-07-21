const https = require('https');
const fs = require('fs');
const path = require('path');

// URLs d'images de villages corses et paysages
const imageUrls = [
  {
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop',
    filename: 'porri-carousel-1.jpg',
    alt: 'Village corse traditionnel'
  },
  {
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop&crop=center',
    filename: 'porri-carousel-2.jpg',
    alt: 'Ruelles pittoresques'
  },
  {
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop&crop=top',
    filename: 'porri-carousel-3.jpg',
    alt: 'Architecture méditerranéenne'
  },
  {
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop&crop=bottom',
    filename: 'porri-carousel-4.jpg',
    alt: 'Place du village'
  },
  {
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop&crop=left',
    filename: 'porri-carousel-5.jpg',
    alt: 'Église de village'
  },
  {
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop&crop=right',
    filename: 'porri-carousel-6.jpg',
    alt: 'Paysage montagneux'
  },
  {
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop&crop=entropy',
    filename: 'porri-carousel-7.jpg',
    alt: 'Châtaigniers'
  },
  {
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop&crop=edges',
    filename: 'porri-carousel-8.jpg',
    alt: 'Vue sur la mer'
  }
];

const imagesDir = path.join(__dirname, '../public/images');

// Créer le dossier s'il n'existe pas
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

console.log('🎠 Téléchargement des images pour le carrousel...\n');

async function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imagesDir, filename);
    
    // Vérifier si le fichier existe déjà
    if (fs.existsSync(filePath)) {
      console.log(`✅ ${filename} - Déjà présent`);
      resolve();
      return;
    }

    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        
        file.on('finish', () => {
          file.close();
          const stats = fs.statSync(filePath);
          const sizeKB = Math.round(stats.size / 1024);
          console.log(`✅ ${filename} - ${sizeKB}KB`);
          resolve();
        });
      } else {
        console.log(`❌ ${filename} - Erreur HTTP ${response.statusCode}`);
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', (err) => {
      console.log(`❌ ${filename} - Erreur de téléchargement`);
      reject(err);
    });
  });
}

async function downloadAllImages() {
  const promises = imageUrls.map(img => downloadImage(img.url, img.filename));
  
  try {
    await Promise.all(promises);
    console.log('\n🎉 Toutes les images du carrousel ont été téléchargées !');
    
    // Afficher la liste des fichiers
    console.log('\n📁 Images disponibles :');
    const files = fs.readdirSync(imagesDir);
    files.forEach(file => {
      if (file.startsWith('porri-carousel-')) {
        const stats = fs.statSync(path.join(imagesDir, file));
        const sizeKB = Math.round(stats.size / 1024);
        console.log(`  - ${file} (${sizeKB}KB)`);
      }
    });
    
  } catch (error) {
    console.error('\n❌ Erreur lors du téléchargement :', error.message);
  }
}

downloadAllImages(); 