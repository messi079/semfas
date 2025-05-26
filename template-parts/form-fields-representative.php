<?php
/**
 * Representative form fields template part
 */
?>
<div class="mb-4">
    <label for="representative_fullName" class="block text-sm font-medium text-gray-700 mb-1">
        Nome completo do representante
    </label>
    <input type="text" id="representative_fullName" name="representative_fullName"
           class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
           required>
</div>

<div class="mb-4">
    <label for="representative_filiation" class="block text-sm font-medium text-gray-700 mb-1">
        Filiação
    </label>
    <input type="text" id="representative_filiation" name="representative_filiation"
           class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150">
    <p class="mt-1 text-sm text-gray-500">Campo opcional</p>
</div>

<div class="mb-4">
    <label for="representative_address" class="block text-sm font-medium text-gray-700 mb-1">
        Endereço completo
    </label>
    <input type="text" id="representative_address" name="representative_address"
           class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
           required>
</div>

<div class="mb-4">
    <label for="representative_email" class="block text-sm font-medium text-gray-700 mb-1">
        Email
    </label>
    <input type="email" id="representative_email" name="representative_email"
           class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
           required>
</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="mb-4">
        <label for="representative_bloodType" class="block text-sm font-medium text-gray-700 mb-1">
            Tipo Sanguíneo
        </label>
        <input type="text" id="representative_bloodType" name="representative_bloodType"
               class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
               placeholder="Ex: A+" required>
    </div>

    <div class="mb-4">
        <label for="representative_rg" class="block text-sm font-medium text-gray-700 mb-1">
            RG
        </label>
        <input type="text" id="representative_rg" name="representative_rg"
               class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
               required>
    </div>

    <div class="mb-4">
        <label for="representative_birthDate" class="block text-sm font-medium text-gray-700 mb-1">
            Data de nascimento
        </label>
        <input type="date" id="representative_birthDate" name="representative_birthDate"
               class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
               required>
    </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="mb-4">
        <label for="representative_gender" class="block text-sm font-medium text-gray-700 mb-1">
            Sexo
        </label>
        <select id="representative_gender" name="representative_gender"
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required>
            <option value="">Selecione</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
        </select>
    </div>

    <div class="mb-4">
        <label for="representative_cpf" class="block text-sm font-medium text-gray-700 mb-1">
            CPF
        </label>
        <input type="text" id="representative_cpf" name="representative_cpf"
               class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
               placeholder="000.000.000-00" maxlength="14" required>
    </div>

    <div class="mb-4">
        <label for="representative_phone" class="block text-sm font-medium text-gray-700 mb-1">
            Telefone para contato
        </label>
        <input type="text" id="representative_phone" name="representative_phone"
               class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
               placeholder="(00) 00000-0000" maxlength="15" required>
    </div>
</div>