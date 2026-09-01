# A Theme change crossfades, scoped to the change rather than to the site

The theme used to change instantly — `disableTransitionOnChange` was set, which
suppresses transitions for the length of the swap. It now eases: 200ms across
the colour properties, 120ms under `prefers-reduced-motion`, and nothing else.
The transition is carried by a `.theme-crossing` class that sits on `<html>` only
while the palette is crossing.

## Considered options

**Where the transition lives** was the decision worth recording. A permanent
global rule on `*` is the obvious version and it is wrong twice over: it animates
every colour change on the site forever, including ones nobody asked to animate,
and it puts the seven existing `transition-colors` hovers into competition with a
site-wide duration. Registering the ~40 palette tokens with `@property` and
transitioning the variables is the elegant version, and a poor fit against an
`oklch()` palette with alpha-channel tokens for the amount of boilerplate it
costs. The scoped class gets the first paint silent for free — it is only ever
added in response to a *change*, so a returning visitor's stored theme applies
with no class present and never fades in from the wrong colours.

**Three louder gestures were built and rejected**, which is most of why this ADR
exists — each is the kind of idea that looks good enough on paper to be tried
again.

A **CRT retrace**: a green beam sweeping down the viewport, the palette crossing
under it. It works, and it reads as a costume — a prop borrowed from a film's
idea of a terminal rather than anything the site is.

A **View Transition** (`document.startViewTransition`) with a `clip-path` wipe is
what a sweep normally reaches for, and it is the one thing an overlay cannot
match: it snapshots the pages, so the palette can flip behind the moving edge.
A Theme change fires from the operating system and from other tabs as well as
from the switch, and next-themes applies the class itself in those cases, with no
call for us to wrap — so it would cover clicks alone, or need a `MutationObserver`
to catch the rest.

**Reverse video** (`ESC[7m`, inverting the page for ~90ms) has the best
provenance of the three and does not survive contact: inverting the *new* theme
looks like the *old* one, so the flash reads as a 90ms stall followed by a hard
cut. Making it flash toward the change means delaying the swap, which — like a
cursor-synced variant also tried — can only be done for clicks, and so splits the
behaviour by what caused the change. Worth knowing if anyone tries again: the
filter belongs on the root, not on `body`. `html` paints no background, so body's
propagates to the canvas and is drawn by the viewport; a filter on `body` inverts
the text and leaves the background beneath it alone.

## Consequences

Hover states keep their own 150ms once a swap is done. The 200ms is duplicated
between `theme-crossfade.tsx` and `globals.css` — the component needs it to know
when to drop the class — and the two have to change together.

`ThemeSwitch` moved from two remote SVGs on the asset host to `lucide-react`'s
`Sun`/`Moon`, which were unanimatable pictures and are now `currentColor` glyphs
that recolour with the palette on their own. That changed the control from flat
colour clip-art to a monochrome line icon and removed a network request from the
Header.
