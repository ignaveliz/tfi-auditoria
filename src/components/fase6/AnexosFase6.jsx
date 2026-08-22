import { FileStack, Link2, BookOpen } from 'lucide-react';

const AnexosFase6 = () => {
  return (
    <div className="space-y-12">
      
      {/* Anexo 1 */}
      <section id="anexo1" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Link2 className="h-8 w-8 text-corporate-blue" />
          <h2 className="text-2xl font-bold text-corporate-navy">Anexo I — Matriz de trazabilidad integral</h2>
        </div>
        
        <p className="text-gray-700 mb-6">
          La matriz reproduce la cadena completa que sostiene cada observación del informe, desde el riesgo identificado en la planificación hasta la ficha NCCCE. Las referencias RA-nn corresponden a la matriz de riesgos de auditoría del apartado 7.3 de la Fase 2; PA-nn, a los procedimientos del programa del apartado 9.1; EV-nn, a los elementos de evidencia obtenidos durante la ejecución.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full divide-y divide-gray-200 border text-sm text-center">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-3 py-2 font-bold text-left">Riesgo</th>
                <th className="px-3 py-2 font-bold text-center">Procedimiento</th>
                <th className="px-3 py-2 font-bold text-center">Evidencia</th>
                <th className="px-3 py-2 font-bold text-left">Papel de ejecución</th>
                <th className="px-3 py-2 font-bold text-center">Papel observación</th>
                <th className="px-3 py-2 font-bold text-left">Ficha</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-3 py-2 font-medium text-left">RA-01 (Crítico)</td>
                <td className="px-3 py-2">PA-02</td>
                <td className="px-3 py-2">EV-02 · EV-12</td>
                <td className="px-3 py-2 text-left text-gray-700">PT-OC1-02 · PT-XC-01</td>
                <td className="px-3 py-2 text-gray-700">PT-OBS-02</td>
                <td className="px-3 py-2 text-left font-bold text-corporate-navy">OBS-02</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-left">RA-02 (Crítico)</td>
                <td className="px-3 py-2">PA-02 · PA-06</td>
                <td className="px-3 py-2">EV-02 · EV-12</td>
                <td className="px-3 py-2 text-left text-gray-700">PT-OC1-02 · PT-XC-01</td>
                <td className="px-3 py-2 text-gray-700">PT-OBS-02</td>
                <td className="px-3 py-2 text-left font-bold text-corporate-navy">OBS-02</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-left">RA-03 (Crítico)</td>
                <td className="px-3 py-2 text-gray-500 italic">PA-15 (no ejecutado)</td>
                <td className="px-3 py-2 text-gray-700">EV-12 (parcial)</td>
                <td className="px-3 py-2 text-left text-gray-700">PT-XC-01</td>
                <td className="px-3 py-2 text-gray-700">PT-OBS-03</td>
                <td className="px-3 py-2 text-left font-bold text-corporate-navy">OBS-03 <span className="font-normal text-xs text-gray-500">(cobertura)</span></td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-left">RA-04 (Crítico)</td>
                <td className="px-3 py-2">PA-01</td>
                <td className="px-3 py-2">EV-01</td>
                <td className="px-3 py-2 text-left text-gray-700">PT-OC1-01</td>
                <td className="px-3 py-2 text-gray-700">PT-OBS-01</td>
                <td className="px-3 py-2 text-left font-bold text-corporate-navy">OBS-01</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-left">RA-05 (Alto)</td>
                <td className="px-3 py-2">PA-01 · PA-02</td>
                <td className="px-3 py-2">EV-02 · EV-03 · EV-12</td>
                <td className="px-3 py-2 text-left text-gray-700">PT-XC-01</td>
                <td className="px-3 py-2 text-gray-700">PT-OBS-02 · 03</td>
                <td className="px-3 py-2 text-left font-bold text-corporate-navy">OBS-02 · OBS-03</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-left">RA-06 (Alto)</td>
                <td className="px-3 py-2">PA-04 · 07 · 09</td>
                <td className="px-3 py-2">EV-04 · 05 · 07 · 11</td>
                <td className="px-3 py-2 text-left text-gray-700 text-xs">PT-OC1-04 · PT-OC2-01 · 03 · 04</td>
                <td className="px-3 py-2 text-gray-700">PT-OBS-04,05,06</td>
                <td className="px-3 py-2 text-left font-bold text-corporate-navy">OBS-04 · 05 · 06</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-left">RA-07 (Crítico)</td>
                <td className="px-3 py-2">PA-01 · 03 · 05</td>
                <td className="px-3 py-2">EV-03 · EV-13</td>
                <td className="px-3 py-2 text-left text-gray-700">PT-OC1-03 · 05 · PT-XC-01</td>
                <td className="px-3 py-2 text-gray-700">PT-OBS-03</td>
                <td className="px-3 py-2 text-left font-bold text-corporate-navy">OBS-03</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-left">RA-08 (Alto)</td>
                <td className="px-3 py-2">PA-11 · 12 · 13</td>
                <td className="px-3 py-2">EV-08 · 09 · 10</td>
                <td className="px-3 py-2 text-left text-gray-700">PT-OC3-02 · 03 · 04</td>
                <td className="px-3 py-2 text-gray-700">PT-OBS-07</td>
                <td className="px-3 py-2 text-left font-bold text-corporate-navy">OBS-07</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-left">RA-09 (Alto)</td>
                <td className="px-3 py-2">PA-08 · 10 · 05</td>
                <td className="px-3 py-2">EV-06 · EV-13</td>
                <td className="px-3 py-2 text-left text-gray-700">PT-OC2-02 · PT-OC1-05</td>
                <td className="px-3 py-2 text-gray-700 italic">Refuerza OBS-06</td>
                <td className="px-3 py-2 text-left font-bold text-green-700">CA-01 y OBS-06</td>
              </tr>
              <tr className="bg-gray-50 text-gray-500">
                <td className="px-3 py-2 font-medium text-left">RA-10 (Alto)</td>
                <td className="px-3 py-2">PA-03 (no completado)</td>
                <td className="px-3 py-2">E-12 (parcial)</td>
                <td className="px-3 py-2 text-left">—</td>
                <td className="px-3 py-2">—</td>
                <td className="px-3 py-2 text-left">LIM-04</td>
              </tr>
              <tr className="bg-gray-50 text-gray-500">
                <td className="px-3 py-2 font-medium text-left">RA-11 (Alto)</td>
                <td className="px-3 py-2">PA-04 (no completado)</td>
                <td className="px-3 py-2">E-14 (no recibido)</td>
                <td className="px-3 py-2 text-left">—</td>
                <td className="px-3 py-2">—</td>
                <td className="px-3 py-2 text-left">LIM-01</td>
              </tr>
              <tr className="bg-gray-50 text-gray-500">
                <td className="px-3 py-2 font-medium text-left">RA-12 (Alto)</td>
                <td className="px-3 py-2">PA-03 · 09 (no compl.)</td>
                <td className="px-3 py-2">Acceso no habilitado</td>
                <td className="px-3 py-2 text-left">—</td>
                <td className="px-3 py-2">—</td>
                <td className="px-3 py-2 text-left">LIM-05</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-left">RA-13 (Medio)</td>
                <td className="px-3 py-2">PA-01</td>
                <td className="px-3 py-2">EV-01 · EV-03</td>
                <td className="px-3 py-2 text-left text-gray-700">PT-OC1-01 · 03</td>
                <td className="px-3 py-2 text-gray-700 italic">No elevado</td>
                <td className="px-3 py-2 text-left text-gray-700 text-xs">Informado a Dirección</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-left">RA-14 (Bajo)</td>
                <td className="px-3 py-2">PA-11</td>
                <td className="px-3 py-2">EV-08</td>
                <td className="px-3 py-2 text-left text-gray-700">PT-OC3-01</td>
                <td className="px-3 py-2 text-gray-700 italic">No elevado</td>
                <td className="px-3 py-2 text-left text-gray-700 text-xs">Sugerencia de gestión</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Anexo 2 */}
      <section id="anexo2" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <FileStack className="h-8 w-8 text-corporate-blue" />
          <h2 className="text-2xl font-bold text-corporate-navy">Anexo II — Índice de papeles de trabajo</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border text-sm text-left">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-3 py-2 font-bold">Ref.</th>
                <th className="px-3 py-2 font-bold">Título</th>
                <th className="px-3 py-2 font-bold text-center">OC</th>
                <th className="px-3 py-2 font-bold">Conclusión</th>
                <th className="px-3 py-2 font-bold">Deriva a</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-3 py-2 font-medium">PT-OC1-01</td>
                <td className="px-3 py-2 text-gray-700">Vigencia y aprobación del BCP</td>
                <td className="px-3 py-2 text-center text-gray-500">OC-1</td>
                <td className="px-3 py-2 text-red-600 font-medium">Deficiente</td>
                <td className="px-3 py-2 text-gray-700">PT-OBS-01</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">PT-OC1-02</td>
                <td className="px-3 py-2 text-gray-700">Definición y aprobación formal de MTPD, RTO y RPO</td>
                <td className="px-3 py-2 text-center text-gray-500">OC-1</td>
                <td className="px-3 py-2 text-red-600 font-medium">Deficiente</td>
                <td className="px-3 py-2 text-gray-700">PT-OBS-02</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">PT-OC1-03</td>
                <td className="px-3 py-2 text-gray-700">Aprobación, cobertura y suficiencia técnica del DRP</td>
                <td className="px-3 py-2 text-center text-gray-500">OC-1</td>
                <td className="px-3 py-2 text-red-600 font-medium">Deficiente</td>
                <td className="px-3 py-2 text-gray-700">PT-OBS-03</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">PT-OC1-04</td>
                <td className="px-3 py-2 text-gray-700">Ejercicio integral de continuidad</td>
                <td className="px-3 py-2 text-center text-gray-500">OC-1</td>
                <td className="px-3 py-2 text-red-600 font-medium">Deficiente</td>
                <td className="px-3 py-2 text-gray-700">PT-OBS-04</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">PT-OC1-05</td>
                <td className="px-3 py-2 text-gray-700">Evaluación de los tres escenarios de contingencia</td>
                <td className="px-3 py-2 text-center text-gray-500">OC-1</td>
                <td className="px-3 py-2 text-red-600 font-medium">Deficiente</td>
                <td className="px-3 py-2 text-gray-700 text-xs">PT-OBS-03, 04, 06</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">PT-OC2-02</td>
                <td className="px-3 py-2 text-gray-700">Almacenamiento fuera del sitio principal</td>
                <td className="px-3 py-2 text-center text-gray-500">OC-2</td>
                <td className="px-3 py-2 text-green-700 font-medium">Adecuado c/ alcance lim.</td>
                <td className="px-3 py-2 font-bold text-green-700">CA-01</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">PT-OC2-03</td>
                <td className="px-3 py-2 text-gray-700">Prueba técnica de restauración</td>
                <td className="px-3 py-2 text-center text-gray-500">OC-2</td>
                <td className="px-3 py-2 text-red-600 font-medium">Deficiente</td>
                <td className="px-3 py-2 text-gray-700">PT-OBS-06</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">PT-OC3-01</td>
                <td className="px-3 py-2 text-gray-700">Equivalencia de autenticación (producción vs contingencia)</td>
                <td className="px-3 py-2 text-center text-gray-500">OC-3</td>
                <td className="px-3 py-2 text-green-700 font-medium">Adecuado c/ alcance lim.</td>
                <td className="px-3 py-2 font-bold text-green-700">CA-02</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">PT-OC3-02</td>
                <td className="px-3 py-2 text-gray-700">Gestión de cuentas de acceso de emergencia (break-glass)</td>
                <td className="px-3 py-2 text-center text-gray-500">OC-3</td>
                <td className="px-3 py-2 text-red-600 font-medium">Deficiente</td>
                <td className="px-3 py-2 text-gray-700">PT-OBS-07</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="px-3 py-2 font-bold text-corporate-navy" colSpan="5">Papeles de Observación y Transversales</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">PT-XC-01</td>
                <td className="px-3 py-2 text-gray-700">Consistencia documental BIA – BCP – DRP</td>
                <td className="px-3 py-2 text-center text-gray-500">Transv.</td>
                <td className="px-3 py-2 text-red-600 font-medium">Deficiente</td>
                <td className="px-3 py-2 text-gray-700 text-xs">PT-OBS-02, 03</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">PT-OBS-01</td>
                <td className="px-3 py-2 text-gray-700">BCP fuera del ciclo de revisión exigido</td>
                <td className="px-3 py-2 text-center text-gray-500">OC-1</td>
                <td className="px-3 py-2 text-gray-500 italic">Base de observación</td>
                <td className="px-3 py-2 font-bold text-orange-600">OBS-01</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">PT-OBS-02</td>
                <td className="px-3 py-2 text-gray-700">RPO de P2 sin cuantificar y RTO sin aprobación</td>
                <td className="px-3 py-2 text-center text-gray-500">OC-1</td>
                <td className="px-3 py-2 text-gray-500 italic">Base de observación</td>
                <td className="px-3 py-2 font-bold text-red-600">OBS-02</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">PT-OBS-03</td>
                <td className="px-3 py-2 text-gray-700">DRP sin aprobación, cobertura parcial y tiempos incompatibles</td>
                <td className="px-3 py-2 text-center text-gray-500">OC-1</td>
                <td className="px-3 py-2 text-gray-500 italic">Base de observación</td>
                <td className="px-3 py-2 font-bold text-red-600">OBS-03</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">PT-OBS-04</td>
                <td className="px-3 py-2 text-gray-700">Ejercicio integral de continuidad no ejecutado</td>
                <td className="px-3 py-2 text-center text-gray-500">OC-1</td>
                <td className="px-3 py-2 text-gray-500 italic">Base de observación</td>
                <td className="px-3 py-2 font-bold text-red-600">OBS-04</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">PT-OBS-06</td>
                <td className="px-3 py-2 text-gray-700">Última prueba de restauración antigua y fallida</td>
                <td className="px-3 py-2 text-center text-gray-500">OC-2</td>
                <td className="px-3 py-2 text-gray-500 italic">Base de observación</td>
                <td className="px-3 py-2 font-bold text-red-600">OBS-06</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Anexo 3 */}
      <section id="anexo3" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="h-8 w-8 text-corporate-blue" />
          <h2 className="text-2xl font-bold text-corporate-navy">Anexo III — Reconciliación de parámetros BIA – BCP – DRP</h2>
        </div>
        
        <p className="text-gray-700 mb-6">
          La tabla reproduce el cotejo parámetro por parámetro que sustenta las observaciones OBS-02 y OBS-03. Se realizó sin adoptar arbitrariamente una fuente como prevalente, dado que la entidad no ha definido criterio formal de prevalencia ante discrepancias.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border text-sm text-left">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-3 py-2 font-bold text-center">Proceso</th>
                <th className="px-3 py-2 font-bold">Parámetro</th>
                <th className="px-3 py-2 font-bold">Valor en BIA</th>
                <th className="px-3 py-2 font-bold">Valor en BCP</th>
                <th className="px-3 py-2 font-bold">Capacidad en DRP</th>
                <th className="px-3 py-2 font-bold">Situación</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-3 py-2 text-center font-bold text-corporate-navy" rowSpan="3">P1</td>
                <td className="px-3 py-2 font-medium">MTPD</td>
                <td className="px-3 py-2 text-gray-700">2 h</td>
                <td className="px-3 py-2 text-gray-700">2 h</td>
                <td className="px-3 py-2 text-gray-500">—</td>
                <td className="px-3 py-2 text-green-700 text-xs">Coincide</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">RTO</td>
                <td className="px-3 py-2 text-gray-700">1 h</td>
                <td className="px-3 py-2 text-gray-700">1 h</td>
                <td className="px-3 py-2 text-gray-700 font-medium">PTR-01: 2 a 4 h</td>
                <td className="px-3 py-2 text-red-600 text-xs">Coincide BIA/BCP · Incompatible técnica</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">RPO</td>
                <td className="px-3 py-2 text-gray-700">0 min</td>
                <td className="px-3 py-2 text-gray-700">0 h</td>
                <td className="px-3 py-2 text-gray-700">Replicación asincrónica (4 h)</td>
                <td className="px-3 py-2 text-red-600 text-xs">Coincide BIA/BCP · Incompatible técnica</td>
              </tr>
              <tr className="bg-gray-50 border-t-2">
                <td className="px-3 py-2 text-center font-bold text-corporate-navy" rowSpan="3">P2</td>
                <td className="px-3 py-2 font-medium">MTPD</td>
                <td className="px-3 py-2 text-gray-700">4 h (1 h día pago)</td>
                <td className="px-3 py-2 text-gray-700">8 h</td>
                <td className="px-3 py-2 text-gray-500">—</td>
                <td className="px-3 py-2 text-red-600 text-xs">Discrepa</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-2 font-medium">RTO</td>
                <td className="px-3 py-2 text-gray-700">2 h</td>
                <td className="px-3 py-2 text-gray-700 italic">4 h (no aprobado)</td>
                <td className="px-3 py-2 text-gray-700 font-medium">PTR-02: 3 a 6 h</td>
                <td className="px-3 py-2 text-red-600 text-xs">Discrepa · Incompatible técnica</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-2 font-medium">RPO</td>
                <td className="px-3 py-2 text-gray-700 italic">Último lote validado</td>
                <td className="px-3 py-2 text-gray-700">No definido</td>
                <td className="px-3 py-2 text-gray-700">Copia diaria / inc. 6 h</td>
                <td className="px-3 py-2 text-red-600 text-xs">Discrepa · No cuantificado</td>
              </tr>
              <tr className="border-t-2">
                <td className="px-3 py-2 text-center font-bold text-corporate-navy">IAM</td>
                <td className="px-3 py-2 font-medium">RTO ef.</td>
                <td className="px-3 py-2 text-gray-700">15 min</td>
                <td className="px-3 py-2 text-gray-500">No contemplado</td>
                <td className="px-3 py-2 text-gray-500">No comprendido en DRP</td>
                <td className="px-3 py-2 text-red-600 text-xs">Sin objetivo aprobado ni procedimiento</td>
              </tr>
              <tr className="bg-gray-50 border-t-2">
                <td className="px-3 py-2 text-center font-bold text-corporate-navy">P4</td>
                <td className="px-3 py-2 font-medium">RTO/RPO</td>
                <td className="px-3 py-2 text-gray-700">30 min / 0 min</td>
                <td className="px-3 py-2 text-gray-500">Fuera alcance BCP</td>
                <td className="px-3 py-2 text-gray-500">Fuera alcance DRP</td>
                <td className="px-3 py-2 text-red-600 text-xs">Proceso crítico sin plan documentado</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-2 text-center font-bold text-corporate-navy">P5</td>
                <td className="px-3 py-2 font-medium">RTO/RPO</td>
                <td className="px-3 py-2 text-gray-700">1 h / 15 min</td>
                <td className="px-3 py-2 text-gray-500">Fuera alcance BCP</td>
                <td className="px-3 py-2 text-gray-500">Fuera alcance DRP</td>
                <td className="px-3 py-2 text-red-600 text-xs">Proceso crítico sin plan documentado</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};

export default AnexosFase6;
