# Plataforma ONG Social – Design System

Guia de design baseado em **Tailwind CSS 4**, **shadcn/ui** e paleta de cores customizada usando **OKLCH** para melhor manipulação de cores.

---

## 1. Visão Rápida

**Princípios de Design**

- **Hierarquia Visual**
  Organização visual prioriza elementos por importância e ação esperada. Títulos principais (H1) em **Laranja Vivo** (primary-500) estabelecem autoridade e energia; subtítulos (H2) em **Argila** (secondary-500) criam profundidade e sofisticação; textos de apoio em **Zinc** neutro facilitam leitura secundária. Botões primários em laranja vivo recebem destaque máximo; botões secundários em tons suaves orientam ações complementares. Elementos decorativos geométricos criam ritmo visual. Imagens humanizadas com fundos claros reforçam conexão emocional.
  
  **Exemplo:** Hero com H1 em laranja `oklch(0.68 0.2 40)`, secundário em argila `oklch(0.28 0.07 60)`, CTA em laranja primário, elementos decorativos em tons suaves do laranja.

- **Consistência**
  Padrões visuais garantem coerência em todas as páginas. Uso sistemático de tokens semânticos (shadcn), variáveis OKLCH e Tailwind utilities. Componentes reutilizáveis com base em shadcn/ui. Animações com timing consistente (300ms padrão). Escala de espaçamento harmônica (0.5rem, 0.75rem, 1rem, 1.5rem...).

- **Tipografia**
  Duas famílias de fonte: **Inter** (primária, corpo e títulos clean), **Volkhov** (opcional, destaques e títulos com personalidade). Hierarquia clara em 5 níveis: H1 (40px Volkhov Bold), H2 (32px Inter Semibold), Body (16px Inter Regular), Small (14px Inter Regular), XSmall (12px Inter Regular). Line-height aumentado (1.6) para conforto. Pesos variam entre Regular (400), Medium (500) e Semibold (600).

- **Cores**
  Sistema OKLCH de cores com **2 paletas principais**: 
  - **Primary (Laranja Vivo)**: oklch(0.68 0.2 40) - energia, ação, marca
  - **Secondary (Argila/Urbano)**: oklch(0.28 0.07 60) - profundidade, sofisticação, contraste
  - **Base (Zinc)**: tons neutros para fundo, texto, bordas
  
  Cada cor possui 11 variações (50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950) usando OKLCH para manipulação consistente. Acessibilidade WCAG AA garantida em todos os contrastes.

- **Espaçamento e Layout**
  Escala harmônica em pixels (4, 8, 12, 16, 24, 32, 48, 64, 80). Mapeamento direto em Tailwind (p-1 = 4px, p-2 = 8px, etc). Layout responsivo mobile-first com breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px). Seções com padding 80px (desktop) / 60px (mobile).

**Plataformas:** Web responsivo (mobile-first), navegadores modernos com suporte a OKLCH e CSS Grid.

---

## 2. Paleta de Cores

### 2.1. Sistema OKLCH (Camada 1: Paletas Literais)

Cores em notação OKLCH para melhor manipulação programática e dark mode.

#### Primary (Laranja Vivo) - Energia, Ação, Marca

```css
  --primary-50: oklch(0.97 0.04 45);
  --primary-100: oklch(0.93 0.08 45);
  --primary-200: oklch(0.87 0.13 45);
  --primary-300: oklch(0.79 0.17 45);
  --primary-400: oklch(0.73 0.19 42);
  --primary-500: oklch(0.68 0.2 40); /* BASE #F97316 */
  --primary-600: oklch(0.61 0.19 38);
  --primary-700: oklch(0.51 0.16 36);
  --primary-800: oklch(0.43 0.13 35);
  --primary-900: oklch(0.37 0.1 34);
  --primary-950: oklch(0.27 0.07 33);
```

**Uso:**
- **50-100**: Fundos muito leves, hovers sutis
- **200-300**: Fundos claros, backgrounds suaves
- **400**: Texto secundário em fundos escuros
- **500**: CTA primário, branding principal, títulos destaques
- **600-700**: Botões hover, estados ativos
- **800-950**: Overlays, fundos escuros, accent profundo

