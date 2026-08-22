import { ShieldAlert, Zap } from 'lucide-react';

const EscenariosContingencia = () => {
  return (
    <section id="b7-escenarios" className="scroll-mt-24 mb-12 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <ShieldAlert className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">B.7 Evaluación de los tres escenarios de contingencia</h2>
      </div>
      
      <p className="text-gray-700 mb-6">
        Este apartado desarrolla la evaluación documentada en el papel de trabajo PT-OC1-05. Cada escenario se evalúa contrastando tres planos: la respuesta prevista en el marco de continuidad vigente, la respuesta que resultaría exigible conforme a los objetivos declarados en el Análisis de Impacto al Negocio, y la brecha verificada entre ambas. La valoración no constituye una simulación empírica sino un análisis de suficiencia documental y técnica del marco declarado.
      </p>

      <div className="space-y-8">
        
        {/* Escenario 1 */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-corporate-gray text-corporate-navy font-bold px-4 py-3 border-b flex items-center gap-2">
            <Zap className="h-5 w-5 text-corporate-blue" />
            E1 · Indisponibilidad del hardware que soporta el Core Bancario y el Motor Batch
          </div>
          <div className="p-4 bg-white text-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1 font-bold text-gray-700">Procesos afectados</div>
              <div className="md:col-span-3 text-gray-700">P1 — Liquidación de Créditos · P2 — Acreditación de Sueldos · P4 — Homebanking · IAM como dependencia transversal. Ventana estimada: de 1 a 4 horas.</div>
              
              <div className="md:col-span-1 font-bold text-gray-700 border-t pt-2">Respuesta prevista</div>
              <div className="md:col-span-3 text-gray-700 border-t pt-2">Conmutación de BD al Warm Site (PTR-01, estimado 2 a 4 h) y restauración de la última copia del Motor Batch (PTR-02, estimado 3 a 6 h).</div>
              
              <div className="md:col-span-1 font-bold text-gray-700 border-t pt-2">Respuesta exigible (BIA)</div>
              <div className="md:col-span-3 text-gray-700 border-t pt-2">Restablecimiento del IAM en 15 min; luego P1 en 1 hora con RPO de 0 min, y P2 en 2 horas. La cadena es secuencial.</div>
              
              <div className="md:col-span-1 font-bold text-gray-700 border-t pt-2">Brecha verificada</div>
              <div className="md:col-span-3 text-gray-700 border-t pt-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Los tiempos declarados (PTR-01 y PTR-02) exceden los objetivos comprometidos (RTO).</li>
                  <li>El IAM carece de procedimiento, por lo que el reloj de recuperación no puede iniciarse.</li>
                  <li>La replicación asincrónica (4 h) es incompatible con el RPO de 0 minutos de P1.</li>
                </ul>
              </div>
              
              <div className="md:col-span-1 font-bold text-gray-700 border-t pt-2">Valoración</div>
              <div className="md:col-span-3 font-bold text-red-600 border-t pt-2 uppercase">Respuesta insuficiente</div>
            </div>
          </div>
        </div>

        {/* Escenario 2 */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-corporate-gray text-corporate-navy font-bold px-4 py-3 border-b flex items-center gap-2">
            <Zap className="h-5 w-5 text-corporate-blue" />
            E2 · Pérdida física total o parcial del centro de procesamiento primario
          </div>
          <div className="p-4 bg-white text-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1 font-bold text-gray-700">Procesos afectados</div>
              <div className="md:col-span-3 text-gray-700">P1 a P5 y el IAM. Ventana de indisponibilidad estimada por el BIA: de 4 a 24 horas según el estado del Warm Site.</div>
              
              <div className="md:col-span-1 font-bold text-gray-700 border-t pt-2">Respuesta prevista</div>
              <div className="md:col-span-3 text-gray-700 border-t pt-2">Activación del sitio alternativo (Warm Site) a 40 km, con capacidad equivalente al 60%. Operación remota mediante VPN con MFA habilitada en 45 min.</div>
              
              <div className="md:col-span-1 font-bold text-gray-700 border-t pt-2">Respuesta exigible (BIA)</div>
              <div className="md:col-span-3 text-gray-700 border-t pt-2">El umbral más restrictivo (MTPD) es de 1 hora para P4 y 2 horas para P1.</div>
              
              <div className="md:col-span-1 font-bold text-gray-700 border-t pt-2">Brecha verificada</div>
              <div className="md:col-span-3 text-gray-700 border-t pt-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li>La ventana estimada por el BIA (4 a 24h) supera el umbral máximo tolerable (MTPD) de todos los procesos críticos.</li>
                  <li>El enlace del sitio alternativo con las cámaras de compensación está pendiente de contratación (P2 y P5 incompletos).</li>
                  <li>El sitio alternativo no registra prueba de aislamiento ni restauración exitosa.</li>
                </ul>
              </div>
              
              <div className="md:col-span-1 font-bold text-gray-700 border-t pt-2">Valoración</div>
              <div className="md:col-span-3 font-bold text-amber-600 border-t pt-2 uppercase">Respuesta parcial no validada</div>
            </div>
          </div>
        </div>

        {/* Escenario 3 */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-corporate-gray text-corporate-navy font-bold px-4 py-3 border-b flex items-center gap-2">
            <Zap className="h-5 w-5 text-corporate-blue" />
            E3 · Cifrado malicioso del Motor Batch durante la ventana de acreditación
          </div>
          <div className="p-4 bg-white text-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1 font-bold text-gray-700">Procesos afectados</div>
              <div className="md:col-span-3 text-gray-700">P2 — Acreditación de Sueldos. Ventana estimada: de 8 a 72 horas según la integridad de las copias.</div>
              
              <div className="md:col-span-1 font-bold text-gray-700 border-t pt-2">Respuesta prevista</div>
              <div className="md:col-span-3 text-gray-700 border-t pt-2">Retención de archivos firmados y coordinación con cámara. En el plano técnico: restauración de última copia validada (PTR-02).</div>
              
              <div className="md:col-span-1 font-bold text-gray-700 border-t pt-2">Respuesta exigible (BIA)</div>
              <div className="md:col-span-3 text-gray-700 border-t pt-2">Umbral máximo tolerable de 1 hora en fechas de pago (MTPD). Punto de recuperación (RPO): "último lote validado".</div>
              
              <div className="md:col-span-1 font-bold text-gray-700 border-t pt-2">Brecha verificada</div>
              <div className="md:col-span-3 text-gray-700 border-t pt-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Los repositorios de resguardo carecen de aislamiento y son accesibles desde la red productiva (el cifrado alcanzaría las copias).</li>
                  <li>Fallos de copia recientes sin reejecución, y única prueba de restauración fallida en enero 2025.</li>
                  <li>Umbral de 1 hora inalcanzable frente a estimación de 3 a 6 horas para PTR-02.</li>
                </ul>
              </div>
              
              <div className="md:col-span-1 font-bold text-gray-700 border-t pt-2">Valoración</div>
              <div className="md:col-span-3 font-bold text-red-700 border-t pt-2 uppercase">Respuesta no efectiva</div>
            </div>
          </div>
        </div>

      </div>

      <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-md mt-8">
        <h4 className="text-sm font-bold text-gray-800 mb-1">Síntesis de la evaluación</h4>
        <p className="text-sm text-gray-700 mb-0">
          Los tres escenarios convergen en una misma conclusión. En E1 la brecha es de tiempos: la entidad declara que no puede cumplir lo comprometido. En E2 la brecha es de validación: la estrategia es correcta en diseño pero nunca fue ejercitada. En E3 la brecha es estructural: el mecanismo de recuperación comparte la superficie de ataque con el activo que debe proteger (repositorio accesible). Ninguna exige rediseñar la arquitectura entera, pero todas requieren tratamiento inmediato.
        </p>
      </div>

    </section>
  );
};

export default EscenariosContingencia;
