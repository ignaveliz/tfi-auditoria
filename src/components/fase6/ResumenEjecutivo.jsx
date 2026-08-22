import { Target, CheckCircle, List, AlertTriangle, Lightbulb, Map } from 'lucide-react';

const ResumenEjecutivo = () => {
  return (
    <div>
      {/* A.2 Propósito y alcance */}
      <section id="a2-proposito" className="scroll-mt-24 mb-12 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Target className="h-8 w-8 text-corporate-blue" />
          <h2 className="text-2xl font-bold text-corporate-navy">A.2 Propósito y alcance</h2>
        </div>
        
        <div className="prose max-w-none text-gray-700">
          <p className="mb-4">
            La auditoría tuvo por propósito determinar si la entidad está en condiciones de sostener sus servicios y de recuperar su información ante una interrupción, dentro de los plazos que ella misma se comprometió a cumplir y que el Banco Central exige verificar. Se examinaron los tres procesos que constituyen el núcleo del negocio —liquidación de créditos, acreditación de sueldos y atención al cliente online— y el sistema de gestión de identidades, del que los tres dependen. Homebanking y tesorería se revisaron sólo sobre documentación.
          </p>
          <p>
            El trabajo se organizó en torno a tres preguntas: si los planes de continuidad existen, están aprobados y vigentes; si las copias de seguridad se ejecutan y pueden efectivamente restaurarse; y si el entorno de recuperación conserva los mismos controles de acceso que el habitual. Para responderlas se aplicó un cuestionario del ambiente de control de treinta preguntas y se analizaron poblaciones completas de registros —ciento cincuenta ejecuciones de copia y ochenta y siete cuentas del entorno alternativo— sin recurrir a muestreo.
          </p>
        </div>
      </section>

      {/* A.3 Conclusión general */}
      <section id="a3-conclusion" className="scroll-mt-24 mb-12 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <CheckCircle className="h-8 w-8 text-corporate-blue" />
          <h2 className="text-2xl font-bold text-corporate-navy">A.3 Conclusión general sobre el ambiente de tecnología</h2>
        </div>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-6 shadow-sm">
          <h3 className="text-lg font-bold text-yellow-800 mb-2">AMBIENTE DE TECNOLOGÍA CON OBSERVACIONES</h3>
          <p className="text-yellow-900 mb-0">
            La entidad cuenta con un marco de continuidad construido, con un análisis de impacto de buena factura y con una estructura de gobierno tecnológico que funciona. Lo que no puede demostrar es que ese marco esté vigente, aprobado en su totalidad y probado. Ninguna de las siete observaciones señala la ausencia de un control que la entidad nunca concibió: en todos los casos existe un instrumento que, por falta de mantenimiento, de aprobación formal o de verificación, no llega a operar como control efectivo.
          </p>
        </div>

        <div className="prose max-w-none text-gray-700">
          <p>
            La consecuencia práctica es favorable para la entidad: ninguna de las siete observaciones requiere inversión en infraestructura. Tres se resuelven con una decisión de la Alta Dirección y una actualización documental; las cuatro restantes exigen trabajo técnico acotado, con recursos existentes y plazos de semanas. El ambiente de control obtuvo 76,67 % de controles satisfactorios sobre treinta evaluados —nivel de confianza ALTO, en el tramo inferior de su banda—: la solidez se concentra en la estructura de gobierno; la debilidad, en el mantenimiento del cuerpo normativo y en la rendición de cuentas sobre lo que se declara ejecutado.
          </p>
        </div>
      </section>

      {/* A.4 Cuadro resumen */}
      <section id="a4-cuadro" className="scroll-mt-24 mb-12 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <List className="h-8 w-8 text-corporate-blue" />
          <h2 className="text-2xl font-bold text-corporate-navy">A.4 Cuadro resumen de observaciones</h2>
        </div>
        
        <p className="text-gray-700 mb-6">
          Distribución. Cuatro observaciones de nivel Alto y tres de nivel Medio; ninguna de nivel Bajo. Por complejidad: tres triviales, cuatro moderadas, ninguna compleja. Por objetivo de control: cuatro en continuidad, dos en resguardos y una en seguridad lógica. Se documentaron además cinco controles que operan adecuadamente.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-4 py-3 text-left font-bold">Ref.</th>
                <th className="px-4 py-3 text-left font-bold">Observación</th>
                <th className="px-4 py-3 text-center font-bold">Riesgo</th>
                <th className="px-4 py-3 text-left font-bold">Qué significa para el negocio</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium whitespace-nowrap text-gray-900">OBS-02</td>
                <td className="px-4 py-3 text-gray-700">Objetivos de recuperación de la Acreditación de Sueldos no cuantificados ni aprobados</td>
                <td className="px-4 py-3 text-center"><span className="bg-red-100 text-red-800 px-2 py-1 rounded font-bold text-xs uppercase">Alto</span></td>
                <td className="px-4 py-3 text-gray-700">Ante una caída en un día de pago no se sabe cuánta información puede perderse ni en cuánto tiempo debe volver a operar: 14.000 personas y 40 empresas convenio.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium whitespace-nowrap text-gray-900">OBS-03</td>
                <td className="px-4 py-3 text-gray-700">Plan de Recuperación ante Desastres sin aprobación, con cobertura parcial y tiempos incompatibles</td>
                <td className="px-4 py-3 text-center"><span className="bg-red-100 text-red-800 px-2 py-1 rounded font-bold text-xs uppercase">Alto</span></td>
                <td className="px-4 py-3 text-gray-700">El plan técnico no está aprobado y declara demoras mayores que los plazos comprometidos. Tampoco cubre el sistema de identidades.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium whitespace-nowrap text-gray-900">OBS-04</td>
                <td className="px-4 py-3 text-gray-700">El ejercicio integral de continuidad no se ejecutó</td>
                <td className="px-4 py-3 text-center"><span className="bg-red-100 text-red-800 px-2 py-1 rounded font-bold text-xs uppercase">Alto</span></td>
                <td className="px-4 py-3 text-gray-700">Los tiempos de recuperación declarados nunca se midieron: son una estimación, no una capacidad demostrada.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium whitespace-nowrap text-gray-900">OBS-06</td>
                <td className="px-4 py-3 text-gray-700">La recuperabilidad de las copias de seguridad no está acreditada</td>
                <td className="px-4 py-3 text-center"><span className="bg-red-100 text-red-800 px-2 py-1 rounded font-bold text-xs uppercase">Alto</span></td>
                <td className="px-4 py-3 text-gray-700">La única prueba registrada, de enero de 2025, falló y no se corrigió: se guardan copias que nadie demostró poder restaurar.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium whitespace-nowrap text-gray-900">OBS-01</td>
                <td className="px-4 py-3 text-gray-700">El Plan de Continuidad opera fuera de su ciclo de revisión</td>
                <td className="px-4 py-3 text-center"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded font-bold text-xs uppercase">Medio</span></td>
                <td className="px-4 py-3 text-gray-700">Lleva más de catorce meses sin revisarse, en un período en que la arquitectura cambió. Incumplimiento verificable por el regulador.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium whitespace-nowrap text-gray-900">OBS-05</td>
                <td className="px-4 py-3 text-gray-700">Fallos de copia sin tratamiento ni compensación documentada</td>
                <td className="px-4 py-3 text-center"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded font-bold text-xs uppercase">Medio</span></td>
                <td className="px-4 py-3 text-gray-700">El sistema avisa cuando una copia falla, pero nadie deja constancia de haber actuado. Un aviso sin acción no protege.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium whitespace-nowrap text-gray-900">OBS-07</td>
                <td className="px-4 py-3 text-gray-700">Accesos de emergencia y cuentas sin trazabilidad en el entorno de recuperación</td>
                <td className="px-4 py-3 text-center"><span className="bg-orange-100 text-orange-800 px-2 py-1 rounded font-bold text-xs uppercase">Medio</span></td>
                <td className="px-4 py-3 text-gray-700">Durante una recuperación no sería posible saber quién hizo qué, justo cuando se ejercen más privilegios con menos supervisión.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* A.5 Riesgos principales */}
      <section id="a5-riesgos" className="scroll-mt-24 mb-12 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="h-8 w-8 text-corporate-blue" />
          <h2 className="text-2xl font-bold text-corporate-navy">A.5 Los tres riesgos principales</h2>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm border-l-4 border-l-red-500">
            <h4 className="font-bold text-lg text-corporate-navy flex items-center gap-2 mb-2">
              <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
              Riesgo no dimensionado
            </h4>
            <p className="text-gray-700 mb-0">
              La entidad no puede dimensionar su propia pérdida en el proceso de mayor visibilidad externa. La acreditación de haberes mueve hasta 14.000 pagos para 40 empresas convenio en tres horas, con $58.000.000 por hora de exposición, y no hay valor aprobado que indique cuánta información puede perderse ni en cuánto tiempo debe restablecerse. Sin ese valor no puede exigirse un resultado a Tecnología.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm border-l-4 border-l-red-500">
            <h4 className="font-bold text-lg text-corporate-navy flex items-center gap-2 mb-2">
              <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
              Incapacidad admitida documentalmente
            </h4>
            <p className="text-gray-700 mb-0">
              La documentación de la propia entidad admite que no puede cumplir lo prometido: el plan técnico estima de dos a cuatro horas para restablecer el sistema central contra un compromiso de una, y de tres a seis para el procesamiento de haberes contra un compromiso de dos. Cualquier inspección detecta la contradicción cotejando dos documentos internos.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm border-l-4 border-l-red-500">
            <h4 className="font-bold text-lg text-corporate-navy flex items-center gap-2 mb-2">
              <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
              Falta de validación empírica
            </h4>
            <p className="text-gray-700 mb-0">
              La capacidad de recuperación nunca fue probada: el simulacro previsto para noviembre de 2025 se postergó sin nueva fecha y la única prueba de restauración registrada falló y no se corrigió. El marco entero descansa sobre estimaciones que ningún ejercicio validó.
            </p>
          </div>
        </div>
      </section>

      {/* A.6 Recomendaciones */}
      <section id="a6-recomendaciones" className="scroll-mt-24 mb-12 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Lightbulb className="h-8 w-8 text-corporate-blue" />
          <h2 className="text-2xl font-bold text-corporate-navy">A.6 Recomendaciones estratégicas</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-4 py-3 text-center font-bold w-12">#</th>
                <th className="px-4 py-3 text-left font-bold">Recomendación</th>
                <th className="px-4 py-3 text-left font-bold w-32">Horizonte</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-center font-bold text-corporate-navy">1</td>
                <td className="px-4 py-3 text-gray-700">Aprobar formalmente lo que ya existe: los parámetros de recuperación de la acreditación de haberes y el Plan de Recuperación ante Desastres están escritos pero no ratificados. Exige una decisión del Comité y un acta, no inversión.</td>
                <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">30 a 60 días</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-center font-bold text-corporate-navy">2</td>
                <td className="px-4 py-3 text-gray-700">Probar antes de declarar. Ningún tiempo de recuperación debería figurar en un documento aprobado sin haber sido medido: corresponde una prueba acotada en el corto plazo y un simulacro integral dentro del ejercicio.</td>
                <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">90 a 180 días</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-center font-bold text-corporate-navy">3</td>
                <td className="px-4 py-3 text-gray-700">Cerrar el ciclo de gobierno documental. Designar un responsable del calendario de vencimientos, con alerta anticipada y reporte al Directorio. Hoy el vencimiento de un documento no dispara ninguna acción.</td>
                <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">45 días</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-center font-bold text-corporate-navy">4</td>
                <td className="px-4 py-3 text-gray-700">Extender el marco a lo que queda afuera: el sistema de identidades y los procesos de homebanking y tesorería, con $335.000.000 por hora de exposición, no tienen plan documentado.</td>
                <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">Ciclo 2026-2027</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-center font-bold text-corporate-navy">5</td>
                <td className="px-4 py-3 text-gray-700">Llevar la continuidad al tablero de la Dirección: estado de vigencia de los planes, resultado de las pruebas de restauración y fallos de resguardo con su estado de cierre, para no depender de la iniciativa del área ejecutora.</td>
                <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">60 días</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* A.7 Próximos pasos */}
      <section id="a7-pasos" className="scroll-mt-24 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Map className="h-8 w-8 text-corporate-blue" />
          <h2 className="text-2xl font-bold text-corporate-navy">A.7 Próximos pasos</h2>
        </div>
        
        <ul className="list-disc pl-5 space-y-3 text-gray-700">
          <li><strong>Reunión de cierre</strong> con el Directorio y la Gerencia General el 30 de julio de 2026, con presentación del Análisis de Impacto al Negocio.</li>
          <li><strong>Plan de acción formal</strong> de la entidad, con responsable y plazo por observación, dentro de los quince días corridos de recibido este informe.</li>
          <li><strong>Revisión de avance</strong> a los noventa días sobre las observaciones de complejidad trivial, que deberían estar cerradas en ese plazo.</li>
          <li><strong>Verificación de cierre</strong> a los ciento ochenta días sobre OC-1 y OC-2, con foco en el ejercicio de continuidad y la prueba de restauración, y comunicación del estado de regularización al Comité de Auditoría.</li>
        </ul>
      </section>

    </div>
  );
};

export default ResumenEjecutivo;
