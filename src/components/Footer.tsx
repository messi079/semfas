import React from 'react';
import { Info, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-medium mb-2">Sobre a CIPTEA</h3>
            <p className="text-gray-300 text-sm max-w-md">
              A Carteira de Identificação da Pessoa com Transtorno do Espectro Autista (CIPTEA) 
              é um documento oficial que garante prioridade de atendimento em serviços públicos e privados.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-lg font-medium mb-2">Contato</h3>
            <div className="flex items-center justify-center md:justify-end mb-2">
              <Phone size={16} className="mr-2" />
              <span className="text-gray-300">(11) 0000-0000</span>
            </div>
            <p className="text-gray-400 text-xs">
              &copy; {new Date().getFullYear()} - Sistema de Cadastro CIPTEA
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-700 flex flex-col items-center">
          <div className="bg-gray-700 rounded-lg p-4 max-w-2xl flex items-start">
            <Info size={20} className="text-blue-300 mr-3 mt-1 flex-shrink-0" />
            <p className="text-sm text-gray-300">
              A Lei 13.977/2020 (Lei Romeo Mion) criou a Carteira de Identificação da Pessoa com 
              Transtorno do Espectro Autista (CIPTEA), que deve ser emitida gratuitamente pelos 
              órgãos estaduais e municipais responsáveis.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;