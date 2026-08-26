import { ClipboardCheck, BarChart, AlertTriangle } from 'lucide-react';
import Acordeon from '../Acordeon';

const EvaluacionAmbiente = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <ClipboardCheck className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">2. Evaluación del ambiente de control (CEAC)</h2>
      </div>

      <div className="prose max-w-none text-gray-700">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded border">
            <h4 className="font-bold text-corporate-navy mb-2">Datos de aplicación del instrumento</h4>
            <ul className="text-sm space-y-1">
              <li><strong>Instrumento:</strong> Cuestionario CEAC — 30 preguntas, 9 dimensiones</li>
              <li><strong>Entidad auditada:</strong> Financiera Crédito Fácil S.A.</li>
              <li><strong>Responsable entrevistado:</strong> C.P. Alberto Dorigatthi — Jefe División Liquidación de Créditos, con participación del CISO</li>
              <li><strong>Auditor responsable:</strong> Auditor Senior Luciano Agustín Donnet</li>
              <li><strong>Fecha de aplicación:</strong> 02/07/2026</li>
              <li><strong>Ref.:</strong> CEAC-2026-VAN-01</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded border">
            <h4 className="font-bold text-corporate-navy mb-2">Escala de calificación</h4>
            <ul className="text-sm space-y-1">
              <li><strong>S (Satisfactorio):</strong> el control existe, está documentado y opera consistentemente.</li>
              <li><strong>P (Parcial):</strong> el control existe pero presenta deficiencias de diseño, documentación o aplicación.</li>
              <li><strong>N (No satisfactorio):</strong> el control no existe o no opera.</li>
              <li><strong>N/A (No aplica)</strong></li>
              <li><strong>N/V (No verificado):</strong> no se obtuvo evidencia suficiente para calificar.</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold text-corporate-navy mb-4 border-b pb-2 flex items-center gap-2">
          <BarChart className="h-5 w-5" /> 2.2 Resultados por dimensión
        </h3>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full divide-y divide-gray-200 border text-sm text-center">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-3 py-2 text-left font-bold">Dimensión</th>
                <th className="px-3 py-2 font-bold">Total</th>
                <th className="px-3 py-2 font-bold text-green-600">S</th>
                <th className="px-3 py-2 font-bold text-amber-500">P</th>
                <th className="px-3 py-2 font-bold text-red-500">N</th>
                <th className="px-3 py-2 font-bold text-gray-500">N/A</th>
                <th className="px-3 py-2 font-bold text-blue-500">N/V</th>
                <th className="px-3 py-2 font-bold">% S</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr><td className="text-left px-3 py-2 font-medium">A. Integridad y valores éticos</td><td>4</td><td>3</td><td>1</td><td>0</td><td>0</td><td>0</td><td>75,0%</td></tr>
              <tr><td className="text-left px-3 py-2 font-medium">B. Competencia del personal de TI</td><td>4</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>100,0%</td></tr>
              <tr><td className="text-left px-3 py-2 font-medium">C. Filosofía y estilo operativo de la dirección</td><td>3</td><td>2</td><td>1</td><td>0</td><td>0</td><td>0</td><td>66,7%</td></tr>
              <tr><td className="text-left px-3 py-2 font-medium">D. Estructura organizacional y responsabilidades</td><td>4</td><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td><td>100,0%</td></tr>
              <tr><td className="text-left px-3 py-2 font-medium">E. Políticas, estándares y procedimientos de TI</td><td>3</td><td>1</td><td>2</td><td>0</td><td>0</td><td>0</td><td>33,3%</td></tr>
              <tr><td className="text-left px-3 py-2 font-medium">F. Gestión de RR. HH. en TI</td><td>3</td><td>3</td><td>0</td><td>0</td><td>0</td><td>0</td><td>100,0%</td></tr>
              <tr><td className="text-left px-3 py-2 font-medium">G. Supervisión y rendición de cuentas</td><td>4</td><td>2</td><td>1</td><td>0</td><td>0</td><td>1</td><td>50,0%</td></tr>
              <tr><td className="text-left px-3 py-2 font-medium">H. Gestión del riesgo de TI</td><td>2</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>100,0%</td></tr>
              <tr><td className="text-left px-3 py-2 font-medium">I. Comunicación e información para el control</td><td>3</td><td>2</td><td>0</td><td>0</td><td>0</td><td>1</td><td>66,7%</td></tr>
            </tbody>
            <tfoot className="bg-gray-100 font-bold">
              <tr>
                <td className="text-left px-3 py-2">Total CEAC</td>
                <td className="px-3 py-2">30</td>
                <td className="px-3 py-2 text-green-600">23</td>
                <td className="px-3 py-2 text-amber-500">5</td>
                <td className="px-3 py-2 text-red-500">0</td>
                <td className="px-3 py-2 text-gray-500">0</td>
                <td className="px-3 py-2 text-blue-500">2</td>
                <td className="px-3 py-2">76,67%</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <Acordeon title="2.3 Calificaciones inferiores a satisfactorio">
          <div className="overflow-x-auto mt-2 mb-4">
            <table className="min-w-full divide-y divide-gray-200 border text-sm">
              <thead className="bg-gray-100 text-corporate-navy">
                <tr>
                  <th className="px-3 py-2 text-center font-bold">N.°</th>
                  <th className="px-3 py-2 text-center font-bold">Dim.</th>
                  <th className="px-3 py-2 text-center font-bold">Calif.</th>
                  <th className="px-3 py-2 text-left font-bold">Hallazgo</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr><td className="px-3 py-2 text-center">2</td><td className="px-3 py-2 text-center">A</td><td className="px-3 py-2 text-center text-amber-600 font-bold">P</td><td className="px-3 py-2">El Código de Ética y la Política de Seguridad regulan el uso aceptable de sistemas, datos y credenciales, e incorporan un capítulo de trabajo remoto. Sin embargo, no extienden ese marco a los recursos del entorno de contingencia —sitio alternativo y cuentas de acceso de emergencia— ni alcanzan a los procesos P4 y P5, que carecen de plan de continuidad documentado.</td></tr>
                <tr><td className="px-3 py-2 text-center">9</td><td className="px-3 py-2 text-center">C</td><td className="px-3 py-2 text-center text-amber-600 font-bold">P</td><td className="px-3 py-2">La Alta Dirección formalizó su compromiso mediante la aprobación de la Política de Seguridad de la Información, pero el cuerpo normativo registra 14 meses sin revisión ni ratificación formal del Directorio, en desvío del ciclo anual exigido por la Com. «A» 7777. La difusión es pasiva.</td></tr>
                <tr><td className="px-3 py-2 text-center">16</td><td className="px-3 py-2 text-center">E</td><td className="px-3 py-2 text-center text-amber-600 font-bold">P</td><td className="px-3 py-2">El inventario de políticas cubre los dominios requeridos, pero la política de gestión de incidentes de ciberseguridad se encuentra en versión borrador sin aprobación del Comité, y los procedimientos aplicables a los entornos de contingencia no registran versión aprobada vigente.</td></tr>
                <tr><td className="px-3 py-2 text-center">18</td><td className="px-3 py-2 text-center">E</td><td className="px-3 py-2 text-center text-amber-600 font-bold">P</td><td className="px-3 py-2">El Manual de Procedimientos Operativos y las políticas asociadas presentan una desactualización superior a 18 meses frente a cambios regulatorios y de arquitectura ocurridos en el período.</td></tr>
                <tr><td className="px-3 py-2 text-center">23</td><td className="px-3 py-2 text-center">G</td><td className="px-3 py-2 text-center text-amber-600 font-bold">P</td><td className="px-3 py-2">Existe una metodología formal de autoevaluación de control (CSA), pero su ejecución es declarativa: no hay validación cruzada ni contraste con evidencia técnica. El alcance omitió componentes críticos y los desvíos autodetectados no derivan en planes de acción con responsable y plazo.</td></tr>
                <tr><td className="px-3 py-2 text-center">25</td><td className="px-3 py-2 text-center">G</td><td className="px-3 py-2 text-center text-blue-600 font-bold">N/V</td><td className="px-3 py-2">No fue posible obtener evidencia sobre el seguimiento y cierre de las observaciones de auditorías de TI anteriores: el legajo (E-14) no fue puesto a disposición.</td></tr>
                <tr><td className="px-3 py-2 text-center">30</td><td className="px-3 py-2 text-center">I</td><td className="px-3 py-2 text-center text-blue-600 font-bold">N/V</td><td className="px-3 py-2">Existen registros de campañas de concientización, pero no se obtuvo evidencia de medición formal de su efectividad (E-16).</td></tr>
              </tbody>
            </table>
          </div>
        </Acordeon>

        <h3 className="text-xl font-bold text-corporate-navy mt-8 mb-4 border-b pb-2">2.4 Determinación del nivel de confianza</h3>
        
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-center md:w-1/3">
              <span className="block text-4xl font-bold text-corporate-blue">76,67%</span>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Nivel de Confianza Alto</span>
            </div>
            <div className="md:w-2/3 text-sm text-gray-700 space-y-2">
              <p><strong>Fórmula:</strong> Porcentaje de controles satisfactorios = S / total de controles aplicables evaluados × 100.</p>
              <p><strong>Cálculo:</strong> 23 S / 30 controles aplicables × 100 = 76,67%.</p>
              <p><strong>Denominador:</strong> Las 30 preguntas resultan aplicables al universo P1-P5. Las calificaciones Parcial no computan como satisfactorias. Los dos ítems No Verificado permanecen en el denominador: representan una limitación de evidencia, no un control que opere adecuadamente.</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-corporate-navy mt-6 mb-4 flex items-center gap-2 border-b pb-2">
          <AlertTriangle className="h-5 w-5" /> 2.5g Conclusión sobre el ambiente de control
        </h3>
        <p className="mb-4">
          El ambiente de control de Crédito Fácil S.A. presenta un <strong>diseño de gobierno sólido en su dimensión estructural</strong>: la ubicación de TI en el organigrama garantiza independencia, la segregación de funciones está formalizada e incluye el esquema maker-checker de Tesorería, el CISO cuenta con designación formal y línea de reporte propia, la revocación de accesos ante desvinculación opera de manera automatizada y verificada, y la metodología de gestión de riesgos de TI está aprobada y con propietarios asignados.
        </p>
        <p className="mb-4">
          La debilidad se concentra, con nitidez, en el <strong>mantenimiento del cuerpo normativo y en los mecanismos de rendición de cuentas</strong>. Las políticas existen pero envejecen sin revisión —14 meses la PSI, más de 18 los procedimientos operativos—, en un período en el que la arquitectura de la entidad cambió. Las autoevaluaciones se ejecutan de manera declarativa y sin validación independiente, y no fue posible acreditar que las observaciones de auditorías anteriores hayan sido cerradas.
        </p>
        <div className="bg-corporate-gray p-4 rounded-md border text-sm">
          <strong>Efecto sobre el encargo:</strong> El marco de continuidad de la entidad no falla por ausencia de diseño, sino por <em>falta de mantenimiento y de verificación del diseño existente</em>. Es exactamente el tipo de debilidad que un BCP desactualizado y una prueba de restauración nunca ejecutada materializan. Por eso las pruebas sustantivas de OC-1 y OC-2 se amplían sobre vigencia documental, aprobación formal y evidencia de ejecución, antes que sobre la existencia de los instrumentos.
        </div>

      </div>
    </div>
  );
};

export default EvaluacionAmbiente;
