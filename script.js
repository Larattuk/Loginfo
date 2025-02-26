document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Забороняє перезавантаження сторінки

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Laratt" && password === "04021980") {
        alert("Ласкаво просимо, Laratt!");
    } else {
        alert("Невірний логін або пароль!");
    }
});
