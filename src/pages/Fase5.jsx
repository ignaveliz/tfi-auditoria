import React, { useState, useEffect } from 'react';
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
      const currentScrollPosition = window.scrollY + 150; // Offset for header

      let currentActiveSection = sections[0].id;
      for (let i = 0; i < sectionElements.length; i++) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= currentScrollPosition) {
          currentActiveSection = sections[i].id;
        }
      }
      setActiveSection(currentActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Leave some space at top
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar de navegación */}
      <div className="w-1/4 hidden md:block border-r border-gray-200 bg-white min-h-screen sticky top-0 h-screen overflow-y-auto">
        <div className="p-6">
          <h2 className="text-xl font-bold text-corporate-navy mb-6">Índice Fase 5</h2>
          <nav className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-4 py-3 text-sm rounded-lg transition-colors ${
                  activeSection === section.id
                    ? 'bg-corporate-blue text-white font-medium shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 max-w-4xl px-8 py-10">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-corporate-navy mb-2">FASE 5</h1>
          <h2 className="text-2xl text-gray-600 font-light">Selección y Formalización de Observaciones</h2>
          <p className="mt-4 text-sm text-gray-500 bg-white p-4 rounded shadow-sm border-l-4 border-corporate-blue">
            Matriz de selección · 7 fichas NCCCE · 5 controles adecuados
          </p>
        </div>

        <div className="space-y-16">
          <section id="objeto-encuadre">
            <ObjetoEncuadre />
          </section>

          <section id="criterios-seleccion">
            <CriteriosSeleccion />
          </section>

          <section id="trazabilidad">
            <Trazabilidad />
          </section>

          <section id="matriz-seleccion">
            <MatrizSeleccion />
          </section>

          <section id="fichas-observaciones">
            <FichasObservaciones />
          </section>

          <section id="controles-adecuados">
            <ControlesAdecuados />
          </section>

          <section id="cierre-fase">
            <CierreFase5 />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Fase5;