---

#### Secondary (Argila/Urbano) - Profundidade, Sofisticação

```css
  --secondary-50: oklch(0.93 0.01 60);
  --secondary-100: oklch(0.86 0.02 60);
  --secondary-200: oklch(0.77 0.04 60);
  --secondary-300: oklch(0.63 0.06 60);
  --secondary-400: oklch(0.48 0.07 60);
  --secondary-500: oklch(0.28 0.07 60); /* BASE #451A03 */
  --secondary-600: oklch(0.23 0.06 60);
  --secondary-700: oklch(0.19 0.05 60);
  --secondary-800: oklch(0.15 0.04 60);
  --secondary-900: oklch(0.12 0.02 60);
  --secondary-950: oklch(0.09 0.01 60);
```

**Uso:**
- **50-200**: Fundos sutis com identidade
- **300-400**: Tons intermediários, cards suaves
- **500-700**: Texto em fundos claros, CTAs secundárias, overlays
- **800-950**: Fundos escuros, footer, overlays profundos, dark mode

---

### 2.2. Tokens Semânticos (Camada 2: shadcn/ui)

Estrutura semantic seguindo padrão shadcn/ui para facilitar reutilização e dark mode.

```css
/* Light Mode */
:root {
  --background: theme("colors.zinc.50");
  --foreground: theme("colors.zinc.900");
  
  --card: var(--color-white);
  --card-foreground: theme("colors.zinc.900");
  
  --primary: var(--primary-500);
  --primary-foreground: var(--color-white);
  
  --secondary: var(--secondary-500);
  --secondary-foreground: var(--color-white);
  
  --accent: var(--primary-100);
  --accent-foreground: theme("colors.zinc.900");
  
  --muted: theme("colors.zinc.100");
  --muted-foreground: theme("colors.zinc.500");
  
  --destructive: oklch(0.577 0.245 27.325); /* Vermelho */
  --destructive-foreground: var(--color-white);
  
  --border: theme("colors.zinc.200");
  --input: theme("colors.zinc.300");
  --ring: var(--primary-500);
  
  --radius: 0.625rem; /* 10px */
}

/* Dark Mode */
.dark {
  --background: theme("colors.zinc.950");
  --foreground: theme("colors.zinc.100");
  
  --card: theme("colors.zinc.900");
  --card-foreground: theme("colors.zinc.100");
  
  --primary: var(--primary-400);
  --primary-foreground: theme("colors.zinc.950");
  
  --secondary: var(--secondary-400);
  --secondary-foreground: var(--color-white);
  
  --accent: theme("colors.zinc.800");
  --accent-foreground: theme("colors.zinc.100");
  
  --muted: theme("colors.zinc.800");
  --muted-foreground: theme("colors.zinc.400");
  
  --border: theme("colors.zinc.800");
  --input: theme("colors.zinc.700");
  --ring: var(--primary-400);
}
```

**Tokens:**
- **background/foreground**: Cores de fundo e texto principal
- **card**: Componentes card, modais, popovers
- **primary/secondary**: CTAs, botões principais
- **accent**: Destaques, highlights
- **muted**: Texto secundário, placeholders
- **destructive**: Ações destrutivas (delete, remove)
- **border/input**: Bordas, campos de input
- **ring**: Focus rings, outlines
- **radius**: Border-radius padrão

---

### 2.3. Paleta Expandida (Cores Adicionais)

```css
/* Estados e Feedback */
--success: oklch(0.6 0.15 142);      /* Verde sucesso */
--success-soft: oklch(0.9 0.05 142);

--warning: oklch(0.78 0.15 71);      /* Âmbar aviso */
--warning-soft: oklch(0.95 0.08 71);

--info: oklch(0.5 0.12 260);         /* Azul info */
--info-soft: oklch(0.9 0.04 260);

/* Charts (dados e gráficos) */
--chart-1: var(--primary-500);
--chart-2: var(--secondary-700);
--chart-3: var(--primary-300);
--chart-4: var(--secondary-400);
--chart-5: theme("colors.zinc.400");
```

