let tipo = prompt("Qual associação deseja calcular?\n(S) para Série\n(P) para Paralelo").toUpperCase();
let qtd = parseInt(prompt("Quantos resistores existem no circuito? "));

let resultado = 0;
let somaInversos = 0;

if (tipo === "S") {
    for (let cont = 1; cont <= qtd; cont++) {
        let r = parseFloat(prompt("Digite o valor do Resistor " + cont + " (ohm): "));
    resultado += r;
 }
    alert("O valor do circuito em Série é: " + resultado + " ohm");

}
else if (tipo === "P"){
    for(let cont = 1; cont <= qtd; cont++){
        let r = parseFloat(prompt("Digite o valor do Resisto " + cont + " (ohm): "));
        somaInversos += (1 / r);
    }
    resultado = 1 / somaInversos
    alert("O valor do circuito em Paralelo é: " + resultado.toFixed(2) + " ohm")
}
else {
    alert("Opcao inválida. Reinicie e digite S ou P");
}