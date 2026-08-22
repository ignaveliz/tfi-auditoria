import { FileSignature, CodeSquare, LayoutList, Layers } from 'lucide-react';
import Acordeon from '../Acordeon';

const ProgramaAuditoria = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <FileSignature className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">7. Programa de auditoría</h2>
      </div>

      <div className="prose max-w-none text-gray-700">
        <p className="mb-6">
          El programa traduce cada objetivo de control en procedimientos verificables. Su extensión responde al nivel de confianza determinado en el apartado 4: estrategia mixta, con ampliación dirigida sobre políticas, vigencia documental y rendición de cuentas.
        </p>

        <Acordeon title="7.1 Procedimientos por objetivo de control">
          <div className="overflow-x-auto mb-2 mt-2">
            <table className="min-w-full divide-y divide-gray-200 border text-xs">
              <thead className="bg-corporate-gray text-corporate-navy">
                <tr>
                  <th className="px-2 py-2 text-center font-bold">Ref.</th>
                  <th className="px-2 py-2 text-center font-bold">OC</th>
                  <th className="px-2 py-2 text-left font-bold">Procedimiento</th>
                  <th className="px-2 py-2 text-center font-bold">Técnica</th>
                  <th className="px-2 py-2 text-center font-bold">Riesgo</th>
                  <th className="px-2 py-2 text-center font-bold">Responsable</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr><td className="px-2 py-2 text-center font-medium">PA-01</td><td className="px-2 py-2 text-center font-bold">OC-1</td><td className="px-2 py-2">Inspeccionar el BCP y el DRP: vigencia, versión, aprobación y control de cambios sobre los tres procesos medulares. Cotejar la cobertura de sistemas del DRP y sus tiempos técnicos estimados contra los objetivos del BIA. Dejar constancia de la ausencia de plan para el IAM y, con alcance documental, para P4 y P5</td><td className="px-2 py-2 text-center">Inspección</td><td className="px-2 py-2 text-center">RA-04, RA-07, RA-13</td><td className="px-2 py-2 text-center">Román</td></tr>
                <tr><td className="px-2 py-2 text-center font-medium">PA-02</td><td className="px-2 py-2 text-center font-bold">OC-1</td><td className="px-2 py-2">Reconciliar MTPD, RTO, RPO e impacto entre el BIA, el BCP y las actas de aprobación, con foco en las discrepancias de P2 y P3 y en la consistencia RTO-MTPD</td><td className="px-2 py-2 text-center">Cotejo y entrevista</td><td className="px-2 py-2 text-center">RA-01, RA-02, RA-05</td><td className="px-2 py-2 text-center">Román</td></tr>
                <tr><td className="px-2 py-2 text-center font-medium">PA-03</td><td className="px-2 py-2 text-center font-bold">OC-1</td><td className="px-2 py-2">Evaluar el IAM, la Tesorería y los terceros críticos como dependencias de la cadena de recuperación, incluidos los SLA comprometidos</td><td className="px-2 py-2 text-center">Walkthrough</td><td className="px-2 py-2 text-center">RA-03, RA-10, RA-12</td><td className="px-2 py-2 text-center">Donnet · equipo técnico</td></tr>
                <tr><td className="px-2 py-2 text-center font-medium">PA-04</td><td className="px-2 py-2 text-center font-bold">OC-1</td><td className="px-2 py-2">Revisar la planificación y ejecución de pruebas de continuidad y el seguimiento de las acciones derivadas de auditorías previas</td><td className="px-2 py-2 text-center">Inspección</td><td className="px-2 py-2 text-center">RA-06, RA-11</td><td className="px-2 py-2 text-center">Román</td></tr>
                <tr><td className="px-2 py-2 text-center font-medium">PA-05</td><td className="px-2 py-2 text-center font-bold">OC-1</td><td className="px-2 py-2">Contrastar los tres escenarios de contingencia con la respuesta prevista en el marco vigente</td><td className="px-2 py-2 text-center">Entrevista y walkthrough</td><td className="px-2 py-2 text-center">RA-07, RA-09</td><td className="px-2 py-2 text-center">Saavedra · Donnet</td></tr>
                <tr><td className="px-2 py-2 text-center font-medium">PA-06</td><td className="px-2 py-2 text-center font-bold">OC-2</td><td className="px-2 py-2">Evaluar frecuencia, retención, cifrado y alcance de la política de copias, y su correspondencia con los RPO declarados</td><td className="px-2 py-2 text-center">Inspección técnica</td><td className="px-2 py-2 text-center">RA-02</td><td className="px-2 py-2 text-center">Zato Sosa</td></tr>
                <tr><td className="px-2 py-2 text-center font-medium">PA-07</td><td className="px-2 py-2 text-center font-bold">OC-2</td><td className="px-2 py-2">Cotejar la frecuencia declarada con los logs de ejecución del Core y de los servidores batch del período</td><td className="px-2 py-2 text-center">CAAT / muestreo</td><td className="px-2 py-2 text-center">RA-06</td><td className="px-2 py-2 text-center">Equipo técnico</td></tr>
                <tr><td className="px-2 py-2 text-center font-medium">PA-08</td><td className="px-2 py-2 text-center font-bold">OC-2</td><td className="px-2 py-2">Verificar almacenamiento fuera del sitio principal, replicación e inmutabilidad de los repositorios de resguardo</td><td className="px-2 py-2 text-center">Inspección técnica</td><td className="px-2 py-2 text-center">RA-09</td><td className="px-2 py-2 text-center">Equipo técnico</td></tr>
                <tr><td className="px-2 py-2 text-center font-medium">PA-09</td><td className="px-2 py-2 text-center font-bold">OC-2</td><td className="px-2 py-2">Evaluar las restauraciones ejecutadas contra los RTO y RPO de los procesos medulares, registrando tiempos reales</td><td className="px-2 py-2 text-center">Reejecución u observación</td><td className="px-2 py-2 text-center">RA-06, RA-12</td><td className="px-2 py-2 text-center">Zato Sosa</td></tr>
                <tr><td className="px-2 py-2 text-center font-medium">PA-10</td><td className="px-2 py-2 text-center font-bold">OC-2</td><td className="px-2 py-2">Verificar la protección de las copias frente al escenario de cifrado malicioso sobre el servidor batch</td><td className="px-2 py-2 text-center">Configuración y logs</td><td className="px-2 py-2 text-center">RA-09</td><td className="px-2 py-2 text-center">Equipo técnico</td></tr>
                <tr><td className="px-2 py-2 text-center font-medium">PA-11</td><td className="px-2 py-2 text-center font-bold">OC-3</td><td className="px-2 py-2">Comparar credenciales, factores de autenticación, privilegios y trazabilidad entre producción y el entorno remoto de contingencia</td><td className="px-2 py-2 text-center">Inspección comparativa</td><td className="px-2 py-2 text-center">RA-08, RA-14</td><td className="px-2 py-2 text-center">Veliz</td></tr>
                <tr><td className="px-2 py-2 text-center font-medium">PA-12</td><td className="px-2 py-2 text-center font-bold">OC-3</td><td className="px-2 py-2">Revisar el procedimiento de accesos break-glass, su autorización previa y su revisión posterior al incidente</td><td className="px-2 py-2 text-center">Trazabilidad</td><td className="px-2 py-2 text-center">RA-08</td><td className="px-2 py-2 text-center">Veliz</td></tr>
                <tr><td className="px-2 py-2 text-center font-medium">PA-13</td><td className="px-2 py-2 text-center font-bold">OC-3</td><td className="px-2 py-2">Analizar la población de cuentas genéricas, de servicio y con privilegios excesivos en el entorno alternativo</td><td className="px-2 py-2 text-center">Análisis de población</td><td className="px-2 py-2 text-center">RA-08</td><td className="px-2 py-2 text-center">Veliz</td></tr>
                <tr><td className="px-2 py-2 text-center font-medium">PA-14</td><td className="px-2 py-2 text-center font-bold">OC-3</td><td className="px-2 py-2">Verificar que los registros de auditoría del entorno de recuperación sean equivalentes, centralizados e íntegros</td><td className="px-2 py-2 text-center">CAAT e inspección</td><td className="px-2 py-2 text-center">RA-08</td><td className="px-2 py-2 text-center">Equipo técnico</td></tr>
                <tr><td className="px-2 py-2 text-center font-medium">PA-15</td><td className="px-2 py-2 text-center font-bold">OC-3</td><td className="px-2 py-2">Evaluar la estrategia de recuperación del propio IAM y su condición de prerrequisito de los tres procesos medulares</td><td className="px-2 py-2 text-center">Walkthrough y prueba documentada</td><td className="px-2 py-2 text-center">RA-03</td><td className="px-2 py-2 text-center">Donnet · equipo técnico</td></tr>
              </tbody>
            </table>
          </div>
        </Acordeon>

        <h3 className="text-xl font-bold text-corporate-navy mt-6 mb-4 flex items-center gap-2 border-b pb-2">
          <LayoutList className="h-5 w-5" /> 7.2 Escenarios de contingencia a evaluar
        </h3>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-3 py-2 text-left font-bold w-1/4">Escenario</th>
                <th className="px-3 py-2 text-center font-bold">Procesos afectados</th>
                <th className="px-3 py-2 text-left font-bold w-1/4">Pregunta de auditoría</th>
                <th className="px-3 py-2 text-left font-bold">Evidencia mínima</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-3 py-2 font-bold text-corporate-navy">1 — Falla de los servidores principales</td>
                <td className="px-3 py-2 text-center font-medium">P1, P2 y el IAM</td>
                <td className="px-3 py-2">¿El failover y el orden de recuperación permiten alcanzar los RTO declarados?</td>
                <td className="px-3 py-2 text-gray-600">Arquitectura, configuración de redundancia, registro de conmutación y tiempos reales</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold text-corporate-navy">2 — Incendio en la sala de servidores</td>
                <td className="px-3 py-2 text-center font-medium">P1, P2 y P3</td>
                <td className="px-3 py-2">¿El sitio alternativo, las copias fuera del sitio y el trabajo remoto sostienen la operación?</td>
                <td className="px-3 py-2 text-gray-600">Estrategia documentada, contrato y SLA del sitio, inventario, prueba o simulacro y plan de acción</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold text-corporate-navy">3 — Ransomware en el procesamiento batch</td>
                <td className="px-3 py-2 text-center font-medium">P2 y procesos dependientes</td>
                <td className="px-3 py-2">¿Las copias aisladas o inmutables permiten recuperar dentro del RPO preservando la integridad?</td>
                <td className="px-3 py-2 text-gray-600">Política, configuración de aislamiento, retención, permisos, logs y prueba de restauración</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm bg-gray-50 border-l-4 border-gray-400 p-3 mb-8">
          <strong>Codificación de la evidencia:</strong> Los códigos <code>E-01 a E-16</code> identifican los requerimientos de la Solicitud de Información Inicial, esto es, la documentación que se solicita a la entidad. La evidencia efectivamente obtenida durante la ejecución se codifica de manera independiente como <code>EV-nn</code> en el compendio de papeles de trabajo, de modo que no se confundan el requerimiento y el elemento probatorio que de él resulta.
        </p>

        <Acordeon title="7.3 Muestreo y documentación">
          <p className="text-sm mt-2">
            Cuando la prueba total no sea practicable, se documentará el universo, el método de selección, el tamaño de la muestra y el criterio aplicado. Cada procedimiento genera un papel de trabajo fechado y referenciado, con objetivo, alcance, procedimiento ejecutado, evidencia obtenida, resultado, conclusión, elaborador, revisor y referencia normativa. Los desvíos confirmados se derivan a un Papel de Trabajo de Observación (PT-OBS) antes de redactar la observación definitiva bajo metodología NCCCE.
          </p>
        </Acordeon>

        <h3 className="text-xl font-bold text-corporate-navy mt-6 mb-4 flex items-center gap-2 border-b pb-2">
          <Layers className="h-5 w-5" /> 7.4 Papeles de trabajo previstos
        </h3>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-3 py-2 text-center font-bold w-24">Ref. PT</th>
                <th className="px-3 py-2 text-left font-bold">Tema</th>
                <th className="px-3 py-2 text-center font-bold w-24">OC</th>
                <th className="px-3 py-2 text-left font-bold">Procedimientos asociados</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr><td className="px-3 py-2 text-center font-medium">PT-OC1-01</td><td className="px-3 py-2">Vigencia, aprobación y cobertura del BCP y del DRP</td><td className="px-3 py-2 text-center font-bold">OC-1</td><td className="px-3 py-2 text-gray-600">PA-01</td></tr>
              <tr><td className="px-3 py-2 text-center font-medium">PT-OC1-02</td><td className="px-3 py-2">Consistencia de MTPD, RTO y RPO de los procesos medulares</td><td className="px-3 py-2 text-center font-bold">OC-1</td><td className="px-3 py-2 text-gray-600">PA-02</td></tr>
              <tr><td className="px-3 py-2 text-center font-medium">PT-OC1-03</td><td className="px-3 py-2">Dependencias de recuperación: IAM, Tesorería y terceros</td><td className="px-3 py-2 text-center font-bold">OC-1</td><td className="px-3 py-2 text-gray-600">PA-03</td></tr>
              <tr><td className="px-3 py-2 text-center font-medium">PT-OC1-04</td><td className="px-3 py-2">Pruebas de continuidad y seguimiento de acciones</td><td className="px-3 py-2 text-center font-bold">OC-1</td><td className="px-3 py-2 text-gray-600">PA-04, PA-05</td></tr>
              <tr><td className="px-3 py-2 text-center font-medium">PT-OC2-01</td><td className="px-3 py-2">Política de resguardo y ejecución real de copias</td><td className="px-3 py-2 text-center font-bold">OC-2</td><td className="px-3 py-2 text-gray-600">PA-06, PA-07</td></tr>
              <tr><td className="px-3 py-2 text-center font-medium">PT-OC2-04</td><td className="px-3 py-2">Monitoreo y compensación de los fallos de resguardo</td><td className="px-3 py-2 text-center font-bold">OC-2</td><td className="px-3 py-2 text-gray-600">PA-07</td></tr>
              <tr><td className="px-3 py-2 text-center font-medium">PT-OC2-02</td><td className="px-3 py-2">Almacenamiento fuera del sitio, replicación e inmutabilidad</td><td className="px-3 py-2 text-center font-bold">OC-2</td><td className="px-3 py-2 text-gray-600">PA-08, PA-10</td></tr>
              <tr><td className="px-3 py-2 text-center font-medium">PT-OC2-03</td><td className="px-3 py-2">Pruebas de restauración contra RTO y RPO</td><td className="px-3 py-2 text-center font-bold">OC-2</td><td className="px-3 py-2 text-gray-600">PA-09</td></tr>
              <tr><td className="px-3 py-2 text-center font-medium">PT-OC3-01</td><td className="px-3 py-2">Equivalencia de accesos y autenticación entre entornos</td><td className="px-3 py-2 text-center font-bold">OC-3</td><td className="px-3 py-2 text-gray-600">PA-11, PA-14</td></tr>
              <tr><td className="px-3 py-2 text-center font-medium">PT-OC3-02</td><td className="px-3 py-2">Accesos de emergencia y revisión posterior</td><td className="px-3 py-2 text-center font-bold">OC-3</td><td className="px-3 py-2 text-gray-600">PA-12</td></tr>
              <tr><td className="px-3 py-2 text-center font-medium">PT-OC3-03</td><td className="px-3 py-2">Cuentas genéricas, de servicio y privilegios excesivos</td><td className="px-3 py-2 text-center font-bold">OC-3</td><td className="px-3 py-2 text-gray-600">PA-13</td></tr>
              <tr><td className="px-3 py-2 text-center font-medium">PT-OC3-04</td><td className="px-3 py-2">Estrategia de recuperación del IAM</td><td className="px-3 py-2 text-center font-bold">OC-3</td><td className="px-3 py-2 text-gray-600">PA-15</td></tr>
              <tr className="bg-gray-50"><td className="px-3 py-2 text-center font-medium">PT-XC-01</td><td className="px-3 py-2 font-medium">Reconciliación transversal BIA – BCP – DRP – CEAC y control de cambios</td><td className="px-3 py-2 text-center font-bold">Transversal</td><td className="px-3 py-2 text-gray-600">PA-01, PA-02</td></tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default ProgramaAuditoria;
