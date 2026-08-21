import { Building2, FileCheck, Target, ShieldCheck } from 'lucide-react';

const PresentacionFirma = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Building2 className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">1. Presentación de la Firma Auditora</h2>
      </div>

      <div className="prose max-w-none text-gray-700">
        <div className="bg-corporate-gray p-6 rounded-md mb-8 border-l-4 border-corporate-blue">
          <h3 className="text-lg font-bold text-corporate-navy mb-2">Vanguard IT Audit Group</h3>
          <p className="mb-0">
            Firma argentina independiente especializada en auditoría de sistemas de información y aseguramiento tecnológico. 
            Constituida en 2014 en San Miguel de Tucumán, concentra su práctica en organizaciones cuya operación depende 
            críticamente de la tecnología (entidades financieras, empresas de pago, sector público).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border border-gray-200 rounded-md p-5 shadow-sm">
            <h4 className="font-bold flex items-center gap-2 mb-3 text-corporate-navy">
              <Target className="h-5 w-5 text-corporate-accent" /> Misión
            </h4>
            <p className="text-sm">
              Proveer aseguramiento independiente y objetivo sobre los controles de TI de nuestros clientes, 
              entregando conclusiones sustentadas en evidencia suficiente y recomendaciones técnica y económicamente 
              implementables.
            </p>
          </div>
          <div className="border border-gray-200 rounded-md p-5 shadow-sm">
            <h4 className="font-bold flex items-center gap-2 mb-3 text-corporate-navy">
              <ShieldCheck className="h-5 w-5 text-corporate-accent" /> Visión
            </h4>
            <p className="text-sm">
              Ser la firma de referencia en auditoría de sistemas del Norte Argentino y un socio técnico 
              reconocido por las entidades reguladas del país.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-corporate-navy mb-4 border-b pb-2">Valores y Práctica Cotidiana</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[
            { title: 'Independencia', desc: 'No prestamos servicios de consultoría o implementación.' },
            { title: 'Rigor técnico', desc: 'Conclusiones sustentadas en evidencia. Lo que no se prueba, no se informa.' },
            { title: 'Confidencialidad', desc: 'Secreto profesional con custodia controlada de evidencia.' },
            { title: 'Objetividad y equilibrio', desc: 'Auditamos procesos, no personas.' },
            { title: 'Valor agregado', desc: 'Recomendaciones viables y costeables.' },
            { title: 'Transparencia', desc: 'Hallazgos discutidos antes de la emisión del informe.' },
          ].map((v, i) => (
            <div key={i} className="bg-white border border-gray-100 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
              <h5 className="font-bold text-corporate-blue mb-1">{v.title}</h5>
              <p className="text-sm text-gray-600">{v.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-corporate-navy mb-4 border-b pb-2">Experiencia y Especialidades</h3>
        <p className="mb-4">
          Desde 2014, la firma ejecutó más de 60 encargos, de los cuales 23 correspondieron a entidades del BCRA. 
          La práctica de continuidad operativa concentra 18 de esos encargos.
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border">
            <thead className="bg-corporate-navy text-white">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Línea de Servicio</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Marcos de Referencia</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm font-medium">Continuidad y Resiliencia Operativa</td>
                <td className="px-4 py-3 text-sm text-gray-500">ISO 22301, ISO/IEC 27002, BCRA A 7777</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium">Controles Generales de TI</td>
                <td className="px-4 py-3 text-sm text-gray-500">COBIT 2019, COSO 2013</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium">Ciberseguridad y Seguridad Lógica</td>
                <td className="px-4 py-3 text-sm text-gray-500">NIST CSF, BCRA A 7783</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium">Cumplimiento Sector Financiero</td>
                <td className="px-4 py-3 text-sm text-gray-500">BCRA A 7724, A 7777, A 7783</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PresentacionFirma;
