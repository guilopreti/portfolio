# 💻 Portfólio Full Stack | Guilherme Lopreti

Bem-vindo(a) ao repositório do meu portfólio pessoal! Este projeto foi desenvolvido para apresentar minha trajetória, habilidades e os projetos que construí ao longo da minha carreira como Desenvolvedor Full Stack.

Acesse em: https://guilhermelopreti.vercel.app/

## 🚀 Visão Geral

A aplicação é uma **Single Page Application (SPA)** focada em performance, transições suaves e interatividade. Além de listar minhas experiências e tecnologias, o portfólio se comunica ativamente com uma API própria para buscar os meus projetos dinamicamente no banco de dados.

Recentemente, o projeto passou por uma migração arquitetural completa de **Create React App (CRA)** para **Vite**, trazendo melhorias massivas em tempo de carregamento e build!

## ✨ Funcionalidades Principais

- **Navegação Dinâmica (ScrollSpy):** O cabeçalho no estilo "Glassmorphism" identifica ativamente qual seção o usuário está visualizando e atualiza o estado do menu em tempo real.
- **Projetos Dinâmicos & Categorizados:** Os projetos são requisitados e exibidos em cards interativos com opções para filtrar rapidamente por _Front-End_, _Back-End_ ou _Full Stack_.
- **Sistema de Carregamento Inteligente (Paginação):** Funcionalidade de "Ver mais" para fatiar e renderizar cards de 6 em 6, garantindo performance no navegador.
- **Formulário de Contato Direto:** Formulário integrado ao _Formspree_ com validações (Yup) e máscaras para telefone, recebendo o feedback imediato por um sistema de Toasts customizados.
- **Design 100% Responsivo:** Interfaces que se adéquam desde smartphones até telas ultrawide.

## 🛠 Tecnologias e Ferramentas Utilizadas

No desenvolvimento deste front-end, utilizei as seguintes tecnologias:

- **[React.js](https://react.dev/)** + **[Vite](https://vitejs.dev/)** (Ecossistema base)
- **[Styled Components](https://styled-components.com/)** (Estilização local baseada em Componentes CSS no JavaScript)
- **[Redux](https://redux.js.org/) & [Redux Thunk](https://github.com/reduxjs/redux-thunk)** (Gerenciamento Global e Requisições Assíncronas das APIs)
- **[Axios](https://axios-http.com/)** (Consumo da API de Projetos)
- **[React Hook Form](https://react-hook-form.com/) + [Yup](https://github.com/jquense/yup)** (Construção e validação do formulário)
- **[React Toastify](https://fkhadra.github.io/react-toastify/)** (Alertas amigáveis neonizados)
- **[React Icons](https://react-icons.github.io/react-icons/)** (Gestão do pacote massivo de Ícones Tecnológicos)

## ⚙️ Como Executar Localmente

Siga o passo a passo abaixo para rodar o projeto na sua máquina:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/guilopreti/seu-repositorio-aqui.git
    cd portfolio
    ```

2.  **Instale as dependências:**

    ```bash
    yarn install
    # ou npm install
    ```

3.  **Variáveis de Ambiente:**
    Crie um arquivo `.env` na raiz do projeto contendo as seguintes chaves do _Vite_:

    ```env
    VITE_API_URL=Sua_Url_da_API_de_Projetos_Aqui
    VITE_FORMSPREE_URL=Sua_Url_do_WebHook_do_Formspree
    ```

4.  **Inicie a aplicação:**

    ```bash
    yarn start
    # ou npm run start
    ```

5.  Acesso através de `http://localhost:3000`

---

Desenvolvido por **Guilherme Lopreti**.
Sinta-se à vontade para conectar e entrar em contato!
