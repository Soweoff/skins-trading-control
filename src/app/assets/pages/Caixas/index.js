 // Função assíncrona para buscar dados JSON
 async function fetchCases() {
    try {
        const response = await fetch('/db/db.json');
        const data = await response.json();
        return data.itens_CS.cases;
    } catch (error) {
        console.error('Erro ao buscar caixas:', error);
    }
}

// Função para criar um elemento de cartão para um item
function createCard(item) {
    const card = document.createElement("div");
    card.classList.add("bg-gray-500", "p-4", "rounded-md", "text-center");

    const image = document.createElement("img");
    image.src = item.imagem;
    image.alt = item.nome;
    image.classList.add("mx-auto"); // Adiciona margem automática para centralizar horizontalmente

    const title = document.createElement("p");
    title.classList.add("text-sm", "text-gray-800", "font-semibold", "mt-2");
    title.textContent = item.nome;

    const price = document.createElement("p");
    price.classList.add("text-sm", "text-white", "mt-2");
    price.textContent = item.price ? `Preço: ${item.price}` : "Preço indisponível";

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(price);

    return card;
}

// Função para adicionar caixas à seção correspondente
async function addCases() {
    const casesData = await fetchCases();
    const casesSection = document.getElementById("casesSection");

    casesData.forEach(box => {
        const card = createCard(box);
        casesSection.appendChild(card);
    });
}

// Carregar caixas quando a página carregar
window.onload = async function () {
    await addCases();
};