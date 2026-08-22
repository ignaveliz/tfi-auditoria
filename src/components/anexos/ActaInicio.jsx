import { FileText, Users, CheckSquare } from 'lucide-react';

const ActaInicio = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <FileText className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">1. Acta de inicio del encargo</h2>
      </div>

      <div className="prose max-w-none text-gray-700">
        <p className="mb-4">
          En la ciudad de San Miguel de Tucumán, a los <strong>25 días del mes de junio de 2026</strong>, siendo las 9:00 horas, en la sede de Financiera Crédito Fácil S.A., se reúnen las personas que se detallan a continuación con el objeto de dar inicio formal a los trabajos de auditoría de controles generales de TI sobre el marco de resiliencia operativa de la entidad.
        </p>

        <h3 className="text-xl font-bold text-corporate-navy mt-6 mb-4 flex items-center gap-2 border-b pb-2">
          <Users className="h-5 w-5" /> 1.1 Asistentes
        </h3>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-4 py-2 text-left font-bold w-1/2">Por la firma auditora</th>
                <th className="px-4 py-2 text-left font-bold w-1/2">Por la entidad auditada</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2">Mariana Saavedra — Líder de Proyecto</td>
                <td className="px-4 py-2">Gerencia de Operaciones y Tecnología</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Luciano Agustín Donnet — Auditor Senior</td>
                <td className="px-4 py-2">Departamento de Seguridad de la Información (CISO)</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Belén Iara Román — Auditora (OC-1)</td>
                <td className="px-4 py-2">C.P. Alberto Dorigatthi — Jefe de la División Liquidación de Créditos</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Celina Abigail Zato Sosa — Auditora (OC-2)</td>
                <td className="px-4 py-2">Cdor. Julián Álvarez — Líder de Continuidad, División Acreditación de Haberes</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Ignacio Martín Veliz — Auditor (OC-3)</td>
                <td className="px-4 py-2">Auditoría Interna de Sistemas</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-corporate-navy mt-6 mb-4 flex items-center gap-2 border-b pb-2">
          <CheckSquare className="h-5 w-5" /> 1.2 Temario tratado
        </h3>
        <ul className="space-y-3 mb-6">
          <li><strong>Ratificación del objeto y del alcance.</strong> Se confirman los tres objetivos de control, los cinco procesos críticos, el período de registros (01/06/2025 – 30/06/2026) y las exclusiones expresas establecidas en la Propuesta de Auditoría.</li>
          <li><strong>Presentación del equipo y de los roles.</strong> Se comunican las responsabilidades de cada integrante y el esquema de supervisión en cascada.</li>
          <li><strong>Entrega de la Solicitud de Información Inicial (Anexo I).</strong> Se entrega el listado de dieciséis requerimientos documentales, con plazo de cinco días hábiles, es decir hasta el <strong>02/07/2026</strong>.</li>
          <li><strong>Habilitación de accesos.</strong> La entidad se compromete a otorgar accesos de <strong>solo lectura</strong> a los sistemas comprendidos en el alcance antes del inicio de la etapa de ejecución.</li>
          <li><strong>Agenda de entrevistas.</strong> Se acuerda el calendario de entrevistas con los propietarios de los cinco procesos y con el CISO.</li>
          <li><strong>Canales de comunicación.</strong> Se designa a la Gerencia de Operaciones y Tecnología como interlocutor institucional único y se establece que toda solicitud y toda respuesta se cursarán por escrito, con acuse de recibo.</li>
          <li><strong>Declaraciones de independencia.</strong> Los ocho integrantes del equipo suscriben su declaración jurada de ausencia de conflictos de interés respecto de la entidad, sus directores, gerentes y proveedores críticos, conforme al apartado 1.6 de la Propuesta de Auditoría.</li>
        </ul>

        <h3 className="text-xl font-bold text-corporate-navy mt-6 mb-4 flex items-center gap-2 border-b pb-2">
          <CheckSquare className="h-5 w-5" /> 1.3 Compromisos asumidos
        </h3>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>La entidad proveerá la documentación del Anexo I completa y en tiempo, y comunicará por escrito toda limitación que impida entregarla.</li>
          <li>La entidad informará al equipo cualquier incidente de continuidad, cambio de arquitectura o requerimiento del regulador que se produzca durante la ejecución.</li>
          <li>La firma tratará toda la información bajo secreto profesional, con custodia controlada de la evidencia, y no operará sobre datos productivos.</li>
          <li>Ambas partes reconocen que la responsabilidad por el diseño y el mantenimiento del marco de continuidad permanece en cabeza de la Dirección de la entidad y no se transfiere por efecto de esta auditoría.</li>
        </ul>
        
        <p className="mt-6 mb-8 italic text-gray-600">
          No siendo para más, se cierra el acto siendo las 10:30 horas, firmando los presentes de conformidad.
        </p>

        <div className="grid grid-cols-2 gap-8 text-sm">
          <div className="border-t border-gray-400 pt-2 text-center">
            <strong>Mariana Saavedra</strong><br/>
            Líder de Proyecto<br/>
            Vanguard IT Audit Group S.R.L.
          </div>
          <div className="border-t border-gray-400 pt-2 text-center">
            <strong>Gerencia de Operaciones y Tecnología</strong><br/>
            Financiera Crédito Fácil S.A.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActaInicio;
