import { FileText, Target, CheckSquare, Search, BarChart2, Server } from 'lucide-react';

const DetalleIntro = () => {
  return (
    <>
      {/* B.1 Carta de presentación técnica */}
      <section id="b1-carta" className="scroll-mt-24 mb-12 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="h-8 w-8 text-corporate-blue" />
          <h2 className="text-2xl font-bold text-corporate-navy">B.1 Carta de presentación técnica</h2>
        </div>
        
        <div className="prose max-w-none text-gray-700">
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
      </section>

      {/* B.2 Antecedentes */}
      <section id="b2-antecedentes" className="scroll-mt-24 mb-12 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Target className="h-8 w-8 text-corporate-blue" />
          <h2 className="text-2xl font-bold text-corporate-navy">B.2 Antecedentes y contexto tecnológico auditado</h2>
        </div>
        
        <div className="prose max-w-none text-gray-700 mb-6">
          <p>
            Financiera Crédito Fácil S.A. atraviesa un proceso de migración hacia un modelo de banca predominantemente virtual. La sustitución progresiva de la atención presencial por integraciones por API, plataformas contratadas como servicio, procesamiento por lotes y canales de autogestión trasladó la continuidad del negocio desde el terreno de la infraestructura física al de la arquitectura lógica. El efecto sobre el perfil de riesgo es directo: los eventos que antes afectaban a una sucursal hoy alcanzan simultáneamente a la totalidad de la base de clientes.
          </p>
        </div>

        <h3 className="text-lg font-bold text-corporate-navy mb-4">Procesos críticos y escala operativa declarada</h3>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full divide-y divide-gray-200 border text-sm text-center">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-4 py-2 font-bold text-left">Proceso</th>
                <th className="px-4 py-2 font-bold">Escala operativa</th>
                <th className="px-4 py-2 font-bold">MTPD</th>
                <th className="px-4 py-2 font-bold">RTO</th>
                <th className="px-4 py-2 font-bold">RPO</th>
                <th className="px-4 py-2 font-bold">Impacto/hora</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2 text-left font-medium">P1 — Liquidación de Créditos</td>
                <td className="px-4 py-2">180 desembolsos diarios · promedio $1.200.000</td>
                <td className="px-4 py-2">2 h</td>
                <td className="px-4 py-2">1 h</td>
                <td className="px-4 py-2">0 min</td>
                <td className="px-4 py-2">$27.000.000</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-left font-medium">P2 — Acreditación de Sueldos</td>
                <td className="px-4 py-2">40 empresas convenio · hasta 14.000 acreditaciones en 3 h</td>
                <td className="px-4 py-2">4 h (1 h en fecha de pago)</td>
                <td className="px-4 py-2">2 h</td>
                <td className="px-4 py-2">Último lote validado</td>
                <td className="px-4 py-2">$58.000.000</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-left font-medium">P3 — Atención al Cliente Online</td>
                <td className="px-4 py-2">2.200 gestiones diarias · 8 % urgentes</td>
                <td className="px-4 py-2">6 h</td>
                <td className="px-4 py-2">4 h</td>
                <td className="px-4 py-2">1 h</td>
                <td className="px-4 py-2">$2.750.000</td>
              </tr>
              <tr className="bg-gray-50 text-gray-500">
                <td className="px-4 py-2 text-left font-medium">P4 — Homebanking (documental)</td>
                <td className="px-4 py-2">3.500 transferencias diarias · picos de 5.800</td>
                <td className="px-4 py-2">1 h</td>
                <td className="px-4 py-2">30 min</td>
                <td className="px-4 py-2">0 min</td>
                <td className="px-4 py-2">$122.500.000</td>
              </tr>
              <tr className="bg-gray-50 text-gray-500">
                <td className="px-4 py-2 text-left font-medium">P5 — Tesorería (documental)</td>
                <td className="px-4 py-2">45 operaciones mayoristas · liquidación neta $450.000.000</td>
                <td className="px-4 py-2">2 h</td>
                <td className="px-4 py-2">1 h</td>
                <td className="px-4 py-2">15 min</td>
                <td className="px-4 py-2">$212.500.000</td>
              </tr>
              <tr className="bg-gray-100 font-bold">
                <td className="px-4 py-2 text-left" colSpan="5">Total declarado por el BIA</td>
                <td className="px-4 py-2">$422.750.000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-md mb-6">
          <h4 className="text-sm font-bold text-blue-800 mb-1">El sistema de identidades es la dependencia estructural del marco</h4>
          <p className="text-sm text-blue-900 mb-0">
            El IAM es la única dependencia compartida por los cinco procesos críticos: su indisponibilidad los interrumpe simultáneamente, porque ningún operador puede autenticarse contra los sistemas de negocio. El Análisis de Impacto al Negocio le asigna en consecuencia un tiempo de recuperación efectivo de 15 minutos —el más exigente de todo el marco— pero no lo incorpora como componente con objetivos formalmente aprobados, y ni el BCP ni el DRP le asignan procedimiento ni responsable. Los tiempos objetivo de P1, P2 y P3 descansan, por lo tanto, sobre un componente que nadie se comprometió formalmente a restablecer. Esta condición atraviesa las observaciones OBS-03 y OBS-07 y los tres escenarios evaluados en B.7.
          </p>
        </div>

        <h3 className="text-lg font-bold text-corporate-navy mb-3">Componentes evaluados y dependencias estructurales</h3>
        <p className="text-gray-700">
          El universo tecnológico comprendió el Core Bancario y su módulo de créditos, la plataforma de integración por API que automatiza la instrucción de desembolso, el Motor Batch que soporta la acreditación de haberes, el portal de Banca Empresa, la plataforma de CRM contratada como servicio, el sistema de gestión de identidades y accesos en producción y en contingencia, y la infraestructura de resguardos y el sitio alternativo. El switch transaccional, el motor antifraude y el sistema de gestión de tesorería se revisaron con alcance documental por soportar exclusivamente a los procesos complementarios.
        </p>
      </section>

      {/* B.3 Alcance y limitaciones */}
      <section id="b3-alcance" className="scroll-mt-24 mb-12 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <CheckSquare className="h-8 w-8 text-corporate-blue" />
          <h2 className="text-2xl font-bold text-corporate-navy">B.3 Alcance y limitaciones del trabajo</h2>
        </div>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-4 py-3 text-left font-bold w-1/4">Dimensión</th>
                <th className="px-4 py-3 text-left font-bold">Delimitación</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Organizacional</td>
                <td className="px-4 py-3 text-gray-700">Gerencia de Operaciones y Tecnología, Gerencia Comercial y Banca de Personas, Departamento de Tecnología y Sistemas, Departamento de Seguridad de la Información y Auditoría Interna.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">De procesos</td>
                <td className="px-4 py-3 text-gray-700">Revisión integral sobre P1, P2, P3 y la dependencia transversal del IAM. Verificación documental acotada sobre P4 y P5, sin pruebas sustantivas.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Temporal</td>
                <td className="px-4 py-3 text-gray-700">Registros generados entre el 01/06/2025 y el 30/06/2026. Trabajo de campo ejecutado entre el 03/07/2026 y el 23/07/2026.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Documental</td>
                <td className="px-4 py-3 text-gray-700">BCP v2.4 (CF-BCP-2025-24), DRP v1.0 (CF-DRP-2024-10), BIA v1.2 (CF-BIA-2026-01), política de copias, matrices de accesos, actas del Comité de Gobierno de Tecnología y contratos de proveedores críticos.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-bold text-corporate-navy mb-3">Exclusiones expresas</h3>
        <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
          <li>Revisión de código fuente del CRM, del homebanking y de las aplicaciones móviles.</li>
          <li>Auditoría de estados contables, conciliaciones de saldos y evaluación de la cartera de colocaciones.</li>
          <li>Evaluación del desempeño comercial, de la política crediticia y de los modelos de scoring.</li>
          <li>Pruebas de intrusión, ingeniería social y análisis de vulnerabilidades sobre entornos productivos.</li>
          <li>Auditoría directa sobre la infraestructura de los proveedores externos, evaluada por vía documental y contractual.</li>
        </ul>

        <h3 className="text-lg font-bold text-corporate-navy mb-3">Limitaciones sobrevinientes durante la ejecución</h3>
        <p className="text-gray-700">
          Cuatro procedimientos previstos en el programa no pudieron completarse por causas ajenas a la disponibilidad del equipo auditor. Su detalle y su efecto sobre las conclusiones se desarrollan en el apartado B.11. Corresponde asimismo dejar constancia de que el riesgo relativo a la estrategia de recuperación del sistema de gestión de identidades, calificado como crítico en la planificación, no fue sometido a la prueba técnica prevista por no haberse aportado la documentación de arquitectura del componente; su condición documental —la ausencia de objetivos de recuperación aprobados y de procedimiento asociado— quedó no obstante acreditada por vía de la reconciliación transversal y se recoge en OBS-03.
        </p>
      </section>

      {/* B.4 Metodología */}
      <section id="b4-metodologia" className="scroll-mt-24 mb-12 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Search className="h-8 w-8 text-corporate-blue" />
          <h2 className="text-2xl font-bold text-corporate-navy">B.4 Metodología aplicada</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-4 py-3 text-left font-bold w-1/4">Componente</th>
                <th className="px-4 py-3 text-left font-bold">Aplicación en el encargo</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Marcos normativos</td>
                <td className="px-4 py-3 text-gray-700">BCRA Com. «A» 7777, «A» 7783 y «A» 7724 · ISO/IEC 27002:2022 (5.15, 5.16, 5.18, 5.29, 5.30, 8.2, 8.13, 8.16) · ISO 22301 (8.2, 8.3, 8.4, 8.5) · COBIT 2019 (DSS04, DSS01, APO12) · COSO 2013 (CC1 a CC5) · ISO/IEC 19011 e ISACA ITAF · Ley N.º 25.326.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Enfoque</td>
                <td className="px-4 py-3 text-gray-700">Basado en riesgos. La extensión de las pruebas sustantivas se calibró al cierre de la planificación en función del nivel de confianza asignado al ambiente de control, y no sobre un programa estándar uniforme.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Tipos de prueba</td>
                <td className="px-4 py-3 text-gray-700">Cumplimiento (inspección de actas, versiones y aprobaciones) y sustantivas (análisis de logs, inspección de configuraciones, análisis de poblaciones de cuentas, cotejo de tiempos declarados contra objetivos).</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Criterio de muestreo</td>
                <td className="px-4 py-3 text-gray-700">Se privilegió el análisis de población completa mediante técnicas asistidas por computador: 150 ejecuciones de copia de junio de 2026, 87 cuentas del entorno de contingencia, 2 activaciones de emergencia y 9 pares de parámetros BIA-BCP. Sólo la comparación de perfiles de autenticación se resolvió por muestra dirigida (3 de 14 perfiles, seleccionados por concentración de privilegios).</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Documentación</td>
                <td className="px-4 py-3 text-gray-700">Catorce papeles de trabajo de ejecución —incluidos el papel transversal de reconciliación documental y el de evaluación de escenarios—, siete papeles de observación y trece elementos de evidencia referenciados, conservados cifrados en el legajo del encargo.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Estructura de hallazgos</td>
                <td className="px-4 py-3 text-gray-700">Metodología NCCCE: norma o criterio, condición, causa, consecuencia y recomendación.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* B.5 Resultado CEAC */}
      <section id="b5-ceac" className="scroll-mt-24 mb-12 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <BarChart2 className="h-8 w-8 text-corporate-blue" />
          <h2 className="text-2xl font-bold text-corporate-navy">B.5 Resultado del cuestionario del ambiente de control (CEAC)</h2>
        </div>
        
        <p className="text-gray-700 mb-6">
          El instrumento se aplicó el 02/07/2026 sobre treinta preguntas distribuidas en nueve dimensiones, con verificación documental de cada respuesta y revisión de segundo nivel por el Comité Técnico de Calidad de la firma. Se registra bajo la referencia CEAC-2026-VAN-01.
        </p>

        <h3 className="text-lg font-bold text-corporate-navy mb-3">Determinación del nivel de confianza</h3>
        <p className="text-gray-700 mb-6">
          Fórmula aplicada: controles satisfactorios sobre total de controles aplicables evaluados. Cálculo: 23 / 30 × 100 = 76,67 %. Las calificaciones Parcial no computan como satisfactorias y los dos ítems No Verificado permanecen en el denominador, por representar una limitación de evidencia y no un control que opere adecuadamente.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-md mb-8">
          <h4 className="text-sm font-bold text-blue-800 mb-1">Resultado: 76,67 % — Nivel de confianza ALTO</h4>
          <p className="text-sm text-blue-900 mb-0">
            El resultado se ubica a 1,67 puntos del piso de la banda, esto es, en su posición menos holgada. Se adoptó en consecuencia un enfoque de predominio de pruebas de cumplimiento con ampliación dirigida sobre las dimensiones E (Políticas, estándares y procedimientos) y G (Supervisión y rendición de cuentas).
          </p>
        </div>

        <h3 className="text-lg font-bold text-corporate-navy mb-3">Lectura del ambiente de control</h3>
        <p className="text-gray-700 mb-4">
          La estructura de gobierno es sólida: la ubicación de Tecnología en el organigrama preserva su independencia respecto de las áreas usuarias, la segregación de funciones está formalizada e implementada técnicamente mediante el esquema maker-checker de Tesorería, el responsable de seguridad de la información cuenta con designación formal y línea de reporte propia, la revocación de accesos ante desvinculación opera de manera automatizada, y la metodología de gestión de riesgos de TI está aprobada con propietarios asignados.
        </p>
        <p className="text-gray-700">
          La debilidad se concentra en el mantenimiento del cuerpo normativo y en los mecanismos de rendición de cuentas. Las políticas existen pero envejecen sin revisión —catorce meses la Política de Seguridad de la Información, más de dieciocho el Manual de Procedimientos Operativos—, en un período en el que la arquitectura de la entidad cambió por efecto de la migración digital. Ese patrón anticipa exactamente el resultado del trabajo de campo: un marco de continuidad que no falla por ausencia de diseño sino por falta de mantenimiento y de verificación del diseño existente.
        </p>
      </section>

      {/* B.6 Evaluación CGTI */}
      <section id="b6-cgti" className="scroll-mt-24 mb-12 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Server className="h-8 w-8 text-corporate-blue" />
          <h2 className="text-2xl font-bold text-corporate-navy">B.6 Evaluación de los Controles Generales de TI</h2>
        </div>
        
        <p className="text-gray-700 mb-6">
          Se evaluaron las categorías de controles generales de TI que inciden sobre los tres objetivos de control del encargo. Las categorías excluidas del alcance se consignan expresamente, con indicación de la condición observada cuando la revisión documental la puso de manifiesto.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border text-sm">
            <thead className="bg-corporate-gray text-corporate-navy">
              <tr>
                <th className="px-3 py-2 text-left font-bold w-10">#</th>
                <th className="px-3 py-2 text-left font-bold">Categoría de CGTI</th>
                <th className="px-3 py-2 text-left font-bold">Alcance</th>
                <th className="px-3 py-2 text-left font-bold">Evaluación</th>
                <th className="px-3 py-2 text-left font-bold">Fundamento y referencia</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-3 py-2 text-center font-medium">1</td>
                <td className="px-3 py-2 font-medium">Seguridad Física</td>
                <td className="px-3 py-2">Documental</td>
                <td className="px-3 py-2 text-green-700 font-medium">Adecuado con alcance limitado</td>
                <td className="px-3 py-2 text-gray-700">Sitio alternativo acreditado a 40 km del centro primario, con cifrado AES-256 en reposo. CA-01.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-center font-medium">2</td>
                <td className="px-3 py-2 font-medium">Seguridad Lógica</td>
                <td className="px-3 py-2">Integral</td>
                <td className="px-3 py-2 text-red-600 font-medium">Deficiente en contingencia</td>
                <td className="px-3 py-2 text-gray-700">Equivalencia de autenticación acreditada (CA-02), pero accesos de emergencia sin autorización ni revisión. OBS-07.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-center font-medium">3</td>
                <td className="px-3 py-2 font-medium">Gestión de Cambios</td>
                <td className="px-3 py-2">Control documental</td>
                <td className="px-3 py-2 text-red-600 font-medium">Deficiente en versiones</td>
                <td className="px-3 py-2 text-gray-700">El BCP registra 14 meses sin revisión y el DRP permanece sin aprobación. OBS-01 · OBS-03.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-center font-medium">4</td>
                <td className="px-3 py-2 font-medium">Backups y Recuperación</td>
                <td className="px-3 py-2">Integral</td>
                <td className="px-3 py-2 text-red-600 font-medium">Deficiente</td>
                <td className="px-3 py-2 text-gray-700">Fallos de copia sin compensación; sin prueba de restauración exitosa; repositorio accesible. OBS-02, 05, 06.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-center font-medium">5</td>
                <td className="px-3 py-2 font-medium text-gray-500">Gestión de Incidentes</td>
                <td className="px-3 py-2 text-gray-500">Fuera del alcance</td>
                <td className="px-3 py-2 text-gray-500">No evaluado</td>
                <td className="px-3 py-2 text-gray-500">La política de gestión de incidentes se encuentra en borrador sin aprobación.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-center font-medium">6</td>
                <td className="px-3 py-2 font-medium">Seguridad en Redes</td>
                <td className="px-3 py-2">Entorno contingencia</td>
                <td className="px-3 py-2 text-green-700 font-medium">Adecuado con alcance limitado</td>
                <td className="px-3 py-2 text-gray-700">Operación remota prevé VPN con MFA. Enlace de sitio alternativo pendiente (E2).</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-center font-medium">7</td>
                <td className="px-3 py-2 font-medium">Acuerdos Confidencialidad</td>
                <td className="px-3 py-2">Documental</td>
                <td className="px-3 py-2 text-green-700 font-medium">Adecuado</td>
                <td className="px-3 py-2 text-gray-700">Acuerdos suscriptos por el personal de TI y proveedores críticos.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-center font-medium">8</td>
                <td className="px-3 py-2 font-medium">Monitoreo y Auditoría</td>
                <td className="px-3 py-2">Integral</td>
                <td className="px-3 py-2 text-amber-600 font-medium">Parcialmente adecuado</td>
                <td className="px-3 py-2 text-gray-700">Tablero mensual omitió resultados de restauración. Autoevaluación sin validación cruzada. OBS-05.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default DetalleIntro;
