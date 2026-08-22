import { useState, useEffect } from 'react';
import ControlDocumentacion from '../components/fase2/ControlDocumentacion';
import EvaluacionAmbiente from '../components/fase2/EvaluacionAmbiente';
import RelevamientoBcpDrp from '../components/fase2/RelevamientoBcpDrp';
import EvaluacionBia from '../components/fase2/EvaluacionBia';
import MatrizRiesgos from '../components/fase2/MatrizRiesgos';
import PlanAuditoria from '../components/fase2/PlanAuditoria';
import ProgramaAuditoria from '../components/fase2/ProgramaAuditoria';
import ConclusionPlanificacion from '../components/fase2/ConclusionPlanificacion';

const Fase2 = () => {
  const [activeSection, setActiveSection] = useState('control-documentacion');

  const sections = [
    { id: 'control-documentacion', title: '1. Solicitud y Control' },
    { id: 'evaluacion-ambiente', title: '2. Evaluación Ambiente' },
    { id: 'relevamiento-bcp', title: '3. Relevamiento BCP/DRP' },
    { id: 'evaluacion-bia', title: '4. Evaluación BIA' },
    { id: 'matriz-riesgos', title: '5. Matriz de Riesgos' },
    { id: 'plan-auditoria', title: '6. Plan de Auditoría' },
    { id: 'programa-auditoria', title: '7. Programa de Auditoría' },
    { id: 'conclusion', title: '8. Conclusión' }
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
          <h3 className="text-lg font-bold text-corporate-navy mb-4 border-b pb-2">Contenido Fase 2</h3>
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
          <h1 className="text-3xl font-bold text-corporate-navy mb-2">Fase 2: Planificación y Evaluación del Ambiente de Control</h1>
          <p className="text-gray-500 mb-6 pb-6 border-b">CEAC · Relevamiento BCP/DRP · Evaluación del BIA · Matriz de Riesgos · Plan y Programa de Auditoría</p>
          
          <section id="control-documentacion" className="scroll-mt-24 pt-4">
            <ControlDocumentacion />
          </section>
        </div>

        <section id="evaluacion-ambiente" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <EvaluacionAmbiente />
        </section>

        <section id="relevamiento-bcp" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <RelevamientoBcpDrp />
        </section>
        
        <section id="evaluacion-bia" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <EvaluacionBia />
        </section>
        
        <section id="matriz-riesgos" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <MatrizRiesgos />
        </section>
        
        <section id="plan-auditoria" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <PlanAuditoria />
        </section>
        
        <section id="programa-auditoria" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <ProgramaAuditoria />
        </section>
        
        <section id="conclusion" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <ConclusionPlanificacion />
        </section>
        
      </div>
    </div>
  );
};

export default Fase2;
