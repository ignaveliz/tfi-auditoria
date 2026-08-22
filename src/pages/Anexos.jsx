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

            <Acordeon title="Carta Compromiso">
              <CartaCompromiso />
            </Acordeon>
          </div>
        </section>

        {/* Fase 2 */}
        <section>
          <h2 className="text-2xl font-bold text-corporate-navy mb-6 border-b pb-2">Anexos - Fase 2</h2>
          <div className="space-y-4">
            <Acordeon title="Acta de Inicio del Encargo">
              <ActaInicio />
            </Acordeon>

            <Acordeon title="Línea Base Heredada">
              <LineaBase />
            </Acordeon>
          </div>
        </section>

        {/* Fase 3 a 5 */}
        {[3, 4, 5].map((fase) => (
          <section key={fase}>
            <h2 className="text-2xl font-bold text-corporate-navy mb-6 border-b pb-2">Anexos - Fase {fase}</h2>
            <div className="bg-white p-6 rounded-md border border-dashed border-gray-300 text-center text-gray-500">
              <p>Próximamente...</p>
            </div>
          </section>
        ))}

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

            <Acordeon title="Anexo I — Matriz de trazabilidad integral" defaultOpen={false}>
              <AnexoTrazabilidad />
            </Acordeon>

            <Acordeon title="Anexo II — Índice de papeles de trabajo del legajo" defaultOpen={false}>
              <AnexoIndice />
            </Acordeon>
            
            <Acordeon title="Anexo III — Reconciliación de parámetros BIA – BCP – DRP" defaultOpen={false}>
              <AnexoReconciliacion />
            </Acordeon>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Anexos;
