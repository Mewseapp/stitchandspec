# StitchAndSpec Redesign Plan

## Context

Register: brand/editorial publication. The reader is anxious about a $500–$2,000 purchase and needs a calm expert path from project need to machine decision. The subject matter is tactile and mechanical: fabric, thread, stitches, hoops, bobbins, needles, presser feet, source-backed research, and machine photos.

## First design plan

### Palette / color strategy

Color strategy: **restrained publication body + one committed workbench color zone**. Warmth should come from thread/fabric accents and imagery slots, not from a beige body.

Use OKLCH tokens, not hex-first design:

- `--ink`: `oklch(20% 0.035 245)` — deep blue-black, like carbon paper/manual ink.
- `--muted`: `oklch(40% 0.035 245)` — readable secondary copy.
- `--bg`: `oklch(97.5% 0 0)` — true neutral off-white, explicitly not cream/sand/beige.
- `--surface`: `oklch(99% 0 0)` — clean page surface.
- `--thread-blue`: `oklch(34% 0.085 236)` — committed saturated indigo-blue for brand surfaces.
- `--thread-red`: `oklch(46% 0.12 29)` — bobbin/thread accent used sparingly.
- `--fabric-green`: `oklch(54% 0.07 154)` — material accent for useful highlights.
- `--stitch-line`: `oklch(82% 0.018 240)` — subtle construction lines.

### Type system

Brand-voice words: tactile, methodical, reassuring.

Reflex fonts rejected: Inter, Fraunces, Newsreader, Lora, Cormorant, IBM Plex, Space Grotesk, DM Sans/Serif, Instrument.

Chosen type:

- Display/editorial: **Literata** — bookish and readable, but used as a calm buying-guide voice rather than fashion-magazine drama. It feels like a well-used craft manual, not SaaS gloss.
- Body/UI: **Atkinson Hyperlegible** — accessibility-forward, practical, warm in use, and not a generic tech sans.
- Data/tables/captions: Atkinson Hyperlegible with tabular numbers and tighter tracking; avoid monospace costume.

Hard craft: display letter spacing no tighter than `-0.025em`; body measure 65–75ch; `text-wrap: balance` on headings and `pretty` on prose.

### Layout system

Concept: **cutting-table research layout**. The page uses a broad worktable zone where text, machine-image placeholders, stitch annotations, and decision tables sit as practical tools. Structure should feel like a craft table being organized for a buyer.

Homepage wireframe:

```text
┌─────────────────────────────────────────────────────────────┐
│ compact masthead: Stitch & Spec + key guide links           │
├───────────────────────┬─────────────────────────────────────┤
│ thesis headline       │ large machine/photo placeholder      │
│ direct promise        │ with stitch-path overlay + labels    │
│ two useful actions    │                                     │
├───────────────────────┴─────────────────────────────────────┤
│ "Start by the work" — not identical cards:                  │
│  featured guide list with image slot + direct answer excerpt │
├─────────────────────────────────────────────────────────────┤
│ "Buyer paths" — grouped link shelves, not cards everywhere  │
└─────────────────────────────────────────────────────────────┘
```

Article wireframe:

```text
┌─────────────────────────────────────────────────────────────┐
│ title + updated date + cluster label                         │
│ BLUF answer box beside/in rhythm with image placeholder       │
├─────────────────────────────────────────────────────────────┤
│ recommendation strip                                         │
│ buyer question                                               │
│ decision table                                               │
│ article sections, each with occasional inline image slot      │
│ next-question links                                          │
│ sources + FAQ                                                │
└─────────────────────────────────────────────────────────────┘
```

### Signature element / justified aesthetic risk

Signature: **stitched annotation placeholders** — first-class image regions with simple labels like “Machine photo slot”, “Hoop-size diagram slot”, and “Fabric test photo slot”, framed by precise stitch-like dashed paths and small utility labels. This is not decorative sketch art; it is a useful production scaffold for the exact assets the site needs later. The risk is showing placeholders prominently instead of hiding them, but it is justified because the site is pre-merchant-application and needs a production-ready image architecture now.

### Motion

One modest, useful motion system: links/buttons translate 1px, image-slot thread paths subtly shift on hover/focus when motion is allowed. No page-load choreography yet; content must not depend on animation. Reduced motion disables transitions.

## Critique against frontend-design and Impeccable before code

- Avoids warm cream/beige default: body is neutral off-white at chroma 0, with indigo workbench zones and small thread accents.
- Avoids serif + terracotta reflex: display uses Literata, but the dominant brand color is machine-manual indigo; red is a small bobbin/thread accent, not terracotta atmosphere.
- Avoids broadsheet editorial lane: no hairline newspaper columns, italic display drama, drop caps, or monochrome Klim-style layout.
- Avoids near-black acid: palette is light, calm, tactile; no acid color.
- Avoids identical card grids: homepage featured guides become media rows; cluster navigation becomes shelves/lists. Cards remain only where they serve grouped links.
- Avoids tiny uppercase tracked eyebrow above every section: use named labels sparingly and sentence-case; no repeated all-caps scaffold.
- Avoids numbered markers: no arbitrary 01/02/03.
- Avoids ghost cards: no border + huge soft shadow pattern; cards/slots use borders and contained color, minimal shadow.
- Avoids gradient text/glassmorphism/sketch SVG/stripe backgrounds: none planned.
- Keeps GEO intact: BLUF, decision tables, FAQ schema, sources, last updated, next links, Article and BreadcrumbList schema are preserved/wrapped.
- Accessibility: verify color contrast after implementation; all placeholder text must be readable; focus styles visible.

## Revised plan after critique

Keep the cutting-table / stitched-annotation concept, but be disciplined: one memorable image/annotation system, not decorative sewing clutter everywhere. Reduce reliance on cards, use real lists/tables, and treat every image placeholder as a future content slot with labels and alt/accessibility text. The homepage hero should feel like a trustworthy craft workbench, while article pages should feel like annotated machine research sheets.
