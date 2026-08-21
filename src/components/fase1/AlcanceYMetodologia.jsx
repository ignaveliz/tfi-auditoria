import { Activity, ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';

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
        <div className="relative border-l-2 border-corporate-blue ml-3 pl-6 space-y-6">
          
          <div className="relative">
            <div className="absolute -left-[33px] bg-corporate-blue text-white rounded-full p-1 border-4 border-white">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <h4 className="font-bold text-corporate-navy">Fase 1: Planificación y Relevamiento</h4>
            <p className="text-sm">Aplicación del CEAC y cálculo del Nivel de Confianza (Determina tamaño de pruebas).</p>
          </div>

          <div className="relative">
            <div className="absolute -left-[33px] bg-corporate-blue text-white rounded-full p-1 border-4 border-white">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <h4 className="font-bold text-corporate-navy">Fase 2: Ejecución y Pruebas</h4>
            <p className="text-sm">Pruebas de cumplimiento y sustantivas (Logs, configuraciones, evaluación de 3 escenarios de desastre: caída de server, incendio, ransomware).</p>
          </div>

          <div className="relative">
            <div className="absolute -left-[33px] bg-corporate-blue text-white rounded-full p-1 border-4 border-white">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <h4 className="font-bold text-corporate-navy">Fase 3: Conclusión e Informe</h4>
            <p className="text-sm">Estructura NCCCE para observaciones. Emisión del informe bipartito (Resumen Ejecutivo y Detallado).</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AlcanceYMetodologia;
