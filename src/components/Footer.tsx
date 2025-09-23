import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer className={`py-8 border-t ${
      darkMode 
        ? 'bg-gray-900 border-gray-700 text-gray-300' 
        : 'bg-white border-gray-200 text-gray-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm">
              © 2025 Diane KASSI. Tous droits réservés.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <span>Fait avec</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>et React</span>
          </div>
        </div>
      </div>
    </footer>
  );
}