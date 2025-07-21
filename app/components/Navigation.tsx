'use client';

import Link from "next/link";
import { useLanguage } from "../i18n/LanguageContext";

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage }: NavigationProps) {
  const { t } = useLanguage();

  return (
    <nav className="sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors">
            🏔️ Porri
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`transition-colors ${
                currentPage === 'accueil' 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {t('nav.accueil')}
            </Link>
            <Link 
              href="#histoire" 
              className={`transition-colors ${
                currentPage === 'histoire' 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {t('nav.histoire')}
            </Link>
            <Link 
              href="/visites" 
              className={`transition-colors ${
                currentPage === 'visites' 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {t('nav.visites')}
            </Link>
            <Link 
              href="/pratique" 
              className={`transition-colors ${
                currentPage === 'pratique' 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Pratique
            </Link>
            <Link 
              href="/administration" 
              className={`transition-colors ${
                currentPage === 'administration' 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Mairie
            </Link>
            <Link 
              href="#contact" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {t('nav.contact')}
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 