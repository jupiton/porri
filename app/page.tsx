'use client';

import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ImageGallery from "./components/ImageGallery";
import Navigation from "./components/Navigation";
import RandomVillageImage from "./components/RandomVillageImage";
import Footer from "./components/Footer";
import ActualitesMarquee from "./components/ActualitesMarquee";
import { useLanguage } from "./i18n/LanguageContext";
import { porriImages } from "./data/images";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <HeroSection />

      {/* Navigation */}
      <Navigation currentPage="accueil" />
      <ActualitesMarquee />

      {/* Main Content */}
      <main>
        {/* Section Présentation */}
        <section id="accueil" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                {t('home.welcome.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('home.welcome.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏔️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{t('home.features.mountain.title')}</h3>
                <p className="text-gray-600">
                  {t('home.features.mountain.description')}
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{t('home.features.nature.title')}</h3>
                <p className="text-gray-600">
                  {t('home.features.nature.description')}
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⛪</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{t('home.features.heritage.title')}</h3>
                <p className="text-gray-600">
                  {t('home.features.heritage.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Image Aléatoire */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                {t('home.discover.title')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('home.discover.subtitle')}
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <RandomVillageImage />
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                {t('home.discover.refresh')}
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <span>🔄</span>
                <span>{t('home.discover.random')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section Histoire */}
        <section id="histoire" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl font-bold text-gray-900 mb-8">
                  {t('home.history.title')}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {t('home.history.paragraph1')}
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  {t('home.history.paragraph2')}
                </p>
                
                {/* Section Résistance */}
                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-xl mb-6">
                  <h3 className="text-2xl font-bold text-red-900 mb-4">
                    {t('home.history.resistance.title')}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {t('home.history.resistance.paragraph1')}
                  </p>
                  <p className="text-gray-700 mb-4">
                    {t('home.history.resistance.paragraph2')}
                  </p>
                  <p className="text-gray-700 mb-4">
                    {t('home.history.resistance.paragraph3')}
                  </p>
                  <p className="text-gray-700">
                    {t('home.history.resistance.paragraph4')}
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-bold text-blue-900 mb-2">{t('home.history.didYouKnow.title')}</h4>
                  <p className="text-blue-800">
                    {t('home.history.didYouKnow.content')}
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-400 to-green-400 h-96 rounded-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">📜</div>
                  <p className="text-xl">{t('home.history.discoverHistory')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Visites */}
        <section id="visites" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                {t('home.visits.title')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('home.visits.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-4xl">⛪</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{t('home.visits.church.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('home.visits.church.description')}
                  </p>
                  <a href="/visites" className="text-blue-600 hover:text-blue-800 font-semibold inline-block">
                    {t('home.visits.church.learnMore')}
                  </a>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <span className="text-4xl">🏔️</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{t('home.visits.viewpoints.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('home.visits.viewpoints.description')}
                  </p>
                  <a href="/visites" className="text-blue-600 hover:text-blue-800 font-semibold inline-block">
                    {t('home.visits.viewpoints.learnMore')}
                  </a>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <span className="text-4xl">🥾</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{t('home.visits.hiking.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('home.visits.hiking.description')}
                  </p>
                  <a href="/visites" className="text-blue-600 hover:text-blue-800 font-semibold inline-block">
                    {t('home.visits.hiking.learnMore')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Pratique */}
        <section id="pratique" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                {t('home.practical.title')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('home.practical.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{t('home.practical.howToGetThere.title')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-semibold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900">{t('home.practical.howToGetThere.car.title')}</h4>
                      <p className="text-gray-600">{t('home.practical.howToGetThere.car.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-semibold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900">{t('home.practical.howToGetThere.bus.title')}</h4>
                      <p className="text-gray-600">{t('home.practical.howToGetThere.bus.description')}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{t('home.practical.bestTime.title')}</h3>
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">🌞</span>
                    <h4 className="font-bold text-blue-900">{t('home.practical.bestTime.season')}</h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {t('home.practical.bestTime.description')}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="text-lg mb-1">🌸</div>
                      <div className="font-bold text-blue-900">Printemps</div>
                      <div className="text-gray-600">15-25°C</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="text-lg mb-1">🍂</div>
                      <div className="font-bold text-blue-900">Automne</div>
                      <div className="text-gray-600">18-28°C</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Galerie */}
        <section id="galerie" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Galerie Photos
              </h2>
              <p className="text-xl text-gray-600">
                Découvrez les plus beaux clichés de Porri
              </p>
            </div>
            
            <ImageGallery images={porriImages.gallery} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
