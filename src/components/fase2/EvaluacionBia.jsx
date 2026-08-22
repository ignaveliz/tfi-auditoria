import { Activity, Clock, CheckCircle2, XCircle } from 'lucide-react';

const EvaluacionBia = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Activity className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">4. Evaluación del Análisis de Impacto al Negocio</h2>
      </div>

      <div className="prose max-w-none text-gray-700">
        <p className="mb-6">
          Este apartado evalúa la consistencia metodológica del BIA, la razonabilidad de los objetivos declarados y su correspondencia con el resto del marco de continuidad. Constituye el entregable N.° 4 comprometido en la Propuesta de Auditoría y es el material que se expondrá ante la Gerencia General en la instancia de validación.
        </p>

        <h3 className="text-xl font-bold text-corporate-navy mt-6 mb-4 border-b pb-2">4.1 Procesos críticos y objetivos declarados</h3>
        <p className="mb-4 text-sm">
          El BIA identifica cinco procesos críticos. Los tres primeros —P1, P2 y P3— son los procesos medulares y constituyen el universo de pruebas del encargo; P4 y P5 se incorporan al análisis de impacto y a la cadena de recuperación, y se cubren por vía documental.
        </p>
        
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-3 py-2 text-left font-bold">Proceso</th>
                <th className="px-3 py-2 text-center font-bold">MTPD</th>
                <th className="px-3 py-2 text-center font-bold">RTO</th>
                <th className="px-3 py-2 text-center font-bold">RPO</th>
                <th className="px-3 py-2 text-right font-bold">Impacto por hora</th>
                <th className="px-3 py-2 text-right font-bold">% del total</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr><td className="px-3 py-2 font-medium">P1 — Liquidación de Créditos</td><td className="px-3 py-2 text-center">2 h</td><td className="px-3 py-2 text-center">1 h</td><td className="px-3 py-2 text-center">0 min</td><td className="px-3 py-2 text-right">$27.000.000</td><td className="px-3 py-2 text-right">6,4%</td></tr>
              <tr><td className="px-3 py-2 font-medium">P2 — Acreditación de Sueldos</td><td className="px-3 py-2 text-center">4 h (1 h en fecha de pago)</td><td className="px-3 py-2 text-center">2 h</td><td className="px-3 py-2 text-center">Último lote validado</td><td className="px-3 py-2 text-right">$58.000.000</td><td className="px-3 py-2 text-right">13,7%</td></tr>
              <tr><td className="px-3 py-2 font-medium">P3 — Atención al Cliente Online</td><td className="px-3 py-2 text-center">6 h</td><td className="px-3 py-2 text-center">4 h</td><td className="px-3 py-2 text-center">1 h</td><td className="px-3 py-2 text-right">$2.750.000</td><td className="px-3 py-2 text-right">0,7%</td></tr>
              <tr className="bg-gray-50"><td className="px-3 py-2 font-medium">P4 — Transferencias por Homebanking</td><td className="px-3 py-2 text-center">1 h</td><td className="px-3 py-2 text-center">30 min</td><td className="px-3 py-2 text-center">0 min</td><td className="px-3 py-2 text-right">$122.500.000</td><td className="px-3 py-2 text-right">29,0%</td></tr>
              <tr className="bg-gray-50"><td className="px-3 py-2 font-medium">P5 — Tesorería y Pagos Interbancarios</td><td className="px-3 py-2 text-center">2 h</td><td className="px-3 py-2 text-center">1 h</td><td className="px-3 py-2 text-center">15 min</td><td className="px-3 py-2 text-right">$212.500.000</td><td className="px-3 py-2 text-right">50,3%</td></tr>
            </tbody>
            <tfoot className="bg-gray-100 font-bold text-corporate-navy">
              <tr>
                <td className="px-3 py-2">Total</td><td className="px-3 py-2 text-center">—</td><td className="px-3 py-2 text-center">—</td><td className="px-3 py-2 text-center">—</td><td className="px-3 py-2 text-right">$422.750.000</td><td className="px-3 py-2 text-right">100%</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-8"><strong>Nota sobre la escala de impacto:</strong> La cuantificación concentra el 79% de la exposición horaria en P4 y P5. Dado que ambos quedan fuera del universo de pruebas, esa concentración no redirige el esfuerzo de auditoría, pero sí constituye un elemento que corresponde elevar a la Alta Dirección.</p>

        <h3 className="text-xl font-bold text-corporate-navy mt-6 mb-4 flex items-center gap-2 border-b pb-2">
          <Clock className="h-5 w-5" /> 4.2 Cadena de recuperación declarada
        </h3>
        <p className="mb-4 text-sm">El BIA establece la siguiente secuencia de restablecimiento, que la auditoría considera técnicamente bien fundada por reflejar dependencias reales y no jerarquías organizativas:</p>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-3 py-2 text-center font-bold">Orden</th>
                <th className="px-3 py-2 text-left font-bold">Componente</th>
                <th className="px-3 py-2 text-center font-bold">RTO</th>
                <th className="px-3 py-2 text-left font-bold">Fundamento declarado</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="bg-amber-50"><td className="px-3 py-2 text-center font-bold">0</td><td className="px-3 py-2 font-medium">IAM (prerrequisito)</td><td className="px-3 py-2 text-center">15 min</td><td className="px-3 py-2">Ningún proceso medular puede recuperarse si el control de accesos no está disponible</td></tr>
              <tr><td className="px-3 py-2 text-center font-bold">1</td><td className="px-3 py-2">P4 — Homebanking</td><td className="px-3 py-2 text-center">30 min</td><td className="px-3 py-2">Opera 24/7, con máxima visibilidad para el cliente y SLA regulatorios estrictos</td></tr>
              <tr><td className="px-3 py-2 text-center font-bold">2</td><td className="px-3 py-2">P1 — Liquidación de Créditos</td><td className="px-3 py-2 text-center">1 h</td><td className="px-3 py-2">Transaccionalidad en tiempo real con impacto contable inmediato</td></tr>
              <tr><td className="px-3 py-2 text-center font-bold">3</td><td className="px-3 py-2">P5 — Tesorería</td><td className="px-3 py-2 text-center">1 h</td><td className="px-3 py-2">Habilita la liquidación de las operaciones originadas en P1, P2 y P4</td></tr>
              <tr><td className="px-3 py-2 text-center font-bold">4</td><td className="px-3 py-2">P2 — Acreditación de Sueldos</td><td className="px-3 py-2 text-center">2 h</td><td className="px-3 py-2">Impacto concentrado en la ventana de pago</td></tr>
              <tr><td className="px-3 py-2 text-center font-bold">5</td><td className="px-3 py-2">P3 — Atención al Cliente Online</td><td className="px-3 py-2 text-center">4 h</td><td className="px-3 py-2">Mitigable con canales alternativos de contingencia</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-corporate-navy mt-6 mb-4 border-b pb-2">4.3 Consistencia interna de los objetivos</h3>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-3 py-2 text-left font-bold">Proceso</th>
                <th className="px-3 py-2 text-center font-bold">MTPD</th>
                <th className="px-3 py-2 text-center font-bold">RTO</th>
                <th className="px-3 py-2 text-center font-bold">Margen</th>
                <th className="px-3 py-2 text-center font-bold">Resultado</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr><td className="px-3 py-2">P1</td><td className="px-3 py-2 text-center">2 h</td><td className="px-3 py-2 text-center">1 h</td><td className="px-3 py-2 text-center">1 h</td><td className="px-3 py-2 text-center text-green-600 font-medium">Consistente</td></tr>
              <tr><td className="px-3 py-2">P2 — operación habitual</td><td className="px-3 py-2 text-center">4 h</td><td className="px-3 py-2 text-center">2 h</td><td className="px-3 py-2 text-center">2 h</td><td className="px-3 py-2 text-center text-green-600 font-medium">Consistente</td></tr>
              <tr className="bg-red-50"><td className="px-3 py-2 font-medium text-red-800">P2 — ventana de fecha de pago</td><td className="px-3 py-2 text-center text-red-800">1 h</td><td className="px-3 py-2 text-center text-red-800">2 h</td><td className="px-3 py-2 text-center text-red-800 font-bold">−1 h</td><td className="px-3 py-2 text-center text-red-600 font-bold">Inconsistente</td></tr>
              <tr><td className="px-3 py-2">P3</td><td className="px-3 py-2 text-center">6 h</td><td className="px-3 py-2 text-center">4 h</td><td className="px-3 py-2 text-center">2 h</td><td className="px-3 py-2 text-center text-green-600 font-medium">Consistente</td></tr>
              <tr><td className="px-3 py-2">P4</td><td className="px-3 py-2 text-center">1 h</td><td className="px-3 py-2 text-center">30 min</td><td className="px-3 py-2 text-center">30 min</td><td className="px-3 py-2 text-center text-green-600 font-medium">Consistente</td></tr>
              <tr><td className="px-3 py-2">P5</td><td className="px-3 py-2 text-center">2 h</td><td className="px-3 py-2 text-center">1 h</td><td className="px-3 py-2 text-center">1 h</td><td className="px-3 py-2 text-center text-green-600 font-medium">Consistente</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm bg-red-100 p-3 rounded text-red-900 mb-8 border-l-4 border-red-500">
          <strong>El objetivo de recuperación de P2 es inalcanzable por definición en su ventana crítica.</strong> El BIA fija para P2 un MTPD condicional de 1 hora en fechas de pago y un RTO de 2 horas. En esa ventana, el tiempo objetivo de recuperación duplica el tiempo máximo de interrupción tolerable. Corresponde definir un RTO diferenciado para la ventana de pago, no superior a 45 minutos.
        </p>

        <h3 className="text-xl font-bold text-corporate-navy mt-6 mb-4 border-b pb-2">4.4 Consistencia entre el BIA y el BCP</h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-3 py-2 text-left font-bold">Proceso</th>
                <th className="px-3 py-2 text-left font-bold">Parámetro</th>
                <th className="px-3 py-2 text-left font-bold">Valor en el BIA</th>
                <th className="px-3 py-2 text-left font-bold">Valor en el BCP</th>
                <th className="px-3 py-2 text-center font-bold">Situación</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr><td className="px-3 py-2">P1</td><td className="px-3 py-2">RTO / RPO</td><td className="px-3 py-2">1 h / 0 min</td><td className="px-3 py-2">1 h / 0 h</td><td className="px-3 py-2 text-center text-green-600"><CheckCircle2 className="inline h-4 w-4" /></td></tr>
              <tr className="bg-amber-50"><td className="px-3 py-2">P2</td><td className="px-3 py-2">MTPD</td><td className="px-3 py-2">4 h (1 h en fecha de pago)</td><td className="px-3 py-2">8 h</td><td className="px-3 py-2 text-center text-amber-600"><XCircle className="inline h-4 w-4" /></td></tr>
              <tr className="bg-amber-50"><td className="px-3 py-2">P2</td><td className="px-3 py-2">RTO</td><td className="px-3 py-2">2 h</td><td className="px-3 py-2">4 h (tentativo, no aprobado)</td><td className="px-3 py-2 text-center text-amber-600"><XCircle className="inline h-4 w-4" /></td></tr>
              <tr className="bg-amber-50"><td className="px-3 py-2">P2</td><td className="px-3 py-2">RPO</td><td className="px-3 py-2">Último lote validado</td><td className="px-3 py-2">No definido</td><td className="px-3 py-2 text-center text-amber-600"><XCircle className="inline h-4 w-4" /></td></tr>
              <tr className="bg-amber-50"><td className="px-3 py-2">P3</td><td className="px-3 py-2">MTPD</td><td className="px-3 py-2">6 h</td><td className="px-3 py-2">2 h (consultas generales)</td><td className="px-3 py-2 text-center text-amber-600"><XCircle className="inline h-4 w-4" /></td></tr>
              <tr className="bg-amber-50"><td className="px-3 py-2">P3</td><td className="px-3 py-2">RTO</td><td className="px-3 py-2">4 h</td><td className="px-3 py-2">1 h (líneas de fraude)</td><td className="px-3 py-2 text-center text-amber-600"><XCircle className="inline h-4 w-4" /></td></tr>
              <tr><td className="px-3 py-2">P3</td><td className="px-3 py-2">RPO</td><td className="px-3 py-2">1 h</td><td className="px-3 py-2">1 h</td><td className="px-3 py-2 text-center text-green-600"><CheckCircle2 className="inline h-4 w-4" /></td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-corporate-navy mt-6 mb-4 border-b pb-2">4.5 Factibilidad técnica de los objetivos</h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-3 py-2 text-left font-bold">Proceso</th>
                <th className="px-3 py-2 text-left font-bold">Objetivo</th>
                <th className="px-3 py-2 text-left font-bold">Veredicto del BIA</th>
                <th className="px-3 py-2 text-left font-bold">Consecuencia para la auditoría</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr><td className="px-3 py-2 font-medium">P1</td><td className="px-3 py-2">RTO 1 h / RPO 0</td><td className="px-3 py-2">Condicionada: exige Core en configuración activo-activo y replicación síncrona; de lo contrario debería revisarse a 2-3 horas</td><td className="px-3 py-2 text-gray-600">Verificar la configuración real del Core (PA-03, PA-09)</td></tr>
              <tr><td className="px-3 py-2 font-medium">P2</td><td className="px-3 py-2">RTO 2 h / RPO último lote</td><td className="px-3 py-2">Viable si los archivos firmados se almacenan en repositorio separado del servidor de procesamiento</td><td className="px-3 py-2 text-gray-600">Verificar la separación efectiva del repositorio (PA-08)</td></tr>
              <tr><td className="px-3 py-2 font-medium">P3</td><td className="px-3 py-2">RTO 4 h / RPO 1 h</td><td className="px-3 py-2">Viable: el CRM en modalidad SaaS ofrece disponibilidad y snapshots frecuentes</td><td className="px-3 py-2 text-gray-600">Verificación documental sobre SLA del proveedor (PA-03)</td></tr>
              <tr><td className="px-3 py-2 font-medium">P4</td><td className="px-3 py-2">RTO 30 min / RPO 0</td><td className="px-3 py-2">Agresivo pero alcanzable con switch activo-activo y failover automático; requiere inversión significativa</td><td className="px-3 py-2 text-gray-600">Verificar redundancia del switch transaccional (PA-03, PA-09)</td></tr>
              <tr><td className="px-3 py-2 font-medium">P5</td><td className="px-3 py-2">RTO 1 h / RPO 15 min</td><td className="px-3 py-2">Razonable salvo en la ventana 13:00-15:00, donde el MTPD efectivo se comprime antes del cierre del BCRA</td><td className="px-3 py-2 text-gray-600">Verificar la existencia del protocolo de escalamiento acelerado (PA-03)</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-corporate-navy mt-6 mb-4 border-b pb-2">4.6 Conclusión sobre el BIA</h3>
        <p className="mb-4">
          El BIA es, en su concepción, un documento sólido: identifica correctamente los procesos críticos, cuantifica el impacto económico por hora, establece una cadena de recuperación fundada en dependencias técnicas reales, reconoce al IAM como riesgo sistémico y somete sus propios objetivos a un análisis de factibilidad. En ese sentido supera claramente al BCP, que es el instrumento desactualizado del marco.
        </p>
        <p className="mb-4">
          Sus debilidades son tres y todas admiten corrección documental:
        </p>
        <ol className="list-decimal pl-5 space-y-2 mb-4">
          <li>La <strong>inconsistencia lógica del RTO de P2</strong> en la ventana de pago.</li>
          <li>El <strong>reconocimiento del IAM como dependencia crítica sin traducirlo en objetivos</strong> de recuperación formalmente aprobados, lo que deja al componente del que dependen los cinco procesos fuera del gobierno de la continuidad.</li>
          <li>La <strong>expresión cualitativa del RPO de P2</strong> —«último lote validado»—, que si bien es conceptualmente correcta, no es cuantificable ni contrastable contra una política de copias, y por lo tanto no permite verificar su cumplimiento.</li>
        </ol>
        <p className="mb-4">
          Ninguna de las tres debilidades exige inversión en infraestructura. Las tres se resuelven definiendo, documentando y elevando a aprobación de la Alta Dirección parámetros que hoy están incompletos o son internamente contradictorios.
        </p>

      </div>
    </div>
  );
};

export default EvaluacionBia;
