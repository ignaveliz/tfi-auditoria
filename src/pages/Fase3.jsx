import { useState, useEffect } from 'react';
import AlcanceEvidencia from '../components/fase3/AlcanceEvidencia';
import ControlesAdecuados from '../components/fase3/ControlesAdecuados';
import CoberturaRiesgos from '../components/fase3/CoberturaRiesgos';
import LimitacionesCierre from '../components/fase3/LimitacionesCierre';

const Fase3 = () => {
  const [activeSection, setActiveSection] = useState('alcance-evidencia');

  const sections = [
    { id: 'alcance-evidencia', title: '1. Alcance y Evidencia' },
    { id: 'controles-adecuados', title: '2. Controles Adecuados' },
    { id: 'cobertura-riesgos', title: '3. Cobertura de Riesgos' },
    { id: 'limitaciones-cierre', title: '4. Limitaciones y Cierre' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      let currentSection = sections[0].id;

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <h3 className="text-lg font-bold text-corporate-navy mb-4 border-b pb-2">Contenido Fase 3</h3>
          <ul className="space-y-2">
            {sections.map(section => (
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
      <div className="md:w-3/4 space-y-12">
        
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <h1 className="text-3xl font-bold text-corporate-navy mb-2">Fase 3: Controles Generales de TI</h1>
          <p className="text-gray-500 mb-6 pb-6 border-b">Ejecución del Trabajo de Campo · Evaluación de Controles · Evidencia de Auditoría</p>
          
          <section id="alcance-evidencia" className="scroll-mt-24 pt-4">
            <AlcanceEvidencia />
          </section>
        </div>

        <section id="controles-adecuados" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <ControlesAdecuados />
        </section>

        <section id="cobertura-riesgos" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <CoberturaRiesgos />
        </section>
        
        <section id="limitaciones-cierre" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <LimitacionesCierre />
        </section>
        
      </div>
    </div>
  );
};

export default Fase3;
