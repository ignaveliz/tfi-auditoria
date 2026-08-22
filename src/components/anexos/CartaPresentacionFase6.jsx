import { FileText } from 'lucide-react';

const CartaPresentacionFase6 = () => {
  return (
    <div className="prose max-w-none text-gray-700 text-sm p-4">
      <div className="flex items-center gap-3 mb-6">
        <FileText className="h-6 w-6 text-corporate-blue" />
        <h3 className="text-xl font-bold text-corporate-navy m-0">B.1 Carta de presentación técnica</h3>
      </div>
      
      <p className="text-right text-sm text-gray-500 mb-4">San Miguel de Tucumán, 28 de julio de 2026</p>
      <p className="font-bold mb-4">
        Señor<br/>
        Gerente de Operaciones y Tecnología<br/>
        Señor Responsable de Seguridad de la Información (CISO)<br/>
        Financiera Crédito Fácil S.A.
      </p>
      <p className="mb-4">
        Se remite la Parte B del informe de auditoría del marco de resiliencia operativa, correspondiente al período 01/06/2025 – 30/06/2026. El documento desarrolla el fundamento técnico de las siete observaciones elevadas, la evaluación de los tres escenarios de contingencia acordados, la documentación de los cinco controles que operan adecuadamente y el plan de acción sugerido con responsables, plazos y prioridades.
      </p>
      <p className="mb-4">
        Cada afirmación de este informe se encuentra referenciada a un papel de trabajo del legajo y, a través de él, al elemento de evidencia que la sustenta. La cadena completa —riesgo de planificación, procedimiento, evidencia, papel de trabajo, papel de observación y ficha— se reproduce en el Anexo I, de modo que cualquier conclusión pueda reconstruirse sin salir del legajo. Los comentarios formulados por las áreas en la reunión de validación técnica del 22 de julio se incorporaron al texto donde correspondía; cuando subsistió desacuerdo, se dejó constancia.
      </p>
      <p className="mb-8">
        Se agradece la colaboración prestada por el personal técnico durante el trabajo de campo y se queda a disposición para desarrollar cualquier aspecto de este documento.
      </p>
      
      <div className="border-t pt-4 w-1/3">
        <p className="font-bold text-corporate-navy mb-0">Luciano Agustín Donnet</p>
        <p className="text-sm text-gray-500">Auditor Senior — Vanguard IT Audit Group S.R.L.</p>
      </div>
    </div>
  );
};

export default CartaPresentacionFase6;
