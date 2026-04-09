# HemoGuard UFSC

UNIVERSIDADE FEDERAL DE SANTA CATARINA  
CENTRO DE CIENCIAS DA SAUDE  
PROGRAMA DE POS-GRADUACAO EM INFORMATICA EM SAUDE

## Projeto de Mestrado

**DESENVOLVIMENTO E AVALIACAO DE UM APLICATIVO MOVEL BASEADO EM INTELIGENCIA ARTIFICIAL PARA PREDICAO DE INSTABILIDADE HEMODINAMICA EM PACIENTES SUBMETIDOS A HEMODIALISE**

**Linha de Pesquisa 1:** Tecnologia da Informacao e Comunicacao em Saude / eSaude  
**Local e ano:** Florianopolis, 2026

## Introducao

A Doenca Renal Cronica (DRC) e um problema relevante de saude publica. Em estagios avancados, a hemodialise e essencial, mas pode apresentar complicacoes intradialiticas frequentes, especialmente hipotensao.  
Este projeto propoe uma abordagem preditiva baseada em Inteligencia Artificial para antecipar instabilidade hemodinamica durante as sessoes, apoiando a tomada de decisao clinica e a seguranca do paciente no contexto assistencial.

## Objetivo geral

Desenvolver um aplicativo movel com IA para predicao precoce de instabilidade hemodinamica em sessoes de hemodialise.

## Objetivos especificos

- Desenvolver e validar modelo preditivo com variaveis clinicas (pressao arterial, frequencia cardiaca, ultrafiltracao, ganho interdialitico e peso seco).
- Integrar o modelo a uma interface clinica com alertas estratificados (preventivo e critico).
- Avaliar desempenho com metricas como acuracia, sensibilidade, especificidade, AUC-ROC e taxa de falsos positivos.
- Avaliar usabilidade e aplicabilidade clinica da ferramenta em ambiente real ou simulado.
- Analisar viabilidade tecnica e operacional no servico de nefrologia.

## Metodologia (resumo)

- **Fase 1 - Retrospectiva:** treinamento e validacao com dados historicos anonimizados.
- **Fase 2 - Piloto prospectivo:** uso assistido do app com equipe multiprofissional.
- Algoritmos candidatos: Random Forest, SVM e LSTM.
- Arquitetura prevista: microsservicos, API segura (HTTPS/SSL), interoperabilidade com HL7 FHIR.
- Dados oriundos do prontuario eletronico institucional (Tasy), com anonimização conforme LGPD.

## Resultados esperados

- Predicao antecipada de risco de instabilidade hemodinamica.
- Apoio a intervencoes preventivas durante a sessao.
- Reducao de eventos adversos e melhora da seguranca do paciente.
- Evidencia de viabilidade de uso de IA em nefrologia no SUS.

## Escopo tecnico atual do repositorio

Este repositorio contem a base inicial de software para o produto digital:

- `Next.js` (App Router)
- `TypeScript`
- `Tailwind CSS`
- `ESLint`

### Estrutura inicial

```text
hemo-guard-ufsc/
  public/
  src/
    app/
      layout.tsx
      page.tsx
      globals.css
  package.json
```

## Como executar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Etica e conformidade

- Projeto sujeito a aprovacao no CEP (Resolucao CNS 466/2012).
- Tratamento de dados em conformidade com a LGPD (Lei 13.709/2018).
- Esta aplicacao e um prototipo de pesquisa e **nao** substitui julgamento clinico.
