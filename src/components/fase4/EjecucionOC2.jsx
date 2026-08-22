import { CheckSquare } from 'lucide-react';
import Acordeon from '../Acordeon';

const EjecucionOC2 = () => {
  const pts = [
    {
      ref: 'PT-OC2-01',
      title: 'Frecuencia declarada frente a ejecución real de las copias',
      fecha: '03/07/2026',
      elaborado: 'Celina Abigail Zato Sosa — Auditora (OC-2). Soporte técnico: Leopoldo Gabriel Samaniego — Técnico',
      revisado: 'Auditor Senior Luciano Agustín Donnet',
      area: 'Gestión de copias de seguridad / OC-2',
      objetivo: 'Comparar la frecuencia de resguardo exigida por la política con la ejecución efectivamente registrada, y detectar brechas con impacto sobre los puntos objetivo de recuperación.',
      alcance: 'Universo: 30 ejecuciones de copia total y 120 incrementales del Motor Batch correspondientes a junio de 2026. Se analizó el 100% de la población mediante técnica asistida por computador, sin muestreo.',
      procedimiento: 'Extracción de los logs de ejecución sobre copia de los archivos productivos en ambiente controlado. Conteo de ejecuciones exitosas, fallidas y no iniciadas. Cotejo contra la frecuencia comprometida en la política. Búsqueda de reejecución para cada fallo detectado.',
      evidencia: 'EV-05 — Política de copias y logs de ejecución del Motor Batch.',
      resultado: 'La política declara copia total diaria e incrementales cada seis horas. Sobre las 30 ejecuciones totales del período se identificaron 3 fallos, correspondientes a los días 8, 17 y 26 de junio, sin reejecución documentada dentro de la ventana operativa. Los incrementales se ejecutaron sin excepciones.',
      conclusion: 'DEFICIENTE. La ejecución observada no demuestra cobertura continua. Cada fallo sin reejecución representa hasta 24 horas sin copia total, incompatible con el objetivo de recuperación de los procesos que dependen del Motor Batch. Deriva a PT-OBS-05.',
      normativa: 'BCRA Com. «A» 7777 · ISO/IEC 27002:2022, control 8.13',
      trazabilidad: 'RA-02 y RA-06 → PA-06 y PA-07 → EV-05 → PT-OBS-05'
    },
    {
      ref: 'PT-OC2-02',
      title: 'Almacenamiento fuera del sitio principal',
      fecha: '07/07/2026',
      elaborado: 'Celina Abigail Zato Sosa — Auditora (OC-2). Soporte técnico: César Tomás Delgado — Técnico',
      revisado: 'Auditor Senior Luciano Agustín Donnet',
      area: 'Almacenamiento de copias y sitio alternativo / OC-2',
      objetivo: 'Comprobar que las copias se conserven fuera del centro de procesamiento primario y evaluar si las condiciones del sitio alternativo permiten sostener la recuperación.',
      alcance: '100% de la documentación disponible del sitio alternativo: ficha técnica, contrato y esquema de replicación. No se accedió al sitio físico, por encontrarse fuera del alcance acordado.',
      procedimiento: 'Inspección de la ficha técnica: ubicación, distancia respecto del sitio primario, modalidad de operación, esquema de replicación, cifrado en reposo y capacidad declarada. Verificación de la existencia de pruebas de aislamiento y de restauración desde el sitio alternativo.',
      evidencia: 'EV-06 — Ficha técnica del sitio alternativo.',
      resultado: 'Se acredita un Warm Site a 40 kilómetros del centro primario, con replicación asincrónica y cifrado AES-256 en reposo. El requisito de almacenamiento fuera del sitio principal se cumple. No se acreditó prueba de aislamiento frente a software malicioso ni restauración exitosa ejecutada desde ese repositorio.',
      conclusion: 'ADECUADO CON ALCANCE LIMITADO. El control de almacenamiento externo existe y opera. La evidencia disponible no permite concluir sobre restaurabilidad ni sobre aislamiento, atributos que se evalúan en PT-OC2-03. No genera observación autónoma.',
      normativa: 'BCRA Com. «A» 7777 · ISO/IEC 27002:2022, control 8.13',
      trazabilidad: 'RA-09 → PA-08 → EV-06 → se cruza con PT-OC2-03. No deriva a observación.'
    },
    {
      ref: 'PT-OC2-03',
      title: 'Prueba técnica de restauración',
      fecha: '09/07/2026',
      elaborado: 'Celina Abigail Zato Sosa — Auditora (OC-2). Soporte técnico: Leopoldo Gabriel Samaniego — Técnico',
      revisado: 'Auditor Senior Luciano Agustín Donnet',
      area: 'Recuperación y restauración de datos / OC-2',
      objetivo: 'Verificar la existencia de una prueba de restauración reciente y exitosa, y contrastar los tiempos reales obtenidos contra los objetivos declarados en el BIA.',
      alcance: '100% de los registros de restauración del período 01/06/2025 – 30/06/2026, con extensión de la búsqueda a los doce meses previos ante la ausencia de registros en el período.',
      procedimiento: 'Inspección del registro de pruebas de restauración: fecha, sistemas alcanzados, tiempo insumido, resultado y causa de falla. Búsqueda de prueba exitosa posterior y del plan de acción derivado de la falla registrada.',
      evidencia: 'EV-07 — Registro de pruebas de restauración.',
      resultado: 'La última prueba documentada es del 15/01/2025, anterior al período auditado. Resultó fallida por incompatibilidad de versiones entre el motor de resguardo y el entorno de destino. No se localizó prueba exitosa posterior ni plan de acción que trate la causa identificada.',
      conclusion: 'DEFICIENTE. No se demuestra que las copias puedan restaurarse dentro de los objetivos comprometidos. La única prueba registrada, además de antigua, fue fallida y su causa no fue tratada. Deriva a PT-OBS-06.',
      normativa: 'BCRA Com. «A» 7777 · ISO/IEC 27002:2022, control 8.13 · ISO 22301, cláusula 8.5',
      trazabilidad: 'RA-06 → PA-09 → EV-07 → PT-OBS-06'
    },
    {
      ref: 'PT-OC2-04',
      title: 'Monitoreo y compensación de los fallos de resguardo',
      fecha: '10/07/2026',
      elaborado: 'Celina Abigail Zato Sosa — Auditora (OC-2). Soporte técnico: Leopoldo Gabriel Samaniego — Técnico',
      revisado: 'Auditor Senior Luciano Agustín Donnet',
      area: 'Monitoreo de operaciones de resguardo / OC-2',
      objetivo: 'Determinar si los fallos de resguardo generan alerta, asignación de responsable, reejecución, escalamiento y cierre verificable.',
      alcance: 'Los 3 fallos identificados en PT-OC2-01. Revisión del 100% de los casos, sin muestreo.',
      procedimiento: 'Cruce analítico entre los logs de resguardo, la matriz de alertas operativas y los registros de compensación. Búsqueda, para cada fallo, de alerta generada, ticket asociado, reejecución, escalamiento al responsable o aceptación formal del riesgo.',
      evidencia: 'EV-05 — Logs de ejecución · EV-11 — Matriz de alertas y registros de compensación.',
      resultado: 'Los tres fallos generaron alerta automática, lo que acredita que el mecanismo de detección opera. Ninguno de los tres registra ticket de tratamiento, reejecución, escalamiento ni aceptación formal del riesgo por el responsable del sistema.',
      conclusion: 'DEFICIENTE. La detección funciona pero no se traduce en tratamiento ni en cierre demostrable. Una alerta sin acción documentada no constituye un control efectivo. Refuerza PT-OBS-05.',
      normativa: 'BCRA Com. «A» 7777 · ISO/IEC 27002:2022, controles 8.13 y 8.16',
      trazabilidad: 'RA-06 → PA-07 → EV-05, EV-11 → PT-OBS-05'
    }
  ];

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <CheckSquare className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">3. OC-2 — Gestión de resguardos</h2>
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
              
              <div className={`border-l-4 p-3 rounded-r ${pt.conclusion.includes('ADECUADO CON ALCANCE LIMITADO') ? 'bg-amber-50 border-amber-500 text-amber-900' : 'bg-red-50 border-red-500 text-red-900'}`}>
                <h4 className={`text-sm font-bold mb-1 ${pt.conclusion.includes('ADECUADO CON ALCANCE LIMITADO') ? 'text-amber-800' : 'text-red-800'}`}>Conclusión</h4>
                <p className="text-sm mb-0">{pt.conclusion}</p>
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

export default EjecucionOC2;
