import { Scale } from 'lucide-react';
import Acordeon from '../Acordeon';
const CodigoEtica = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Scale className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">2. Código de Ética y Conducta Profesional</h2>
      </div>

      <div className="prose max-w-none text-gray-700">
        <p className="mb-6">
          El presente encargo se ejecuta bajo el Código de Ética y Conducta Profesional de Vanguard IT Audit Group, 
          alineado con ISACA y IIA.
        </p>

        <h3 className="text-xl font-bold text-corporate-navy mb-4 border-b pb-2">Principios Fundamentales</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            { title: 'Integridad', desc: 'Trabajo con honestidad y diligencia.' },
            { title: 'Objetividad', desc: 'Evaluación sin sesgos ni presiones externas.' },
            { title: 'Independencia', desc: 'Abstención de auditar lo diseñado u operado por nosotros mismos.' },
            { title: 'Confidencialidad', desc: 'Uso exclusivo de la información para fines del encargo.' },
            { title: 'Competencia', desc: 'Asumir encargos solo con el conocimiento necesario.' },
            { title: 'Debido Cuidado', desc: 'Escepticismo y diligencia profesional.' },
            { title: 'Conducta profesional', desc: 'Comportamiento acorde a las normas profesionales y la confianza depositada por el cliente.' },
          ].map((v, i) => (
            <div key={i} className="flex gap-3 items-start">
              <div className="mt-1 bg-corporate-accent h-2 w-2 rounded-full flex-shrink-0"></div>
              <div>
                <strong className="block text-corporate-navy">{v.title}</strong>
                <span className="text-sm text-gray-600">{v.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <Acordeon title="Compromisos Específicos para el Encargo">
            <ul className="space-y-3 list-disc pl-5 text-sm text-gray-600">
              <li><strong>Declaración de independencia:</strong> Declaración jurada de ausencia de conflictos de interés con Crédito Fácil S.A.</li>
              <li><strong>Prohibición de operar sobre datos productivos:</strong> Accesos de solo lectura. Análisis sobre copias de producción.</li>
              <li><strong>Tratamiento de datos personales:</strong> Disociación y enmascaramiento conforme a la Ley 25.326.</li>
              <li><strong>Custodia de evidencia:</strong> Cifrada por cinco años, luego destruida bajo acta.</li>
              <li><strong>Política antisoborno:</strong> Prohibición de recibir obsequios o atenciones.</li>
              <li><strong>Auditoría sobre procesos:</strong> No sobre personas. Las observaciones se atribuyen a procesos y controles.</li>
              <li><strong>Derecho de descargo:</strong> Comunicación previa obligatoria al área auditada antes de la emisión del informe.</li>
              <li><strong>Canal de integridad:</strong> Vía directa confidencial (<a href="mailto:integridad@vanguardit.com.ar" className="text-corporate-blue">integridad@vanguardit.com.ar</a>).</li>
            </ul>
          </Acordeon>
        </div>
      </div>
    </div>
  );
};

export default CodigoEtica;
