# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (uses Turbopack for faster builds)
- **Production build**: `npm run build`
- **Start production**: `npm start`
- **Linting**: `npm run lint`

## Project Architecture

This is a Next.js 15 App Router project with TypeScript, built as a SaaS landing page template using Shadcn UI components and Tailwind CSS.

### Core Structure
- **App Router**: Uses Next.js 15 App Router (`app/` directory)
- **Component-based**: Modular landing page sections in `/components`
- **Shadcn UI Integration**: UI components in `/components/ui` with configured components.json
- **Theme Support**: Dark/light mode via next-themes with system preference detection

### Component Architecture
The main page (`app/page.tsx`) orchestrates landing page sections in this order:
- Navbar (fixed positioning)
- Hero (primary CTA and value proposition)
- Features (product highlights)
- Pricing (subscription tiers)
- FAQ (common questions)
- Testimonials (social proof)
- CTA Banner (secondary conversion)
- Footer (links and info)

### Key Dependencies
- **UI Framework**: Radix UI primitives with Shadcn UI styling
- **Animations**: Framer Motion ("motion" package) and tailwindcss-animate
- **Icons**: Lucide React (configured in components.json)
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Font**: Geist font family from Google Fonts

### Styling System
- **CSS Variables**: Theme colors defined in `app/globals.css` with HSL values
- **Component Variants**: Uses class-variance-authority for component styling
- **Responsive Design**: Custom `xs` breakpoint (375px) plus standard Tailwind breakpoints
- **Color Scheme**: Neutral base colors with CSS variable theming

### TypeScript Configuration
- Strict mode enabled with path mapping (@/ alias for root)
- Next.js 15 compatible with React 19
- ESLint integration with Next.js config

### File Organization
```
/app            - Next.js App Router pages and layouts
/components     - Reusable UI components
  /navbar       - Navigation components
  /ui           - Shadcn UI base components
/lib            - Utility functions (utils.ts with cn helper)
/public         - Static assets and favicon variants
```

### Customization Notes
- Landing page content is template-based and ready for customization
- Component props and styling use Shadcn UI patterns
- Animations and interactions use Motion library
- All images and content should be replaced with actual brand assets