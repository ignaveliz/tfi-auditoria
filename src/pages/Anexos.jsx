import CartaCompromiso from '../components/anexos/CartaCompromiso';
import CartaPresentacion from '../components/anexos/CartaPresentacion';
import ActaInicio from '../components/anexos/ActaInicio';
import LineaBase from '../components/anexos/LineaBase';
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

        {/* Fase 3 a 6 */}
        {[3, 4, 5, 6].map((fase) => (
          <section key={fase}>
            <h2 className="text-2xl font-bold text-corporate-navy mb-6 border-b pb-2">Anexos - Fase {fase}</h2>
            <div className="bg-white p-6 rounded-md border border-dashed border-gray-300 text-center text-gray-500">
              <p>Próximamente...</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Anexos;
