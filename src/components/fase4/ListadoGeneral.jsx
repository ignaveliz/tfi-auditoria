import { List } from 'lucide-react';

const ListadoGeneral = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <List className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">1. Listado general del legajo</h2>
      </div>

      <div className="prose max-w-none text-gray-700">
        <p className="mb-4">
          Índice de control de los veintiún papeles que integran esta entrega, con su conclusión y su derivación.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-3 py-2 text-center font-bold w-24">Ref.</th>
                <th className="px-3 py-2 text-left font-bold">Título</th>
                <th className="px-3 py-2 text-center font-bold w-16">OC</th>
                <th className="px-3 py-2 text-center font-bold">Conclusión</th>
                <th className="px-3 py-2 text-center font-bold">Deriva a</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr><td className="px-3 py-2 text-center font-medium">PT-OC1-01</td><td className="px-3 py-2">Vigencia y aprobación del BCP</td><td className="px-3 py-2 text-center text-gray-600">OC-1</td><td className="px-3 py-2 text-center text-red-600 font-medium">Deficiente</td><td className="px-3 py-2 text-center text-xs">PT-OBS-01</td></tr>
              <tr><td className="px-3 py-2 text-center font-medium">PT-OC1-02</td><td className="px-3 py-2">Definición y aprobación formal de MTPD, RTO y RPO</td><td className="px-3 py-2 text-center text-gray-600">OC-1</td><td className="px-3 py-2 text-center text-red-600 font-medium">Deficiente</td><td className="px-3 py-2 text-center text-xs">PT-OBS-02</td></tr>
              <tr><td className="px-3 py-2 text-center font-medium">PT-OC1-03</td><td className="px-3 py-2">Aprobación, cobertura y suficiencia técnica del DRP</td><td className="px-3 py-2 text-center text-gray-600">OC-1</td><td className="px-3 py-2 text-center text-red-600 font-medium">Deficiente</td><td className="px-3 py-2 text-center text-xs">PT-OBS-03</td></tr>
              <tr><td className="px-3 py-2 text-center font-medium">PT-OC1-04</td><td className="px-3 py-2">Ejercicio integral de continuidad</td><td className="px-3 py-2 text-center text-gray-600">OC-1</td><td className="px-3 py-2 text-center text-red-600 font-medium">Deficiente</td><td className="px-3 py-2 text-center text-xs">PT-OBS-04</td></tr>
              <tr><td className="px-3 py-2 text-center font-medium">PT-OC1-05</td><td className="px-3 py-2">Evaluación de los tres escenarios de contingencia</td><td className="px-3 py-2 text-center text-gray-600">OC-1</td><td className="px-3 py-2 text-center text-red-600 font-medium">Deficiente</td><td className="px-3 py-2 text-center text-xs">PT-OBS-03 · 04 · 06</td></tr>
              
              <tr className="bg-gray-50"><td className="px-3 py-2 text-center font-medium">PT-OC2-01</td><td className="px-3 py-2">Frecuencia declarada frente a ejecución real de las copias</td><td className="px-3 py-2 text-center text-gray-600">OC-2</td><td className="px-3 py-2 text-center text-red-600 font-medium">Deficiente</td><td className="px-3 py-2 text-center text-xs">PT-OBS-05</td></tr>
              <tr className="bg-gray-50"><td className="px-3 py-2 text-center font-medium">PT-OC2-02</td><td className="px-3 py-2">Almacenamiento fuera del sitio principal</td><td className="px-3 py-2 text-center text-gray-600">OC-2</td><td className="px-3 py-2 text-center text-amber-600 font-medium text-xs">Adecuado c/ alcance lim.</td><td className="px-3 py-2 text-center text-xs">Apartado 2 (Fase 3)</td></tr>
              <tr className="bg-gray-50"><td className="px-3 py-2 text-center font-medium">PT-OC2-03</td><td className="px-3 py-2">Prueba técnica de restauración</td><td className="px-3 py-2 text-center text-gray-600">OC-2</td><td className="px-3 py-2 text-center text-red-600 font-medium">Deficiente</td><td className="px-3 py-2 text-center text-xs">PT-OBS-06</td></tr>
              <tr className="bg-gray-50"><td className="px-3 py-2 text-center font-medium">PT-OC2-04</td><td className="px-3 py-2">Monitoreo y compensación de los fallos de resguardo</td><td className="px-3 py-2 text-center text-gray-600">OC-2</td><td className="px-3 py-2 text-center text-red-600 font-medium">Deficiente</td><td className="px-3 py-2 text-center text-xs">PT-OBS-05</td></tr>
              
              <tr><td className="px-3 py-2 text-center font-medium">PT-OC3-01</td><td className="px-3 py-2">Equivalencia de autenticación entre producción y contingencia</td><td className="px-3 py-2 text-center text-gray-600">OC-3</td><td className="px-3 py-2 text-center text-amber-600 font-medium text-xs">Adecuado c/ alcance lim.</td><td className="px-3 py-2 text-center text-xs">Apartado 2 (Fase 3)</td></tr>
              <tr><td className="px-3 py-2 text-center font-medium">PT-OC3-02</td><td className="px-3 py-2">Gestión de cuentas de acceso de emergencia</td><td className="px-3 py-2 text-center text-gray-600">OC-3</td><td className="px-3 py-2 text-center text-red-600 font-medium">Deficiente</td><td className="px-3 py-2 text-center text-xs">PT-OBS-07</td></tr>
              <tr><td className="px-3 py-2 text-center font-medium">PT-OC3-03</td><td className="px-3 py-2">Cuentas genéricas y de servicio en contingencia</td><td className="px-3 py-2 text-center text-gray-600">OC-3</td><td className="px-3 py-2 text-center text-red-600 font-medium">Deficiente</td><td className="px-3 py-2 text-center text-xs">PT-OBS-07</td></tr>
              <tr><td className="px-3 py-2 text-center font-medium">PT-OC3-04</td><td className="px-3 py-2">Recertificación periódica de accesos y excepciones</td><td className="px-3 py-2 text-center text-gray-600">OC-3</td><td className="px-3 py-2 text-center text-red-600 font-medium">Deficiente</td><td className="px-3 py-2 text-center text-xs">PT-OBS-07</td></tr>
              
              <tr className="bg-gray-50"><td className="px-3 py-2 text-center font-medium">PT-XC-01</td><td className="px-3 py-2">Consistencia documental entre el BIA y el BCP</td><td className="px-3 py-2 text-center text-gray-600">Transv.</td><td className="px-3 py-2 text-center text-red-600 font-medium">Deficiente</td><td className="px-3 py-2 text-center text-xs">PT-OBS-02 · 03</td></tr>
              
              <tr><td className="px-3 py-2 text-center font-medium">PT-OBS-01</td><td className="px-3 py-2 text-gray-600">BCP fuera del ciclo de revisión exigido</td><td className="px-3 py-2 text-center text-gray-600">OC-1</td><td className="px-3 py-2 text-center font-medium">Base de obs.</td><td className="px-3 py-2 text-center text-xs text-corporate-blue font-bold">Fase 5</td></tr>
              <tr><td className="px-3 py-2 text-center font-medium">PT-OBS-02</td><td className="px-3 py-2 text-gray-600">RPO de P2 sin cuantificar y RTO sin aprobación</td><td className="px-3 py-2 text-center text-gray-600">OC-1</td><td className="px-3 py-2 text-center font-medium">Base de obs.</td><td className="px-3 py-2 text-center text-xs text-corporate-blue font-bold">Fase 5</td></tr>
              <tr><td className="px-3 py-2 text-center font-medium">PT-OBS-03</td><td className="px-3 py-2 text-gray-600">DRP sin aprobación formal, cobertura parcial y tiempos incompatibles</td><td className="px-3 py-2 text-center text-gray-600">OC-1</td><td className="px-3 py-2 text-center font-medium">Base de obs.</td><td className="px-3 py-2 text-center text-xs text-corporate-blue font-bold">Fase 5</td></tr>
              <tr><td className="px-3 py-2 text-center font-medium">PT-OBS-04</td><td className="px-3 py-2 text-gray-600">Ejercicio integral de continuidad no ejecutado</td><td className="px-3 py-2 text-center text-gray-600">OC-1</td><td className="px-3 py-2 text-center font-medium">Base de obs.</td><td className="px-3 py-2 text-center text-xs text-corporate-blue font-bold">Fase 5</td></tr>
              <tr><td className="px-3 py-2 text-center font-medium">PT-OBS-05</td><td className="px-3 py-2 text-gray-600">Fallos de resguardo sin tratamiento ni compensación</td><td className="px-3 py-2 text-center text-gray-600">OC-2</td><td className="px-3 py-2 text-center font-medium">Base de obs.</td><td className="px-3 py-2 text-center text-xs text-corporate-blue font-bold">Fase 5</td></tr>
              <tr><td className="px-3 py-2 text-center font-medium">PT-OBS-06</td><td className="px-3 py-2 text-gray-600">Última prueba de restauración antigua y fallida</td><td className="px-3 py-2 text-center text-gray-600">OC-2</td><td className="px-3 py-2 text-center font-medium">Base de obs.</td><td className="px-3 py-2 text-center text-xs text-corporate-blue font-bold">Fase 5</td></tr>
              <tr><td className="px-3 py-2 text-center font-medium">PT-OBS-07</td><td className="px-3 py-2 text-gray-600">Accesos de emergencia y cuentas genéricas sin gobierno</td><td className="px-3 py-2 text-center text-gray-600">OC-3</td><td className="px-3 py-2 text-center font-medium">Base de obs.</td><td className="px-3 py-2 text-center text-xs text-corporate-blue font-bold">Fase 5</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListadoGeneral;
