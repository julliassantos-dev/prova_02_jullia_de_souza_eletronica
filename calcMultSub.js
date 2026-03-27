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
     case 2: prefixo = "Mega"; simbolo = "M"; fator = 100000; break;
     case 3: prefixo = "Kilo"; simbolo = "k"; fator = 1000; break;
     case 4: prefixo = "mili"; simbolo = "m"; fator = 1000; break;
     case 5: prefixo = "micro"; simbolo = "u"; fator = 100000; break;
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
          "De unidade principal para " + prefixo + ": " + resultadoConversao + " " + simbolo + unidade + "\n");

 }