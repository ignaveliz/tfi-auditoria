import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Fase1 from './pages/Fase1';
import Anexos from './pages/Anexos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/fase1" replace />} />
          <Route path="fase1" element={<Fase1 />} />
          <Route path="anexos" element={<Anexos />} />
          {/* Mock routes para las otras fases */}
          <Route path="fase2" element={<div className="p-10 text-center"><h1 className="text-3xl text-corporate-blue font-bold">Fase 2 - En Desarrollo</h1></div>} />
          <Route path="fase3" element={<div className="p-10 text-center"><h1 className="text-3xl text-corporate-blue font-bold">Fase 3 - En Desarrollo</h1></div>} />
          <Route path="fase4" element={<div className="p-10 text-center"><h1 className="text-3xl text-corporate-blue font-bold">Fase 4 - En Desarrollo</h1></div>} />
          <Route path="fase5" element={<div className="p-10 text-center"><h1 className="text-3xl text-corporate-blue font-bold">Fase 5 - En Desarrollo</h1></div>} />
          <Route path="fase6" element={<div className="p-10 text-center"><h1 className="text-3xl text-corporate-blue font-bold">Fase 6 - En Desarrollo</h1></div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
