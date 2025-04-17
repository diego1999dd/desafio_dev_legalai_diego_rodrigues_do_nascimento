# Projeto de Match Inteligente

<div align="center">
    <img src="https://ik.imagekit.io/s53kowf549/Match,%20inteligente.png?updatedAt=1744856989513" alt="Logo da Move2Fit"/>
</div>

## Descrição

Mini MVP de um sistema de matchmaking com "inteligência artificial simulada".
O objetivo é criar uma experiência funcional que conecta pessoas com base em afinidade, de forma simples e rápida.

## Links

- Deploy URL: [MatchInteligente](https://desafio-dev-legalai-diego-rodrigues-do-nascimento.vercel.app/)

## Instruções para Rodar o Projeto

1.  **Clone o repositório:**

```bash
git clone <repository_url>
```

2.  **Navegue até o diretório do projeto:**

```bash
cd <nome_do_diretorio>
```

3.  **Instale as dependências:**

```bash
yarn install
```

4.  **Inicie o servidor de desenvolvimento:**

```bash
yarn dev
```

5.  **Abra seu navegador e acesse:**

```
http://localhost:5173/
```

---

## Tecnologias utilizadas

| Item                          | Descrição      |
| ----------------------------- | -------------- |
| **Biblioteca**                | React          |
| **Linguagem de programação**  | TypeScript     |
| **Biblioteca de Estilização** | Tailwind CSS   |
| **Build Tool**                | Vite           |
| **Linguagem de Marcação**     | HTML           |
| **Ícones**                    | Phosphor Icons |

---

## Principais Decisões Tomadas Durante o Desenvolvimento

- **Primeira Versão da Lógica de Afinidade:** Inicialmente, o projeto usava apenas um filtro simples por área de interesse, comparando diretamente os dados mockados com a escolha do usuário.

- **Evolução da Lógica de Afinidade com Pesos Dinâmicos:** A lógica foi aprimorada com a introdução de pesos ajustáveis (location_weight e interesse_weight), simulando uma tomada de decisão baseada em critérios flexíveis. Isso permitiu mais controle sobre a forma como a afinidade é calculada, aproximando o sistema de uma IA simplificada.

- **Gerenciamento de Estado:** Utilizei useState do React para controlar os dados do formulário, os resultados filtrados e a exibição dos componentes. Isso manteve a aplicação reativa e fácil de gerenciar.

- **Simulação de Dados:** Usei dois arquivos JSON: um com usuários mockados e outro com uma lista de cidades. Essa abordagem permitiu simular um cenário realista sem depender de APIs externas, mantendo a entrega funcional e estável.

- **Componentização e Organização:** Estruturei o projeto com componentes pequenos e reutilizáveis. A lógica de afinidade foi extraída para um utilitário separado (simular.ts), garantindo separação de responsabilidades e melhor organização do código.

- **Stack Escolhida:** Optei por React com TypeScript, utilizando Vite para um ambiente de desenvolvimento rápido e moderno. Tailwind CSS foi adotado para estilização ágil e consistente.

---

## 💡 O Que Faria Diferente Se Tivesse Mais Tempo

- **+ Compatibilidade Baseada em Localização:**

  - Calcular o `location_weight` dinamicamente com base na localização informada pelo usuário.
  - Utilizar distância geográfica real entre as regiões para refinar o cálculo de afinidade.

- **+ Integração com Backend Real:**

  - Criar uma API em Node.js com banco de dados relacional (MySQL/PostgreSQL).
  - Implementar sistema de cadastro e persistência dos dados dos usuários.

- **+ Dados Reais de Usuários:**

  - Integrar com a API do Google (ou similar) para obter dados reais e atualizados.
  - Substituir os dados mockados por informações dinâmicas obtidas via API

- **+ Melhorias de UX/UI:**

  - Loading States: Adicionar indicadores de carregamento (spinners) enquanto os dados estão sendo processados ou carregados.
  - Feedback Visual: Incluir mensagens de sucesso/erro (alerts ou toasts) ao enviar o formulário ou em caso de falhas.
  - Animações suaves: Transições para exibição dos resultados com animações para melhorar a fluidez da interface.
  - Dark Mode: Incluir suporte a tema escuro para uma experiência moderna e personalizável.

- **+ Testes:**

  - Testes Unitários: Escrever testes para as funções de cálculo de afinidade.

- **+ Acessibilidade (a11y):**

  - Garantir acessibilidade com aria-labels, foco de teclado, e contraste de cores.
  - Adaptar o formulário e os resultados para leitores de tela.

- **+ Funcionalidades Extras:**

  - Histórico de Buscas: Mostrar conexões anteriores ou salvar histórico localmente (localStorage).
