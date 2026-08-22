import CartaCompromiso from '../components/anexos/CartaCompromiso';
import CartaPresentacion from '../components/anexos/CartaPresentacion';
import Acordeon from '../components/Acordeon';

const Anexos = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-corporate-navy mb-8 border-b pb-4">Anexos y Archivos Formales</h1>
      
      <div className="space-y-12">
        <Acordeon title="Carta de Presentación">
          <CartaPresentacion />
        </Acordeon>

        <Acordeon title="Carta Compromiso">
          <CartaCompromiso />
        </Acordeon>
      </div>
    </div>
  );
};

export default Anexos;
