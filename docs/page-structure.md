# Section 1: Hero Carousel

## Layout Geral

- **Tipo:** Full-width carousel (100vw)
- **Estrutura:** Múltiplos slides com navegação
- **Container de conteúdo:** Max-width 1200px (centralizado)

## Configuração de Slides

### Background

- Full-width background image (cover/no-repeat)
- Dark overlay filter: rgba(0, 0, 0, 0.4) a rgba(0, 0, 0, 0.5)
- Garante legibilidade de texto sobre qualquer imagem

### Content Container

- Max-width: 1200px (centralizado)
- Padding: 80px 20px
- Alinhamento vertical: center-left
- Cor do texto: #FFFFFF (branco para contraste)

### Tipografia

#### Title (H1)
- Font-size: 48px - 56px
- Font-weight: Bold (700)

#### Supporting Text (Subtitle/Description)
- Font-size: 18px - 20px
- Font-weight: Regular (400)
- Opacity: 0.95 (ligeiramente mais suave que o título)

## Navegação do Carousel

### Dots/Indicadores (Bottom Center)

- **Posição:** Absolute bottom, centralizado horizontalmente
- **Bottom spacing:** 24px do viewport bottom
- **Estilo do dot:**
  - Width: 12px
  - Height: 12px (ou 3px para line style)
  - Border-radius: 50% (circular) ou 2px (line style)
  - Background: rgba(255, 255, 255, 0.5) (inactive)
  - Active dot: rgba(255, 255, 255, 1) ou #FFD700
  - Spacing entre dots: 12px
  - Transition: all 0.3s ease
  - Hover: scale(1.2)

## Comportamento do Carousel

- **Auto-play:** 5-7 segundos por slide (opcional)
- **Transition:** Smooth fade ou slide (0.6s ease-in-out)

## Exemplos de Conteúdo dos Slides

### Slide 1

- **Background image:** [generate] – Foto de uma roda de conversa com jovens em um centro comunitário
- **Title:** "Transformando realidades por meio da educação e da solidariedade"
- **Subtitle:** "Nossa ONG promove projetos sociais, cursos gratuitos e palestras educativas para gerar oportunidades e autonomia em comunidades vulneráveis."

### Slide 2

- **Background image:** [generate] – Sala de aula com educador(a) explicando algo em um quadro, pessoas de diferentes idades atentas
- **Title:** "Cursos e oficinas para quem quer escrever uma nova história"
- **Subtitle:** "Oferecemos formações profissionais e educativas em áreas como tecnologia, empreendedorismo, cidadania e desenvolvimento pessoal."

### Slide 3

- **Background image:** [generate] – Auditório ou espaço simples com uma palestra acontecendo, público engajado
- **Title:** "Palestras que inspiram mudanças concretas"
- **Subtitle:** "Levamos palestras e encontros educativos para escolas, empresas e comunidades, aproximando conhecimento, empatia e ação social."

## Responsividade

### Mobile (< 768px)

- Title font-size: 32px - 36px
- Subtitle font-size: 16px
- Padding: 60px 16px
- Hide arrow navigation (swipe only)
- Smaller dots: 8px

### Tablet (768px - 1024px)

- Title font-size: 40px - 44px
- Subtitle font-size: 18px
- Padding: 70px 32px

---

# Section 2: Sobre Nós · Text + Visual Grid

## Layout Geral

### Container

- Max-width: 1200px
- Centralizado
- Padding (desktop): 80px 20px
- Padding (mobile): 60px 16px

### Estrutura

- Grid com 2 colunas (desktop):
  - Coluna esquerda (texto): 45%
  - Coluna direita (imagens): 55%
- Gap entre colunas: 40-48px

### Fundo

- #FFFFFF ou #F9FAFB
- Detalhe gráfico suave lateral (brush/shape)

### Responsivo

- Tablet/Mobile:
  - Colunas empilham
  - Texto vem primeiro
  - Imagens abaixo
  - Margem inferior extra nas imagens

## Coluna Esquerda: Conteúdo Textual

### Micro-headline (opcional)

Pequeno texto sobre o título, com cor de destaque suave.

**Exemplo:** Bem-vindo(a) à nossa ONG

