import Skills from '../components/Skills';

export default function Competences({ darkMode }: { darkMode?: boolean }) {
  return (
    <div>
      <Skills darkMode={!!darkMode} />
    </div>
  );
}