---

## 3. Tipografia

### 3.1. Famílias de Fonte

**Inter** (primária)
- Google Fonts: Weights 100-900, Widths 14-32
- Uso: Corpo, H2, Small, inputs, UI
- Fallback: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

**Volkhov** (destaques, opcional)
- Google Fonts: Weights 400, 700
- Uso: H1 com personalidade, seções destaque
- Fallback: serif

### 3.2. Escala Tipográfica

| Elemento | Tamanho | Weight | Linha | Uso |
|----------|---------|--------|-------|-----|
| **H1** | 40px | 700 (Volkhov) | 1.2 | Títulos hero, seções principais |
| **H2** | 32px | 600 (Inter) | 1.4 | Títulos de seção |
| **H3** | 24px | 600 (Inter) | 1.4 | Subtítulos, cards |
| **Body** | 16px | 400 (Inter) | 1.6 | Texto principal, parágrafos |
| **Small** | 14px | 400 (Inter) | 1.5 | Labels, descrições |
| **XSmall** | 12px | 400 (Inter) | 1.4 | Metadata, timestamps |

### 3.3. Implementação

```css
/* Em Tailwind config ou CSS global */
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Volkhov:ital,wght@0,400;0,700;1,400;1,700&display=swap');

/* Classes Tailwind */
.text-h1 { @apply text-4xl font-bold leading-tight; }
.text-h2 { @apply text-3xl font-semibold leading-snug; }
.text-body { @apply text-base leading-relaxed; }
.text-small { @apply text-sm leading-relaxed; }
```

---

## 4. Componentes Essenciais (shadcn/ui + Customização)

### 4.1. Button

Usa `createTheme` do Flowbite ou componentes shadcn customizados.

**Variantes:**

| Variante | Fundo | Texto | Uso |
|----------|-------|-------|-----|
| **default** | primary-500 | white | CTA principal, ação crítica |
| **secondary** | secondary-500 | white | Ações secundárias |
| **outline** | transparent | primary-500 | Links formatados como botão |
| **ghost** | transparent | foreground | Ações leves, contextuais |
| **destructive** | destructive | white | Ações destrutivas |

**Estados:**
- Default: cor base + shadow-sm
- Hover: tom mais escuro + shadow-md
- Active: tom mais profundo + scale-95
- Disabled: opacity-50 + cursor-not-allowed
- Focus: ring-2 ring-offset-2

---

### 4.2. Card

```jsx
<Card>
  <CardHeader>
    <CardTitle>Titulo</CardTitle>
    <CardDescription>Descrição</CardDescription>
  </CardHeader>
  <CardContent>Conteúdo</CardContent>
  <CardFooter>Rodapé (opcional)</CardFooter>
</Card>
```

**Estilos:**
- Fundo: `background` (light) ou `card` (dark)
- Borda: 1px solid `border`
- Border-radius: `rounded-lg` (10px)
- Shadow: `shadow-sm` padrão
- Hover: `shadow-md` + `scale-105` (opcional)

---

### 4.3. Input / Textarea

```jsx
<Input 
  placeholder="Digite aqui..."
  className="h-10 rounded-md border-input bg-background"
/>
```

**Estilos:**
- Borda: 1px solid `input`
- Focus: `ring-2 ring-ring`
- Background: `background`
- Text: `foreground`

---

### 4.4. Alert / Alert Dialog

```jsx
<Alert variant="destructive">
  <AlertTitle>Atenção</AlertTitle>
  <AlertDescription>Mensagem de alerta...</AlertDescription>
</Alert>
```

**Variantes:**
- `default`: muted background
- `destructive`: red background + text

---

## 5. Espaçamento e Layout

### 5.1. Escala de Espaçamento

Mapeamento direto em Tailwind (baseado em 4px):

