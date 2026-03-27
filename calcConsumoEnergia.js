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
consumoNoMes = custoDiario * 30;
custoMensal = consumoNoMes * taxa;

alert("RELATÓRIO DE CONSUMO - " + eletrodomestico + "\n" + 
           "Consumo Diário: " + consumoDiario.toFixed(2) + "kWh\n" + 
           "Custo Diário: R$" + consumoDiario.toFixed(2) + "\n" + 
           "Consumo Mensal: "  + consumoNoMes.toFixed(2) + "\n" + 
           "Custo Mensal estimado: R$ " + custoMensal.toFixed(2));