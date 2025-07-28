# A Fazenda - Ranking dos Participantes

## Sobre o projeto

Este projeto é um teste frontend para o **R7.com** que apresenta um ranking dos participantes do programa "A Fazenda", com votos positivos e negativos, ordenados por popularidade.

### Objetivos Implementados

- **Layout responsivo** baseado no design PSD fornecido
- **Requisição para `/fazenda.json`** para carregar dados dos participantes
- **Cálculo de porcentagens** de votos positivos e negativos
- **Ordenação dos participantes** pela porcentagem de votos positivos (decrescente)
- **JavaScript puro** com ES6+ modules
- **CSS componentizado** com custom properties (CSS variables)
- **Testes unitários** com Jest
- **Configuração de ambiente** com Node.js e npm

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
- **Configuração**: `jest.config.cjs` (CommonJS para compatibilidade)
- **Framework**: Jest com jsdom para simulação do DOM
- **Coverage**: Configurado para arquivos em `public/scripts/`

---

## Arquitetura do projeto

```
frontend-test/
├── public/
│   ├── index.html          # Página principal
│   ├── data/
│   │   └── fazenda.json    # Dados dos participantes
│   ├── images/
│   │   └── a-fazenda-logo.png
│   ├── scripts/
│   │   ├── main.js         # Script principal
│   │   └── sortParticipants.js # Lógica de ordenação
│   ├── styles/
│   │   └── style.css       # Estilos CSS
│   └── tests/
│       └── example.test.js # Testes unitários
├── cypress/                # Testes E2E
├── doc/
│   └── README.md          # Esta documentação
├── app.js                 # Servidor Express
├── package.json           # Dependências e scripts
├── jest.config.cjs        # Configuração do Jest
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
- **Node.js** + **Express** para servidor
- **Jest** para testes unitários
- **Cypress** para testes E2E
- **Babel** para transpilação
- **npm** para gerenciamento de dependências

---

## Metodologia CSS

### Padrões utilizados
- **CSS Custom Properties** para variáveis
- **BEM-like** naming convention
- **Mobile-first** responsive design
- **Flexbox** e **Grid** para layouts

### Variáveis CSS Organizadas
```css
:root {
  /* Cores principais */
  --primary-red: #BB3639;
  --dark-gray: #272727;
  --white: #FFFFFF;

  /* Espaçamentos */
  --spacing-xs: 5px;
  --spacing-md: 10px;

  /* Tipografia */
  --font-size-sm: 14px;
  --font-size-md: 18px;
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

✅ **Não alteração** do arquivo `fazenda.json`
✅ **JavaScript puro** sem frameworks pesados
✅ **CSS componentizado** sem Bootstrap
✅ **Testes implementados** com Jest
✅ **Documentação completa** neste arquivo
✅ **Layout fiel ao PSD** fornecido
✅ **Responsividade** em todos os dispositivos

---

## Scripts disponíveis

```bash
# Iniciar aplicação
npm start

# Executar testes
npm test

# Testes em modo watch
npm run test:watch

# Abrir Cypress
npm run cypress:open
```

---

## Melhorias futuras

- [ ] **Service Worker** para cache offline
- [ ] **Progressive Web App** features
- [ ] **Animações avançadas** com CSS/JS
- [ ] **Acessibilidade expandida** (ARIA labels)
- [ ] **Testes de performance** automatizados

---

## 👨‍💻 Desenvolvido por

**Lucas Rodrigues Cunha**

Este projeto demonstra conhecimentos em:
- HTML5 semântico
- CSS3 moderno
- JavaScript ES6+
- Testes automatizados
- Performance web
- Responsividade
- Acessibilidade