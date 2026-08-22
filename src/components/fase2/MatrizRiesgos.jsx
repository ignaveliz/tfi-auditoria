import { AlertTriangle, TrendingUp, Filter } from 'lucide-react';
import Acordeon from '../Acordeon';

const MatrizRiesgos = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <AlertTriangle className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">5. Matriz de riesgos de auditoría</h2>
      </div>

      <div className="prose max-w-none text-gray-700">
        <p className="mb-4">
          Los riesgos que siguen se derivan de la evaluación del ambiente de control (apartado 4) y del relevamiento del marco de continuidad (apartados 5 y 6). Cada uno indica la evidencia que lo sustenta y el procedimiento del programa que lo somete a prueba, de modo que ninguna asignación de recursos quede sin fundamento trazable.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <h4 className="font-bold text-blue-800 m-0 mb-1">Naturaleza de estas valoraciones</h4>
          <p className="text-blue-900 text-sm m-0">
            Se trata de <strong>riesgos de auditoría</strong> —la probabilidad de que una condición adversa exista y no sea detectada—, no de riesgos residuales de la entidad. El riesgo residual solo podrá determinarse una vez verificada la efectividad operativa de los controles durante la etapa de ejecución. La numeración adopta el prefijo <strong>RA</strong> para no confundirse con la matriz R-01 a R-04 que el propio BCP incorpora.
          </p>
        </div>

        <Acordeon title="5.1 Criterios de valoración y 5.2 Matriz de determinación del nivel">
          <div className="grid md:grid-cols-2 gap-6 mt-4 mb-4">
            <div>
              <h4 className="font-bold text-corporate-navy mb-2">Probabilidad</h4>
              <ul className="text-sm space-y-2">
                <li><strong>Alta:</strong> La condición está documentalmente acreditada o su materialización es esperable dentro de los próximos 12 meses.</li>
                <li><strong>Media:</strong> La condición es posible dentro de los próximos 24 meses o existen indicios parciales.</li>
                <li><strong>Baja:</strong> La condición es poco probable en el horizonte de análisis y no se registran indicios.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-corporate-navy mb-2">Impacto</h4>
              <ul className="text-sm space-y-2">
                <li><strong>Crítico:</strong> La condición impide alcanzar el objetivo de recuperación de un proceso medular, o expone a sanción del BCRA, o afecta simultáneamente a P1, P2 y P3.</li>
                <li><strong>Alto:</strong> La condición degrada la capacidad de recuperación de un proceso medular, o constituye un incumplimiento observable en inspección.</li>
                <li><strong>Medio:</strong> Debilidad de control sin efecto regulatorio inmediato ni impedimento directo sobre la recuperación.</li>
                <li><strong>Bajo:</strong> Efecto acotado sobre la eficiencia operativa, sin impacto financiero ni regulatorio relevante.</li>
              </ul>
            </div>
          </div>
          
          <div className="overflow-x-auto mt-6 mb-4">
            <table className="min-w-full divide-y divide-gray-200 border text-sm text-center">
              <thead className="bg-corporate-gray text-corporate-navy">
                <tr>
                  <th className="px-3 py-2 font-bold text-left">Probabilidad ↓ / Impacto →</th>
                  <th className="px-3 py-2 font-bold">Bajo</th>
                  <th className="px-3 py-2 font-bold">Medio</th>
                  <th className="px-3 py-2 font-bold">Alto</th>
                  <th className="px-3 py-2 font-bold text-red-700">Crítico</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr><td className="px-3 py-2 text-left font-bold">Alta</td><td className="px-3 py-2 text-yellow-600">Medio</td><td className="px-3 py-2 text-orange-600 font-bold">Alto</td><td className="px-3 py-2 text-red-600 font-bold">Crítico</td><td className="px-3 py-2 bg-red-50 text-red-800 font-bold">Crítico</td></tr>
                <tr><td className="px-3 py-2 text-left font-bold">Media</td><td className="px-3 py-2 text-green-600">Bajo</td><td className="px-3 py-2 text-yellow-600">Medio</td><td className="px-3 py-2 text-orange-600 font-bold">Alto</td><td className="px-3 py-2 text-red-600 font-bold">Crítico</td></tr>
                <tr><td className="px-3 py-2 text-left font-bold">Baja</td><td className="px-3 py-2 text-green-600">Bajo</td><td className="px-3 py-2 text-green-600">Bajo</td><td className="px-3 py-2 text-yellow-600">Medio</td><td className="px-3 py-2 text-orange-600 font-bold">Alto</td></tr>
              </tbody>
            </table>
          </div>
        </Acordeon>

        <Acordeon title="5.3 Riesgos identificados">
          <div className="overflow-x-auto mb-2 mt-2">
            <table className="min-w-full divide-y divide-gray-200 border text-xs">
              <thead className="bg-corporate-gray text-corporate-navy">
                <tr>
                  <th className="px-2 py-2 text-center font-bold">ID</th>
                  <th className="px-2 py-2 text-left font-bold w-48">Riesgo</th>
                  <th className="px-2 py-2 text-center font-bold">Proc.</th>
                  <th className="px-2 py-2 text-center font-bold">OC</th>
                  <th className="px-2 py-2 text-center font-bold">Prob.</th>
                  <th className="px-2 py-2 text-center font-bold">Impacto</th>
                  <th className="px-2 py-2 text-center font-bold">Nivel</th>
                  <th className="px-2 py-2 text-left font-bold">Evidencia</th>
                  <th className="px-2 py-2 text-center font-bold">Prueba</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="bg-red-50"><td className="px-2 py-2 text-center font-bold">RA-01</td><td className="px-2 py-2">El RTO de P2 (2 h) supera el MTPD de su ventana de pago (1 h): el objetivo es inalcanzable por diseño</td><td className="px-2 py-2 text-center">P2</td><td className="px-2 py-2 text-center">OC-1</td><td className="px-2 py-2 text-center">Alta</td><td className="px-2 py-2 text-center">Crítico</td><td className="px-2 py-2 text-center font-bold text-red-700">Crítico</td><td className="px-2 py-2">Apartado 6.3</td><td className="px-2 py-2 text-center font-medium">PA-02</td></tr>
                <tr className="bg-red-50"><td className="px-2 py-2 text-center font-bold">RA-02</td><td className="px-2 py-2">El RPO de P2 no está cuantificado y su RTO no fue aprobado formalmente por la Alta Dirección</td><td className="px-2 py-2 text-center">P2</td><td className="px-2 py-2 text-center">OC-1, OC-2</td><td className="px-2 py-2 text-center">Alta</td><td className="px-2 py-2 text-center">Crítico</td><td className="px-2 py-2 text-center font-bold text-red-700">Crítico</td><td className="px-2 py-2">D-05</td><td className="px-2 py-2 text-center font-medium">PA-02, PA-06</td></tr>
                <tr className="bg-red-50"><td className="px-2 py-2 text-center font-bold">RA-03</td><td className="px-2 py-2">El IAM carece de objetivos de recuperación aprobados pese a habilitar los tres procesos medulares</td><td className="px-2 py-2 text-center">P1-P3</td><td className="px-2 py-2 text-center">OC-1, OC-3</td><td className="px-2 py-2 text-center">Alta</td><td className="px-2 py-2 text-center">Crítico</td><td className="px-2 py-2 text-center font-bold text-red-700">Crítico</td><td className="px-2 py-2">D-01</td><td className="px-2 py-2 text-center font-medium">PA-03, PA-15</td></tr>
                <tr className="bg-red-50"><td className="px-2 py-2 text-center font-bold">RA-04</td><td className="px-2 py-2">El BCP opera con 14 meses sin revisión ni aprobación, en desvío del ciclo anual exigido</td><td className="px-2 py-2 text-center">P1-P3</td><td className="px-2 py-2 text-center">OC-1</td><td className="px-2 py-2 text-center">Alta</td><td className="px-2 py-2 text-center">Alto</td><td className="px-2 py-2 text-center font-bold text-red-700">Crítico</td><td className="px-2 py-2">D-02 · CEAC 9, 18</td><td className="px-2 py-2 text-center font-medium">PA-01</td></tr>
                <tr className="bg-orange-50"><td className="px-2 py-2 text-center font-bold">RA-05</td><td className="px-2 py-2">Discrepancias de MTPD y RTO entre el BIA y el BCP en P2 y P3, sin criterio de prevalencia definido</td><td className="px-2 py-2 text-center">P2, P3</td><td className="px-2 py-2 text-center">OC-1</td><td className="px-2 py-2 text-center">Media</td><td className="px-2 py-2 text-center">Alto</td><td className="px-2 py-2 text-center font-bold text-orange-600">Alto</td><td className="px-2 py-2">Apartado 6.4</td><td className="px-2 py-2 text-center font-medium">PA-02</td></tr>
                <tr className="bg-orange-50"><td className="px-2 py-2 text-center font-bold">RA-06</td><td className="px-2 py-2">Sin evidencia de simulacros ni de pruebas de restauración en los últimos doce meses</td><td className="px-2 py-2 text-center">P1-P3</td><td className="px-2 py-2 text-center">OC-1, OC-2</td><td className="px-2 py-2 text-center">Media</td><td className="px-2 py-2 text-center">Alto</td><td className="px-2 py-2 text-center font-bold text-orange-600">Alto</td><td className="px-2 py-2">D-06 · E-05 · CEAC 22</td><td className="px-2 py-2 text-center font-medium">PA-04, PA-09</td></tr>
                <tr className="bg-red-50"><td className="px-2 py-2 text-center font-bold">RA-07</td><td className="px-2 py-2">El DRP carece de aprobación formal, excluye al IAM y declara tiempos superiores a los RTO comprometidos</td><td className="px-2 py-2 text-center">P1-P3</td><td className="px-2 py-2 text-center">OC-1</td><td className="px-2 py-2 text-center">Alta</td><td className="px-2 py-2 text-center">Alto</td><td className="px-2 py-2 text-center font-bold text-red-700">Crítico</td><td className="px-2 py-2">D-03 · D-10 · D-11</td><td className="px-2 py-2 text-center font-medium">PA-01, PA-03</td></tr>
                <tr className="bg-orange-50"><td className="px-2 py-2 text-center font-bold">RA-08</td><td className="px-2 py-2">Los controles de acceso del entorno remoto de contingencia podrían no ser equivalentes a los de producción</td><td className="px-2 py-2 text-center">P1-P3</td><td className="px-2 py-2 text-center">OC-3</td><td className="px-2 py-2 text-center">Media</td><td className="px-2 py-2 text-center">Alto</td><td className="px-2 py-2 text-center font-bold text-orange-600">Alto</td><td className="px-2 py-2">D-07 · CEAC 2, 16</td><td className="px-2 py-2 text-center font-medium">PA-11, PA-12, PA-13</td></tr>
                <tr className="bg-orange-50"><td className="px-2 py-2 text-center font-bold">RA-09</td><td className="px-2 py-2">Las copias del procesamiento batch podrían carecer de aislamiento o inmutabilidad frente a un cifrado malicioso</td><td className="px-2 py-2 text-center">P2</td><td className="px-2 py-2 text-center">OC-2</td><td className="px-2 py-2 text-center">Media</td><td className="px-2 py-2 text-center">Alto</td><td className="px-2 py-2 text-center font-bold text-orange-600">Alto</td><td className="px-2 py-2">E-06 · Escenario 3</td><td className="px-2 py-2 text-center font-medium">PA-08, PA-10</td></tr>
                <tr className="bg-orange-50"><td className="px-2 py-2 text-center font-bold">RA-10</td><td className="px-2 py-2">Los proveedores críticos podrían no tener comprometidos SLA de continuidad y recuperación</td><td className="px-2 py-2 text-center">P1-P3</td><td className="px-2 py-2 text-center">OC-1, OC-2</td><td className="px-2 py-2 text-center">Media</td><td className="px-2 py-2 text-center">Alto</td><td className="px-2 py-2 text-center font-bold text-orange-600">Alto</td><td className="px-2 py-2">E-12 parcial</td><td className="px-2 py-2 text-center font-medium">PA-03</td></tr>
                <tr className="bg-orange-50"><td className="px-2 py-2 text-center font-bold">RA-11</td><td className="px-2 py-2">Sin seguimiento acreditado de hallazgos previos y con autoevaluaciones sin validación cruzada</td><td className="px-2 py-2 text-center">P1-P3</td><td className="px-2 py-2 text-center">OC-1</td><td className="px-2 py-2 text-center">Alta</td><td className="px-2 py-2 text-center">Medio</td><td className="px-2 py-2 text-center font-bold text-orange-600">Alto</td><td className="px-2 py-2">CEAC 23, 25 · E-14</td><td className="px-2 py-2 text-center font-medium">PA-04</td></tr>
                <tr className="bg-orange-50"><td className="px-2 py-2 text-center font-bold">RA-12</td><td className="px-2 py-2">El RTO de P1 (1 h) depende de una configuración de alta disponibilidad del Core cuya existencia no está acreditada</td><td className="px-2 py-2 text-center">P1</td><td className="px-2 py-2 text-center">OC-1, OC-2</td><td className="px-2 py-2 text-center">Media</td><td className="px-2 py-2 text-center">Alto</td><td className="px-2 py-2 text-center font-bold text-orange-600">Alto</td><td className="px-2 py-2">Apartado 6.5</td><td className="px-2 py-2 text-center font-medium">PA-03, PA-09</td></tr>
                <tr className="bg-yellow-50"><td className="px-2 py-2 text-center font-bold">RA-13</td><td className="px-2 py-2">P4 y P5, identificados por el BIA, carecen de plan de continuidad. Alcance documental: se informa a la Dirección</td><td className="px-2 py-2 text-center">P4, P5</td><td className="px-2 py-2 text-center">OC-1</td><td className="px-2 py-2 text-center">Media</td><td className="px-2 py-2 text-center">Medio</td><td className="px-2 py-2 text-center font-bold text-yellow-600">Medio</td><td className="px-2 py-2">Apartado 5.2</td><td className="px-2 py-2 text-center font-medium">PA-01</td></tr>
                <tr className="bg-green-50"><td className="px-2 py-2 text-center font-bold">RA-14</td><td className="px-2 py-2">El programa de concientización no cuenta con medición de efectividad</td><td className="px-2 py-2 text-center">P1-P3</td><td className="px-2 py-2 text-center">OC-3</td><td className="px-2 py-2 text-center">Baja</td><td className="px-2 py-2 text-center">Medio</td><td className="px-2 py-2 text-center font-bold text-green-600">Bajo</td><td className="px-2 py-2">CEAC 30 · E-16</td><td className="px-2 py-2 text-center font-medium">PA-11</td></tr>
              </tbody>
            </table>
          </div>
        </Acordeon>

        <div className="bg-corporate-gray p-5 rounded-lg border text-sm mt-6">
          <h4 className="font-bold text-corporate-navy flex items-center gap-2 mb-2">
            <TrendingUp className="h-5 w-5" /> Distribución resultante
          </h4>
          <p className="mb-2">
            5 riesgos de nivel Crítico, 7 de nivel Alto, 1 de nivel Medio y 1 de nivel Bajo. Los cinco críticos se concentran íntegramente en los procesos medulares y en su dependencia transversal, y comparten un rasgo determinante: <strong>todos son verificables sobre documentación, sin necesidad de prueba técnica</strong>. Son deficiencias de gobierno y de formalización, no de infraestructura.
          </p>
          <p className="mb-0">
            Esa característica define la secuencia de trabajo. La etapa de ejecución comienza por OC-1 y por la revisión documental de P2 —el proceso que concentra dos de los cinco riesgos críticos— porque allí se obtiene la mayor densidad de evidencia con el menor costo de verificación. Las pruebas técnicas de OC-2 y OC-3 se ejecutan a continuación, sobre las condiciones que la revisión documental no puede resolver.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MatrizRiesgos;
