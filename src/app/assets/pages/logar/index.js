function submitForm() {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const emailError = emailInput.nextElementSibling;
    const passwordError = passwordInput.nextElementSibling;

    // Reset custom validity
    emailInput.setCustomValidity("");
    passwordInput.setCustomValidity("");

    // Email validation using HTML5 pattern attribute
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailInput.value)) {
            emailInput.setCustomValidity("Email inválido");
            emailError.textContent = "Email inválido";
        }

        // Password validation (add your own rules)
        if (passwordInput.value.length < 8) {
            passwordInput.setCustomValidity("A senha deve ter pelo menos 8 caracteres");
            passwordError.textContent = "A senha deve ter pelo menos 8 caracteres";
        }

        if (emailInput.checkValidity() && passwordInput.checkValidity()) {
            // Retrieve users from localStorage
            const users = JSON.parse(localStorage.getItem("users")) || [];

            // Check if the user exists
            const user = users.find(u => u.email === emailInput.value && u.password === passwordInput.value);

            if (user) {
                alert("Login bem-sucedido!");
                // Redirect to the dashboard or perform other actions after login
                window.location.href = "/src/app/assets/pages/home/home.html";
            } else {
                alert("Usuário ou senha incorretos.");
            }
        }

        // Return false to prevent form submission if there are errors
        return false;
}