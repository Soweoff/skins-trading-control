function redirectToDashboard() {
    // Redirecionar para a página desejada após o login
    window.location.href = "/src/index6.html";
}


function submit() {
    if (validateForm()) {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Recuperar usuários armazenados no localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Verificar se o usuário existe
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            alert("Login bem-sucedido!");
            // Redirecionar ou executar outras ações após o login
            redirectToDashboard();
        } else {
            alert("Usuário ou senha incorretos.");
        }
    }
}

function validateForm() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    if (!email.value || !password.value) {
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

        return false;
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

    return email.value && password.value;
}
