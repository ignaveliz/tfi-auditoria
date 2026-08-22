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
        
        {/* 1. Objetivo General */}
        <div className="bg-blue-50 border-l-4 border-corporate-blue p-4 mb-8 rounded-r-md">
          <h3 className="text-lg font-bold text-corporate-navy mb-2 m-0">Objetivo General</h3>
          <p className="text-sm m-0">
            Evaluar la existencia, diseño, aprobación formal, vigencia, consistencia metodológica y efectividad operativa del Plan de Continuidad del Negocio (BCP), el Plan de Recuperación ante Desastres (DRP) y el Análisis de Impacto al Negocio (BIA) de Financiera Crédito Fácil S.A., verificando su alineación con las Comunicaciones «A» 7777 y «A» 7783 del BCRA, ISO/IEC 27002:2022 e ISO 22301.
          </p>
        </div>

        <h3 className="text-xl font-bold text-corporate-navy mb-4 border-b pb-2">Objetivos de Control</h3>
        <div className="space-y-4 mb-6">
          {[
            { id: 'OC-1', title: 'Continuidad: BCP, DRP y Análisis de Impacto (BIA)', desc: 'Validar formalización, vigencia, aprobación y consistencia metodológica de los planes de continuidad.' },
            { id: 'OC-2', title: 'Gestión de Resguardos y Recuperación', desc: 'Determinar si la política de backups es suficiente, se ejecuta y permite cumplir los RPO prometidos.' },
            { id: 'OC-3', title: 'Seguridad Lógica en Entornos de Recuperación', desc: 'Verificar que el sitio alternativo opere bajo los mismos niveles de seguridad (IAM, Break-glass) que producción.' },
          ].map((oc) => (
            <div key={oc.id} className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <span className="inline-block bg-corporate-blue text-white px-2 py-1 rounded text-xs font-bold mb-2">{oc.id}</span>
              <h4 className="font-bold text-corporate-navy m-0">{oc.title}</h4>
              <p className="text-sm mt-1 mb-0">{oc.desc}</p>
            </div>
          ))}
        </div>

        {/* 2. Pruebas Mínimas Comprometidas por Objetivo de Control */}
        <div className="mb-8">
          <Acordeon title="Pruebas Mínimas Comprometidas por Objetivo de Control">
            <div className="space-y-4 mt-2">
              <div>
                <h5 className="font-bold text-corporate-blue">OC-1 (Continuidad y BIA):</h5>
                <ul className="text-sm list-disc pl-5 space-y-1 mt-1">
                  <li>Validación documental de aprobación por Directorio/Comité TI.</li>
                  <li>Examen de vigencia temporal (&lt; 12 meses, Com. «A» 7777).</li>
                  <li>Consistencia metodológica del BIA (MTPD, RTO, RPO en los 5 procesos + IAM).</li>
                  <li>Razonabilidad técnica de RTO/RPO frente a infraestructura real.</li>
                  <li>Evidencia de resiliencia probada (simulacro integral en últimos 12 meses).</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-corporate-blue">OC-2 (Resguardos y Recuperación):</h5>
                <ul className="text-sm list-disc pl-5 space-y-1 mt-1">
                  <li>Suficiencia de política de resguardo (frecuencia, alcance, retención, cifrado vs RPO).</li>
                  <li>Frecuencia declarada vs real en logs del Core y servidores batch.</li>
                  <li>Almacenamiento fuera del sitio principal (condiciones cold/warm site).</li>
                  <li>Garantía de restauración (pruebas documentadas con tiempos reales).</li>
                  <li>Protección frente a ransomware (inmutabilidad y aislamiento de copias).</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-corporate-blue">OC-3 (Seguridad Lógica en Contingencia):</h5>
                <ul className="text-sm list-disc pl-5 space-y-1 mt-1">
                  <li>Homogeneidad de controles de acceso entre producción y contingencia/cloud.</li>
                  <li>Control de accesos de emergencia (break-glass: procedimiento, registro inalterable, aprobación y revisión post-evento).</li>
                  <li>Erradicación de cuentas genéricas y privilegios pasivos excesivos.</li>
                  <li>Trazabilidad y pistas de auditoría centralizadas en contingencia.</li>
                  <li>Continuidad y recuperación del propio sistema IAM.</li>
                </ul>
              </div>
            </div>
          </Acordeon>
        </div>

        <h3 className="text-xl font-bold text-corporate-navy mb-4 border-b pb-2">Alcance de la Auditoría</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-4">
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
        
        {/* 3. Alcance Lógico / Tecnológico */}
        <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-8">
          <h4 className="font-bold text-corporate-navy mb-2">Alcance Lógico / Tecnológico</h4>
          <ul className="text-sm list-disc pl-5 space-y-1 mb-0">
            <li>Core Bancario y módulo créditos</li>
            <li>API Gateway de riesgos</li>
            <li>Servidores Batch y Portal Banca Empresa</li>
            <li>Switch transaccional/antifraude</li>
            <li>TMS y enlaces MEP/cámaras</li>
            <li>CRM SaaS</li>
            <li>IAM productivo y contingencia</li>
            <li>Repositorios de resguardo y sitio alternativo</li>
          </ul>
        </div>

        {/* 4. Marco Normativo Expandido */}
        <h3 className="text-xl font-bold text-corporate-navy mb-4 border-b pb-2">Marco Normativo</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <h4 className="font-bold text-corporate-blue mb-3 border-b pb-1">Local (Obligatorio)</h4>
            <ul className="text-sm space-y-3">
              <li><strong>BCRA Com. «A» 7777:</strong> Continuidad, BCP/DRP/BIA, actualización y pruebas anuales, gobierno.</li>
              <li><strong>BCRA Com. «A» 7783:</strong> Requisitos de seguridad lógica en contingencia, resguardos remotos.</li>
              <li><strong>BCRA Com. «A» 7724:</strong> Inmutabilidad de logs, autenticación robusta y trazabilidad.</li>
              <li><strong>Ley 25.326:</strong> Protección de Datos Personales.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-corporate-blue mb-3 border-b pb-1">Internacional</h4>
            <ul className="text-sm space-y-3">
              <li><strong>ISO/IEC 27002:2022</strong> (5.29, 5.30, 8.13, 5.15, 5.18, 8.2)</li>
              <li><strong>ISO 22301</strong> (cláusulas 8.2, 8.3)</li>
              <li><strong>COBIT 2019</strong> (DSS04, DSS01, APO12, DSS06)</li>
              <li><strong>COSO 2013</strong> (CC1 a CC5 para ambiente de control)</li>
              <li><strong>ISO/IEC 19011 e ISACA ITAF</strong> (conducción del encargo)</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold text-corporate-navy mb-4 border-b pb-2">Metodología (Enfoque Basado en Riesgos)</h3>
        <p className="mb-4">
          La metodología se apoya en los estándares de ISACA (ITAF), COBIT 2019 e ISO/IEC 19011, organizada en fases. 
          El rasgo distintivo es que la extensión de las pruebas sustantivas se calibra en función del nivel de confianza asignado al ambiente de control.
        </p>

        {/* 5. Escenarios de Contingencia Evaluados */}
        <div className="mb-4">
          <Acordeon title="Escenarios de Contingencia Evaluados">
            <div className="space-y-3 mt-2">
              <div className="p-3 bg-gray-50 rounded border border-gray-200">
                <h5 className="font-bold text-corporate-blue">Escenario 1: Falla de servidores principales (Core y batch)</h5>
                <p className="text-sm mt-1">Conmutación y failover vs RTO.</p>
              </div>
              <div className="p-3 bg-gray-50 rounded border border-gray-200">
                <h5 className="font-bold text-corporate-blue">Escenario 2: Incendio en sala de servidores</h5>
                <p className="text-sm mt-1">Activación de sitio alternativo, copias externas y trabajo remoto.</p>
              </div>
              <div className="p-3 bg-gray-50 rounded border border-gray-200">
                <h5 className="font-bold text-corporate-blue">Escenario 3: Ataque de ransomware</h5>
                <p className="text-sm mt-1">Servidor batch cifrado en fecha de sueldos; inmutabilidad, restauración vs RPO y escalamiento al CISO.</p>
              </div>
            </div>
          </Acordeon>
        </div>
        
        {/* 6. Desarrollo de las Fases con CEAC expandido */}
        <div className="mb-4">
          <Acordeon title="Desarrollo de las Fases (Fase 0 a Fase 3)">
            <div className="space-y-4 mt-2">
              <div>
                <h5 className="font-bold text-corporate-blue">Fase 0 – Aceptación e Independencia</h5>
                <p className="text-sm mt-1">Evaluación de conflictos de interés, competencia disponible y suficiencia de recursos. Suscripción de Carta Compromiso.</p>
              </div>
              <div>
                <h5 className="font-bold text-corporate-blue">Fase 1 – Planificación y Relevamiento</h5>
                <p className="text-sm mt-1">Entendimiento del negocio y procesos críticos. Aplicación del <strong>CEAC (Cuestionario de Evaluación del Ambiente de Control)</strong> y determinación del Nivel de Confianza que calibra las pruebas sustantivas de la fase siguiente.</p>
                <div className="mt-2 bg-gray-50 p-3 rounded border border-gray-200">
                  <p className="text-sm font-semibold mb-2">Detalle CEAC: 30 preguntas organizadas en 9 dimensiones (COSO, COBIT, ISO 27002, BCRA «A» 7777)</p>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li><strong>Alto (75%–100%):</strong> Confianza alta → Pruebas de cumplimiento extensas, menor volumen sustantivo.</li>
                    <li><strong>Medio (45%–74%):</strong> Confianza media → Pruebas balanceadas, énfasis en puntos débiles.</li>
                    <li><strong>Bajo (0%–44%):</strong> Confianza baja → Predominio de pruebas sustantivas extensas.</li>
                  </ul>
                </div>
              </div>
              <div>
                <h5 className="font-bold text-corporate-blue">Fase 2 – Ejecución y Pruebas</h5>
                <p className="text-sm mt-1">Diseño de programas de auditoría. Pruebas de cumplimiento (inspección de actas, políticas) y pruebas sustantivas (análisis de logs, configuraciones, evaluación de 3 escenarios de desastre: falla de servidor, incendio y ransomware). Uso de CAATs para análisis poblacional y muestreo documentado.</p>
              </div>
              <div>
                <h5 className="font-bold text-corporate-blue">Fase 3 – Conclusión, Informe y Cierre</h5>
                <p className="text-sm mt-1">Redacción de observaciones bajo metodología NCCCE. Reunión de Validación Técnica con las áreas auditadas. Emisión de informes diferenciados.</p>
              </div>
            </div>
          </Acordeon>
        </div>

        <div className="mb-4">
          <Acordeon title="Estructura de Observaciones (Metodología NCCCE)">
            <p className="text-sm mb-3 mt-2">Cada desvío confirmado se formaliza bajo una estructura que obliga a explicitar el criterio vulnerado y a separar el hecho de su causa y consecuencia:</p>
            <ul className="text-sm space-y-2 list-none pl-0">
              <li><span className="font-bold text-corporate-navy bg-gray-100 px-2 py-1 inline-block rounded text-center w-8">N</span> <strong>Nombre:</strong> Título sintético que identifica el problema sin adjetivar.</li>
              <li><span className="font-bold text-corporate-navy bg-gray-100 px-2 py-1 inline-block rounded text-center w-8">C</span> <strong>Criterio:</strong> Norma, estándar o política interna vulnerada.</li>
              <li><span className="font-bold text-corporate-navy bg-gray-100 px-2 py-1 inline-block rounded text-center w-8">C</span> <strong>Condición:</strong> Situación efectivamente constatada por el auditor (evidencia).</li>
              <li><span className="font-bold text-corporate-navy bg-gray-100 px-2 py-1 inline-block rounded text-center w-8">C</span> <strong>Causa:</strong> Origen administrativo o técnico del desvío.</li>
              <li><span className="font-bold text-corporate-navy bg-gray-100 px-2 py-1 inline-block rounded text-center w-8">E</span> <strong>Efecto / Recomendación:</strong> Impacto (cuantificado si es posible) y acción correctiva viable, priorizada.</li>
            </ul>
          </Acordeon>
        </div>

        <div className="mb-4">
          <Acordeon title="Informes Diferenciados (Entregables)">
            <div className="grid md:grid-cols-2 gap-4 mt-2">
              <div className="border border-gray-200 p-4 rounded-md bg-white">
                <h5 className="font-bold text-corporate-blue mb-2">Parte A — Resumen Ejecutivo</h5>
                <p className="text-sm"><strong>Destinatario:</strong> Gerencia General y Directorio.</p>
                <p className="text-sm mt-1">Lenguaje de negocio. Exposición del riesgo de continuidad, cumplimiento frente al BCRA, cuantificación de exposición e implicancias estratégicas.</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-md bg-white">
                <h5 className="font-bold text-corporate-blue mb-2">Parte B — Informe Detallado</h5>
                <p className="text-sm"><strong>Destinatario:</strong> Gerencia de Tecnología y CISO.</p>
                <p className="text-sm mt-1">Dossier técnico: descripción analítica de debilidades, logs, configuraciones, referencias a PTs y planes de mitigación.</p>
              </div>
            </div>
          </Acordeon>
        </div>

        {/* 7. Entregables Comprometidos */}
        <div className="mb-8">
          <Acordeon title="Entregables Comprometidos">
            <div className="overflow-x-auto mt-2">
              <table className="min-w-full divide-y divide-gray-200 text-sm border">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold text-corporate-navy uppercase tracking-wider w-12">#</th>
                    <th className="px-4 py-3 text-left font-bold text-corporate-navy uppercase tracking-wider">Entregable</th>
                    <th className="px-4 py-3 text-left font-bold text-corporate-navy uppercase tracking-wider">Fase</th>
                    <th className="px-4 py-3 text-left font-bold text-corporate-navy uppercase tracking-wider">Fecha</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    { n: '1', e: 'Propuesta y Carta Compromiso firmada', f: 'Fase 0', d: '24/06/2026' },
                    { n: '2', e: 'CEAC y determinación de nivel de confianza', f: 'Fase I', d: '02/07/2026' },
                    { n: '3', e: 'Relevamiento documentado de BCP/DRP con deficiencias', f: 'Fase I', d: '02/07/2026' },
                    { n: '4', e: 'Evaluación del BIA (procesos, MTPD, RTO, RPO, impacto)', f: 'Fase I', d: '02/07/2026' },
                    { n: '5', e: 'Evaluación de los 3 escenarios de contingencia', f: 'Fase II', d: '09/07/2026' },
                    { n: '6', e: 'Plan y Programa de Auditoría detallado por OC', f: 'Fase II', d: '09/07/2026' },
                    { n: '7', e: 'Compendio de Papeles de Trabajo (mínimo 10 PT y PT-OBS)', f: 'Fase II', d: '23/07/2026' },
                    { n: '8', e: 'Detalle de 5 a 8 observaciones bajo NCCCE', f: 'Fase III', d: '23/07/2026' },
                    { n: '9', e: 'Documentación de 3 a 5 controles adecuados', f: 'Fase III', d: '23/07/2026' },
                    { n: '10', e: 'Parte A — Resumen Ejecutivo (Alta Dirección)', f: 'Fase III', d: '28/07/2026' },
                    { n: '11', e: 'Parte B — Informe Detallado (TI y CISO)', f: 'Fase III', d: '28/07/2026' },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-2 whitespace-nowrap text-gray-500 font-medium">{row.n}</td>
                      <td className="px-4 py-2 text-gray-900">{row.e}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-gray-500">{row.f}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-gray-500 font-mono text-xs">{row.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Acordeon>
        </div>

      </div>
    </div>
  );
};

export default AlcanceYMetodologia;
