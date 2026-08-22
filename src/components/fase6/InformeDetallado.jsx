import DetalleIntro from './DetalleIntro';
import EscenariosContingencia from './EscenariosContingencia';
import DetalleFichas from './DetalleFichas';
import DetalleCierre from './DetalleCierre';

const InformeDetallado = () => {
  return (
    <div>
      <DetalleIntro />
      <EscenariosContingencia />
      <DetalleFichas />
      <DetalleCierre />
    </div>
  );
};

export default InformeDetallado;
