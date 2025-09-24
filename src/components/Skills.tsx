import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

export default function Skills({ darkMode }: SkillsProps) {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3/SASS', level: 90 },
        { name: 'JavaScript', level: 82 },
        { name: 'TypeScript', level: 88 },
        { name: 'React', level: 50 },
        { name: 'Angular', level: 85 },
        { name: 'Vue.js', level: 55 }
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 50 },
        { name: 'PHP', level: 85 },
        { name: 'Java', level: 85 },
        { name: 'Python', level: 45 },
        { name: 'Symfony', level: 82 },
        { name: 'Spring Boot', level: 85 }
      ]
    },
    {
      title: 'Base de données',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'MongoDB', level: 82 },
      ]
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      skills: [
        { name: 'React Native', level: 85 },
      ]
    },
    {
      title: 'Outils & DevOps',
      icon: Code,
      skills: [
        { name: 'Git/GitHub', level: 92 },
        { name: 'Docker', level: 80 },
        { name: 'Confluence', level: 56 },
        { name: 'Jira', level: 60 }
      ]
    },
    {
      title: 'Design',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'Responsive Design', level: 90 }
      ]
    }
  ];

  // mapping couleur par compétence (hex via Tailwind arbitrary values)
  const colorMap: Record<string, string> = {
    'HTML5': 'bg-[#E34F26] text-white',
    'CSS3/SASS': 'bg-[#264de4] text-white',
    'JavaScript': 'bg-[#f7df1e] text-black',
    'TypeScript': 'bg-[#3178c6] text-white',
    'React': 'bg-[#61dafb] text-black',
    'Angular': 'bg-[#dd0031] text-white',
    'Vue.js': 'bg-[#42b883] text-white',
    'Node.js': 'bg-[#3c873a] text-white',
    'PHP': 'bg-[#777bb4] text-white',
    'Java': 'bg-[#b07219] text-white',
    'Python': 'bg-[#3776ab] text-white',
    'Symfony': 'bg-[#000000] text-white',
    'Spring Boot': 'bg-[#6db33f] text-white',
    'MySQL': 'bg-[#4479A1] text-white',
    'MongoDB': 'bg-[#47A248] text-white',
    'React Native': 'bg-[#61dafb] text-black',
    'Git/GitHub': 'bg-[#181717] text-white',
    'Docker': 'bg-[#0db7ed] text-white',
    'Confluence': 'bg-[#0052CC] text-white',
    'Jira': 'bg-[#0052CC] text-white',
    'Figma': 'bg-[#F24E1E] text-white',
    'Tailwind CSS': 'bg-[#06b6d4] text-white',
    'Responsive Design': 'bg-[#8b5cf6] text-white',
  };

  const getInitials = (name: string) => {
    const words = name.replace(/[^A-Za-z0-9 ]/g, '').split(' ');
    if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
    return (words[0][0] + (words[1] ? words[1][0] : '')).toUpperCase();
  };

  const renderBadge = (name: string) => {
    const classes = colorMap[name] ?? 'bg-gray-400 text-white';
    return (
      <span
        className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-[10px] font-semibold ${classes}`}
        aria-hidden
        title={name}
      >
        {getInitials(name)}
      </span>
    );
  };

  return (
    <section id="competences" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Compétences Techniques
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Technologies et outils que je maîtrise pour créer des solutions innovantes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-750' 
                  : 'bg-white hover:shadow-xl'
              } shadow-lg`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className={`text-xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        {renderBadge(skill.name)}
                        <span className={`text-sm font-medium ${
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {skill.name}
                        </span>
                      </div>
                      <span className={`text-xs ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className={`w-full h-2 rounded-full overflow-hidden ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-green-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className={`mt-16 p-8 rounded-xl ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        } shadow-lg`}>
          <h3 className={`text-2xl font-bold mb-6 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Autres Compétences
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className={`text-lg font-semibold mb-4 text-blue-600`}>
                Méthodologies
              </h4>
              <div className="space-y-2">
                {['Agile/Scrum', 'CI/CD', 'Code Review'].map((item, index) => (
                  <div key={index} className={`text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <h4 className={`text-lg font-semibold mb-4 text-blue-600`}>
                Langues
              </h4>
              <div className="space-y-2">
                {['Français (Natif)', 'Anglais (Débutant)'].map((item, index) => (
                  <div key={index} className={`text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <h4 className={`text-lg font-semibold mb-4 text-blue-600`}>
                Soft Skills
              </h4>
              <div className="space-y-2">
                {['Autonomie', 'Communication', 'Résolution de problèmes', 'Travail d\'équipe'].map((item, index) => (
                  <div key={index} className={`text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}