import React, { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';
import { useFormData } from '../context/FormContext';

interface SuccessModalProps {
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ onClose }) => {
  const { formData, resetForm } = useFormData();
  
  useEffect(() => {
    // Prevent scrolling while modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  const handleClose = () => {
    resetForm();
    onClose();
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-lg shadow-xl max-w-md w-full relative animate-fadeIn"
        style={{ animationDuration: '0.3s' }}
      >
        <button 
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        
        <div className="p-6 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Solicitação Enviada!</h2>
          
          <p className="text-gray-600 mb-4">
            A solicitação da CIPTEA para <strong>{formData.beneficiary.fullName}</strong> foi 
            enviada com sucesso.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg text-left mb-4">
            <p className="text-sm text-gray-800">
              <span className="font-medium">Número de protocolo:</span>{' '}
              {Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}/{new Date().getFullYear()}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Guarde este número para consultas futuras. Você receberá informações adicionais no telefone cadastrado.
            </p>
          </div>
          
          <button
            onClick={handleClose}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md shadow-sm font-medium transition duration-150"
          >
            Concluir
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;