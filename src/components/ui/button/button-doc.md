# Button Component - shadcn Customizado

Componente Button completamente customizado baseado em shadcn/ui, seguindo diretrizes de design do projeto com Tailwind CSS 4 e tokens OKLCH.

---

## 🎨 Variações

### 1. Primary (Laranja Vivo)

**Padrão**: Fundo sólido laranja para máximo destaque.

```jsx
import { Button } from "@/components/ui/button"
import { Heart } from 'lucide-react';

// Básico
<Button variant="primary">
  Donate Now
</Button>

// Com ícone esquerdo
<Button variant="primary" iconLeft={<Heart  size={20} />}>
  Donate Now
</Button>

// Com ícone direito
<Button variant="primary" iconRight={<ArrowRight size={20} />}>
  Continue
</Button>

// Tamanhos
<Button variant="primary" size="xs">Extra Small</Button>
<Button variant="primary" size="sm">Small</Button>
<Button variant="primary" size="md">Medium (padrão)</Button>
<Button variant="primary" size="lg">Large</Button>
<Button variant="primary" size="xl">Extra Large</Button>

// Icon only
<Button variant="primary" size="icon" iconLeft={<Heart weight="fill" />} />

// Rounded variants
<Button variant="primary" rounded="default">Normal</Button>
<Button variant="primary" rounded="lg">Mais arredondado</Button>
<Button variant="primary" rounded="full">Pill</Button>

// Loading state
<Button variant="primary" isLoading loadingIndicator={<Spinner />}>
  Loading...
</Button>

// Disabled
<Button variant="primary" disabled>
  Disabled
</Button>
```

**Cores (OKLCH):**
- Default: `oklch(0.68 0.2 40)` - Laranja vivo
- Hover: `oklch(0.68 0.2 40) / 90%` - 90% opacidade
- Active: `oklch(0.68 0.2 40) / 80%` - 80% opacidade
- Disabled: `oklch(0.68 0.2 40) / 50%` - 50% opacidade

---

### 2. Primary Outlined (Laranja Outlined)

**Variação**: Borda laranja com fundo transparente.

```jsx
// Básico
<Button variant="primary-outline">
  Learn More
</Button>

// Com ícone
<Button variant="primary-outline" iconLeft={<Info size={20} />}>
  Learn More
</Button>

// Diferentes tamanhos
<Button variant="primary-outline" size="lg">
  Large Outline
</Button>

// Rounded
<Button variant="primary-outline" rounded="full">
  Pill Outline
</Button>
```

**Características:**
- Borda: `border-2` em primary-500
- Fundo: Transparente
- Hover: `bg-primary / 10%` (muito suave)
- Active: `bg-primary / 20%`
- Disabled: Borda + texto em 50% opacidade

---

### 3. Secondary (Argila/Urbano)

**Padrão**: Fundo sólido argila para sofisticação.

```jsx
// Básico
<Button variant="secondary">
  Secondary Action
</Button>

// Com ícone
<Button variant="secondary" iconLeft={<Settings size={20} />}>
  Settings
</Button>

// Tamanhos
<Button variant="secondary" size="sm">Small Secondary</Button>
<Button variant="secondary" size="lg">Large Secondary</Button>
```

**Cores (OKLCH):**
- Default: `oklch(0.24 0.06 30.88)` - Argila profunda
- Hover: `oklch(0.24 0.06 30.88) / 90%`
- Active: `oklch(0.24 0.06 30.88) / 80%`
- Disabled: `oklch(0.24 0.06 30.88) / 50%`

---

### 4. Secondary Outlined (Argila Outlined)

**Variação**: Borda argila com fundo transparente.

```jsx
// Básico
<Button variant="secondary-outline">
  Secondary Outline
</Button>

// Com ícone
<Button variant="secondary-outline" iconLeft={<File size={20} />}>
  View Document
</Button>

// Rounded pill
<Button variant="secondary-outline" rounded="full">
  Pill Secondary
</Button>
```

**Características:**
- Borda: `border-2` em secondary-500
- Fundo: Transparente
- Hover: `bg-secondary / 10%` (muito suave)
- Active: `bg-secondary / 20%`

---

## 📏 Sizes

| Size | Height | Padding | Font Size | Uso |
|------|--------|---------|-----------|-----|
| **xs** | 32px | px-3 | text-xs | Botões muito pequenos |
| **sm** | 36px | px-3 | text-sm | Botões pequenos |
| **md** | 40px | px-4 | text-base | **Padrão** |
| **lg** | 48px | px-8 | text-base | Botões grandes |
| **xl** | 56px | px-10 | text-lg | Botões extra grandes |
| **icon** | 40px | 40px (quadrado) | - | Apenas ícone |

---

## 🔄 Rounded Variants

| Variant | Border Radius | Uso |
|---------|---------------|-----|
| **default** | 10px (rounded-md) | Padrão |
| **lg** | 12px (rounded-lg) | Um pouco mais arredondado |
| **full** | 999px (rounded-full) | Pill/badge shape |
| **sm** | 6px (rounded-sm) | Mais quadrado |

---

