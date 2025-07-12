# Gabrielle Aesthetics - React + Tailwind CSS

Projeto React com Tailwind CSS configurado com cores personalizadas e fontes específicas para a marca Gabrielle Aesthetics.

## 🎨 Paleta de Cores Personalizada

### Rose Gold

- **Base**: Tom metálico elegante
- **Classes disponíveis**: `bg-roseGold-50` até `bg-roseGold-950`
- **Uso**: Elementos principais, títulos, destaques

### Champagne

- **Base**: Tom claro pastel rosado
- **Classes disponíveis**: `bg-champagne-50` até `bg-champagne-950`
- **Uso**: Fundos suaves, elementos secundários

### Blush

- **Base**: Tom suave de rosa pálido
- **Classes disponíveis**: `bg-blush-50` até `bg-blush-950`
- **Uso**: Acentos, elementos decorativos

## 🔤 Fontes Personalizadas

### Títulos (Script)

- **Fonte**: "Great Vibes"
- **Classe**: `font-title`
- **Uso**: Títulos principais, elementos decorativos

### Corpo de Texto

- **Fonte**: "Open Sans"
- **Classe**: `font-body`
- **Uso**: Texto principal, parágrafos, navegação

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.js       # Cabeçalho com gradiente
│   └── ColorPalette.js # Demonstração das cores
├── pages/              # Páginas da aplicação
│   └── Home.js         # Página inicial
├── assets/             # Recursos estáticos
└── index.css           # Configuração do Tailwind
```

## 🚀 Como Usar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm start
```

### Build para Produção

```bash
npm run build
```

## 🎯 Exemplos de Uso

### Cores

```jsx
// Fundo com gradiente
<div className="bg-gradient-to-r from-roseGold-500 to-champagne-400">

// Texto colorido
<h1 className="text-roseGold-700">

// Borda colorida
<div className="border border-blush-200">
```

### Fontes

```jsx
// Título com fonte script
<h1 className="font-title text-4xl">

// Texto com fonte corpo
<p className="font-body text-lg">
```

## 📦 Tecnologias Utilizadas

- **React**: 18.x
- **Tailwind CSS**: 3.x
- **PostCSS**: Para processamento CSS
- **Autoprefixer**: Para compatibilidade de navegadores

## 🎨 Personalização

As cores e fontes podem ser facilmente modificadas no arquivo `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      roseGold: { /* suas cores */ },
      champagne: { /* suas cores */ },
      blush: { /* suas cores */ },
    },
    fontFamily: {
      'title': ['Great Vibes', 'cursive'],
      'body': ['Open Sans', 'sans-serif'],
    },
  },
}
```
