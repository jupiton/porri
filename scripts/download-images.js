const https = require('https');
const fs = require('fs');
const path = require('path');

// Créer le dossier images s'il n'existe pas
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Fonction pour télécharger une image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(imagesDir, filename);
    
    // Vérifier si le fichier existe déjà
    if (fs.existsSync(filepath)) {
      console.log(`✅ ${filename} existe déjà`);
      resolve();
      return;
    }

    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✅ ${filename} téléchargé`);
          resolve();
        });
      } else {
        console.log(`❌ Erreur ${response.statusCode} pour ${filename}`);
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', (err) => {
      console.log(`❌ Erreur de téléchargement pour ${filename}:`, err.message);
      reject(err);
    });
  });
}

// Images d'exemple pour le site Porri
const images = [
  {
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    filename: 'porri-village.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
    filename: 'porri-eglise.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    filename: 'porri-ruelles.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    filename: 'porri-paysage.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
    filename: 'porri-chataigniers.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    filename: 'porri-architecture.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    filename: 'porri-mer.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    filename: 'porri-place.jpg'
  }
];

// Télécharger toutes les images
async function downloadAllImages() {
  console.log('🔄 Début du téléchargement des images...');
  
  for (const image of images) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.log(`❌ Impossible de télécharger ${image.filename}`);
    }
  }
  
  console.log('✅ Téléchargement terminé !');
}

// Exécuter le script
downloadAllImages(); 