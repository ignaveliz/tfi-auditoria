import { CheckSquare, AlertOctagon, Calendar, Flag } from 'lucide-react';
import Acordeon from '../Acordeon';

const DetalleCierre = () => {
  return (
    <>
      {/* B.9 Controles adecuados */}
      <section id="b9-adecuados" className="scroll-mt-24 mb-12 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <CheckSquare className="h-8 w-8 text-corporate-blue" />
          <h2 className="text-2xl font-bold text-corporate-navy">B.9 Controles evaluados como adecuados</h2>
        </div>
        
        <p className="text-gray-700 mb-8">
          La documentación de los controles que operan correctamente no constituye una cortesía hacia el auditado. Acredita que la auditoría evaluó áreas en las que no encontró deficiencias, permite a la entidad exhibir evidencia de cumplimiento ante una inspección y evita que una reorganización posterior elimine sin advertirlo un control efectivo.
        </p>

        <div className="space-y-4">
          <Acordeon title="CA-01 · Almacenamiento de copias fuera del sitio principal" defaultOpen={false}>
            <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-700">
              <span className="font-bold text-gray-600 block mb-1">Evidencia:</span>
              Se acredita un sitio alternativo en modalidad warm site, ubicado a 40 kilómetros del centro primario, con replicación asincrónica y cifrado AES-256 en reposo. Requisito normativo satisfecho.
            </div>
          </Acordeon>
          
          <Acordeon title="CA-02 · Equivalencia de autenticación entre producción y entorno de contingencia" defaultOpen={false}>
            <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-700">
              <span className="font-bold text-gray-600 block mb-1">Evidencia:</span>
              Los perfiles de Administrador del Core y Operador Batch operan con MFA y token físico tanto en producción como en contingencia. No hay degradación de los controles de acceso evaluados.
            </div>
          </Acordeon>
          
          <Acordeon title="CA-03 · Segregación de funciones formalizada e implementada técnicamente" defaultOpen={false}>
            <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-700">
              <span className="font-bold text-gray-600 block mb-1">Evidencia:</span>
              Formalizada documentalmente e implementada técnicamente en Tesorería mediante esquema maker-checker de doble intervención.
            </div>
          </Acordeon>

          <Acordeon title="CA-04 · Revocación de accesos ante desvinculación de personal" defaultOpen={false}>
            <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-700">
              <span className="font-bold text-gray-600 block mb-1">Evidencia:</span>
              La revocación opera de manera automatizada: la baja en el sistema de Recursos Humanos dispara la desactivación de credenciales sin intervención manual.
            </div>
          </Acordeon>

          <Acordeon title="CA-05 · Designación formal del CISO con línea de reporte independiente" defaultOpen={false}>
            <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-700">
              <span className="font-bold text-gray-600 block mb-1">Evidencia:</span>
              El responsable de seguridad cuenta con designación, funciones documentadas y línea de reporte directa e independiente de Operaciones y Tecnología.
            </div>
          </Acordeon>
        </div>
      </section>

      {/* B.10 Plan de acción */}
      <section id="b10-plan" className="scroll-mt-24 mb-12 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="h-8 w-8 text-corporate-blue" />
          <h2 className="text-2xl font-bold text-corporate-navy">B.10 Plan de acción</h2>
        </div>
        
        <p className="text-gray-700 mb-6">
          El plan de acción que sigue constituye una propuesta del equipo auditor. Su adopción, la designación definitiva de responsables y la fijación de plazos corresponden a la Dirección de la entidad, que deberá formalizarlo dentro de los quince días corridos de recibido este informe.
        </p>

        <h3 className="text-lg font-bold text-corporate-navy mb-3">Criterio de priorización aplicado</h3>
        <ul className="list-disc pl-5 mb-8 text-gray-700 space-y-2">
          <li><strong>Prioridad 1:</strong> Condiciones que impiden verificar un objetivo y son constatables por el regulador.</li>
          <li><strong>Prioridad 2:</strong> Acciones de ejecución técnica (pruebas, procedimientos) que sólo pueden acreditarse ejecutadas.</li>
          <li><strong>Prioridad 3:</strong> Regularización documental de mayor alcance.</li>
        </ul>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border text-sm text-center">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-3 py-2 font-bold text-left">Prioridad</th>
                <th className="px-3 py-2 font-bold text-left">Acción requerida</th>
                <th className="px-3 py-2 font-bold">Horizonte</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-3 py-2 font-bold text-red-600 text-left whitespace-nowrap">Prioridad 1</td>
                <td className="px-3 py-2 text-left text-gray-700">Aprobar RTO/RPO de P2 y el DRP. Aislar el repositorio de resguardo de la red.</td>
                <td className="px-3 py-2 text-gray-900 font-medium whitespace-nowrap">30 a 60 días</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold text-orange-600 text-left whitespace-nowrap">Prioridad 2</td>
                <td className="px-3 py-2 text-left text-gray-700">Prueba de restauración completa. Ejercicio acotado (E1/E2). Gestión de accesos en contingencia. Tablero mensual.</td>
                <td className="px-3 py-2 text-gray-900 font-medium whitespace-nowrap">60 a 90 días</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold text-yellow-600 text-left whitespace-nowrap">Prioridad 3</td>
                <td className="px-3 py-2 text-left text-gray-700">Simulacro integral anual. Ampliar DRP para P4 y P5. Revisión del BCP y programa de pruebas.</td>
                <td className="px-3 py-2 text-gray-900 font-medium whitespace-nowrap">90 a 180 días</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* B.11 Limitaciones */}
      <section id="b11-limitaciones" className="scroll-mt-24 mb-12 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <AlertOctagon className="h-8 w-8 text-corporate-blue" />
          <h2 className="text-2xl font-bold text-corporate-navy">B.11 Limitaciones al alcance</h2>
        </div>
        
        <p className="text-gray-700 mb-4">
          Se deja constancia de las condiciones sobre las cuales no fue posible concluir por no haberse obtenido evidencia suficiente. Su tratamiento como limitación, y no como observación, responde al principio de que la auditoría no puede afirmar la existencia de una deficiencia cuando lo único acreditado es la ausencia de información.
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li><strong>D-15 (CEAC 25):</strong> Sin evidencia de seguimiento de hallazgos de auditorías previas.</li>
          <li><strong>D-16 (CEAC 30):</strong> Sin medición de efectividad del programa de concientización.</li>
          <li><strong>D-19 (PT-OC2-02):</strong> El sitio alternativo no acredita prueba de aislamiento frente a software malicioso.</li>
          <li><strong>IAM en E1:</strong> La exclusión del IAM de las pruebas por falta de diagrama de arquitectura (constatado en OBS-03).</li>
        </ul>
      </section>

      {/* B.12 Cierre */}
      <section id="b12-cierre" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Flag className="h-8 w-8 text-corporate-blue" />
          <h2 className="text-2xl font-bold text-corporate-navy">B.12 Seguimiento y cierre del encargo</h2>
        </div>
        
        <div className="prose max-w-none text-gray-700 mb-8">
          <p>
            El presente informe fue emitido conforme a las normas profesionales aplicables y previa revisión del Comité Técnico de Calidad de Vanguard IT Audit Group S.R.L. Los papeles de trabajo que lo sustentan se conservan cifrados en el legajo del encargo por un plazo de cinco años, con acceso restringido al equipo asignado y al Comité Técnico de Calidad, y serán puestos a disposición del Banco Central de la República Argentina cuando así lo requiera en el marco de sus facultades.
          </p>
        </div>

        <div className="bg-corporate-gray border border-gray-200 rounded-lg p-6">
          <p className="font-bold text-corporate-navy mb-1">Referencia y Emisión</p>
          <p className="text-gray-700 mb-0">VG-F6-2026-014 · Versión 1.0 · San Miguel de Tucumán, 28 de julio de 2026.</p>
        </div>
      </section>
    </>
  );
};

export default DetalleCierre;
