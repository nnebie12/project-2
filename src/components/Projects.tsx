import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

export default function Projects({ darkMode }: ProjectsProps) {
  const projects = [
    {
      title: 'Plateforme E-commerce',
      description: 'Application web complète de vente en ligne avec gestion des stocks, commandes et paiements sécurisés.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoUrl: 'https://nnebie12.github.io/Projet_3_20220815/',
      githubUrl: 'https://github.com/nnebie12',
      date: '2023'
    },
    {
      title: 'Application de News',
      description: 'Plateforme d\'actualités moderne avec filtrage par catégories et système de favoris.',
      image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'TypeScript', 'Firebase', 'Material UI'],
      demoUrl: 'https://nnebie12.github.io/News-projet/',
      githubUrl: 'https://github.com/nnebie12',
      date: '2023'
    },
    {
      title: 'Portfolio Personnel',
      description: 'Site portfolio responsive avec animations et design moderne pour présenter mes projets et compétences.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'SASS'],
      demoUrl: 'https://nnebie12.github.io/index.html',
      githubUrl: 'https://github.com/nnebie12',
      date: '2022'
    },
    {
      title: 'Application Cinématographique',
      description: 'Plateforme de découverte de films avec recherche avancée, critiques et recommandations personnalisées.',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'TMDB API'],
      demoUrl: 'https://nnebie12.github.io/projet_cin-matographique/',
      githubUrl: 'https://github.com/nnebie12',
      date: '2022'
    }
  ];

  return (
    <section id="projets" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Mes Projets
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Découvrez une sélection de mes réalisations récentes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                darkMode 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : 'bg-white hover:shadow-2xl'
              } shadow-lg`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Date badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-800">
                  <Calendar size={12} />
                  {project.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-sm mb-4 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          darkMode 
                            ? 'bg-blue-600/20 text-blue-400' 
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Démo
                  </a>
                  
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 border ${
                      darkMode 
                        ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white' 
                        : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900'
                    }`}
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}