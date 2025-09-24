import Projects from '../components/Projects';

export default function Projets({ darkMode }: { darkMode?: boolean }) {
  return (
    <div>
      <Projects darkMode={!!darkMode} />
    </div>
  );
}
