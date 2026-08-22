import { useState, useEffect } from 'react';
import ListadoGeneral from '../components/fase4/ListadoGeneral';
import EjecucionOC1 from '../components/fase4/EjecucionOC1';
import EjecucionOC2 from '../components/fase4/EjecucionOC2';
import EjecucionOC3 from '../components/fase4/EjecucionOC3';
import PapelTransversal from '../components/fase4/PapelTransversal';
import BasesObservacion from '../components/fase4/BasesObservacion';

const Fase4 = () => {
  const [activeSection, setActiveSection] = useState('listado-general');

  const sections = [
    { id: 'listado-general', title: '1. Listado General' },
    { id: 'ejecucion-oc1', title: '2. OC-1 (Continuidad)' },
    { id: 'ejecucion-oc2', title: '3. OC-2 (Resguardos)' },
    { id: 'ejecucion-oc3', title: '4. OC-3 (Seguridad Lógica)' },
    { id: 'papel-transversal', title: '5. Papel Transversal' },
    { id: 'bases-observacion', title: '6. Bases de Observación' }
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
          <h3 className="text-lg font-bold text-corporate-navy mb-4 border-b pb-2">Contenido Fase 4</h3>
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
          <h1 className="text-3xl font-bold text-corporate-navy mb-2">Fase 4: Papeles de Trabajo y Evidencia</h1>
          <p className="text-gray-500 mb-6 pb-6 border-b">14 papeles de ejecución · 7 bases de observación</p>
          
          <section id="listado-general" className="scroll-mt-24 pt-4">
            <ListadoGeneral />
          </section>
        </div>

        <section id="ejecucion-oc1" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <EjecucionOC1 />
        </section>

        <section id="ejecucion-oc2" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <EjecucionOC2 />
        </section>

        <section id="ejecucion-oc3" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <EjecucionOC3 />
        </section>

        <section id="papel-transversal" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <PapelTransversal />
        </section>
        
        <section id="bases-observacion" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <BasesObservacion />
        </section>
        
      </div>
    </div>
  );
};

export default Fase4;
