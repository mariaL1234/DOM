const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operacaoSelect = document.getElementById('operacao');
const calcularButton = document.getElementById('calcular');
const resultadoParagraph = document.getElementById('resultado');

calcularButton.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operacao = operacaoSelect.value;

    // Validação básica
    if (isNaN(num1) || isNaN(num2)) {
        resultadoParagraph.textContent = 'Por favor, insira apenas números.';
        return;
    }

    // Realiza a operação
    let resultado;
    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultado = 'Divisão por zero não é permitida.';
            } else {
                resultado = num1 / num2;
            }
            break;
    }

    resultadoParagraph.textContent = `Resultado: ${resultado}`;
});