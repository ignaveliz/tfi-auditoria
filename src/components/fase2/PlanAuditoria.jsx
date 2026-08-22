import { CalendarDays, ShieldCheck, Users, Target } from 'lucide-react';
import Acordeon from '../Acordeon';

const PlanAuditoria = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Target className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">6. Plan de Auditoría</h2>
      </div>

      <div className="prose max-w-none text-gray-700">
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded border">
            <h4 className="font-bold text-corporate-navy mb-2">6.1 Identificación</h4>
            <ul className="text-sm space-y-1">
              <li><strong>Repartición auditada:</strong> Financiera Crédito Fácil S.A. — Gerencia de Operaciones y Tecnología</li>
              <li><strong>Domicilio:</strong> San Miguel de Tucumán, Provincia de Tucumán</li>
              <li><strong>Autoridad responsable:</strong> Gerencia General y Directorio</li>
              <li><strong>Tipo de auditoría:</strong> Auditoría de Controles Generales de TI — marco de resiliencia operativa</li>
              <li><strong>Registro N.°:</strong> VG-PA-2026-014</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded border flex flex-col justify-center">
            <ul className="text-sm space-y-1">
              <li><strong>Inicio planificado / real:</strong> 25/06/2026</li>
              <li><strong>Finalización planificada:</strong> 30/07/2026</li>
              <li><strong>Finalización real:</strong> En curso</li>
              <li><strong>Auditor responsable:</strong> Mariana Saavedra, CISA — Líder de Proyecto</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold text-corporate-navy mt-6 mb-2 border-b pb-2">6.2 Objetivo</h3>
        <p className="mb-6 text-sm">
          Evaluar la existencia, el diseño, la aprobación formal, la vigencia, la consistencia metodológica y la efectividad operativa del BCP, del DRP y del BIA de Financiera Crédito Fácil S.A., verificando su alineación con las Comunicaciones «A» 7777 y «A» 7783 del BCRA y con las buenas prácticas internacionales de continuidad y seguridad de la información.
        </p>

        <h3 className="text-xl font-bold text-corporate-navy mt-6 mb-2 border-b pb-2">6.3 Alcance definitivo</h3>
        <p className="mb-4 text-sm">
          Controles generales de TI sobre el marco de resiliencia operativa, la gestión de resguardos y recuperación de datos, y la seguridad lógica en entornos de contingencia, aplicados a los <strong>tres procesos medulares</strong> y a la dependencia transversal del IAM, en el Departamento de Operaciones y Tecnología, la División Banca Digital y el Departamento de Seguridad de la Información. Período de registros: 01/06/2025 al 30/06/2026.
        </p>

        <Acordeon title="Profundidad de la revisión por proceso">
          <div className="overflow-x-auto mt-2 mb-4">
            <table className="min-w-full divide-y divide-gray-200 border text-sm">
              <thead className="bg-corporate-gray text-corporate-navy">
                <tr>
                  <th className="px-3 py-2 text-left font-bold">Proceso</th>
                  <th className="px-3 py-2 text-center font-bold">Condición</th>
                  <th className="px-3 py-2 text-left font-bold">Profundidad de la revisión</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr><td className="px-3 py-2 font-medium">P1 — Liquidación de Créditos</td><td className="px-3 py-2 text-center">Medular</td><td className="px-3 py-2">Revisión integral: pruebas de cumplimiento y sustantivas sobre OC-1, OC-2 y OC-3</td></tr>
                <tr><td className="px-3 py-2 font-medium">P2 — Acreditación de Sueldos</td><td className="px-3 py-2 text-center">Medular</td><td className="px-3 py-2">Revisión integral, con ampliación dirigida por concentrar dos de los cinco riesgos críticos</td></tr>
                <tr><td className="px-3 py-2 font-medium">P3 — Atención al Cliente Online</td><td className="px-3 py-2 text-center">Medular</td><td className="px-3 py-2">Revisión integral, con foco en la discrepancia de objetivos entre el BIA y el BCP</td></tr>
                <tr className="bg-red-50"><td className="px-3 py-2 font-medium">IAM</td><td className="px-3 py-2 text-center">Dependencia transversal</td><td className="px-3 py-2">Revisión integral: condiciona el cumplimiento de los objetivos de los tres procesos medulares</td></tr>
                <tr className="bg-gray-50"><td className="px-3 py-2 font-medium text-gray-600">P4 — Transferencias por Homebanking</td><td className="px-3 py-2 text-center text-gray-600">Complementario</td><td className="px-3 py-2 text-gray-600">Verificación documental acotada: cobertura del marco y dependencias declaradas. Sin pruebas sustantivas</td></tr>
                <tr className="bg-gray-50"><td className="px-3 py-2 font-medium text-gray-600">P5 — Tesorería y Pagos Interbancarios</td><td className="px-3 py-2 text-center text-gray-600">Complementario</td><td className="px-3 py-2 text-gray-600">Verificación documental acotada: cobertura del marco y precedencias en la cadena de recuperación</td></tr>
              </tbody>
            </table>
          </div>

          <div className="overflow-x-auto mb-4">
            <table className="min-w-full divide-y divide-gray-200 border text-xs">
              <thead className="bg-corporate-gray text-corporate-navy">
                <tr>
                  <th className="px-2 py-2 text-left font-bold">Proceso</th>
                  <th className="px-2 py-2 text-left font-bold">OC-1 · Continuidad</th>
                  <th className="px-2 py-2 text-left font-bold">OC-2 · Resguardos</th>
                  <th className="px-2 py-2 text-left font-bold">OC-3 · Seguridad lógica</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr><td className="px-2 py-2 font-bold">P1</td><td className="px-2 py-2">Prioridad de recuperación, dependencias del Core y del API Gateway, consistencia de MTPD/RTO/RPO</td><td className="px-2 py-2">Copias del Core, restauración y consistencia contable</td><td className="px-2 py-2">IAM, privilegios y trazabilidad del acceso al Core en contingencia</td></tr>
                <tr><td className="px-2 py-2 font-bold">P2</td><td className="px-2 py-2">Ventana de pago, procesamiento batch y aprobación formal de los objetivos</td><td className="px-2 py-2">Copias del batch, recuperación de lotes y cuantificación del RPO</td><td className="px-2 py-2">Acceso de operadores, Banca Empresa y entorno alternativo</td></tr>
                <tr><td className="px-2 py-2 font-bold">P3</td><td className="px-2 py-2">Continuidad del CRM, canales digitales y criterio de prevalencia BIA-BCP</td><td className="px-2 py-2">Resguardo de tickets y datos personales</td><td className="px-2 py-2">Autenticación, perfiles y trazabilidad en CRM y canales</td></tr>
                <tr className="text-gray-500 bg-gray-50"><td className="px-2 py-2 font-bold">P4 (comp.)</td><td className="px-2 py-2">Cobertura del marco y dependencias declaradas</td><td className="px-2 py-2">Verificación documental de la política aplicable</td><td className="px-2 py-2">Verificación documental de la matriz de accesos</td></tr>
                <tr className="text-gray-500 bg-gray-50"><td className="px-2 py-2 font-bold">P5 (comp.)</td><td className="px-2 py-2">Cobertura del marco y precedencias de recuperación</td><td className="px-2 py-2">Verificación documental de la política aplicable</td><td className="px-2 py-2">Verificación documental del esquema maker-checker</td></tr>
              </tbody>
            </table>
          </div>
        </Acordeon>

        <h3 className="text-xl font-bold text-corporate-navy mt-6 mb-2 border-b pb-2">6.4 Criterios de auditoría</h3>
        <p className="mb-6 text-sm">
          BCRA Com. «A» 7777, «A» 7783 y «A» 7724 · ISO/IEC 27002:2022, controles 5.15, 5.18, 5.29, 5.30 y 8.13 · ISO 22301, cláusulas 8.2 y 8.3 · COBIT 2019, procesos DSS04, DSS01 y APO12 · COSO 2013, components CC1 a CC5 · ISO/IEC 19011 e ISACA ITAF · Ley N.° 25.326 de Protección de Datos Personales.
        </p>

        <h3 className="text-xl font-bold text-corporate-navy mt-6 mb-4 flex items-center gap-2 border-b pb-2">
          <Users className="h-5 w-5" /> 6.5 Equipo asignado y asignación de horas
        </h3>
        <p className="mb-4 text-sm">La distribución respeta las 520 horas comprometidas en la Propuesta de Auditoría y su estructura por categoría profesional.</p>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-3 py-2 text-left font-bold">Integrante</th>
                <th className="px-3 py-2 text-left font-bold">Rol</th>
                <th className="px-3 py-2 text-left font-bold">Asignación principal</th>
                <th className="px-3 py-2 text-center font-bold">Horas</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr><td className="px-3 py-2 font-medium">Mariana Saavedra</td><td className="px-3 py-2">Líder de Proyecto</td><td className="px-3 py-2">Conducción, escenarios, informes y presentación ejecutiva</td><td className="px-3 py-2 text-center">40</td></tr>
              <tr><td className="px-3 py-2 font-medium">Luciano Agustín Donnet</td><td className="px-3 py-2">Auditor Senior</td><td className="px-3 py-2">CEAC, supervisión técnica, dependencias y consolidación</td><td className="px-3 py-2 text-center">60</td></tr>
              <tr><td className="px-3 py-2 font-medium">Belén Iara Román</td><td className="px-3 py-2">Auditora</td><td className="px-3 py-2">OC-1: relevamiento BCP/DRP, evaluación del BIA y pruebas de continuidad</td><td className="px-3 py-2 text-center">80</td></tr>
              <tr><td className="px-3 py-2 font-medium">Celina Abigail Zato Sosa</td><td className="px-3 py-2">Auditora</td><td className="px-3 py-2">OC-2: política de resguardos, restauración y evidencia de pruebas</td><td className="px-3 py-2 text-center">80</td></tr>
              <tr><td className="px-3 py-2 font-medium">Ignacio Martín Veliz</td><td className="px-3 py-2">Auditor</td><td className="px-3 py-2">OC-3: accesos, break-glass y entorno de contingencia</td><td className="px-3 py-2 text-center">80</td></tr>
              <tr><td className="px-3 py-2 font-medium">César Tomás Delgado</td><td className="px-3 py-2">Técnico — referente técnico</td><td className="px-3 py-2">Infraestructura, sitio alternativo, IAM y cifrado</td><td className="px-3 py-2 text-center">60</td></tr>
              <tr><td className="px-3 py-2 font-medium">Leopoldo Gabriel Samaniego</td><td className="px-3 py-2">Técnico</td><td className="px-3 py-2">Extracción y análisis de logs de resguardo y batch</td><td className="px-3 py-2 text-center">60</td></tr>
              <tr><td className="px-3 py-2 font-medium">Nadia Enoa Rizo Avalos</td><td className="px-3 py-2">Técnico</td><td className="px-3 py-2">Configuraciones del entorno DRP y pistas de auditoría</td><td className="px-3 py-2 text-center">60</td></tr>
            </tbody>
            <tfoot className="bg-gray-100 font-bold text-corporate-navy">
              <tr>
                <td colSpan="3" className="px-3 py-2 text-right">Total (8 profesionales):</td>
                <td className="px-3 py-2 text-center">520</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <h3 className="text-xl font-bold text-corporate-navy mt-6 mb-4 flex items-center gap-2 border-b pb-2">
          <CalendarDays className="h-5 w-5" /> 6.6 Cronograma
        </h3>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-3 py-2 text-left font-bold">Actividad</th>
                <th className="px-3 py-2 text-center font-bold">Período</th>
                <th className="px-3 py-2 text-center font-bold">Horas</th>
                <th className="px-3 py-2 text-left font-bold">Responsable</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr><td className="px-3 py-2">Planificación, acta de inicio, relevamiento documental y CEAC</td><td className="px-3 py-2 text-center">25/06 – 02/07</td><td className="px-3 py-2 text-center">50</td><td className="px-3 py-2 text-xs">Saavedra · Donnet · auditores</td></tr>
              <tr><td className="px-3 py-2">Relevamiento del BCP/DRP y evaluación del BIA</td><td className="px-3 py-2 text-center">03/07 – 07/07</td><td className="px-3 py-2 text-center">44</td><td className="px-3 py-2 text-xs">Román · Donnet</td></tr>
              <tr><td className="px-3 py-2">OC-1 — Pruebas de continuidad y seguimiento de acciones</td><td className="px-3 py-2 text-center">07/07 – 09/07</td><td className="px-3 py-2 text-center">32</td><td className="px-3 py-2 text-xs">Román</td></tr>
              <tr><td className="px-3 py-2">OC-2 — Resguardos, restauración e inmutabilidad</td><td className="px-3 py-2 text-center">03/07 – 14/07</td><td className="px-3 py-2 text-center">144</td><td className="px-3 py-2 text-xs">Zato Sosa · equipo técnico</td></tr>
              <tr><td className="px-3 py-2">OC-3 — Seguridad lógica y accesos en contingencia</td><td className="px-3 py-2 text-center">08/07 – 16/07</td><td className="px-3 py-2 text-center">124</td><td className="px-3 py-2 text-xs">Veliz · equipo técnico</td></tr>
              <tr><td className="px-3 py-2">Evaluación de los tres escenarios de contingencia</td><td className="px-3 py-2 text-center">10/07 – 16/07</td><td className="px-3 py-2 text-center">54</td><td className="px-3 py-2 text-xs">Saavedra · Donnet · equipo técnico</td></tr>
              <tr><td className="px-3 py-2">Consolidación de papeles de trabajo y observaciones</td><td className="px-3 py-2 text-center">17/07 – 23/07</td><td className="px-3 py-2 text-center">40</td><td className="px-3 py-2 text-xs">Donnet · auditores</td></tr>
              <tr><td className="px-3 py-2">Informes diferenciados y presentación ejecutiva</td><td className="px-3 py-2 text-center">24/07 – 30/07</td><td className="px-3 py-2 text-center">32</td><td className="px-3 py-2 text-xs">Saavedra · Donnet</td></tr>
            </tbody>
            <tfoot className="bg-gray-100 font-bold text-corporate-navy">
              <tr>
                <td className="px-3 py-2">Total</td><td className="px-3 py-2 text-center">25/06 – 30/07</td><td className="px-3 py-2 text-center">520</td><td className="px-3 py-2 text-center">—</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-6 w-6 text-gray-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-gray-700 m-0 mb-1">6.7 Confidencialidad</h4>
              <p className="text-gray-600 text-sm m-0">
                Toda la documentación utilizada durante la auditoría, así como la originada por ella, reviste carácter confidencial y se encuentra alcanzada por el secreto profesional y por las medidas de seguridad exigidas por la Ley N.° 25.326. La evidencia que contenga datos personales será disociada o enmascarada cuando el objetivo de la prueba no requiera el dato identificatorio. Los papeles de trabajo se conservan cifrados por cinco años, con acceso restringido al equipo del encargo y al Comité Técnico de Calidad.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PlanAuditoria;
