const btn = document.getElementById("botaoMenu")
const menu = document.getElementById("menu")
//Adicionar um Event Listener

btn.addEventListener("click", () => {
    //alert("Abir Menu")
    menu.classList.toggle("hidden")
})