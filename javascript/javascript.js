document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    // Referencia a los elementos de la modal
    const successModal = document.getElementById("successModal");
    const closeModalButton = document.getElementById("closeModalButton");

    function showError(input, message) {
        clearError(input);
        const errorDisplay = document.createElement("span");
        errorDisplay.className = "error-message";
        errorDisplay.style.color = "red";
        errorDisplay.style.display = "block";
        errorDisplay.textContent = message;
        input.parentNode.insertBefore(errorDisplay, input.nextSibling);
    }

    function clearError(input) {
        const errorDisplay = input.parentNode.querySelector(".error-message");
        if (errorDisplay) {
            errorDisplay.remove();
        }
    }

    function validateName() {
        const nameValue = nameInput.value.trim();
        const nameRegex = /^[A-Za-z\s]+$/;
        if (nameValue === "") {
            showError(nameInput, "Por favor ingresa tu nombre.");
            return false;
        } else if (!nameRegex.test(nameValue)) {
            showError(nameInput, "El nombre solo debe contener letras.");
            return false;
        } else {
            clearError(nameInput);
            return true;
        }
    }

    function validateEmail() {
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailValue === "") {
            showError(emailInput, "Por favor ingresa tu correo electrónico.");
            return false;
        } else if (!emailRegex.test(emailValue)) {
            showError(emailInput, "Por favor ingresa un correo electrónico válido.");
            return false;
        } else {
            clearError(emailInput);
            return true;
        }
    }

    function validateMessage() {
        const messageValue = messageInput.value.trim();
        if (messageValue === "") {
            showError(messageInput, "Por favor ingresa un mensaje.");
            return false;
        } else {
            clearError(messageInput);
            return true;
        }
    }

    // Muestra la modal de éxito
    function showSuccessModal() {
        successModal.style.display = "flex"; // Muestra la modal
    }

    // Cierra la modal y resetea el formulario
    closeModalButton.addEventListener("click", function () {
        successModal.style.display = "none"; // Oculta la modal
        form.reset(); // Limpia el formulario
    });

    // Validar todo el formulario al enviar
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();

        if (isNameValid && isEmailValid && isMessageValid) {
            showSuccessModal(); // Muestra la modal si todo es válido
        }
    });

    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    messageInput.addEventListener("input", validateMessage);
});