## 💡 Exemplos Práticos

### 1. Hero Section

```jsx
import { Button } from "@/components/ui/button"

import { Heart,ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="py-20">
      <h1 className="text-4xl font-bold mb-4">
        Small changes make a big impact
      </h1>
      
      <div className="flex gap-4 mt-8">
        {/* CTA Principal */}
        <Button 
          variant="primary" 
          size="lg"
          iconLeft={<Heart weight="fill" size={20} />}
        >
          Donate Now
        </Button>

        {/* CTA Secundária */}
        <Button 
          variant="secondary-outline" 
          size="lg"
          iconRight={<ArrowRight size={20} />}
        >
          Learn More
        </Button>
      </div>
    </section>
  )
}
```

### 2. Form com Botões

```jsx
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function DonationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // API call
      await submitDonation()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input 
        type="number" 
        placeholder="Amount"
        className="w-full px-4 py-2 border rounded-md"
      />
      
      {/* Botão primário com loading */}
      <Button 
        variant="primary"
        size="lg"
        
        isLoading={isSubmitting}
        loadingIndicator={<Spinner size="sm" />}
        type="submit"
      >
        {isSubmitting ? "Processing..." : "Donate"}
      </Button>

      {/* Botão secundário para cancelar */}
      <Button 
        variant="secondary-outline"
        size="md"
        
        type="reset"
      >
        Clear Form
      </Button>
    </form>
  )
}
```

### 3. Card com Botões

```jsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Share2 } from "lucide-react"

export function ProjectCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Nome do Projeto</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Descrição do projeto...
        </p>

        {/* Barra de progresso */}
        <div className="w-full bg-zinc-200 rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full"
            style={{ width: '65%' }}
          />
        </div>

        {/* Botões */}
        <div className="flex gap-2">
          <Button 
            variant="primary" 
            size="sm"
            iconLeft={<Heart weight="fill" size={16} />}
            className="flex-1"
          >
            Donate
          </Button>

          <Button 
            variant="secondary-outline"
            size="sm"
            iconLeft={<Share2 size={16} />}
            className="flex-1"
          >
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
```

### 4. Button Showcase

```jsx
import { Button } from "@/components/ui/button"
import { Settings, Trash2, Eye } from "lucide-react"

export function ButtonShowcase() {
  return (
    <div className="space-y-8 p-8">
      {/* Primary Variants */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Primary</h3>
        <div className="flex gap-2 flex-wrap">
          <Button variant="primary">Primary</Button>
          <Button variant="primary" iconLeft={<Settings size={20} />}>
            With Icon
          </Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
          <Button variant="primary" isLoading>
            Loading
          </Button>
        </div>
      </div>

      {/* Primary Outline */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Primary Outline</h3>
        <div className="flex gap-2 flex-wrap">
          <Button variant="primary-outline">Primary Outline</Button>
          <Button variant="primary-outline" iconRight={<Eye size={20} />}>
            View Details
          </Button>
          <Button variant="primary-outline" disabled>
            Disabled
          </Button>
        </div>
      </div>

      {/* Secondary Variants */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Secondary</h3>
        <div className="flex gap-2 flex-wrap">
          <Button variant="secondary">Secondary</Button>
          <Button variant="secondary" iconLeft={<Settings size={20} />}>
            Settings
          </Button>
          <Button variant="secondary" disabled>
            Disabled
          </Button>
        </div>
      </div>

      {/* Secondary Outline */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Secondary Outline</h3>
        <div className="flex gap-2 flex-wrap">
          <Button variant="secondary-outline">Secondary Outline</Button>
          <Button variant="secondary-outline" iconLeft={<Trash2 size={20} />}>
            Delete
          </Button>
          <Button variant="secondary-outline" disabled>
            Disabled
          </Button>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Sizes</h3>
        <div className="flex gap-2 flex-wrap items-center">
          <Button variant="primary" size="xs">XS</Button>
          <Button variant="primary" size="sm">SM</Button>
          <Button variant="primary" size="md">MD</Button>
          <Button variant="primary" size="lg">LG</Button>
          <Button variant="primary" size="xl">XL</Button>
          <Button variant="primary" size="icon" iconLeft={<Settings size={20} />} />
        </div>
      </div>

      {/* Rounded */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Rounded Variants</h3>
        <div className="flex gap-2 flex-wrap">
          <Button variant="primary" rounded="sm">Sm</Button>
          <Button variant="primary" rounded="default">Default</Button>
          <Button variant="primary" rounded="lg">Lg</Button>
          <Button variant="primary" rounded="full">Full</Button>
        </div>
      </div>

      {/* Full Width */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Full Width</h3>
        <Button variant="primary" size="lg" className="w-full">
          Full Width Button
        </Button>
      </div>
    </div>
  )
}
```

### 5. Icon Only Buttons

