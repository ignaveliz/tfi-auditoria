import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Acordeon = ({ title, children, defaultOpen = false, disabled = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`border border-gray-200 rounded-md mb-4 overflow-hidden shadow-sm ${disabled ? 'opacity-70 bg-gray-50' : 'bg-white'}`}>
      <button 
        onClick={toggleAccordion}
        className={`w-full px-5 py-4 flex justify-between items-center transition-colors ${disabled ? 'cursor-not-allowed' : 'bg-gray-50 hover:bg-gray-100'}`}
        disabled={disabled}
      >
        <span className="font-bold text-corporate-navy text-left flex items-center gap-2">
          {title}
        </span>
        {!disabled && (
          isOpen ? <ChevronUp className="h-5 w-5 text-corporate-blue" /> : <ChevronDown className="h-5 w-5 text-gray-400" />
        )}
      </button>
      {isOpen && !disabled && (
        <div className="p-5 border-t border-gray-200 text-sm text-gray-700 bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

export default Acordeon;
