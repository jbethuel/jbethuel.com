# The Header wraps on mobile instead of collapsing into a hamburger menu

The Header needed 412px against a 343px budget at the 375px Mobile budget, so it
had to change. We wrap it to two rows — brand mark and theme switch on the first,
nav spread edge to edge on the second — rather than collapse the nav behind a
hamburger.

## Considered options

Measured min-content widths for the Header, against the 343px available at 375px:

| Option                                          | Needs |
| ----------------------------------------------- | ----- |
| Unchanged                                       | 412px |
| Shrink to nav 14px / brand 20px                 | 351px |
| **Wrap to two rows, both at full size**         | 282px |
| Brand mark collapses to `j`, nav 14px           | 267px |
| Hamburger menu                                  | 204px |

The hamburger frees the most room and was the original proposal. It was rejected
because it is the only option that removes information from the screen, on a site
whose whole aesthetic is a terminal — and it spends the most machinery to do it:
client state, `aria-expanded`, a focus trap, Escape handling, outside-click
dismissal, and close-on-route-change, all to save 78px on four words totalling 20
characters. Shrinking was rejected separately: the nav links are already 24px tall,
exactly the WCAG 2.5.8 minimum, and smaller type pushes them under it. Wrapping is
the only option that improves tap targets rather than degrading them.

## Consequences

The Header is roughly 40px taller on mobile, on pages that scroll vertically anyway.
Desktop is unchanged. If the nav ever grows past four or five items, wrapping stops
being enough and this decision is worth revisiting — the hamburger's real advantage
is headroom, which four links do not need.
