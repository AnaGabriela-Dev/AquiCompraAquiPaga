# AquiCompraAquiPaga — Loja de Jogos

Este projeto academico é uma loja para compra de jogos digitais, permitindo listar jogos, criar clientes e registrar compras.  
O banco de dados utilizado é o **H2**, e o backend foi construído com **Java + Spring Boot**.

---

## 🚀 Funcionalidades

### 🕹️ Jogos
- Listar todos os jogos
- Listar por categoria (`INDIE` ou `RETRO`)
- Registrar novos jogos

### 👤 Clientes
- Criar cliente
- Listar clientes
- Buscar cliente por ID

### 🛒 Carrinho & Itens
- Adicionar itens ao carrinho
- Listar itens
- Calcular total

### 🧾 Compras
- Registrar nova compra (`CompraService`)
- Associar cliente + lista de jogos
- Guardar data e status do pedido

---

Esse projeto tomou como prioridade a utilização dos conceitos de POO

### ✔️ Classes e Objetos

Representação de entidades como:

- Game
- Cliente
- Compra
- Carrinho
- PagamentoPix, etc.

### ✔️ Encapsulamento

Atributos privados e os getters e setters públicos.

### ✔️ Polimorfismo

Cada tipo de pagamento sobrescreve

