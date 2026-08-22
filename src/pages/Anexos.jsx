import { FileText, PenTool } from 'lucide-react';
import CartaCompromiso from '../components/anexos/CartaCompromiso';
import CartaPresentacion from '../components/anexos/CartaPresentacion';

const Anexos = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-corporate-navy mb-8 border-b pb-4">Anexos y Archivos Formales</h1>
      
      <div className="space-y-12">
        <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6 border-b pb-4">
            <FileText className="h-8 w-8 text-corporate-blue" />
            <h2 className="text-2xl font-bold text-corporate-navy">Carta de Presentación</h2>
          </div>
          <CartaPresentacion />
        </section>

        <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6 border-b pb-4">
            <PenTool className="h-8 w-8 text-corporate-blue" />
            <h2 className="text-2xl font-bold text-corporate-navy">Carta Compromiso</h2>
          </div>
          <CartaCompromiso />
        </section>
      </div>
    </div>
  );
};

export default Anexos;
