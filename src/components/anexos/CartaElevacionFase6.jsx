import { FileText } from 'lucide-react';

const CartaElevacionFase6 = () => {
  return (
    <div className="prose max-w-none text-gray-700 text-sm p-4">
      <div className="flex items-center gap-3 mb-6">
        <FileText className="h-6 w-6 text-corporate-blue" />
        <h3 className="text-xl font-bold text-corporate-navy m-0">A.1 Carta de elevación del informe</h3>
      </div>
      
      <p className="text-right text-sm text-gray-500 mb-2">San Miguel de Tucumán, 28 de julio de 2026</p>
      <div className="flex justify-end mb-4">
        <img src="/logos/vanguard-logo-horizontal.svg" alt="Vanguard Logo" className="h-8 opacity-70" />
      </div>
      <p className="font-bold mb-4">
        Señores<br/>
        Directorio y Gerencia General<br/>
        Financiera Crédito Fácil S.A.<br/>
        S / D
      </p>
      <p className="mb-4">De nuestra mayor consideración:</p>
      <p className="mb-4">
        Tenemos el agrado de elevar a ustedes el informe correspondiente a la auditoría independiente del marco de resiliencia operativa de la entidad —Plan de Continuidad del Negocio, Plan de Recuperación ante Desastres y Análisis de Impacto al Negocio—, ejecutada entre el 25 de junio y el 28 de julio de 2026 sobre la documentación del período comprendido entre el 1 de junio de 2025 y el 30 de junio de 2026.
      </p>
      <p className="mb-4">
        El trabajo se desarrolló conforme al alcance, los objetivos y la metodología acordados en la Carta Compromiso suscripta el 24 de junio de 2026, y de acuerdo con las normas profesionales de ISACA (ITAF) y los lineamientos de ISO/IEC 19011. Las conclusiones fueron comunicadas a las áreas auditadas en la reunión de validación técnica del 22 de julio, oportunidad en la que se les otorgó la posibilidad formal de presentar descargo. El trabajo brinda seguridad razonable, no absoluta, y la responsabilidad por el diseño y el mantenimiento del marco de continuidad permanece en cabeza de la Dirección. Este documento constituye la Parte A; su desarrollo técnico obra en la Parte B.
      </p>
      <p className="mb-8">Sin otro particular, saludamos a ustedes con atenta consideración.</p>
      
      <div className="border-t pt-4 w-1/3">
        <p className="font-bold text-corporate-navy mb-0">Mariana Saavedra, CISA</p>
        <p className="text-sm text-gray-500">Líder de Proyecto — Vanguard IT Audit Group S.R.L.</p>
      </div>
    </div>
  );
};

export default CartaElevacionFase6;
