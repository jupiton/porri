import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function AdministrationPage() {
  const mairieInfo = {
    adresse: "Place de la Mairie, 20290 Porri",
    email: "mairie.porri@orange.fr",
    telephone: "+33 4 95 36 81 23",
    horaires: [
      { jour: "Lundi", heures: "14h - 17h" },
      { jour: "Mercredi", heures: "9h - 12h" },
      { jour: "Vendredi", heures: "14h - 17h" }
    ]
  };

  const services = [
    {
      titre: "État civil",
      description: "Actes de naissance, mariage, décès, livret de famille",
      icone: "📋"
    },
    {
      titre: "Urbanisme",
      description: "Permis de construire, déclarations de travaux, certificats d&#39;urbanisme",
      icone: "🏗️"
    },
    {
      titre: "Élections",
      description: "Inscription sur les listes électorales, procurations",
      icone: "🗳️"
    },
    {
      titre: "Cimetière",
      description: "Concessions funéraires, entretien des sépultures",
      icone: "⛪"
    },
    {
      titre: "Voirie",
      description: "Entretien des routes communales, éclairage public",
      icone: "🛣️"
    },
    {
      titre: "Culture et sports",
      description: "Organisation d&#39;événements culturels, gestion des équipements sportifs",
      icone: "🎭"
    }
  ];

  const documents = [
    "Carte d&#39;identité",
    "Passeport",
    "Certificat de résidence",
    "Attestation d&#39;accueil",
    "Certificat de concubinage",
    "Autorisation de sortie du territoire"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navigation currentPage="administration" />
      
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Mairie de Porri
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Informations administratives et services municipaux du village de Porri
            </p>
          </div>

          {/* Informations de contact */}
          <section className="mb-20">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Informations de contact
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Adresse</h3>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="text-gray-700 font-semibold">Mairie de Porri</p>
                      <p className="text-gray-600">{mairieInfo.adresse}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">📧</span>
                      <a href={`mailto:${mairieInfo.email}`} className="text-blue-600 hover:text-blue-800">
                        {mairieInfo.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">📞</span>
                      <a href={`tel:${mairieInfo.telephone}`} className="text-blue-600 hover:text-blue-800">
                        {mairieInfo.telephone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horaires d&#39;ouverture */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Horaires d&#39;ouverture</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {mairieInfo.horaires.map((horaire, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">🕒</span>
                        <div>
                          <p className="font-semibold text-gray-900">{horaire.jour}</p>
                          <p className="text-gray-600">{horaire.heures}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  <strong>Fermé :</strong> Mardi, Jeudi, Samedi, Dimanche et jours fériés
                </p>
              </div>
            </div>
          </section>

          {/* Services municipaux */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Services municipaux
              </h2>
              <p className="text-xl text-gray-600">
                Les services proposés par la mairie de Porri
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{service.icone}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.titre}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Documents administratifs */}
          <section className="mb-20">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Documents administratifs
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Documents disponibles</h3>
                  <ul className="space-y-2">
                    {documents.map((document, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="text-blue-600">✓</span>
                        <span className="text-gray-700">{document}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Informations importantes</h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-blue-800 text-sm">
                        <strong>Rendez-vous :</strong> Il est recommandé de prendre rendez-vous pour les démarches administratives importantes.
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-green-800 text-sm">
                        <strong>Pièces à fournir :</strong> Pensez à apporter une pièce d&#39;identité et les documents justificatifs nécessaires.
                      </p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-orange-800 text-sm">
                        <strong>Délais :</strong> Certaines démarches peuvent nécessiter plusieurs jours de traitement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Besoin d&#39;aide ?
              </h2>
              <p className="text-xl mb-6">
                Contactez directement la mairie pour toute question administrative
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`mailto:${mairieInfo.email}`}
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors inline-block"
                >
                  Envoyer un email
                </a>
                <a 
                  href={`tel:${mairieInfo.telephone}`}
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block"
                >
                  Appeler la mairie
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
} 