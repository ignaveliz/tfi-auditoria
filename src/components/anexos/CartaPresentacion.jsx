const CartaPresentacion = () => {
  return (
    <div className="prose max-w-none text-gray-700">
      <div className="bg-white border border-gray-300 p-8 shadow-inner font-serif text-sm">
        <p className="text-right mb-2">San Miguel de Tucumán, 20 de junio de 2026</p>
        <div className="flex justify-end mb-6">
          <img src="/logos/vanguard-logo-horizontal.svg" alt="Vanguard Logo" className="h-10 opacity-70" />
        </div>
        <p className="mb-6">
          <strong>Señores</strong><br/>
          Directorio y Gerencia General<br/>
          Financiera Crédito Fácil S.A.<br/>
          S / D
        </p>

        <p className="mb-4 font-bold">De nuestra mayor consideración:</p>
        <p className="mb-4 text-justify">
          Tenemos el agrado de dirigirnos a ustedes con el objeto de presentar la propuesta de servicios profesionales para la ejecución de una auditoría independiente sobre el marco de resiliencia operativa de la entidad, comprendiendo el Plan de Continuidad del Negocio (BCP), el Plan de Recuperación ante Desastres (DRP) y el Análisis de Impacto al Negocio (BIA) que les da sustento.
        </p>

        <p className="mb-4 text-justify">
          La migración de Crédito Fácil S.A. hacia un modelo de banca predominantemente digital ha desplazado el eje del riesgo operativo: la continuidad del servicio ya no depende de la disponibilidad de sucursales, sino de la resiliencia de un conjunto acotado de componentes tecnológicos cuya interrupción afecta simultáneamente a varios procesos críticos. En ese escenario, la calidad del marco de continuidad deja de ser un asunto técnico del área de Tecnología para convertirse en una cuestión de gobierno, de exposición patrimonial y de cumplimiento ante el Banco Central de la República Argentina.
        </p>

        <p className="mb-4 text-justify">
          Nuestra propuesta parte de esa lectura. El encargo se estructura sobre tres objetivos de control —continuidad y análisis de impacto, gestión de resguardos y recuperación de datos, y seguridad lógica en entornos de contingencia— y se ejecuta con un enfoque basado en riesgos: la extensión de las pruebas sustantivas se calibra a partir del ambiente de control efectivamente relevado, y no de un programa estándar aplicado por igual a todas las áreas.
        </p>

        <p className="mb-4 text-justify">
          El equipo asignado está integrado por ocho profesionales con experiencia específica en entidades alcanzadas por la normativa del BCRA, y el trabajo se desarrollará conforme a las normas internacionales de auditoría de sistemas (ISACA), los lineamientos de ISO/IEC 19011 y nuestro Código de Ética y Conducta Profesional, cuyo texto se incluye en el apartado 1.6 de esta propuesta.
        </p>

        <p className="mb-10 text-justify">
          Agradecemos la oportunidad de acompañar a Crédito Fácil S.A. en este proceso y quedamos a disposición para ampliar cualquier aspecto técnico o comercial del presente documento.
        </p>

        <p className="mb-16">Sin otro particular, saludamos a ustedes con atenta consideración.</p>

        <div className="flex justify-start">
          <div className="text-center">
            <div className="border-t border-gray-400 w-48 mx-auto mb-2"></div>
            <p className="font-bold">Mariana Saavedra, CISA</p>
            <p className="text-xs text-gray-500">Líder de Proyecto<br/>Vanguard IT Audit Group</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartaPresentacion;
