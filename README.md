# prova_02_jullia_de_souza_eletronica
prova 02 - calculadora elétrica

# ⚡ EletronTech — Calculadora Elétrica Completa

[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)
![JS Version](https://img.shields.io/badge/JavaScript-ES6-yellow)

Uma aplicação web interativa desenvolvida para facilitar cálculos fundamentais de engenharia elétrica e eletrônica. O projeto combina uma interface moderna (Dark Mode) com uma lógica robusta para resolução de problemas do dia a dia.

---

## 🎨 Interface e Design
O projeto conta com um layout responsivo, utilizando **Dark Theme** com detalhes em roxo neon, efeitos de *hover* e transições suaves para uma melhor experiência do usuário (UX).

---

## 🚀 Funcionalidades Principais

A calculadora está dividida em módulos especializados, acessíveis por botões interativos:

### 1. Lei de Ohm ($V = R \cdot I$)
Permite calcular qualquer uma das três grandezas fundamentais:
* **Tensão ($V$):** Em Volts.
* **Corrente ($I$):** Em Ampères.
* **Resistência ($R$):** Em Ohms ($\Omega$).

### 2. Resistência Equivalente ($R_{eq}$)
Cálculo para associações complexas de $n$ resistores:
| Tipo | Lógica Matemática | Resultado |
| :--- | :--- | :--- |
| **Série** | $R_{eq} = R_1 + R_2 + ...$ | Soma linear dos valores. |
| **Paralelo** | $1/R_{eq} = 1/R_1 + 1/R_2 + ...$ | Inverso da soma dos inversos. |

### 3. Gestão de Consumo Energético
Gera um relatório detalhado baseado na potência dos equipamentos:
* Consumo diário em **kWh**.
* Custo financeiro diário e mensal estimado (baseado na taxa local).

### 4. Conversão de Unidades (Múltiplos e Submúltiplos)
Suporte para escalas técnicas de **Giga ($10^9$)** até **Pico ($10^{-12}$)**, facilitando a leitura de componentes minúsculos ou grandes potências.

### 5. Código de Cores de Resistores
Identificação de resistência para componentes de **4 ou 5 faixas**, incluindo o cálculo automático da tolerância.

---

## 🧪 Guia de Testes (Validação)

Para validar o funcionamento correto da lógica, utilize estes parâmetros:

| Módulo | Entrada Sugerida | Resultado Esperado |
| :--- | :--- | :--- |
| **Lei de Ohm** | Escolha `V`, R=`100`, I=`2` | `200.00V` |
| **Resistência Eq.** | Tipo `P`, Qtd=`2`, R1=`10`, R2=`10` | `5.00 ohm` |
| **Consumo** | Watts=`1000`, Horas=`2`, Taxa=`0.80` | Diário: `2kWh` / Mensal: `R$ 48.00` |
| **Conversão** | Valor=`1000`, Unidade=`V`, Opção=`3` (Kilo) | `1 kV` |

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica da aplicação.
* **CSS3:** Estilização avançada com Glassmorphism e responsividade.
* **JavaScript (ES6):** Lógica de processamento, tratamento de dados e interação via `prompt/alert`.

---

## 📁 Estrutura do Projeto

```bash
├── index.html   # Estrutura visual e estilos (CSS interno)
└── main.js      # Funções lógicas e processamento de dados