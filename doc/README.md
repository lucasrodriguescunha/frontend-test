# A Fazenda - Ranking dos Participantes 

## ✅ Projeto concluído

Este projeto é um teste frontend para o **R7.com** que apresenta um ranking dos participantes do programa "A Fazenda", com votos positivos e negativos, ordenados por popularidade.

### 🎯 Objetivos implementados

- ✅ **Layout responsivo** baseado no design PSD fornecido
- ✅ **Requisição para `/fazenda.json`** para carregar dados dos participantes
- ✅ **Cálculo de porcentagens** de votos positivos e negativos
- ✅ **Ordenação dos participantes** pela porcentagem de votos positivos (decrescente)
- ✅ **JavaScript puro** com ES6+ modules
- ✅ **CSS componentizado** com custom properties (CSS variables)
- ✅ **Testes unitários** com Jest e testes E2E com Cypress
- ✅ **Configuração de ambiente** com Node.js e npm

---

## Como usar o projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm

### Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/lucasrodriguescunha/frontend-test.git
cd frontend-test
```

2. **Instale as dependências:**
```bash
npm install
```

### Executando a aplicação

```bash
npm start
```

A aplicação estará disponível em: **http://localhost:7007**

---

## Testes

### Executar todos os testes
```bash
npm test
```

### Executar testes em modo watch
```bash
npm run test:watch
```

### Executar testes E2E com Cypress
```bash
npm run cypress:open
```

### Estrutura de Testes

- **Testes unitários**: Localizados em `public/tests/`
- **Testes E2E**: Cypress configurado em `cypress/e2e/`
- **Configuração**: `jest.config.cjs` (CommonJS para compatibilidade)
- **Framework**: Jest com jsdom para simulação do DOM
- **Comandos customizados**: Cypress commands para reutilização

---

## Tecnologias utilizadas

### Frontend
- **HTML5** semântico
- **CSS3** com Custom Properties (CSS Variables)
- **JavaScript ES6+** modules
- **Fetch API** para requisições

### Ferramentas de desenvolvimento
- **Node.js** + **Express** para servidor local
- **Jest** para testes unitários com cobertura completa
- **Cypress** para testes E2E e integração
- **Babel** para transpilação ES6+
- **npm** para gerenciamento de dependências e scripts

---

## 🎨 Metodologia CSS

### Padrões utilizados
- **CSS Custom Properties** para variáveis organizadas
- **BEM-like** naming convention para classes
- **Flexbox** e **Grid** para layouts modernos
  
---

## 📱 Responsividade

O layout é totalmente responsivo e otimizado para:

- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (até 767px)

### Técnicas implementadas
- Grid responsivo com `auto-fill` e `minmax()`
- Imagens otimizadas com `object-fit`
- Layout flexível para diferentes tamanhos de tela

---

## ⚡ Performance

### Otimizações implementadas
- **Lazy loading** nas imagens (`loading="lazy"`)
- **CSS otimizado** com variáveis reutilizáveis
- **JavaScript modular** para melhor cache
- **Estrutura semântica** para SEO

---

## 🔧 Funcionalidades principais

### 1. Carregamento de dados
- Requisição assíncrona para `/fazenda.json`
- Tratamento de erros de rede
- Loading states

### 2. Processamento dos dados
```javascript
// Ordenação por votos positivos (decrescente)
const sorted = sortParticipants(data.data, 'positive');
```

### 3. Renderização dinâmica
- Criação de cards de participantes
- Estrutura HTML semântica
- Acessibilidade com `alt` adequados

### 4. Interações
- **Hover effects** nos cards
- **Transições suaves** (0.3s ease)
- **Feedback visual** para estados

---

## 🧩 Compatibilidade

### Navegadores suportados
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Padrões web
- **ES6 Modules** nativos
- **Fetch API**
- **CSS Grid & Flexbox**
- **Custom Properties**

---

## Estrutura dos dados

```json
{
  "data": [
    {
      "name": "Nome do Participante",
      "picture": "url-da-imagem.jpg",
      "description": "Descrição do participante",
      "positive": 1234,
      "negative": 567
    }
  ]
}
```

---

## 🎯 Pontos de atenção atendidos

✅ **Não alteração** do arquivo `fazenda.json` (mantido intacto)
✅ **JavaScript puro** sem frameworks pesados (ES6+ modules)
✅ **CSS componentizado** sem Bootstrap (custom properties)
✅ **Testes implementados** com Jest (unitários) e Cypress (E2E)
✅ **Documentação completa** neste arquivo README
✅ **Layout fiel ao PSD** fornecido com responsividade
✅ **Responsividade** em todos os dispositivos (mobile/tablet/desktop)
✅ **Performance otimizada** com lazy loading e boas práticas
✅ **Acessibilidade** com semântica HTML5 e atributos adequados
✅ **SEO otimizado** com meta tags e estrutura semântica

---

## 📋 Scripts disponíveis

```bash
# Iniciar aplicação de desenvolvimento
npm start

# Executar todos os testes unitários
npm test

# Testes unitários em modo watch
npm run test:watch

# Abrir interface do Cypress para testes E2E
npm run cypress:open

# Executar testes Cypress em modo headless
npm run cypress:run
```

---

## 👨‍💻 Desenvolvido por

**Lucas Rodrigues Cunha**
