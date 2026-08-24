import CartaCompromiso from '../components/anexos/CartaCompromiso';
import ActaInicio from '../components/anexos/ActaInicio';
import AnexoTrazabilidad from '../components/anexos/AnexoTrazabilidad';
import AnexoIndice from '../components/anexos/AnexoIndice';
import AnexoReconciliacion from '../components/anexos/AnexoReconciliacion';
import Acordeon from '../components/Acordeon';

import EvaluacionAmbiente from '../components/fase2/EvaluacionAmbiente';
import MatrizRiesgos from '../components/fase2/MatrizRiesgos';
import PlanAuditoria from '../components/fase2/PlanAuditoria';
import ProgramaAuditoria from '../components/fase2/ProgramaAuditoria';

import AlcanceEvidencia from '../components/fase3/AlcanceEvidencia';
import PapelTransversal from '../components/fase4/PapelTransversal';

import EscenariosContingencia from '../components/fase6/EscenariosContingencia';

const Anexos = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-corporate-navy mb-8 border-b pb-4">Anexos y Archivos Formales</h1>
      
      <div className="space-y-12">
        {/* Fase 1 */}
        <section>
          <h2 className="text-2xl font-bold text-corporate-navy mb-6 border-b pb-2">Anexos - Fase 1</h2>
          <div className="space-y-4">
            <Acordeon title="A1-I Solicitud de Información Inicial" disabled={true} />
            <Acordeon title="A1-II Carta Compromiso suscripta">
              <CartaCompromiso />
            </Acordeon>
            <Acordeon title="A1-III Declaraciones juradas de independencia y confidencialidad de los 8 integrantes" disabled={true} />
          </div>
        </section>

        {/* Fase 2 */}
        <section>
          <h2 className="text-2xl font-bold text-corporate-navy mb-6 border-b pb-2">Anexos - Fase 2</h2>
          <div className="space-y-4">
            <Acordeon title="A2-I Acta de inicio firmada">
              <ActaInicio />
            </Acordeon>
            <Acordeon title="A2-II Control de completitud E-01 a E-16" disabled={true} />
            <Acordeon title="A2-III CEAC-2026-VAN-01" defaultOpen={false}>
              <EvaluacionAmbiente />
            </Acordeon>
            <Acordeon title="A2-III.b Documento original completo (CEAC_Credito_Facil.pdf)" defaultOpen={false}>
              <iframe src="/documentos/CEAC_Credito_Facil.pdf" width="100%" height="800px" className="border border-gray-300 rounded shadow-sm" title="CEAC PDF" />
            </Acordeon>
            <Acordeon title="A2-IV BCP v2.4 y DRP v1.0" defaultOpen={false}>
              <iframe src="/documentos/BCP_DRP_Credito_Facil.pdf" width="100%" height="800px" className="border border-gray-300 rounded shadow-sm" title="BCP DRP PDF" />
            </Acordeon>
            <Acordeon title="A2-V BIA v1.2" defaultOpen={false}>
              <iframe src="/documentos/BIA_Credito_Facil.pdf" width="100%" height="800px" className="border border-gray-300 rounded shadow-sm" title="BIA PDF" />
            </Acordeon>
            <Acordeon title="A2-VI Matriz de riesgos RA-01 a RA-14" defaultOpen={false}>
              <MatrizRiesgos />
            </Acordeon>
            <Acordeon title="A2-VII Plan y Programa de Auditoría" defaultOpen={false}>
              <PlanAuditoria />
              <ProgramaAuditoria />
            </Acordeon>
            <Acordeon title="A2-VIII Reiteración escrita de E-05, E-14 y E-16" disabled={true} />
          </div>
        </section>

        {/* Fases 3 y 4 */}
        <section>
          <h2 className="text-2xl font-bold text-corporate-navy mb-6 border-b pb-2">Anexos - Fases 3 y 4</h2>
          <div className="space-y-4">
            <Acordeon title="A3-I Índice de evidencia EV-01 a EV-13" defaultOpen={false}>
              <AlcanceEvidencia />
            </Acordeon>
            <Acordeon title="A3-II Logs de copias de junio 2026" disabled={true} />
            <Acordeon title="A3-III Matriz de alertas y registros de compensación" disabled={true} />
            <Acordeon title="A3-IV Registro de pruebas de restauración" disabled={true} />
            <Acordeon title="A3-V Ficha técnica del sitio alternativo" disabled={true} />
            <Acordeon title="A3-VI Matriz de perfiles y accesos" disabled={true} />
            <Acordeon title="A3-VII Registro de activaciones break-glass y SIEM" disabled={true} />
            <Acordeon title="A3-VIII Inventario de las 87 cuentas del IAM" disabled={true} />
            <Acordeon title="A3-IX Reconciliación BIA-BCP-DRP-CEAC" defaultOpen={false}>
              <PapelTransversal />
            </Acordeon>
            <Acordeon title="A3-X Matriz de contraste de los tres escenarios" defaultOpen={false}>
              <EscenariosContingencia />
            </Acordeon>
            <Acordeon title="A3-XI Mapa de interdependencias" disabled={true} />
          </div>
        </section>

        {/* Fase 6 */}
        <section>
          <h2 className="text-2xl font-bold text-corporate-navy mb-6 border-b pb-2">Anexos - Fase 6</h2>
          <div className="space-y-4">
            <Acordeon title="A6-I Matriz de trazabilidad integral" defaultOpen={false}>
              <AnexoTrazabilidad />
            </Acordeon>
            <Acordeon title="A6-II Índice de los 21 papeles" defaultOpen={false}>
              <AnexoIndice />
            </Acordeon>
            <Acordeon title="A6-III Reconciliación de parámetros" defaultOpen={false}>
              <AnexoReconciliacion />
            </Acordeon>
            <Acordeon title="A6-IV Acta de validación técnica y descargos" disabled={true} />
            <Acordeon title="A6-V Carta de manifestaciones de la Dirección" disabled={true} />
            <Acordeon title="A6-VI Material de la presentación ejecutiva" disabled={true} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Anexos;