### Título Principal (H2)

- Desktop: 36-40px
- Mobile: 28-32px

**Título sugerido:** Sobre nós: educação, acolhimento e oportunidades reais

### Parágrafo de Introdução

- Desktop: 18px
- Mobile: 16px
- Largura máxima: 80% do container de texto

**Texto:** Somos uma organização social que acredita que a educação e a solidariedade podem transformar realidades. Atuamos com projetos sociais, cursos gratuitos e ações educativas que fortalecem a autonomia de jovens e adultos em situação de vulnerabilidade.

### Blocos de Destaque (Lista com ícones)

Cada item contém:

- Ícone à esquerda (24-28px)
- Título curto
- Descrição com 1 linha
- Espaçamento vertical: 16-20px

#### Item 1: Projetos educativos

**Título:** Projetos que geram novas histórias

**Descrição:** Criamos espaços de aprendizado, rodas de conversa e atividades que estimulam o protagonismo e o pensamento crítico nas comunidades.

#### Item 2: Cursos e oficinas

**Título:** Cursos gratuitos e oficinas práticas

**Descrição:** Oferecemos formações em tecnologia, empreendedorismo, cidadania e desenvolvimento pessoal para ampliar oportunidades de trabalho e renda.

#### Item 3: Palestras e ações em rede

**Título:** Palestras que inspiram ação

**Descrição:** Levamos conteúdo e diálogo para escolas, empresas e grupos locais, conectando conhecimento, empatia e impacto social concreto.

### CTA Secundário

Botão simples em cor de destaque (ex: verde).

- **Texto do botão:** Conheça nossos projetos
- **Ação:** Link âncora para seção Projetos/Programas

## Coluna Direita: Bloco Visual (Imagens)

### Composição Visual

- 1 imagem principal (maior)
- 1-2 imagens menores sobrepostas
- Bordas arredondadas: 8-12px
- Sombra leve: rgba(0,0,0,0.08)

### Estilo recomendado

- Pode alternar entre: colorido ou preto e branco
- Elemento gráfico orgânico de fundo
- Layout em camadas para profundidade

### Conteúdo das fotos

- [generate] rodas de conversa de debate
- [generate] oficinas / aulas
- [generate] palestras comunitárias

**Tom emocional:** acolhedor, humano, real

## Responsividade

### Tablet

- 2 colunas ainda possíveis
- Leve redução da tipografia
- Ajustes de margem

### Mobile (< 768px)

Layout empilhado:
1. Título
2. Parágrafo
3. Lista
4. Botão
5. Imagens

- Títulos: 28-32px
- Texto: 16px
- Ícones menores
- Imagens em stack simples ou leve sobreposição

## Consistência Visual com o Hero

- Mesma tipografia
- Mesma paleta
- Narrativa contínua

---

# Section 3: Credibility Metrics / Social Proof Metrics

## Layout Geral

- **Largura:** Full-width (100vw)
- **Conteúdo centralizado:** max-width: 1200px
- **Padding:**
  - Desktop: 80px 20px
  - Mobile: 60px 16px
- **Alinhamento do conteúdo:** Centralizado
- **Distribuição:** 3 a 4 métricas em linha no desktop, empilhadas no mobile

## Estilo de Fundo (Destaque Visual)

### Acessibilidade

- Contraste AA

## Título da Seção

**Exemplos:**
- Nossos Resultados em Números
- Impacto Social Medido
- O que já conquistamos juntos

## Estrutura de Métrica Individual

### Container

- **Display:** Flex ou Grid (4 colunas desktop)
- **Largura de cada métrica:** ~25% desktop, 100% mobile
- **Espaçamento:** 20px gap
- **Padding interno:** 24px
- **Alinhamento:** Centrado (texto e número)

### Tipografia

#### Número (Métrica)

