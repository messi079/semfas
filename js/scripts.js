jQuery(document).ready(function($) {
    // Mask inputs
    function maskCPF(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
            .substring(0, 14);
    }

    function maskPhone(value) {
        const numericValue = value.replace(/\D/g, '');
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
    }

    // Apply masks to inputs
    $('input[name$="_cpf"]').on('input', function() {
        $(this).val(maskCPF($(this).val()));
    });

    $('input[name$="_phone"]').on('input', function() {
        $(this).val(maskPhone($(this).val()));
    });

    // Handle "use beneficiary data" checkbox
    $('#use-beneficiary-data').on('change', function() {
        const isChecked = $(this).prop('checked');
        const representativeFields = $('#representative-fields');
        
        if (isChecked) {
            // Copy beneficiary data to representative fields
            const fields = ['fullName', 'filiation', 'cpf', 'phone', 'address', 'email', 'bloodType', 'rg', 'birthDate', 'gender'];
            
            fields.forEach(field => {
                $(`#representative_${field}`).val($(`#beneficiary_${field}`).val()).prop('disabled', true);
            });
        } else {
            // Clear and enable representative fields
            $('#representative-fields input, #representative-fields select').val('').prop('disabled', false);
        }
    });

    // Form submission
    $('#ciptea-form').on('submit', function(e) {
        e.preventDefault();
        
        if (!$('#lgpd-consent').prop('checked')) {
            alert('É necessário aceitar os termos de processamento de dados.');
            return;
        }
        
        const formData = new FormData(this);
        formData.append('action', 'ciptea_submit_form');
        formData.append('nonce', ciptea_ajax.nonce);
        
        $.ajax({
            url: ciptea_ajax.ajax_url,
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                if (response.success) {
                    alert(`Solicitação enviada com sucesso!\nProtocolo: ${response.data.protocol}`);
                    window.location.reload();
                } else {
                    alert('Erro ao enviar solicitação. Por favor, tente novamente.');
                }
            },
            error: function() {
                alert('Erro ao enviar solicitação. Por favor, tente novamente.');
            }
        });
    });

    // Consultation form submission
    $('#ciptea-consultation-form').on('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        formData.append('action', 'ciptea_consultation');
        formData.append('nonce', ciptea_ajax.nonce);
        
        $.ajax({
            url: ciptea_ajax.ajax_url,
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                const resultDiv = $('#consultation-result');
                
                if (response.success) {
                    const data = response.data;
                    resultDiv.html(`
                        <div class="bg-white rounded-lg shadow-md p-6">
                            <h2 class="text-xl font-semibold text-gray-800 mb-4">Resultado da Consulta</h2>
                            <div class="space-y-3">
                                <div>
                                    <span class="font-medium text-gray-700">Status:</span>
                                    <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                        data.status === 'Em análise' ? 'bg-yellow-100 text-yellow-800' : 
                                        data.status === 'Aprovado' ? 'bg-green-100 text-green-800' : 
                                        'bg-red-100 text-red-800'
                                    }">
                                        ${data.status}
                                    </span>
                                </div>
                                <p><span class="font-medium text-gray-700">Beneficiário:</span> ${data.beneficiary}</p>
                                <p><span class="font-medium text-gray-700">Data da Solicitação:</span> ${data.date}</p>
                            </div>
                        </div>
                    `);
                } else {
                    resultDiv.html(`
                        <div class="bg-red-50 border border-red-200 rounded-lg p-4">
                            <div class="flex">
                                <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                                </svg>
                                <div class="ml-3">
                                    <h3 class="text-sm font-medium text-red-800">Protocolo não encontrado</h3>
                                    <p class="mt-2 text-sm text-red-700">Verifique o número do protocolo e tente novamente.</p>
                                </div>
                            </div>
                        </div>
                    `);
                }
                
                resultDiv.removeClass('hidden');
            },
            error: function() {
                alert('Erro ao realizar consulta. Por favor, tente novamente.');
            }
        });
    });
});