import { FileWarning } from 'lucide-react';
import Acordeon from '../Acordeon';

const DetalleFichas = () => {
  return (
    <section id="b8-fichas" className="scroll-mt-24 mb-12 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <FileWarning className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">B.8 Desarrollo de las observaciones — fichas NCCCE</h2>
      </div>
      
      <p className="text-gray-700 mb-8">
        Las siete observaciones elevadas se presentan ordenadas por nivel de riesgo. Cada ficha responde a la estructura N-C-C-C-E: norma o criterio vulnerado, condición constatada, causa que la origina, consecuencia para el negocio y recomendación. Ninguna ficha individualiza responsables por nombre y las recomendaciones enuncian qué debe corregirse, no quién ni con qué proveedor.
      </p>

      <h3 className="text-xl font-bold text-red-700 mb-4 border-b border-red-200 pb-2">Observaciones de Nivel Alto</h3>
      <div className="space-y-4 mb-10">
        
        <Acordeon title="OBS-02 · Objetivos de recuperación de la Acreditación de Sueldos no cuantificados ni aprobados formalmente" defaultOpen={false}>
          <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-700 space-y-3">
            <div>
              <span className="font-bold text-corporate-navy block mb-1">Objetivo de control y Papeles:</span>
              OC-1 — Continuidad del negocio. PT-OBS-02 (Evidencia EV-02 y EV-12). Complejidad: Trivial.
            </div>
            <div>
              <span className="font-bold text-corporate-navy block mb-1">N — Norma o criterio:</span>
              BCRA Comunicación «A» 7777 (Continuidad del negocio). ISO/IEC 27002:2022 (3.1.29, 5.29, 5.30). ISO 22301 (8.2.2).
            </div>
            <div>
              <span className="font-bold text-corporate-navy block mb-1">C — Condición:</span>
              El proceso P2 no presenta un RPO cuantificado: consigna «último lote validado», expresión cualitativa que no admite contraste contra la política de copias. El RTO figura en revisión sin aprobación formal. Existen valores divergentes entre el BIA y el BCP sin criterio de prevalencia.
            </div>
            <div>
              <span className="font-bold text-corporate-navy block mb-1">C — Causa:</span>
              El BIA fue elaborado sin un circuito formal que obligara a elevar cada parámetro a aprobación de la Alta Dirección. La conciliación fue elevada al Comité pero no registra tratamiento.
            </div>
            <div>
              <span className="font-bold text-corporate-navy block mb-1">C — Consecuencia:</span>
              Sin un punto cuantificado, la entidad no puede dimensionar cuántos lotes perdería ni diseñar una estrategia de resguardo exigible (afectando a 14.000 acreditaciones con exposición de $58.000.000/hora). Incumplimiento constatable por el regulador mediante inspección documental.
            </div>
            <div className="bg-blue-50 p-3 rounded border border-blue-200 mt-2">
              <span className="font-bold text-blue-900 block mb-1">E — Recomendación:</span>
              Cuantificar el RPO de la Acreditación de Sueldos en unidades de tiempo. Resolver divergencias adoptando un valor único. Elevar los parámetros a aprobación formal del Comité de Gobierno de Tecnología con constancia en acta. Incorporar verificación previa al procedimiento de mantenimiento del BIA.
            </div>
          </div>
        </Acordeon>

        <Acordeon title="OBS-03 · Plan de Recuperación ante Desastres sin aprobación formal, cobertura parcial y tiempos incompatibles" defaultOpen={false}>
          <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-700 space-y-3">
            <div>
              <span className="font-bold text-corporate-navy block mb-1">Objetivo de control y Papeles:</span>
              OC-1 — Continuidad del negocio. PT-OBS-03 (Evidencia EV-03). Complejidad: Moderada.
            </div>
            <div>
              <span className="font-bold text-corporate-navy block mb-1">N — Norma o criterio:</span>
              BCRA Comunicación «A» 7777. ISO/IEC 27002:2022 (5.30). ISO 22301 (8.2 y 8.3).
            </div>
            <div>
              <span className="font-bold text-corporate-navy block mb-1">C — Condición:</span>
              El DRP v1.0 (ago-2024) carece de aprobación del Comité (diferida hasta tener resultados de un ejercicio no ejecutado). No comprende al IAM (prerrequisito de 15 min de todos los procesos críticos) ni al CRM. Los tiempos técnicos estimados (PTR-01 y PTR-02) exceden los RTO declarados en el BIA.
            </div>
            <div>
              <span className="font-bold text-corporate-navy block mb-1">C — Causa:</span>
              Bloqueo recíproco de obligaciones (aprobación diferida por ejercicio postergado). El marco se construyó por división operativa y no por dependencia técnica (omitiendo transversales como el IAM). Objetivos fijados sin contraste técnico previo.
            </div>
            <div>
              <span className="font-bold text-corporate-navy block mb-1">C — Consecuencia:</span>
              Un plan no aprobado no resulta exigible. La exclusión del IAM deja a P1, P2 y P3 sobre una dependencia que nadie se comprometió a restablecer. La incompatibilidad de tiempos evidencia documentalmente incapacidad de cumplir lo prometido (verificable por simple cotejo).
            </div>
            <div className="bg-blue-50 p-3 rounded border border-blue-200 mt-2">
              <span className="font-bold text-blue-900 block mb-1">E — Recomendación:</span>
              Aprobar el DRP desvinculándolo de la ejecución del ejercicio. Extender alcance al IAM y al CRM (y posteriormente P4 y P5). Reconciliar tiempos estimados con los objetivos del BIA y establecer validación técnica previa de factibilidad para futuras revisiones.
            </div>
          </div>
        </Acordeon>

        <Acordeon title="OBS-04 · Ejercicio integral de continuidad no ejecutado y programa de pruebas sin cumplimiento" defaultOpen={false}>
          <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-700 space-y-3">
            <div>
              <span className="font-bold text-corporate-navy block mb-1">Objetivo de control y Papeles:</span>
              OC-1 — Continuidad del negocio. PT-OBS-04 (Evidencia EV-04 y EV-13). Complejidad: Moderada.
            </div>
            <div>
              <span className="font-bold text-corporate-navy block mb-1">N — Norma o criterio:</span>
              BCRA Comunicación «A» 7777 (pruebas periódicas máx 12 meses). ISO/IEC 27002:2022 (5.29, 5.30). ISO 22301 (8.5). Norma interna (simulacro anual).
            </div>
            <div>
              <span className="font-bold text-corporate-navy block mb-1">C — Condición:</span>
              No se ejecutó ningún ejercicio de continuidad en el período auditado. El simulacro de noviembre 2025 fue postergado sin reprogramación. La única prueba de restauración data de enero 2025 y fue fallida.
            </div>
            <div>
              <span className="font-bold text-corporate-navy block mb-1">C — Causa:</span>
              El programa anual carece de responsable designado, hito de escalamiento, y su estado no se informa en el tablero mensual del Comité. Autoevaluación de control ejecutada de manera declarativa y con omisiones.
            </div>
            <div>
              <span className="font-bold text-corporate-navy block mb-1">C — Consecuencia:</span>
              Los tiempos declarados son estimaciones no validadas empíricamente (afectando los $87.750.000/hora de los tres procesos). La ausencia impide resolver las brechas de E1, E2 y E3. Incumplimiento normativo constatable sin prueba técnica.
            </div>
            <div className="bg-blue-50 p-3 rounded border border-blue-200 mt-2">
              <span className="font-bold text-blue-900 block mb-1">E — Recomendación:</span>
              Ejecutar a 90 días una prueba acotada sobre Core, Motor Batch e IAM. Ejecutar a 180 días el simulacro integral previsto. Desacoplar aprobación del DRP. Designar responsable del programa anual, incorporar su avance al tablero mensual de TI y restablecer capacitación.
            </div>
          </div>
        </Acordeon>

        <Acordeon title="OBS-06 · Recuperabilidad de copias de seguridad no acreditada (datos personales)" defaultOpen={false}>
          <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-700 space-y-3">
            <div>
              <span className="font-bold text-corporate-navy block mb-1">Objetivo de control y Papeles:</span>
              OC-2 — Resguardos. PT-OBS-06 (Evidencia EV-06, EV-07, EV-13). Complejidad: Moderada.
            </div>
            <div>
              <span className="font-bold text-corporate-navy block mb-1">N — Norma o criterio:</span>
              BCRA Comunicación «A» 7783, «A» 7777. ISO/IEC 27002:2022 (8.13). ISO 22301 (8.5). Ley N.º 25.326, Art. 9 (datos personales).
            </div>
            <div>
              <span className="font-bold text-corporate-navy block mb-1">C — Condición:</span>
              Única prueba registrada (15/01/2025) resultó fallida por incompatibilidad de versiones. No se localizó prueba exitosa posterior ni corrección. Los repositorios de resguardo carecen de aislamiento e inmutabilidad (accesibles desde red productiva).
            </div>
            <div>
              <span className="font-bold text-corporate-navy block mb-1">C — Causa:</span>
              Política de copias sin periodicidad obligatoria de prueba ni criterio de éxito/remediación. Arquitectura de resguardo diseñada para fallas de hardware sin considerar amenaza de ransomware (aislamiento).
            </div>
            <div>
              <span className="font-bold text-corporate-navy block mb-1">C — Consecuencia:</span>
              Mecanismo de recuperación que ya falló no fue corregido. El repositorio no aislado quedaría comprometido en escenario E3 (ransomware), tornando irrecuperables los archivos de nómina de 14.000 titulares, comprometiendo la Ley de Protección de Datos Personales.
            </div>
            <div className="bg-blue-50 p-3 rounded border border-blue-200 mt-2">
              <span className="font-bold text-blue-900 block mb-1">E — Recomendación:</span>
              Prueba completa sobre Motor Batch y Core Bancario en 60 días, corrigiendo primero la incompatibilidad de versiones. Incorporar ciclo semestral de pruebas a la política. Implementar repositorio aislado e inmutable para P1 y P2. Incluir resultados en tablero mensual.
            </div>
          </div>
        </Acordeon>
      </div>

      <h3 className="text-xl font-bold text-orange-600 mb-4 border-b border-orange-200 pb-2">Observaciones de Nivel Medio</h3>
      <div className="space-y-4">
        
        <Acordeon title="OBS-01 · Plan de Continuidad del Negocio fuera del ciclo de revisión exigido" defaultOpen={false}>
          <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-700 space-y-3">
            <div>
              <span className="font-bold text-corporate-navy block mb-1">Objetivo de control y Papeles:</span>
              OC-1 — Continuidad del negocio. PT-OBS-01. Complejidad: Trivial.
            </div>
            <div>
              <span className="font-bold text-corporate-navy block mb-1">Condición central:</span>
              El BCP registra más de 14 meses sin revisión en un período de profundos cambios de arquitectura. Incumplimiento directo verificable por el regulador.
            </div>
            <div className="bg-blue-50 p-3 rounded border border-blue-200 mt-2">
              <span className="font-bold text-blue-900 block mb-1">E — Recomendación:</span>
              Restablecer el ciclo de revisión y designar responsable de seguimiento documental con reporte directo a la Dirección.
            </div>
          </div>
        </Acordeon>

        <Acordeon title="OBS-05 · Fallos de copia sin tratamiento ni compensación documentada" defaultOpen={false}>
          <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-700 space-y-3">
            <div>
              <span className="font-bold text-corporate-navy block mb-1">Objetivo de control y Papeles:</span>
              OC-2 — Resguardos. PT-OBS-05. Complejidad: Trivial.
            </div>
            <div>
              <span className="font-bold text-corporate-navy block mb-1">Condición central:</span>
              Se verificaron tres fallos de copia total en junio 2026 sin reejecución documentada. El sistema alerta, pero el área técnica no registra la remediación. Un aviso sin acción no protege.
            </div>
            <div className="bg-blue-50 p-3 rounded border border-blue-200 mt-2">
              <span className="font-bold text-blue-900 block mb-1">E — Recomendación:</span>
              Establecer flujo obligatorio de tratamiento de incidentes de backup e incluir la métrica de fallos no corregidos en el tablero de gestión mensual.
            </div>
          </div>
        </Acordeon>

        <Acordeon title="OBS-07 · Accesos de emergencia y cuentas sin trazabilidad en el entorno de recuperación" defaultOpen={false}>
          <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-700 space-y-3">
            <div>
              <span className="font-bold text-corporate-navy block mb-1">Objetivo de control y Papeles:</span>
              OC-3 — Seguridad lógica. PT-OBS-07. Complejidad: Moderada.
            </div>
            <div>
              <span className="font-bold text-corporate-navy block mb-1">Condición central:</span>
              En el entorno de contingencia, los accesos de emergencia carecen de autorización previa o revisión posterior. Las cuentas genéricas operan sin MFA. Ante una recuperación, se pierden los controles de trazabilidad de los administradores.
            </div>
            <div className="bg-blue-50 p-3 rounded border border-blue-200 mt-2">
              <span className="font-bold text-blue-900 block mb-1">E — Recomendación:</span>
              Extender la gestión del IAM al entorno alternativo, implementar procesos break-glass controlados y revisión mandataria post-contingencia.
            </div>
          </div>
        </Acordeon>

      </div>
    </section>
  );
};

export default DetalleFichas;
