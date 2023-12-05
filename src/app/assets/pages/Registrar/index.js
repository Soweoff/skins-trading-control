function redirectToDashboard() {
    // Redirecionar para a página desejada após o login
    window.location.href = "/src/app/assets/pages/Login/Logar.html";
}
function submit() {
    if (validateForm()) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Recuperar usuários armazenados no localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Verificar se o usuário já existe
        const userExists = users.some(u => u.email === email);

        if (userExists) {
            alert("Este e-mail já está registrado. Escolha outro e-mail.");
        } else {
            // Adicionar novo usuário
            users.push({ name, email, password });
            localStorage.setItem("users", JSON.stringify(users));
            alert("Cadastro realizado com sucesso!");
            redirectToDashboard();
        }
    }
}

function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const passwordConfirm = document.getElementById("passwordConfirm");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const passwordConfError = document.getElementById("confirmError");

    if (!name.value || !email.value || !password.value || !passwordConfirm.value) {
        if (!name.value) {
            name.classList.remove("border-gray-300");
            name.classList.add("border-red-500");
            nameError.classList.remove("hidden");
        }

        if (!email.value) {
            email.classList.remove("border-gray-300");
            email.classList.add("border-red-500");
            emailError.classList.remove("hidden");
        }

        if (!password.value) {
            password.classList.remove("border-gray-300");
            password.classList.add("border-red-500");
            passwordError.classList.remove("hidden");
        }

        if (!passwordConfirm.value) {
            passwordConfirm.classList.remove("border-gray-300");
            passwordConfirm.classList.add("border-red-500");
            passwordConfError.classList.remove("hidden");
        }

        return false;
    }

    if (name.value) {
        name.classList.add("border-gray-300");
        name.classList.remove("border-red-500");
        nameError.classList.add("hidden");
    }

    if (email.value) {
        email.classList.add("border-gray-300");
        email.classList.remove("border-red-500");
        emailError.classList.add("hidden");
    }

    if (password.value) {
        password.classList.add("border-gray-300");
        password.classList.remove("border-red-500");
        passwordError.classList.add("hidden");
    }

    if (passwordConfirm.value) {
        passwordConfirm.classList.add("border-gray-300");
        passwordConfirm.classList.remove("border-red-500");
        passwordConfError.classList.add("hidden");
    }

    return name.value && email.value && password.value && passwordConfirm.value;
}
