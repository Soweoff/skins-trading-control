document.addEventListener("DOMContentLoaded", function () {
    // Faz a solicitação HTTP para obter os dados das cápsulas
    fetch('http://localhost:3000/capsules')
        .then(response => response.json())
        .then(data => {
            // Função para exibir os dados das cápsulas
            function displayCapsules() {
                const capsulesContainer = document.getElementById('capsules-container');
                data.forEach(capsule => {
                    capsulesContainer.innerHTML += `
                        <div class="max-w-xs sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
                            <div class="bg-gray-500 rounded overflow-hidden shadow-lg">
                                <img src="${capsule.imagem}" alt="${capsule.nome}" class="w-full">
                                <div class="px-6 py-4">
                                    <div class="font-bold text-white text-xl mb-2 truncate">${capsule.nome}</div>
                                    <p class="text-white text-base font-semibold">Preço: R$${capsule.price}</p>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }

            // Chama a função para exibir os dados das cápsulas
            displayCapsules();
        })
        .catch(error => console.error('Erro ao obter os dados das cápsulas:', error));
});