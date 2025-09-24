import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import APropos from '../src/pages/APropos';
import Competences from '../src/pages/Competences';
import ContactPage from '../src/pages/ContactPage';
import ExperiencePage from '../src/pages/ExperiencePage';
import Projets from '../src/pages/Projets';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/a-propos" element={<APropos darkMode={darkMode} />} />
          <Route path="/experience" element={<ExperiencePage darkMode={darkMode} />} />
          <Route path="/projets" element={<Projets darkMode={darkMode} />} />
          <Route path="/competences" element={<Competences darkMode={darkMode} />} />
          <Route path="/contact" element={<ContactPage darkMode={darkMode} />} />
        </Routes>
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;