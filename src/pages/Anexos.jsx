import CartaCompromiso from '../components/anexos/CartaCompromiso';
import CartaPresentacion from '../components/anexos/CartaPresentacion';
import ActaInicio from '../components/anexos/ActaInicio';
import LineaBase from '../components/anexos/LineaBase';
import AnexoTrazabilidad from '../components/anexos/AnexoTrazabilidad';
import AnexoIndice from '../components/anexos/AnexoIndice';
import AnexoReconciliacion from '../components/anexos/AnexoReconciliacion';
import CartaElevacionFase6 from '../components/anexos/CartaElevacionFase6';
import CartaPresentacionFase6 from '../components/anexos/CartaPresentacionFase6';
import Acordeon from '../components/Acordeon';

import CodigoEtica from '../components/fase1/CodigoEtica';
import PresentacionFirma from '../components/fase1/PresentacionFirma';
import EquipoYCronograma from '../components/fase1/EquipoYCronograma';

import EvaluacionAmbiente from '../components/fase2/EvaluacionAmbiente';
import MatrizRiesgos from '../components/fase2/MatrizRiesgos';
import PlanAuditoria from '../components/fase2/PlanAuditoria';
import ProgramaAuditoria from '../components/fase2/ProgramaAuditoria';

import AlcanceEvidencia from '../components/fase3/AlcanceEvidencia';

import ListadoGeneral from '../components/fase4/ListadoGeneral';
import BasesObservacion from '../components/fase4/BasesObservacion';
import PapelTransversal from '../components/fase4/PapelTransversal';

import MatrizSeleccion from '../components/fase5/MatrizSeleccion';
import CriteriosSeleccion from '../components/fase5/CriteriosSeleccion';
import FichasObservaciones from '../components/fase5/FichasObservaciones';
import ControlesAdecuados from '../components/fase5/ControlesAdecuados';
import Trazabilidad from '../components/fase5/Trazabilidad';

import EscenariosContingencia from '../components/fase6/EscenariosContingencia';
import DetalleCierre from '../components/fase6/DetalleCierre';

