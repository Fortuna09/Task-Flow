# 🚀 TaskFlow: Gerenciador de Tarefas Inteligente


> Um gerenciador de tarefas intuitivo e poderoso, projetado para otimizar sua produtividade. Com recursos de filtragem avançada, organização por tags e persistência de dados local, o TaskFlow ajuda você a manter o controle total sobre suas metas diárias, semanais e projetos.

---

## 🌟 Funcionalidades Principais

* **Criação e Gerenciamento de Tarefas:** Adicione, edite (se a funcionalidade for implementada na rota de detalhes) e exclua tarefas com facilidade.
* **Status de Conclusão:** Marque tarefas como concluídas para acompanhar seu progresso.
* **Priorização:** Defina prioridades (Baixa, Média, Alta) para suas tarefas, ajudando a focar no que realmente importa.
* **Datas de Vencimento:** Atribua datas de vencimento para não perder nenhum prazo importante.
* **Organização por Tags:** Categorize suas tarefas com tags personalizadas para uma organização flexível.
* **Filtros Inteligentes:**
    * Filtragem por status (Todas, Pendentes, Concluídas).
    * Filtragem por prioridade (Todas, Baixa, Média, Alta).
    * Busca textual por título e descrição.
    * Filtragem por Tags: Selecione uma ou mais tags para visualizar tarefas específicas.
* **Persistência de Dados Local:** Suas tarefas são salvas automaticamente no `localStorage` do navegador, garantindo que seus dados permaneçam mesmo após fechar e reabrir o aplicativo.
* **Interface Responsiva:** Design adaptável para uma experiência consistente em diferentes tamanhos de tela.
* **Navegação por Rotas (Vue Router):** Estrutura de rotas para futuras expansões e uma experiência de usuário mais organizada (Ex: Home, Detalhes da Tarefa).
* **Gerenciamento de Estado Global (Vuex):** Utilização do Vuex para um controle centralizado e eficiente do estado da aplicação, facilitando a manutenção e escalabilidade.

---

## 🛠️ Tecnologias Utilizadas

* **Vue.js 3:** O framework progressivo para construção de interfaces de usuário.
* **Vuex:** Para gerenciamento de estado centralizado da aplicação.
* **Vue Router:** Para navegação e roteamento entre as páginas.
* **Sass (SCSS):** Pré-processador CSS para estilização organizada e escalável.
* **JavaScript (ES6+):** Linguagem de programação principal.
* **HTML5:** Estrutura semântica.
* **`uuid`:** Para geração de IDs únicos para as tarefas.
* **`localStorage` API:** Para persistência de dados local.

---

## ⚙️ Como Rodar o Projeto Localmente

Siga estas instruções para configurar e executar o TaskFlow em sua máquina local.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/) e o [npm](https://www.npmjs.com/) (ou [Yarn](https://yarnpkg.com/)) instalados em seu sistema.

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/taskflow.git](https://github.com/seu-usuario/taskflow.git)
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd taskflow
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    # OU
    yarn install
    ```

### Executando o Servidor de Desenvolvimento

Para iniciar o aplicativo em modo de desenvolvimento:

```bash
npm run serve
# OU
yarn serve