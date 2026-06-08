// Seleciona o botão de calcular e adiciona o evento de clique (addEventListener)
document.getElementById("btnCalcular").addEventListener("click", function() {
    
    // Captura os valores digitados nos inputs e converte para números decimais
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacao = document.getElementById("operacao").value;
    const boxResultado = document.getElementById("resultado");

    // Validação: Verifica se o usuário preencheu ambos os campos
    if (isNaN(num1) || isNaN(num2)) {
        boxResultado.style.display = "block";
        boxResultado.style.backgroundColor = "#fce8e6";
        boxResultado.style.color = "#c5221f";
        boxResultado.textContent = "Aviso: Preencha os dois campos!";
        return;
    }

    let resultadoFinal = 0;

    // Estrutura de decisão (switch) para definir qual conta executar
    switch (operacao) {
        case "soma":
            resultadoFinal = num1 + num2;
            break;
        case "subtracao":
            resultadoFinal = num1 - num2;
            break;
        case "multiplicacao":
            resultadoFinal = num1 * num2;
            break;
        case "divisao":
            // Validação de segurança: impede a divisão por zero
            if (num2 === 0) {
                boxResultado.style.display = "block";
                boxResultado.style.backgroundColor = "#fce8e6";
                boxResultado.style.color = "#c5221f";
                boxResultado.textContent = "Erro: Divisão por zero não permitida!";
                return;
            }
            resultadoFinal = num1 / num2;
            break;
    }

    // Exibe o resultado de forma dinâmica manipulando o DOM (textContent)
    boxResultado.style.display = "block";
    boxResultado.style.backgroundColor = "#e6f4ea";
    boxResultado.style.color = "#137333";
    boxResultado.textContent = `Resultado = ${resultadoFinal}`;
});
