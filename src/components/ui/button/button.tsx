import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none ",
  {
    variants: {
      variant: {
        /**
         * PRIMARY VARIANT
         * Laranja Vivo - Energia, Ação, Marca
         * Fundo sólido com máximo destaque
         */
        primary:
          "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 disabled:bg-primary/70",

        /**
         * PRIMARY OUTLINED
         * Laranja Vivo com borda e fundo transparente
         * Menos destaque, mais sutil
         */
        "primary-outline":
          "border-2 border-primary bg-transparent text-primary hover:bg-primary/10 active:bg-primary/20 disabled:border-primary/50 disabled:text-primary/50",

        /**
         * SECONDARY VARIANT
         * Argila/Urbano - Profundidade, Sofisticação
         * Fundo sólido, menos energético
         */
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 active:bg-secondary/80 disabled:bg-secondary/70",

        /**
         * SECONDARY OUTLINED
         * Argila com borda e fundo transparente
         * Sutileza com identidade
         */
        "secondary-outline":
          "border-2 border-secondary bg-transparent text-secondary hover:bg-secondary/10 active:bg-secondary/20 disabled:border-secondary/50 disabled:text-secondary/50",

        /**
         * DESTRUCTIVE (Padrão shadcn)
         * Vermelho para ações destrutivas
         */
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",

        /**
         * OUTLINE (Padrão shadcn)
         * Borda neutra, fundo transparente
         */
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",

        /**
         * SECONDARY (Padrão shadcn)
         * Fundo muted, menos destaque
         */
        "secondary-default":
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",

        /**
         * GHOST (Padrão shadcn)
         * Sem fundo, apenas texto e hover
         */
        ghost: "hover:bg-accent hover:text-accent-foreground",

        /**
         * LINK (Padrão shadcn)
         * Como um link formatado como botão
         */
        link: "text-primary underline-offset-4 hover:underline",
      },

      size: {
        /**
         * Extra Small
         * 4px vertical, 12px horizontal
         */
        xs: "h-8 px-3 text-xs",

        /**
         * Small
         * 8px vertical, 16px horizontal
         */
        sm: "h-9 px-3 text-sm",

        /**
         * Medium (padrão)
         * 10px vertical, 16px horizontal
         */
        md: "h-10 px-4 text-base",

        /**
         * Large
         * 12px vertical, 32px horizontal
         */
        lg: "h-12 px-8 text-base",

        /**
         * Extra Large
         * 16px vertical, 40px horizontal
         */
        xl: "h-14 px-10 text-lg",

        /**
         * Icon only
         * Quadrado para ícones isolados
         */
        icon: "h-10 w-10",
      },

      /**
       * Controla se o botão é arredondado (pill-shaped)
       */
      rounded: {
        /**
         * Default: border-radius: 0.625rem (10px)
         * Padrão shadcn
         */
        default: "rounded-md",

        /**
         * Fully rounded: border-radius: 999px
         * Estilo pill/badge
         */
        full: "rounded-full",

        /**
         * Extra rounded: border-radius: 0.75rem (12px)
         * Um pouco mais do que default
         */
        lg: "rounded-lg",

        /**
         * Small rounded: border-radius: 0.375rem (6px)
         * Mais quadrado
         */
        sm: "rounded-sm",
      },

      /**
       * Estado de carregamento
       * Desabilita e pode mostrar spinner
       */
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
      rounded: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Se true, renderiza como um elemento <a> com role="button"
   * Útil para navegação
   */
  asChild?: boolean;

  /**
   * Ícone à esquerda do texto
   * Pode ser um componente React (ex: lucide-react)
   */
  iconLeft?: React.ReactNode;

  /**
   * Ícone à direita do texto
   * Útil para setas, indicators
   */
  iconRight?: React.ReactNode;

  /**
   * Mostra estado de carregamento
   * Se true, desabilita o botão e pode renderizar spinner
   */
  isLoading?: boolean;

  /**
   * Spinner component para estado de carregamento
   * Ex: <Spinner /> do seu projeto
   */
  loadingIndicator?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      asChild = false,
      iconLeft,
      iconRight,
      isLoading = false,
      loadingIndicator,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    // Determina se o botão está desabilitado
    const isDisabled: boolean = disabled || isLoading;

    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            rounded,
            className,
          })
        )}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {/* Ícone esquerdo */}
        {isLoading && loadingIndicator ? (
          <span className="flex items-center justify-center animate-spin">
            {loadingIndicator}
          </span>
        ) : iconLeft ? (
          <span className="flex items-center justify-center flex-shrink-0 ">
            {iconLeft}
          </span>
        ) : null}

        {/* Texto (se não estiver em modo icon-only e tiver children) */}
        {size !== "icon" && children && <span>{children}</span>}

        {/* Ícone direito (não mostrar se tiver iconLeft ou em modo loading) */}
        {!isLoading && !iconLeft && iconRight ? (
          <span className="flex items-center justify-center flex-shrink-0">
            {iconRight}
          </span>
        ) : null}

        {/* Se for icon-only, mostrar o ícone centrado */}
        {size === "icon" && (iconLeft || iconRight) && !isLoading && (
          <span className="flex items-center justify-center">
            {iconLeft || iconRight}
          </span>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
