import { CheckSquare } from 'lucide-react';
import Acordeon from '../Acordeon';

const MatrizSeleccion = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <CheckSquare className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">4. Matriz de selección de observaciones</h2>
      </div>

      <div className="prose max-w-none text-gray-700">
        <p className="mb-6">
          Se evalúan las 20 deficiencias detectadas durante la ejecución, provenientes de los papeles de trabajo y del cuestionario del ambiente de control. De ellas se elevan 7 y se descartan 13, con fundamento registrado.
        </p>

        <h3 className="text-lg font-bold text-corporate-navy mb-3">4.1 Deficiencias evaluadas y decisión</h3>
        
        <Acordeon title="Tabla de deficiencias y decisiones" defaultOpen={false}>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border text-xs">
              <thead className="bg-corporate-gray text-corporate-navy">
                <tr>
                  <th className="px-2 py-2 text-center font-bold">Ref.</th>
                  <th className="px-2 py-2 text-left font-bold">Deficiencia detectada</th>
                  <th className="px-2 py-2 text-center font-bold">Origen</th>
                  <th className="px-2 py-2 text-center font-bold">Signif.</th>
                  <th className="px-2 py-2 text-center font-bold">Mater.</th>
                  <th className="px-2 py-2 text-center font-bold">Recurr.</th>
                  <th className="px-2 py-2 text-center font-bold">Mejora</th>
                  <th className="px-2 py-2 text-center font-bold">Decisión</th>
                  <th className="px-2 py-2 text-center font-bold">Obs.</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-2 py-2 text-center font-medium">D-01</td>
                  <td className="px-2 py-2">El BCP registra 14 meses sin revisión ni aprobación posterior</td>
                  <td className="px-2 py-2 text-center text-gray-500">PT-OBS-01</td>
                  <td className="px-2 py-2 text-center">Media</td><td className="px-2 py-2 text-center">Alta</td><td className="px-2 py-2 text-center">Estructural</td><td className="px-2 py-2 text-center">Alta</td>
                  <td className="px-2 py-2 text-center font-bold text-green-700">ELEVAR</td>
                  <td className="px-2 py-2 text-center font-bold">OBS-01</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-2 py-2 text-center font-medium">D-02</td>
                  <td className="px-2 py-2">El RPO de P2 no está formalizado y su RTO figura como valor de borrador no aprobado</td>
                  <td className="px-2 py-2 text-center text-gray-500">PT-OBS-02</td>
                  <td className="px-2 py-2 text-center">Alta</td><td className="px-2 py-2 text-center">Alta</td><td className="px-2 py-2 text-center">Estructural</td><td className="px-2 py-2 text-center">Alta</td>
                  <td className="px-2 py-2 text-center font-bold text-green-700">ELEVAR</td>
                  <td className="px-2 py-2 text-center font-bold">OBS-02</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-center font-medium">D-03</td>
                  <td className="px-2 py-2">El DRP carece de aprobación formal, no cubre el IAM y declara tiempos superiores a los RTO</td>
                  <td className="px-2 py-2 text-center text-gray-500">PT-OBS-03</td>
                  <td className="px-2 py-2 text-center">Alta</td><td className="px-2 py-2 text-center">Alta</td><td className="px-2 py-2 text-center">Estructural</td><td className="px-2 py-2 text-center">Alta</td>
                  <td className="px-2 py-2 text-center font-bold text-green-700">ELEVAR</td>
                  <td className="px-2 py-2 text-center font-bold">OBS-03</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-2 py-2 text-center font-medium">D-04</td>
                  <td className="px-2 py-2">El ejercicio integral de continuidad previsto no registra ejecución</td>
                  <td className="px-2 py-2 text-center text-gray-500">PT-OBS-04</td>
                  <td className="px-2 py-2 text-center">Alta</td><td className="px-2 py-2 text-center">Alta</td><td className="px-2 py-2 text-center">Estructural</td><td className="px-2 py-2 text-center">Alta</td>
                  <td className="px-2 py-2 text-center font-bold text-green-700">ELEVAR</td>
                  <td className="px-2 py-2 text-center font-bold">OBS-04</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-center font-medium">D-05</td>
                  <td className="px-2 py-2">Tres fallos de copia sin reejecución ni compensación documentada</td>
                  <td className="px-2 py-2 text-center text-gray-500">PT-OBS-05</td>
                  <td className="px-2 py-2 text-center">Media</td><td className="px-2 py-2 text-center">Alta</td><td className="px-2 py-2 text-center">Recurrente</td><td className="px-2 py-2 text-center">Alta</td>
                  <td className="px-2 py-2 text-center font-bold text-green-700">ELEVAR</td>
                  <td className="px-2 py-2 text-center font-bold">OBS-05</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-2 py-2 text-center font-medium">D-06</td>
                  <td className="px-2 py-2">La última prueba de restauración es de 01/2025 y resultó fallida</td>
                  <td className="px-2 py-2 text-center text-gray-500">PT-OBS-06</td>
                  <td className="px-2 py-2 text-center">Alta</td><td className="px-2 py-2 text-center">Alta</td><td className="px-2 py-2 text-center">Estructural</td><td className="px-2 py-2 text-center">Alta</td>
                  <td className="px-2 py-2 text-center font-bold text-green-700">ELEVAR</td>
                  <td className="px-2 py-2 text-center font-bold">OBS-06</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-center font-medium">D-07</td>
                  <td className="px-2 py-2">Cuentas de emergencia y genéricas sin autorización, MFA ni recertificación</td>
                  <td className="px-2 py-2 text-center text-gray-500">PT-OBS-07</td>
                  <td className="px-2 py-2 text-center">Media</td><td className="px-2 py-2 text-center">Media</td><td className="px-2 py-2 text-center">Estructural</td><td className="px-2 py-2 text-center">Alta</td>
                  <td className="px-2 py-2 text-center font-bold text-green-700">ELEVAR</td>
                  <td className="px-2 py-2 text-center font-bold">OBS-07</td>
                </tr>
                <tr className="text-gray-500 bg-gray-50">
                  <td className="px-2 py-2 text-center font-medium">D-08</td>
                  <td className="px-2 py-2">Discrepancia de MTPD y RTO entre el BIA y el BCP en P3</td>
                  <td className="px-2 py-2 text-center">PT-XC-01</td>
                  <td className="px-2 py-2 text-center">Baja</td><td className="px-2 py-2 text-center">Baja</td><td className="px-2 py-2 text-center">Puntual</td><td className="px-2 py-2 text-center">Alta</td>
                  <td className="px-2 py-2 text-center">No elevar (sug. gestión)</td>
                  <td className="px-2 py-2 text-center">—</td>
                </tr>
                <tr className="text-gray-500">
                  <td className="px-2 py-2 text-center font-medium">D-09</td>
                  <td className="px-2 py-2">El código de ética no extiende el uso aceptable al entorno de contingencia</td>
                  <td className="px-2 py-2 text-center">CEAC 2</td>
                  <td className="px-2 py-2 text-center">Baja</td><td className="px-2 py-2 text-center">Baja</td><td className="px-2 py-2 text-center">Puntual</td><td className="px-2 py-2 text-center">Media</td>
                  <td className="px-2 py-2 text-center">No elevar (subsumida OBS-01)</td>
                  <td className="px-2 py-2 text-center">—</td>
                </tr>
                <tr className="text-gray-500 bg-gray-50">
                  <td className="px-2 py-2 text-center font-medium">D-10</td>
                  <td className="px-2 py-2">La Política de Seguridad registra 14 meses sin revisión formal</td>
                  <td className="px-2 py-2 text-center">CEAC 9</td>
                  <td className="px-2 py-2 text-center">Media</td><td className="px-2 py-2 text-center">Baja</td><td className="px-2 py-2 text-center">Estructural</td><td className="px-2 py-2 text-center">Alta</td>
                  <td className="px-2 py-2 text-center">No elevar (subsumida OBS-01)</td>
                  <td className="px-2 py-2 text-center">—</td>
                </tr>
                <tr className="text-gray-500">
                  <td className="px-2 py-2 text-center font-medium">D-11</td>
                  <td className="px-2 py-2">La política de gestión de incidentes se encuentra en versión borrador</td>
                  <td className="px-2 py-2 text-center">CEAC 16</td>
                  <td className="px-2 py-2 text-center">Baja</td><td className="px-2 py-2 text-center">Baja</td><td className="px-2 py-2 text-center">Puntual</td><td className="px-2 py-2 text-center">Media</td>
                  <td className="px-2 py-2 text-center">No elevar (fuera alcance)</td>
                  <td className="px-2 py-2 text-center">—</td>
                </tr>
                <tr className="text-gray-500 bg-gray-50">
                  <td className="px-2 py-2 text-center font-medium">D-12</td>
                  <td className="px-2 py-2">Los procedimientos operativos presentan más de 18 meses de desactualización</td>
                  <td className="px-2 py-2 text-center">CEAC 18</td>
                  <td className="px-2 py-2 text-center">Media</td><td className="px-2 py-2 text-center">Media</td><td className="px-2 py-2 text-center">Estructural</td><td className="px-2 py-2 text-center">Media</td>
                  <td className="px-2 py-2 text-center">No elevar (subsumida OBS-01)</td>
                  <td className="px-2 py-2 text-center">—</td>
                </tr>
                <tr className="text-gray-500">
                  <td className="px-2 py-2 text-center font-medium">D-13</td>
                  <td className="px-2 py-2">El tablero de gestión no reporta resultados de pruebas de restauración</td>
                  <td className="px-2 py-2 text-center">CEAC 22</td>
                  <td className="px-2 py-2 text-center">Baja</td><td className="px-2 py-2 text-center">Baja</td><td className="px-2 py-2 text-center">Estructural</td><td className="px-2 py-2 text-center">Alta</td>
                  <td className="px-2 py-2 text-center">No elevar (subsumida OBS-06)</td>
                  <td className="px-2 py-2 text-center">—</td>
                </tr>
                <tr className="text-gray-500 bg-gray-50">
                  <td className="px-2 py-2 text-center font-medium">D-14</td>
                  <td className="px-2 py-2">La autoevaluación de control se ejecuta sin validación cruzada</td>
                  <td className="px-2 py-2 text-center">CEAC 23</td>
                  <td className="px-2 py-2 text-center">Baja</td><td className="px-2 py-2 text-center">Baja</td><td className="px-2 py-2 text-center">Estructural</td><td className="px-2 py-2 text-center">Media</td>
                  <td className="px-2 py-2 text-center">No elevar (sug. gestión)</td>
                  <td className="px-2 py-2 text-center">—</td>
                </tr>
                <tr className="text-gray-500">
                  <td className="px-2 py-2 text-center font-medium">D-15</td>
                  <td className="px-2 py-2">Sin evidencia de seguimiento de hallazgos de auditorías previas</td>
                  <td className="px-2 py-2 text-center">CEAC 25</td>
                  <td className="px-2 py-2 text-center">Media</td><td className="px-2 py-2 text-center">Baja</td><td className="px-2 py-2 text-center">N/D</td><td className="px-2 py-2 text-center">Baja</td>
                  <td className="px-2 py-2 text-center">No elevar (limit. alcance)</td>
                  <td className="px-2 py-2 text-center">—</td>
                </tr>
                <tr className="text-gray-500 bg-gray-50">
                  <td className="px-2 py-2 text-center font-medium">D-16</td>
                  <td className="px-2 py-2">Sin medición de efectividad del programa de concientización</td>
                  <td className="px-2 py-2 text-center">CEAC 30</td>
                  <td className="px-2 py-2 text-center">Baja</td><td className="px-2 py-2 text-center">Baja</td><td className="px-2 py-2 text-center">N/D</td><td className="px-2 py-2 text-center">Baja</td>
                  <td className="px-2 py-2 text-center">No elevar (limit. alcance)</td>
                  <td className="px-2 py-2 text-center">—</td>
                </tr>
                <tr className="text-gray-500">
                  <td className="px-2 py-2 text-center font-medium">D-17</td>
                  <td className="px-2 py-2">P4 y P5 carecen de plan de continuidad documentado</td>
                  <td className="px-2 py-2 text-center">PT-OC1-01</td>
                  <td className="px-2 py-2 text-center">Alta</td><td className="px-2 py-2 text-center">Alta</td><td className="px-2 py-2 text-center">Estructural</td><td className="px-2 py-2 text-center">Baja</td>
                  <td className="px-2 py-2 text-center">No elevar (fuera universo)</td>
                  <td className="px-2 py-2 text-center">—</td>
                </tr>
                <tr className="text-gray-500 bg-gray-50">
                  <td className="px-2 py-2 text-center font-medium">D-18</td>
                  <td className="px-2 py-2">El perfil de Atención al Cliente no utiliza MFA en ningún entorno</td>
                  <td className="px-2 py-2 text-center">PT-OC3-01</td>
                  <td className="px-2 py-2 text-center">Baja</td><td className="px-2 py-2 text-center">Media</td><td className="px-2 py-2 text-center">Puntual</td><td className="px-2 py-2 text-center">Alta</td>
                  <td className="px-2 py-2 text-center">No elevar (exc. alcance)</td>
                  <td className="px-2 py-2 text-center">—</td>
                </tr>
                <tr className="text-gray-500">
                  <td className="px-2 py-2 text-center font-medium">D-19</td>
                  <td className="px-2 py-2">El sitio alternativo no acredita prueba de aislamiento frente a software malicioso</td>
                  <td className="px-2 py-2 text-center">PT-OC2-02</td>
                  <td className="px-2 py-2 text-center">Media</td><td className="px-2 py-2 text-center">Media</td><td className="px-2 py-2 text-center">N/D</td><td className="px-2 py-2 text-center">Media</td>
                  <td className="px-2 py-2 text-center">No elevar (limit. alcance)</td>
                  <td className="px-2 py-2 text-center">—</td>
                </tr>
                <tr className="text-gray-500 bg-gray-50">
                  <td className="px-2 py-2 text-center font-medium">D-20</td>
                  <td className="px-2 py-2">El IAM no cuenta con objetivos de recuperación aprobados</td>
                  <td className="px-2 py-2 text-center">PT-XC-01</td>
                  <td className="px-2 py-2 text-center">Alta</td><td className="px-2 py-2 text-center">Alta</td><td className="px-2 py-2 text-center">Estructural</td><td className="px-2 py-2 text-center">Media</td>
                  <td className="px-2 py-2 text-center">No elevar (subsumida OBS-03)</td>
                  <td className="px-2 py-2 text-center">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Acordeon>

        <h3 className="text-lg font-bold text-corporate-navy mt-8 mb-3">4.2 Fundamento de las deficiencias no elevadas</h3>
        <p className="mb-4">La consigna del trabajo prevé que en la defensa oral pueda requerirse justificar por qué una deficiencia detectada no fue elevada. El fundamento de cada descarte se registra a continuación.</p>

        <Acordeon title="Tabla de fundamentos de descarte" defaultOpen={false}>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border text-sm">
              <thead className="bg-corporate-gray text-corporate-navy">
                <tr>
                  <th className="px-3 py-2 text-center font-bold w-32">Ref.</th>
                  <th className="px-3 py-2 text-left font-bold">Motivo del descarte</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-3 py-2 text-center font-medium">D-08</td>
                  <td className="px-3 py-2 text-gray-700">El impacto horario de P3 es de $2.750.000, el menor de los procesos medulares, y la discrepancia admite explicación parcial: el BCP distingue entre consultas generales y líneas prioritarias de fraude, distinción que el BIA no recoge sobre el proceso agregado. Se comunica como sugerencia de gestión.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-3 py-2 text-center font-medium">D-09 · D-10 · D-12</td>
                  <td className="px-3 py-2 text-gray-700">Comparten causa con D-01 —ausencia de un ciclo efectivo de mantenimiento del cuerpo normativo— y admiten la misma acción correctiva. Se subsumen en OBS-01, cuya recomendación las cubre expresamente. Elevarlas por separado comunicaría cuatro veces un mismo problema.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-center font-medium">D-11</td>
                  <td className="px-3 py-2 text-gray-700">La gestión de incidentes de ciberseguridad excede el alcance de los tres objetivos de control del encargo. Se deja constancia en el legajo para su consideración en un ciclo posterior.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-3 py-2 text-center font-medium">D-13</td>
                  <td className="px-3 py-2 text-gray-700">La deficiencia consiste en la ausencia de una métrica en el tablero, que es consecuencia de que la prueba de restauración no se ejecuta. Se subsume en OBS-06, que trata la causa; elevarla por separado sería informar el síntoma junto al problema.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-center font-medium">D-14</td>
                  <td className="px-3 py-2 text-gray-700">La autoevaluación de control constituye un mecanismo de segunda línea. Su debilidad no impide alcanzar ningún objetivo de recuperación ni configura incumplimiento regulatorio verificable. Se comunica como sugerencia de gestión.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-3 py-2 text-center font-medium">D-15 · D-16 · D-19</td>
                  <td className="px-3 py-2 text-gray-700">No constituyen deficiencias probadas sino limitaciones al alcance: la documentación requerida no fue puesta a disposición. Elevar como observación una condición no verificada implicaría afirmar más de lo que la evidencia sostiene. Se informan como limitación en el apartado 7.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-center font-medium">D-17</td>
                  <td className="px-3 py-2 text-gray-700">P4 y P5 son procesos complementarios, fuera del universo de pruebas sustantivas definido en el alcance del encargo. La condición se informa a la Alta Dirección como elemento a considerar en la extensión futura del marco de continuidad, sin constituir observación de esta auditoría.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-3 py-2 text-center font-medium">D-18</td>
                  <td className="px-3 py-2 text-gray-700">El objetivo de control OC-3 evalúa la equivalencia entre producción y contingencia, y esa equivalencia se mantiene: el perfil opera con el mismo nivel de autenticación en ambos entornos. No existe degradación en contingencia, que es la condición que el control busca prevenir. Se registra como excepción de alcance.</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-center font-medium">D-20</td>
                  <td className="px-3 py-2 text-gray-700">La condición está acreditada y es de la mayor relevancia técnica, pero su tratamiento se encuentra íntegramente contenido en OBS-03, cuya condición constata expresamente la exclusión del sistema de identidades del alcance del DRP y cuya recomendación exige incorporarlo con objetivos de recuperación, procedimiento técnico y responsable designado. Elevarla por separado comunicaría dos veces el mismo desvío. Se deja constancia de que la falta de objetivos aprobados para el componente es la condición que determina la valoración de insuficiencia del escenario E1 en PT-OC1-05.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Acordeon>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6 rounded-r-md">
          <h4 className="text-sm font-bold text-blue-800 mb-1">Lo que demuestra esta matriz</h4>
          <p className="text-sm text-blue-900 mb-0">
            De 20 deficiencias detectadas se elevan 7 y se descartan 13. Tres de los descartes no son deficiencias sino limitaciones de evidencia, y tratarlas como tales evita el error más frecuente en auditoría: afirmar la existencia de un problema cuando lo único acreditado es la ausencia de información. Otros cinco se descartan por subsunción, al compartir causa con una observación elevada y admitir su misma recomendación.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MatrizSeleccion;
