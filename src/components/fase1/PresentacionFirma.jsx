import { Building2, FileCheck, Target, ShieldCheck, BadgeCheck } from 'lucide-react';
import Acordeon from '../Acordeon';

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

        <div className="mb-8 border rounded-md overflow-hidden">
          <div className="bg-gray-50 px-4 py-3 border-b">
            <h3 className="text-lg font-bold text-corporate-navy m-0 flex items-center gap-2">
              <FileCheck className="h-5 w-5 text-corporate-accent" /> Datos Corporativos
            </h3>
          </div>
          <div className="p-4 bg-white grid gap-y-3 gap-x-6 md:grid-cols-2 text-sm">
            <div><span className="font-bold text-corporate-navy">Razón social:</span> Vanguard IT Audit Group S.R.L.</div>
            <div><span className="font-bold text-corporate-navy">CUIT:</span> 30-71284596-3</div>
            <div className="md:col-span-2"><span className="font-bold text-corporate-navy">Sede central:</span> Av. Sarmiento 785, Piso 6, Oficina 12 — San Miguel de Tucumán (T4000CVQ), Tucumán, Argentina</div>
            <div className="md:col-span-2"><span className="font-bold text-corporate-navy">Oficinas de representación:</span> Ciudad Autónoma de Buenos Aires · Córdoba</div>
            <div><span className="font-bold text-corporate-navy">Año de constitución:</span> 2014</div>
            <div><span className="font-bold text-corporate-navy">Dotación profesional:</span> 38 profesionales (26 en práctica de auditoría, 12 en práctica técnica)</div>
            <div><span className="font-bold text-corporate-navy">Teléfono:</span> +54 381 445-8800</div>
            <div><span className="font-bold text-corporate-navy">Correo institucional:</span> contacto@vanguardit.com.ar</div>
            <div className="md:col-span-2"><span className="font-bold text-corporate-navy">Sitio web:</span> www.vanguardit.com.ar</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border border-gray-200 rounded-md p-5 shadow-sm bg-white">
            <h4 className="font-bold flex items-center gap-2 mb-3 text-corporate-navy">
              <Target className="h-5 w-5 text-corporate-accent" /> Misión
            </h4>
            <p className="text-sm">
              Proveer aseguramiento independiente y objetivo sobre los controles de TI de nuestros clientes, 
              entregando conclusiones sustentadas en evidencia suficiente y recomendaciones técnica y económicamente 
              implementables.
            </p>
          </div>
          <div className="border border-gray-200 rounded-md p-5 shadow-sm bg-white">
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

        <div className="mb-8">
          <Acordeon titulo="Casos de Éxito Recientes (Últimos 24 meses)">
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-md bg-white">
                <div className="font-bold text-corporate-navy mb-1 flex items-center justify-between">
                  <span>Entidad financiera no bancaria (NOA)</span>
                  <span className="text-xs bg-corporate-blue text-white px-2 py-1 rounded">2025</span>
                </div>
                <p className="text-sm text-gray-600 mb-0">Auditoría integral BCP/DRP y validación BIA en 5 procesos críticos con pruebas de restauración observadas (BCRA «A» 7777 · ISO 22301).</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-md bg-white">
                <div className="font-bold text-corporate-navy mb-1 flex items-center justify-between">
                  <span>Empresa de servicios de pago (PSP)</span>
                  <span className="text-xs bg-corporate-blue text-white px-2 py-1 rounded">2025</span>
                </div>
                <p className="text-sm text-gray-600 mb-0">Seguridad lógica en contingencia cloud y cuentas de emergencia (ISO/IEC 27002 · BCRA «A» 7783).</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-md bg-white">
                <div className="font-bold text-corporate-navy mb-1 flex items-center justify-between">
                  <span>Cooperativa de crédito (42 sucursales)</span>
                  <span className="text-xs bg-corporate-blue text-white px-2 py-1 rounded">2024</span>
                </div>
                <p className="text-sm text-gray-600 mb-0">ITGC y gestión de resguardos con análisis de logs mediante CAATs (COBIT 2019 · ISO/IEC 27002 8.13).</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-md bg-white">
                <div className="font-bold text-corporate-navy mb-1 flex items-center justify-between">
                  <span>Organismo público provincial</span>
                  <span className="text-xs bg-corporate-blue text-white px-2 py-1 rounded">2024</span>
                </div>
                <p className="text-sm text-gray-600 mb-0">Ambiente de control TI y plan de contingencia de datacenter (COSO 2013 · SIGEN).</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-md bg-white">
                <div className="font-bold text-corporate-navy mb-1 flex items-center justify-between">
                  <span>Compañía de seguros (cartera regional)</span>
                  <span className="text-xs bg-corporate-blue text-white px-2 py-1 rounded">2023</span>
                </div>
                <p className="text-sm text-gray-600 mb-0">Gestión de incidentes y continuidad de canal digital de siniestros (ISO/IEC 27002 · NIST CSF).</p>
              </div>
            </div>
          </Acordeon>
        </div>
        
        <div className="overflow-x-auto mb-6">
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
              <tr>
                <td className="px-4 py-3 text-sm font-medium">Auditoría de Aplicaciones y Datos</td>
                <td className="px-4 py-3 text-sm text-gray-500">ISACA ITAF · COBIT 2019 DSS06</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium">Protección de Datos Personales</td>
                <td className="px-4 py-3 text-sm text-gray-500">Ley 25.326 y normativa complementaria</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border-l-4 border-corporate-blue p-5 mb-8 rounded-r-md">
          <h4 className="text-lg font-bold text-corporate-navy mb-2 flex items-center gap-2">
            <BadgeCheck className="h-5 w-5 text-corporate-blue" />
            Control de Calidad y Supervisión
          </h4>
          <p className="text-sm text-gray-700 italic m-0">
            "La firma aplica un esquema de doble control: ningún papel de trabajo se incorpora al legajo sin revisión del nivel inmediato superior, y ningún informe se emite sin revisión del Comité Técnico de Calidad."
          </p>
        </div>

        <h3 className="text-xl font-bold text-corporate-navy mb-4 border-b pb-2">Credenciales del Equipo</h3>
        <div className="bg-white border rounded-md p-5 shadow-sm">
          <div className="mb-4">
            <h4 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">Certificaciones Vigentes</h4>
            <div className="flex flex-wrap gap-2">
              {['CISA', 'CISM', 'Lead Auditor ISO/IEC 27001', 'Lead Implementer ISO 22301', 'CEH'].map(cert => (
                <span key={cert} className="px-3 py-1 bg-corporate-gray text-corporate-navy font-semibold text-xs rounded-full border border-gray-200 shadow-sm">
                  {cert}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Capacitación Continua</h4>
            <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded border">
              <span className="font-bold text-corporate-accent text-lg">40</span> horas anuales obligatorias por profesional
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PresentacionFirma;
