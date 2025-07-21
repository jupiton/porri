export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Porri</h3>
            <p className="text-gray-300">
              Village authentique de la Casinca corse, 
              niché dans les montagnes à 450m d'altitude.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-blue-900 mb-4">Mairie de Porri</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📍 Place de la Mairie, 20290 Porri</li>
              <li>📧 mairie.porri@orange.fr</li>
              <li>📞 +33 4 95 36 81 23</li>
              <li>🕒 Lundi : 14h-17h</li>
              <li>🕒 Mercredi : 9h-12h</li>
              <li>🕒 Vendredi : 14h-17h</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-blue-900 mb-4">Liens utiles</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Office de tourisme</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hébergements</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Restaurants</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Activités</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-blue-900 mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📍 Porri, Casinca, Haute-Corse</li>
              <li>📧 contact@porri-corse.fr</li>
              <li>📞 +33 4 95 XX XX XX</li>
              <li>🌐 www.porri-corse.fr</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Porri - Village de Corse. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
} 