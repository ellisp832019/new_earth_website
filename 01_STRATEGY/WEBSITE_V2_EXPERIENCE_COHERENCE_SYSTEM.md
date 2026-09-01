# Website V2 experience coherence system

This note records the implemented semantic layer for the public Astro site. It does not alter the approved palette, content authority, navigation structure or publication controls.

## Route contexts

| Context | Canonical routes | Accent | Visible meaning |
| --- | --- | --- | --- |
| Vision | `/vision/`, `/manifesto/`, `/blueprint/` | Gold | Why this direction matters |
| System | `/ecosystem/`, `/projects/`, project detail routes | Teal | What is being built and explored |
| In practice | `/new-earth-in-practice/` | Sage and forest | How local capability can grow |
| Community | `/get-involved/`, `/contact/` | Deep and forest | Ways to participate and connect |
| Story and context | `/about/`, `/founders-journey/`, `/journal/` | Editorial neutral | People, perspective and learning |
| Trust and governance | `/legal/` and child routes | Neutral | Public terms, boundaries and responsibilities |

The route mapping is maintained centrally in `src/data/experience.ts`. Colour always appears with a text label and short meaning; it is never the only context signal. Evidence, limitations and governance surfaces remain neutral.

## Interaction principles

- Motion is restrained to 180–220 ms and removed when reduced motion is requested.
- Keyboard focus receives the same meaningful state as hover.
- Enhancements must retain complete content and safe canonical links without JavaScript.
- Touch targets use existing button and native-control dimensions; mobile layouts become vertical.

## Sprint decisions

- The local-first pathway belongs primarily on `/new-earth-in-practice/`.
- The pathway is implemented as six native disclosure stages: Person, Home / Place, Community, Local capability, Connected communities and Wider New Earth. It adds no client JavaScript and remains operable with scripts disabled.
- Ecosystem exploration must expose only approved public information and must preserve maturity boundaries.
- Project filtering is deferred: only two projects are currently public, so filters would add interface weight without improving discovery. Reconsider when at least four public projects exist.
