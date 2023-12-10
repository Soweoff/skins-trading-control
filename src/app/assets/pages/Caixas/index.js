$(document).ready(function () {
    // Faz a solicitação HTTP para obter os dados dos casos
    $.ajax({
        url: 'http://localhost:3000/cases',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            // Função para exibir os dados dos casos
            function displayCases() {
                const casesContainer = $('#cases-container');
                data.forEach(caseItem => {
                    casesContainer.append(`
                        <div class="max-w-xs  sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
                            <div class="bg-gray-500 rounded overflow-hidden shadow-lg">
                                <img src="${caseItem.imagem}" alt="${caseItem.nome}" class="w-full">
                                <div class="px-6 py-4">
                                    <div class="font-bold text-white text-xl mb-2 truncate">${caseItem.nome}</div>
                                    <p class="text-white text-base font-semibold">Preço: R$${caseItem.price}</p>
                                </div>
                            </div>
                        </div>
                    `);
                });
            }

            // Chama a função para exibir os dados dos casos
            displayCases();
        },
        error: function (error) {
            console.error('Erro ao obter os dados dos casos:', error);
        }
    });
});