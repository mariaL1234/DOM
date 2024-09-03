const botao = document.getElementById('botao');
const texto = document.getElementById('texto');
const resultado = document.getElementById('resultado');

botao.addEventListener('click', () => {
    const valorDigitado = texto.value;
    resultado.textContent = `Você digitou: ${valorDigitado}`;
});