import { CheckCircle2 } from 'lucide-react';

const ControlesAdecuados = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <CheckCircle2 className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">2. Controles evaluados como adecuados</h2>
      </div>

      <div className="prose max-w-none text-gray-700">
        <p className="mb-6">
          Del trabajo de campo surgen dos controles que operan correctamente y que se documentan a continuación. Los restantes controles adecuados que integran el entregable comprometido provienen del cuestionario del ambiente de control y se consolidan, junto con estos dos, en la fase de conclusión.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-3 py-2 text-left font-bold">Control</th>
                <th className="px-3 py-2 text-center font-bold w-24">Papel</th>
                <th className="px-3 py-2 text-left font-bold w-32">Conclusión</th>
                <th className="px-3 py-2 text-left font-bold">Fundamento</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-3 py-2 font-medium">Almacenamiento de copias fuera del sitio principal</td>
                <td className="px-3 py-2 text-center">PT-OC2-02</td>
                <td className="px-3 py-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800">
                    Adecuado con alcance limitado
                  </span>
                </td>
                <td className="px-3 py-2 text-gray-600 text-xs">
                  Warm Site a 40 km del centro primario, con replicación asincrónica y cifrado AES-256 en reposo. El requisito de conservación externa se cumple; la restaurabilidad se evalúa por separado en PT-OC2-03.
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Equivalencia de autenticación entre producción y contingencia</td>
                <td className="px-3 py-2 text-center">PT-OC3-01</td>
                <td className="px-3 py-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800">
                    Adecuado con alcance limitado
                  </span>
                </td>
                <td className="px-3 py-2 text-gray-600 text-xs">
                  Los perfiles críticos muestreados conservan autenticación multifactor y token físico en el entorno de contingencia, sin degradación respecto de producción.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6 rounded-r-md">
          <h4 className="text-sm font-bold text-blue-800 mb-1">Sobre la calificación con alcance limitado</h4>
          <p className="text-sm text-blue-900 mb-0">
            No equivale a una deficiencia atenuada: significa que el atributo probado opera correctamente y que otro atributo, distinto, no pudo evaluarse con la evidencia disponible. El almacenamiento externo existe y está cifrado; lo que no se acreditó es la restaurabilidad, que se informa por separado en PT-OBS-06. Confundir ambos planos llevaría a comunicar dos veces el mismo desvío.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ControlesAdecuados;
