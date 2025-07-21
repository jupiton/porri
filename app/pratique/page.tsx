import Link from "next/link";
import Footer from "../components/Footer";

export default function PratiquePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-green-800/60 z-10"></div>
        
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-green-400 to-blue-600"></div>
        
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Informations Pratiques
          </h1>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Tout ce que vous devez savoir pour organiser votre visite
          </p>
          <Link 
            href="/"
            className="inline-block bg-white text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            ← Retour à l&#39;accueil
          </Link>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-900">Porri</div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Accueil</Link>
              <Link href="/visites" className="text-gray-700 hover:text-blue-600 transition-colors">Visites</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Histoire</Link>
              <Link href="/pratique" className="text-blue-600 font-semibold">Pratique</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Accès */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comment s&#39;y rendre
              </h2>
              <p className="text-xl text-gray-600">
                Les différents moyens d&#39;accéder à Porri
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl"></span>
                  </div>
                  <h3 className="text-2xl font-bold">En voiture</h3>
                </div>
                <div className="space-y-4">
                                     <div className="border-l-4 border-blue-500 pl-4">
                     <h4 className="font-bold text-gray-900">Depuis Bastia :</h4>
                     <p className="text-gray-600">Prendre la route T10 vers la Casinca, puis suivre les panneaux 
                      Porri</p>
                     <p className="text-sm text-gray-500 mt-1">Durée : environ 25 minutes (15km)</p>
                   </div>
                                     <div className="border-l-4 border-green-500 pl-4">
                     <h4 className="font-bold text-gray-900">Depuis Corte :</h4>
                     <p className="text-gray-600">Emprunter la route T10 en direction de Bastia, puis bifurquer vers Porri</p>
                     <p className="text-sm text-gray-500 mt-1">Durée : environ 45 minutes</p>
                   </div>
                                     <div className="border-l-4 border-orange-500 pl-4">
                     <h4 className="font-bold text-gray-900">Depuis Calvi :</h4>
                     <p className="text-gray-600">Prendre la route T30, puis la route T10 vers la Casinca</p>
                     <p className="text-sm text-gray-500 mt-1">Durée : environ 1h30</p>
                   </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🚌</span>
                  </div>
                  <h3 className="text-2xl font-bold">En transport en commun</h3>
                </div>
                <div className="space-y-4">
                                     <div className="border-l-4 border-blue-500 pl-4">
                     <h4 className="font-bold text-gray-900">Bus depuis Bastia :</h4>
                     <p className="text-gray-600">Ligne régulière vers la Casinca, arrêt Porri</p>
                     <p className="text-sm text-gray-500 mt-1">Fréquence : 3-4 fois par jour</p>
                   </div>
                                     <div className="border-l-4 border-green-500 pl-4">
                     <h4 className="font-bold text-gray-900">Bus depuis Corte :</h4>
                     <p className="text-gray-600">Ligne inter-villages de la Casinca</p>
                     <p className="text-sm text-gray-500 mt-1">Fréquence : 2-3 fois par jour</p>
                   </div>
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <h4 className="font-bold text-blue-900 mb-2">Informations utiles :</h4>
                    <ul className="text-blue-800 space-y-1 text-sm">
                      <li>• Horaires variables selon la saison</li>
                      <li>• Réservation recommandée en haute saison</li>
                      <li>• Tarif : environ 3€ depuis Calvi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Hébergements */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Où se loger
              </h2>
              <p className="text-xl text-gray-600">
                Les options d&#39;hébergement à proximité de Porri
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏨</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Hôtels</h3>
                                     <p className="text-gray-600 mb-4 text-center">
                       Plusieurs hôtels de charme dans les villages voisins 
                       de la Casinca, à 10-20 minutes de Porri.
                     </p>
                <div className="text-center">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    À partir de 80€/nuit
                  </span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏡</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Gîtes ruraux</h3>
                <p className="text-gray-600 mb-4 text-center">
                  Locations de maisons traditionnelles corses 
                  pour une expérience authentique.
                </p>
                <div className="text-center">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    À partir de 120€/nuit
                  </span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏕️</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Campings</h3>
                <p className="text-gray-600 mb-4 text-center">
                  Campings en pleine nature avec vue sur la mer, 
                  idéal pour les amoureux de la nature.
                </p>
                <div className="text-center">
                  <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                    À partir de 25€/nuit
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Section Restaurants */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Où manger
              </h2>
              <p className="text-xl text-gray-600">
                Découvrez la gastronomie corse authentique
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Restaurants traditionnels</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-gray-900">Auberge du Village</h4>
                    <p className="text-gray-600">Cuisine corse traditionnelle, produits locaux</p>
                    <p className="text-sm text-gray-500">Prix : 25-40€ par personne</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-bold text-gray-900">Le Maquis</h4>
                    <p className="text-gray-600">Spécialités de charcuterie et fromages corses</p>
                    <p className="text-sm text-gray-500">Prix : 20-35€ par personne</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                                 <h3 className="text-2xl font-bold mb-6">Produits locaux</h3>
                 <div className="space-y-4">
                   <div className="flex items-center space-x-3">
                     <span className="text-2xl">🌰</span>
                     <div>
                       <h4 className="font-bold text-gray-900">Châtaignes</h4>
                       <p className="text-sm text-gray-600">Production locale, spécialité de la Castagniccia</p>
                     </div>
                   </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🧀</span>
                    <div>
                      <h4 className="font-bold text-gray-900">Fromages corses</h4>
                      <p className="text-sm text-gray-600">Brocciu, tome, etc.</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🍷</span>
                    <div>
                      <h4 className="font-bold text-gray-900">Vins corses</h4>
                      <p className="text-sm text-gray-600">AOC Patrimonio, Calvi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Météo et Saisons */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Quand visiter
              </h2>
              <p className="text-xl text-gray-600">
                Les meilleures périodes pour découvrir Porri
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🌸</span>
                </div>
                <h3 className="font-bold mb-2">Printemps</h3>
                <p className="text-sm text-gray-600 mb-3">Mars - Mai</p>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>Température : 15-22°C</p>
                  <p>Paysages fleuris</p>
                  <p>Peu de touristes</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">☀️</span>
                </div>
                <h3 className="font-bold mb-2">Été</h3>
                <p className="text-sm text-gray-600 mb-3">Juin - Août</p>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>Température : 25-35°C</p>
                  <p>Haute saison</p>
                  <p>Festivals locaux</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🍂</span>
                </div>
                <h3 className="font-bold mb-2">Automne</h3>
                <p className="text-sm text-gray-600 mb-3">Septembre - Novembre</p>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>Température : 18-25°C</p>
                  <p>Récolte des olives</p>
                  <p>Lumière dorée</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">❄️</span>
                </div>
                <h3 className="font-bold mb-2">Hiver</h3>
                <p className="text-sm text-gray-600 mb-3">Décembre - Février</p>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>Température : 8-15°C</p>
                  <p>Très calme</p>
                  <p>Prix réduits</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section Conseils */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Conseils pratiques
              </h2>
              <p className="text-xl text-gray-600">
                Pour profiter au mieux de votre séjour
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Avant votre visite</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-600 font-semibold">✓</span>
                    <div>
                      <h4 className="font-bold">Réservez à l&#39;avance</h4>
                      <p className="text-sm text-gray-600">Hébergements et restaurants en haute saison</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-600 font-semibold">✓</span>
                    <div>
                      <h4 className="font-bold">Vérifiez la météo</h4>
                      <p className="text-sm text-gray-600">Conditions variables en montagne</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-600 font-semibold">✓</span>
                    <div>
                      <h4 className="font-bold">Préparez vos randonnées</h4>
                      <p className="text-sm text-gray-600">Cartes, eau, chaussures adaptées</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Sur place</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-600 font-semibold">💡</span>
                    <div>
                      <h4 className="font-bold">Respectez les horaires</h4>
                      <p className="text-sm text-gray-600">Commerces fermés l&#39;après-midi en été</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-600 font-semibold">💡</span>
                    <div>
                      <h4 className="font-bold">Parlez aux locaux</h4>
                      <p className="text-sm text-gray-600">Ils vous donneront les meilleurs conseils</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-600 font-semibold">💡</span>
                    <div>
                      <h4 className="font-bold">Prenez votre temps</h4>
                      <p className="text-sm text-gray-600">L&#39;authenticité se découvre lentement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
} 