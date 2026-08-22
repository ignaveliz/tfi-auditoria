import { Target } from 'lucide-react';

const ObjetoEncuadre = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Target className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">1. Objeto de la fase y encuadre</h2>
      </div>

      <div className="prose max-w-none text-gray-700">
        <p className="mb-4">
          La etapa de conclusión no consiste en transcribir la totalidad de lo detectado durante el trabajo de campo. Consiste en ejercer juicio profesional: distinguir los controles que operan adecuadamente, separar las deficiencias probadas de las limitaciones de evidencia y, entre las deficiencias, determinar cuáles resultan significativas al punto de justificar su comunicación formal a la Alta Dirección.
        </p>
        <p className="mb-6">
          Una auditoría que eleva todo lo que encontró no demostró criterio. Por esa razón, este documento se ordena en tres decisiones sucesivas: primero enuncia los criterios de selección, después los aplica sobre la totalidad de las deficiencias detectadas —incluidas las que se descartan y el motivo del descarte—, y recién entonces desarrolla las fichas de las observaciones elevadas.
        </p>

        <h3 className="text-lg font-bold text-corporate-navy mb-3">1.1 Insumos de las fases anteriores</h3>
        <ul className="list-disc pl-5 mb-6">
          <li><strong>Fase 1 — Propuesta de Auditoría:</strong> Objetivos de control, alcance, criterios normativos y compromiso de emitir entre 5 y 8 observaciones y entre 3 y 5 controles adecuados.</li>
          <li><strong>Fase 2 — Planificación y CEAC:</strong> Nivel de confianza de 76,67% — ALTO, matriz de riesgos de auditoría RA-01 a RA-14 y programa de procedimientos PA-01 a PA-15.</li>
          <li><strong>Fases 3 y 4 — Papeles de trabajo:</strong> 14 papeles de ejecución, 7 papeles de observación y el índice de evidencia EV-01 a EV-13.</li>
          <li><strong>CEAC-2026-VAN-01:</strong> Cuestionario del ambiente de control, del que provienen deficiencias evaluadas para elevación y controles calificados como satisfactorios.</li>
        </ul>

        <h3 className="text-lg font-bold text-corporate-navy mb-3">1.2 Lo que esta fase no incluye</h3>
        <p>
          Los planes de acción con responsable y plazo, la respuesta formal del área auditada y los gráficos de distribución de riesgo y complejidad corresponden al informe de auditoría y no a esta etapa. Esta fase provee la materia prima de ambos: la ficha completa de cada observación y su calificación de riesgo y complejidad.
        </p>
      </div>
    </div>
  );
};

export default ObjetoEncuadre;
