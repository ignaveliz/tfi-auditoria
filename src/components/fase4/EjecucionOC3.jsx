import { CheckSquare } from 'lucide-react';
import Acordeon from '../Acordeon';

const EjecucionOC3 = () => {
  const pts = [
    {
      ref: 'PT-OC3-01',
      title: 'Equivalencia de autenticación entre producción y contingencia',
      fecha: '08/07/2026',
      elaborado: 'Ignacio Martín Veliz — Auditor (OC-3). Soporte técnico: Nadia Enoa Rizo Avalos — Técnico',
      revisado: 'Auditor Senior Luciano Agustín Donnet',
      area: 'Seguridad lógica en contingencia / OC-3',
      objetivo: 'Comprobar que los perfiles que operan sobre los procesos medulares mantengan el mismo nivel de autenticación en el entorno de contingencia que en producción.',
      alcance: 'Universo: 14 perfiles definidos en la matriz de accesos. Muestra dirigida por criticidad: 3 perfiles —Administrador del Core, Operador de Procesamiento Batch y Atención al Cliente—, seleccionados por concentrar los privilegios de mayor alcance sobre P1, P2 y P3.',
      procedimiento: 'Comparación campo a campo de la matriz de accesos de producción contra la del entorno de contingencia. Verificación del factor de autenticación declarado para cada perfil en ambos entornos.',
      evidencia: 'EV-08 — Matriz de perfiles y accesos.',
      resultado: 'Los perfiles de Administrador del Core y de Operador de Procesamiento Batch operan con autenticación multifactor y token físico en ambos entornos, sin degradación. El perfil de Atención al Cliente no utiliza multifactor en ninguno de los dos entornos, de modo que la equivalencia se mantiene pero sobre un nivel de robustez inferior.',
      conclusion: 'ADECUADO CON ALCANCE LIMITADO. No se detectó relajamiento de controles en contingencia respecto de producción para los perfiles críticos muestreados. La ausencia de multifactor en el perfil de Atención al Cliente se documenta como excepción de alcance y se evalúa en PT-OC3-04.',
      normativa: 'BCRA Com. «A» 7783 · ISO/IEC 27002:2022, controles 5.15 y 8.2',
      trazabilidad: 'RA-08 → PA-11 → EV-08 → excepción tratada en PT-OC3-04. No deriva a observación autónoma.'
    },
    {
      ref: 'PT-OC3-02',
      title: 'Gestión de cuentas de acceso de emergencia (break-glass)',
      fecha: '09/07/2026',
      elaborado: 'Ignacio Martín Veliz — Auditor (OC-3). Soporte técnico: Nadia Enoa Rizo Avalos — Técnico',
      revisado: 'Auditor Senior Luciano Agustín Donnet',
      area: 'Accesos privilegiados y de emergencia / OC-3',
      objetivo: 'Verificar que el uso de cuentas de emergencia cuente con autorización previa, registro inalterable, duración limitada, revisión posterior al incidente y revocación.',
      alcance: 'Universo: 2 activaciones de cuentas de emergencia registradas en el período. Revisión del 100% de los casos.',
      procedimiento: 'Cruce de los eventos del SIEM y del IAM con los tickets de autorización previa y con los registros de revisión posterior. Verificación, para cada activación, de la existencia de aprobación, del alcance temporal declarado y del acta de revisión de los comandos ejecutados.',
      evidencia: 'EV-09 — Registro de activaciones de cuentas de emergencia y eventos SIEM.',
      resultado: 'La cuenta bgadmincore fue utilizada durante cuatro horas por un operador de guardia. Existe registro del evento, lo que acredita trazabilidad de la activación. No se localizó autorización previa documentada, revisión posterior de los comandos ejecutados, acta de cierre ni constancia de revocación por parte del propietario del sistema o del CISO.',
      conclusion: 'DEFICIENTE. El uso excepcional queda registrado pero no sujeto a control: sin autorización previa ni revisión posterior, el mecanismo de emergencia opera como una vía de acceso privilegiado no supervisada. Deriva a PT-OBS-07.',
      normativa: 'BCRA Com. «A» 7783 y «A» 7724 · ISO/IEC 27002:2022, controles 5.15 y 8.2',
      trazabilidad: 'RA-08 → PA-12 → EV-09 → PT-OBS-07'
    },
    {
      ref: 'PT-OC3-03',
      title: 'Cuentas genéricas y de servicio en el entorno de contingencia',
      fecha: '10/07/2026',
      elaborado: 'Ignacio Martín Veliz — Auditor (OC-3). Soporte técnico: Nadia Enoa Rizo Avalos — Técnico',
      revisado: 'Auditor Senior Luciano Agustín Donnet',
      area: 'Gestión de identidades en contingencia / OC-3',
      objetivo: 'Verificar que el inventario del entorno de contingencia no contenga cuentas genéricas activas sin justificación, trazabilidad individual ni controles compensatorios.',
      alcance: 'Universo: 87 cuentas del inventario del IAM del entorno de contingencia. Revisión del 100% de la población, con clasificación en personales, de servicio y genéricas.',
      procedimiento: 'Extracción del inventario del IAM sobre copia en ambiente controlado. Clasificación de la totalidad de las cuentas por tipo. Verificación, para las cuentas genéricas y de servicio, del factor de autenticación, de la excepción aprobada y del control compensatorio declarado.',
      evidencia: 'EV-10 — Inventario de cuentas del IAM del entorno de contingencia.',
      resultado: 'De las 87 cuentas, 79 son personales y nominadas. La cuenta soportedr figura activa, es genérica y no utiliza multifactor. La cuenta sysbatch_01, de servicio, tampoco lo utiliza. Para ninguna de las dos se localizó excepción aprobada, propietario asignado ni monitoreo compensatorio.',
      conclusion: 'DEFICIENTE. La existencia de una cuenta genérica activa sin trazabilidad individual impide atribuir las acciones ejecutadas durante una recuperación a una persona determinada. Deriva a PT-OBS-07.',
      normativa: 'BCRA Com. «A» 7783 y «A» 7724 · ISO/IEC 27002:2022, controles 5.15, 5.16 y 8.2',
      trazabilidad: 'RA-08 → PA-13 → EV-10 → PT-OBS-07'
    },
    {
      ref: 'PT-OC3-04',
      title: 'Recertificación periódica de accesos y tratamiento de excepciones',
      fecha: '13/07/2026',
      elaborado: 'Ignacio Martín Veliz — Auditor (OC-3). Soporte técnico: Nadia Enoa Rizo Avalos — Técnico',
      revisado: 'Auditor Senior Luciano Agustín Donnet',
      area: 'Revisión de accesos y privilegios de contingencia / OC-3',
      objetivo: 'Determinar si las cuentas del entorno de contingencia se recertifican periódicamente por sus propietarios y si las excepciones cuentan con aprobación, vencimiento y seguimiento.',
      alcance: 'Universo: 87 cuentas del inventario del IAM. Verificación del 100% respecto de la fecha de última recertificación y del tratamiento de las 3 excepciones identificadas.',
      procedimiento: 'Inspección del inventario del IAM, de la matriz de perfiles y de la matriz de alertas. Búsqueda, para cada cuenta, de fecha de última recertificación, propietario responsable y ticket de excepción con fecha de vencimiento.',
      evidencia: 'EV-08 — Matriz de perfiles y accesos · EV-10 — Inventario del IAM.',
      resultado: 'No se localizó constancia de un ciclo de recertificación completo sobre el universo de cuentas del entorno de contingencia. Las tres excepciones identificadas —la cuenta genérica, la cuenta de servicio y el perfil de Atención al Cliente sin multifactor— no cuentan con aprobación formal, propietario designado ni fecha de vencimiento.',
      conclusion: 'DEFICIENTE. El control de revisión periódica no se demuestra para el universo de recuperación y las excepciones operan sin gobierno. Refuerza PT-OBS-07.',
      normativa: 'BCRA Com. «A» 7783 · ISO/IEC 27002:2022, controles 5.15, 5.18 y 8.2',
      trazabilidad: 'RA-08 → PA-11 → EV-08, EV-10 → PT-OBS-07'
    }
  ];

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <CheckSquare className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">4. OC-3 — Seguridad lógica y accesos en contingencia</h2>
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

export default EjecucionOC3;
