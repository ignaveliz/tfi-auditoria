import { Search, ServerCrash, Landmark, Network } from 'lucide-react';
import Organigrama from './Organigrama';
import Acordeon from '../Acordeon';

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

        <h3 className="text-xl font-bold text-corporate-navy mb-4 border-b pb-2 flex items-center gap-2">
          <Network className="h-5 w-5" /> Estructura Organizacional
        </h3>
        <p className="text-sm mb-2 text-gray-500">Haz clic en las flechas para expandir o contraer las distintas áreas.</p>
        <Organigrama />

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
                <th className="px-3 py-2 text-left font-medium">Impacto/hora</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-3 py-2 font-medium text-corporate-blue">P1 - Liquidación de Créditos</td>
                <td className="px-3 py-2 text-gray-500">180 desembolsos/día</td>
                <td className="px-3 py-2">2 h</td>
                <td className="px-3 py-2">1 h</td>
                <td className="px-3 py-2">0 min</td>
                <td className="px-3 py-2">$27.000.000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-2 font-medium text-corporate-blue">P2 - Acreditación de Sueldos</td>
                <td className="px-3 py-2 text-gray-500">Hasta 14k acreditaciones</td>
                <td className="px-3 py-2">4 h</td>
                <td className="px-3 py-2">2 h</td>
                <td className="px-3 py-2 text-red-600 font-bold" title="Deficiencia detectada">N/A*</td>
                <td className="px-3 py-2">$58.000.000</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-corporate-blue">P3 - Atención al Cliente Online</td>
                <td className="px-3 py-2 text-gray-500">2.200 gestiones/día</td>
                <td className="px-3 py-2">6 h</td>
                <td className="px-3 py-2">4 h</td>
                <td className="px-3 py-2">1 h</td>
                <td className="px-3 py-2">$2.750.000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-3 py-2 font-medium text-corporate-blue">
                  P4 - Transferencias Homebanking
                  <span className="ml-2 text-xs italic text-gray-500 font-normal">* Alcance documental</span>
                </td>
                <td className="px-3 py-2 text-gray-500">3.500 transferencias/día · picos de 5.800</td>
                <td className="px-3 py-2">1 h</td>
                <td className="px-3 py-2">30 min</td>
                <td className="px-3 py-2">0 min</td>
                <td className="px-3 py-2">$122.500.000</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-corporate-blue">
                  P5 - Tesorería y Pagos Interbancarios
                  <span className="ml-2 text-xs italic text-gray-500 font-normal">* Alcance documental</span>
                </td>
                <td className="px-3 py-2 text-gray-500">45 oper. mayoristas/día · liq. neta $450M</td>
                <td className="px-3 py-2">2 h</td>
                <td className="px-3 py-2">1 h</td>
                <td className="px-3 py-2">15 min</td>
                <td className="px-3 py-2">$212.500.000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-corporate-navy mb-4 border-b pb-2">Dependencias Sistémicas (Puntos únicos de falla)</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
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

        <h3 className="text-xl font-bold text-corporate-navy mb-4 border-b pb-2 mt-8">Dependencias Externas</h3>
        <div className="mb-8">
          <Acordeon title="Proveedores y Servicios de Terceros">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-3 py-2 text-left font-bold text-corporate-navy">Proveedor/Sistema</th>
                    <th className="px-3 py-2 text-left font-bold text-corporate-navy">Función</th>
                    <th className="px-3 py-2 text-left font-bold text-corporate-navy">Procesos afectados</th>
                    <th className="px-3 py-2 text-left font-bold text-corporate-navy">Criticidad</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-3 py-2 font-medium">Proveedor Core Bancario</td>
                    <td className="px-3 py-2">Motor transaccional, créditos, contabilidad</td>
                    <td className="px-3 py-2">P1 a P5</td>
                    <td className="px-3 py-2">
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded border border-red-200">Crítica</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium">BCRA — MEP</td>
                    <td className="px-3 py-2">Liquidación mayorista y transferencias inmediatas</td>
                    <td className="px-3 py-2">P4, P5</td>
                    <td className="px-3 py-2">
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded border border-red-200">Crítica</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium">Cámaras de compensación (COELSA / Interbanking)</td>
                    <td className="px-3 py-2">Nómina y transferencias</td>
                    <td className="px-3 py-2">P2, P4, P5</td>
                    <td className="px-3 py-2">
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded border border-red-200">Crítica</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium">Proveedor CRM (SaaS)</td>
                    <td className="px-3 py-2">Tickets y datos de clientes</td>
                    <td className="px-3 py-2">P3</td>
                    <td className="px-3 py-2">
                      <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded border border-orange-200">Alta</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium">Motor antifraude</td>
                    <td className="px-3 py-2">Scoring en tiempo real</td>
                    <td className="px-3 py-2">P4</td>
                    <td className="px-3 py-2">
                      <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded border border-orange-200">Alta</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium">Proveedor infraestructura cloud / datacenter</td>
                    <td className="px-3 py-2">Servidores, storage, sitio alternativo</td>
                    <td className="px-3 py-2">Todos</td>
                    <td className="px-3 py-2">
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded border border-red-200">Crítica</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium">Proveedor telecomunicaciones</td>
                    <td className="px-3 py-2">Enlaces entre canales, sistemas y cámaras</td>
                    <td className="px-3 py-2">Todos</td>
                    <td className="px-3 py-2">
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded border border-red-200">Crítica</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Acordeon>
        </div>

        <Acordeon title="Factores de Riesgo que fundamentan el trabajo (Pre-relevamiento)">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-3 py-2 text-left font-bold text-corporate-navy">Condición observada (Pre-relevamiento)</th>
                  <th className="px-3 py-2 text-left font-bold text-corporate-navy">Riesgo asociado</th>
                  <th className="px-3 py-2 text-left font-bold text-corporate-navy">OC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-3 py-2">El BCP registra su última modificación 14 meses atrás, excediendo el ciclo de revisión anual (Com. A 7777).</td>
                  <td className="px-3 py-2">Planes desactualizados frente a cambios de arquitectura; incumplimiento normativo.</td>
                  <td className="px-3 py-2 font-bold">OC-1</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">El proceso P2 presenta el RPO sin definir y el RTO sin aprobación formal.</td>
                  <td className="px-3 py-2">Imposibilidad de dimensionar estrategia de resguardo y exigir SLA a TI.</td>
                  <td className="px-3 py-2 font-bold">OC-1/2</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">No hay constancia de prueba de restauración documentada en los últimos 12 meses.</td>
                  <td className="px-3 py-2">Tiempos declarados no validados; el RTO podría ser inalcanzable.</td>
                  <td className="px-3 py-2 font-bold">OC-1/2</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">BIA reconoce IAM como riesgo sistémico, pero no lo incorpora como proceso.</td>
                  <td className="px-3 py-2">Prioridad de recuperación de dependencia transversal no gobernada.</td>
                  <td className="px-3 py-2 font-bold">OC-1/3</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">Procedimientos operativos desactualizados (+18 meses) respecto de arquitectura.</td>
                  <td className="px-3 py-2">Ejecución de contingencias sobre instructivos obsoletos.</td>
                  <td className="px-3 py-2 font-bold">OC-1/3</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">BCP prevé contingencia remota con VPN y MFA.</td>
                  <td className="px-3 py-2">Riesgo de entorno operando con controles de acceso relajados.</td>
                  <td className="px-3 py-2 font-bold">OC-3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Acordeon>
      </div>
    </div>
  );
};

export default ComprensionCliente;
