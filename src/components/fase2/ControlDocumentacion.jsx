import { FolderSearch, AlertTriangle } from 'lucide-react';
import Acordeon from '../Acordeon';

const ControlDocumentacion = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <FolderSearch className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">1. Solicitud y control de la documentación</h2>
      </div>

      <div className="prose max-w-none text-gray-700">
        <p className="mb-6">
          La Solicitud de Información Inicial se entregó en la reunión de apertura, con plazo de cinco días hábiles. El control de completitud que se detalla a continuación es el que determina la suficiencia de evidencia disponible para aplicar el cuestionario del ambiente de control y para diseñar las pruebas.
        </p>

        <Acordeon title="Documentación solicitada">
          <div className="overflow-x-auto mb-2 mt-2">
            <table className="min-w-full divide-y divide-gray-200 border text-sm">
              <thead className="bg-corporate-gray text-corporate-navy">
                <tr>
                  <th className="px-3 py-2 text-left font-bold w-12">Ref.</th>
                  <th className="px-3 py-2 text-left font-bold">Documentación solicitada</th>
                  <th className="px-3 py-2 text-center font-bold w-24">OC</th>
                  <th className="px-3 py-2 text-center font-bold w-48">Estado al 02/07/2026</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-3 py-2 font-medium">E-01</td>
                  <td className="px-3 py-2">BCP vigente, historial de versiones y actas de aprobación</td>
                  <td className="px-3 py-2 text-center">OC-1</td>
                  <td className="px-3 py-2 text-center text-green-600 font-medium">Recibido</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">E-02</td>
                  <td className="px-3 py-2">DRP vigente y estrategia de recuperación por sistema</td>
                  <td className="px-3 py-2 text-center">OC-1</td>
                  <td className="px-3 py-2 text-center text-amber-600 font-medium">Recibido — sin acta de aprobación</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">E-03</td>
                  <td className="px-3 py-2">BIA completo con MTPD, RTO, RPO e impacto por hora</td>
                  <td className="px-3 py-2 text-center">OC-1</td>
                  <td className="px-3 py-2 text-center text-green-600 font-medium">Recibido</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">E-04</td>
                  <td className="px-3 py-2">Actas del Comité de Gobierno de Tecnología y del Directorio</td>
                  <td className="px-3 py-2 text-center">Transversal</td>
                  <td className="px-3 py-2 text-center text-amber-600 font-medium">Recibido parcialmente</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">E-05</td>
                  <td className="px-3 py-2">Informes de simulacros y pruebas de restauración de los últimos 12 meses</td>
                  <td className="px-3 py-2 text-center">OC-1 / OC-2</td>
                  <td className="px-3 py-2 text-center text-red-600 font-bold">No recibido</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">E-06</td>
                  <td className="px-3 py-2">Política de copias de seguridad, configuración y responsables</td>
                  <td className="px-3 py-2 text-center">OC-2</td>
                  <td className="px-3 py-2 text-center text-green-600 font-medium">Recibido</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">E-07</td>
                  <td className="px-3 py-2">Logs de ejecución de copias del Core y de los servidores batch</td>
                  <td className="px-3 py-2 text-center">OC-2</td>
                  <td className="px-3 py-2 text-center text-blue-600 font-medium">Comprometido para la etapa de ejecución</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">E-08</td>
                  <td className="px-3 py-2">Documentación del sitio alternativo, replicación y aislamiento</td>
                  <td className="px-3 py-2 text-center">OC-2</td>
                  <td className="px-3 py-2 text-center text-amber-600 font-medium">Recibido parcialmente</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">E-09</td>
                  <td className="px-3 py-2">Política de gestión de identidades y matrices de perfiles</td>
                  <td className="px-3 py-2 text-center">OC-3</td>
                  <td className="px-3 py-2 text-center text-green-600 font-medium">Recibido</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">E-10</td>
                  <td className="px-3 py-2">Procedimiento y registros de accesos de emergencia (break-glass)</td>
                  <td className="px-3 py-2 text-center">OC-3</td>
                  <td className="px-3 py-2 text-center text-blue-600 font-medium">Comprometido para la etapa de ejecución</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">E-11</td>
                  <td className="px-3 py-2">Inventario de cuentas del entorno de contingencia</td>
                  <td className="px-3 py-2 text-center">OC-3</td>
                  <td className="px-3 py-2 text-center text-blue-600 font-medium">Comprometido para la etapa de ejecución</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">E-12</td>
                  <td className="px-3 py-2">Contratos y SLA de proveedores críticos</td>
                  <td className="px-3 py-2 text-center">Transversal</td>
                  <td className="px-3 py-2 text-center text-amber-600 font-medium">Recibido parcialmente</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">E-13</td>
                  <td className="px-3 py-2">Organigrama, manual de misiones y funciones, designación del CISO</td>
                  <td className="px-3 py-2 text-center">Transversal</td>
                  <td className="px-3 py-2 text-center text-green-600 font-medium">Recibido</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">E-14</td>
                  <td className="px-3 py-2">Legajo de auditorías de TI previas y matriz de seguimiento</td>
                  <td className="px-3 py-2 text-center">Transversal</td>
                  <td className="px-3 py-2 text-center text-red-600 font-bold">No recibido</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">E-15</td>
                  <td className="px-3 py-2">Registro corporativo de riesgos de TI</td>
                  <td className="px-3 py-2 text-center">Transversal</td>
                  <td className="px-3 py-2 text-center text-green-600 font-medium">Recibido</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">E-16</td>
                  <td className="px-3 py-2">Programa de concientización y métricas de efectividad</td>
                  <td className="px-3 py-2 text-center">Transversal</td>
                  <td className="px-3 py-2 text-center text-red-600 font-bold">No recibido</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Acordeon>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-amber-800 m-0 mb-1">Efecto de los faltantes sobre el trabajo</h4>
              <p className="text-amber-900 text-sm m-0">
                Los ítems E-05, E-14 y E-16 no fueron puestos a disposición dentro del plazo. Los dos últimos son la causa directa de las dos preguntas calificadas como <strong>No Verificado</strong> en el cuestionario del ambiente de control. El faltante de E-05 no se trata como limitación al alcance sino como <strong>condición a auditar</strong>: la ausencia de evidencia de pruebas de restauración es, en sí misma, materia de los objetivos de control OC-1 y OC-2. El ítem E-02 fue aportado, pero sin el acta de aprobación que acreditaría su vigencia formal, circunstancia que constituye materia de OC-1. Se reiteró el requerimiento por escrito el 02/07/2026.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ControlDocumentacion;
