import { Search, AlertOctagon, Check, X, ShieldAlert } from 'lucide-react';
import Acordeon from '../Acordeon';

const RelevamientoBcpDrp = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Search className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">3. Relevamiento del BCP y del DRP vigentes</h2>
      </div>

      <div className="prose max-w-none text-gray-700">
        <p className="mb-6">
          Este apartado documenta el resultado del relevamiento del marco de continuidad puesto a disposición por la entidad, con identificación de las deficiencias detectadas. Constituye el entregable N.° 3 comprometido en la Propuesta de Auditoría.
        </p>

        <h3 className="text-xl font-bold text-corporate-navy mt-6 mb-4 border-b pb-2">3.1 Documentación analizada</h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-4 py-2 text-left font-bold">Documento</th>
                <th className="px-4 py-2 text-left font-bold">Identificación</th>
                <th className="px-4 py-2 text-left font-bold">Estado</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2 font-medium">Plan de Continuidad del Negocio (BCP)</td>
                <td className="px-4 py-2 text-gray-600">Versión 2.4 — última modificación 14 meses antes de la fecha de relevamiento</td>
                <td className="px-4 py-2 text-green-600 font-medium">Recibido y analizado</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Plan de Recuperación ante Desastres (DRP)</td>
                <td className="px-4 py-2 text-gray-600">Versión 1.0 — elaborado el 22/08/2024, sin aprobación formal del órgano de gobierno</td>
                <td className="px-4 py-2 text-green-600 font-medium">Recibido y analizado</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Análisis de Impacto al Negocio (BIA)</td>
                <td className="px-4 py-2 text-gray-600">Documento completo con los cinco procesos, objetivos de recuperación y cuantificación de impacto</td>
                <td className="px-4 py-2 text-green-600 font-medium">Recibido y analizado</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-corporate-navy mt-6 mb-4 border-b pb-2">3.2 Cobertura del BCP por proceso crítico</h3>
        <p className="mb-4">
          El BCP se estructura por división operativa. La verificación arroja que <strong>los tres procesos medulares cuentan con plan de continuidad documentado</strong>, lo que constituye el punto de partida favorable del relevamiento: el marco existe y cubre el universo auditado. Las brechas de cobertura se localizan en la dependencia transversal y en los dos procesos complementarios.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-3 py-2 text-left font-bold">Proceso</th>
                <th className="px-3 py-2 text-right font-bold">Impacto por hora</th>
                <th className="px-3 py-2 text-center font-bold">¿Cuenta con BCP?</th>
                <th className="px-3 py-2 text-left font-bold">Contenido verificado</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr><td className="px-3 py-2 font-medium">P1 — Liquidación de Créditos</td><td className="px-3 py-2 text-right">$27.000.000</td><td className="px-3 py-2 text-center"><Check className="inline h-5 w-5 text-green-500" /></td><td className="px-3 py-2 text-gray-600">Gobernanza, umbrales, matriz de riesgos, tres procedimientos (PCO-01 a PCO-03), failback y mantenimiento</td></tr>
              <tr><td className="px-3 py-2 font-medium">P2 — Acreditación de Sueldos</td><td className="px-3 py-2 text-right">$58.000.000</td><td className="px-3 py-2 text-center"><Check className="inline h-5 w-5 text-green-500" /></td><td className="px-3 py-2 text-gray-600">Gobernanza, umbrales, procedimientos de contingencia, articulación declarada con el DRP, failback y mantenimiento</td></tr>
              <tr><td className="px-3 py-2 font-medium">P3 — Atención al Cliente Online</td><td className="px-3 py-2 text-right">$2.750.000</td><td className="px-3 py-2 text-center"><Check className="inline h-5 w-5 text-green-500" /></td><td className="px-3 py-2 text-gray-600">Gobernanza, umbrales, derivación de cabecera telefónica, teletrabajo seguro y mantenimiento</td></tr>
              <tr className="bg-red-50"><td className="px-3 py-2 font-medium text-red-700">IAM — dependencia transversal</td><td className="px-3 py-2 text-right text-red-700">Habilita P1, P2 y P3</td><td className="px-3 py-2 text-center"><X className="inline h-5 w-5 text-red-500" /></td><td className="px-3 py-2 text-red-700">Sin objetivos de recuperación propios ni procedimiento asociado, pese a ser prerrequisito</td></tr>
              <tr className="bg-gray-50"><td className="px-3 py-2 font-medium text-gray-500">P4 — Homebanking (comp.)</td><td className="px-3 py-2 text-right text-gray-500">$122.500.000</td><td className="px-3 py-2 text-center"><X className="inline h-5 w-5 text-gray-400" /></td><td className="px-3 py-2 text-gray-500">Sin plan documentado. Fuera del universo de pruebas; se informa a la Dirección</td></tr>
              <tr className="bg-gray-50"><td className="px-3 py-2 font-medium text-gray-500">P5 — Tesorería (comp.)</td><td className="px-3 py-2 text-right text-gray-500">$212.500.000</td><td className="px-3 py-2 text-center"><X className="inline h-5 w-5 text-gray-400" /></td><td className="px-3 py-2 text-gray-500">Sin plan documentado. Fuera del universo de pruebas; se informa a la Dirección</td></tr>
            </tbody>
          </table>
        </div>

        <Acordeon title="Hallazgo estructural del relevamiento">
          <div className="space-y-3 mt-2 text-sm">
            <p>
              El BCP cubre los tres procesos medulares pero <strong>omite el componente del que los tres dependen</strong>. El IAM es prerrequisito de P1, P2 y P3: sin control de accesos disponible, ninguno de ellos puede restablecerse, y el propio BIA le asigna un RTO efectivo de 15 minutos —el más exigente de todo el marco—. Sin embargo, no figura en el plan como componente con objetivos de recuperación propios ni con procedimiento asociado. La consecuencia práctica es que los RTO de los tres procesos medulares descansan sobre una dependencia que nadie se comprometió formalmente a recuperar.
            </p>
            <p>
              <strong>Sobre la capa técnica de recuperación.</strong> El relevamiento confirma que el DRP existe como documento, circunstancia que descarta la hipótesis de ausencia total de estrategia técnica. Su valor como control, no obstante, se encuentra comprometido por tres condiciones concurrentes: carece de aprobación formal, excluye al componente del que dependen los tres procesos medulares y declara tiempos de recuperación superiores a los objetivos que el propio marco comprometió. Un plan que reúne esas tres condiciones no puede sostener la continuidad que el BCP le atribuye.
            </p>
            <p>
              <strong>Sobre los procesos complementarios.</strong> P4 y P5 tampoco cuentan con plan documentado. Dado que se encuentran fuera del universo de pruebas de este encargo, la situación se consigna como información para la Dirección y no como objeto de verificación sustantiva. Corresponde señalar, no obstante, que el BIA les asigna en conjunto $335.000.000 por hora, de modo que la entidad debería evaluar su incorporación al marco de continuidad en un ciclo posterior.
            </p>
          </div>
        </Acordeon>

        <h3 className="text-xl font-bold text-corporate-navy mt-8 mb-4 flex items-center gap-2 border-b pb-2">
          <AlertOctagon className="h-5 w-5 text-red-500" /> 3.3 Deficiencias detectadas
        </h3>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-red-50 text-red-900">
              <tr>
                <th className="px-3 py-2 text-left font-bold w-16">Ref.</th>
                <th className="px-3 py-2 text-left font-bold">Deficiencia</th>
                <th className="px-3 py-2 text-left font-bold w-48">Criterio vulnerado</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr><td className="px-3 py-2 font-medium">D-01</td><td className="px-3 py-2">El BCP no incorpora el IAM como componente con objetivos de recuperación propios, pese a ser prerrequisito de los tres procesos medulares. Tampoco cubre P4 ni P5, identificados por el BIA como procesos críticos complementarios.</td><td className="px-3 py-2 text-gray-500 text-xs">BCRA Com. «A» 7777 · ISO 22301 8.3</td></tr>
              <tr><td className="px-3 py-2 font-medium">D-02</td><td className="px-3 py-2">El BCP registra 14 meses sin modificación, excediendo el ciclo de revisión no mayor a doce meses. El propio plan fija revisión anual o ante modificaciones mayores, de modo que el desvío es también respecto de su norma interna.</td><td className="px-3 py-2 text-gray-500 text-xs">BCRA Com. «A» 7777 · ISO/IEC 27002:2022 5.29</td></tr>
              <tr><td className="px-3 py-2 font-medium">D-03</td><td className="px-3 py-2">El DRP se mantiene en versión 1.0 sin aprobación formal del Comité de Gobierno de Tecnología ni del Directorio. Elevado para su tratamiento el 19/11/2024, su consideración fue diferida hasta contar con los resultados de un ejercicio de recuperación que tampoco se ejecutó.</td><td className="px-3 py-2 text-gray-500 text-xs">BCRA Com. «A» 7777 · ISO/IEC 27002:2022 5.30</td></tr>
              <tr><td className="px-3 py-2 font-medium">D-10</td><td className="px-3 py-2">El DRP no comprende al sistema de gestión de identidades, pese a que el BIA lo identifica como dependencia sistémica de la totalidad de los procesos críticos con un tiempo de recuperación efectivo de 15 minutos. Tampoco comprende la plataforma de CRM que soporta a P3.</td><td className="px-3 py-2 text-gray-500 text-xs">ISO 22301 8.3 · ISO/IEC 27002:2022 5.30</td></tr>
              <tr><td className="px-3 py-2 font-medium">D-11</td><td className="px-3 py-2">Los tiempos estimados de los procedimientos técnicos de recuperación del Core Bancario (de 2 a 4 horas) y del Motor Batch (de 3 a 6 horas) exceden los tiempos de recuperación objetivo declarados en el BIA para los procesos que dichos sistemas soportan (1 hora para P1 y 2 horas para P2). El propio marco de continuidad declara, por lo tanto, objetivos que su capa técnica no puede satisfacer.</td><td className="px-3 py-2 text-gray-500 text-xs">ISO 22301 8.2 y 8.3 · BCRA Com. «A» 7777</td></tr>
              <tr><td className="px-3 py-2 font-medium">D-04</td><td className="px-3 py-2">Los objetivos de recuperación del BCP no coinciden con los del BIA en P2 ni en P3 (ver detalle en el apartado 6.4). Dos documentos del mismo marco declaran tiempos distintos para el mismo proceso.</td><td className="px-3 py-2 text-gray-500 text-xs">ISO 22301 8.2 · COBIT 2019 DSS04</td></tr>
              <tr><td className="px-3 py-2 font-medium">D-05</td><td className="px-3 py-2">El RTO de P2 está consignado en el BCP como «valor operativo tentativo, en revisión, no aprobado formalmente por la Alta Dirección», y el RPO como «no definido». Un objetivo no aprobado no es exigible a TI ni verificable por auditoría.</td><td className="px-3 py-2 text-gray-500 text-xs">BCRA Com. «A» 7777 · ISO 22301 8.2.2</td></tr>
              <tr><td className="px-3 py-2 font-medium">D-06</td><td className="px-3 py-2">No se aportó evidencia de ejecución de simulacros ni de pruebas de restauración en los últimos doce meses, pese a que el BCP prevé un simulacro anual con TI y capacitación semestral al personal.</td><td className="px-3 py-2 text-gray-500 text-xs">BCRA Com. «A» 7777 · ISO/IEC 27002:2022 8.13</td></tr>
              <tr><td className="px-3 py-2 font-medium">D-07</td><td className="px-3 py-2">El BCP prevé la operación en modalidad remota durante contingencias, con conexión por VPN y autenticación multifactor en un plazo de 45 minutos, pero no documenta cómo se verifica que los controles de acceso del entorno remoto sean equivalentes a los de producción.</td><td className="px-3 py-2 text-gray-500 text-xs">BCRA Com. «A» 7783 · ISO/IEC 27002:2022 5.15</td></tr>
              <tr><td className="px-3 py-2 font-medium">D-08</td><td className="px-3 py-2">La matriz de riesgos incorporada al BCP (R-01 a R-04) alcanza únicamente al proceso de Liquidación de Créditos y no se integra con el registro corporativo de riesgos de TI.</td><td className="px-3 py-2 text-gray-500 text-xs">COBIT 2019 APO12 · ISO 22301 8.2</td></tr>
              <tr><td className="px-3 py-2 font-medium">D-09</td><td className="px-3 py-2">El esquema de aprobación es heterogéneo entre divisiones: en Acreditación de Haberes y Atención al Cliente el marco se eleva al Comité de Gobierno de Tecnología y al Directorio, mientras que en Liquidación de Créditos las firmas previstas se agotan en el nivel gerencial.</td><td className="px-3 py-2 text-gray-500 text-xs">BCRA Com. «A» 7777 · COSO 2013 CC1.5</td></tr>
            </tbody>
          </table>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-5 mt-6">
          <div className="flex items-start gap-4">
            <ShieldAlert className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-red-800 m-0 mb-2">Condición que compromete la independencia del encargo</h4>
              <p className="text-red-900 text-sm m-0 mb-2">
                El BCP designa como integrantes del Equipo de Respuesta Operativa de la entidad al <strong>Ing. Esp. César Tomás Delgado</strong> (División Liquidación de Créditos) y al <strong>Ing. Esp. Ignacio Veliz</strong> (División Acreditación de Haberes). Ambos nombres corresponden a integrantes del equipo auditor asignado a este encargo.
              </p>
              <p className="text-red-900 text-sm m-0">
                Ninguna persona puede ejecutar un procedimiento de contingencia por cuenta de la entidad y auditar ese mismo procedimiento. La situación fue comunicada por escrito a la Gerencia General el 02/07/2026, y su resolución —rectificación de las designaciones del BCP o sustitución de los integrantes del equipo— es condición previa a la emisión de conclusiones definitivas sobre OC-1 y OC-3. Hasta que la entidad se pronuncie, los procedimientos alcanzados se ejecutan bajo salvaguarda: ningún profesional comprendido en la condición interviene en la prueba que lo alcanza, y los papeles respectivos se someten a revisión adicional del Líder de Proyecto.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RelevamientoBcpDrp;