const Anexos = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-corporate-navy mb-8 border-b pb-4">Anexos y Archivos Formales</h1>
      
      <div className="space-y-12">
        {/* Fase 1 */}
        <section>
          <h2 className="text-2xl font-bold text-corporate-navy mb-6 border-b pb-2">Anexos - Fase 1</h2>
          <div className="space-y-4">
            <Acordeon title="Carta de Presentación">
              <CartaPresentacion />
            </Acordeon>
            <Acordeon title="A1-I Solicitud de Información Inicial – 16 requerimientos (E-01 a E-16)" disabled={true} />
            <Acordeon title="A1-II Carta Compromiso suscripta por ambas partes">
              <CartaCompromiso />
            </Acordeon>
            <Acordeon title="A1-III Declaraciones juradas de independencia y confidencialidad de los 8 integrantes" disabled={true} />
            <Acordeon title="A1-IV Código de Ética y Conducta Profesional de la firma" defaultOpen={false}>
              <CodigoEtica />
            </Acordeon>
            <Acordeon title="A1-V Credenciales del plantel y matriz RACI por objetivo de control" defaultOpen={false}>
              <PresentacionFirma />
            </Acordeon>
            <Acordeon title="A1-VI Cronograma detallado y detalle de horas por categoría" defaultOpen={false}>
              <EquipoYCronograma />
            </Acordeon>
          </div>
        </section>

        {/* Fase 2 */}
        <section>
          <h2 className="text-2xl font-bold text-corporate-navy mb-6 border-b pb-2">Anexos - Fase 2</h2>
          <div className="space-y-4">
            <Acordeon title="A2-I Acta de inicio del encargo, firmada (25/06/2026)">
              <ActaInicio />
            </Acordeon>
            <Acordeon title="Línea Base Heredada">
              <LineaBase />
            </Acordeon>
            <Acordeon title="A2-II Control de completitud del Anexo I – estado de E-01 a E-16 al 02/07" disabled={true} />
            <Acordeon title="A2-III CEAC-2026-VAN-01 – 30 preguntas, 9 dimensiones, con evidencia y hallazgo" defaultOpen={false}>
              <EvaluacionAmbiente />
            </Acordeon>
            <Acordeon title="A2-IV BCP v2.4 y DRP v1.0 (CF-BCP-2025-24 / CF-DRP-2024-10)" disabled={true} />
            <Acordeon title="A2-V BIA v1.2 (CF-BIA-2026-01)" disabled={true} />
            <Acordeon title="A2-VI Matriz de riesgos de auditoría RA-01 a RA-14" defaultOpen={false}>
              <MatrizRiesgos />
            </Acordeon>
            <Acordeon title="A2-VII Plan de Auditoría VG-PA-2026-014 y Programa PA-01 a PA-15" defaultOpen={false}>
              <PlanAuditoria />
              <ProgramaAuditoria />
            </Acordeon>
            <Acordeon title="A2-VIII Nota a la Gerencia General por la condición de independencia (02/07)" disabled={true} />
            <Acordeon title="A2-IX Reiteración escrita de E-05, E-14 y E-16" disabled={true} />
          </div>
        </section>

        {/* Fase 3 */}
        <section>
          <h2 className="text-2xl font-bold text-corporate-navy mb-6 border-b pb-2">Anexos - Fase 3</h2>
          <div className="space-y-4">
            <Acordeon title="A3-I Índice de evidencia EV-01 a EV-13, con fecha, hora y método de extracción" defaultOpen={false}>
              <AlcanceEvidencia />
            </Acordeon>
            <Acordeon title="A3-IV Logs de ejecución de copias del Motor Batch, junio 2026 – 30 totales y 120 incrementales" disabled={true} />
            <Acordeon title="A3-V Matriz de alertas operativas y registros de compensación" disabled={true} />
            <Acordeon title="A3-VI Registro de pruebas de restauración (15/01/2025, fallida)" disabled={true} />
            <Acordeon title="A3-VII Ficha técnica del sitio alternativo" disabled={true} />
            <Acordeon title="A3-VIII Matriz de perfiles y accesos – producción contra contingencia, 14 perfiles" disabled={true} />
            <Acordeon title="A3-IX Registro de activaciones break-glass y eventos SIEM asociados" disabled={true} />
            <Acordeon title="A3-X Inventario de las 87 cuentas del IAM de contingencia, clasificadas" disabled={true} />
            <Acordeon title="A3-XIII Mapa de interdependencias y esquema de la cadena de recuperación" disabled={true} />
          </div>
        </section>

        {/* Fase 4 */}
        <section>
          <h2 className="text-2xl font-bold text-corporate-navy mb-6 border-b pb-2">Anexos - Fase 4</h2>
          <div className="space-y-4">
            <Acordeon title="A3-II Los 14 papeles de ejecución (PT-OC1-01 a 05, PT-OC2-01 a 04, PT-OC3-01 a 04, PT-XC-01)" defaultOpen={false}>
              <ListadoGeneral />
            </Acordeon>
            <Acordeon title="A3-III Los 7 papeles de observación (PT-OBS-01 a 07)" defaultOpen={false}>
              <BasesObservacion />
            </Acordeon>
            <Acordeon title="A3-XI Reconciliación documental BIA – BCP – DRP – CEAC" defaultOpen={false}>
              <PapelTransversal />
            </Acordeon>
            <Acordeon title="A3-XII Matriz de contraste de los tres escenarios" defaultOpen={false}>
              <EscenariosContingencia />
            </Acordeon>
          </div>
        </section>

        {/* Fase 5 */}
        <section>
          <h2 className="text-2xl font-bold text-corporate-navy mb-6 border-b pb-2">Anexos - Fase 5</h2>
          <div className="space-y-4">
            <Acordeon title="A5-I Matriz de selección – las 20 deficiencias contra los 4 criterios, con la decisión" defaultOpen={false}>
              <MatrizSeleccion />
            </Acordeon>
            <Acordeon title="A5-II Fundamento individual de los 13 descartes" defaultOpen={false}>
              <CriteriosSeleccion />
            </Acordeon>
            <Acordeon title="A5-III Las 7 fichas NCCCE completas" defaultOpen={false}>
              <FichasObservaciones />
            </Acordeon>
            <Acordeon title="A5-IV Los 5 controles adecuados (CA-01 a CA-05)" defaultOpen={false}>
              <ControlesAdecuados />
            </Acordeon>
            <Acordeon title="A5-V Reconciliación de trazabilidad PT-OBS -> RA -> OBS" defaultOpen={false}>
              <Trazabilidad />
            </Acordeon>
            <Acordeon title="A5-VI Registro de limitaciones LIM-01 a LIM-04" disabled={true} />
            <Acordeon title="A5-VII Escalas aplicadas: nivel de riesgo y complejidad de solución" disabled={true} />
          </div>
        </section>

        {/* Fase 6 */}
        <section>
          <h2 className="text-2xl font-bold text-corporate-navy mb-6 border-b pb-2">Anexos - Fase 6</h2>
          <div className="space-y-4">
            <Acordeon title="A.1 Carta de elevación del informe" defaultOpen={false}>
              <CartaElevacionFase6 />
            </Acordeon>

            <Acordeon title="B.1 Carta técnica" defaultOpen={false}>
              <CartaPresentacionFase6 />
            </Acordeon>

            <Acordeon title="A6-I Matriz de trazabilidad integral" defaultOpen={false}>
              <AnexoTrazabilidad />
            </Acordeon>

            <Acordeon title="A6-II Índice de papeles de trabajo del legajo" defaultOpen={false}>
              <AnexoIndice />
            </Acordeon>
            
            <Acordeon title="A6-III Reconciliación de parámetros BIA – BCP – DRP" defaultOpen={false}>
              <AnexoReconciliacion />
            </Acordeon>

            <Acordeon title="A6-IV Acta de la reunión de validación técnica del 22/07 y descargos recibidos" disabled={true} />
            <Acordeon title="A6-V Plan de acción consolidado, con responsable, plazo y prioridad" defaultOpen={false}>
              <DetalleCierre />
            </Acordeon>
            <Acordeon title="A6-VI Evaluación de los tres escenarios" defaultOpen={false}>
              <EscenariosContingencia />
            </Acordeon>
            <Acordeon title="A6-VII Resultado del CEAC por dimensión" disabled={true} />
            <Acordeon title="A6-VIII Gráficos de distribución de riesgo y complejidad" disabled={true} />
            <Acordeon title="A6-IX Carta de manifestaciones de la Dirección" disabled={true} />
            <Acordeon title="A6-X Material de la presentación ejecutiva del 30/07" disabled={true} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Anexos;
