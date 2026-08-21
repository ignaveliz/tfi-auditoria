import { PenTool } from 'lucide-react';

const CartaCompromiso = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <PenTool className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">6. Carta Compromiso</h2>
      </div>

      <div className="prose max-w-none text-gray-700">
        
        <div className="bg-white border border-gray-300 p-8 shadow-inner font-serif text-sm">
          <p className="text-right mb-6">San Miguel de Tucumán, 24 de junio de 2026</p>
          <p className="mb-6">
            <strong>Señores</strong><br/>
            Directorio y Gerencia General<br/>
            Financiera Crédito Fácil S.A.<br/>
            S / D
          </p>

          <p className="mb-4 font-bold">De nuestra mayor consideración:</p>
          <p className="mb-4 text-justify">
            La presente Carta Compromiso formaliza el acuerdo entre Vanguard IT Audit Group S.R.L. y Financiera Crédito Fácil S.A. 
            respecto del encargo de auditoría independiente sobre el marco de resiliencia operativa de la entidad (BCP, DRP y BIA). 
            Su suscripción por ambas partes constituye la aceptación de la propuesta y da inicio formal al trabajo.
          </p>

          <h5 className="font-bold mt-6 mb-2 text-corporate-navy">Objeto del Trabajo</h5>
          <p className="mb-4 text-justify">
            La Firma ejecutará un encargo de aseguramiento razonable. El trabajo no constituye una auditoría de estados contables, 
            una certificación de seguridad, una prueba de intrusión ni un servicio de consultoría.
          </p>

          <h5 className="font-bold mt-6 mb-2 text-corporate-navy">Responsabilidades de la Entidad</h5>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Designar un interlocutor institucional con autoridad suficiente.</li>
            <li>Proveer, de manera completa y oportuna, la documentación detallada.</li>
            <li>Habilitar accesos de solo lectura a los sistemas comprendidos.</li>
            <li>Reconocer que la responsabilidad por el diseño e implementación del control interno es indelegable y permanece en cabeza de la Dirección de la Entidad.</li>
          </ul>

          <h5 className="font-bold mt-6 mb-2 text-corporate-navy">Propiedad de los Papeles</h5>
          <p className="mb-4 text-justify">
            Los papeles de trabajo son propiedad de la Firma. Los informes emitidos son propiedad de la Entidad, 
            que podrá utilizarlos libremente en su relación con el Banco Central (BCRA).
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
    </div>
  );
};

export default CartaCompromiso;
