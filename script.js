function calcularIMC() {
// Captura os valores de peso e altura
const peso = parseFloat(document.getElementById('peso').value);
const altura = parseFloat(document.getElementById('altura').value);

// Verifica se os valores são válidos
if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
alert('Por favor, insira valores válidos para peso e altura.');
return;
}

// Calcula o IMC (peso / altura^2)
const imc = peso / (altura * altura);

// Classificação do IMC
let classificacao = '';
if (imc < 18.5) {
classificacao = 'Abaixo do peso';
} else if (imc >= 18.5 && imc <= 24.9) {
classificacao = 'Peso normal';
} else if (imc >= 25 && imc <= 29.9) {
classificacao = 'Sobrepeso';
} else if (imc >= 30) {
classificacao = 'Obesidade';
}

// Exibe o resultado
document.getElementById('resultado').innerHTML = `
Seu IMC é: ${imc.toFixed(2)} <br>
Classificação: ${classificacao}
`;
}