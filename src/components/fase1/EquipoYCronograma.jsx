import { Users, Calendar, Calculator } from 'lucide-react';
import Acordeon from '../Acordeon';

const EquipoYCronograma = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Users className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">5. Equipo, Cronograma y Honorarios</h2>
      </div>

      <div className="prose max-w-none text-gray-700">
        
        <h3 className="text-xl font-bold text-corporate-navy mb-4 border-b pb-2">Equipo Asignado</h3>
        <p className="mb-4 text-sm">
          El encargo será ejecutado por un equipo de ocho profesionales. Una mitad del esfuerzo se concentra en revisión documental y gobierno, y la otra en pruebas técnicas sobre la infraestructura y resguardos.
        </p>
        
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-3 py-2 text-left font-bold">Integrante</th>
                <th className="px-3 py-2 text-left font-bold">Rol en el Encargo</th>
                <th className="px-3 py-2 text-center font-bold">Horas</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-3 py-2 font-medium">Mariana Saavedra</td>
                <td className="px-3 py-2 text-gray-600">Líder de Proyecto</td>
                <td className="px-3 py-2 text-center">40 h</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Luciano Agustín Donnet</td>
                <td className="px-3 py-2 text-gray-600">Auditor Senior</td>
                <td className="px-3 py-2 text-center">60 h</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Belén Iara Román</td>
                <td className="px-3 py-2 text-gray-600">Auditora (OC-1)</td>
                <td className="px-3 py-2 text-center">80 h</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Celina Abigail Zato Sosa</td>
                <td className="px-3 py-2 text-gray-600">Auditora (OC-1 / OC-2)</td>
                <td className="px-3 py-2 text-center">80 h</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Ignacio Martín Veliz</td>
                <td className="px-3 py-2 text-gray-600">Auditor (OC-3)</td>
                <td className="px-3 py-2 text-center">80 h</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">César Tomás Delgado</td>
                <td className="px-3 py-2 text-gray-600">Técnico Especialista</td>
                <td className="px-3 py-2 text-center">60 h</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Leopoldo Gabriel Samaniego</td>
                <td className="px-3 py-2 text-gray-600">Técnico (Logs)</td>
                <td className="px-3 py-2 text-center">60 h</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Leandro Agustín Villanueva</td>
                <td className="px-3 py-2 text-gray-600">Técnico (Configuraciones)</td>
                <td className="px-3 py-2 text-center">60 h</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Acordeon title="Responsabilidades Detalladas por Rol">
          <div className="space-y-4">
            <div>
              <h5 className="font-bold text-corporate-blue">Líder de Proyecto – Mariana Saavedra</h5>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Asumir responsabilidad por informes definitivos.</li>
                <li>Planificar encargo y controlar hitos.</li>
                <li>Canal oficial de comunicación con Alta Dirección.</li>
                <li>Conducir presentación ejecutiva de resultados.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-corporate-blue">Auditor Senior – Luciano Agustín Donnet</h5>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Diseñar programas de auditoría.</li>
                <li>Validar PTs y PT-OBS antes de incorporarlos al legajo.</li>
                <li>Garantizar trazabilidad entre observación y criterio normativo (BCRA/ISO).</li>
                <li>Redactar observaciones NCCCE y aplicar CEAC.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-corporate-blue">Auditores – Belén Iara Román, Celina Abigail Zato Sosa, Ignacio Martín Veliz</h5>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Ejecutar pruebas de cumplimiento y sustantivas.</li>
                <li>Conducir entrevistas, recolectar y referenciar evidencia documental/digital.</li>
                <li>Analizar procesos críticos frente al BIA.</li>
                <li>Confeccionar papeles de trabajo base y reportar desvíos.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-corporate-blue">Equipo Técnico – César Tomás Delgado, Leopoldo Gabriel Samaniego, Leandro Agustín Villanueva</h5>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Revisión técnica de arquitectura (sitio alternativo, nube, replicación).</li>
                <li>Analizar configuraciones de seguridad lógica y repositorios IAM.</li>
                <li>Extraer e indexar pistas de auditoría (logs) de Core y batch.</li>
                <li>Verificar registros break-glass y elaborar diagramas técnicos.</li>
              </ul>
            </div>
          </div>
        </Acordeon>

        <Acordeon title="Matriz de Asignación (RACI)">
          <div className="overflow-x-auto mt-2">
            <table className="min-w-full divide-y divide-gray-200 text-sm border text-center">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-2 py-2 text-left font-bold text-corporate-navy">Actividad</th>
                  <th className="px-2 py-2 font-bold text-corporate-navy">Líder</th>
                  <th className="px-2 py-2 font-bold text-corporate-navy">Senior</th>
                  <th className="px-2 py-2 font-bold text-corporate-navy">Auditores</th>
                  <th className="px-2 py-2 font-bold text-corporate-navy">Técnicos</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="text-left px-2 py-1">Planificación y CEAC</td><td>A</td><td>R</td><td>C</td><td>I</td></tr>
                <tr><td className="text-left px-2 py-1">OC-1 (BCP/DRP/BIA)</td><td>A</td><td>R</td><td>R</td><td>C</td></tr>
                <tr><td className="text-left px-2 py-1">OC-2 (Resguardos)</td><td>A</td><td>C</td><td>R</td><td>R</td></tr>
                <tr><td className="text-left px-2 py-1">OC-3 (Accesos/IAM)</td><td>A</td><td>R</td><td>C</td><td>R</td></tr>
                <tr><td className="text-left px-2 py-1">Papeles de Trabajo (PT)</td><td>I</td><td>A</td><td>R</td><td>R</td></tr>
                <tr><td className="text-left px-2 py-1">Redacción NCCCE</td><td>A</td><td>R</td><td>C</td><td>C</td></tr>
                <tr><td className="text-left px-2 py-1">Reunión Validación Técnica</td><td>C</td><td>A/R</td><td>C</td><td>C</td></tr>
                <tr><td className="text-left px-2 py-1">Emisión y Firma Final</td><td>A/R</td><td>C</td><td>I</td><td>I</td></tr>
                <tr><td className="text-left px-2 py-1">Presentación Ejecutiva</td><td>A/R</td><td>C</td><td>I</td><td>I</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">R: Responsable de ejecutar, A: Rinde cuentas (Accountable), C: Consultado, I: Informado.</p>
        </Acordeon>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-xl font-bold text-corporate-navy mb-4 border-b pb-2 flex items-center gap-2">
              <Calendar className="h-5 w-5" /> Cronograma (5 semanas)
            </h3>
            <ul className="space-y-3 text-sm">
              <li><strong className="text-corporate-blue">25/06 - Inicio:</strong> Kick-off y requerimientos.</li>
              <li><strong className="text-corporate-blue">02/07 - Hito 1:</strong> Cierre Fase 1 (CEAC y Nivel de Confianza).</li>
              <li><strong className="text-corporate-blue">22/07 - Hito 2:</strong> Reunión de Validación Técnica.</li>
              <li><strong className="text-corporate-blue">28/07 - Hito 3:</strong> Entrega de informes definitivos.</li>
              <li><strong className="text-corporate-blue">30/07 - Cierre:</strong> Presentación Ejecutiva.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-corporate-navy mb-4 border-b pb-2 flex items-center gap-2">
              <Calculator className="h-5 w-5" /> Honorarios (Estimados)
            </h3>
            <div className="bg-corporate-gray p-4 rounded-md border border-gray-200">
              <div className="flex justify-between mb-2 text-sm">
                <span>Total Horas Estimadas:</span>
                <strong>520 hs</strong>
              </div>
              <div className="flex justify-between text-lg font-bold text-corporate-navy mt-4 border-t pt-2 border-gray-300">
                <span>Total Presupuestado:</span>
                <span>$ 45.838.717,20</span>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-right">* Valores en ARS, sin incluir IVA.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EquipoYCronograma;
