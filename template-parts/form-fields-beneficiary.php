<?php
/**
 * Beneficiary form fields template part
 */
?>
<div class="mb-4">
    <label for="beneficiary_fullName" class="block text-sm font-medium text-gray-700 mb-1">
        Nome completo
    </label>
    <input type="text" id="beneficiary_fullName" name="beneficiary_fullName" 
           class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
           required>
</div>

<div class="mb-4">
    <label for="beneficiary_filiation" class="block text-sm font-medium text-gray-700 mb-1">
        Filiação 1
    </label>
    <input type="text" id="beneficiary_filiation" name="beneficiary_filiation"
           class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
           required>
</div>

<div class="mb-4">
    <label for="beneficiary_filiation2" class="block text-sm font-medium text-gray-700 mb-1">
        Filiação 2
    </label>
    <input type="text" id="beneficiary_filiation2" name="beneficiary_filiation2"
           class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
           required>
</div>

<div class="mb-4">
    <label for="beneficiary_address" class="block text-sm font-medium text-gray-700 mb-1">
        Endereço completo
    </label>
    <input type="text" id="beneficiary_address" name="beneficiary_address"
           class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
           required>
</div>

<div class="mb-4">
    <label for="beneficiary_email" class="block text-sm font-medium text-gray-700 mb-1">
        Email
    </label>
    <input type="email" id="beneficiary_email" name="beneficiary_email"
           class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
           required>
</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="mb-4">
        <label for="beneficiary_bloodType" class="block text-sm font-medium text-gray-700 mb-1">
            Tipo Sanguíneo
        </label>
        <input type="text" id="beneficiary_bloodType" name="beneficiary_bloodType"
               class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
               placeholder="Ex: A+" required>
    </div>

    <div class="mb-4">
        <label for="beneficiary_rg" class="block text-sm font-medium text-gray-700 mb-1">
            RG
        </label>
        <input type="text" id="beneficiary_rg" name="beneficiary_rg"
               class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
               required>
    </div>

    <div class="mb-4">
        <label for="beneficiary_birthDate" class="block text-sm font-medium text-gray-700 mb-1">
            Data de nascimento
        </label>
        <input type="date" id="beneficiary_birthDate" name="beneficiary_birthDate"
               class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
               required>
    </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="mb-4">
        <label for="beneficiary_gender" class="block text-sm font-medium text-gray-700 mb-1">
            Sexo
        </label>
        <select id="beneficiary_gender" name="beneficiary_gender"
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required>
            <option value="">Selecione</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
        </select>
    </div>

    <div class="mb-4">
        <label for="beneficiary_cpf" class="block text-sm font-medium text-gray-700 mb-1">
            CPF
        </label>
        <input type="text" id="beneficiary_cpf" name="beneficiary_cpf"
               class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
               placeholder="000.000.000-00" maxlength="14" required>
    </div>

    <div class="mb-4">
        <label for="beneficiary_phone" class="block text-sm font-medium text-gray-700 mb-1">
            Telefone para contato
        </label>
        <input type="text" id="beneficiary_phone" name="beneficiary_phone"
               class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
               placeholder="(00) 00000-0000" maxlength="15" required>
    </div>
</div>