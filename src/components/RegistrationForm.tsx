import React, { useState } from 'react';
import { User, Users, Phone, FileCheck, ShieldCheck } from 'lucide-react';
import FormField from './FormField';
import FormSection from './FormSection';
import { useFormData } from '../context/FormContext';
import { maskCPF, maskPhone, validateCPF, validatePhone } from '../utils/validation';
import SuccessModal from './SuccessModal';

const RegistrationForm: React.FC = () => {
  const { 
    formData, 
    updateBeneficiary, 
    updateRepresentative,
    setUsesBeneficiaryAsRepresentative,
    setLgpdConsent,
    isFormValid
  } = useFormData();
  
  const [errors, setErrors] = useState({
    beneficiary: {
      fullName: '',
      filiation: '',
      filiation2: '',
      cpf: '',
      phone: '',
      address: '',
      email: '',
      bloodType: '',
      rg: '',
      birthDate: '',
      gender: '',
    },
    representative: {
      fullName: '',
      filiation: '',
      cpf: '',
      phone: '',
      address: '',
      email: '',
      bloodType: '',
      rg: '',
      birthDate: '',
      gender: '',
    }
  });
  
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  const validateField = (section: 'beneficiary' | 'representative', field: string, value: string) => {
    let error = '';
    
    if (value.trim() === '') {
      if ((field === 'filiation' || field === 'filiation2') && section === 'representative') {
        return '';
      }
      error = 'Este campo é obrigatório';
    } else if (field === 'cpf' && !validateCPF(value)) {
      error = 'CPF inválido';
    } else if (field === 'phone' && !validatePhone(value)) {
      error = 'Telefone inválido';
    } else if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'Email inválido';
    }
    
    setErrors(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: error
      }
    }));
    
    return error;
  };
  
  const handleBeneficiaryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;
    
    if (name === 'cpf') {
      formattedValue = maskCPF(value);
    } else if (name === 'phone') {
      formattedValue = maskPhone(value);
    }
    
    updateBeneficiary({ [name]: formattedValue } as any);
    validateField('beneficiary', name, formattedValue);
  };
  
  const handleRepresentativeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;
    
    if (name === 'cpf') {
      formattedValue = maskCPF(value);
    } else if (name === 'phone') {
      formattedValue = maskPhone(value);
    }
    
    updateRepresentative({ [name]: formattedValue } as any);
    validateField('representative', name, formattedValue);
  };

  const handleUseBeneficiaryAsRepresentative = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsesBeneficiaryAsRepresentative(e.target.checked);
  };

  const handleLgpdConsent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLgpdConsent(e.target.checked);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const beneficiaryErrors = {
      fullName: validateField('beneficiary', 'fullName', formData.beneficiary.fullName),
      filiation: validateField('beneficiary', 'filiation', formData.beneficiary.filiation),
      filiation2: validateField('beneficiary', 'filiation2', formData.beneficiary.filiation2),
      cpf: validateField('beneficiary', 'cpf', formData.beneficiary.cpf),
      phone: validateField('beneficiary', 'phone', formData.beneficiary.phone),
      address: validateField('beneficiary', 'address', formData.beneficiary.address),
      email: validateField('beneficiary', 'email', formData.beneficiary.email),
      bloodType: validateField('beneficiary', 'bloodType', formData.beneficiary.bloodType),
      rg: validateField('beneficiary', 'rg', formData.beneficiary.rg),
      birthDate: validateField('beneficiary', 'birthDate', formData.beneficiary.birthDate),
      gender: validateField('beneficiary', 'gender', formData.beneficiary.gender),
    };
    
    const representativeErrors = {
      fullName: validateField('representative', 'fullName', formData.representative.fullName),
      filiation: validateField('representative', 'filiation', formData.representative.filiation),
      cpf: validateField('representative', 'cpf', formData.representative.cpf),
      phone: validateField('representative', 'phone', formData.representative.phone),
      address: validateField('representative', 'address', formData.representative.address),
      email: validateField('representative', 'email', formData.representative.email),
      bloodType: validateField('representative', 'bloodType', formData.representative.bloodType),
      rg: validateField('representative', 'rg', formData.representative.rg),
      birthDate: validateField('representative', 'birthDate', formData.representative.birthDate),
      gender: validateField('representative', 'gender', formData.representative.gender),
    };
    
    const hasErrors = Object.values(beneficiaryErrors).some(error => error !== '') || 
                     Object.values(representativeErrors).some(error => error !== '');
    
    if (!hasErrors && isFormValid()) {
      setShowSuccessModal(true);
      console.log('Form submitted:', formData);
    } else {
      console.log('Form has validation errors');
    }
  };
  
  return (
    <>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Formulário de Cadastro CIPTEA</h1>
          <p className="text-gray-600 mb-4">
            Preencha os dados abaixo para solicitar a Carteira de Identificação da Pessoa com Transtorno do Espectro Autista.
          </p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <FormSection 
            title="Dados do Beneficiário" 
            icon={<User size={24} />}
            description="Informações da pessoa com Transtorno do Espectro Autista (TEA)."
          >
            <FormField
              id="beneficiary-fullName"
              name="fullName"
              label="Nome completo"
              placeholder="Digite o nome completo do beneficiário"
              value={formData.beneficiary.fullName}
              onChange={handleBeneficiaryChange}
              error={errors.beneficiary.fullName}
              required
            />
            
            <FormField
              id="beneficiary-filiation"
              name="filiation"
              label="Filiação 1"
              placeholder="Nome do primeiro responsável"
              value={formData.beneficiary.filiation}
              onChange={handleBeneficiaryChange}
              error={errors.beneficiary.filiation}
              helpText="Informe o nome do primeiro responsável"
              required
            />

            <FormField
              id="beneficiary-filiation2"
              name="filiation2"
              label="Filiação 2"
              placeholder="Nome do segundo responsável"
              value={formData.beneficiary.filiation2}
              onChange={handleBeneficiaryChange}
              error={errors.beneficiary.filiation2}
              helpText="Informe o nome do segundo responsável"
              required
            />

            <FormField
              id="beneficiary-address"
              name="address"
              label="Endereço completo"
              placeholder="Digite o endereço completo"
              value={formData.beneficiary.address}
              onChange={handleBeneficiaryChange}
              error={errors.beneficiary.address}
              required
            />

            <FormField
              id="beneficiary-email"
              name="email"
              type="email"
              label="Email"
              placeholder="Digite o email"
              value={formData.beneficiary.email}
              onChange={handleBeneficiaryChange}
              error={errors.beneficiary.email}
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                id="beneficiary-bloodType"
                name="bloodType"
                label="Tipo Sanguíneo"
                placeholder="Ex: A+"
                value={formData.beneficiary.bloodType}
                onChange={handleBeneficiaryChange}
                error={errors.beneficiary.bloodType}
                required
              />

              <FormField
                id="beneficiary-rg"
                name="rg"
                label="RG"
                placeholder="Digite o RG"
                value={formData.beneficiary.rg}
                onChange={handleBeneficiaryChange}
                error={errors.beneficiary.rg}
                required
              />

              <FormField
                id="beneficiary-birthDate"
                name="birthDate"
                type="date"
                label="Data de nascimento"
                value={formData.beneficiary.birthDate}
                onChange={handleBeneficiaryChange}
                error={errors.beneficiary.birthDate}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sexo
                </label>
                <select
                  id="beneficiary-gender"
                  name="gender"
                  value={formData.beneficiary.gender}
                  onChange={handleBeneficiaryChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Selecione</option>
                  <option value="M">Masculino</option>
                  <option value="F">Feminino</option>
                </select>
                {errors.beneficiary.gender && (
                  <p className="mt-1 text-sm text-red-600">{errors.beneficiary.gender}</p>
                )}
              </div>

              <FormField
                id="beneficiary-cpf"
                name="cpf"
                label="CPF"
                placeholder="000.000.000-00"
                value={formData.beneficiary.cpf}
                onChange={handleBeneficiaryChange}
                error={errors.beneficiary.cpf}
                maxLength={14}
                required
              />
              
              <FormField
                id="beneficiary-phone"
                name="phone"
                label="Telefone para contato"
                placeholder="(00) 00000-0000"
                value={formData.beneficiary.phone}
                onChange={handleBeneficiaryChange}
                error={errors.beneficiary.phone}
                maxLength={15}
                required
              />
            </div>
          </FormSection>
          
          <FormSection 
            title="Dados do Representante Legal" 
            icon={<Users size={24} />}
            description="Informações da pessoa que representa legalmente o beneficiário (pai, mãe, tutor, curador, etc.)."
          >
            <div className="mb-4">
              <label className="flex items-center space-x-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={formData.usesBeneficiaryAsRepresentative}
                  onChange={handleUseBeneficiaryAsRepresentative}
                  className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <span>Usar os dados do beneficiário como representante legal</span>
              </label>
            </div>

            <FormField
              id="representative-fullName"
              name="fullName"
              label="Nome completo do representante"
              placeholder="Digite o nome completo do representante"
              value={formData.representative.fullName}
              onChange={handleRepresentativeChange}
              error={errors.representative.fullName}
              disabled={formData.usesBeneficiaryAsRepresentative}
              required
            />
            
            <FormField
              id="representative-filiation"
              name="filiation"
              label="Filiação"
              placeholder="Nome dos pais do representante (se necessário)"
              value={formData.representative.filiation}
              onChange={handleRepresentativeChange}
              error={errors.representative.filiation}
              disabled={formData.usesBeneficiaryAsRepresentative}
              helpText="Campo opcional"
            />

            <FormField
              id="representative-address"
              name="address"
              label="Endereço completo"
              placeholder="Digite o endereço completo"
              value={formData.representative.address}
              onChange={handleRepresentativeChange}
              error={errors.representative.address}
              disabled={formData.usesBeneficiaryAsRepresentative}
              required
            />

            <FormField
              id="representative-email"
              name="email"
              type="email"
              label="Email"
              placeholder="Digite o email"
              value={formData.representative.email}
              onChange={handleRepresentativeChange}
              error={errors.representative.email}
              disabled={formData.usesBeneficiaryAsRepresentative}
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                id="representative-bloodType"
                name="bloodType"
                label="Tipo Sanguíneo"
                placeholder="Ex: A+"
                value={formData.representative.bloodType}
                onChange={handleRepresentativeChange}
                error={errors.representative.bloodType}
                disabled={formData.usesBeneficiaryAsRepresentative}
                required
              />

              <FormField
                id="representative-rg"
                name="rg"
                label="RG"
                placeholder="Digite o RG"
                value={formData.representative.rg}
                onChange={handleRepresentativeChange}
                error={errors.representative.rg}
                disabled={formData.usesBeneficiaryAsRepresentative}
                required
              />

              <FormField
                id="representative-birthDate"
                name="birthDate"
                type="date"
                label="Data de nascimento"
                value={formData.representative.birthDate}
                onChange={handleRepresentativeChange}
                error={errors.representative.birthDate}
                disabled={formData.usesBeneficiaryAsRepresentative}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sexo
                </label>
                <select
                  id="representative-gender"
                  name="gender"
                  value={formData.representative.gender}
                  onChange={handleRepresentativeChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  disabled={formData.usesBeneficiaryAsRepresentative}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="M">Masculino</option>
                  <option value="F">Feminino</option>
                </select>
                {errors.representative.gender && (
                  <p className="mt-1 text-sm text-red-600">{errors.representative.gender}</p>
                )}
              </div>
              
              <FormField
                id="representative-cpf"
                name="cpf"
                label="CPF"
                placeholder="000.000.000-00"
                value={formData.representative.cpf}
                onChange={handleRepresentativeChange}
                error={errors.representative.cpf}
                disabled={formData.usesBeneficiaryAsRepresentative}
                maxLength={14}
                required
              />
              
              <FormField
                id="representative-phone"
                name="phone"
                label="Telefone para contato"
                placeholder="(00) 00000-0000"
                value={formData.representative.phone}
                onChange={handleRepresentativeChange}
                error={errors.representative.phone}
                disabled={formData.usesBeneficiaryAsRepresentative}
                maxLength={15}
                required
              />
            </div>
          </FormSection>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-0.5">
                <ShieldCheck size={20} className="text-indigo-600" />
              </div>
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.lgpdConsent}
                  onChange={handleLgpdConsent}
                  className="rounded border-gray-300 text-indigo-600 mt-1 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <span className="ml-2 text-sm text-gray-600">
                  Aceito o processamento dos meus dados, conforme Lei Geral de Processamento de Dados (LGPD) e Decreto Municipal n° 8.124/2025
                </span>
              </label>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 mb-4">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md shadow-sm font-medium transition duration-150 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!isFormValid()}
            >
              <FileCheck size={20} className="mr-2" />
              Enviar Solicitação
            </button>
          </div>
        </form>
      </div>
      
      {showSuccessModal && (
        <SuccessModal onClose={() => setShowSuccessModal(false)} />
      )}
    </>
  );
};

export default RegistrationForm;