import { Calendar, ChevronRight, MapPin } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

export default function Experience({ darkMode }: ExperienceProps) {
  const experiences = [
    {
      title: 'Consultante Développeuse Full-stack Alternante',
      company: 'DYWEB (DGFIP)',
      location: 'NOISY-LE-GRAND',
      period: '02/2025 - Aujourd\'hui',
      projects: [
        {
          project: 'ISTYA',
          description: 'Développement d\'une plateforme d\'affichage d\'un tableau de bord à destination des collaborateurs de la DGFIP.',
          technologies: ['Vue.js 3', 'Java 17', 'Spring Boot 3.2', 'Lombok', 'OpenMetadata'],
          achievements: [
            'Migration de version du framework Lombok (25 à 26)',
            'Amélioration d\'un tableau de bord d\'accueil facilitant la visualisation des missions',
            'Réalisation de tests de régression après migration applicative',
            'Structuration des données et gestion des métadonnées',
            'Intégration d\'outils de data catalog (OpenMetadata)'
          ]
        },
        {
          project: 'CAPSULE COLLECTIVE',
          description: 'Développement d\'une application collaborative à destination des organisateurs et participants d\'événements festifs.',
          technologies: ['Vue.js', 'Java 21', 'Spring Boot 3.2', 'Stripe', 'MinIO', 'Docker', 'Kubernetes'],
          achievements: [
            'Mise en place d\'un espace organisateur complet avec gestion des événements',
            'Développement d\'un système de vote des médias avec récompenses',
            'Intégration d\'un module de paiement sécurisé via Stripe',
            'Mise en place d\'un module de stockage des médias avec MinIO',
            'Déploiement via GitHub et Kubernetes'
          ]
        }
      ]
    },
    {
      title: 'Développeuse Full-stack Junior Alternante',
      company: 'SECURICOM',
      location: 'Quincy Voisins',
      period: '07/2022 - 08/2024',
      projects: [
        {
          project: 'SECURICOM TEAM V2',
          description: 'Développement d\'une plateforme à destination des collaborateurs de SECURICOM avec Angular et Spring Boot.',
          technologies: ['Angular 15-17', 'Java 21', 'Spring Boot 3.2', 'RxJS', 'NgRx', 'Angular-Calendar', 'Material'],
          achievements: [
            'Développement de trois onglets de recherche : devis, commandes et factures',
            'Création de trois onglets CRUD : contrats, tickets et interventions',
            'Implémentation d\'un module de planification avec Angular-Calendar',
            'Intégration avec l\'API CRM Sellsy pour l\'import automatique des données'
          ]
        },
        {
          project: 'SECURICOM PRO',
          description: 'Développement d\'une plateforme à destination des clients sous contrat.',
          technologies: ['Angular 14', 'Symfony 7', 'PHP 8', 'JWT', 'Doctrine 2', 'API Sellsy'],
          achievements: [
            'Développement de trois onglets de recherche avec filtres avancés',
            'Création d\'un module de chat intégré dans le détail des tickets',
            'Implémentation de messages automatiques pour le cycle de vie des tickets',
            'Fluidification des échanges client-entreprise avec canal unique'
          ]
        },
        {
          project: 'SECURICOM MONITOR',
          description: 'Développement d\'un dashboard pour le bureau de coordination des interventions.',
          technologies: ['Angular 14-15', 'Symfony 7', 'PHP 8', 'RxJS', 'NgRx', 'Doctrine 2'],
          achievements: [
            'Développement d\'écrans de monitoring temps réel pour salle de coordination',
            'Affichage des métriques importantes : nouveaux tickets, tickets du jour',
            'Suivi en temps réel des tickets résolus et planifiés',
            'Interface optimisée pour projection sur écrans géants'
          ]
        }
      ]
    },
    {
      title: 'Développeuse Full Stack Junior',
      company: 'SIAPEP FRANCE',
      location: 'Aulnay-sous-Bois',
      period: '01/2020 - 06/2022',
      projects: [
        {
          project: 'GLAM DASHBOARD',
          description: 'Développement d\'une plateforme à destination des administrateurs avec Angular et Symfony.',
          technologies: ['Angular 9', 'Symfony 5', 'PHP 7.2', 'RxJS', 'NgRx', 'Material', 'Karma Jasmine'],
          achievements: [
            'Conception et développement d\'un tableau de bord administrateur complet',
            'Développement de modules de reporting avancés en temps quasi réel',
            'Implémentation de la gestion des utilisateurs (professionnels et clients)',
            'Système de surveillance des alertes et avis utilisateurs'
          ]
        },
        {
          project: 'GLAM PRO',
          description: 'Développement d\'une application mobile à destination des professionnels de la beauté.',
          technologies: ['React Native 0.62', 'Symfony 5', 'PHP 7.2', 'Redux', 'Expo', 'Eva Design'],
          achievements: [
            'Développement de la gestion complète du profil professionnel',
            'Création du système de gestion des prestations proposées',
            'Implémentation de la gestion des offres reçues et planification',
            'Intégration d\'un calendrier pour la gestion des disponibilités'
          ]
        },
        {
          project: 'GLAM CUSTOMER',
          description: 'Développement d\'une application mobile à destination des clients.',
          technologies: ['React Native 0.62', 'Symfony 5', 'PHP 7.2', 'Redux', 'Expo', 'React Hook Form'],
          achievements: [
            'Développement de la gestion complète des comptes clients',
            'Création du système de prise de rendez-vous multi-créneaux',
            'Implémentation du suivi des rendez-vous (consultation, modification, annulation)',
            'Interface optimisée pour une expérience utilisateur fluide'
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Expérience Professionnelle
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Mon parcours professionnel dans le développement web et mobile
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-750' 
                  : 'bg-white hover:shadow-xl'
              } shadow-lg`}
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className={`text-xl font-bold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {exp.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-sm text-blue-600">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <h4 className={`text-lg font-semibold text-blue-600`}>
                        {exp.company}
                      </h4>
                      <div className="flex items-center gap-1 text-sm">
                        <MapPin size={14} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                        <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Si l'expérience a des projets (comme SECURICOM) */}
                    {exp.projects ? (
                      <div className="space-y-8">
                        {exp.projects.map((project, projectIndex) => (
                          <div key={projectIndex} className={`border-l-4 border-blue-600 pl-6 ${projectIndex > 0 ? 'pt-6' : ''}`}>
                            <h5 className={`text-lg font-semibold mb-3 ${
                              darkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                              {project.project}
                            </h5>
                            
                            <p className={`text-base mb-6 leading-relaxed ${
                              darkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              {project.description}
                            </p>

                            {/* Technologies du projet */}
                            <div className="mb-6">
                              <h6 className={`text-sm font-semibold mb-3 ${
                                darkMode ? 'text-gray-200' : 'text-gray-700'
                              }`}>
                                Technologies utilisées
                              </h6>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies?.map((tech, techIndex) => (
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

                            {/* Réalisations du projet */}
                            <div>
                              <h6 className={`text-sm font-semibold mb-3 ${
                                darkMode ? 'text-gray-200' : 'text-gray-700'
                              }`}>
                                Réalisations clés
                              </h6>
                              <ul className="space-y-2">
                                {project.achievements?.map((achievement, achIndex) => (
                                  <li
                                    key={achIndex}
                                    className={`flex items-start gap-2 text-sm ${
                                      darkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}
                                  >
                                    <ChevronRight size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className={`text-base mb-6 leading-relaxed ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        
                      </p>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Gradient border on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}