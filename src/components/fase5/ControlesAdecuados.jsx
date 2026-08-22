import { CheckCircle } from 'lucide-react';
import Acordeon from '../Acordeon';

const ControlesAdecuados = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <CheckCircle className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">6. Controles evaluados como adecuados</h2>
      </div>

      <div className="prose max-w-none text-gray-700 mb-8">
        <p className="mb-4">
          La documentación de los controles que operan correctamente no constituye una cortesía hacia el auditado. Acredita que la auditoría evaluó áreas en las que no encontró deficiencias, permite a la entidad exhibir evidencia de cumplimiento ante una inspección y evita que una reorganización posterior elimine sin advertirlo un control efectivo.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-md">
          <h4 className="text-sm font-bold text-blue-800 mb-1">Precisión de alcance sobre controles CA-01 y CA-02</h4>
          <p className="text-sm text-blue-900 mb-0">
            Los papeles PT-OC2-02 y PT-OC3-01 concluyeron en el trabajo de campo como ADECUADO CON ALCANCE LIMITADO. Cerrado el trabajo de campo y comunicado por vía separada el atributo no acreditado —la restaurabilidad en OBS-06 y el gobierno de las excepciones de perfiles en OBS-07—, el control efectivamente probado se documenta aquí como ADECUADO sobre el alcance verificado. No se trata de una recalificación sino de la separación de atributos distintos.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <Acordeon title="CA-01 · Almacenamiento de copias fuera del sitio principal" defaultOpen={false}>
          <div className="bg-gray-50 p-4 rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
              <div>
                <span className="font-bold text-gray-600 block mb-1">Objetivo de control:</span>
                OC-2 — Resguardos y recuperación
              </div>
              <div>
                <span className="font-bold text-gray-600 block mb-1">Papel de origen:</span>
                PT-OC2-02
              </div>
            </div>
            <div className="mb-4 text-sm">
              <span className="font-bold text-gray-600 block mb-1">Evidencia:</span>
              EV-06 — Ficha técnica del sitio alternativo (Warm Site)
            </div>
            <div className="mb-4 text-sm">
              <span className="font-bold text-gray-600 block mb-1">Resultado de la evaluación:</span>
              Se acredita un sitio alternativo en modalidad warm site, ubicado a 40 kilómetros del centro de procesamiento primario, con replicación asincrónica y cifrado AES-256 en reposo. El requisito normativo de conservación de las copias fuera del sitio principal se encuentra satisfecho. El atributo de restaurabilidad constituye una condición distinta y se informa por separado en OBS-06.
            </div>
            <div className="bg-green-100 text-green-800 font-bold p-2 text-center rounded border border-green-200">
              Control evaluado: ADECUADO — No genera observación.
            </div>
          </div>
        </Acordeon>

        <Acordeon title="CA-02 · Equivalencia de autenticación entre producción y entorno de contingencia" defaultOpen={false}>
          <div className="bg-gray-50 p-4 rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
              <div>
                <span className="font-bold text-gray-600 block mb-1">Objetivo de control:</span>
                OC-3 — Seguridad lógica
              </div>
              <div>
                <span className="font-bold text-gray-600 block mb-1">Papel de origen:</span>
                PT-OC3-01
              </div>
            </div>
            <div className="mb-4 text-sm">
              <span className="font-bold text-gray-600 block mb-1">Evidencia:</span>
              EV-08 — Matriz de perfiles y accesos
            </div>
            <div className="mb-4 text-sm">
              <span className="font-bold text-gray-600 block mb-1">Resultado de la evaluación:</span>
              Los perfiles de Administrador del Core y de Operador de Procesamiento Batch operan con autenticación multifactor y token físico tanto en producción como en el entorno de contingencia, sin degradación. No se detectó relajamiento de los controles de acceso en contingencia respecto del entorno productivo para los perfiles críticos evaluados, que es precisamente la condición que el objetivo de control busca prevenir.
            </div>
            <div className="bg-green-100 text-green-800 font-bold p-2 text-center rounded border border-green-200">
              Control evaluado: ADECUADO — No genera observación.
            </div>
          </div>
        </Acordeon>

        <Acordeon title="CA-03 · Segregación de funciones formalizada e implementada técnicamente" defaultOpen={false}>
          <div className="bg-gray-50 p-4 rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
              <div>
                <span className="font-bold text-gray-600 block mb-1">Objetivo de control:</span>
                Transversal — ambiente de control
              </div>
              <div>
                <span className="font-bold text-gray-600 block mb-1">Papel de origen:</span>
                CEAC-2026-VAN-01, pregunta 13
              </div>
            </div>
            <div className="mb-4 text-sm">
              <span className="font-bold text-gray-600 block mb-1">Evidencia:</span>
              Manual de Misiones y Funciones, matriz de incompatibilidades y configuración del Sistema de Gestión de Tesorería
            </div>
            <div className="mb-4 text-sm">
              <span className="font-bold text-gray-600 block mb-1">Resultado de la evaluación:</span>
              La segregación de funciones se encuentra formalizada documentalmente y, adicionalmente, implementada de manera técnica en las operaciones de Tesorería mediante esquema maker-checker de doble intervención. La formalización documental y su materialización en la configuración del sistema operan de manera consistente.
            </div>
            <div className="bg-green-100 text-green-800 font-bold p-2 text-center rounded border border-green-200">
              Control evaluado: ADECUADO — No genera observación.
            </div>
          </div>
        </Acordeon>

        <Acordeon title="CA-04 · Revocación de accesos ante desvinculación de personal" defaultOpen={false}>
          <div className="bg-gray-50 p-4 rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
              <div>
                <span className="font-bold text-gray-600 block mb-1">Objetivo de control:</span>
                OC-3 — Seguridad lógica
              </div>
              <div>
                <span className="font-bold text-gray-600 block mb-1">Papel de origen:</span>
                CEAC-2026-VAN-01, pregunta 21
              </div>
            </div>
            <div className="mb-4 text-sm">
              <span className="font-bold text-gray-600 block mb-1">Evidencia:</span>
              Procedimiento de desvinculación e integración entre el sistema de Recursos Humanos y el sistema de gestión de identidades
            </div>
            <div className="mb-4 text-sm">
              <span className="font-bold text-gray-600 block mb-1">Resultado de la evaluación:</span>
              La revocación de accesos opera de manera automatizada: la registración de la baja en el sistema de Recursos Humanos dispara la desactivación de las credenciales sin intervención manual. El control elimina la dependencia de una acción discrecional, que es el punto de falla habitual de este proceso.
            </div>
            <div className="bg-green-100 text-green-800 font-bold p-2 text-center rounded border border-green-200">
              Control evaluado: ADECUADO — No genera observación.
            </div>
          </div>
        </Acordeon>

        <Acordeon title="CA-05 · Designación formal del CISO con línea de reporte independiente" defaultOpen={false}>
          <div className="bg-gray-50 p-4 rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
              <div>
                <span className="font-bold text-gray-600 block mb-1">Objetivo de control:</span>
                Transversal — gobierno de la seguridad
              </div>
              <div>
                <span className="font-bold text-gray-600 block mb-1">Papel de origen:</span>
                CEAC-2026-VAN-01, pregunta 14
              </div>
            </div>
            <div className="mb-4 text-sm">
              <span className="font-bold text-gray-600 block mb-1">Evidencia:</span>
              Acta de designación del responsable de seguridad de la información y organigrama vigente
            </div>
            <div className="mb-4 text-sm">
              <span className="font-bold text-gray-600 block mb-1">Resultado de la evaluación:</span>
              El responsable de seguridad de la información cuenta con designación formal, funciones documentadas y línea de reporte independiente de la Gerencia de Operaciones y Tecnología. La independencia orgánica permite que las observaciones de seguridad se eleven sin mediación del área cuya operación se evalúa.
            </div>
            <div className="bg-green-100 text-green-800 font-bold p-2 text-center rounded border border-green-200">
              Control evaluado: ADECUADO — No genera observación.
            </div>
          </div>
        </Acordeon>
      </div>
    </div>
  );
};

export default ControlesAdecuados;
