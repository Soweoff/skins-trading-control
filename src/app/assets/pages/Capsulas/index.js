 // Função assíncrona para buscar dados JSON
 async function fetchCapsules() {
    try {
        const response = await fetch('/db/db.json');
        const data = await response.json();
        return data.itens_CS.capsules;
    } catch (error) {
        console.error('Erro ao buscar cápsulas:', error);
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

// Função para adicionar cápsulas à seção correspondente
async function addCapsules() {
    const capsulesData = await fetchCapsules();
    const capsulesSection = document.getElementById("capsulesSection");

    capsulesData.forEach(capsule => {
        const card = createCard(capsule);
        capsulesSection.appendChild(card);
    });
}

// Carregar cápsulas quando a página carregar
window.onload = async function () {
    await addCapsules();
};