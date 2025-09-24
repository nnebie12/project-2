import About from '../components/About';

export default function APropos({ darkMode }: { darkMode?: boolean }) {
  return (
    <div>
      <About darkMode={!!darkMode} />
    </div>
  );
}
