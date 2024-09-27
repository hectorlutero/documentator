# GPR Documentation

## Table of Contents

1. [Período de Ponto](#período-de-ponto)
2. [HEAD COUNT](#head-count)
3. [TURNOVER](#turnover)
4. [ABSENTEÍSMO](#absenteísmo)

## Período de Ponto

- Regra: Do dia 18 do mês anterior ao dia 17 do mês atual. (referente ao mês atual)

## HEAD COUNT

Tabela de informação para saber a situação dos funcionários:

- Chapa do funcionário
- Nome
- Situação (**ativo**, **aviso prévio**, **férias**, **demitido** e afastado (licenças e etc))
- CPF
- RG
- Cargo
- Seção
- Data de admissão
- Data de demissão

## TURNOVER

### Definição

É o cálculo de entrada e saída de funcionários

### Fórmula

((Quantidade admitida + quantidade demitida)/2) /quantidade da base

### Período de Cálculo

A visão do turnover é no mês fechado 01-30/mês atual

### Quantidade Admitida

#### Critérios de Inclusão

- Funcionários admitidos entre a data inicial e a data final do período selecionado

#### Critérios de Exclusão

- Funcionários admitidos nos motivos:
  - 03 - Transferência
  - 04 - Aumento de Quadro
  - 09 - Inauguração de Loja
- Funcionários registrados na seção "Alvo Serviços Financeiros"
- Funcionários registrados em seções específicas (lista completa no código original)
- Funcionários registrados como PCD's
- Funcionários registrados nos cargos de Aprendiz (códigos específicos no código original)

#### Deduções

- Quantidade de funcionários demitidos no código 05 - Transferência
- Quantidade de funcionários contratados para cargos novos (informado pelo Departamento Pessoal)

### Quantidade Demitida

#### Critérios de Inclusão

- Funcionários cuja data de demissão se encontra entre a data inicial e a data final do período selecionado

#### Critérios de Exclusão

- Funcionários demitidos nos motivos 03 - Redução de Quadro, 05 - Transferência ou 06 - Distrato de Estágio
- Funcionários registrados na seção "Alvo Serviços Financeiros"
- Funcionários registrados em seções específicas (lista completa no código original)
- Funcionários registrados como PCD's
- Funcionários registrados nos cargos de Aprendiz (códigos específicos no código original)

### Quantidade da Base

#### Critérios de Inclusão

- Quadro do último dia do mês anterior

#### Critérios de Exclusão

- Funcionários registrados na seção "Alvo Serviços Financeiros"
- Funcionários registrados em seções específicas (lista completa no código original)
- Funcionários registrados como PCD's
- Funcionários registrados nos cargos de Aprendiz (códigos específicos no código original)
- Funcionários afastados no fim do período base (critérios específicos no código original)

### Turnover Acumulado

Soma do turnover de cada um dos meses selecionados

### Valorização do Turnover

#### Custo Direto do Turnover

Eventos específicos da folha de pagamento multiplicados por modificadores

#### Custo Indireto de Admissão

Todas as admissões multiplicadas pela soma das despesas médias relacionadas ao processo de admissão

#### Custo Indireto de Demissão

Todas as demissões multiplicadas pela soma das despesas médias relacionadas ao processo de demissão

## ABSENTEÍSMO

### Definição

É o cálculo de horas contratadas versus horas realizadas

### Fórmula

Horas não Executadas / Horas Ideais Trabalhadas

### Período de Calculo

A visão do Absenteísmo é referente as datas do período de ponto, dia 18 do mês anterior até o dia 17 do mês atual

### Horas Ideais Trabalhadas

Horas de trabalho base do funcionário para o dia, possui dois modificadores:

- Quando o dia se refere a um feriado, porém o funcionário exerceu sua atividades, consideramos como hora ideal trabalhada o total de horas disponiveis. Porém, caso estas hotas ultrapassem um total de 08:00, consideramos como contratado este totaç de 08:00 e os demais consideramos como horas extras.
- Para os funcionários que não possuem uma hora base cadastrada no ponto, consideramos de segunda a sábado o horário padrão de cada cargo.

### Horas não Executadas

Composto pela soma de Faltas, Atestados, Abonos, Atrasos e Afastamentos

#### Faltas

Composto pela diferença entre as horas trabalhadas e a hora base cadastradas no ponto, desde que esteja registrado como falta, não possua nenhum código de abono para o dia e não esteja marcado como banco de horas.

#### Atestados

Composto pela diferença entre as horas trabalhadas e a hora base cadastrada no ponto, desde que esteja registrado como atestado (código de abono 0001) e não esteja marcado como banco de horas.

#### Abonos

Composto pela diferença entre as horas trabalhadas e a hora base cadastrada no ponto, desde que não esteja registrado como atestado (código de abono 0001, 0028) e não marcado como banco de horas.

#### Atrasos

Composto pela diferença entre o atraso e a hora extra praticada no dia, desde que não esteja marcado como banco de horas. Este resultado assume apenas valores positivos, caso a quantidade de horas extras do dia sejam maior que a quantidade de atraso, o valor será igual a 0.

#### Afastamentos

Composto pela soma das horas abonadas por afastamento pelos motivos de aposentadoria por invalidez, carcere, recisão Indireta (prcesso trabalhista),
Afastamento INSS Doença, Afatamentos INSS Acidentede de Trabalho e Contrato Suspenso. Vale aqui destacar que estas hotas não estão presentes no ponto, para adicionar a informação consideramos como abonada a carga horária cadastrada para o cargo do funcionário de segunda a sábado.

### Informações que não fazem parte do cálculo do absenteísmo

#### Horas Disponíveis sem Horas Extras

Composto pela soma das horas trabalhadas (conforme ponto) deduzido das horas extras calculadas.

#### Atrasos Banco de Horas

Composto pela diferença entre o atraso e a hora extra praticada no dia, desde que esteja marcado como banco de horas. Este resultado assume apenas valores positivos, caso a quantidade de horas extras no dia sejam maior do que a quantidade de atraso, o valor será igual a 0.

#### Horas Extras

Composto pela diferença entre o atraso e a hora extra praticada no dia, desde que não esteja marcado como banco de horas. Este resultado assume apenas valores positivos, caso a quantidade de horas extras do dia seja menor do que a quantidade de atraso, o valor será igual a 0.

#### Horas Extras Banco de Horas

Composto pela diferença entre o atraso e a hora extra praticada no dia, desde que esteja marcado como banco de horas. Este resultado assume apenas valores positivos, caso a quantidade de horas extras do dia sejam menor do que a quantidade de atraso, o valor será igual a 0.
