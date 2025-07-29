# A Fazenda - Ranking dos Participantes 🏆

## ✅ Projeto Concluído

Este projeto é um teste frontend para o **R7.com** que apresenta um ranking dos participantes do programa "A Fazenda", com votos positivos e negativos, ordenados por popularidade.

**Status:** ✅ **FINALIZADO** - Todos os requisitos implementados e código otimizado sem comentários.

### 🎯 Objetivos Implementados

- ✅ **Layout responsivo** baseado no design PSD fornecido
- ✅ **Requisição para `/fazenda.json`** para carregar dados dos participantes
- ✅ **Cálculo de porcentagens** de votos positivos e negativos
- ✅ **Ordenação dos participantes** pela porcentagem de votos positivos (decrescente)
- ✅ **JavaScript puro** com ES6+ modules
- ✅ **CSS componentizado** com custom properties (CSS variables)
- ✅ **Testes unitários** com Jest e testes E2E com Cypress
- ✅ **Configuração de ambiente** com Node.js e npm
- ✅ **Código limpo** sem comentários desnecessários

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
- **Coverage**: Configurado para arquivos em `public/scripts/`
- **Comandos customizados**: Cypress commands para reutilização

---

## 📂 Arquitetura do projeto

```
frontend-test/
├── public/
│   ├── index.html          # Página principal
│   ├── data/
│   │   └── fazenda.json    # Dados dos participantes (não alterado)
│   ├── images/
│   │   └── a-fazenda-logo.png
│   ├── scripts/
│   │   ├── main.js         # Script principal (sem comentários)
│   │   └── sortParticipants.js # Lógica de ordenação (sem comentários)
│   ├── styles/
│   │   └── style.css       # Estilos CSS (sem comentários)
│   └── tests/
│       ├── main.test.js         # Testes unitários (sem comentários)
│       └── sortParticipants.test.js # Testes de ordenação (sem comentários)
├── cypress/                # Testes E2E
│   ├── e2e/
│   │   └── fazenda-ranking.cy.js # Testes end-to-end (sem comentários)
│   └── support/
│       ├── commands.js     # Comandos customizados (sem comentários)
│       └── e2e.js         # Configuração E2E (sem comentários)
├── doc/
│   └── README.md          # Esta documentação
├── app.js                 # Servidor Express
├── package.json           # Dependências e scripts
├── jest.config.cjs        # Configuração do Jest
├── cypress.config.js      # Configuração do Cypress (sem comentários)
└── babel.config.cjs       # Configuração do Babel
```

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
- **Mobile-first** responsive design approach
- **Flexbox** e **Grid** para layouts modernos
- **Código limpo** sem comentários para produção

### Variáveis CSS Organizadas (sem comentários)
```css
:root {
  --primary-red: #BB3639;
  --secondary-red: #BA3536;
  --dark-red: #BB3D42;
  --dark-gray: #272727;
  --light-gray: #909090;
  --text-gray: #6D6D6D;
  --text-light: #8F8F8F;
  --white: #FFFFFF;
  --black: #000000;

  --spacing-xs: 5px;
  --spacing-sm: 8px;
  --spacing-md: 10px;
  --spacing-lg: 15px;
  --spacing-xl: 20px;

  --border-radius-sm: 2px;
  --border-radius-full: 50%;
  --border-width: 5px;

  --shadow-light: 0 2px 6px rgba(0, 0, 0, 0.1);
  --shadow-medium: 0 2px 5px rgba(0, 0, 0, 0.2);
  --badge-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(26, 36, 40, 0.32) 0px 2px 16px 0px;

  --font-size-sm: 14px;
  --font-size-md: 18px;
  --font-size-lg: 34px;
  --font-weight-bold: 700;

  --image-size: 80px;
  --logo-size: 100%;
  --card-min-width: 220px;

  --transition-default: all 0.3s ease;
}
```

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
✅ **Código limpo** sem comentários desnecessários para produção
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

## 🚀 Melhorias futuras (opcional)

- [ ] **Service Worker** para cache offline
- [ ] **Progressive Web App** features
- [ ] **Animações avançadas** com CSS/JS
- [ ] **Testes de performance** automatizados com Lighthouse
- [ ] **Internacionalização** (i18n) para múltiplos idiomas
- [ ] **Dark mode** theme switcher

---

## 👨‍💻 Desenvolvido por

**Lucas Rodrigues Cunha**

### 🏆 Este projeto demonstra proficiência em:
- ✅ HTML5 semântico e estruturado
- ✅ CSS3 moderno com custom properties
- ✅ JavaScript ES6+ puro e modular
- ✅ Testes automatizados (unitários e E2E)
- ✅ Performance web e otimizações
- ✅ Responsividade e mobile-first
- ✅ Acessibilidade e SEO
- ✅ Código limpo e manutenível
- ✅ Documentação técnica completa

**Status final:** 🎯 **Projeto 100% completo e otimizado para produção**