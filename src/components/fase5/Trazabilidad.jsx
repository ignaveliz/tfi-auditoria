import { GitBranch } from 'lucide-react';

const Trazabilidad = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <GitBranch className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">3. Reconciliación de la trazabilidad</h2>
      </div>

      <div className="prose max-w-none text-gray-700">
        <p className="mb-4">
          Los papeles de trabajo de las Fases 3 y 4 referencian los riesgos con la numeración definitiva RA-01 a RA-14 de la matriz aprobada en el apartado 7.3 de la Fase 2, y la evidencia con la codificación EV-01 a EV-13, que se distingue de la codificación E-nn empleada para los requerimientos de la Solicitud de Información Inicial. La tabla siguiente cierra la cadena de trazabilidad desde el papel de observación hasta la ficha, con indicación de los papeles de ejecución que le dan origen y del riesgo de planificación que materializa.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-3 py-2 text-center font-bold w-32">Papel de observación</th>
                <th className="px-3 py-2 text-left font-bold">Papeles de ejecución de origen</th>
                <th className="px-3 py-2 text-left font-bold">Riesgo de la matriz (Fase 2)</th>
                <th className="px-3 py-2 text-center font-bold w-24">Observación</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-3 py-2 text-center font-medium">PT-OBS-01</td>
                <td className="px-3 py-2 text-gray-600">PT-OC1-01</td>
                <td className="px-3 py-2">RA-04 — BCP con 14 meses sin revisión ni aprobación</td>
                <td className="px-3 py-2 text-center font-bold text-corporate-blue">OBS-01</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-2 text-center font-medium">PT-OBS-02</td>
                <td className="px-3 py-2 text-gray-600">PT-OC1-02 · PT-XC-01</td>
                <td className="px-3 py-2">RA-01 y RA-02 — objetivos de recuperación de P2 no cuantificados ni aprobados</td>
                <td className="px-3 py-2 text-center font-bold text-corporate-blue">OBS-02</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-center font-medium">PT-OBS-03</td>
                <td className="px-3 py-2 text-gray-600">PT-OC1-03</td>
                <td className="px-3 py-2">RA-07 — DRP sin aprobación formal, cobertura parcial y tiempos incompatibles</td>
                <td className="px-3 py-2 text-center font-bold text-corporate-blue">OBS-03</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-2 text-center font-medium">PT-OBS-04</td>
                <td className="px-3 py-2 text-gray-600">PT-OC1-04 · PT-OC1-05</td>
                <td className="px-3 py-2">RA-06 — sin simulacros ni pruebas de restauración</td>
                <td className="px-3 py-2 text-center font-bold text-corporate-blue">OBS-04</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-center font-medium">PT-OBS-05</td>
                <td className="px-3 py-2 text-gray-600">PT-OC2-01 · PT-OC2-04</td>
                <td className="px-3 py-2">RA-06 — sin evidencia de tratamiento de fallos de resguardo</td>
                <td className="px-3 py-2 text-center font-bold text-corporate-blue">OBS-05</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-2 text-center font-medium">PT-OBS-06</td>
                <td className="px-3 py-2 text-gray-600">PT-OC2-03 · PT-OC1-05</td>
                <td className="px-3 py-2">RA-06 — sin prueba de restauración exitosa</td>
                <td className="px-3 py-2 text-center font-bold text-corporate-blue">OBS-06</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-center font-medium">PT-OBS-07</td>
                <td className="px-3 py-2 text-gray-600">PT-OC3-02 · PT-OC3-03 · PT-OC3-04</td>
                <td className="px-3 py-2">RA-08 — controles de acceso en entorno de contingencia</td>
                <td className="px-3 py-2 text-center font-bold text-corporate-blue">OBS-07</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gray-100 p-4 rounded-md border border-gray-200">
          <p className="text-sm font-medium text-gray-800 mb-0">
            <strong>Cadena completa.</strong> Cada observación de esta fase conserva la secuencia <span className="font-mono bg-white px-1 py-0.5 rounded border">RA-nn → PA-nn → E-nn → PT-OCn-nn → PT-OBS-nn → OBS-nn</span>, de modo que cualquier afirmación del informe final puede rastrearse hasta la evidencia que la sostiene.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trazabilidad;
