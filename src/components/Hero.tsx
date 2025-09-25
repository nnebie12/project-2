import { Github, Mail } from 'lucide-react';
import profilePic from "../assets/Diane.jpeg";

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  // Vite exposes env vars on import.meta.env; TypeScript knows the shape via vite-env.d.ts
  const contactEmail = (import.meta.env as { VITE_CONTACT_EMAIL?: string }).VITE_CONTACT_EMAIL || '';
  const gmailComposeUrl = contactEmail
    ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactEmail)}`
    : 'https://mail.google.com/mail/?view=cm&fs=1';

  return (
    <section id="accueil" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-green-50'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${darkMode ? 'rgb(156 163 175)' : 'rgb(59 130 246)'} 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              
              <div className="flex items-center justify-center lg:justify-start mb-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium">
                  <span className="text-lg">🎓</span>
                  <span>À la recherche d'une alternance</span>
                </div>
              </div>

              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Salut, je suis{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                  Diane KASSI
                </span>
              </h1>
              
              <p className={`text-xl md:text-2xl font-medium ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Développeuse Full Stack
                {' '}
                Passionnée par le développement web moderne, je crée des applications
                performantes et intuitives en utilisant les dernières technologies.
                Spécialisée en Angular/Vuejs et Java Spring Boot/PHP Symfony.
              </p>
            </div>

            {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="/projets"
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Voir mes projets
                </a>

                <a
                  href="/contact"
                  className={`inline-block px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 border-2 ${
                    darkMode 
                      ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white' 
                      : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900'
                  }`}
                >
                  Me contacter
                </a>
              </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-6">
              <a
                href="https://github.com/nnebie12"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-lg transition-all duration-200 hover:scale-110 ${
                  darkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Github size={24} />
              </a>

              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-lg transition-all duration-200 hover:scale-110 ${
                  darkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-600 to-green-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={profilePic}
                    alt="Diane KASSI"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white font-bold text-xl">👩‍💻</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white font-bold">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}