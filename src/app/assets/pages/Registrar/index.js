function submitForm() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const passwordConfirmInput = document.getElementById("passwordConfirm");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmError = document.getElementById("confirmError");

    // Reset custom validity
    nameInput.setCustomValidity("");
    emailInput.setCustomValidity("");
    passwordInput.setCustomValidity("");
    passwordConfirmInput.setCustomValidity("");

    // Add your own validation rules here

    if (!nameInput.value || !emailInput.value || !passwordInput.value || !passwordConfirmInput.value) {
        if (!nameInput.value) {
            nameInput.setCustomValidity("Campo obrigatório");
            nameError.textContent = "Nome inválido";
            nameError.classList.remove("hidden");
        }

        if (!emailInput.value) {
            emailInput.setCustomValidity("Campo obrigatório");
            emailError.textContent = "E-mail inválido";
            emailError.classList.remove("hidden");
        }

        if (!passwordInput.value) {
            passwordInput.setCustomValidity("Campo obrigatório");
            passwordError.textContent = "Senha inválida";
            passwordError.classList.remove("hidden");
        }

        if (!passwordConfirmInput.value) {
            passwordConfirmInput.setCustomValidity("Campo obrigatório");
            confirmError.textContent = "Confirmação de Senha inválida";
            confirmError.classList.remove("hidden");
        }

        return false;
    }

    // Your existing validation logic goes here

    if (nameInput.checkValidity() && emailInput.checkValidity() && passwordInput.checkValidity() && passwordConfirmInput.checkValidity()) {
        // Continue with your registration logic here
        // ...

        // Recuperar usuários armazenados no localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Verificar se o usuário já existe
        const userExists = users.some(u => u.email === emailInput.value);

        if (userExists) {
            alert("Este e-mail já está registrado. Escolha outro e-mail.");
        } else {
            // Adicionar novo usuário
            users.push({ name: nameInput.value, email: emailInput.value, password: passwordInput.value });
            localStorage.setItem("users", JSON.stringify(users));
            alert("Cadastro realizado com sucesso!");
            // Redirect to the dashboard or perform other actions after registration
            redirectToDashboard();
        }
    }

    // Return false to prevent form submission if there are errors
    return false;
}

function redirectToDashboard() {
    // Redirect to the page after registration
    window.location.href = "/src/app/assets/pages/logar/logar.html";
}