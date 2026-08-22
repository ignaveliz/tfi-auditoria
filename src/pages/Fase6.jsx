import { useState, useEffect } from 'react';
import ResumenEjecutivo from '../components/fase6/ResumenEjecutivo';
import InformeDetallado from '../components/fase6/InformeDetallado';

const Fase6 = () => {
  const [activeTab, setActiveTab] = useState('resumen');
  const [activeSection, setActiveSection] = useState('');

  const resumenSections = [
    { id: 'a2-proposito', title: 'A.2 Propósito y alcance' },
    { id: 'a3-conclusion', title: 'A.3 Conclusión general' },
    { id: 'a4-cuadro', title: 'A.4 Cuadro resumen' },
    { id: 'a5-riesgos', title: 'A.5 Los tres riesgos principales' },
    { id: 'a6-recomendaciones', title: 'A.6 Recomendaciones' },
    { id: 'a7-pasos', title: 'A.7 Próximos pasos' }
  ];

  const detalladoSections = [
    { id: 'b2-antecedentes', title: 'B.2 Antecedentes' },
    { id: 'b3-alcance', title: 'B.3 Alcance y limitaciones' },
    { id: 'b4-metodologia', title: 'B.4 Metodología' },
    { id: 'b5-ceac', title: 'B.5 Resultado CEAC' },
    { id: 'b6-cgti', title: 'B.6 Evaluación CGTI' },
    { id: 'b7-escenarios', title: 'B.7 Escenarios de contingencia' },
    { id: 'b8-fichas', title: 'B.8 Fichas NCCCE' },
    { id: 'b9-adecuados', title: 'B.9 Controles adecuados' },
    { id: 'b10-plan', title: 'B.10 Plan de acción' },
    { id: 'b11-limitaciones', title: 'B.11 Limitaciones al alcance' },
    { id: 'b12-cierre', title: 'B.12 Cierre del encargo' },
  ];

  const currentSections = activeTab === 'resumen' ? resumenSections : detalladoSections;

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = currentSections.map(s => document.getElementById(s.id));
      let currentSection = currentSections[0]?.id;

      for (const section of sectionElements) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
            currentSection = section.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount or tab change
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
      
      {/* Sidebar de Navegación */}
      <aside className="md:w-1/4 flex-shrink-0">
        <div className="sticky top-24 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-corporate-navy mb-4 border-b pb-2">Contenido Fase 6</h3>
          <ul className="space-y-2">
            {currentSections.map(section => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left w-full text-sm py-1.5 px-3 rounded-md transition-colors ${
                    activeSection === section.id
                      ? 'bg-corporate-blue text-white font-medium'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Contenido de las Secciones */}
      <div className="md:w-3/4 space-y-8">
        
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-8">
          <h1 className="text-3xl font-bold text-corporate-navy mb-2">Fase 6: Informe de Auditoría</h1>
          <p className="text-gray-500 mb-6 pb-6 border-b">Documento Final · Resumen Ejecutivo e Informe Detallado</p>
          
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => { setActiveTab('resumen'); window.scrollTo({ top: 0 }); }}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'resumen' ? 'bg-white text-corporate-navy shadow' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Parte A - Resumen Ejecutivo
            </button>
            <button
              onClick={() => { setActiveTab('detallado'); window.scrollTo({ top: 0 }); }}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'detallado' ? 'bg-white text-corporate-navy shadow' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Parte B - Informe Detallado
            </button>
          </div>
        </div>

        {activeTab === 'resumen' && <ResumenEjecutivo />}
        {activeTab === 'detallado' && <InformeDetallado />}
        
      </div>
    </div>
  );
};

export default Fase6;
