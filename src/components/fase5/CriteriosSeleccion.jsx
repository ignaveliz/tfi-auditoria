import { Filter } from 'lucide-react';

const CriteriosSeleccion = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Filter className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">2. Criterios de selección y escalas</h2>
      </div>

      <div className="prose max-w-none text-gray-700">
        <h3 className="text-lg font-bold text-corporate-navy mt-6 mb-3">2.1 Los cuatro criterios de elevación</h3>
        <p className="mb-4">
          Cada deficiencia detectada se evalúa contra los cuatro criterios siguientes. Ninguno es determinante por sí solo: la decisión surge de su ponderación conjunta y su fundamento se registra en la matriz del apartado 4.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-3 py-2 text-left font-bold w-1/4">Criterio</th>
                <th className="px-3 py-2 text-left font-bold w-1/3">Pregunta que responde</th>
                <th className="px-3 py-2 text-left font-bold">Aplicación en este encargo</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-3 py-2 font-bold text-corporate-navy">Significatividad</td>
                <td className="px-3 py-2">¿Expone a un riesgo de impacto alto o medio?</td>
                <td className="px-3 py-2">Se pondera contra la exposición económica horaria declarada en el BIA y contra el efecto sobre los objetivos de recuperación de los procesos medulares.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-2 font-bold text-corporate-navy">Materialidad</td>
                <td className="px-3 py-2">¿Alcanza a un volumen relevante de transacciones, usuarios o activos críticos?</td>
                <td className="px-3 py-2">Se pondera contra el volumen operativo: 180 desembolsos diarios en P1, hasta 14.000 acreditaciones por ventana en P2 y 2.200 gestiones diarias en P3.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold text-corporate-navy">Recurrencia</td>
                <td className="px-3 py-2">¿Es sistemática o constituye un hecho aislado?</td>
                <td className="px-3 py-2">Se distingue entre condiciones estructurales —ausencia de un documento, de una aprobación o de un control— y desvíos puntuales dentro de una población.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-2 font-bold text-corporate-navy">Potencial de mejora</td>
                <td className="px-3 py-2">¿Admite una acción correctiva concreta y verificable?</td>
                <td className="px-3 py-2">Se pondera si existe una corrección definible, con resultado medible, o si la deficiencia solo admite una recomendación genérica.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-bold text-corporate-navy mb-3">2.2 Escala de nivel de riesgo de las observaciones</h3>
        <p className="mb-4">Las observaciones elevadas se califican en escala de tres niveles.</p>

        <div className="overflow-x-auto mb-4">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-3 py-2 text-center font-bold w-24">Nivel</th>
                <th className="px-3 py-2 text-left font-bold">Definición</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-3 py-2 text-center"><span className="px-2 py-1 text-xs font-bold rounded-full bg-red-100 text-red-800">Alto</span></td>
                <td className="px-3 py-2">Impide alcanzar el objetivo de recuperación de un proceso medular, o expone a sanción del regulador, o afecta simultáneamente a los tres procesos medulares.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-2 text-center"><span className="px-2 py-1 text-xs font-bold rounded-full bg-orange-100 text-orange-800">Medio</span></td>
                <td className="px-3 py-2">Degrada la capacidad de recuperación o constituye un incumplimiento observable en inspección, sin impedir por sí solo el cumplimiento de los objetivos.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-center"><span className="px-2 py-1 text-xs font-bold rounded-full bg-yellow-100 text-yellow-800">Bajo</span></td>
                <td className="px-3 py-2">Debilidad de control con efecto acotado sobre la eficiencia operativa, sin impacto financiero ni regulatorio relevante.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r-md">
          <h4 className="text-sm font-bold text-blue-800 mb-1">Por qué esta escala difiere de la utilizada en la planificación</h4>
          <p className="text-sm text-blue-900 mb-0">
            La matriz de la Fase 2 califica riesgos de auditoría —la probabilidad de que una condición adversa exista y no sea detectada— e incorpora un nivel Crítico, porque su función es asignar horas y diseñar pruebas. La escala de esta fase califica observaciones confirmadas por su efecto sobre el negocio, que es la información que necesita la Alta Dirección. Una misma condición puede, en consecuencia, ser Crítica como riesgo de planificación y Media como observación: no hay contradicción, se está midiendo otra cosa.
          </p>
        </div>

        <h3 className="text-lg font-bold text-corporate-navy mb-3">2.3 Escala de complejidad de solución</h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-3 py-2 text-left font-bold w-1/4">Complejidad</th>
                <th className="px-3 py-2 text-left font-bold w-1/2">Definición</th>
                <th className="px-3 py-2 text-left font-bold">Ejemplo</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-3 py-2 font-bold text-green-700">Trivial</td>
                <td className="px-3 py-2">Se resuelve con una decisión de la Alta Dirección y actualización documental. No requiere inversión ni desarrollo.</td>
                <td className="px-3 py-2 text-gray-600">Definir un parámetro, aprobar formalmente un valor ya existente, ratificar un plan vigente.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-2 font-bold text-amber-600">Moderada</td>
                <td className="px-3 py-2">Requiere trabajo técnico o de gestión acotado, con recursos existentes y plazos de semanas.</td>
                <td className="px-3 py-2 text-gray-600">Ejecutar y documentar una prueba, implementar un ciclo de recertificación.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold text-red-600">Compleja</td>
                <td className="px-3 py-2">Requiere proyecto formal, inversión o intervención de terceros, con plazos de meses.</td>
                <td className="px-3 py-2 text-gray-600">Elaborar un plan técnico integral de recuperación.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-bold text-corporate-navy mb-3">2.4 Ausencia de observaciones de nivel Bajo</h3>
        <p>
          Las siete observaciones elevadas se distribuyen en cuatro de nivel Alto y tres de nivel Medio. Que ninguna resulte de nivel Bajo no constituye un defecto de la escala sino el resultado del proceso de selección: las deficiencias de impacto bajo fueron evaluadas y se resolvió no elevarlas, con el fundamento que consta en el apartado 4.2. Elevarlas habría diluido el informe sin aportar información accionable.
        </p>
      </div>
    </div>
  );
};

export default CriteriosSeleccion;
