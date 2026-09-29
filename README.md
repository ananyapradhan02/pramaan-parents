# pramaan parents

A sample week of the evening note a PRAMAAN parent would get: what their child asked today (her own questions), one dinner-table question built from them, and a small effort and self-belief trend. Seven days, one short message per day, readable in English, Hindi and Kannada. There is also a waitlist form that stores nothing.

**For:** parents of children aged 6 to 14, starting in Bengaluru. Built for PRAMAAN, a children's learning method and lab.

**Hypothesis:** parents who see one week of digests would pay a monthly fee.

## open it

- live: https://ananyapradhan02.github.io/pramaan-parents/
- local: open `index.html` in a browser (works from `file://`, no build step, no server)

Everything is sample data. Meera, 12, is not a real child. Nothing is fetched, sent or collected. Nothing is AI generated at runtime: every digest is written by hand in `app.js`. `localStorage` holds only the theme, the language and the last day you viewed. The waitlist form keeps what you type in memory just long enough to write one sentence, and saves nothing.

## test script (one real parent, ten minutes)

Hand them the phone on the live URL, in the language they read at home. Say nothing about pricing yet.

1. "Read Monday, then tap through to Sunday at your own pace. Which part of the note would you actually use at home?" (Watch: do they read the questions, the dinner question, or the trend line?)
2. "If this came every evening about your child, what would you do with Wednesday's note, the slow day?" (Checks whether the effort trend reassures or worries them.)
3. "It ends by asking if it is worth a monthly fee. Is it? What would you pay, in rupees, and what would make you stop?" (Write down the number they say before you say any number.)

## what to decide after testing

- Keep the dinner question as the hero, or lead with the child's own questions? Go with whichever part they pointed to in question 1.
- Delivery: on-device only (app or home-screen page) versus WhatsApp. WhatsApp is what parents expect, but it would put a child's questions on Meta's servers, which breaks "no child data leaves a device". Decide before building anything real.
- Price band for the pricing-test screen (next roadmap item), anchored on the numbers parents said unprompted.

## status

v0.1 · 29.09.26 · prototype, sample data only.

Set in the morning-build design system (`global.css`, verbatim). MIT licence.
