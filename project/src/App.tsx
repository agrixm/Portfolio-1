import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-950 text-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        {/* Only show footer on non-contact pages */}
        <Routes>
          <Route path="/contact" element={null} />
          <Route path="*" element={<Footer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}