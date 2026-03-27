let escolha = prompt("O que você deseja calcular?\n(V) para Tensão\n(I) para Corrente\n(R) para Resistência").toUpperCase();
let v, r, i;

if(escolha == "V") {
     r = parseFloat(prompt("Digite o valor da Resistência (ohm): "));
     i = parseFloat(prompt("Digite o valor da Corrente (A): "));
     let resultado = r * i;
     alert("A Tensão calculada é: " + resultado.toFixed(2) + "V");
}

else if (escolha == "I"){

    v = parseFloat(prompt("Digite o valor da Tensão (V): "));
    r = parseFloat(prompt("Digite o valor da Resistência (Ohm): "));
    let resultado = v / r;
    alert("A Corrente calculada é: "+ resultado.toFixed(2) + "A")
}

else if(escolha == "R"){
    v = parseFloat(prompt("Digite o valor da Tensão (V): "));
    i = parseFloat(prompt("Digite o valor da Resistência (I): "));
    let resultado = v / i;
    alert("A Corrente calculada é: "+ resultado.toFixed(2) + "Ohm");
}
else {
    alert("Opção inválida! Digite V, I ou R.");
}