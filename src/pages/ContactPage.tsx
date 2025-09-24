import Contact from '../components/Contact';

export default function ContactPage({ darkMode }: { darkMode?: boolean }) {
  return (
    <div>
      <Contact darkMode={!!darkMode} />
    </div>
  );
}
