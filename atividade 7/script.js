document.getElementById("contatoForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let mensagem = document.getElementById("mensagem");

    let erroNome = document.getElementById("erroNome");
    let erroEmail = document.getElementById("erroEmail");
    let erroMensagem = document.getElementById("erroMensagem");

    let valido = true;

    // Limpar erros anteriores
    [nome, email, mensagem].forEach(el => el.classList.remove("erro-input"));
    [erroNome, erroEmail, erroMensagem].forEach(el => el.innerText = "");

    if (nome.value.trim() === "") {
        erroNome.innerText = "O nome é obrigatório.";
        nome.classList.add("erro-input");
        valido = false;
    }

    if (email.value.trim() === "") {
        erroEmail.innerText = "O e-mail é obrigatório.";
        email.classList.add("erro-input");
        valido = false;
    }

    if (mensagem.value.trim() === "") {
        erroMensagem.innerText = "A mensagem é obrigatória.";
        mensagem.classList.add("erro-input");
        valido = false;
    }

    if (valido) {
        alert("Formulário enviado com sucesso!");
        document.getElementById("contatoForm").reset();
    }
});