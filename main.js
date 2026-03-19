function addGoal() {
    const input = document.getElementById('goalInput');
    const goalText = input.value;

    if (goalText === '') {
        alert("Por favor, digite um objetivo!");
        return;
    }

    const ul = document.getElementById('goalList');
    
    // Criar o item da lista
    const li = document.createElement('li');
    
    li.innerHTML = `
        <span>${goalText}</span>
        <button onclick="removeGoal(this)" style="background:#ff4757; padding: 5px 10px;">Excluir</button>
    `;

    // Evento para marcar como concluído
    li.addEventListener('click', function(e) {
        if(e.target.tagName !== 'BUTTON') {
            this.classList.toggle('done');
        }
    });

    ul.appendChild(li);
    input.value = ""; // Limpa o campo
}

function removeGoal(button) {
    button.parentElement.remove();
}