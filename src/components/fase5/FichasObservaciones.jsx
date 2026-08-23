import { AlertTriangle, AlertCircle } from 'lucide-react';
import Acordeon from '../Acordeon';

const FichasObservaciones = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <AlertTriangle className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">5. Observaciones elevadas — fichas NCCCE</h2>
      </div>

      <div className="prose max-w-none text-gray-700 mb-8">
        <p className="mb-4">
          Las siete observaciones se presentan ordenadas por nivel de riesgo y, dentro de cada nivel, según el orden en que la Dirección debería atenderlas. Cada ficha responde a la estructura N-C-C-C-E: norma o criterio vulnerado, condición constatada, causa que la origina, consecuencia para el negocio y recomendación.
        </p>

        <div className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded-r-md">
          <h4 className="text-sm font-bold text-gray-800 mb-1">Dos precisiones de redacción</h4>
          <p className="text-sm text-gray-700 mb-0">
            Las observaciones se refieren a procesos y controles, no a personas: ninguna ficha individualiza responsables por nombre. Y las recomendaciones enuncian qué debe corregirse, no quién ni con qué proveedor debe hacerlo: el Código de Ética de la firma prohíbe ofrecer servicios de implementación derivados de las propias recomendaciones.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
        <AlertCircle className="h-5 w-5" /> 5.1 Observaciones de nivel Alto
      </h3>
      
      <div className="space-y-4 mb-10">
        <Acordeon title="OBS-02 · Objetivos de recuperación de la Acreditación de Sueldos no cuantificados ni aprobados formalmente" defaultOpen={false}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="col-span-1 bg-red-50 border border-red-100 p-3 rounded text-center">
              <span className="block text-xs text-red-800 uppercase font-bold mb-1">Nivel de riesgo</span>
              <span className="text-sm font-bold text-red-600">ALTO</span>
            </div>
            <div className="col-span-1 bg-green-50 border border-green-100 p-3 rounded text-center">
              <span className="block text-xs text-green-800 uppercase font-bold mb-1">Complejidad</span>
              <span className="text-sm font-bold text-green-700">Trivial</span>
            </div>
            <div className="col-span-1 md:col-span-2 bg-gray-50 p-3 rounded">
              <span className="block text-xs text-gray-500 uppercase font-bold mb-1">Objetivo de control</span>
              <span className="text-sm font-medium">OC-1 — Continuidad del negocio · con efecto sobre OC-2</span>
            </div>
          </div>
          
          <div className="bg-gray-50 p-3 rounded mb-4 text-sm">
            <span className="font-bold text-gray-600 mr-2">Papeles de origen:</span> PT-OBS-02, derivado de PT-OC1-02 y PT-XC-01 <br />
            <span className="font-bold text-gray-600 mr-2">Evidencia:</span> EV-02 — Tabla de objetivos del BIA · EV-12 — Reconciliación documental
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">N — Norma o criterio</h4>
              <p className="text-sm text-gray-700">BCRA Comunicación «A» 7777 — Continuidad del negocio: exigencia de un análisis de impacto que sustente objetivos de recuperación aprobados por el órgano de gobierno. ISO/IEC 27002:2022, definición 3.1.29, que define el punto de recuperación objetivo como un punto en el tiempo al que se recuperarán los datos. ISO/IEC 27002:2022, controles 5.29, 5.30 y 8.13. ISO 22301, cláusula 8.2.2.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">C — Condición</h4>
              <p className="text-sm text-gray-700">El proceso de Acreditación de Sueldos no presenta un punto de recuperación objetivo formalizado en la tabla de procesos críticos. Las menciones alternativas existentes en la documentación no se encuentran reconciliadas entre sí ni acompañadas de una aprobación única. El tiempo de recuperación objetivo, por su parte, figura en el Plan de Continuidad del Negocio con carácter de valor operativo tentativo, en revisión y sin aprobación formal de la Alta Dirección. La expresión cualitativa utilizada para el punto de recuperación no constituye un punto en el tiempo y, por lo tanto, no satisface la definición normativa del parámetro.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">C — Causa</h4>
              <p className="text-sm text-gray-700">El Análisis de Impacto al Negocio fue elaborado sin un circuito formal que obligara a elevar cada parámetro a aprobación de la Alta Dirección antes de su publicación, ni a verificar que cada valor estuviera expresado en la unidad que la norma exige. La ausencia de ese circuito explica que un valor consignado como tentativo haya permanecido vigente durante todo el período sin resolución, y que subsistan valores divergentes entre el análisis de impacto y el plan de continuidad sin criterio de prevalencia definido.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">C — Consecuencia</h4>
              <p className="text-sm text-gray-700">En la ventana de fecha de pago —días 1, 15 y último de cada mes— la entidad procesa hasta 14.000 acreditaciones para 40 empresas convenio en un lapso de 3 horas, con una exposición declarada de $58.000.000 por hora. Sin un punto de recuperación cuantificado, la entidad no puede dimensionar cuántos lotes de acreditación podría perder ante una interrupción y, en consecuencia, no puede diseñar una estrategia de resguardo exigible ni verificar si la política de copias vigente la satisface. Sin un tiempo de recuperación aprobado, el objetivo no resulta exigible al área técnica ni verificable por auditoría. La condición es constatable por el regulador mediante inspección documental, sin necesidad de prueba técnica.</p>
            </div>
            <div className="bg-blue-50 border border-blue-100 p-3 rounded">
              <h4 className="text-sm font-bold text-blue-800 border-b border-blue-200 pb-1 mb-2">E — Recomendación</h4>
              <p className="text-sm text-gray-800 mb-0">Cuantificar el punto de recuperación objetivo de la Acreditación de Sueldos en unidades de tiempo contrastables contra la frecuencia establecida en la política de copias de seguridad. Resolver la divergencia entre los valores declarados en el análisis de impacto y en el plan de continuidad, adoptando un valor único. Elevar ambos parámetros, junto con los del resto de los procesos medulares, a aprobación formal del Comité de Gobierno de Tecnología, dejando constancia en acta. Incorporar al procedimiento de mantenimiento del análisis de impacto una verificación que impida publicar parámetros no aprobados o expresados en unidades no contrastables.</p>
            </div>
          </div>
        </Acordeon>

        <Acordeon title="OBS-03 · Plan de Recuperación ante Desastres sin aprobación formal, con cobertura parcial y tiempos incompatibles" defaultOpen={false}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="col-span-1 bg-red-50 border border-red-100 p-3 rounded text-center">
              <span className="block text-xs text-red-800 uppercase font-bold mb-1">Nivel de riesgo</span>
              <span className="text-sm font-bold text-red-600">ALTO</span>
            </div>
            <div className="col-span-1 bg-amber-50 border border-amber-100 p-3 rounded text-center">
              <span className="block text-xs text-amber-800 uppercase font-bold mb-1">Complejidad</span>
              <span className="text-sm font-bold text-amber-600">Moderada</span>
            </div>
            <div className="col-span-1 md:col-span-2 bg-gray-50 p-3 rounded">
              <span className="block text-xs text-gray-500 uppercase font-bold mb-1">Objetivo de control</span>
              <span className="text-sm font-medium">OC-1 — Continuidad del negocio</span>
            </div>
          </div>
          
          <div className="bg-gray-50 p-3 rounded mb-4 text-sm">
            <span className="font-bold text-gray-600 mr-2">Papeles de origen:</span> PT-OBS-03, derivado de PT-OC1-03 <br />
            <span className="font-bold text-gray-600 mr-2">Evidencia:</span> EV-03 — Plan de Recuperación ante Desastres CF-DRP-2024-10 v1.0 y actas del Comité
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">N — Norma o criterio</h4>
              <p className="text-sm text-gray-700">BCRA Comunicación «A» 7777 — Continuidad del negocio: exigencia de un plan de recuperación tecnológica aprobado por el órgano de gobierno que sustente la continuidad operativa. ISO/IEC 27002:2022, control 5.30. ISO 22301, cláusulas 8.2 y 8.3.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">C — Condición</h4>
              <p className="text-sm text-gray-700">El Plan de Recuperación ante Desastres existe como documento, fue elaborado el 22 de agosto de 2024 y define tres procedimientos técnicos de recuperación. Presenta, no obstante, tres condiciones no adecuadas concurrentes. Permanece en versión 1.0 sin aprobación formal del Comité de Gobierno de Tecnología ni del Directorio: elevado para su tratamiento el 19 de noviembre de 2024, su consideración fue diferida hasta contar con los resultados de un ejercicio de recuperación que no registra ejecución. No comprende al sistema de gestión de identidades, que el análisis de impacto identifica como prerrequisito de la totalidad de los procesos críticos con un tiempo de recuperación efectivo de 15 minutos, ni a la plataforma de gestión de relaciones con clientes que soporta a la Atención al Cliente Online. Y los tiempos estimados de sus procedimientos técnicos —de 2 a 4 horas para el Core Bancario y de 3 a 6 horas para el procesamiento por lotes— exceden los tiempos de recuperación objetivo declarados para los procesos que dichos sistemas soportan, de 1 y 2 horas respectivamente.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">C — Causa</h4>
              <p className="text-sm text-gray-700">El diferimiento de la aprobación quedó condicionado a un ejercicio de recuperación que, a su vez, fue postergado sin reprogramación, de modo que ambas obligaciones se bloquearon mutuamente sin que ningún control detectara la situación. En cuanto a la cobertura, el marco de continuidad fue construido con criterio organizativo y no por dependencia técnica, razón por la cual los componentes transversales quedaron fuera del alcance de todos los documentos. La incompatibilidad de tiempos obedece a que los objetivos del análisis de impacto se fijaron por acuerdo con los propietarios de proceso sin contrastarlos previamente contra la capacidad técnica declarada por el área de infraestructura.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">C — Consecuencia</h4>
              <p className="text-sm text-gray-700">Un plan no aprobado no resulta exigible al área técnica ni verificable por auditoría: su cumplimiento queda librado a la voluntad de quien lo ejecute. La exclusión del sistema de gestión de identidades implica que el componente del que dependen los tres procesos medulares carece de procedimiento de recuperación y de responsable designado. Y la incompatibilidad de tiempos significa que la propia entidad documenta que no puede cumplir lo que comprometió: ante un evento de Nivel 3, el Core Bancario demoraría entre el doble y el cuádruple del tiempo objetivo de la Liquidación de Créditos, con una exposición declarada de $27.000.000 por hora, y el procesamiento por lotes entre 1,5 y 3 veces el de la Acreditación de Sueldos, con $58.000.000 por hora. La contradicción es verificable por el regulador mediante el simple cotejo de dos documentos internos.</p>
            </div>
            <div className="bg-blue-50 border border-blue-100 p-3 rounded">
              <h4 className="text-sm font-bold text-blue-800 border-b border-blue-200 pb-1 mb-2">E — Recomendación</h4>
              <p className="text-sm text-gray-800 mb-0">Elevar el Plan de Recuperación ante Desastres a aprobación formal del Comité de Gobierno de Tecnología, desvinculando esa aprobación de la ejecución del ejercicio de recuperación. Extender su alcance al sistema de gestión de identidades y a la plataforma de CRM, incorporando para cada uno objetivos de recuperación, procedimiento técnico y responsable designado. Reconciliar los tiempos estimados de los procedimientos técnicos con los objetivos del análisis de impacto: cuando la capacidad técnica no permita alcanzar el objetivo comprometido, corresponde modificar la arquitectura o revisar el objetivo, pero no sostener ambos valores de manera simultánea. Establecer, para las futuras revisiones del análisis de impacto, una validación previa de factibilidad técnica por parte del área de infraestructura.</p>
            </div>
          </div>
        </Acordeon>

        <Acordeon title="OBS-04 · Ejercicio integral de continuidad no ejecutado y programa anual de pruebas sin cumplimiento acreditado" defaultOpen={false}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="col-span-1 bg-red-50 border border-red-100 p-3 rounded text-center">
              <span className="block text-xs text-red-800 uppercase font-bold mb-1">Nivel de riesgo</span>
              <span className="text-sm font-bold text-red-600">ALTO</span>
            </div>
            <div className="col-span-1 bg-amber-50 border border-amber-100 p-3 rounded text-center">
              <span className="block text-xs text-amber-800 uppercase font-bold mb-1">Complejidad</span>
              <span className="text-sm font-bold text-amber-600">Moderada</span>
            </div>
            <div className="col-span-1 md:col-span-2 bg-gray-50 p-3 rounded">
              <span className="block text-xs text-gray-500 uppercase font-bold mb-1">Objetivo de control</span>
              <span className="text-sm font-medium">OC-1 — Continuidad del negocio, con efecto sobre OC-2</span>
            </div>
          </div>
          
          <div className="bg-gray-50 p-3 rounded mb-4 text-sm">
            <span className="font-bold text-gray-600 mr-2">Papeles de origen:</span> PT-OBS-04, derivado de PT-OC1-04, con refuerzo de PT-OC1-05 <br />
            <span className="font-bold text-gray-600 mr-2">Evidencia:</span> EV-04 — Registro anual de ejercicios y simulacros · EV-13 — Matriz de contraste de escenarios
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">N — Norma o criterio</h4>
              <p className="text-sm text-gray-700">BCRA Comunicación «A» 7777 — Continuidad del negocio: obligación de verificar el plan mediante pruebas periódicas en un período no mayor a doce meses. ISO/IEC 27002:2022, controles 5.29 y 5.30. Norma interna: el propio BCP establece simulacro integral anual, capacitación semestral y prueba de restauración con periodicidad anual.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">C — Condición</h4>
              <p className="text-sm text-gray-700">No se obtuvo evidencia de la ejecución de ejercicio alguno de continuidad dentro del período auditado. El simulacro integral de caída del centro de procesamiento, previsto para noviembre de 2025, figura postergado sin fecha de reprogramación, y no se localizó acta de ejecución, informe de resultado, registro de lecciones aprendidas ni plan de acción asociado. La capacitación semestral prevista tampoco registra ejecución. La única prueba de restauración documentada corresponde al 15 de enero de 2025, anterior al período auditado, y resultó fallida. La revisión alcanzó el 100 % del cronograma, sin recurrir a muestreo.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">C — Causa</h4>
              <p className="text-sm text-gray-700">El programa anual de pruebas está definido en el plan pero no cuenta con los elementos que aseguran su ejecución: no registra responsable designado del cumplimiento, no dispone de un hito de control con escalamiento ante incumplimiento, y su estado no integra el tablero mensual de gestión que se eleva al órgano de gobierno, de modo que su postergación no generó alerta ni quedó expuesta ante ninguna instancia de supervisión. A ello se suma un bloqueo recíproco de obligaciones detectado en OBS-03. La autoevaluación de control, que podría haber detectado la situación, se ejecuta de manera declarativa y su alcance omitió la infraestructura batch de haberes.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">C — Consecuencia</h4>
              <p className="text-sm text-gray-700">Los tiempos de recuperación declarados en el Análisis de Impacto al Negocio y los tiempos estimados en los procedimientos técnicos del DRP constituyen estimaciones no validadas empíricamente. La entidad no puede afirmar —ni ante su Directorio ni ante el BCRA— que sea capaz de recuperar sus procesos críticos dentro de los plazos que comprometió, y la contradicción documental verificada en OBS-03 entre esos plazos y la capacidad técnica declarada sólo puede resolverse mediante un ejercicio. La ausencia de pruebas afecta simultáneamente a los tres procesos medulares, cuya exposición horaria agregada asciende a $87.750.000, y alcanza a los tres escenarios evaluados en PT-OC1-05. La condición constituye un incumplimiento normativo verificable por el regulador.</p>
            </div>
            <div className="bg-blue-50 border border-blue-100 p-3 rounded">
              <h4 className="text-sm font-bold text-blue-800 border-b border-blue-200 pb-1 mb-2">E — Recomendación</h4>
              <p className="text-sm text-gray-800 mb-0">Ejecutar dentro de los 90 días un ejercicio de recuperación de alcance acotado sobre el Core Bancario, el Motor Batch y el sistema de gestión de identidades, con toma de tiempos reales por componente y contraste explícito contra los objetivos declarados en el BIA, dejando constancia de todos los elementos (acta, participantes, desvíos, plan de acción). Ejecutar dentro de los 180 días el simulacro integral previsto. Desacoplar formalmente la aprobación del DRP de la ejecución del ejercicio, conforme a OBS-03. Designar un responsable del cumplimiento del programa anual de pruebas, con obligación de reprogramación formal documentada ante toda postergación. Incorporar al tablero mensual de gestión de TI el estado de avance del programa anual de pruebas.</p>
            </div>
          </div>
        </Acordeon>

        <Acordeon title="OBS-06 · Recuperabilidad de las copias de seguridad no acreditada, con exposición de datos personales" defaultOpen={false}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="col-span-1 bg-red-50 border border-red-100 p-3 rounded text-center">
              <span className="block text-xs text-red-800 uppercase font-bold mb-1">Nivel de riesgo</span>
              <span className="text-sm font-bold text-red-600">ALTO</span>
            </div>
            <div className="col-span-1 bg-amber-50 border border-amber-100 p-3 rounded text-center">
              <span className="block text-xs text-amber-800 uppercase font-bold mb-1">Complejidad</span>
              <span className="text-sm font-bold text-amber-600">Moderada</span>
            </div>
            <div className="col-span-1 md:col-span-2 bg-gray-50 p-3 rounded">
              <span className="block text-xs text-gray-500 uppercase font-bold mb-1">Objetivo de control</span>
              <span className="text-sm font-medium">OC-2 — Gestión de resguardos y recuperación de datos</span>
            </div>
          </div>
          
          <div className="bg-gray-50 p-3 rounded mb-4 text-sm">
            <span className="font-bold text-gray-600 mr-2">Papeles de origen:</span> PT-OBS-06, derivado de PT-OC2-03, con cruce a PT-OC2-02 y PT-OC1-05 <br />
            <span className="font-bold text-gray-600 mr-2">Evidencia:</span> EV-06 — Ficha técnica del sitio alternativo · EV-07 — Registro de pruebas de restauración · EV-13
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">N — Norma o criterio</h4>
              <p className="text-sm text-gray-700">BCRA Comunicación «A» 7783 — Sección Continuidad: obligatoriedad de una política formal de resguardo con almacenamiento fuera del sitio principal y verificación de la capacidad de restauración. BCRA Comunicación «A» 7777. ISO/IEC 27002:2022, control 8.13. ISO 22301, cláusula 8.5. Ley N.º 25.326, artículo 9 — deber de adoptar las medidas técnicas y organizativas que garanticen la seguridad y la integridad de los datos personales.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">C — Condición</h4>
              <p className="text-sm text-gray-700">La única prueba de restauración documentada en el legajo de la entidad corresponde al 15 de enero de 2025 —anterior al período auditado—, se ejecutó sobre el Motor Batch con alcance parcial, no fue completada y resultó fallida por incompatibilidad de versiones entre el motor de resguardo y el entorno de destino. No se localizó prueba exitosa posterior ni plan de acción que trate la causa identificada. Concurrentemente, se verificó que los repositorios de resguardo no cuentan con aislamiento ni inmutabilidad y se encuentran accesibles desde la red de producción. Corresponde precisar que el requisito de conservación de las copias fuera del sitio principal sí se encuentra satisfecho (CA-01), pero la restaurabilidad no está acreditada.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">C — Causa</h4>
              <p className="text-sm text-gray-700">La política de copias de seguridad define frecuencia y retención, pero no establece una periodicidad obligatoria de prueba de restauración con criterio de éxito definido, ni obliga a tratar formalmente la causa de una prueba fallida mediante un plan de acción. El instrumento que debería fijar ese ciclo (DRP) carece de aprobación formal. En cuanto al aislamiento, la arquitectura de resguardo fue diseñada bajo un modelo de amenaza centrado en la falla de hardware y no fue revisada frente al escenario de cifrado malicioso incorporado en el BIA en marzo de 2026.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">C — Consecuencia</h4>
              <p className="text-sm text-gray-700">La entidad conserva copias cuya capacidad efectiva de restauración no está demostrada, y cuya única evidencia empírica es un fracaso no corregido. Los tiempos de recuperación comprometidos carecen de sustento verificable. En el escenario de cifrado malicioso, la ausencia de aislamiento determina que el repositorio de resguardo quedaría alcanzado por el mismo evento que debe permitir superar, dejando la recuperación de la Acreditación de Sueldos ($58.000.000 por hora) en estado de total vulnerabilidad. A la exposición económica se suma la dimensión de protección de datos: los archivos de nómina comprenden datos personales de 14.000 titulares, comprometiendo el deber de seguridad de la Ley N.º 25.326 y exponiendo a la entidad ante la autoridad de aplicación.</p>
            </div>
            <div className="bg-blue-50 border border-blue-100 p-3 rounded">
              <h4 className="text-sm font-bold text-blue-800 border-b border-blue-200 pb-1 mb-2">E — Recomendación</h4>
              <p className="text-sm text-gray-800 mb-0">Ejecutar dentro de los 60 días una prueba de restauración completa sobre el Motor Batch y el Core Bancario, documentando todos los elementos y contrastando contra los RTO/RPO del BIA. Tratar formalmente la incompatibilidad de versiones detectada en enero de 2025 y verificar su corrección antes de la prueba. Incorporar a la política de copias un ciclo obligatorio de pruebas semestrales con criterio de éxito definido. Implementar un repositorio de resguardo aislado de la red de producción, con retención inmutable, al menos para los sistemas críticos, y ejecutar sobre él una prueba de aislamiento documentada. Incorporar el resultado de las pruebas de restauración al tablero mensual de gestión.</p>
            </div>
          </div>
        </Acordeon>
      </div>

      <h3 className="text-xl font-bold text-amber-600 mb-4 flex items-center gap-2">
        <AlertCircle className="h-5 w-5" /> 5.2 Observaciones de nivel Medio
      </h3>

      <div className="space-y-4">
        <Acordeon title="OBS-01 · Plan de Continuidad del Negocio fuera del ciclo de revisión exigido" defaultOpen={false}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="col-span-1 bg-amber-50 border border-amber-100 p-3 rounded text-center">
              <span className="block text-xs text-amber-800 uppercase font-bold mb-1">Nivel de riesgo</span>
              <span className="text-sm font-bold text-amber-600">MEDIO</span>
            </div>
            <div className="col-span-1 bg-green-50 border border-green-100 p-3 rounded text-center">
              <span className="block text-xs text-green-800 uppercase font-bold mb-1">Complejidad</span>
              <span className="text-sm font-bold text-green-700">Trivial</span>
            </div>
            <div className="col-span-1 md:col-span-2 bg-gray-50 p-3 rounded">
              <span className="block text-xs text-gray-500 uppercase font-bold mb-1">Objetivo de control</span>
              <span className="text-sm font-medium">OC-1 — Continuidad del negocio</span>
            </div>
          </div>
          
          <div className="bg-gray-50 p-3 rounded mb-4 text-sm">
            <span className="font-bold text-gray-600 mr-2">Papeles de origen:</span> PT-OBS-01, derivado de PT-OC1-01 <br />
            <span className="font-bold text-gray-600 mr-2">Evidencia:</span> EV-01 — Acta de aprobación del BCP versión 2.4
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">N — Norma o criterio</h4>
              <p className="text-sm text-gray-700">BCRA Comunicación «A» 7777 — Continuidad del negocio: revisión y actualización del plan con periodicidad no mayor a doce meses. ISO/IEC 27002:2022, control 5.29.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">C — Condición</h4>
              <p className="text-sm text-gray-700">La última aprobación del Plan de Continuidad del Negocio, versión 2.4, registra aproximadamente 14 meses de antigüedad a la fecha de corte del encargo, y no se exhibió aprobación posterior ni ratificación del órgano de gobierno. El desvío se verifica tanto respecto del ciclo de doce meses exigido por la normativa como respecto del ciclo anual que el propio Plan establece. La condición no es aislada: la Política de Seguridad de la Información presenta la misma antigüedad sin revisión y el Manual de Procedimientos Operativos supera los 18 meses de desactualización.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">C — Causa</h4>
              <p className="text-sm text-gray-700">El ciclo de mantenimiento del cuerpo normativo está definido documentalmente pero no cuenta con un control que verifique su cumplimiento: no existe alerta de vencimiento, ni responsable designado del seguimiento, ni reporte al Comité de Gobierno de Tecnología sobre el estado de vigencia de los documentos. En consecuencia, el vencimiento de un documento no dispara ninguna acción y solo se detecta ante una revisión externa.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">C — Consecuencia</h4>
              <p className="text-sm text-gray-700">La entidad opera su marco de continuidad sobre un documento que no fue revisado durante un período en el que su arquitectura tecnológica cambió por efecto de la migración hacia el modelo digital. Los procedimientos de contingencia podrían, por lo tanto, referirse a componentes o configuraciones que ya no reflejan el entorno vigente. La condición configura, además, un incumplimiento verificable por el regulador mediante simple inspección de la fecha del acta de aprobación.</p>
            </div>
            <div className="bg-blue-50 border border-blue-100 p-3 rounded">
              <h4 className="text-sm font-bold text-blue-800 border-b border-blue-200 pb-1 mb-2">E — Recomendación</h4>
              <p className="text-sm text-gray-800 mb-0">Someter el Plan de Continuidad del Negocio a revisión integral y elevarlo a aprobación formal del Comité de Gobierno de Tecnología, incorporando los cambios de arquitectura ocurridos en el período. Extender la misma revisión a la Política de Seguridad de la Información y al Manual de Procedimientos Operativos, que comparten la condición. Implementar un control de vigencia sobre el inventario documental, con responsable designado, alerta anticipada de vencimiento y reporte periódico del estado de vigencia al órgano de gobierno.</p>
            </div>
          </div>
        </Acordeon>

        <Acordeon title="OBS-05 · Fallos de ejecución de copias de seguridad sin tratamiento ni compensación documentada" defaultOpen={false}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="col-span-1 bg-amber-50 border border-amber-100 p-3 rounded text-center">
              <span className="block text-xs text-amber-800 uppercase font-bold mb-1">Nivel de riesgo</span>
              <span className="text-sm font-bold text-amber-600">MEDIO</span>
            </div>
            <div className="col-span-1 bg-green-50 border border-green-100 p-3 rounded text-center">
              <span className="block text-xs text-green-800 uppercase font-bold mb-1">Complejidad</span>
              <span className="text-sm font-bold text-green-700">Trivial</span>
            </div>
            <div className="col-span-1 md:col-span-2 bg-gray-50 p-3 rounded">
              <span className="block text-xs text-gray-500 uppercase font-bold mb-1">Objetivo de control</span>
              <span className="text-sm font-medium">OC-2 — Gestión de resguardos y recuperación de datos</span>
            </div>
          </div>
          
          <div className="bg-gray-50 p-3 rounded mb-4 text-sm">
            <span className="font-bold text-gray-600 mr-2">Papeles de origen:</span> PT-OBS-05, derivado de PT-OC2-01 y PT-OC2-04 <br />
            <span className="font-bold text-gray-600 mr-2">Evidencia:</span> EV-05 — Política de copias y logs de ejecución · EV-11 — Matriz de alertas
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">N — Norma o criterio</h4>
              <p className="text-sm text-gray-700">BCRA Comunicación «A» 7777 — Continuidad del negocio. ISO/IEC 27002:2022, controles 8.13 — copias de seguridad — y 8.16 — actividades de monitoreo.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">C — Condición</h4>
              <p className="text-sm text-gray-700">Sobre las ejecuciones de copia total del período analizado se identificaron tres fallos sin reejecución documentada dentro de la ventana operativa. Los tres generaron alerta automática, lo que acredita que el mecanismo de detección existe y opera. Ninguno de los tres registra ticket de tratamiento, escalamiento al responsable del sistema, reejecución posterior ni aceptación formal del riesgo asumido.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">C — Causa</h4>
              <p className="text-sm text-gray-700">La política de resguardo define la frecuencia de ejecución y el mecanismo de alerta, pero no establece el procedimiento posterior: no designa destinatario de la alerta, no fija plazo de reejecución, no prevé escalamiento ante la imposibilidad de reejecutar ni exige registro de aceptación del riesgo. La alerta, en consecuencia, se emite hacia un circuito que no está definido, y su cierre queda librado a la iniciativa individual del operador de turno.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">C — Consecuencia</h4>
              <p className="text-sm text-gray-700">Cada fallo sin reejecución representa hasta 24 horas de operación sin copia total disponible. La detección sin tratamiento no constituye un control efectivo: la entidad conoce que la copia falló y, aun así, no puede demostrar que haya adoptado medida alguna. El efecto sobre el punto de recuperación de la Acreditación de Sueldos no puede cuantificarse en tanto ese parámetro no se encuentre definido, conforme a OBS-02, lo que agrava la situación al impedir incluso medir la consecuencia.</p>
            </div>
            <div className="bg-blue-50 border border-blue-100 p-3 rounded">
              <h4 className="text-sm font-bold text-blue-800 border-b border-blue-200 pb-1 mb-2">E — Recomendación</h4>
              <p className="text-sm text-gray-800 mb-0">Definir el procedimiento de tratamiento de excepciones de resguardo, estableciendo destinatario de la alerta, plazo máximo de reejecución, vía de escalamiento ante la imposibilidad de reejecutar y registro obligatorio de aceptación del riesgo cuando la reejecución no resulte posible. Incorporar al tablero mensual de gestión el indicador de fallos de resguardo con su estado de cierre, de modo que el órgano de gobierno reciba la información sin depender de la iniciativa del área ejecutora.</p>
            </div>
          </div>
        </Acordeon>

        <Acordeon title="OBS-07 · Accesos de emergencia y cuentas sin trazabilidad individual en el entorno de contingencia" defaultOpen={false}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="col-span-1 bg-amber-50 border border-amber-100 p-3 rounded text-center">
              <span className="block text-xs text-amber-800 uppercase font-bold mb-1">Nivel de riesgo</span>
              <span className="text-sm font-bold text-amber-600">MEDIO</span>
            </div>
            <div className="col-span-1 bg-amber-50 border border-amber-100 p-3 rounded text-center">
              <span className="block text-xs text-amber-800 uppercase font-bold mb-1">Complejidad</span>
              <span className="text-sm font-bold text-amber-600">Moderada</span>
            </div>
            <div className="col-span-1 md:col-span-2 bg-gray-50 p-3 rounded">
              <span className="block text-xs text-gray-500 uppercase font-bold mb-1">Objetivo de control</span>
              <span className="text-sm font-medium">OC-3 — Seguridad lógica y control de acceso en entornos de recuperación</span>
            </div>
          </div>
          
          <div className="bg-gray-50 p-3 rounded mb-4 text-sm">
            <span className="font-bold text-gray-600 mr-2">Papeles de origen:</span> PT-OBS-07, derivado de PT-OC3-02, PT-OC3-03 y PT-OC3-04 <br />
            <span className="font-bold text-gray-600 mr-2">Evidencia:</span> EV-09 — Registro de activaciones de emergencia · EV-10 — Inventario de cuentas del IAM
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">N — Norma o criterio</h4>
              <p className="text-sm text-gray-700">BCRA Comunicación «A» 7783 — Control de acceso, y Comunicación «A» 7724 — trazabilidad de operaciones sensibles. ISO/IEC 27002:2022, controles 5.15, 5.16, 5.18 y 8.2.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">C — Condición</h4>
              <p className="text-sm text-gray-700">La cuenta de emergencia bgadmincore registra utilización sin que se haya localizado revisión posterior de los comandos ejecutados, acta de cierre ni constancia de revocación. En el inventario del entorno de contingencia, la cuenta soportedr figura activa, es genérica y no utiliza autenticación multifactor, en tanto la cuenta de servicio sysbatch_01 tampoco lo utiliza. Para ninguna de las dos se localizó excepción aprobada ni propietario asignado. No se acredita un ciclo de recertificación completo sobre el universo de cuentas del entorno de recuperación.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">C — Causa</h4>
              <p className="text-sm text-gray-700">El gobierno de los accesos privilegiados fue diseñado para el entorno productivo y no se extendió al entorno de recuperación. Como consecuencia, el entorno de contingencia carece de procedimiento propio de autorización previa y revisión posterior de los accesos de emergencia, de ciclo de recertificación y de tratamiento formal de las excepciones. El marco normativo interno tampoco alcanza expresamente a esos recursos, condición ya advertida en la evaluación del ambiente de control.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-corporate-navy border-b pb-1 mb-2">C — Consecuencia</h4>
              <p className="text-sm text-gray-700">Durante una recuperación —esto es, precisamente cuando se ejercen los mayores privilegios y existe la menor supervisión— las acciones ejecutadas con cuentas genéricas no pueden imputarse a una persona determinada. Ello impide reconstruir la secuencia de intervenciones ante un incidente, debilita la posición de la entidad en una eventual investigación y compromete el valor probatorio de sus registros de auditoría. La ausencia de autenticación multifactor en cuentas con privilegios elevados amplía, adicionalmente, la superficie de ataque en el entorno alternativo.</p>
            </div>
            <div className="bg-blue-50 border border-blue-100 p-3 rounded">
              <h4 className="text-sm font-bold text-blue-800 border-b border-blue-200 pb-1 mb-2">E — Recomendación</h4>
              <p className="text-sm text-gray-800 mb-0">Establecer un procedimiento formal de accesos de emergencia que exija autorización previa registrada, duración acotada, revisión obligatoria de los comandos ejecutados dentro de un plazo determinado tras el incidente y revocación verificada. Eliminar las cuentas genéricas del entorno de contingencia o nominarlas y asignarles propietario, autenticación multifactor y excepción aprobada con fecha de vencimiento. Implementar un ciclo de recertificación periódica sobre la totalidad del universo de cuentas del entorno de recuperación. Extender el marco normativo interno de uso aceptable a los recursos del entorno de contingencia.</p>
            </div>
          </div>
        </Acordeon>
      </div>
    </div>
  );
};

export default FichasObservaciones;
