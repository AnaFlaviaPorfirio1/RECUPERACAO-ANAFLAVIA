// Obtém o elemento do botão e adiciona um "ouvinte" para o evento de clique
document.getElementById('calcular').addEventListener('click', calcularIMC);

function calcularIMC() {
    // 1. Pegar os valores digitados pelo usuário e converter para número
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Obtém os elementos de resultado
    const valorIMCElem = document.getElementById('valor-imc');
    const classificacaoElem = document.getElementById('classificacao');
    
    // Validação de entrada: Verifica se os valores são válidos e positivos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        valorIMCElem.textContent = 'Erro';
        classificacaoElem.textContent = 'Insira Peso e Altura válidos.';
        classificacaoElem.style.color = '#dc3545'; // Vermelho para erro
        return;
    }

// 2. Cálculo do IMC: IMC = peso / (altura * altura)
const imc = peso / (altura * altura);~

// Formata o IMC para duas casas decimais
const imcFormato = imc.toFixed(2);

let classificacao = '';
let corClassificacao = '';

// 3. Exibir a classificacao e definir a cor 
if (imc < 18.5) {
    classificacao = 'Abaixo do peso';
    corClassificacao = '#ffc107'; // Amarelo
} else if (imc < 25) { // 18.5 a 24.9
    classificacao = 'Peso normal'; 
    corClassificacao = '#28a745'; // Verde (Ótimo)
} else if (imc < 25) { // 25 a 29.9}
classificacao = 'Sobrepeso';
corClassificacao = '#ffc107'; Amarelo
} else { // 30 ou mais
    classificacao = 'Obesidade';
    corClassificacao = '#dc3545'; // Vermelho (Alerta)
}

// 4. Mostrar o resultado na tela
valorIMCElem.textContent = imcFormato;
classificacaoElem.textContent = classificacao;
classificacaoElem.style.color = corClassificacao; // Aplica a cor da classificação
