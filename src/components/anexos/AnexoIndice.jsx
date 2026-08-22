const AnexoIndice = () => {
  return (
    <div className="prose max-w-none text-gray-700 text-sm p-2">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border text-left">
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
              <td className="px-3 py-2 text-red-600 font-medium">No adecuado</td>
              <td className="px-3 py-2 text-gray-700">PT-OBS-01</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-medium">PT-OC1-02</td>
              <td className="px-3 py-2 text-gray-700">Definición y aprobación formal de MTPD, RTO y RPO</td>
              <td className="px-3 py-2 text-center text-gray-500">OC-1</td>
              <td className="px-3 py-2 text-red-600 font-medium">No adecuado</td>
              <td className="px-3 py-2 text-gray-700">PT-OBS-02</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-medium">PT-OC1-03</td>
              <td className="px-3 py-2 text-gray-700">Aprobación, cobertura y suficiencia técnica del DRP</td>
              <td className="px-3 py-2 text-center text-gray-500">OC-1</td>
              <td className="px-3 py-2 text-red-600 font-medium">No adecuado</td>
              <td className="px-3 py-2 text-gray-700">PT-OBS-03</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-medium">PT-OC1-04</td>
              <td className="px-3 py-2 text-gray-700">Ejercicio integral de continuidad</td>
              <td className="px-3 py-2 text-center text-gray-500">OC-1</td>
              <td className="px-3 py-2 text-red-600 font-medium">No adecuado</td>
              <td className="px-3 py-2 text-gray-700">PT-OBS-04</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-medium">PT-OC1-05</td>
              <td className="px-3 py-2 text-gray-700">Evaluación de los tres escenarios de contingencia</td>
              <td className="px-3 py-2 text-center text-gray-500">OC-1</td>
              <td className="px-3 py-2 text-red-600 font-medium">No adecuado</td>
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
              <td className="px-3 py-2 text-red-600 font-medium">No adecuado</td>
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
              <td className="px-3 py-2 text-red-600 font-medium">No adecuado</td>
              <td className="px-3 py-2 text-gray-700">PT-OBS-07</td>
            </tr>
            <tr className="bg-blue-50">
              <td className="px-3 py-2 font-bold text-corporate-navy" colSpan="5">Papeles de Observación y Transversales</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-medium">PT-XC-01</td>
              <td className="px-3 py-2 text-gray-700">Consistencia documental BIA – BCP – DRP</td>
              <td className="px-3 py-2 text-center text-gray-500">Transv.</td>
              <td className="px-3 py-2 text-red-600 font-medium">No adecuado</td>
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
    </div>
  );
};

export default AnexoIndice;
