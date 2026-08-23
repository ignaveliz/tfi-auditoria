import { GitMerge } from 'lucide-react';
import Acordeon from '../Acordeon';

const PapelTransversal = () => {
  const pt = {
    ref: 'PT-XC-01',
    title: 'Consistencia documental entre el BIA, el BCP y el marco de continuidad',
    fecha: '16/07/2026',
    elaborado: 'Luciano Agustín Donnet — Auditor Senior',
    revisado: 'Mariana Saavedra, CISA — Líder de Proyecto',
    area: 'Revisión transversal / OC-1 a OC-3',
    objetivo: 'Verificar que los documentos que integran el marco de continuidad declaren parámetros coherentes entre sí, de modo que las áreas operativa y técnica actúen contra los mismos umbrales ante un evento real.',
    alcance: 'Los tres procesos medulares, sobre la totalidad de los parámetros declarados en el BIA y en el BCP: nueve pares de valores cotejados, más la verificación de correspondencia entre los componentes referenciados en ambos documentos.',
    procedimiento: 'Reconciliación analítica parámetro por parámetro, sin adoptar arbitrariamente una fuente como prevalente. Registro de cada diferencia con indicación del documento, del valor declarado y de la fecha de la versión. Búsqueda de un criterio de prevalencia formalmente definido por la entidad.',
    evidencia: 'EV-12 — Reconciliación documental · EV-02 — Tabla del BIA · EV-03 — DRP v1.0.',
    resultado: 'P1 coincide en la totalidad de sus parámetros. P2 presenta tres divergencias: MTPD de 4 horas en el BIA contra 8 en el BCP, RTO de 2 horas contra 4, y RPO cualitativo contra no definido. P3 presenta dos: MTPD de 6 horas contra 2, y RTO de 4 horas contra 1. El BCP distingue en P3 entre consultas generales y líneas prioritarias de fraude, distinción que el BIA no recoge. No existe criterio de prevalencia definido ante discrepancias, y el DRP, que debería resolver la divergencia en su capa técnica, carece de aprobación que le otorgue prevalencia.',
    conclusion: 'NO ADECUADO. Un mismo proceso declara umbrales distintos según qué documento se consulte, sin regla que determine cuál rige. En un evento real, el área operativa y el área técnica actuarían contra parámetros diferentes. Se cruza con PT-OBS-02 y PT-OBS-03.',
    normativa: 'BCRA Com. «A» 7777 · ISO 22301, cláusulas 8.2 y 8.3 · ISO/IEC 27002:2022, controles 5.29 y 5.30',
    trazabilidad: 'RA-05 → PA-01 y PA-02 → EV-02, EV-03, EV-12 → PT-OBS-02 y PT-OBS-03'
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <GitMerge className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">5. Papel transversal</h2>
      </div>

      <Acordeon title={`${pt.ref} · ${pt.title}`}>
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
          <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-r">
            <h4 className="text-sm font-bold text-red-800 mb-1">Conclusión</h4>
            <p className="text-sm text-red-900 mb-0">{pt.conclusion}</p>
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

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6 rounded-r-md">
        <h4 className="text-sm font-bold text-blue-800 mb-1">Lo que estos papeles deliberadamente no hacen</h4>
        <p className="text-sm text-blue-900 mb-0">
          No enuncian la causa ni cuantifican el efecto, y no formulan recomendaciones. Esos elementos requieren el juicio profesional que se ejerce sobre el conjunto de la evidencia una vez cerrado el trabajo de campo, y anticiparlos aquí obligaría a sostener conclusiones sobre pruebas todavía en curso. Tampoco atribuyen responsabilidad a personas: la auditoría se pronuncia sobre procesos y controles.
        </p>
      </div>
    </div>
  );
};

export default PapelTransversal;
