# 📸 Guide d'ajout d'images pour le site Porri

## 🎯 Images nécessaires

### **Images principales à récupérer :**

1. **`porri-village.jpg`** - Vue générale du village de Porri
2. **`porri-eglise.jpg`** - Église Saint-Jean-Baptiste
3. **`porri-ruelles.jpg`** - Ruelles traditionnelles
4. **`porri-paysage.jpg`** - Paysage de la Casinca
5. **`porri-chataigniers.jpg`** - Châtaigniers de la Castagniccia
6. **`porri-architecture.jpg`** - Architecture traditionnelle
7. **`porri-mer.jpg`** - Vue sur la mer Méditerranée
8. **`porri-place.jpg`** - Place du village

## 🔍 Sources d'images recommandées

### **1. Wikimedia Commons**
- Recherchez "Porri Corse" ou "Porri Casinca"
- Images libres de droits
- URL : https://commons.wikimedia.org/

### **2. Sites touristiques officiels**
- Office de tourisme de la Corse
- Sites des communes voisines
- Blogs de voyageurs

### **3. Google Images**
- Utilisez les filtres de droits d'usage
- Recherchez "Porri village Corse"
- Vérifiez les licences

## 📁 Structure des dossiers

```
porri/
├── public/
│   └── images/
│       ├── porri-village.jpg      # Image principale du village
│       ├── porri-eglise.jpg       # Église Saint-Jean-Baptiste
│       ├── porri-ruelles.jpg      # Ruelles traditionnelles
│       ├── porri-paysage.jpg      # Paysage de la Casinca
│       ├── porri-chataigniers.jpg # Châtaigniers
│       ├── porri-architecture.jpg # Architecture
│       ├── porri-mer.jpg          # Vue sur la mer
│       └── porri-place.jpg        # Place du village
```

## 🛠️ Comment ajouter les images

### **Étape 1 : Télécharger les images**
1. Trouvez les images de Porri
2. Téléchargez-les sur votre ordinateur
3. Renommez-les selon la liste ci-dessus

### **Étape 2 : Placer les images**
1. Copiez les images dans le dossier `porri/public/images/`
2. Vérifiez que les noms correspondent à ceux du fichier `data/images.ts`

### **Étape 3 : Mettre à jour les données**
1. Ouvrez `porri/app/data/images.ts`
2. Remplacez les `src: ""` par les vrais chemins :
   ```typescript
   src: "/images/porri-village.jpg"
   ```

### **Étape 4 : Tester**
1. Lancez le serveur : `npm run dev`
2. Vérifiez que les images s'affichent correctement

## 📏 Recommandations techniques

### **Format et taille :**
- **Format** : JPG ou WebP (meilleure compression)
- **Résolution** : Minimum 800x600px
- **Taille fichier** : Maximum 500KB par image
- **Ratio** : 4:3 ou 16:9 pour une meilleure présentation

### **Optimisation :**
- Compressez les images avant de les ajouter
- Utilisez des outils comme TinyPNG ou ImageOptim
- Gardez les images de haute qualité pour le web

## 🔗 Liens utiles

### **Images de Porri sur Wikimedia :**
- [Porri di Casinca](https://commons.wikimedia.org/wiki/Category:Porri)
- [Église de Porri](https://commons.wikimedia.org/wiki/Category:Churches_in_Porri)

### **Outils d'optimisation :**
- [TinyPNG](https://tinypng.com/) - Compression d'images
- [ImageOptim](https://imageoptim.com/) - Optimisation pour Mac
- [Squoosh](https://squoosh.app/) - Outil Google pour l'optimisation

## ⚠️ Droits d'auteur

### **Important :**
- Vérifiez toujours les droits d'usage des images
- Privilégiez les images libres de droits (Creative Commons)
- Citez les sources si nécessaire
- Évitez les images protégées par copyright

## 🎨 Alternatives temporaires

Si vous ne trouvez pas d'images de Porri, vous pouvez :
1. Utiliser des images de villages corses similaires
2. Créer des placeholders avec des icônes
3. Utiliser des images de la Casinca en général
4. Ajouter vos propres photos si vous en avez

---

**💡 Conseil :** Commencez par une ou deux images principales, puis ajoutez les autres progressivement ! 