| Valor | Pixels | Tailwind | Uso |
|-------|--------|----------|-----|
| 1 | 4px | p-1, gap-1 | Muito pequeno |
| 2 | 8px | p-2, gap-2 | Pequeno |
| 3 | 12px | p-3, gap-3 | Pequeno-médio |
| 4 | 16px | p-4, gap-4 | Médio (padrão) |
| 6 | 24px | p-6, gap-6 | Médio-grande |
| 8 | 32px | p-8, gap-8 | Grande |
| 12 | 48px | p-12, gap-12 | Muito grande |
| 16 | 64px | p-16, gap-16 | Extra grande |
| 20 | 80px | p-20, gap-20 | Seções |

### 5.2. Padding de Seções

- **Desktop**: `py-20` (80px) ou `py-16` (64px)
- **Tablet**: `py-12` (48px)
- **Mobile**: `py-8` (32px) ou `py-10` (40px)

### 5.3. Breakpoints

```css
/* Tailwind padrão */
sm:  640px   /* Mobile maior */
md:  768px   /* Tablet portrait */
lg:  1024px  /* Desktop pequeno */
xl:  1280px  /* Desktop */
2xl: 1536px  /* Desktop grande */
```

---

## 6. Border Radius

```css
--radius: 0.625rem;        /* 10px padrão (shadcn) */
--radius-sm: 0.375rem;     /* 6px */
--radius-md: 0.5rem;       /* 8px */
--radius-lg: 0.625rem;     /* 10px */
--radius-xl: 0.75rem;      /* 12px */
--radius-2xl: 1.375rem;    /* 22px */
--radius-3xl: 1.875rem;    /* 30px */
```

Aplicação:
```jsx
<div className="rounded-lg">         {/* 10px */}
<div className="rounded-xl">         {/* 12px */}
<Button className="rounded-full">   {/* 999px - pill */}
```

---

## 7. Sombras

```css
/* Tailwind padrão */
shadow-sm:     0 1px 2px rgba(0,0,0,0.05)
shadow-md:     0 4px 6px rgba(0,0,0,0.1)
shadow-lg:     0 10px 15px rgba(0,0,0,0.1)
shadow-xl:     0 20px 25px rgba(0,0,0,0.1)
shadow-2xl:    0 25px 50px rgba(0,0,0,0.1)
```

**Uso:**
- Cards: `shadow-sm` padrão, `shadow-md` on hover
- Modais: `shadow-lg`
- Dropdowns: `shadow-md`

---

## 8. Transições e Animações

### 8.1. Transições

```css
/* Padrão */
transition-all duration-300

/* Específicas */
transition-colors duration-200     /* Apenas cores, mais rápido */
transition-transform duration-300  /* Apenas transform */
transition-opacity duration-200    /* Apenas opacity */
```

### 8.2. Animações Base

```css
/* Fade in */
opacity-0 → opacity-100 (300ms ease-in-out)

/* Slide in */
transform translate-y-4 → translate-y-0 (300ms)

/* Scale */
scale-95 → scale-100 (200ms)

/* Pulse (badges, novo) */
opacity-100 ↔ opacity-50 (2s infinite)
```

---

## 9. Dark Mode

Suportado nativamente via classe `.dark` no HTML.

```jsx
// Ativar dark mode
<html className="dark">
  
// Componente com dark mode
<div className="bg-background text-foreground">
  {/* Muda automaticamente com .dark */}
</div>
```

**Tokens Escuros:**
```css
.dark {
  --background: theme("colors.zinc.950");
  --foreground: theme("colors.zinc.100");
  --card: theme("colors.zinc.900");
  --primary: var(--primary-400);  /* Subir 1 tom */
  --secondary: var(--secondary-400);
}
```

---

## 10. Stack Técnico

- **Framework:** React 18+ (Vite/CRA)
- **Styling:** Tailwind CSS v4 (OKLCH support nativo)
- **Components:** shadcn/ui (headless, customizável)
- **Tipografia:** Google Fonts (Inter + Volkhov)
- **Ícones:** Lucide React
- **Cores:** Sistema OKLCH em CSS custom properties
- **Dark Mode:** Class-based (`dark:` prefix)
- **Build:** Vite ou Next.js

### 10.1. Estrutura de Arquivos

