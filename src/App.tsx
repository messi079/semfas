import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import { FormDataProvider } from './context/FormContext';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <FormDataProvider>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <RegistrationForm />
        </main>
        <Footer />
      </FormDataProvider>
    </div>
  );
}

export default App;