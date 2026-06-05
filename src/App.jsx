import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Ministerios from './pages/Ministerios';
import Horarios from './pages/Horarios';
import Contacto from './pages/Contacto';
import Construccion from './pages/Construccion';
import  Galeria  from './pages/Galeria';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />

      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/nosotros/:tab" element={<Nosotros />} />
          <Route path="/ministerios" element={<Ministerios />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/horarios" element={<Horarios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/construccion" element={<Construccion />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;