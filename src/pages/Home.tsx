import Hero from '../components/Hero';

export default function Home({ darkMode }: { darkMode?: boolean }) {
  return (
    <div>
      <Hero darkMode={!!darkMode} />
    </div>
  );
}
