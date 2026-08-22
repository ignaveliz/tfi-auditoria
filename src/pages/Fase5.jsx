import { useState, useEffect } from 'react';
import ObjetoEncuadre from '../components/fase5/ObjetoEncuadre';
import CriteriosSeleccion from '../components/fase5/CriteriosSeleccion';
import Trazabilidad from '../components/fase5/Trazabilidad';
import MatrizSeleccion from '../components/fase5/MatrizSeleccion';
import FichasObservaciones from '../components/fase5/FichasObservaciones';
import ControlesAdecuados from '../components/fase5/ControlesAdecuados';
import CierreFase5 from '../components/fase5/CierreFase5';

const Fase5 = () => {
  const [activeSection, setActiveSection] = useState('objeto-encuadre');

  const sections = [
    { id: 'objeto-encuadre', title: '1. Objeto y encuadre' },
    { id: 'criterios-seleccion', title: '2. Criterios de selección' },
    { id: 'trazabilidad', title: '3. Trazabilidad' },
    { id: 'matriz-seleccion', title: '4. Matriz de selección' },
    { id: 'fichas-observaciones', title: '5. Fichas NCCCE' },
    { id: 'controles-adecuados', title: '6. Controles adecuados' },
    { id: 'cierre-fase', title: '7-9. Cierre de la fase' },
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
          <h3 className="text-lg font-bold text-corporate-navy mb-4 border-b pb-2">Contenido Fase 5</h3>
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
          <h1 className="text-3xl font-bold text-corporate-navy mb-2">Fase 5: Selección de Observaciones</h1>
          <p className="text-gray-500 mb-6 pb-6 border-b">Matriz de selección · 7 fichas NCCCE · 5 controles adecuados</p>
          
          <section id="objeto-encuadre" className="scroll-mt-24 pt-4">
            <ObjetoEncuadre />
          </section>
        </div>

        <section id="criterios-seleccion" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <CriteriosSeleccion />
        </section>

        <section id="trazabilidad" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <Trazabilidad />
        </section>

        <section id="matriz-seleccion" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <MatrizSeleccion />
        </section>

        <section id="fichas-observaciones" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <FichasObservaciones />
        </section>
        
        <section id="controles-adecuados" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <ControlesAdecuados />
        </section>

        <section id="cierre-fase" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <CierreFase5 />
        </section>
        
      </div>
    </div>
  );
};

export default Fase5;
