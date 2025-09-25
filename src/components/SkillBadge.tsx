// React JSX runtime is automatic in newer setups; no explicit React import needed

interface SkillBadgeProps {
  name: string;
}

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

export default function SkillBadge({ name }: SkillBadgeProps) {
  const classes = colorMap[name] ?? 'bg-gray-400 text-white';
  const initials = getInitials(name);

  return (
    <span className="relative inline-flex items-center" tabIndex={0}>
      <span
        className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-[10px] font-semibold ${classes}`}
        aria-hidden
      >
        {initials}
      </span>

      {/* Tooltip stylé */}
      <span className="tooltip-text pointer-events-none select-none">
        {name}
      </span>
    </span>
  );
}