```jsx
import { Button } from "@/components/ui/button"
import { Heart, Settings, Trash2, Share2 } from "lucide-react"

export function IconButtons() {
  return (
    <div className="flex gap-4">
      {/* Primary icon */}
      <Button 
        variant="primary" 
        size="icon" 
        iconLeft={<Heart weight="fill" size={20} />}
        title="Like"
      />

      {/* Secondary icon */}
      <Button 
        variant="secondary" 
        size="icon" 
        iconLeft={<Settings size={20} />}
        title="Settings"
      />

      {/* Outlined icon */}
      <Button 
        variant="primary-outline" 
        size="icon" 
        iconLeft={<Share2 size={20} />}
        title="Share"
      />

      {/* Ghost style */}
      <Button 
        variant="ghost" 
        size="icon" 
        iconLeft={<Trash2 size={20} />}
        title="Delete"
      />
    </div>
  )
}
```

---

## 🔧 Props

```jsx
<Button
  // Variantes de estilo
  variant="primary"                    // primary | primary-outline | secondary | secondary-outline | destructive | outline | ghost | link
  
  // Tamanho
  size="md"                           // xs | sm | md | lg | xl | icon
  
  // Rounded style
  rounded="default"                   // default | lg | full | sm
  
  // Ícones
  iconLeft={<Heart />}               // Ícone à esquerda
  iconRight={<Arrow />}              // Ícone à direita
  
  // Loading
  isLoading={false}                  // Estado de carregamento
  loadingIndicator={<Spinner />}     // Spinner customizado
  
  // Estados
  disabled={false}                   // Desabilita o botão
  
  // shadcn props
  asChild={false}                    // Renderizar como Slot (ex: Link)
  
  // HTML attributes
  className="custom-class"           // Classes Tailwind adicionais
  onClick={handleClick}              // Handler de click
  type="button"                      // button | submit | reset
  
  // Conteúdo
  children="Button Text"             // Texto do botão
/>
```

---

## 🎯 Variantes Disponíveis

| Variante | Uso | Exemplo |
|----------|-----|---------|
| **primary** | CTA principal, ação crítica | "Donate Now" |
| **primary-outline** | Link destacado, ação outline | "Learn More" |
| **secondary** | Ação secundária | "Share" |
| **secondary-outline** | Link suave, ação leve | "View Details" |
| **destructive** | Ação destrutiva (delete) | "Delete Account" |
| **outline** | Padrão shadcn | - |
| **ghost** | Sem estilo, apenas hover | - |
| **link** | Link formatado | - |

---

## 🌙 Dark Mode

O componente suporta dark mode automaticamente via tokens shadcn:

```jsx
// Light mode
<Button variant="primary">
  Donate          {/* Laranja vivo */}
</Button>

// Dark mode (classe .dark no html)
<Button variant="primary">
  Donate          {/* Laranja mais suave para dark */}
</Button>
```

Os tokens `--primary`, `--primary-foreground`, `--secondary`, etc. mudam automaticamente com `.dark`.

---

## ♿ Acessibilidade

✅ **Focus Visible**: Ring visível com `ring-2 ring-ring`
✅ **Disabled**: Pointer events removido, opacity 50%
✅ **Keyboard**: Suporte completo para Tab e Enter
✅ **Screen Reader**: Mantém semântica de `<button>` ou `<a>`
✅ **Contrast**: WCAG AA compliant com todas as variantes

---

## 📦 Instalação

### 1. Copiar arquivo

```bash
# Copiar para components/ui/
cp Button-shadcn.jsx src/components/ui/button.jsx
```

### 2. Verificar dependências

Certifique-se de ter instalado:
```bash
npm install class-variance-authority clsx tailwind-merge @radix-ui/react-slot
```

### 3. Importar cn() utils

Certifique-se de ter `@/lib/utils.ts`:
```ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### 4. Usar em seu projeto

```jsx
import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <Button variant="primary" size="lg">
      Click me
    </Button>
  )
}
```

---

## 🎨 Customização

### Adicionar nova variante

```jsx
const buttonVariants = cva("...", {
  variants: {
    variant: {
      // ... existentes
      custom: "bg-blue-500 text-white hover:bg-blue-600",
    },
  },
})

// Usar
<Button variant="custom">Custom Button</Button>
```

### Combinar props customizadas

```jsx
// Adicionar mais spacing
<Button variant="primary" className="px-10">
  Extra Padding
</Button>

// Mudar altura
<Button variant="primary" className="h-16">
  Taller Button
</Button>

// Full width
<Button variant="primary" className="w-full">
  Full Width
</Button>
```

---

## 🚀 Performance

- Componente memoizado com `forwardRef`
- Usa CVA (Class Variance Authority) para otimização
- Zero dependências desnecessárias
- Renderização eficiente com ícones opcionais

---

## 📝 Checklist

- [x] Primary variant (laranja vivo)
- [x] Primary outlined variant
- [x] Secondary variant (argila)
- [x] Secondary outlined variant
- [x] Suporte a ícones (left/right)
- [x] Múltiplos tamanhos
- [x] Rounded variants
- [x] Loading state
- [x] Disabled state
- [x] Dark mode
- [x] Acessibilidade WCAG
- [x] TypeScript support
- [x] Documentação completa
- [x] Exemplos práticos

---

**Fim da Documentação**

Componente Button pronto para produção! 🎉