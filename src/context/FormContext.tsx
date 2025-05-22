import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Beneficiary {
  fullName: string;
  filiation: string;
  filiation2: string;
  cpf: string;
  phone: string;
  address: string;
  email: string;
  bloodType: string;
  rg: string;
  birthDate: string;
  gender: string;
}

interface Representative {
  fullName: string;
  filiation: string;
  cpf: string;
  phone: string;
  address: string;
  email: string;
  bloodType: string;
  rg: string;
  birthDate: string;
  gender: string;
}

interface FormData {
  beneficiary: Beneficiary;
  representative: Representative;
  usesBeneficiaryAsRepresentative: boolean;
  lgpdConsent: boolean;
}

interface FormContextType {
  formData: FormData;
  updateBeneficiary: (data: Partial<Beneficiary>) => void;
  updateRepresentative: (data: Partial<Representative>) => void;
  setUsesBeneficiaryAsRepresentative: (value: boolean) => void;
  setLgpdConsent: (value: boolean) => void;
  isFormValid: () => boolean;
  formProgress: () => number;
  resetForm: () => void;
}

const initialFormData: FormData = {
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
  },
  usesBeneficiaryAsRepresentative: false,
  lgpdConsent: false,
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const updateBeneficiary = (data: Partial<Beneficiary>) => {
    setFormData((prev) => {
      const newState = {
        ...prev,
        beneficiary: { ...prev.beneficiary, ...data },
      };
      
      if (prev.usesBeneficiaryAsRepresentative) {
        newState.representative = { ...newState.beneficiary };
      }
      
      return newState;
    });
  };

  const updateRepresentative = (data: Partial<Representative>) => {
    setFormData((prev) => ({
      ...prev,
      representative: { ...prev.representative, ...data },
    }));
  };

  const setUsesBeneficiaryAsRepresentative = (value: boolean) => {
    setFormData((prev) => ({
      ...prev,
      usesBeneficiaryAsRepresentative: value,
      representative: value ? { ...prev.beneficiary } : prev.representative,
    }));
  };

  const setLgpdConsent = (value: boolean) => {
    setFormData((prev) => ({
      ...prev,
      lgpdConsent: value,
    }));
  };

  const isFormValid = () => {
    const { beneficiary, representative, lgpdConsent } = formData;
    
    const validatePerson = (person: Beneficiary | Representative) => {
      return (
        person.fullName.trim() !== '' &&
        person.cpf.replace(/\D/g, '').length === 11 &&
        person.phone.replace(/\D/g, '').length >= 10 &&
        person.address.trim() !== '' &&
        person.email.trim() !== '' &&
        person.bloodType.trim() !== '' &&
        person.rg.trim() !== '' &&
        person.birthDate.trim() !== '' &&
        person.gender.trim() !== ''
      );
    };

    return validatePerson(beneficiary) && validatePerson(representative) && lgpdConsent;
  };

  const formProgress = () => {
    const { beneficiary, representative, lgpdConsent } = formData;
    const fields = [
      beneficiary.fullName,
      beneficiary.filiation,
      beneficiary.filiation2,
      beneficiary.cpf,
      beneficiary.phone,
      beneficiary.address,
      beneficiary.email,
      beneficiary.bloodType,
      beneficiary.rg,
      beneficiary.birthDate,
      beneficiary.gender,
      representative.fullName,
      representative.filiation,
      representative.cpf,
      representative.phone,
      representative.address,
      representative.email,
      representative.bloodType,
      representative.rg,
      representative.birthDate,
      representative.gender,
    ];
    
    const filledFields = fields.filter(field => field.trim() !== '').length + (lgpdConsent ? 1 : 0);
    return Math.round((filledFields / (fields.length + 1)) * 100);
  };
  
  const resetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateBeneficiary,
        updateRepresentative,
        setUsesBeneficiaryAsRepresentative,
        setLgpdConsent,
        isFormValid,
        formProgress,
        resetForm
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormData = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
};