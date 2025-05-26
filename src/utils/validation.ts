// CPF mask function
export const maskCPF = (value: string): string => {
  // Remove all non-numbers
  const numericValue = value.replace(/\D/g, '');
  
  // Apply the mask
  return numericValue
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    .substring(0, 14);
};

// Phone mask function
export const maskPhone = (value: string): string => {
  // Remove all non-numbers
  const numericValue = value.replace(/\D/g, '');
  
  // Apply the mask
  if (numericValue.length <= 10) {
    return numericValue
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .substring(0, 14);
  } else {
    return numericValue
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .substring(0, 15);
  }
};

// CPF validation function
export const validateCPF = (cpf: string): boolean => {
  const numericCPF = cpf.replace(/\D/g, '');
  
  if (numericCPF.length !== 11) {
    return false;
  }
  
  // Check for known invalid patterns
  if (/^(\d)\1{10}$/.test(numericCPF)) {
    return false;
  }
  
  // In a real app, you'd implement the full CPF validation algorithm here
  // For this example, we'll just check if it has 11 digits
  return numericCPF.length === 11;
};

// Phone validation function
export const validatePhone = (phone: string): boolean => {
  const numericPhone = phone.replace(/\D/g, '');
  
  // Phone number must have at least 10 digits (with area code)
  return numericPhone.length >= 10 && numericPhone.length <= 11;
};