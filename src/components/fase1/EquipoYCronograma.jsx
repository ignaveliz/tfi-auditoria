import { Users, Calendar, Calculator, User } from 'lucide-react';
import Acordeon from '../Acordeon';

const teamMembers = [
  { nombre: "Mariana Saavedra", rol: "Líder de Proyecto", foto: "/integrantes/Mariana Saavedra.jpeg" },
  { nombre: "Luciano Agustín Donnet", rol: "Auditor Senior", foto: "/integrantes/Luciano Agustín Donnet.jpeg" },
  { nombre: "Belén Iara Román", rol: "Auditora (OC-1)", foto: "/integrantes/Belén Iara Román.jpeg" },
  { nombre: "Celina Abigail Zato Sosa", rol: "Auditora (OC-1 / OC-2)", foto: "/integrantes/Celina Abigail Zato Sosa.jpeg" },
  { nombre: "Ignacio Martín Veliz", rol: "Auditor (OC-3)", foto: "/integrantes/Ignacio Martín Veliz.jpeg" },
  { nombre: "César Tomás Delgado", rol: "Técnico Especialista", foto: "/integrantes/César Tomás Delgado.jpeg" },
  { nombre: "Leopoldo Gabriel Samaniego", rol: "Técnico (Logs)", foto: "/integrantes/Leopoldo Gabriel Samaniego.jpeg" },
  { nombre: "Nadia Enoa Rizo Avalos", rol: "Técnico (Configuraciones)", foto: "/integrantes/Nadia Enoa Rizo Avalos.jpeg" }
];

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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-3 rounded-full overflow-hidden border-2 border-corporate-blue shadow-sm bg-gray-100 flex items-center justify-center">
                {member.foto ? (
                  <img 
                    src={member.foto} 
                    alt={member.nombre} 
                    className={`w-full h-full object-cover ${(member.nombre.includes('Mariana') || member.nombre.includes('Iara')) ? 'scale-110' : ''}`} 
                  />
                ) : (
                  <User className="w-12 h-12 text-gray-400" />
                )}
              </div>
              <h4 className="font-bold text-corporate-navy text-sm">{member.nombre}</h4>
              <p className="text-xs text-gray-500">{member.rol}</p>
            </div>
          ))}
        </div>

        <Acordeon title="Detalle de Honorarios y Focos" defaultOpen={true}>
          <div className="overflow-x-auto my-4">
          <table className="min-w-full divide-y divide-gray-200 border text-sm whitespace-nowrap">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-3 py-2 text-left font-bold">Integrante</th>
                <th className="px-3 py-2 text-left font-bold">Rol en el Encargo</th>
                <th className="px-3 py-2 text-left font-bold">Foco Principal</th>
                <th className="px-3 py-2 text-center font-bold">Horas</th>
                <th className="px-3 py-2 text-right font-bold">Tarifa/h (ARS)</th>
                <th className="px-3 py-2 text-right font-bold">Subtotal (ARS)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-3 py-2 font-medium">Mariana Saavedra</td>
                <td className="px-3 py-2 text-gray-600">Líder de Proyecto</td>
                <td className="px-3 py-2 text-gray-600">Conducción del encargo, relación institucional, emisión de informes</td>
                <td className="px-3 py-2 text-center">40 h</td>
                <td className="px-3 py-2 text-right text-gray-600">$123.142,98</td>
                <td className="px-3 py-2 text-right text-gray-600">$4.925.719,20</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Luciano Agustín Donnet</td>
                <td className="px-3 py-2 text-gray-600">Auditor Senior</td>
                <td className="px-3 py-2 text-gray-600">Supervisión técnica, CEAC, alineación regulatoria, redacción NCCCE</td>
                <td className="px-3 py-2 text-center">60 h</td>
                <td className="px-3 py-2 text-right text-gray-600">$95.337,50</td>
                <td className="px-3 py-2 text-right text-gray-600">$5.720.250,00</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Belén Iara Román</td>
                <td className="px-3 py-2 text-gray-600">Auditora (OC-1)</td>
                <td className="px-3 py-2 text-gray-600">OC-1: Gobierno, BCP/DRP y consistencia del BIA</td>
                <td className="px-3 py-2 text-center">80 h</td>
                <td className="px-3 py-2 text-right text-gray-600">$74.337,50</td>
                <td className="px-3 py-2 text-right text-gray-600">$5.947.000,00</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Celina Abigail Zato Sosa</td>
                <td className="px-3 py-2 text-gray-600">Auditora (OC-1 / OC-2)</td>
                <td className="px-3 py-2 text-gray-600">OC-1/OC-2: Políticas de resguardo y evidencia</td>
                <td className="px-3 py-2 text-center">80 h</td>
                <td className="px-3 py-2 text-right text-gray-600">$74.337,50</td>
                <td className="px-3 py-2 text-right text-gray-600">$5.947.000,00</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Ignacio Martín Veliz</td>
                <td className="px-3 py-2 text-gray-600">Auditor (OC-3)</td>
                <td className="px-3 py-2 text-gray-600">OC-3: Accesos, break-glass y contingencia</td>
                <td className="px-3 py-2 text-center">80 h</td>
                <td className="px-3 py-2 text-right text-gray-600">$74.337,50</td>
                <td className="px-3 py-2 text-right text-gray-600">$5.947.000,00</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">César Tomás Delgado</td>
                <td className="px-3 py-2 text-gray-600">Técnico Especialista</td>
                <td className="px-3 py-2 text-gray-600">Infraestructura, sitio alternativo, IAM, cifrado</td>
                <td className="px-3 py-2 text-center">60 h</td>
                <td className="px-3 py-2 text-right text-gray-600">$96.398,60</td>
                <td className="px-3 py-2 text-right text-gray-600">$5.783.916,00</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Leopoldo Gabriel Samaniego</td>
                <td className="px-3 py-2 text-gray-600">Técnico (Logs)</td>
                <td className="px-3 py-2 text-gray-600">Extracción y análisis de logs de resguardo y batch</td>
                <td className="px-3 py-2 text-center">60 h</td>
                <td className="px-3 py-2 text-right text-gray-600">$96.398,60</td>
                <td className="px-3 py-2 text-right text-gray-600">$5.783.916,00</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Nadia Enoa Rizo Avalos</td>
                <td className="px-3 py-2 text-gray-600">Técnico (Configuraciones)</td>
                <td className="px-3 py-2 text-gray-600">Configuraciones DRP y pistas de auditoría</td>
                <td className="px-3 py-2 text-center">60 h</td>
                <td className="px-3 py-2 text-right text-gray-600">$96.398,60</td>
                <td className="px-3 py-2 text-right text-gray-600">$5.783.916,00</td>
              </tr>
            </tbody>
            <tfoot className="bg-corporate-gray font-bold text-corporate-navy">
              <tr>
                <td className="px-3 py-2">TOTAL: 8 Profesionales</td>
                <td className="px-3 py-2 text-center">--</td>
                <td className="px-3 py-2 text-center">--</td>
                <td className="px-3 py-2 text-center">520 h</td>
                <td className="px-3 py-2 text-center">--</td>
                <td className="px-3 py-2 text-right">$45.838.717,20</td>
              </tr>
            </tfoot>
          </table>
        </div>
        </Acordeon>

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
              <h5 className="font-bold text-corporate-blue">Equipo Técnico – César Tomás Delgado, Leopoldo Gabriel Samaniego, Nadia Enoa Rizo Avalos</h5>
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
              <Calendar className="h-5 w-5" /> Cronograma Detallado
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <strong className="text-corporate-blue block">Fase I (Sem. 1: 25/06 al 02/07):</strong>
                Apertura, relevamiento documental, entendimiento BIA, CEAC y nivel de confianza.<br/>
                <span className="text-gray-500 italic">Entregables: 2, 3, 4</span>
              </li>
              <li>
                <strong className="text-corporate-blue block">Fase II (Sem. 2-3: 03/07 al 16/07):</strong>
                Programas de auditoría, trabajo de campo (logs, DRP, IAM), 3 escenarios, PTs.<br/>
                <span className="text-gray-500 italic">Entregables: 5, 6, 7</span>
              </li>
              <li>
                <strong className="text-corporate-blue block">Fase III - Conclusión (Sem. 4: 17/07 al 23/07):</strong>
                Procesamiento de evidencia, redacción NCCCE, controles adecuados, reunión de validación técnica.<br/>
                <span className="text-gray-500 italic">Entregables: 8, 9</span>
              </li>
              <li>
                <strong className="text-corporate-blue block">Fase III - Cierre (Sem. 5: 24/07 al 30/07):</strong>
                Comentarios de la entidad, revisión Comité de Calidad, emisión definitiva, presentación ejecutiva.<br/>
                <span className="text-gray-500 italic">Entregables: 10, 11</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-corporate-navy mb-4 border-b pb-2 flex items-center gap-2">
              <Calculator className="h-5 w-5" /> Honorarios (Estimados)
            </h3>
            <div className="bg-corporate-gray p-4 rounded-md border border-gray-200 mb-6">
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

        <div className="mt-8 space-y-4">
          <Acordeon title="Hitos Principales del Proyecto">
            <ul className="space-y-3 text-sm">
              <li><strong className="text-corporate-navy">H1 (25/06/2026):</strong> Kick-off y entrega de Solicitud de Información Inicial (Anexo A1-I).</li>
              <li><strong className="text-corporate-navy">H2 (02/07/2026):</strong> Cierre de Fase I y comunicación del nivel de confianza determinado.</li>
              <li><strong className="text-corporate-navy">H3 (22/07/2026):</strong> Reunión de validación técnica de hallazgos y apertura de plazo de descargo.</li>
              <li><strong className="text-corporate-navy">H4 (28/07/2026):</strong> Entrega formal de informes definitivos (Parte A y Parte B).</li>
              <li><strong className="text-corporate-navy">H5 (30/07/2026):</strong> Presentación ejecutiva ante Directorio y Gerencia General (25 min exposición + 15 min intercambio).</li>
            </ul>
          </Acordeon>

          <Acordeon title="Dependencias Críticas del Cronograma">
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li>Entrega de documentación solicitada (Anexo A1-I) dentro de los 5 días hábiles posteriores al kick-off.</li>
              <li>Habilitación de accesos de solo lectura a sistemas antes del inicio de Semana 2.</li>
              <li>Disponibilidad de referentes técnicos y funcionales de la entidad para entrevistas programadas.</li>
            </ul>
          </Acordeon>
        </div>

      </div>
    </div>
  );
};

export default EquipoYCronograma;
