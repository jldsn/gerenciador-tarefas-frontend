# Gerenciador de Tarefas - Front-End

Este é o front-end do Gerenciador de Tarefas, desenvolvido em React. Ele se conecta a uma API back-end para gerenciar tarefas em um Kanban Board.

## Como Rodar o Projeto

### Pré-requisitos
Antes de começar, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (versão 16 ou superior).
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js).

### Passo 1: Clonar o Repositório
1. Abra o terminal e execute o seguinte comando para clonar o repositório:
   ```bash
   git clone https://github.com/seu-usuario/gerenciador-tarefas-frontend.git
   ```

2. Navegue até a pasta do projeto:
   ```bash
   cd gerenciador-tarefas-frontend
   ```

### Passo 2: Instalar Dependências
O projeto usa várias bibliotecas externas. Para instalar todas as dependências, execute:
```bash
npm install
```

### Passo 3: Configurar o Back-End
O front-end depende de uma API back-end para funcionar corretamente. Siga estas etapas:

1. **Certifique-se de que o back-end está rodando**:
   - O back-end deve estar rodando em `http://localhost:3000`.
   - Se você ainda não configurou o back-end, siga as instruções no repositório do back-end.

2. **Verifique a URL da API**:
   - No arquivo `src/services/api.js`, a URL da API está configurada como:
     ```javascript
     const api = axios.create({
       baseURL: 'http://localhost:3000/tarefas',
     });
     ```
   - Se o back-end estiver rodando em outra URL ou porta, atualize essa configuração.

### Passo 4: Rodar o Projeto
Depois de instalar as dependências e configurar o back-end, inicie o servidor de desenvolvimento do front-end:
```bash
npm start
```

Isso iniciará o projeto e abrirá automaticamente uma janela do navegador em `http://localhost:3000`.

### Passo 5: Acessar o Projeto
- Abra o navegador e acesse:
  ```
  http://localhost:3000
  ```
- Você verá a interface do Kanban Board, onde pode adicionar, editar, mover e excluir tarefas.

---

## Bibliotecas e Recursos Utilizados
Aqui estão as principais bibliotecas e recursos usados no projeto:

1. **React**:
   - Biblioteca principal para construir a interface do usuário.
   - Documentação: [https://reactjs.org/](https://reactjs.org/)

2. **Axios**:
   - Usado para fazer requisições HTTP à API do back-end.
   - Documentação: [https://axios-http.com/](https://axios-http.com/)

3. **React Icons**:
   - Fornece ícones para a interface (ex: ícones de editar e excluir).
   - Documentação: [https://react-icons.github.io/react-icons/](https://react-icons.github.io/react-icons/)

4. **React Toastify**:
   - Exibe notificações (toasts) para feedback ao usuário (ex: "Tarefa adicionada com sucesso").
   - Documentação: [https://fkhadra.github.io/react-toastify/](https://fkhadra.github.io/react-toastify/)

5. **React Scripts**:
   - Ferramentas para rodar, testar e buildar o projeto.
   - Documentação: [https://create-react-app.dev/](https://create-react-app.dev/)

---

## Estrutura do Projeto
Aqui está a estrutura de pastas e arquivos do projeto:

```
gerenciador-tarefas-frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── FilterBar.jsx
│   │   ├── KanbanBoard.jsx
│   │   ├── TaskCard.jsx
│   │   └── TaskForm.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── index.js
├── package.json
├── README.md
```

---

## Comandos Úteis
- **Rodar o projeto**:
  ```bash
  npm start
  ```

- **Criar uma versão de produção**:
  ```bash
  npm run build
  ```

- **Testar o projeto**:
  ```bash
  npm test
  ```

- **Instalar uma nova biblioteca**:
  ```bash
  npm install nome-da-biblioteca
  ```

---

## Problemas Comuns e Soluções

1. **Erro ao rodar `npm install`**:
   - Certifique-se de que o Node.js e o npm estão instalados corretamente.
   - Tente limpar o cache do npm:
     ```bash
     npm cache clean --force
     ```
   - Depois, execute novamente:
     ```bash
     npm install
     ```

2. **API não está respondendo**:
   - Verifique se o back-end está rodando em `http://localhost:3000`.
   - Confira a URL da API no arquivo `src/services/api.js`.

3. **Erros no console do navegador**:
   - Verifique se todas as dependências estão instaladas.
   - Certifique-se de que o back-end está configurado corretamente.

---

## Contribuição
Se você quiser contribuir para o projeto, siga estas etapas:
1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Abra um pull request.

---

### **Como Usar**
1. Copie o conteúdo acima.
2. Cole no arquivo `README.md` do seu repositório front-end.
3. Substitua `seu-usuario` pelo seu nome de usuário do GitHub.
4. Personalize as seções de **Contribuição** e **Licença** conforme necessário.
