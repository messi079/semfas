<?php
/**
 * Template Name: Consulta CIPTEA
 */

get_header();
?>

<main class="flex-grow container mx-auto px-4 py-8">
    <div class="max-w-2xl mx-auto">
        <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h1 class="text-2xl font-bold text-gray-800 mb-2">Consulta de Solicitação CIPTEA</h1>
            <p class="text-gray-600 mb-4">
                Digite o número de protocolo para consultar o status da sua solicitação.
            </p>
        </div>
        
        <form id="ciptea-consultation-form" class="bg-white rounded-lg shadow-md p-6">
            <div class="mb-4">
                <label for="protocol" class="block text-sm font-medium text-gray-700 mb-1">
                    Número do Protocolo
                </label>
                <input type="text" 
                       id="protocol" 
                       name="protocol" 
                       placeholder="000000/2025"
                       class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                       required>
            </div>
            
            <div class="flex justify-center">
                <button type="submit" 
                        class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md shadow-sm font-medium transition duration-150 flex items-center">
                    <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="M21 21l-4.35-4.35"/>
                    </svg>
                    Consultar
                </button>
            </div>
        </form>
        
        <div id="consultation-result" class="mt-6 hidden">
            <!-- Results will be displayed here -->
        </div>
    </div>
</main>

<?php get_footer(); ?>