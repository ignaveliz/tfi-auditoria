import { Activity } from 'lucide-react';
import Acordeon from '../Acordeon';

const CoberturaRiesgos = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Activity className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">3. Cobertura de los riesgos de planificación</h2>
      </div>

      <div className="prose max-w-none text-gray-700">
        <p className="mb-4">
          Verificación del alcance efectivo de la ejecución respecto de los riesgos identificados en la Fase 2. Los papeles de trabajo referencian la numeración definitiva RA-nn de dicha matriz.
        </p>

        <Acordeon title="Tabla de Cobertura de Riesgos" defaultOpen={false}>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border text-sm">
              <thead className="bg-corporate-gray text-corporate-navy">
                <tr>
                  <th className="px-3 py-2 text-center font-bold w-16">Riesgo</th>
                  <th className="px-3 py-2 text-left font-bold">Descripción</th>
                  <th className="px-3 py-2 text-center font-bold w-24">Nivel</th>
                  <th className="px-3 py-2 text-left font-bold">Papel de ejecución</th>
                  <th className="px-3 py-2 text-center font-bold">Resultado</th>
                  <th className="px-3 py-2 text-center font-bold">Observación</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-3 py-2 text-center font-medium">RA-01</td>
                  <td className="px-3 py-2">RTO de P2 superior al MTPD</td>
                  <td className="px-3 py-2 text-center"><span className="px-2 py-1 text-xs font-bold rounded-full bg-red-100 text-red-800">Crítico</span></td>
                  <td className="px-3 py-2 text-gray-600 text-xs">PT-OC1-02 · PT-XC-01</td>
                  <td className="px-3 py-2 text-center font-medium">Confirmado</td>
                  <td className="px-3 py-2 text-center">PT-OBS-02</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-center font-medium">RA-02</td>
                  <td className="px-3 py-2">RPO de P2 sin cuantificar</td>
                  <td className="px-3 py-2 text-center"><span className="px-2 py-1 text-xs font-bold rounded-full bg-red-100 text-red-800">Crítico</span></td>
                  <td className="px-3 py-2 text-gray-600 text-xs">PT-OC1-02</td>
                  <td className="px-3 py-2 text-center font-medium">Confirmado</td>
                  <td className="px-3 py-2 text-center">PT-OBS-02</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-center font-medium">RA-03</td>
                  <td className="px-3 py-2">IAM sin objetivos aprobados</td>
                  <td className="px-3 py-2 text-center"><span className="px-2 py-1 text-xs font-bold rounded-full bg-red-100 text-red-800">Crítico</span></td>
                  <td className="px-3 py-2 text-gray-600 text-xs">No ejecutado (PA-15)</td>
                  <td className="px-3 py-2 text-center text-gray-500 italic">Pendiente</td>
                  <td className="px-3 py-2 text-center text-xs text-gray-500">Ver apartado 4</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-center font-medium">RA-04</td>
                  <td className="px-3 py-2">BCP con 14 meses sin revisión</td>
                  <td className="px-3 py-2 text-center"><span className="px-2 py-1 text-xs font-bold rounded-full bg-red-100 text-red-800">Crítico</span></td>
                  <td className="px-3 py-2 text-gray-600 text-xs">PT-OC1-01</td>
                  <td className="px-3 py-2 text-center font-medium">Confirmado</td>
                  <td className="px-3 py-2 text-center">PT-OBS-01</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-center font-medium">RA-05</td>
                  <td className="px-3 py-2">Discrepancias BIA-BCP en P2 y P3</td>
                  <td className="px-3 py-2 text-center"><span className="px-2 py-1 text-xs font-bold rounded-full bg-orange-100 text-orange-800">Alto</span></td>
                  <td className="px-3 py-2 text-gray-600 text-xs">PT-XC-01</td>
                  <td className="px-3 py-2 text-center font-medium">Confirmado</td>
                  <td className="px-3 py-2 text-center">PT-OBS-02</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-center font-medium">RA-06</td>
                  <td className="px-3 py-2">Sin simulacros ni prueba de restauración</td>
                  <td className="px-3 py-2 text-center"><span className="px-2 py-1 text-xs font-bold rounded-full bg-orange-100 text-orange-800">Alto</span></td>
                  <td className="px-3 py-2 text-gray-600 text-xs">PT-OC1-04 · PT-OC2-01 · PT-OC2-03 · PT-OC2-04</td>
                  <td className="px-3 py-2 text-center font-medium">Confirmado</td>
                  <td className="px-3 py-2 text-center text-xs">PT-OBS-04, 05, 06</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-center font-medium">RA-07</td>
                  <td className="px-3 py-2">DRP sin aprobación, cobertura parcial y tiempos incompatibles</td>
                  <td className="px-3 py-2 text-center"><span className="px-2 py-1 text-xs font-bold rounded-full bg-red-100 text-red-800">Crítico</span></td>
                  <td className="px-3 py-2 text-gray-600 text-xs">PT-OC1-03</td>
                  <td className="px-3 py-2 text-center font-medium">Confirmado</td>
                  <td className="px-3 py-2 text-center">PT-OBS-03</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-center font-medium">RA-08</td>
                  <td className="px-3 py-2">Accesos en entorno de contingencia</td>
                  <td className="px-3 py-2 text-center"><span className="px-2 py-1 text-xs font-bold rounded-full bg-orange-100 text-orange-800">Alto</span></td>
                  <td className="px-3 py-2 text-gray-600 text-xs">PT-OC3-01 a PT-OC3-04</td>
                  <td className="px-3 py-2 text-center font-medium text-xs">Parcialmente confirmado</td>
                  <td className="px-3 py-2 text-center">PT-OBS-07</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-center font-medium">RA-09</td>
                  <td className="px-3 py-2">Aislamiento e inmutabilidad de copias</td>
                  <td className="px-3 py-2 text-center"><span className="px-2 py-1 text-xs font-bold rounded-full bg-orange-100 text-orange-800">Alto</span></td>
                  <td className="px-3 py-2 text-gray-600 text-xs">PT-OC2-02 · PT-OC1-05</td>
                  <td className="px-3 py-2 text-center font-medium text-xs">Confirmado doc.</td>
                  <td className="px-3 py-2 text-center text-xs text-gray-600">Refuerza PT-OBS-06</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-center font-medium">RA-10</td>
                  <td className="px-3 py-2">SLA de terceros críticos</td>
                  <td className="px-3 py-2 text-center"><span className="px-2 py-1 text-xs font-bold rounded-full bg-orange-100 text-orange-800">Alto</span></td>
                  <td className="px-3 py-2 text-gray-600 text-xs">No ejecutado</td>
                  <td className="px-3 py-2 text-center text-gray-500 italic">Pendiente</td>
                  <td className="px-3 py-2 text-center text-xs text-gray-500">Ver apartado 4</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-center font-medium">RA-11</td>
                  <td className="px-3 py-2">Seguimiento de hallazgos previos</td>
                  <td className="px-3 py-2 text-center"><span className="px-2 py-1 text-xs font-bold rounded-full bg-orange-100 text-orange-800">Alto</span></td>
                  <td className="px-3 py-2 text-gray-600 text-xs">No ejecutado</td>
                  <td className="px-3 py-2 text-center text-gray-500 italic">Pendiente</td>
                  <td className="px-3 py-2 text-center text-xs text-gray-500">Ver apartado 4</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-center font-medium">RA-12</td>
                  <td className="px-3 py-2">Alta disponibilidad del Core para P1</td>
                  <td className="px-3 py-2 text-center"><span className="px-2 py-1 text-xs font-bold rounded-full bg-orange-100 text-orange-800">Alto</span></td>
                  <td className="px-3 py-2 text-gray-600 text-xs">No ejecutado</td>
                  <td className="px-3 py-2 text-center text-gray-500 italic">Pendiente</td>
                  <td className="px-3 py-2 text-center text-xs text-gray-500">Ver apartado 4</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-3 py-2 text-center font-medium">RA-13</td>
                  <td className="px-3 py-2 text-gray-600">P4 y P5 sin plan de continuidad</td>
                  <td className="px-3 py-2 text-center"><span className="px-2 py-1 text-xs font-bold rounded-full bg-yellow-100 text-yellow-800">Medio</span></td>
                  <td className="px-3 py-2 text-gray-600 text-xs">PT-OC1-01 · PT-OC1-03</td>
                  <td className="px-3 py-2 text-center font-medium">Confirmado</td>
                  <td className="px-3 py-2 text-center text-xs text-gray-500">Se informa a la Dir.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-3 py-2 text-center font-medium">RA-14</td>
                  <td className="px-3 py-2 text-gray-600">Concientización sin medición de efectividad</td>
                  <td className="px-3 py-2 text-center"><span className="px-2 py-1 text-xs font-bold rounded-full bg-gray-200 text-gray-700">Bajo</span></td>
                  <td className="px-3 py-2 text-gray-600 text-xs">PT-OC3-01</td>
                  <td className="px-3 py-2 text-center font-medium">Confirmado</td>
                  <td className="px-3 py-2 text-center text-xs text-gray-500">Sugerencia de gestión</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Acordeon>

        <p className="text-sm bg-gray-50 border border-gray-200 p-4 rounded-md">
          <strong>Lectura del alcance alcanzado:</strong> Ocho de los doce riesgos de nivel crítico y alto fueron ejecutados: siete quedaron confirmados con evidencia y uno —RA-08— parcialmente confirmado. Los cuatro restantes no pudieron ejecutarse por las causas que se detallan en el apartado siguiente, ninguna de ellas imputable a una restricción de tiempo del equipo auditor. Los riesgos de nivel medio y bajo, RA-13 y RA-14, quedaron cubiertos por procedimientos ya ejecutados y no generan observación formal. El riesgo RA-03 reviste particular relevancia por su nivel crítico y se eleva expresamente a consideración para la extensión del trabajo de campo.
        </p>

      </div>
    </div>
  );
};

export default CoberturaRiesgos;
