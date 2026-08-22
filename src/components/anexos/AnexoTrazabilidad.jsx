const AnexoTrazabilidad = () => {
  return (
    <div className="prose max-w-none text-gray-700 text-sm p-2">
      <p className="mb-4">
        La matriz reproduce la cadena completa que sostiene cada observación del informe, desde el riesgo identificado en la planificación hasta la ficha NCCCE. Las referencias RA-nn corresponden a la matriz de riesgos de auditoría del apartado 7.3 de la Fase 2; PA-nn, a los procedimientos del programa del apartado 9.1; EV-nn, a los elementos de evidencia obtenidos durante la ejecución.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border text-center">
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
    </div>
  );
};

export default AnexoTrazabilidad;