```
src/
├── styles/
│   ├── colors.css          /* Variáveis OKLCH e tokens shadcn */
│   ├── globals.css         /* Tailwind imports + base layer */
│   └── animations.css      /* Keyframes customizadas */
├── components/
│   ├── ui/                 /* shadcn/ui components */
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── input.jsx
│   │   └── ...
│   └── custom/             /* Componentes do projeto */
│       ├── HeroSection.jsx
│       ├── ProjectCard.jsx
│       └── ...
├── theme/
│   └── tokens.json         /* Design tokens exportáveis */
└── app.jsx                 /* Entry point */
```

---

## 11. Exemplos de Uso

### 11.1. Botão Primário

```jsx
import { Button } from "@/components/ui/button";

<Button>
  Doar Agora
</Button>

/* Renderizado como */
<button className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
  Doar Agora
</button>
```

### 11.2. Card com Imagem

```jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

<Card>
  <CardHeader>
    <img src="project.jpg" alt="Projeto" className="w-full rounded-lg" />
  </CardHeader>
  <CardContent>
    <CardTitle>Nome do Projeto</CardTitle>
    <p className="text-sm text-muted-foreground">Descrição...</p>
  </CardContent>
</Card>
```

### 11.3. Section com Padding

```jsx
<section className="py-20 bg-background">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-semibold text-foreground mb-8">
      Nossos Projetos
    </h2>
    {/* Conteúdo */}
  </div>
</section>
```

### 11.4. Dark Mode Support

```jsx
<div className="bg-background text-foreground">
  <h1 className="dark:text-primary-400">Título</h1>
  <p className="text-muted-foreground">Texto secundário</p>
</div>
```

---

## 12. Referência Rápida de Cores

### Light Mode

| Token | Cor | Uso |
|-------|-----|-----|
| `--primary-500` | Laranja Vivo | CTA, branding |
| `--secondary-500` | Argila (#451A03) | Secundário |
| `--background` | Zinc-50 | Fundo página |
| `--card` | White | Cards, modais |
| `--foreground` | Zinc-900 | Texto principal |
| `--muted-foreground` | Zinc-500 | Texto secundário |

### Dark Mode

| Token | Cor | Uso |
|-------|-----|-----|
| `--primary-400` | Laranja (tom mais claro) | CTA escura |
| `--secondary-400` | Argila (tom claro) | Secundário |
| `--background` | Zinc-950 | Fundo página |
| `--card` | Zinc-900 | Cards, modais |
| `--foreground` | Zinc-100 | Texto principal |

---

## 13. Acessibilidade

### WCAG AA Compliance

✅ Contraste mínimo 4.5:1 entre texto e fundo
✅ Focus rings visíveis em todos os elementos interativos
✅ Estados disabled com visual claro
✅ Suporte a teclado em componentes
✅ Labels associados a inputs
✅ Alt text em imagens

### Checklist

- [ ] Testar com Lighthouse (Accessibility score ≥ 90)
- [ ] Validar contraste com WebAIM
- [ ] Testar navegação com teclado (Tab, Enter, Esc)
- [ ] Verificar screen reader compatibility
- [ ] Testar dark mode visibility

---

## 14. Checklist de Implementação

- [ ] Importar `colors.css` com variáveis OKLCH
- [ ] Instalar shadcn/ui components necessários
- [ ] Configurar Tailwind v4 com OKLCH support
- [ ] Importar Google Fonts (Inter + Volkhov)
- [ ] Criar componentes base reutilizáveis
- [ ] Implementar dark mode
- [ ] Testar acessibilidade (WCAG AA)
- [ ] Testar responsividade (breakpoints)
- [ ] Documentar tokens customizados
- [ ] Setup de animações base
- [ ] Review com time de design

---

## 15. Referências

- **Tailwind CSS 4:** https://tailwindcss.com
- **shadcn/ui:** https://ui.shadcn.com
- **OKLCH Colors:** https://oklch.com
- **Google Fonts:** https://fonts.google.com
- **Lucide React:** https://lucide.dev/
- **WCAG 2.1:** https://www.w3.org/WAI/WCAG21/quickref

---


