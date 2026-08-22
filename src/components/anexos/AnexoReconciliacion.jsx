const AnexoReconciliacion = () => {
  return (
    <div className="prose max-w-none text-gray-700 text-sm p-2">
      <p className="mb-4">
        La tabla reproduce el cotejo parámetro por parámetro que sustenta las observaciones OBS-02 y OBS-03. Se realizó sin adoptar arbitrariamente una fuente como prevalente, dado que la entidad no ha definido criterio formal de prevalencia ante discrepancias.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border text-left">
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
    </div>
  );
};

export default AnexoReconciliacion;
