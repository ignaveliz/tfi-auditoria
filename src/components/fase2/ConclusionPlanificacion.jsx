import { CheckCircle, Clock } from 'lucide-react';
import Acordeon from '../Acordeon';

const ConclusionPlanificacion = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <CheckCircle className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">8. Conclusión de la etapa de planificación</h2>
      </div>

      <div className="prose max-w-none text-gray-700">
        <p className="mb-4">
          La planificación queda cerrada y la etapa de ejecución habilitada. El ambiente de control se calificó en <strong>76,67%, nivel de confianza ALTO —a 1,67 puntos del piso de la banda—</strong>, lo que sustenta una estrategia de predominio de pruebas de cumplimiento con ampliación dirigida sobre políticas, vigencia documental y rendición de cuentas.
        </p>
        <p className="mb-4">
          El relevamiento del marco de continuidad permite anticipar dónde se concentrará el trabajo. Los tres procesos medulares cuentan con plan documentado —el marco existe—, pero cinco condiciones de nivel crítico afectan su capacidad real de recuperación: el objetivo de recuperación de P2 es lógicamente inalcanzable en su ventana de pago, el punto de recuperación de ese mismo proceso no está cuantificado ni aprobado, el componente del que dependen los tres procesos queda fuera del gobierno de la continuidad, el plan que los contiene lleva catorce meses sin revisión, y el plan técnico que debe sostenerlo carece de aprobación formal y declara tiempos superiores a los objetivos comprometidos.
        </p>
        
        <div className="bg-corporate-gray p-5 rounded-lg border text-sm mt-6 mb-8">
          <p className="mb-0">
            <strong>Las cinco son verificables sobre documentación.</strong> Ninguna exige inversión en infraestructura para corregirse: se resuelven definiendo parámetros, elevándolos a aprobación de la Alta Dirección y restableciendo el ciclo de revisión que la propia normativa interna de la entidad ya prevé. Esa es la conclusión con mayor valor práctico de esta etapa —la brecha principal de Crédito Fácil S.A. no está en su tecnología sino en el mantenimiento y la formalización de instrumentos que ya construyó—.
          </p>
        </div>

        <h3 className="text-xl font-bold text-corporate-navy mt-6 mb-4 flex items-center gap-2 border-b pb-2">
          <Clock className="h-5 w-5" /> 8.1 Condiciones pendientes al cierre de la planificación
        </h3>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-amber-50 text-amber-900">
              <tr>
                <th className="px-3 py-2 text-center font-bold w-12">#</th>
                <th className="px-3 py-2 text-left font-bold">Condición</th>
                <th className="px-3 py-2 text-left font-bold w-48">Responsable</th>
                <th className="px-3 py-2 text-left font-bold">Efecto si no se resuelve</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-3 py-2 text-center font-bold">1</td>
                <td className="px-3 py-2">Entrega del acta de aprobación del DRP (E-02) o confirmación formal de que el plan no fue aprobado</td>
                <td className="px-3 py-2">Gerencia de Operaciones y Tecnología</td>
                <td className="px-3 py-2 text-gray-600">Se documenta como ausencia de control, no como limitación al alcance</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-center font-bold">2</td>
                <td className="px-3 py-2">Entrega de la evidencia de simulacros y pruebas de restauración (E-05)</td>
                <td className="px-3 py-2">Gerencia de Operaciones y Tecnología</td>
                <td className="px-3 py-2 text-gray-600">OC-1 y OC-2 concluyen sobre la base de la ausencia de evidencia</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default ConclusionPlanificacion;