- **Font-size:** 48px - 56px (desktop)
- **Font-weight:** Bold (700)
- **Cor:** Branco ou cor de destaque (#10B981)
- **Margin-bottom:** 8px

#### Texto descritivo

- **Font-size:** 16px - 18px
- **Font-weight:** Regular (400)
- **Cor:** Branco ou cinza claro
- **Line-height:** 1.5

## Exemplos de Métricas

### Métrica 1: Pessoas Impactadas

- **Número:** 5.000+
- **Descrição:** Pessoas atendidas através de nossos projetos

### Métrica 2: Cursos Oferecidos

- **Número:** 150+
- **Descrição:** Cursos e oficinas gratuitas realizados

### Métrica 3: Horas de Aprendizado

- **Número:** 25.000+
- **Descrição:** Horas de educação e desenvolvimento oferecidas

### Métrica 4: Taxa de Empregabilidade

- **Número:** 78%
- **Descrição:** Participantes que conseguiram melhorar sua situação econômica

## Responsividade

### Desktop (≥ 1024px)

- 4 colunas
- Padding: 80px 20px
- Font-size números: 56px

### Tablet (768px - 1023px)

- 2 colunas
- Padding: 80px 32px
- Font-size números: 48px

### Mobile (< 768px)

- 1 coluna
- Padding: 60px 16px
- Font-size números: 40px
- Empilhado verticalmente

---

# Section 4: Call to Action (Doações)

## Layout Geral

- **Tipo:** Full-width CTA com imagem e conteúdo
- **Estrutura:** 2 colunas (imagem + conteúdo)
- **Max-width container:** 1200px centralizado
- **Padding:**
  - Desktop: 80px 20px
  - Mobile: 60px 16px

## Coluna de Imagem

- **Posição:** Esquerda (desktop)
- **Tamanho:** 40% a 45%
- **Conteúdo:** [generate] Imagem comunitária impactante
- **Responsividade:** Mobile empilha no topo

## Coluna de Conteúdo (Texto + CTA)

### Título

- **Font-size:** 36px - 40px (desktop), 28px - 32px (mobile)
- **Font-weight:** Bold (700)
- **Cor:** #111827 ou branco
- **Margin-bottom:** 16px

**Exemplo:** "Seu apoio transforma vidas"

### Parágrafo descritivo

- **Font-size:** 18px (desktop), 16px (mobile)
- **Font-weight:** Regular (400)
- **Line-height:** 1.6
- **Margin-bottom:** 24px

### Botão CTA

- **Texto:** "Doe agora" ou "Contribua"
- **Estilo:**
  - Background: #10B981 (verde)
  - Cor do texto: Branco
  - Font-weight: Bold (700)
  - Padding: 12px 32px
  - Border-radius: 8px
  - Hover: #059669 (verde escuro) + sombra

## Responsividade

### Desktop (≥ 1024px)

- 2 colunas lado a lado
- Padding: 80px 20px

### Mobile (< 768px)

- Layout empilhado (imagem em cima)
- Padding: 60px 16px
- Texto centralizado

---

# Section 5: Programas/Projetos

## Layout Geral

- **Largura:** Full-width (100vw)
- **Container:** Max-width 1200px centralizado
- **Padding:**
  - Desktop: 80px 20px
  - Mobile: 60px 16px
- **Fundo:** #FFFFFF ou #F9FAFB

## Cabeçalho da Seção

- **Título:** "Nossos Programas e Projetos"
- **Font-size:** 32px - 40px (desktop), 28px - 32px (mobile)
- **Font-weight:** Bold (700)
- **Margin-bottom:** 48px
- **Centralizado**

## Cards de Programa

### Estrutura do Grid

- **Desktop:** 3 colunas
- **Tablet:** 2 colunas
- **Mobile:** 1 coluna
- **Gap:** 24px

### Container do Card

- **Background:** Branco (#FFFFFF)
- **Border-radius:** 12px
- **Box-shadow:** 0 4px 12px rgba(0, 0, 0, 0.08)
- **Padding:** 20px
- **Hover:** 
  - Transform: translateY(-4px)
  - Box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12)

### Ícone/Imagem

- **Tamanho:** 48px - 64px
- **Margin-bottom:** 16px

### Título do Programa

- **Font-size:** 18px - 20px
- **Font-weight:** Bold (700)
- **Color:** #111827
- **Margin-bottom:** 12px

### Descrição

- **Font-size:** 15px - 16px
- **Font-weight:** Regular (400)
- **Color:** #6B7280
- **Line-height:** 1.6
- **Margin-bottom:** 16px

### CTA do Card

- **Texto:** "Saiba mais"
- **Font-size:** 14px
- **Font-weight:** Medium (500)
- **Color:** #10B981
- **Hover:** Sublinhar

---

# Section 6: Impacto Social (Cards com Barras de Progresso)

## Layout Geral

- **Container:** Max-width 1200px centralizado
- **Padding:**
  - Desktop: 80px 20px
  - Mobile: 60px 16px
- **Fundo:** #F9FAFB ou #FFFFFF

## Título da Seção

- **Text:** "Nosso Impacto Social"
- **Font-size:** 36px - 40px (desktop)
- **Font-weight:** Bold (700)
- **Margin-bottom:** 48px
- **Centralizado**

## Cards de Impacto

### Estrutura do Card

- **Display:** Flex (2 colunas desktop)
- **Desktop:** Imagem (esquerda) + Texto (direita)
- **Mobile:** Stack vertical (imagem em cima)
- **Gap:** 32px
- **Padding:** 32px
- **Background:** Branco (#FFFFFF)
- **Border-radius:** 12px
- **Box-shadow:** 0 4px 12px rgba(0, 0, 0, 0.08)

### Coluna de Imagem

- **Tamanho:** 40% (desktop), 100% (mobile)
- **Height:** 300px (desktop), 250px (mobile)
- **Object-fit:** cover
- **Border-radius:** 8px

### Coluna de Texto

- **Tamanho:** 60% (desktop), 100% (mobile)

#### Título

- **Font-size:** 20px - 24px
- **Font-weight:** Bold (700)
- **Color:** #111827
- **Margin-bottom:** 12px

#### Descrição

- **Font-size:** 15px - 16px
- **Font-weight:** Regular (400)
- **Color:** #6B7280
- **Line-height:** 1.6
- **Margin-bottom:** 20px

#### Barra de Progresso

- **Label:** "Meta alcançada: XX%"
- **Height:** 8px
- **Background:** #E5E7EB (cinza claro)
- **Border-radius:** 4px
- **Fill color:** #10B981 (verde)
- **Margin-bottom:** 16px

#### Botão "Doar agora"

- **Posição:** Alinhado à direita, na parte inferior do bloco de texto
- **Mobile:** Centralizado após a barra de progresso
- **Estilo:**
  - Background: #10B981 (verde)
  - Texto: Branco, bold
  - Padding: 10px 20px
  - Border-radius: 999px
  - Hover: #059669 (verde escuro) + leve sombra

## Responsividade

### Desktop (≥ 1024px)

- Card em 2 colunas
- Coluna 1: imagem maior
- Coluna 2: texto, descrição e barra com boa largura
- Barra de progresso ocupando toda a linha

### Tablet (768px - 1023px)

- Continua com 2 colunas
- Imagem: ~30%, Texto: ~70%
- Redução ligeira do tamanho das fontes

### Mobile (< 768px)

- Card passa a coluna única (imagem em cima, texto embaixo)
- Barras e descrições ocupam 100% da largura
- Espaçamento vertical aumentado para legibilidade

---

# Section 7: Nossa Equipe

## Layout Geral

### Dimensões

- **Largura:** Full-width (100vw)
- **Container:** Max-width 1200px centralizado
- **Padding:**
  - Desktop: 80px 24px
  - Mobile: 60px 16px

### Fundo

- Cor: Branco (#FFFFFF) ou cinza muito claro (#F9FAFB)

## Cabeçalho da Seção

### Estrutura

- **Layout:** Flexbox
- **Justificação:** space-between (conteúdo à esquerda, link à direita)
- **Gap:** 32px
- **Margin-bottom:** 48px

### Título Principal

- **Texto:** "Nossa equipe"
- **Tag:** H2
- **Font-size:** 32px (desktop), 26px (mobile)
- **Font-weight:** Bold (700)
- **Color:** #111827
- **Margin-bottom:** 16px

### Texto de Apoio (Descrição)

- **Largura máxima:** 700px
- **Font-size:** 15px
- **Line-height:** 1.7
- **Color:** #6B7280

**Conteúdo sugerido:** "Somos um time dedicado e apaixonado por transformar vidas através da educação e da solidariedade. Cada membro traz experiência, empatia e compromisso para construir um impacto real nas comunidades que atendemos."

### Link de Ação (CTA)

- **Texto:** "Saiba mais →"
- **Posição:** 
  - Desktop: Alinhado à direita, com padding-top 60px
  - Mobile: Abaixo do texto descritivo
- **Font-size:** 14px
- **Font-weight:** Medium (500)
- **Color:** #111827
- **Hover:** #10B981 (verde)
- **Transition:** 0.2s ease

## Grid de Membros

### Layout do Grid

- **Display:** CSS Grid
- **Colunas:**
  - Desktop (≥ 1024px): 4 colunas
  - Tablet (768px - 1023px): 3 colunas
  - Mobile (480px - 767px): 2 colunas
  - Mobile extra pequeno (< 480px): 1 coluna
- **Gap:** 24px

## Card de Membro

### Container

- **Background:** #F9FAFB (cinza muito claro) ou #FFFFFF (branco)
- **Border-radius:** 12px
- **Overflow:** hidden (para arredondar a imagem)
- **Transition:** transform 0.3s ease, box-shadow 0.3s ease

### Hover Effect

- **Transform:** translateY(-4px) (elevação sutil)
- **Box-shadow:** 0 12px 24px rgba(0, 0, 0, 0.08)

## Foto do Membro

### Dimensões

- **Largura:** 100% do card
- **Altura:**
  - Desktop: 280px
  - Tablet: 260px
  - Mobile: 320px

### Estilo

- **Object-fit:** cover
- **Background-color:** #E5E7EB (placeholder)
- **Transition:** transform 0.3s ease

### Hover na Foto

- **Transform:** scale(1.05) (zoom suave)

## Informações do Membro

### Container

- **Padding:** 20px 16px
- **Background:** #FFFFFF

### Nome do Membro

- **Font-size:** 16px
- **Font-weight:** Semibold (600)
- **Color:** #111827
- **Margin-bottom:** 4px

**Exemplo:** Maria Silva

### Cargo/Função

- **Font-size:** 13px
- **Font-weight:** Regular (400)
- **Color:** #6B7280

**Exemplos:**
- Fundadora, Diretora Executiva
- Coordenador de Projetos
- Educadora Social
- Psicóloga Social

## Exemplo de Estrutura de Dados (8 membros)

### Membro 1

- **Nome:** Maria Silva
- **Cargo:** Fundadora, Diretora Executiva
- **Foto:** [generate]

### Membro 2

- **Nome:** João Santos
- **Cargo:** Coordenador de Projetos
- **Foto:** [generate]

### Membro 3

- **Nome:** Ana Costa
- **Cargo:** Educadora Social
- **Foto:** [generate]

### Membro 4

- **Nome:** Carlos Oliveira
- **Cargo:** Coordenador de Voluntários
- **Foto:** [generate]

### Membro 5

- **Nome:** Beatriz Lima
- **Cargo:** Gestora de Comunicação
- **Foto:** [generate]

### Membro 6

- **Nome:** Rafael Souza
- **Cargo:** Analista Financeiro
- **Foto:** [generate]

### Membro 7

- **Nome:** Juliana Ferreira
- **Cargo:** Psicóloga Social
- **Foto:** [generate]

### Membro 8

- **Nome:** Pedro Alves
- **Cargo:** Instrutor de Tecnologia
- **Foto:** [generate]

## Paleta de Cores

### Cores Principais

- Verde escuro: #064E3B
- Verde principal: #10B981
- Verde claro: #D1FAE5

### Cores Neutras

- Fundo claro: #F9FAFB
- Branco: #FFFFFF
- Borda: #E5E7EB

### Cores de Texto

- Texto principal: #111827
- Texto secundário: #6B7280
- Texto claro: #9CA3AF

## Tipografia

### Família de Fontes

- **Primária:** system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- **Alternativas:** Inter, Roboto, Open Sans

### Hierarquia

- Número da seção: 48px / Light (300)
- Título H2: 32px / Bold (700)
- Descrição: 15px / Regular (400)
- Nome do membro: 16px / Semibold (600)
- Cargo: 13px / Regular (400)
- Link CTA: 14px / Medium (500)

## Responsividade

### Desktop (≥ 1024px)

- Grid: 4 colunas
- Foto: 280px altura
- Padding: 80px 24px

### Tablet (768px - 1023px)

- Grid: 3 colunas
- Foto: 260px altura
- Gap reduzido: 20px

### Mobile (480px - 767px)

- Grid: 2 colunas
- Foto: 240px altura
- Padding: 60px 16px
- Título: 26px

### Mobile Extra Pequeno (< 480px)

- Grid: 1 coluna
- Foto: 320px altura
- Número da seção: 36px
- Título: 24px

## Tom Visual e Emocional

### Características

- **Minimalista:** Poucos elementos decorativos, foco nas pessoas
- **Profissional:** Alinhamentos precisos e hierarquia clara
- **Acolhedor:** Fotos humanizadas que transmitem empatia
- **Moderno:** Design limpo com transições suaves
- **Confiável:** Layout organizado e informações claras

### Diretrizes de Fotos

- **Qualidade:** Alta resolução (mínimo 800x1000px)
- **Estilo:** Fundo neutro ou levemente desfocado
- **Enquadramento:** Retrato do busto para cima
- **Expressão:** Natural, acolhedora, profissional
- **Iluminação:** Natural ou profissional

---

# Section 8: Footer

## Layout Geral

- **Largura:** Full-width (100vw)
- **Container:** Max-width 1200px centralizado
- **Padding:**
  - Desktop: 60px 20px
  - Mobile: 40px 16px
- **Background:** #111827 ou #1F2937 (cinza escuro/preto)
- **Color:** Branco ou cinza claro

## Conteúdo do Footer

### Logo

- **Posição:** Topo/Esquerda
- **Tamanho:** 40px - 50px de altura
- **Margin-bottom:** 24px

### Seções do Website

- **Tipo:** Lista de links para principais seções
- **Layout:** Colunas (2-4 colunas no desktop, 1 coluna no mobile)
- **Font-size:** 14px
- **Font-weight:** Regular (400)
- **Hover:** Color alterada para verde (#10B981)
- **Transition:** 0.2s ease

### Links Legais

#### Privacy Policy Link

- **Texto:** "Política de Privacidade"
- **Font-size:** 12px
- **Color:** #9CA3AF (cinza claro)

#### Terms and Conditions Link

- **Texto:** "Termos e Condições"
- **Font-size:** 12px
- **Color:** #9CA3AF (cinza claro)

## Responsividade

### Desktop (≥ 1024px)

- Layout completo com múltiplas colunas
- Padding: 60px 20px

### Mobile (< 768px)

- Colunas empilhadas
- Padding: 40px 16px
- Font-size reduzido

---

## Paleta de Cores Global

### Cores Principais

- Verde escuro: #064E3B
- Verde principal: #10B981
- Verde claro: #D1FAE5

### Cores Neutras

- Fundo claro: #F9FAFB
- Branco: #FFFFFF
- Borda: #E5E7EB
- Cinza médio: #6B7280
- Cinza escuro: #111827

### Cores de Fundo de Destaque

- Verde escuro: #064E3B
- Azul profundo: #1E3A8A
- Cinza escuro: #111827

## Tipografia Global

### Família de Fontes Principal

- system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- Alternativas: Inter, Roboto, Open Sans

### Escala de Tipografia

- H1: 48px - 56px (Bold 700)
- H2: 32px - 40px (Bold 700)
- H3: 24px - 28px (Bold 700)
- Body: 16px - 18px (Regular 400)
- Small: 14px - 15px (Regular 400)
- XSmall: 12px - 13px (Regular 400)

## Padrões de Padding e Spacing

### Padding das Seções

- Desktop: 80px 20px
- Tablet: 70px 32px
- Mobile: 60px 16px

### Gap entre Elementos

- Large: 48px
- Medium: 24px - 32px
- Small: 12px - 16px

## Padrões de Transição

- Standard: all 0.3s ease
- Slow: all 0.5s ease-in-out
- Fast: all 0.2s ease