import React, { ReactNode } from 'react';

interface FormSectionProps {
  title: string;
  icon: ReactNode;
  description?: string;
  children: ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({ 
  title, 
  icon, 
  description, 
  children 
}) => {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center mb-2">
        <div className="text-indigo-600 mr-3">
          {icon}
        </div>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      
      {description && (
        <p className="text-gray-600 mb-6 text-sm">{description}</p>
      )}
      
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
};

export default FormSection;