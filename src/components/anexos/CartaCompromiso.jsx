const CartaCompromiso = () => {
  return (
    <div className="prose max-w-none text-gray-700">
      <div className="bg-white border border-gray-300 p-8 shadow-inner font-serif text-sm">

          <p className="text-right mb-6">San Miguel de Tucumán, 24 de junio de 2026</p>
          <div className="flex justify-between items-start mb-6">
            <p className="m-0">
              <strong>Señores</strong><br/>
              Directorio y Gerencia General<br/>
              Financiera Crédito Fácil S.A.<br/>
              S / D
            </p>
            <img src="/logos/vanguard-logo-horizontal.svg" alt="Vanguard Logo" className="h-28 opacity-30 grayscale pointer-events-none" />
          </div>

          <p className="mb-4 font-bold">De nuestra mayor consideración:</p>
          <p className="mb-4 text-justify">
            La presente Carta Compromiso formaliza el acuerdo entre Vanguard IT Audit Group S.R.L. y Financiera Crédito Fácil S.A. 
            respecto del encargo de auditoría independiente sobre el marco de resiliencia operativa de la entidad (BCP, DRP y BIA). 
            Su suscripción por ambas partes constituye la aceptación de la propuesta y da inicio formal al trabajo.
          </p>

          <h5 className="font-bold mt-6 mb-2 text-corporate-navy">Objeto y Naturaleza del Trabajo</h5>
          <p className="mb-4 text-justify">
            La Firma ejecutará un encargo de aseguramiento razonable. El trabajo no constituye una auditoría de estados contables, 
            una certificación de seguridad, una prueba de intrusión ni un servicio de consultoría. El trabajo se estructura sobre tres objetivos de control: OC-1 (Continuidad y BIA), OC-2 (Resguardos y Recuperación), OC-3 (Seguridad Lógica en Contingencia). La firma emitirá opinión sobre el grado de cumplimiento de cada objetivo.
          </p>

          <h5 className="font-bold mt-6 mb-2 text-corporate-navy">Responsabilidades de la Firma</h5>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Ejecutar el encargo conforme a normas ISACA (ITAF) e ISO/IEC 19011.</li>
            <li>Mantener independencia durante todo el encargo.</li>
            <li>Asignar personal con competencia y certificaciones adecuadas.</li>
            <li>Sustentar conclusiones en evidencia suficiente, relevante y competente.</li>
            <li>Otorgar oportunidad de descargo antes de emitir el informe final.</li>
            <li>Preservar confidencialidad de toda información recibida.</li>
          </ul>

          <h5 className="font-bold mt-6 mb-2 text-corporate-navy">Responsabilidades de la Entidad</h5>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Designar un interlocutor institucional con autoridad suficiente.</li>
            <li>Proveer, de manera completa y oportuna, la documentación detallada.</li>
            <li>Habilitar accesos de solo lectura a los sistemas comprendidos.</li>
            <li>Reconocer que la responsabilidad por el diseño e implementación del control interno es indelegable y permanece en cabeza de la Dirección de la Entidad.</li>
            <li>Garantizar la veracidad y completitud de la información proporcionada.</li>
            <li>Emitir carta de manifestaciones al cierre del encargo.</li>
            <li>Reconocer que la responsabilidad por el control interno es indelegable.</li>
          </ul>

          <h5 className="font-bold mt-6 mb-2 text-corporate-navy">Limitaciones Inherentes</h5>
          <p className="mb-4 text-justify">
            El encargo proporciona seguridad razonable, no absoluta. Las limitaciones inherentes a todo trabajo de auditoría incluyen el uso de muestreo, la posibilidad de error humano y la eventualidad de connivencia para eludir controles. El dictamen no garantiza la detección de la totalidad de las debilidades existentes.
          </p>

          <h5 className="font-bold mt-6 mb-2 text-corporate-navy">Confidencialidad y Protección de Datos</h5>
          <p className="mb-4 text-justify">
            La información recibida durante el encargo será tratada bajo estricta confidencialidad, sin límite temporal. Los datos personales se tratarán conforme a la Ley 25.326, aplicando técnicas de disociación y enmascaramiento cuando corresponda.
          </p>

          <h5 className="font-bold mt-6 mb-2 text-corporate-navy">Propiedad y Conservación</h5>
          <p className="mb-4 text-justify">
            Los papeles de trabajo son propiedad de la Firma. Los informes emitidos son propiedad de la Entidad, 
            que podrá utilizarlos libremente en su relación con el Banco Central (BCRA). Los papeles de trabajo se conservarán en formato cifrado por un período de cinco años, durante el cual estarán disponibles para el BCRA si este lo requiriese. Transcurrido el plazo, se procederá a su destrucción certificada bajo acta.
          </p>

          <h5 className="font-bold mt-6 mb-2 text-corporate-navy">Honorarios y Plazos</h5>
          <p className="mb-4 text-justify">
            Los honorarios y plazos quedan sujetos a las condiciones establecidas en la propuesta técnica. Cualquier modificación deberá formalizarse por escrito. En caso de rescisión anticipada, la entidad abonará las horas efectivamente incurridas según las tarifas convenidas.
          </p>

          <h5 className="font-bold mt-6 mb-2 text-corporate-navy">Ley Aplicable y Jurisdicción</h5>
          <p className="mb-4 text-justify">
            El presente acuerdo se rige por las leyes de la República Argentina. Las partes se someten a la jurisdicción de los tribunales ordinarios de la Provincia de Tucumán, renunciando a todo otro fuero que pudiera corresponderles.
          </p>

          <div className="mt-16 flex justify-between">
            <div className="text-center">
              <div className="border-t border-gray-400 w-48 mx-auto mb-2"></div>
              <p className="font-bold">Mariana Saavedra, CISA</p>
              <p className="text-xs text-gray-500">Líder de Proyecto<br/>Vanguard IT Audit Group</p>
            </div>
            
            <div className="text-center">
              <div className="border-t border-gray-400 w-48 mx-auto mb-2"></div>
              <p className="font-bold">Representante Autorizado</p>
              <p className="text-xs text-gray-500">Financiera Crédito Fácil S.A.</p>
            </div>
          </div>

      </div>
    </div>
  );
};

export default CartaCompromiso;
