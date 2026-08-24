import { AlertTriangle, Flag, Users } from 'lucide-react';

const LimitacionesCierre = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <AlertTriangle className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">4. Limitaciones y procedimientos pendientes</h2>
      </div>

      <div className="prose max-w-none text-gray-700">
        <p className="mb-4">
          Se deja constancia de las condiciones que impidieron completar procedimientos previstos en el programa. Ninguna de ellas obedece a una restricción de tiempo del equipo auditor.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-3 py-2 text-left font-bold w-1/4">Procedimiento</th>
                <th className="px-3 py-2 text-center font-bold w-16">Riesgo</th>
                <th className="px-3 py-2 text-left font-bold">Causa de la limitación</th>
                <th className="px-3 py-2 text-left font-bold w-1/3">Efecto sobre la conclusión</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-3 py-2 font-medium text-xs">PA-03 — SLA de continuidad de proveedores críticos</td>
                <td className="px-3 py-2 text-center font-medium text-xs">RA-10</td>
                <td className="px-3 py-2 text-xs">Los contratos (E-12) fueron aportados de manera parcial; faltan los anexos de nivel de servicio.</td>
                <td className="px-3 py-2 text-xs text-gray-600">El procedimiento se completa al recibir los anexos; de no recibirse, se informa como limitación al alcance.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-xs">PA-04 — Seguimiento de hallazgos de auditorías previas</td>
                <td className="px-3 py-2 text-center font-medium text-xs">RA-11</td>
                <td className="px-3 py-2 text-xs">El legajo de auditorías anteriores (E-14) no fue puesto a disposición.</td>
                <td className="px-3 py-2 text-xs text-gray-600">Sostiene la calificación No Verificado de la pregunta 25 del CEAC.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-xs">PA-03 y PA-09 — Alta disponibilidad del Core para P1</td>
                <td className="px-3 py-2 text-center font-medium text-xs">RA-12</td>
                <td className="px-3 py-2 text-xs">Pendiente de habilitación del acceso de solo lectura a la consola de infraestructura.</td>
                <td className="px-3 py-2 text-xs text-gray-600">El RTO de 1 hora de P1 permanece sin verificación técnica.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-xs">PA-10 — Aislamiento e inmutabilidad de los repositorios</td>
                <td className="px-3 py-2 text-center font-medium text-xs">RA-09</td>
                <td className="px-3 py-2 text-xs">La documentación del sitio alternativo (E-08) fue aportada parcialmente.</td>
                <td className="px-3 py-2 text-xs text-gray-600">PT-OC2-02 concluye con alcance limitado; el atributo de aislamiento no se pronuncia.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-xs">PA-15 — Estrategia de recuperación del sistema de gestión de identidades</td>
                <td className="px-3 py-2 text-center font-medium text-xs">RA-03</td>
                <td className="px-3 py-2 text-xs text-red-600">Procedimiento no ejecutado. La documentación de arquitectura del componente no fue aportada.</td>
                <td className="px-3 py-2 text-xs font-medium text-red-700">El riesgo crítico permanece sin verificación. La condición se recoge parcialmente en PT-XC-01.</td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className="flex items-center gap-3 mb-6">
          <Flag className="h-8 w-8 text-corporate-blue" />
          <h2 className="text-2xl font-bold text-corporate-navy">5. Cierre del trabajo de campo</h2>
        </div>
        
        <p className="mb-4">
          El trabajo de campo se cierra el 23 de julio de 2026 con 14 papeles de trabajo de ejecución y 7 papeles de observación, sustentados en trece elementos de evidencia referenciados y conservados en el legajo del encargo.
        </p>
        
        <p className="mb-4">
          Doce de los catorce papeles de ejecución concluyeron en deficiencia y dos en adecuado con alcance limitado. De los cinco riesgos de nivel crítico identificados en la planificación, cuatro fueron confirmados con evidencia y uno —RA-03— permanece pendiente de ejecución. La distribución de los desvíos reproduce el patrón anticipado al cierre de la Fase 2: se concentran en la vigencia documental, en la formalización de objetivos y en la verificación empírica de capacidades declaradas, y no en insuficiencias de infraestructura.
        </p>

        <p className="mb-6 font-medium text-corporate-blue">
          Los papeles de observación quedan a disposición de la Fase 5 para el desarrollo de las fichas NCCCE, la cuantificación de efectos y la formulación de recomendaciones.
        </p>

        <div className="bg-corporate-gray border border-gray-200 p-6 rounded-lg text-sm grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 uppercase text-xs tracking-wider">Entidad auditada</span>
            <span className="font-bold text-corporate-navy">Financiera Crédito Fácil S.A.</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 uppercase text-xs tracking-wider">Firma auditora</span>
            <span className="font-bold text-corporate-navy">Vanguard IT Audit Group S.R.L.</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 uppercase text-xs tracking-wider">Período de ejecución</span>
            <span className="text-gray-800">03/07/2026 al 23/07/2026</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 uppercase text-xs tracking-wider">Referencia</span>
            <span className="text-gray-800">VG-F3-2026-014 · Versión 1.0</span>
          </div>
          <div className="col-span-1 md:col-span-2 pt-4 border-t border-gray-300 mt-2">
            <div className="flex items-center gap-2 mb-2 text-corporate-navy font-bold">
              <Users className="h-4 w-4" /> Equipo a cargo
            </div>
            <ul className="space-y-1 text-gray-700">
              <li><strong>Auditor responsable:</strong> Mariana Saavedra, CISA — Líder de Proyecto</li>
              <li><strong>Supervisión técnica:</strong> Luciano Agustín Donnet — Auditor Senior</li>
              <li><strong>Elaborado por:</strong> el equipo de campo, según la asignación consignada en cada papel.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LimitacionesCierre;
