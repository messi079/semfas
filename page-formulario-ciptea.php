<?php
/**
 * Template Name: Formulário CIPTEA
 */

get_header();
?>

<main class="flex-grow container mx-auto px-4 py-8">
    <div class="max-w-3xl mx-auto">
        <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h1 class="text-2xl font-bold text-gray-800 mb-2">Formulário de Cadastro CIPTEA</h1>
            <p class="text-gray-600 mb-4">
                Preencha os dados abaixo para solicitar a Carteira de Identificação da Pessoa com Transtorno do Espectro Autista.
            </p>
        </div>
        
        <form id="ciptea-form" class="space-y-6">
            <!-- Beneficiary Section -->
            <section class="bg-white rounded-lg shadow-md p-6 mb-6">
                <div class="flex items-center mb-2">
                    <svg class="w-6 h-6 text-indigo-600 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                    </svg>
                    <h2 class="text-xl font-semibold text-gray-800">Dados do Beneficiário</h2>
                </div>
                
                <p class="text-gray-600 mb-6 text-sm">
                    Informações da pessoa com Transtorno do Espectro Autista (TEA).
                </p>
                
                <div class="space-y-4">
                    <!-- Form fields for beneficiary -->
                    <?php include(get_template_directory() . '/template-parts/form-fields-beneficiary.php'); ?>
                </div>
            </section>
            
            <!-- Representative Section -->
            <section class="bg-white rounded-lg shadow-md p-6 mb-6">
                <div class="flex items-center mb-2">
                    <svg class="w-6 h-6 text-indigo-600 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"/>
                    </svg>
                    <h2 class="text-xl font-semibold text-gray-800">Dados do Representante Legal</h2>
                </div>
                
                <p class="text-gray-600 mb-6 text-sm">
                    Informações da pessoa que representa legalmente o beneficiário (pai, mãe, tutor, curador, etc.).
                </p>
                
                <div class="mb-4">
                    <label class="flex items-center space-x-2 text-sm text-gray-700">
                        <input type="checkbox" id="use-beneficiary-data" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                        <span>Usar os dados do beneficiário como representante legal</span>
                    </label>
                </div>
                
                <div id="representative-fields" class="space-y-4">
                    <!-- Form fields for representative -->
                    <?php include(get_template_directory() . '/template-parts/form-fields-representative.php'); ?>
                </div>
            </section>
            
            <!-- LGPD Consent -->
            <div class="bg-white rounded-lg shadow-md p-6 mb-6">
                <div class="flex items-start space-x-3">
                    <svg class="w-5 h-5 text-indigo-600 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                    <label class="flex items-start">
                        <input type="checkbox" id="lgpd-consent" class="rounded border-gray-300 text-indigo-600 mt-1 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required>
                        <span class="ml-2 text-sm text-gray-600">
                            Aceito o processamento dos meus dados, conforme Lei Geral de Processamento de Dados (LGPD) e Decreto Municipal n° 8.124/2025
                        </span>
                    </label>
                </div>
            </div>
            
            <!-- Submit Button -->
            <div class="flex justify-center mt-8 mb-4">
                <button type="submit" class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md shadow-sm font-medium transition duration-150 flex items-center">
                    <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Enviar Solicitação
                </button>
            </div>
        </form>
    </div>
</main>

<?php get_footer(); ?>