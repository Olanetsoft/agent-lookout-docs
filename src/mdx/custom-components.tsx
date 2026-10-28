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
 * pages are: a subtitle that wraps evenly, and text, tables, cards and
 * pictures all the same width. The rules apply only where the hero is, which
 * is the homepage alone. Its title has no space above it but the page's own
 * padding, once the hero's own is gone and `Page` has taken the extra gap.
 */
const HOME_LAYOUT = `
  article.thally-docs-article { max-width: 44rem; }
  article.thally-docs-article section.thally-docs-hero { padding-top: 0; }
  article.thally-docs-article .thally-docs-hero-copy { max-width: none; text-wrap: balance; }
  article.thally-docs-article .thally-docs-hero p { max-width: none; }
  article.thally-docs-article .thally-docs-hero img { border-radius: 11px; border: 1px solid color-mix(in oklab, currentColor 14%, transparent); }
`

/**
 * Every page: Thally's page wrapper spaces its children 2.5rem apart, and a
 * script with no height is its first child, so the page's content starts
 * 2.5rem lower than its padding says. This takes that gap away from the
 * element after the script only, so it does nothing once the layout changes.
 * The page's description and headings also wrap into even lines. A page asks
 * for it with `<PageLayout />` at its top, since the published site renders a
 * page through Thally's interpreter, which uses named components and not
 * MDX's `wrapper`. The homepage's `Hero` asks for it too.
 *
 * The sidebar also loses the title Thally puts above it when the site has a
 * single section: it named that section, "Documentation", above the
 * "Get started" label, so two labels that lead nowhere sat one on the other.
 * The labels of the groups stay, as on any docs site.
 */
const EVERY_PAGE = `
  .space-y-10 > script + * { margin-top: 0 !important; }
  .thally-docs-header p, .thally-docs-article h2, .thally-docs-article h3 { text-wrap: balance; }
  .thally-docs-sidebar div.shrink-0:has(> p.line-clamp-1) { display: none; }
  .thally-docs-sidebar div.shrink-0:has(> p.line-clamp-1) + nav { margin-top: 0; }
`

function PageLayout() {
  return <style>{EVERY_PAGE}</style>
}

function Hero(props: ComponentProps<typeof BuiltinHero>) {
  return (
    <>
      <PageLayout />
      <style>{HOME_LAYOUT}</style>
      <BuiltinHero {...props} />
    </>
  )
}

export const customComponents: MDXComponents = {
  Hero,
  PageLayout,
}
