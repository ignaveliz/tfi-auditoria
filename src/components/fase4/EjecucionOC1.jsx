import { CheckSquare } from 'lucide-react';
import Acordeon from '../Acordeon';

const EjecucionOC1 = () => {
  const pts = [
    {
      ref: 'PT-OC1-01',
      title: 'Vigencia y aprobación del BCP',
      fecha: '03/07/2026',
      elaborado: 'Belén Iara Román — Auditora (OC-1)',
      revisado: 'Auditor Senior Luciano Agustín Donnet',
      area: 'Continuidad del negocio / OC-1',
      objetivo: 'Verificar que el Plan de Continuidad del Negocio se encuentre vigente, formalmente aprobado por la autoridad competente y revisado dentro del ciclo no mayor a doce meses exigido por la normativa.',
      alcance: 'Revisión documental del 100% de las versiones del BCP puestas a disposición y de las actas de aprobación asociadas. Sin muestreo.',
      procedimiento: 'Inspección del acta de aprobación, de la versión vigente del BCP y de su historial de cambios. Cotejo de la antigüedad de la última aprobación contra la fecha de corte del encargo y contra el ciclo de revisión que el propio plan establece.',
      evidencia: 'EV-01 — Acta de aprobación del BCP v2.4, de fecha 10/04/2025.',
      resultado: 'Al 30/06/2026 la última aprobación registra 14 meses y 20 días de antigüedad. No se exhibió aprobación posterior, ratificación del Directorio ni control de vencimiento cerrado. El propio BCP fija revisión anual o ante modificaciones mayores de la arquitectura, condición que tampoco se cumplió pese a los cambios del período.',
      conclusion: 'NO ADECUADO. La vigencia y el mantenimiento del BCP no quedan demostrados dentro del ciclo exigido ni del que el propio plan establece. Deriva a PT-OBS-01.',
      normativa: 'BCRA Com. «A» 7777 — Continuidad del negocio · ISO/IEC 27002:2022, control 5.29 · ISO 22301, cláusula 8.4',
      trazabilidad: 'RA-04 → PA-01 → EV-01 → PT-OBS-01'
    },
    {
      ref: 'PT-OC1-02',
      title: 'Definición y aprobación formal de MTPD, RTO y RPO',
      fecha: '06/07/2026',
      elaborado: 'Belén Iara Román — Auditora (OC-1)',
      revisado: 'Auditor Senior Luciano Agustín Donnet',
      area: 'Análisis de Impacto al Negocio / OC-1',
      objetivo: 'Comprobar que cada proceso medular tenga MTPD, RTO y RPO definidos, cuantificados y formalmente aprobados por la Alta Dirección.',
      alcance: 'Los tres procesos medulares (P1, P2 y P3), sobre el 100% de los parámetros declarados en el BIA y en el BCP. Nueve parámetros evaluados.',
      procedimiento: 'Inspección de la tabla de objetivos del BIA. Cotejo parámetro por parámetro contra los valores del BCP. Búsqueda de acta de aprobación que resuelva las diferencias y de constancia de cuantificación de cada valor.',
      evidencia: 'EV-02 — Tabla de objetivos del BIA · EV-12 — Reconciliación documental.',
      resultado: 'P2 no presenta RPO cuantificado: el valor consignado es «último lote validado», expresión cualitativa que no permite contrastarse contra la política de copias. El RTO de P2 figura en el BCP como valor operativo tentativo, en revisión y no aprobado formalmente. P2 y P3 presentan además valores divergentes entre el BIA y el BCP. P1 es el único proceso cuyos parámetros coinciden entre ambos documentos.',
      conclusion: 'NO ADECUADO. La ausencia de un RPO cuantificado y de aprobación formal para P2 impide derivar una estrategia de resguardo exigible y verificable. Deriva a PT-OBS-02 y se cruza con PT-XC-01.',
      normativa: 'BCRA Com. «A» 7777 · ISO 22301, cláusula 8.2.2 · ISO/IEC 27002:2022, controles 5.29 y 5.30',
      trazabilidad: 'RA-02 y RA-05 → PA-02 → EV-02, EV-12 → PT-OBS-02'
    },
    {
      ref: 'PT-OC1-03',
      title: 'Aprobación, cobertura y suficiencia técnica del DRP',
      fecha: '07/07/2026',
      elaborado: 'Belén Iara Román — Auditora (OC-1). Soporte técnico: César Tomás Delgado — Técnico',
      revisado: 'Auditor Senior Luciano Agustín Donnet',
      area: 'Plan de Recuperación ante Desastres / OC-1',
      objetivo: 'Determinar si el DRP se encuentra aprobado por la autoridad competente, si comprende la totalidad de los componentes que soportan a los procesos medulares y si sus tiempos técnicos resultan compatibles con los objetivos de recuperación declarados en el BIA.',
      alcance: 'Revisión del 100% del documento CF-DRP-2024-10 versión 1.0, de sus siete sistemas declarados y de sus tres procedimientos técnicos. Cotejo contra las actas del Comité de Gobierno de Tecnología del período y contra la tabla de objetivos del BIA.',
      procedimiento: 'Inspección del historial de versiones y búsqueda del acta de aprobación. Verificación de los atributos mínimos: versión, aprobación, criterios de activación, secuencia técnica, roles y articulación con el sitio alternativo. Cotejo de la matriz de sistemas comprendidos contra las dependencias declaradas en el BIA. Comparación de los tiempos estimados de cada procedimiento técnico contra el RTO del proceso que soporta.',
      evidencia: 'EV-03 — DRP CF-DRP-2024-10 v1.0 y actas del Comité de Gobierno de Tecnología.',
      resultado: 'El documento existe, está versionado y define tres procedimientos técnicos de recuperación. Se verificaron tres condiciones no adecuadas. Primera: permanece en versión 1.0 sin aprobación formal; elevado al Comité el 19/11/2024, su tratamiento se difirió hasta contar con los resultados de un ejercicio de recuperación que no registra ejecución. Segunda: no comprende al sistema de gestión de identidades, que el BIA identifica como prerrequisito de los cinco procesos con un RTO efectivo de 15 minutos, ni a la plataforma de CRM que soporta a P3. Tercera: los tiempos estimados de PTR-01 (de 2 a 4 horas) y de PTR-02 (de 3 a 6 horas) exceden los RTO declarados para P1 (1 hora) y P2 (2 horas).',
      conclusion: 'NO ADECUADO. La existencia del documento no suple su falta de aprobación: un plan no ratificado no resulta exigible al área técnica ni verificable por auditoría. A ello se suma que excluye a la dependencia transversal de la que depende la totalidad del marco y que declara, en su propio texto, tiempos incompatibles con los objetivos comprometidos. Deriva a PT-OBS-03.',
      normativa: 'BCRA Com. «A» 7777 · ISO/IEC 27002:2022, control 5.30 · ISO 22301, cláusulas 8.2 y 8.3',
      trazabilidad: 'RA-07 → PA-01 y PA-03 → EV-03 → PT-OBS-03'
    },
    {
      ref: 'PT-OC1-04',
      title: 'Ejercicio integral de continuidad',
      fecha: '08/07/2026',
      elaborado: 'Belén Iara Román — Auditora (OC-1)',
      revisado: 'Auditor Senior Luciano Agustín Donnet',
      area: 'Ejercicios y pruebas de continuidad / OC-1',
      objetivo: 'Verificar que en los doce meses previos a la fecha de corte se haya ejecutado y documentado al menos un ejercicio integral de continuidad.',
      alcance: '100% del cronograma anual de ejercicios y de las actas del período 01/06/2025 – 30/06/2026.',
      procedimiento: 'Inspección del cronograma anual, de las actas de ejecución, de los informes de resultado, de las lecciones aprendidas y de los planes de acción derivados. Búsqueda de reprogramación formal para los ejercicios no ejecutados.',
      evidencia: 'EV-04 — Registro anual de ejercicios y simulacros.',
      resultado: 'El simulacro de caída integral del centro de procesamiento, previsto para noviembre de 2025, figura postergado sin fecha de reprogramación. No se localizó acta de ejecución, informe de resultado ni plan de acción para el período. El BCP prevé un simulacro anual con participación de TI y capacitación semestral al personal; ninguno de los dos registra ejecución.',
      conclusion: 'NO ADECUADO. La capacidad de recuperación declarada no fue validada empíricamente en el período. Los tiempos objetivo del BIA permanecen sin verificación práctica. Deriva a PT-OBS-04.',
      normativa: 'BCRA Com. «A» 7777 · ISO/IEC 27002:2022, controles 5.29 y 5.30 · ISO 22301, cláusula 8.5',
      trazabilidad: 'RA-06 → PA-04 → EV-04 → PT-OBS-04'
    },
    {
      ref: 'PT-OC1-05',
      title: 'Evaluación de los tres escenarios de contingencia',
      fecha: '15/07/2026',
      elaborado: 'Luciano Agustín Donnet — Auditor Senior. Soporte técnico: César Tomás Delgado y Nadia Enoa Rizo Avalos — Técnicos',
      revisado: 'Mariana Saavedra, CISA — Líder de Proyecto',
      area: 'Escenarios de contingencia / OC-1, con efecto sobre OC-2 y OC-3',
      objetivo: 'Contrastar la respuesta prevista en el BCP y en el DRP frente a los tres escenarios disruptivos acordados con la entidad, con la respuesta que resultaría exigible conforme a los objetivos declarados en el BIA, y valorar la suficiencia de cada una.',
      alcance: 'Los tres escenarios definidos de común acuerdo con la entidad: E1 falla de los servidores principales, E2 incendio en la sala de servidores y E3 ataque de ransomware sobre el procesamiento por lotes. Se evaluó el 100% de los procedimientos de contingencia operativa (PCO-01 a PCO-03) y de recuperación técnica (PTR-01 a PTR-03) declarados en el marco vigente. Sin muestreo.',
      procedimiento: 'Walkthrough documental y entrevista con el Coordinador General de Continuidad y con Administración de Infraestructura. Construcción de una matriz de contraste de tres planos por escenario: respuesta prevista en el marco vigente, respuesta exigible según el BIA y brecha verificada. Cotejo del tiempo estimado de cada procedimiento técnico contra el RTO del proceso que soporta, y de la ventana de indisponibilidad estimada por el BIA contra el MTPD de los procesos alcanzados. No se ejecutaron pruebas sobre entornos productivos.',
      evidencia: 'EV-03 — DRP CF-DRP-2024-10 v1.0 · EV-06 — Ficha técnica del sitio alternativo · EV-13 — Matriz de contraste de escenarios (elaboración propia del equipo).',
      resultado: 'E1 — Los tiempos estimados de PTR-01 (de 2 a 4 horas) y de PTR-02 (de 3 a 6 horas) exceden los RTO declarados para P1 (1 hora) y P2 (2 horas). El IAM, prerrequisito de la secuencia, carece de procedimiento y de tiempo estimado. La replicación hacia el sitio alternativo es asincrónica con ventana declarada de 4 horas, incompatible con el RPO de 0 minutos de P1. E2 — La ventana de indisponibilidad estimada por el propio BIA (de 4 a 24 horas) excede el MTPD de los cinco procesos críticos. El enlace del sitio alternativo con las cámaras de compensación se encuentra pendiente de contratación, de modo que la cadena de recuperación queda interrumpida en su tramo de liquidación. El Warm Site no registra prueba de aislamiento ni restauración ejecutada desde su repositorio, y su capacidad del 60% no cuenta con criterio documentado de priorización. E3 — Los repositorios de resguardo se encuentran accesibles desde la red de producción, sin aislamiento ni inmutabilidad, de modo que el evento alcanzaría al medio de recuperación. El punto de restauración disponible puede registrar hasta 24 horas de antigüedad conforme a PT-OC2-01, la única prueba de restauración del Motor Batch resultó fallida conforme a PT-OC2-03, y el RPO de P2 no está cuantificado.',
      conclusion: 'NO ADECUADO. Ninguno de los tres escenarios cuenta con una respuesta suficiente: E1 se valora como respuesta insuficiente, E2 como respuesta parcial no validada y E3 como respuesta no efectiva, por cuanto en este último el propio mecanismo de recuperación quedaría comprometido por el evento. Las tres valoraciones se apoyan en condiciones ya documentadas en PT-OC1-03, PT-OC1-04, PT-OC2-01, PT-OC2-03 y PT-OC3-03, razón por la cual este papel no genera observación autónoma y refuerza PT-OBS-03, PT-OBS-04 y PT-OBS-06.',
      normativa: 'BCRA Com. «A» 7777 y «A» 7783 · ISO/IEC 27002:2022, controles 5.29, 5.30 y 8.13 · ISO 22301, cláusulas 8.3 y 8.5',
      trazabilidad: 'RA-07 y RA-09 → PA-05 → EV-03, EV-06, EV-13 → PT-OBS-03, PT-OBS-04 y PT-OBS-06'
    }
  ];

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <CheckSquare className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">2. OC-1 — Continuidad del negocio</h2>
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

export default EjecucionOC1;
