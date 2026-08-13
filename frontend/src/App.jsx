import { LanguageProvider } from './i18n/LanguageContext.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Skills from './sections/Skills.jsx';
import Process from './sections/Process.jsx';
import CVSection from './sections/CVSection.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Process />
        <CVSection />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
