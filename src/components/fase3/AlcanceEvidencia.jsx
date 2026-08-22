import { Target, Search, FileText } from 'lucide-react';
import Acordeon from '../Acordeon';

const AlcanceEvidencia = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Target className="h-8 w-8 text-corporate-blue" />
        <h2 className="text-2xl font-bold text-corporate-navy">1. Alcance y naturaleza de esta entrega</h2>
      </div>

      <div className="prose max-w-none text-gray-700">
        <p className="mb-4">
          Esta Fase 3 documenta la ejecución del trabajo de campo planificado en la Fase 2. Comprende los papeles de trabajo que registran cada prueba aplicada, los papeles de observación que consolidan los desvíos confirmados, y el índice de la evidencia obtenida.
        </p>
        <p className="mb-6">
          La entrega no contiene las observaciones definitivas. Cada desvío confirmado se consolida en un papel de observación que reúne condición, evidencia, criterio vulnerado y riesgo asociado, pero la ficha completa bajo metodología NCCCE —con causa, efecto cuantificado y recomendación— corresponde a la Fase 5. Esta separación es deliberada: un papel de trabajo registra lo que el auditor verificó; una observación expresa lo que el auditor concluye, y la segunda no puede redactarse antes de haber completado la primera.
        </p>

        <h3 className="text-xl font-bold text-corporate-navy mt-6 mb-2 border-b pb-2">1.1 Universo de pruebas</h3>
        <p className="mb-6 text-sm">
          Conforme al alcance definitivo fijado en el apartado 8.3 de la Fase 2, las pruebas sustantivas se aplicaron sobre los tres procesos medulares —P1 Liquidación de Créditos, P2 Acreditación de Sueldos y P3 Atención al Cliente Online— y sobre la dependencia transversal del IAM. Los procesos complementarios P4 y P5 se cubrieron por verificación documental acotada y no generan papeles de trabajo propios.
        </p>

        <h3 className="text-xl font-bold text-corporate-navy mt-6 mb-2 border-b pb-2">1.2 Escala de conclusión de los papeles de trabajo</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-3 py-2 text-left font-bold w-1/4">Conclusión</th>
                <th className="px-3 py-2 text-left font-bold">Significado</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-3 py-2 font-bold text-green-600">ADECUADO</td>
                <td className="px-3 py-2">El control existe, está documentado y opera según su diseño para el universo probado. No genera observación.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold text-amber-600">ADECUADO CON ALCANCE LIMITADO</td>
                <td className="px-3 py-2">El control existe y opera, pero la evidencia disponible no permite concluir sobre la totalidad de sus atributos. Se documenta la limitación.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold text-red-600">DEFICIENTE</td>
                <td className="px-3 py-2">El control no existe, no opera o no puede demostrarse. Deriva a un papel de observación (PT-OBS).</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold text-gray-500">NO VERIFICADO</td>
                <td className="px-3 py-2">No se obtuvo evidencia suficiente para concluir. Se documenta como limitación al alcance.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-corporate-navy mt-6 mb-2 border-b pb-2">1.3 Convenciones de referenciación</h3>
        <ul className="text-sm space-y-2 mb-8 bg-gray-50 p-4 rounded border">
          <li><strong>PT-OCn-nn</strong> — papel de trabajo de ejecución, por objetivo de control. <strong>PT-XC-nn</strong> — papel transversal. <strong>PT-OBS-nn</strong> — papel de observación.</li>
          <li><strong>EV-nn</strong> — evidencia obtenida durante la ejecución. Se distingue de la codificación E-nn de la Fase 2, que identifica la documentación requerida en la Solicitud de Información Inicial.</li>
          <li><strong>RA-nn</strong> — riesgo de la matriz de planificación. <strong>PA-nn</strong> — procedimiento del programa de auditoría de la Fase 2.</li>
          <li>Cada papel se cierra con una línea de trazabilidad con el formato <span className="font-mono text-xs bg-gray-200 px-1 rounded">riesgo → procedimiento → evidencia → papel de observación</span>, que permite reconstruir el fundamento de cualquier conclusión sin salir del legajo.</li>
        </ul>

        <div className="flex items-center gap-3 mb-6 mt-12">
          <FileText className="h-8 w-8 text-corporate-blue" />
          <h2 className="text-2xl font-bold text-corporate-navy">2. Índice de la evidencia obtenida</h2>
        </div>
        <p className="mb-4">
          Los trece elementos de evidencia recolectados durante la ejecución, con indicación del requerimiento de la Solicitud de Información Inicial del que provienen. La evidencia se conserva cifrada en el legajo, con registro de fecha, hora y método de extracción.
        </p>

        <Acordeon title="Tabla de Evidencias Obtenidas" defaultOpen={false}>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border text-sm">
              <thead className="bg-corporate-gray text-corporate-navy">
                <tr>
                  <th className="px-3 py-2 text-center font-bold w-16">Ref.</th>
                  <th className="px-3 py-2 text-left font-bold">Evidencia</th>
                  <th className="px-3 py-2 text-center font-bold w-32">Origen (Fase 2)</th>
                  <th className="px-3 py-2 text-left font-bold">Papeles que la utilizan</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr><td className="px-3 py-2 text-center font-medium">EV-01</td><td className="px-3 py-2">Acta de aprobación del BCP v2.4, de fecha 10/04/2025, e historial de versiones</td><td className="px-3 py-2 text-center text-gray-500">E-01 · E-04</td><td className="px-3 py-2 text-gray-600 text-xs">PT-OC1-01</td></tr>
                <tr><td className="px-3 py-2 text-center font-medium">EV-02</td><td className="px-3 py-2">Tabla de objetivos de recuperación del BIA: MTPD, RTO, RPO e impacto por proceso</td><td className="px-3 py-2 text-center text-gray-500">E-03</td><td className="px-3 py-2 text-gray-600 text-xs">PT-OC1-02 · PT-XC-01</td></tr>
                <tr><td className="px-3 py-2 text-center font-medium">EV-03</td><td className="px-3 py-2">Plan de Recuperación ante Desastres CF-DRP-2024-10, versión 1.0, y actas del Comité de Gobierno de Tecnología del 19/11/2024</td><td className="px-3 py-2 text-center text-gray-500">E-02 · E-04</td><td className="px-3 py-2 text-gray-600 text-xs">PT-OC1-03 · PT-XC-01</td></tr>
                <tr><td className="px-3 py-2 text-center font-medium">EV-04</td><td className="px-3 py-2">Registro anual de ejercicios y simulacros de continuidad</td><td className="px-3 py-2 text-center text-gray-500">E-05</td><td className="px-3 py-2 text-gray-600 text-xs">PT-OC1-04</td></tr>
                <tr><td className="px-3 py-2 text-center font-medium">EV-05</td><td className="px-3 py-2">Política de copias de seguridad y logs de ejecución del Motor Batch (junio 2026)</td><td className="px-3 py-2 text-center text-gray-500">E-06 · E-07</td><td className="px-3 py-2 text-gray-600 text-xs">PT-OC2-01 · PT-OC2-04</td></tr>
                <tr><td className="px-3 py-2 text-center font-medium">EV-06</td><td className="px-3 py-2">Ficha técnica del sitio alternativo: ubicación, modalidad, replicación y cifrado</td><td className="px-3 py-2 text-center text-gray-500">E-08</td><td className="px-3 py-2 text-gray-600 text-xs">PT-OC2-02</td></tr>
                <tr><td className="px-3 py-2 text-center font-medium">EV-07</td><td className="px-3 py-2">Registro de pruebas de restauración ejecutadas</td><td className="px-3 py-2 text-center text-gray-500">E-05</td><td className="px-3 py-2 text-gray-600 text-xs">PT-OC2-03</td></tr>
                <tr><td className="px-3 py-2 text-center font-medium">EV-08</td><td className="px-3 py-2">Matriz de perfiles y accesos: comparación producción contra entorno de contingencia</td><td className="px-3 py-2 text-center text-gray-500">E-09</td><td className="px-3 py-2 text-gray-600 text-xs">PT-OC3-01 · PT-OC3-04</td></tr>
                <tr><td className="px-3 py-2 text-center font-medium">EV-09</td><td className="px-3 py-2">Registro de activaciones de cuentas de emergencia y eventos SIEM asociados</td><td className="px-3 py-2 text-center text-gray-500">E-10</td><td className="px-3 py-2 text-gray-600 text-xs">PT-OC3-02</td></tr>
                <tr><td className="px-3 py-2 text-center font-medium">EV-10</td><td className="px-3 py-2">Inventario de cuentas del IAM del entorno de contingencia</td><td className="px-3 py-2 text-center text-gray-500">E-11</td><td className="px-3 py-2 text-gray-600 text-xs">PT-OC3-03 · PT-OC3-04</td></tr>
                <tr><td className="px-3 py-2 text-center font-medium">EV-11</td><td className="px-3 py-2">Matriz de alertas operativas y registros de compensación</td><td className="px-3 py-2 text-center text-gray-500">E-07</td><td className="px-3 py-2 text-gray-600 text-xs">PT-OC2-04</td></tr>
                <tr><td className="px-3 py-2 text-center font-medium">EV-12</td><td className="px-3 py-2">Reconciliación documental BIA – BCP – CEAC (elaboración propia del equipo)</td><td className="px-3 py-2 text-center text-gray-500">Elaboración propia</td><td className="px-3 py-2 text-gray-600 text-xs">PT-XC-01 · PT-OC1-02</td></tr>
                <tr><td className="px-3 py-2 text-center font-medium">EV-13</td><td className="px-3 py-2">Matriz de contraste de los tres escenarios de contingencia: respuesta prevista, respuesta exigible y brecha (elaboración propia del equipo)</td><td className="px-3 py-2 text-center text-gray-500">Elaboración propia</td><td className="px-3 py-2 text-gray-600 text-xs">PT-OC1-05</td></tr>
              </tbody>
            </table>
          </div>
        </Acordeon>

      </div>
    </div>
  );
};

export default AlcanceEvidencia;
