import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { to: '/', label: 'Accueil' },
    { to: '/a-propos', label: 'À propos' },
    { to: '/experience', label: 'Expérience' },
    { to: '/projets', label: 'Projets' },
    { to: '/competences', label: 'Compétences' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      darkMode ? 'bg-gray-900/95 border-gray-700' : 'bg-white/95 border-gray-200'
    } backdrop-blur-md border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div 
            className="text-xl font-bold cursor-pointer"
            onClick={() => { window.location.href = '/'; setIsMenuOpen(false); }}
          >
            <span className="text-blue-600">Diane</span>
            <span className={darkMode ? 'text-white' : 'text-gray-900'}> KASSI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }: { isActive: boolean }) => `text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                } ${isActive ? 'text-blue-600' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                darkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                darkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                darkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden pb-4 border-t ${
            darkMode ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <div className="pt-4 space-y-2">
                {menuItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }: { isActive: boolean }) => `block w-full text-left px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      darkMode 
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    } ${isActive ? 'bg-blue-50 text-blue-600' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}