let currentStep = 1;

// Função para verificar o nome
function checkName() {
    const name = document.getElementById("name").value.trim().toLowerCase();
    const allowedNames = ["jhu", "jhuly", "jhulyanne"];
    const messages = document.getElementById("messages");

    if (allowedNames.includes(name)) {
        messages.textContent = "";
        goToStep(2);
    } else {
        messages.textContent = "Se não for minha Jhu, Jhuly, nem quero saber!";
    }
}

// Função para verificar a cor da pele
function checkSkinColor(selectedColor) {
    const messages = document.getElementById("messages");

    if (selectedColor === "morena") {
        messages.textContent = "";
        goToStep(3);
    } else {
        messages.textContent = "Apenas a minha morena pode passar!";
    }
}

// Função para verificar se ela ama o Diego
function checkLove(answer) {
    const messages = document.getElementById("messages");

    if (answer === "sim") {
        messages.textContent = "";
        updateTitle();
        showProposal();
    } else {
        messages.textContent = "Não me ama? Então deixa pra lá.";
    }
}

// Atualizar o título do quiz
function updateTitle() {
    const quizTitle = document.getElementById("quiz-title");
    quizTitle.textContent = "Eu também amo você ❤️";
}

// Mostrar pedido de namoro
function showProposal() {
    document.getElementById("questionnaire").style.display = "none";
    document.getElementById("proposal").style.display = "block";
}

// Aceitar proposta
function acceptProposal() {
    document.getElementById("proposal").style.display = "none";
    document.getElementById("final-message").style.display = "block";
}

// Rejeitar proposta
function rejectProposal() {
    const noButton = document.getElementById("noButton");

    // Gera posições aleatórias dentro da tela
    const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);

    // Define a nova posição do botão
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Ir para o próximo passo
function goToStep(step) {
    document.getElementById(`step-${currentStep}`).style.display = "none";
    document.getElementById(`step-${step}`).style.display = "block";
    currentStep = step;
}
