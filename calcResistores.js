const cores = {
    "preto":    { v: 0, m: 1,          t: "20%" },
    "marrom":   { v: 1, m: 10,         t: "1%" },
    "vermelho": { v: 2, m: 100,        t: "2%" },
    "laranja":  { v: 3, m: 1000,       t: "3%" },
    "amarelo":  { v: 4, m: 10000,      t: "4%" },
    "verde":    { v: 5, m: 100000,     t: "0.5%" },
    "azul":     { v: 6, m: 1000000,    t: "0.25%" },
    "violeta":  { v: 7, m: 10000000,   t: "0.1%" },
    "cinza":    { v: 8, m: 100000000,  t: "0.05%" },
    "branco":   { v: 9, m: 1000000000, t: "10%" },
    "ouro":     { v: 0, m: 0.1,        t: "5%" },
    "prata":    { v: 0, m: 0.01,       t: "10%" }

};

function pegarDados(msg) {
    let escolha = prompt(msg).toLocaleLowerCase();

    let dadosDaCor = cores[escolha];
    if(dadosDaCor) {
        return dadosDaCor;
    }
    else {
        return { v: 0, m: 1, t: "0%"};
    }
}

let num = parseInt(prompt("O resistor tem 4 ou 5 faixas?"));

if(num != 4 && num != 5){
    alert("As faixas não podem ser diferentes de 4 ou 5. Retorne e Digite novamente!");
}

let c1 = pegarDados("Cor da 1a faixa: ");
let c2 = pegarDados("Cor da 2a faixa: ");
let valorBase, multiplicador, tolerancia;

if(num === 4){
    
    valorBase = (c1.v * 10) + c2.v;
    multiplicador = pegarDados("Cor da 3a faixa (Multiplicador): ").m;
    tolerancia = pegarDados("Cor da 4a faixa (Tolerância): ").t

}else {
    let c3 = pegarDados("Cor da 3a faixa (Terceiro Dígito): ");
    valorBase = (c1.v * 100) + (c2.v * 10) + c3.v;
    multiplicador = pegarDados("Cor da 4a faixa (Multiplicador): ").m;
    tolerancia = pegarDados("Cor da 5a faixa (Tolerância): ").t;
}

let ohms = valorBase * multiplicador;

let resultadoFormatado;
if (ohms >= 1000000) {
    resultadoFormatado = (ohms / 1000000) + "Mohms";
}else if (ohms >= 1000){
    resultadoFormatado = (ohms / 1000) + "Kohms";
}else {
    resultadoFormatado = ohms + " Ohms";
}

alert("Resistor: " + resultadoFormatado + " +- " + tolerancia);