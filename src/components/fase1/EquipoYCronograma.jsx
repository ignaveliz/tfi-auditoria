import { Users, Calendar, Calculator } from 'lucide-react';

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

        <div className="grid md:grid-cols-2 gap-8">
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
