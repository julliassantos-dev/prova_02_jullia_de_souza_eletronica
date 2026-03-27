//lei de ohm
function calcOhm(){
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
    i = parseFloat(prompt("Digite o valor da Corrente(A): "));
    let resultado = v / i;
    alert("A Resistência calculada é: "+ resultado.toFixed(2) + "Ohm");
}
else {
    alert("Opção inválida! Digite V, I ou R.");
}
    
}

//Req
function calcReq() {
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


}

//Consumo

function calcConsumo(){
    let kwh
    let consumoDiario, custoDiario, consumoNoMes, custoMensal;
    let potencia, horas
    
    let eletrodomestico = prompt("Digite qual é o eletro doméstico: ");
    let opcao = parseFloat(prompt("Escolha o modo de entrada:\n1: Watts (W)\n 0: já tenho em kWh"));
    let taxa = parseFloat(prompt("Digite o valor da taxa por kWh (ex: 0.75): "));
    
    if(opcao == 1){
    
        potencia = parseFloat(prompt("Digite a potência do eletro doméstico (W): "));
        horas = parseFloat(prompt("Quantas horas ele fica ligado por dia? "));
    
        kwh = potencia / 1000;
        consumoDiario = kwh * horas;
    }
    else if(opcao == 0){
    
        kwh = parseFloat(prompt("Digite o kWh do eletro doméstico: "));
        horas = parseFloat(prompt("Digite quantas horas o eletro doméstico fica ligado: "));
        consumoDiario = kwh * horas;
    
    }
    else {
        alert("Opção inválida! Reinicie e escolha 0 ou 1. ");
    }
    
    custoDiario = consumoDiario * taxa;
    consumoNoMes = consumoDiario * 30;
    custoMensal = consumoNoMes * taxa;
    
    alert("RELATÓRIO DE CONSUMO - " + eletrodomestico + "\n" + 
               "Consumo Diário: " + consumoDiario.toFixed(2) + "kWh\n" + 
               "Custo Diário: R$" + consumoDiario.toFixed(2) + "\n" + 
               "Consumo Mensal: "  + consumoNoMes.toFixed(2) + "\n" + 
               "Custo Mensal estimado: R$ " + custoMensal.toFixed(2));

}

//Multi e sub

function calcSubMulti () {
    let valor = parseFloat(prompt("Digite o valor númerico: "));
    let unidade = prompt("Escolha a unidiade (ex: A, ohm, W, V): ").toUpperCase();
    
    let menu = "Escolha a conversão: \n " + 
               "1: Giga (G)\n" + 
               "2: Mega (M)\n" + 
               "3: Kilo (k)\n" + 
               "4: mili (m)\n" + 
               "5: micro (u)\n" + 
               "6: nano (n)\n" + 
               "7: pico (p)";
    
     
     let opcao = parseInt(prompt(menu));
     let prefixo, fator, simbolo;
     
     switch(opcao){
         case 1: prefixo = "Giga"; simbolo = "G"; fator = 1000000000; break;
         case 2: prefixo = "Mega"; simbolo = "M"; fator = 1000000; break;
         case 3: prefixo = "Kilo"; simbolo = "k"; fator = 1000; break;
         case 4: prefixo = "mili"; simbolo = "m"; fator = 1000; break;
         case 5: prefixo = "micro"; simbolo = "u"; fator = 1000000; break;
         case 6: prefixo = "nano"; simbolo = "n"; fator = 1000000000; break;
         case 7: prefixo = "pico"; simbolo = "p"; fator = 1000000000000; break;
         default: alert("Opção inválida")
     }
    
     if (prefixo){
        let resultadoConversao;
    
        if(opcao <= 3) {
            resultadoConversao = valor / fator;
        }
        else if(opcao > 3 && opcao <= 7){
            resultadoConversao = valor * fator;
        }
    
        alert("-----Resultado------\n" + 
              "Da unidade principal para " + prefixo + " : " + resultadoConversao + " " + simbolo + unidade + "\n");
    
     }
}


//resistor
function calcResistor(){
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
        return;
    }
    
    let c1 = pegarDados("Cor da 1ª faixa: ");
    let c2 = pegarDados("Cor da 2ª faixa: ");
    let valorBase, multiplicador, tolerancia;
    
    if(num === 4){
        
        valorBase = (c1.v * 10) + c2.v;
        multiplicador = pegarDados("Cor da 3ª faixa (Multiplicador): ").m;
        tolerancia = pegarDados("Cor da 4ª faixa (Tolerância): ").t
    
    }else {
        let c3 = pegarDados("Cor da 3ª faixa (Terceiro Dígito): ");
        valorBase = (c1.v * 100) + (c2.v * 10) + c3.v;
        multiplicador = pegarDados("Cor da 4ª faixa (Multiplicador): ").m;
        tolerancia = pegarDados("Cor da 5ª faixa (Tolerância): ").t;
    }
    
    let ohms = valorBase * multiplicador;
    
    let resultadoFormatado;
    if (ohms >= 1000000) {
        resultadoFormatado = (ohms / 1000000) + "MΩ";
    }else if (ohms >= 1000){
        resultadoFormatado = (ohms / 1000) + "KΩ";
    }else {
        resultadoFormatado = ohms + " Ω";
    }
    
    alert("O Resultado do Resistor : " + resultadoFormatado + " ± " + tolerancia);
}

