import React from 'react';
import { Puzzle } from 'lucide-react';
import { useFormData } from '../context/FormContext';

const Header: React.FC = () => {
  const { formProgress } = useFormData();
  
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Puzzle className="h-10 w-10 mr-3" />
            <div>
              <h1 className="text-2xl font-bold">Cadastro CIPTEA</h1>
              <p className="text-blue-100 text-sm">
                Carteira de Identificação da Pessoa com Transtorno do Espectro Autista
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-64">
            <div className="flex items-center">
              <div className="text-sm font-medium mr-2 min-w-[45px]">{formProgress()}%</div>
              <div className="w-full bg-blue-800 rounded-full h-2.5">
                <div 
                  className="bg-blue-200 h-2.5 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${formProgress()}%` }}
                ></div>
              </div>
            </div>
            <p className="text-xs text-blue-100 mt-1 text-center md:text-right">
              Progresso do formulário
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;