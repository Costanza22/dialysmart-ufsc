# DialySmart

Aplicativo (protótipo) para apoio à predição de instabilidade hemodinâmica em hemodiálise — projeto de mestrado em Informática em Saúde (UFSC).

Universidade Federal de Santa Catarina  
Centro de Ciências da Saúde  
Programa de Pós-Graduação em Informática em Saúde

## Código-fonte

Repositório no GitHub: [github.com/Costanza22/dialysmart-ufsc](https://github.com/Costanza22/dialysmart-ufsc)

## Projeto de Mestrado

**Desenvolvimento e avaliação de um aplicativo móvel baseado em inteligência artificial para predição de instabilidade hemodinâmica em pacientes submetidos à hemodiálise**

**Linha de Pesquisa 1:** Tecnologia da Informação e Comunicação em Saúde / eSaúde  
**Local e ano:** Florianópolis, 2026

## Introdução

A Doença Renal Crônica (DRC) é um problema relevante de saúde pública. Em estágios avançados, a hemodiálise é essencial, mas pode apresentar complicações intradialíticas frequentes, especialmente hipotensão.  
Este projeto propõe uma abordagem preditiva baseada em Inteligência Artificial para antecipar instabilidade hemodinâmica durante as sessões, apoiando a tomada de decisão clínica e a segurança do paciente no contexto assistencial.

## Objetivo geral

Desenvolver um aplicativo móvel com IA para predição precoce de instabilidade hemodinâmica em sessões de hemodiálise.

## Objetivos específicos

- Desenvolver e validar modelo preditivo com variáveis clínicas (pressão arterial, frequência cardíaca, ultrafiltração, ganho interdialítico e peso seco).
- Integrar o modelo a uma interface clínica com alertas estratificados (preventivo e crítico).
- Avaliar desempenho com métricas como acurácia, sensibilidade, especificidade, AUC-ROC e taxa de falsos positivos.
- Avaliar usabilidade e aplicabilidade clínica da ferramenta em ambiente real ou simulado.
- Analisar viabilidade técnica e operacional no serviço de nefrologia.

## Metodologia (resumo)

- **Fase 1 - Retrospectiva:** treinamento e validação com dados históricos anonimizados.
- **Fase 2 - Piloto prospectivo:** uso assistido do app com equipe multiprofissional.
- Algoritmos candidatos: Random Forest, SVM e LSTM.
- Arquitetura prevista: microsserviços, API segura (HTTPS/SSL), interoperabilidade com HL7 FHIR.
- Dados oriundos do prontuário eletrônico institucional (Tasy), com anonimização conforme LGPD.

## Resultados esperados

- Predição antecipada de risco de instabilidade hemodinâmica.
- Apoio a intervenções preventivas durante a sessão.
- Redução de eventos adversos e melhora da segurança do paciente.
- Evidência de viabilidade de uso de IA em nefrologia no SUS.

## Escopo técnico atual do repositório

Este repositório contém a base inicial de software para o produto digital:

- `Next.js` (App Router)
- `TypeScript`
- `Tailwind CSS`
- `ESLint`

### Estrutura inicial

```text
dialysmart/
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

## Ética e conformidade

- Projeto sujeito a aprovação no CEP (Resolução CNS 466/2012).
- Tratamento de dados em conformidade com a LGPD (Lei 13.709/2018).
- Esta aplicação é um protótipo de pesquisa e **não** substitui julgamento clínico.
