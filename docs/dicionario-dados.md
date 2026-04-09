# Dicionário de dados (rascunho para integração com Tasy)

Documento vivo para o projeto **DialySmart** (mestrado em Informática em Saúde, UFSC).  
Preencha a coluna **Campo / caminho no Tasy** quando o acesso ao sistema e aos relatórios estiver disponível.

**Legenda de papéis no modelo**

- **Entrada**: variável candidata a feature do modelo preditivo.
- **Desfecho**: define o evento de instabilidade hemodinâmica intradialítica (IHI) ou critérios relacionados.
- **Contexto**: dados demográficos ou clínicos de apoio (uso conforme aprovação do CEP e disponibilidade).

---

## 1. Identificação da sessão e do paciente (anonimizado)

| ID interno | Descrição | Tipo | Exemplo | Papel | Campo / relatório Tasy | Observações |
|------------|-----------|------|---------|-------|------------------------|-------------|
| `id_sessao` | Chave sintética da sessão de hemodiálise | string / UUID | `ses_8f3a…` | Contexto | _a preencher_ | Não usar identificadores diretos (nome, CPF, prontuário). |
| `id_paciente_pseudo` | Identificador pseudonimizado | string | `pac_12ab…` | Contexto | _a preencher_ | Gerado após anonimização; rastreio só no ambiente seguro aprovado. |
| `data_sessao` | Data da sessão (ou referência temporal) | date | `2026-04-09` | Contexto | _a preencher_ | Avaliar granularidade permitida (dia vs timestamp) pela TI/ética. |
| `hora_inicio` | Início da sessão | time / datetime | `08:00` | Contexto | _a preencher_ | Necessário se o modelo usar série temporal intra-sessão. |
| `duracao_min` | Duração da sessão | int (minutos) | `240` | Entrada | _a preencher_ | Citada na metodologia como variável operacional. |

---

## 2. Sinais hemodinâmicos e vitais

| ID interno | Descrição | Unidade | Tipo | Papel | Campo / relatório Tasy | Observações |
|------------|-----------|---------|------|-------|------------------------|-------------|
| `pas_inicio` | Pressão arterial sistólica no início (ou referência) | mmHg | int / float | Entrada | _a preencher_ | Alinhar ao critério pressórico do desfecho (queda ≥ 20 mmHg vs referência). |
| `pad_inicio` | Pressão arterial diastólica no início | mmHg | int / float | Entrada | _a preencher_ | |
| `pas_*` / `pad_*` | PA ao longo da sessão (se série) | mmHg | série temporal | Entrada | _a preencher_ | Opcional na Fase 1 se só houver PA pontual no extrato. |
| `fc_inicio` | Frequência cardíaca no início | bpm | int | Entrada | _a preencher_ | |
| `fc_*` | FC ao longo da sessão (se série) | bpm | série temporal | Entrada | _a preencher_ | Útil para LSTM / séries temporais. |

---

## 3. Parâmetros dialíticos e peso

| ID interno | Descrição | Unidade | Tipo | Papel | Campo / relatório Tasy | Observações |
|------------|-----------|---------|------|-------|------------------------|-------------|
| `uf_volume_ml` | Volume total de ultrafiltração na sessão | mL | int / float | Entrada | _a preencher_ | Relacionar com `duracao_min` para derivar taxa. |
| `uf_taxa_ml_h` | Taxa de ultrafiltração | mL/h | float | Entrada | _a preencher_ | Pode ser calculada: `uf_volume_ml / (duracao_min/60)`. |
| `peso_pre_kg` | Peso pré-diálise | kg | float | Entrada | _a preencher_ | |
| `peso_pos_kg` | Peso pós-diálise (se disponível na mesma linha temporal) | kg | float | Contexto | _a preencher_ | Útil para validações; desfecho costuma ser intra-sessão. |
| `peso_seco_kg` | Peso seco (estimado / prescrito) | kg | float | Entrada | _a preencher_ | Conforme definido na unidade. |
| `ganho_interdialitico_kg` | Ganho de peso interdialítico | kg | float | Entrada | _a preencher_ | Definir fórmula institucional (ex.: pré - pós sessão anterior). |

---

## 4. Intercorrências e desfecho (IHI)

Defina com a equipe clínica a **regra exata** que espelha o prontuário (ex.: campos de evolução, scale de eventos, prescrição).

| ID interno | Descrição | Tipo | Papel | Campo / relatório Tasy | Observações |
|------------|-----------|------|-------|------------------------|-------------|
| `queda_pas_mmhg` | Queda da PAS em relação ao valor de referência da sessão | mmHg | float | Desfecho / Entrada | _a preencher_ | Pode ser derivado de série de PA. |
| `criterio_pressorico` | PAS caiu ≥ 20 mmHg vs início + sintomas (conforme protocolo) | bool | Desfecho | _a preencher_ | Mapear para regra KDIGO / unidade. |
| `bolus_sf` | Infusão de bolus de soro fisiológico (sim/não) | bool | Desfecho | _a preencher_ | Critério de intervenção. |
| `reducao_uf_abrupta` | Redução abrupta da taxa de UF (sim/não) | bool | Desfecho | _a preencher_ | |
| `interrupcao_precoce` | Interrupção precoce da sessão (sim/não) | bool | Desfecho | _a preencher_ | |
| `sintomas` | Náusea, câimbras, mal-estar, etc. | categórica / texto | Entrada / Desfecho | _a preencher_ | Cuidado com subjetividade; padronizar categorias quando possível. |
| `ihi_binario` | Desfecho composto IHI (1 = evento, 0 = não) | bool / int 0-1 | Desfecho | _derivado_ | Construir a partir dos critérios aprovados na pesquisa. |

---

## 5. Metadados de extração e qualidade

| ID interno | Descrição | Tipo | Papel | Campo / relatório Tasy | Observações |
|------------|-----------|------|-------|------------------------|-------------|
| `versao_tasy` | Versão do sistema (ex.: Delphi 4.00.1845) | string | Contexto | _documentar na extração_ | Atualizar quando houver migração HTML5. |
| `origem_relatorio` | Nome do relatório ou API utilizada | string | Contexto | _a preencher_ | Rastreio para reprodutibilidade. |
| `data_extracao` | Data da exportação | datetime | Contexto | _automático_ | |
| `campos_ausentes` | Lista de variáveis faltantes naquela linha | string / JSON | Qualidade | _derivado_ | Apoia data wrangling e análise de viés. |

---

## Próximos passos sugeridos

1. Revisar esta tabela com **orientador** e **serviço de nefrologia** (nomes e critérios alinhados ao Tasy real).
2. Solicitar à TI um **exemplo de layout** de exportação (mesmo com dados fictícios) para mapear colunas.
3. Registrar no projeto de pesquisa / CEP a **lista mínima** de variáveis e a forma de **anonimização**.
4. Manter no repositório apenas **estruturas e exemplos sintéticos** até haver autorização para dados reais.

---

*Última atualização: rascunho inicial para uso antes do acesso ao Tasy.*
