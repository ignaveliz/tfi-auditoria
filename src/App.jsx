import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Fase1 from './pages/Fase1';
import Fase2 from './pages/Fase2';
import Anexos from './pages/Anexos';
import Fase3 from './pages/Fase3';
import Fase4 from './pages/Fase4';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/fase1" replace />} />
          <Route path="fase1" element={<Fase1 />} />
          <Route path="fase2" element={<Fase2 />} />
          <Route path="anexos" element={<Anexos />} />
          {/* Mock routes para las otras fases */}
          <Route path="fase3" element={<Fase3 />} />
          <Route path="fase4" element={<Fase4 />} />
          <Route path="fase5" element={<div className="p-10 text-center"><h1 className="text-3xl text-corporate-blue font-bold">Fase 5 - En Desarrollo</h1></div>} />
          <Route path="fase6" element={<div className="p-10 text-center"><h1 className="text-3xl text-corporate-blue font-bold">Fase 6 - En Desarrollo</h1></div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
