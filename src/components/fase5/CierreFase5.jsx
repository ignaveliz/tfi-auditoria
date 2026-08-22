import { BarChart, AlertOctagon, PenTool } from 'lucide-react';

const CierreFase5 = () => {
  return (
    <div>
      {/* 7. Resumen de riesgo y complejidad */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <BarChart className="h-8 w-8 text-corporate-blue" />
          <h2 className="text-2xl font-bold text-corporate-navy">7. Resumen de riesgo y complejidad</h2>
        </div>
        
        <div className="prose max-w-none text-gray-700 mb-6">
          <p>
            La tabla siguiente constituye el insumo directo de los gráficos de distribución del resumen ejecutivo y de la secuencia de tratamiento del informe detallado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-sm font-bold text-corporate-navy mb-2 border-b pb-1">Distribución por Nivel de Riesgo</h4>
            <table className="min-w-full divide-y divide-gray-200 border text-sm text-center">
              <thead className="bg-corporate-gray text-corporate-navy">
                <tr>
                  <th className="px-3 py-2 font-bold">Alto</th>
                  <th className="px-3 py-2 font-bold">Medio</th>
                  <th className="px-3 py-2 font-bold">Bajo</th>
                  <th className="px-3 py-2 font-bold bg-gray-200">Total</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-3 py-2 font-bold text-red-600">4</td>
                  <td className="px-3 py-2 font-bold text-amber-600">3</td>
                  <td className="px-3 py-2 font-bold text-yellow-600">0</td>
                  <td className="px-3 py-2 font-bold bg-gray-50">7</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-corporate-navy mb-2 border-b pb-1">Distribución por Complejidad</h4>
            <table className="min-w-full divide-y divide-gray-200 border text-sm text-center">
              <thead className="bg-corporate-gray text-corporate-navy">
                <tr>
                  <th className="px-3 py-2 font-bold">Trivial</th>
                  <th className="px-3 py-2 font-bold">Moderada</th>
                  <th className="px-3 py-2 font-bold">Compleja</th>
                  <th className="px-3 py-2 font-bold bg-gray-200">Total</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-3 py-2 font-bold text-green-700">3</td>
                  <td className="px-3 py-2 font-bold text-amber-600">4</td>
                  <td className="px-3 py-2 font-bold text-red-600">0</td>
                  <td className="px-3 py-2 font-bold bg-gray-50">7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-md">
          <h4 className="text-sm font-bold text-blue-800 mb-1">La lectura que corresponde llevar a la instancia de presentación</h4>
          <p className="text-sm text-blue-900 mb-0">
            La totalidad de las observaciones se resuelve con complejidad Trivial o Moderada: ninguna requiere proyecto formal ni inversión en infraestructura. Se trata de decisiones de gobierno, aprobación formal de documentos y parámetros que ya existen, definición de procedimientos y ejecución de pruebas. La conclusión es positiva: la entidad tiene la mayor parte del trabajo hecho, solo necesita ordenarlo y formalizarlo.
          </p>
        </div>
      </div>

      {/* 8. Limitaciones al alcance */}
      <div className="mt-6 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <AlertOctagon className="h-8 w-8 text-corporate-blue" />
          <h2 className="text-2xl font-bold text-corporate-navy">8. Limitaciones al alcance</h2>
        </div>
        
        <div className="prose max-w-none text-gray-700">
          <p className="mb-4">
            Se deja constancia de las condiciones sobre las cuales no fue posible concluir por no haberse obtenido evidencia suficiente. Su tratamiento como limitación, y no como observación, responde al principio de que la auditoría no puede afirmar la existencia de una deficiencia cuando lo único acreditado es la ausencia de información.
          </p>
          <ul className="list-disc pl-5">
            <li className="mb-2"><strong>D-15 (CEAC 25):</strong> Sin evidencia de seguimiento de hallazgos de auditorías previas.</li>
            <li className="mb-2"><strong>D-16 (CEAC 30):</strong> Sin medición de efectividad del programa de concientización.</li>
            <li><strong>D-19 (PT-OC2-02):</strong> El sitio alternativo no acredita prueba de aislamiento frente a software malicioso.</li>
          </ul>
        </div>
      </div>

      {/* 9. Conclusión de la fase */}
      <div className="mt-6">
        <div className="flex items-center gap-3 mb-6">
          <PenTool className="h-8 w-8 text-corporate-blue" />
          <h2 className="text-2xl font-bold text-corporate-navy">9. Conclusión de la fase</h2>
        </div>
        
        <div className="prose max-w-none text-gray-700 mb-8">
          <p className="mb-4">
            De las 20 deficiencias detectadas durante el trabajo de campo se elevan siete observaciones, dentro del rango de 5 a 8 comprometido en la propuesta, y se documentan cinco controles adecuados, dentro del rango de 3 a 5 comprometido. Los trece descartes quedan fundamentados individualmente, de modo que la decisión de no elevar resulte tan defendible como la de elevar.
          </p>
          <p className="mb-4">
            Las siete observaciones comparten un patrón que conviene explicitar: ninguna denuncia la ausencia de un control que la entidad nunca concibió. En todos los casos existe un instrumento —un plan, una política, un análisis de impacto, un mecanismo de alerta— que fue diseñado y que, por falta de mantenimiento, de aprobación formal o de verificación, no llega a operar como control efectivo. Esa lectura es la que da coherencia al conjunto y la que orienta las recomendaciones: no proponen construir de nuevo, sino completar, aprobar y probar lo que ya está construido.
          </p>
          <p>
            Las fichas quedan a disposición del informe de auditoría para la incorporación de la respuesta del área auditada, la definición de los planes de acción con responsable y plazo, y la elaboración de los gráficos de distribución de riesgo y complejidad del resumen ejecutivo.
          </p>
        </div>

        {/* Firmas */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500 font-bold uppercase mb-1">Elaborado por</p>
              <p className="font-medium text-gray-800">El equipo de auditoría, con la asignación consignada en cada papel de origen.</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-bold uppercase mb-1">Revisado por</p>
              <p className="font-medium text-gray-800">Luciano Agustín Donnet — Auditor Senior.</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-bold uppercase mb-1">Conformidad</p>
              <p className="font-medium text-gray-800">Mariana Saavedra, CISA — Líder de Proyecto.</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-bold uppercase mb-1">Referencia y Emisión</p>
              <p className="font-medium text-gray-800">VG-F5-2026-014 · Versión 1.0 · 23 de julio de 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CierreFase5;
