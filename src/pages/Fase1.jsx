import { useState, useEffect } from 'react';
import PresentacionFirma from '../components/fase1/PresentacionFirma';
import CodigoEtica from '../components/fase1/CodigoEtica';
import ComprensionCliente from '../components/fase1/ComprensionCliente';
import AlcanceYMetodologia from '../components/fase1/AlcanceYMetodologia';
import EquipoYCronograma from '../components/fase1/EquipoYCronograma';

const Fase1 = () => {
  const [activeSection, setActiveSection] = useState('presentacion');

  const sections = [
    { id: 'presentacion', title: '1. Firma Auditora' },
    { id: 'etica', title: '2. Código de Ética' },
    { id: 'cliente', title: '3. Comprensión del Cliente' },
    { id: 'alcance', title: '4. Alcance y Metodología' },
    { id: 'equipo', title: '5. Equipo y Cronograma' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      let currentSection = sections[0].id;

      for (const section of sectionElements) {
        if (section) {
          const rect = section.getBoundingClientRect();
          // Ajustar el offset según el tamaño del header superior
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
      
      {/* Sidebar de Navegación (Scrollspy) */}
      <aside className="md:w-1/4 flex-shrink-0">
        <div className="sticky top-24 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-corporate-navy mb-4 border-b pb-2">Contenido Fase 1</h3>
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
          <h1 className="text-3xl font-bold text-corporate-navy mb-2">Fase 1: Propuesta de Auditoría</h1>
          <p className="text-gray-500 mb-6 pb-6 border-b">Documento formal de presentación del servicio de aseguramiento técnico y metodológico.</p>
          
          <section id="presentacion" className="scroll-mt-24 pt-4">
            <PresentacionFirma />
          </section>
        </div>

        <section id="etica" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <CodigoEtica />
        </section>

        <section id="cliente" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <ComprensionCliente />
        </section>

        <section id="alcance" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <AlcanceYMetodologia />
        </section>

        <section id="equipo" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <EquipoYCronograma />
        </section>
        
      </div>
    </div>
  );
};

export default Fase1;
