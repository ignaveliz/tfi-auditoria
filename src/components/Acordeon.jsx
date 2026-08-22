import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Acordeon = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-md mb-4 bg-white overflow-hidden shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <span className="font-bold text-corporate-navy text-left">{title}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-corporate-blue" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
      </button>
      {isOpen && (
        <div className="p-5 border-t border-gray-200 text-sm text-gray-700 bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

export default Acordeon;
