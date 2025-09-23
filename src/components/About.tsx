import React from 'react';
import { Award, Clock, Target } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const stats = [
    { icon: Clock, label: 'Années d\'expérience', value: '3+' },
    { icon: Target, label: 'Projets réalisés', value: '15+' },
    { icon: Award, label: 'Certifications', value: '3' },
  ];

  return (
    <section id="apropos" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            À propos de moi
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Développeuse passionnée avec une solide expérience dans la création 
            d'applications web modernes et performantes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Mon parcours
            </h3>
            
            <div className="space-y-4">
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Diplômée en développement web avec une spécialisation full-stack, 
                j'ai acquis une expertise solide dans les technologies front-end et back-end modernes.
              </p>
              
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Ma passion pour l'innovation et la résolution de problèmes complexes 
                m'a menée à travailler sur des projets variés, allant de plateformes 
                e-commerce aux applications de gestion d'entreprise.
              </p>
              
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Je suis constamment à la recherche de nouvelles technologies et 
                méthodologies pour améliorer l'expérience utilisateur et l'efficacité 
                des solutions que je développe.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex justify-center mb-4">
                  <stat.icon size={32} className="text-blue-600" />
                </div>
                <div className={`text-2xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {stat.value}
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formation */}
        <div className={`p-8 rounded-xl ${
          darkMode ? 'bg-gray-700' : 'bg-gray-50'
        }`}>
          <h3 className={`text-2xl font-bold mb-6 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Formation
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`p-6 rounded-lg ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}>
              <h4 className={`text-lg font-semibold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                ITIC Paris
              </h4>
              <p className="text-blue-600 font-medium mb-2">
                Mastère Expert Lead Dev Full Stack - BAC+5
              </p>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                2024 - 2026
              </p>
            </div>

            <div className={`p-6 rounded-lg ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}>
              <h4 className={`text-lg font-semibold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                ITIC Paris
              </h4>
              <p className="text-blue-600 font-medium mb-2">
                Bachelor Concepteur Développeur d’Application - BAC+3
              </p>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                2023 - 2024
              </p>
            </div>

            <div className={`p-6 rounded-lg ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}>
              <h4 className={`text-lg font-semibold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                OpenClassrooms
              </h4>
              <p className="text-blue-600 font-medium mb-2">
                Développeuse Web - BAC+2
              </p>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                2022 - 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}