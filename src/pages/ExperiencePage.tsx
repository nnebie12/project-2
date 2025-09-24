import Experience from '../components/Experience';

export default function ExperiencePage({ darkMode }: { darkMode?: boolean }) {
  return (
    <div>
      <Experience darkMode={!!darkMode} />
    </div>
  );
}
