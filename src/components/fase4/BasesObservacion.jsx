import { AlertCircle } from 'lucide-react';
import Acordeon from '../Acordeon';

const BasesObservacion = () => {
  const pts = [
    {
      ref: 'PT-OBS-01',
      title: 'Base de observación — BCP fuera del ciclo de revisión exigido',
      fecha: '17/07/2026',
      elaborado: 'Belén Iara Román — Auditora (OC-1)',
      revisado: 'Luciano Agustín Donnet — Auditor Senior. Conformidad: Mariana Saavedra, CISA',
      area: 'Continuidad del negocio / OC-1',
      objetivo: 'Consolidar la condición, la evidencia y el riesgo que sustentan una observación sobre la vigencia del Plan de Continuidad del Negocio.',
      alcance: 'Deriva de PT-OC1-01. Alcanza a los tres procesos medulares cubiertos por el BCP v2.4.',
      procedimiento: 'Revisión de PT-OC1-01, verificación de la fecha del acta de aprobación y cálculo del tiempo transcurrido hasta la fecha de corte. Identificación del criterio aplicable y de los elementos que deberá completar la Fase 5.',
      evidencia: 'EV-01 — Acta de aprobación del BCP v2.4. Papel de origen: PT-OC1-01.',
      resultado: 'La última aprobación del BCP registra 14 meses y 20 días al 30/06/2026. No se exhibió aprobación posterior. El desvío se verifica tanto contra el ciclo de doce meses exigido por la normativa como contra el ciclo anual que el propio plan establece.',
      conclusion: 'DEFICIENTE — soporte suficiente para elevar a observación. La Fase 5 deberá completar causa, efecto y recomendación.',
      normativa: 'BCRA Com. «A» 7777 · ISO/IEC 27002:2022, control 5.29',
      trazabilidad: 'RA-04 → PA-01 → EV-01 → PT-OC1-01 → PT-OBS-01 → ficha NCCCE en Fase 5'
    },
    {
      ref: 'PT-OBS-02',
      title: 'Base de observación — RPO de P2 sin cuantificar y RTO sin aprobación formal',
      fecha: '17/07/2026',
      elaborado: 'Belén Iara Román — Auditora (OC-1)',
      revisado: 'Luciano Agustín Donnet — Auditor Senior. Conformidad: Mariana Saavedra, CISA',
      area: 'Análisis de Impacto al Negocio / OC-1',
      objetivo: 'Consolidar la ausencia de un punto objetivo de recuperación cuantificado para la Acreditación de Sueldos y su efecto sobre el diseño de la estrategia de resguardo.',
      alcance: 'Deriva de PT-OC1-02 y PT-XC-01. Alcanza al proceso P2.',
      procedimiento: 'Cruce de PT-OC1-02 con PT-XC-01. Separación entre los valores declarados en documentos no aprobados y los formalmente ratificados. Registro de las divergencias sin adoptar una fuente como prevalente.',
      evidencia: 'EV-02 — Tabla del BIA · EV-12 — Reconciliación documental. Papeles de origen: PT-OC1-02 y PT-XC-01.',
      resultado: 'El RPO de P2 se expresa como «último lote validado», sin traducción a una unidad de tiempo contrastable contra la política de copias. El RTO figura en el BCP como valor tentativo, en revisión y no aprobado por la Alta Dirección. No existe acta que ratifique un valor único.',
      conclusion: 'DEFICIENTE — soporte suficiente para elevar a observación. La Fase 5 deberá cuantificar el alcance sobre el volumen de acreditaciones expuesto y evitar tratar un valor no aprobado como vigente.',
      normativa: 'BCRA Com. «A» 7777 · ISO 22301, cláusula 8.2.2 · ISO/IEC 27002:2022, control 8.13',
      trazabilidad: 'RA-02 → PA-02 y PA-06 → EV-02, EV-12 → PT-OC1-02 → PT-OBS-02 → ficha NCCCE en Fase 5'
    },
    {
      ref: 'PT-OBS-03',
      title: 'Base de observación — DRP sin aprobación formal, con cobertura parcial y tiempos incompatibles',
      fecha: '18/07/2026',
      elaborado: 'Belén Iara Román — Auditora (OC-1)',
      revisado: 'Luciano Agustín Donnet — Auditor Senior. Conformidad: Mariana Saavedra, CISA',
      area: 'Plan de Recuperación ante Desastres / OC-1',
      objetivo: 'Consolidar las tres condiciones deficientes verificadas sobre el Plan de Recuperación ante Desastres, distinguiéndolas expresamente de una hipótesis de inexistencia del documento.',
      alcance: 'Deriva de PT-OC1-03. Alcanza al documento CF-DRP-2024-10 versión 1.0 en su totalidad.',
      procedimiento: 'Revisión de PT-OC1-03. Separación de las tres condiciones por naturaleza: falta de aprobación formal, cobertura incompleta de componentes y tiempos técnicos superiores a los objetivos comprometidos. Verificación de que ninguna de ellas dependa de las otras dos.',
      evidencia: 'EV-03 — DRP CF-DRP-2024-10 v1.0 y actas del Comité. Papel de origen: PT-OC1-03.',
      resultado: 'El Plan existe y fue elaborado el 22/08/2024, pero permanece en versión 1.0 sin aprobación del Comité de Gobierno de Tecnología ni del Directorio. No comprende al sistema de gestión de identidades ni a la plataforma de CRM. Los tiempos estimados de sus procedimientos PTR-01 y PTR-02 exceden los RTO declarados en el BIA para los procesos que dichos sistemas soportan.',
      conclusion: 'DEFICIENTE — soporte suficiente para elevar a observación. La ficha de la Fase 5 deberá reconocer expresamente la existencia del documento y abstenerse de afirmar su ausencia, por cuanto el descargo del área auditada previsiblemente invocará esa circunstancia.',
      normativa: 'BCRA Com. «A» 7777 · ISO/IEC 27002:2022, control 5.30 · ISO 22301, cláusulas 8.2 y 8.3',
      trazabilidad: 'RA-07 → PA-01 y PA-03 → EV-03 → PT-OC1-03 → PT-OBS-03 → ficha NCCCE en Fase 5'
    },
    {
      ref: 'PT-OBS-04',
      title: 'Base de observación — ejercicio integral de continuidad no ejecutado',
      fecha: '18/07/2026',
      elaborado: 'Belén Iara Román — Auditora (OC-1)',
      revisado: 'Luciano Agustín Donnet — Auditor Senior. Conformidad: Mariana Saavedra, CISA',
      area: 'Ejercicios y pruebas de continuidad / OC-1',
      objetivo: 'Consolidar la ausencia de un ejercicio integral ejecutado y documentado dentro del período auditado.',
      alcance: 'Deriva de PT-OC1-04. Alcanza al conjunto del marco de continuidad de los tres procesos medulares.',
      procedimiento: 'Inspección de PT-OC1-04 y búsqueda de fecha de reprogramación, acta de ejecución, informe de resultados, lecciones aprendidas y acciones correctivas.',
      evidencia: 'EV-04 — Registro anual de ejercicios. Papel de origen: PT-OC1-04.',
      resultado: 'El ejercicio previsto para noviembre de 2025 figura postergado sin reprogramación. No se localizó ejecución, resultado ni plan de acción. La capacitación semestral prevista tampoco registra ejecución en el período.',
      conclusion: 'DEFICIENTE — soporte suficiente para elevar a observación. Los tiempos objetivo declarados permanecen sin validación empírica.',
      normativa: 'BCRA Com. «A» 7777 · ISO/IEC 27002:2022, controles 5.29 y 5.30',
      trazabilidad: 'RA-06 → PA-04 → EV-04 → PT-OC1-04 → PT-OBS-04 → ficha NCCCE en Fase 5'
    },
    {
      ref: 'PT-OBS-05',
      title: 'Base de observación — fallos de resguardo sin tratamiento ni compensación',
      fecha: '20/07/2026',
      elaborado: 'Celina Abigail Zato Sosa — Auditora (OC-2)',
      revisado: 'Luciano Agustín Donnet — Auditor Senior. Conformidad: Mariana Saavedra, CISA',
      area: 'Resguardos y monitoreo / OC-2',
      objetivo: 'Consolidar la evidencia de fallos de resguardo y la ausencia de tratamiento, reejecución o aceptación formal del riesgo.',
      alcance: 'Deriva de PT-OC2-01 y PT-OC2-04. Alcanza a las 30 ejecuciones de copia total de junio de 2026, con 3 fallos identificados sobre el 100% de la población.',
      procedimiento: 'Cruce de PT-OC2-01 con PT-OC2-04. Verificación, para cada uno de los tres fallos, de la existencia de alerta, ticket, reejecución, escalamiento o aceptación documentada.',
      evidencia: 'EV-05 — Logs de ejecución · EV-11 — Matriz de alertas. Papeles de origen: PT-OC2-01 y PT-OC2-04.',
      resultado: 'Los tres fallos generaron alerta automática pero ninguno registra tratamiento posterior. La detección opera; el cierre no se demuestra en ningún caso.',
      conclusion: 'DEFICIENTE — soporte suficiente para elevar a observación. La Fase 5 deberá calcular el efecto sobre el punto objetivo de recuperación una vez definido el RPO de P2, hoy pendiente conforme a PT-OBS-02.',
      normativa: 'BCRA Com. «A» 7777 · ISO/IEC 27002:2022, controles 8.13 y 8.16',
      trazabilidad: 'RA-06 → PA-07 → EV-05, EV-11 → PT-OC2-01 y PT-OC2-04 → PT-OBS-05 → ficha NCCCE en Fase 5'
    },
    {
      ref: 'PT-OBS-06',
      title: 'Base de observación — última prueba de restauración antigua y fallida',
      fecha: '20/07/2026',
      elaborado: 'Celina Abigail Zato Sosa — Auditora (OC-2)',
      revisado: 'Luciano Agustín Donnet — Auditor Senior. Conformidad: Mariana Saavedra, CISA',
      area: 'Recuperación de datos / OC-2',
      objetivo: 'Consolidar la ausencia de una prueba de restauración reciente y exitosa que acredite la recuperabilidad efectiva de las copias.',
      alcance: 'Deriva de PT-OC2-03. Alcanza al 100% de los registros de restauración del período, con búsqueda extendida a los doce meses previos.',
      procedimiento: 'Revisión de PT-OC2-03. Verificación de fecha, resultado y causa de falla del último registro, y búsqueda de prueba exitosa posterior y del plan de acción derivado.',
      evidencia: 'EV-07 — Registro de pruebas de restauración. Papel de origen: PT-OC2-03.',
      resultado: 'La única prueba documentada es del 15/01/2025, anterior al período auditado, y resultó fallida por incompatibilidad de versiones. La causa identificada no registra tratamiento posterior.',
      conclusion: 'DEFICIENTE — soporte suficiente para elevar a observación. La restaurabilidad de las copias no está acreditada, con independencia de que el almacenamiento externo sí lo esté conforme a PT-OC2-02.',
      normativa: 'BCRA Com. «A» 7777 · ISO/IEC 27002:2022, control 8.13',
      trazabilidad: 'RA-06 → PA-09 → EV-07 → PT-OC2-03 → PT-OBS-06 → ficha NCCCE en Fase 5'
    },
    {
      ref: 'PT-OBS-07',
      title: 'Base de observación — accesos de emergencia y cuentas genéricas sin gobierno',
      fecha: '21/07/2026',
      elaborado: 'Ignacio Martín Veliz — Auditor (OC-3)',
      revisado: 'Luciano Agustín Donnet — Auditor Senior. Conformidad: Mariana Saavedra, CISA',
      area: 'Seguridad lógica en contingencia / OC-3',
      objetivo: 'Consolidar las deficiencias de control sobre los accesos excepcionales y las cuentas sin trazabilidad individual del entorno de contingencia.',
      alcance: 'Deriva de PT-OC3-02, PT-OC3-03 y PT-OC3-04. Alcanza a las 2 activaciones de emergencia y a las 87 cuentas del inventario, revisadas al 100%.',
      procedimiento: 'Consolidación de los tres papeles de origen. Agrupamiento de los desvíos por naturaleza: ausencia de autorización previa y de revisión posterior, existencia de cuentas sin trazabilidad individual, y falta de recertificación y de gobierno de las excepciones.',
      evidencia: 'EV-08 — Matriz de accesos · EV-09 — Registro de activaciones · EV-10 — Inventario del IAM. Papeles de origen: PT-OC3-02, 03 y 04.',
      resultado: 'El uso de la cuenta de emergencia quedó registrado pero sin autorización previa ni revisión posterior. Dos cuentas —una genérica y una de servicio— operan activas sin multifactor, sin excepción aprobada y sin propietario. No se acredita un ciclo de recertificación completo sobre el universo de contingencia.',
      conclusion: 'DEFICIENTE — soporte suficiente para elevar a observación. Los tres desvíos comparten causa aparente y admiten una recomendación única, según lo previsto en la metodología de la Fase 2.',
      normativa: 'BCRA Com. «A» 7783 y «A» 7724 · ISO/IEC 27002:2022, controles 5.15, 5.16, 5.18 y 8.2',
      trazabilidad: 'RA-08 → PA-11, PA-12 y PA-13 → EV-08, EV-09, EV-10 → PT-OC3-02, 03, 04 → PT-OBS-07 → ficha NCCCE en Fase 5'
    }
  ];

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <AlertCircle className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">6. Papeles de observación</h2>
      </div>

      <div className="prose max-w-none text-gray-700 mb-6">
        <p>
          Cada papel de observación consolida un desvío confirmado: la condición constatada, la evidencia que la respalda, el criterio vulnerado y el riesgo de la matriz que materializa. Constituye la base sobre la que la Fase 5 desarrollará la ficha NCCCE completa, con causa, efecto cuantificado y recomendación.
        </p>
      </div>

      <div className="space-y-4">
        {pts.map((pt, idx) => (
          <Acordeon key={idx} title={`${pt.ref} · ${pt.title}`}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="col-span-1 bg-gray-50 p-3 rounded">
                <span className="block text-xs text-gray-500 uppercase font-bold mb-1">Fecha</span>
                <span className="text-sm font-medium">{pt.fecha}</span>
              </div>
              <div className="col-span-1 md:col-span-3 bg-gray-50 p-3 rounded">
                <span className="block text-xs text-gray-500 uppercase font-bold mb-1">Elaborado por</span>
                <span className="text-sm font-medium">{pt.elaborado}</span>
              </div>
              <div className="col-span-1 md:col-span-2 bg-gray-50 p-3 rounded">
                <span className="block text-xs text-gray-500 uppercase font-bold mb-1">Revisado por</span>
                <span className="text-sm font-medium">{pt.revisado}</span>
              </div>
              <div className="col-span-1 md:col-span-2 bg-gray-50 p-3 rounded">
                <span className="block text-xs text-gray-500 uppercase font-bold mb-1">Área / OC auditado</span>
                <span className="text-sm font-medium">{pt.area}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">Objetivo del PT</h4>
                <p className="text-sm text-gray-700">{pt.objetivo}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">Alcance y universo</h4>
                <p className="text-sm text-gray-700">{pt.alcance}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">Procedimiento aplicado</h4>
                <p className="text-sm text-gray-700">{pt.procedimiento}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">Evidencia obtenida</h4>
                <p className="text-sm text-gray-700">{pt.evidencia}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">Resultado</h4>
                <p className="text-sm text-gray-700">{pt.resultado}</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-r">
                <h4 className="text-sm font-bold text-red-800 mb-1">Conclusión</h4>
                <p className="text-sm text-red-900 mb-0">{pt.conclusion}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2 mt-4">Referencia normativa</h4>
                <p className="text-sm text-gray-700">{pt.normativa}</p>
              </div>
              <div className="bg-gray-100 p-3 rounded text-center">
                <span className="text-xs font-bold text-gray-500 uppercase mr-2">Trazabilidad:</span>
                <span className="text-sm font-mono bg-white px-2 py-1 rounded border shadow-sm">{pt.trazabilidad}</span>
              </div>
            </div>
          </Acordeon>
        ))}
      </div>
    </div>
  );
};

export default BasesObservacion;
