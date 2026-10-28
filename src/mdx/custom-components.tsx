import type { ComponentProps } from 'react'
import type { MDXComponents } from 'mdx/types'

import { Hero as BuiltinHero } from '@/components/mdx/rich-content'

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  THIS FILE IS YOURS.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  Register your own components here to use them in any `.mdx` page — no core
 *  files to touch, and nothing here is overwritten when you update Thally.
 *
 *  Anything you add is merged on top of Thally's built-in components, so you can:
 *    • add brand-new components (e.g. <PricingTable/>, <Roadmap/>), and
 *    • override a built-in by using the same key (e.g. `Note`, `Card`).
 *
 *  Example — a simple component you can use as `<Highlight>text</Highlight>`:
 *
 *    import type { ReactNode } from 'react'
 *
 *    function Highlight({ children }: { children: ReactNode }) {
 *      return (
 *        <mark className="rounded bg-accent/15 px-1 text-foreground">{children}</mark>
 *      )
 *    }
 *
 *    export const customComponents: MDXComponents = {
 *      Highlight,
 *    }
 *
 *  Components can be server or client components, import anything, and take
 *  props from MDX (`<PricingTable plan="pro" />`). See
 *  `src/components/mdx/rich-content.tsx` for how the built-ins are written.
 */

/**
 * The homepage hero, with this page laid out as one column, as standard docs
 * pages are: no space above the title but the page's own padding, a subtitle
 * that wraps evenly, and text, tables, cards and pictures all the same width.
 * The rules apply only where the hero is, which is the homepage alone.
 */
const HOME_LAYOUT = `
  article.thally-docs-article { margin-top: 0 !important; max-width: 44rem; }
  article.thally-docs-article section.thally-docs-hero { padding-top: 0; }
  article.thally-docs-article .thally-docs-hero-copy { max-width: none; text-wrap: balance; }
  article.thally-docs-article .thally-docs-hero p { max-width: none; }
  article.thally-docs-article .thally-docs-hero img { border-radius: 11px; border: 1px solid color-mix(in oklab, currentColor 14%, transparent); }
`

function Hero(props: ComponentProps<typeof BuiltinHero>) {
  return (
    <>
      <style>{HOME_LAYOUT}</style>
      <BuiltinHero {...props} />
    </>
  )
}

export const customComponents: MDXComponents = {
  Hero,
}
