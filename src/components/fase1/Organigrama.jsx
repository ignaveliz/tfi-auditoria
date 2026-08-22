import { useState } from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import { ChevronDown, ChevronUp } from 'lucide-react';

const StyledNode = ({ title, name, isExpanded, toggleNode, hasChildren }) => (
  <div className="inline-flex flex-col items-center justify-center p-3 border-2 border-corporate-navy rounded-md bg-white shadow-sm hover:shadow-md transition-shadow relative group">
    <strong className="text-corporate-navy text-sm">{title}</strong>
    {name && <span className="text-xs text-gray-500 mt-1">{name}</span>}
    {hasChildren && (
      <button 
        onClick={toggleNode}
        className="absolute -bottom-4 bg-white border border-gray-300 rounded-full p-0.5 text-corporate-blue hover:bg-gray-50 hover:text-corporate-navy transition-colors z-10"
      >
        {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>
    )}
  </div>
);

const Organigrama = () => {
  const [expandedNodes, setExpandedNodes] = useState({
    directorio: true,
    operaciones: true,
    comercial: true,
    sistemas: false,
    seguridad: false
  });

  const toggleNode = (nodeId) => {
    setExpandedNodes(prev => ({ ...prev, [nodeId]: !prev[nodeId] }));
  };

  return (
    <div className="w-full overflow-x-auto bg-gray-50 p-6 rounded-lg border border-gray-200 mt-6 mb-8 pb-10">
      <Tree
        lineWidth={'2px'}
        lineColor={'#0f172a'}
        lineBorderRadius={'10px'}
        label={
          <StyledNode 
            title="Directorio / Alta Dirección" 
            isExpanded={expandedNodes.directorio}
            toggleNode={() => toggleNode('directorio')}
            hasChildren={true}
          />
        }
      >
        {expandedNodes.directorio && (
          <TreeNode label={<StyledNode title="Gerencia General" />}>
            
            <TreeNode label={
              <StyledNode 
                title="Gerencia de Operaciones y Tecnología" 
                isExpanded={expandedNodes.operaciones}
                toggleNode={() => toggleNode('operaciones')}
                hasChildren={true}
              />
            }>
              {expandedNodes.operaciones && (
                <>
                  <TreeNode label={<StyledNode title="División Liquidación de Créditos (P1)" />} />
                  <TreeNode label={<StyledNode title="División Acreditación de Sueldos y Pagos (P2)" />} />
                  <TreeNode label={<StyledNode title="División Tesorería y Pagos (P5)" />} />
                  
                  <TreeNode label={
                    <StyledNode 
                      title="Depto. Tecnología y Sistemas" 
                      isExpanded={expandedNodes.sistemas}
                      toggleNode={() => toggleNode('sistemas')}
                      hasChildren={true}
                    />
                  }>
                    {expandedNodes.sistemas && (
                      <TreeNode label={<StyledNode title="Infraestructura y Contingencia" />} />
                    )}
                  </TreeNode>

                  <TreeNode label={
                    <StyledNode 
                      title="Depto. Seguridad de Información (CISO)" 
                      isExpanded={expandedNodes.seguridad}
                      toggleNode={() => toggleNode('seguridad')}
                      hasChildren={true}
                    />
                  }>
                    {expandedNodes.seguridad && (
                      <TreeNode label={<StyledNode title="Políticas y Gestión de Accesos" />} />
                    )}
                  </TreeNode>
                </>
              )}
            </TreeNode>

            <TreeNode label={
              <StyledNode 
                title="Gerencia Comercial y Banca de Personas" 
                isExpanded={expandedNodes.comercial}
                toggleNode={() => toggleNode('comercial')}
                hasChildren={true}
              />
            }>
              {expandedNodes.comercial && (
                <>
                  <TreeNode label={<StyledNode title="División Atención al Cliente (P3)" />} />
                  <TreeNode label={<StyledNode title="Banca Digital / Homebanking (P4)" />} />
                </>
              )}
            </TreeNode>

            <TreeNode label={<StyledNode title="Auditoría Interna" />} />

          </TreeNode>
        )}
      </Tree>
    </div>
  );
};

export default Organigrama;
