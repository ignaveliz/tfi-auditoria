import { Activity, ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';
import Acordeon from '../Acordeon';

const AlcanceYMetodologia = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Activity className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">4. Alcance y Metodología de Auditoría</h2>
      </div>

      <div className="prose max-w-none text-gray-700">
        
        <h3 className="text-xl font-bold text-corporate-navy mb-4 border-b pb-2">Objetivos de Control</h3>
        <div className="space-y-4 mb-8">
          {[
            { id: 'OC-1', title: 'Continuidad: BCP, DRP y Análisis de Impacto (BIA)', desc: 'Validar formalización, vigencia, aprobación y consistencia metodológica de los planes de continuidad.' },
            { id: 'OC-2', title: 'Gestión de Resguardos y Recuperación', desc: 'Determinar si la política de backups es suficiente, se ejecuta y permite cumplir los RPO prometidos.' },
            { id: 'OC-3', title: 'Seguridad Lógica en Entornos de Recuperación', desc: 'Verificar que el sitio alternativo opere bajo los mismos niveles de seguridad (IAM, Break-glass) que producción.' },
          ].map((oc) => (
            <div key={oc.id} className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <span className="inline-block bg-corporate-blue text-white px-2 py-1 rounded text-xs font-bold mb-2">{oc.id}</span>
              <h4 className="font-bold text-corporate-navy m-0">{oc.title}</h4>
              <p className="text-sm mt-1">{oc.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-corporate-navy mb-4 border-b pb-2">Alcance de la Auditoría</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <h4 className="font-bold flex items-center gap-2 mb-2"><ShieldAlert className="h-5 w-5 text-corporate-accent" /> Inclusiones</h4>
            <ul className="text-sm list-disc pl-5 space-y-1">
              <li>Core Bancario, IAM, plataforma de integración, y batch de sueldos.</li>
              <li>Entorno productivo y de contingencia.</li>
              <li>Período bajo análisis: 1/06/2025 al 30/06/2026.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold flex items-center gap-2 mb-2"><FileText className="h-5 w-5 text-red-500" /> Exclusiones</h4>
            <ul className="text-sm list-disc pl-5 space-y-1">
              <li>Revisión de código fuente.</li>
              <li>Pruebas de intrusión / pentesting.</li>
              <li>Auditoría contable o política crediticia.</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold text-corporate-navy mb-4 border-b pb-2">Marco Normativo</h3>
        <div className="flex flex-wrap gap-2 mb-8">
          {['BCRA Com. A 7777', 'BCRA Com. A 7783', 'ISO 22301', 'ISO/IEC 27002:2022', 'ISACA ITAF', 'Ley 25.326'].map((n) => (
            <span key={n} className="bg-corporate-gray text-corporate-navy border border-gray-300 px-3 py-1 rounded-full text-sm font-medium">
              {n}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-corporate-navy mb-4 border-b pb-2">Metodología (Enfoque Basado en Riesgos)</h3>
        <p className="mb-4">
          La metodología se apoya en los estándares de ISACA (ITAF), COBIT 2019 e ISO/IEC 19011, organizada en fases. 
          El rasgo distintivo es que la extensión de las pruebas sustantivas se calibra en función del nivel de confianza asignado al ambiente de control.
        </p>
        
        <Acordeon title="Desarrollo de las Fases (Fase 0 a Fase 3)">
          <div className="space-y-4">
            <div>
              <h5 className="font-bold text-corporate-blue">Fase 0 – Aceptación e Independencia</h5>
              <p className="text-sm">Evaluación de conflictos de interés, competencia disponible y suficiencia de recursos. Suscripción de Carta Compromiso.</p>
            </div>
            <div>
              <h5 className="font-bold text-corporate-blue">Fase 1 – Planificación y Relevamiento</h5>
              <p className="text-sm">Entendimiento del negocio y procesos críticos. Aplicación del <strong>CEAC (Cuestionario de Evaluación del Ambiente de Control)</strong> y determinación del Nivel de Confianza (Alto, Medio, Bajo) que calibra las pruebas sustantivas de la fase siguiente.</p>
            </div>
            <div>
              <h5 className="font-bold text-corporate-blue">Fase 2 – Ejecución y Pruebas</h5>
              <p className="text-sm">Diseño de programas de auditoría. Pruebas de cumplimiento (inspección de actas, políticas) y pruebas sustantivas (análisis de logs, configuraciones, evaluación de 3 escenarios de desastre: falla de servidor, incendio y ransomware). Uso de CAATs para análisis poblacional y muestreo documentado.</p>
            </div>
            <div>
              <h5 className="font-bold text-corporate-blue">Fase 3 – Conclusión, Informe y Cierre</h5>
              <p className="text-sm">Redacción de observaciones bajo metodología NCCCE. Reunión de Validación Técnica con las áreas auditadas. Emisión de informes diferenciados.</p>
            </div>
          </div>
        </Acordeon>

        <Acordeon title="Estructura de Observaciones (Metodología NCCCE)">
          <p className="text-sm mb-3">Cada desvío confirmado se formaliza bajo una estructura que obliga a explicitar el criterio vulnerado y a separar el hecho de su causa y consecuencia:</p>
          <ul className="text-sm space-y-2 list-none pl-0">
            <li><span className="font-bold text-corporate-navy bg-gray-100 px-2 rounded">N</span> <strong>Nombre:</strong> Título sintético que identifica el problema sin adjetivar.</li>
            <li><span className="font-bold text-corporate-navy bg-gray-100 px-2 rounded">C</span> <strong>Criterio:</strong> Norma, estándar o política interna vulnerada.</li>
            <li><span className="font-bold text-corporate-navy bg-gray-100 px-2 rounded">C</span> <strong>Condición:</strong> Situación efectivamente constatada por el auditor (evidencia).</li>
            <li><span className="font-bold text-corporate-navy bg-gray-100 px-2 rounded">C</span> <strong>Causa:</strong> Origen administrativo o técnico del desvío.</li>
            <li><span className="font-bold text-corporate-navy bg-gray-100 px-2 rounded">E</span> <strong>Efecto / Recomendación:</strong> Impacto (cuantificado si es posible) y acción correctiva viable, priorizada.</li>
          </ul>
        </Acordeon>

        <Acordeon title="Informes Diferenciados (Entregables)">
          <div className="grid md:grid-cols-2 gap-4 mt-2">
            <div className="border border-gray-200 p-4 rounded-md">
              <h5 className="font-bold text-corporate-blue mb-2">Parte A — Resumen Ejecutivo</h5>
              <p className="text-sm"><strong>Destinatario:</strong> Gerencia General y Directorio.</p>
              <p className="text-sm mt-1">Lenguaje de negocio. Exposición del riesgo de continuidad, cumplimiento frente al BCRA, cuantificación de exposición e implicancias estratégicas.</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-md">
              <h5 className="font-bold text-corporate-blue mb-2">Parte B — Informe Detallado</h5>
              <p className="text-sm"><strong>Destinatario:</strong> Gerencia de Tecnología y CISO.</p>
              <p className="text-sm mt-1">Dossier técnico: descripción analítica de debilidades, logs, configuraciones, referencias a PTs y planes de mitigación.</p>
            </div>
          </div>
        </Acordeon>

      </div>
    </div>
  );
};

export default AlcanceYMetodologia;
