import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";

export default function VisitesPage() {
  const activites = [
    {
      title: "Randonnées pédestres",
      description: "Découvrez les sentiers autour de Porri avec des vues magnifiques sur la Casinca",
      image: "/images/porri-village.jpg",
      duree: "2-4 heures",
      difficulte: "Facile à Moyenne"
    },
    {
      title: "Visite du village",
      description: "Explorez les ruelles pittoresques et l&#39;architecture traditionnelle corse",
      image: "/images/porri-ruelles.jpg",
      duree: "1-2 heures",
      difficulte: "Facile"
    },
    {
      title: "Dégustation de produits locaux",
      description: "Goûtez aux spécialités corses : fromages, charcuteries, vins et miels",
      image: "/images/porri-architecture.jpg",
      duree: "1-3 heures",
      difficulte: "Facile"
    },
    {
      title: "Photographie",
      description: "Capturez les plus beaux angles du village et des paysages environnants",
      image: "/images/porri-place.jpg",
      duree: "Variable",
      difficulte: "Facile"
    }
  ];

  const informationsPratiques = [
    {
      titre: "Accès",
      contenu: "Porri est accessible en voiture depuis Bastia (30 min) ou Corte (45 min). Parking gratuit disponible."
    },
    {
      titre: "Meilleure période",
      contenu: "Avril à octobre pour les activités extérieures. L&#39;été offre le plus d&#39;animations."
    },
    {
      titre: "Hébergement",
      contenu: "Gîtes ruraux, chambres d&#39;hôtes et hôtels disponibles dans la région de la Casinca."
    },
    {
      titre: "Restaurants",
      contenu: "Plusieurs restaurants traditionnels proposent la cuisine corse authentique."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image
          src="/images/porri-village.jpg"
          alt="Visiter Porri"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Visiter Porri
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Découvrez toutes les activités et informations pratiques
          </p>
        </div>
      </section>

      {/* Activités */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Activités à découvrir
            </h2>
            <p className="text-xl text-gray-600">
              Une multitude d&#39;expériences vous attendent à Porri
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {activites.map((activite, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={activite.image}
                    alt={activite.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {activite.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {activite.description}
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>⏱️ {activite.duree}</span>
                    <span>📊 {activite.difficulte}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Informations pratiques
            </h2>
            <p className="text-xl text-gray-600">
              Tout ce que vous devez savoir pour organiser votre visite
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {informationsPratiques.map((info, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {info.titre}
                </h3>
                <p className="text-gray-600">
                  {info.contenu}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à découvrir Porri ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Réservez votre hébergement et planifiez votre séjour dans la Casinca
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#accueil" 
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors inline-block"
            >
              Retour à l&#39;accueil
            </a>
            <a 
              href="mailto:contact@porri-corse.fr" 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 