
# 🛒 Projeto Loja React + JSON Server

Este é um projeto de uma loja virtual desenvolvido como parte de um teste técnico. A aplicação foi construída utilizando **React** para o front-end e **JSON Server** como API fake para simular os dados dos produtos.

O objetivo é permitir que o usuário:

- Visualize uma lista de produtos;
- Faça uma busca simples por nome;
- Acesse uma página de detalhes de cada produto;
- Selecione a quantidade desejada;
- Adicione produtos ao carrinho;
- Gerencie o carrinho removendo itens;
- Veja o valor total da compra.

---

## 🚀 Tecnologias Utilizadas

- ⚛️ **React** – Biblioteca para construção de interfaces.
- ⚡ **Vite** – Build tool para desenvolvimento rápido em React.
- 🔗 **React Router DOM** – Para navegação entre páginas.
- 🌐 **Axios** – Cliente HTTP para comunicação com a API.
- 🗂️ **Context API** – Gerenciamento de estado global (utilizado no carrinho de compras).
- 🔥 **JSON Server (v0.17.0)** – API fake para simular um backend REST.

⚠️ **Importante:** Foi utilizada a versão `0.17.0` do JSON Server, pois a versão `1.0.0` possui limitações em alguns filtros de consulta, como busca por parâmetros na URL.

---

## 📁 Estrutura de Páginas

- **Product List:** Página de listagem dos produtos com opção de busca por nome.
- **Product Details:** Página de detalhes do produto com opção de escolher quantidade e adicionar ao carrinho.
- **Shopping Cart:** Página que exibe os produtos adicionados, permite remover itens e mostra o valor total da compra.

---

## 🔧 Como Executar o Projeto

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### 2️⃣ Instale as dependências

```bash
npm install
```

### 3️⃣ Rode o servidor da API (JSON Server)

```bash
npm run server
```

➡️ Isso irá iniciar o **JSON Server** na porta `http://localhost:3001`, utilizando o arquivo `db.json` localizado na pasta `/data`.

### 4️⃣ Rode o projeto React

```bash
npm run dev
```

➡️ O projeto React ficará disponível normalmente na porta `http://localhost:5173` (ou outra porta, dependendo da sua configuração).

---

## 🌐 Rotas da API (JSON Server)

- Listagem de produtos:
```
GET http://localhost:3001/products
```

- Busca por nome (filtro):
```
GET http://localhost:3001/products?name_like=busca
```

- Detalhes de um produto por ID:
```
GET http://localhost:3001/products/:id
```

---

## ✅ Funcionalidades do Carrinho

- Gerenciamento via **Context API**, permitindo que o estado do carrinho esteja disponível globalmente na aplicação.
- Adição e remoção de produtos.
- Cálculo automático do total da compra com base na quantidade de cada item.

---

## 📝 Observações

Este projeto tem fins educacionais e para testes técnicos. O JSON Server simula uma API, portanto não há persistência real dos dados além do runtime da aplicação.

---

## 👨‍💻 Autor

Desenvolvido por Vitor Nunes de Almeida (https://github.com/VitorN200).

---
