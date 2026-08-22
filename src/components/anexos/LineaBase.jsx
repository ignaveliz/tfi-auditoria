import { History, Table } from 'lucide-react';

const LineaBase = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <History className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">2. Línea base heredada de la Fase 1</h2>
      </div>

      <div className="prose max-w-none text-gray-700">
        <p className="mb-6">
          Los elementos que se enuncian a continuación fueron definidos y aprobados en la Propuesta de Auditoría y no se modifican en esta fase. Toda variación requeriría acuerdo escrito entre las partes.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-4 py-2 text-left font-bold w-1/4">Elemento</th>
                <th className="px-4 py-2 text-left font-bold w-3/4">Definición vigente</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2 font-bold text-corporate-navy">Entidad</td>
                <td className="px-4 py-2">Financiera Crédito Fácil S.A., en proceso de migración hacia un modelo de banca predominantemente digital.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-bold text-corporate-navy">Objeto</td>
                <td className="px-4 py-2">Auditoría independiente del marco de resiliencia operativa: Plan de Continuidad del Negocio (BCP), Plan de Recuperación ante Desastres (DRP) y Análisis de Impacto al Negocio (BIA).</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-bold text-corporate-navy">OC-1</td>
                <td className="px-4 py-2">Continuidad del negocio: existencia, aprobación, vigencia y consistencia metodológica del BCP, el DRP y el BIA.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-bold text-corporate-navy">OC-2</td>
                <td className="px-4 py-2">Gestión de resguardos y recuperación de datos.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-bold text-corporate-navy">OC-3</td>
                <td className="px-4 py-2">Seguridad lógica y control de accesos en entornos de recuperación.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-bold text-corporate-navy">Procesos medulares</td>
                <td className="px-4 py-2">P1 Liquidación de Créditos · P2 Acreditación de Sueldos · P3 Atención al Cliente Online. Constituyen el núcleo del negocio de la entidad y el <strong>universo de pruebas del encargo</strong>.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-bold text-corporate-navy">Procesos complementarios</td>
                <td className="px-4 py-2">P4 Transferencias por Homebanking · P5 Tesorería y Pagos Interbancarios. Identificados por el BIA al completar los cinco procesos más críticos. Se incorporan al análisis por su condición de dependencia de la cadena de recuperación y se cubren mediante <strong>verificación documental acotada</strong>, sin pruebas sustantivas.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-bold text-corporate-navy">Dependencias transversales</td>
                <td className="px-4 py-2">IAM, como prerrequisito de los cinco procesos, y Tesorería, como dependencia sistémica de la cadena de recuperación.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-bold text-corporate-navy">Período de registros</td>
                <td className="px-4 py-2">01/06/2025 al 30/06/2026.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-bold text-corporate-navy">Criterios</td>
                <td className="px-4 py-2">BCRA Com. «A» 7777, «A» 7783 y «A» 7724 · ISO/IEC 27002:2022 (5.15, 5.18, 5.29, 5.30, 8.13) · ISO 22301 (8.2 y 8.3) · COBIT 2019 (DSS04, DSS01, APO12) · COSO 2013 (CC1 a CC5) · ISO/IEC 19011 e ISACA ITAF · Ley N.° 25.326.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-bold text-corporate-navy">Exclusiones</td>
                <td className="px-4 py-2">Código fuente; estados contables y cartera; desempeño comercial y scoring; pruebas de intrusión, ingeniería social y análisis de vulnerabilidades en producción; auditoría directa sobre la infraestructura de terceros.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LineaBase;
