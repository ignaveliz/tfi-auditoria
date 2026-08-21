import { Search, ServerCrash, Landmark } from 'lucide-react';

const ComprensionCliente = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Landmark className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">3. Comprensión del Cliente</h2>
      </div>

      <div className="prose max-w-none text-gray-700">
        <div className="bg-blue-50 p-6 rounded-md mb-8 border border-blue-100">
          <h3 className="text-xl font-bold text-corporate-navy mb-2">Financiera Crédito Fácil S.A.</h3>
          <p className="text-sm">
            Entidad financiera argentina orientada a brindar soluciones accesibles de financiamiento.
            En respuesta a los cambios en hábitos y evolución tecnológica, la entidad inició un ambicioso
            <strong> proceso de transformación digital</strong>. Está migrando progresivamente de un modelo de sucursales físicas 
            hacia una banca predominantemente virtual (24 horas, automatización, IA).
          </p>
        </div>

        <h3 className="text-xl font-bold text-corporate-navy mb-4 border-b pb-2">Contexto Institucional y Riesgo</h3>
        <p className="mb-6">
          La sustitución progresiva de atención presencial por ecosistemas automatizados (APIs, SaaS, autogestión) 
          traslada la continuidad del negocio de la infraestructura física a la arquitectura lógica.
          Los eventos que antes afectaban a una sucursal, hoy impactan simultáneamente a toda la base de clientes. 
          <strong> La resiliencia deja de ser un atributo deseable y pasa a ser un requisito verificable.</strong>
        </p>

        <h3 className="text-xl font-bold text-corporate-navy mb-4 border-b pb-2">Procesos Críticos y Escala Operativa</h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-corporate-navy text-white">
              <tr>
                <th className="px-3 py-2 text-left font-medium">Proceso</th>
                <th className="px-3 py-2 text-left font-medium">Escala operativa</th>
                <th className="px-3 py-2 text-left font-medium">MTPD</th>
                <th className="px-3 py-2 text-left font-medium">RTO</th>
                <th className="px-3 py-2 text-left font-medium">RPO</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-3 py-2 font-medium text-corporate-blue">P1 - Liquidación de Créditos</td>
                <td className="px-3 py-2 text-gray-500">180 desembolsos/día</td>
                <td className="px-3 py-2">2 h</td>
                <td className="px-3 py-2">1 h</td>
                <td className="px-3 py-2">0 min</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-2 font-medium text-corporate-blue">P2 - Acreditación de Sueldos</td>
                <td className="px-3 py-2 text-gray-500">Hasta 14k acreditaciones</td>
                <td className="px-3 py-2">4 h</td>
                <td className="px-3 py-2">2 h</td>
                <td className="px-3 py-2 text-red-600 font-bold" title="Deficiencia detectada">N/A*</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-corporate-blue">P3 - Atención al Cliente Online</td>
                <td className="px-3 py-2 text-gray-500">2.200 gestiones/día</td>
                <td className="px-3 py-2">6 h</td>
                <td className="px-3 py-2">4 h</td>
                <td className="px-3 py-2">1 h</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-corporate-navy mb-4 border-b pb-2">Dependencias Sistémicas (Puntos únicos de falla)</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 p-4 rounded-md shadow-sm">
            <h4 className="font-bold text-corporate-blue flex items-center gap-2 mb-2">
              <ServerCrash className="h-5 w-5" /> Gestión de Accesos (IAM)
            </h4>
            <p className="text-sm">
              Única dependencia compartida por todos los procesos críticos. Su caída interrumpe todo el negocio simultáneamente (RTO efectivo inferido: 15 min).
            </p>
          </div>
          <div className="border border-gray-200 p-4 rounded-md shadow-sm">
            <h4 className="font-bold text-corporate-blue flex items-center gap-2 mb-2">
              <Landmark className="h-5 w-5" /> Tesorería
            </h4>
            <p className="text-sm">
              Si P5 falla, las operaciones de P1 y P2 quedan retenidas en compensación. La cadena de recuperación es secuencial, no paralela.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprensionCliente;
