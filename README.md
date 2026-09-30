# pramaan parents

A sample week of the evening note a PRAMAAN parent would get: what their child asked today (her own questions), one dinner-table question built from them, and a small effort and self-belief trend. Seven days, one short message per day, readable in English, Hindi and Kannada. After Sunday's note comes a price test, then a waitlist form that stores nothing.

**For:** parents of children aged 6 to 14, starting in Bengaluru. Built for PRAMAAN, a children's learning method and lab.

**Hypothesis:** parents who see one week of digests would pay a monthly fee.

## open it

- live: https://ananyapradhan02.github.io/pramaan-parents/
- local: open `index.html` in a browser (works from `file://`, no build step, no server)

Everything is sample data. Meera, 12, is not a real child. Nothing is fetched, sent or collected. Nothing is AI generated at runtime: every digest is written by hand in `app.js`. `localStorage` holds only the theme, the language, the last day you viewed and the price-test pick. The pick leaves the phone only if the parent presses "email my pick to ananya" and then sends that email themselves. The waitlist form keeps what you type in memory just long enough to write one sentence, and saves nothing.

## test script (one real parent, ten minutes)

Hand them the phone on the live URL, in the language they read at home. Say nothing about pricing until question 3.

1. "Read Monday, then tap through to Sunday at your own pace. Which part of the note would you actually use at home?" (Watch: do they read the questions, the dinner question, or the trend line?)
2. "If this came every evening about your child, what would you do with Wednesday's note, the slow day?" (Checks whether the effort trend reassures or worries them.)
3. "Before you look at the choices: what would you pay a month for this, in rupees?" Write the number down. Then: "now tap 'what would you pay?' after Sunday and pick one, including 'i wouldn't pay for this' if that is true." (Log both numbers: the one they said unprompted and the one they picked. Ask them to press "email my pick to ananya" so it lands in the inbox.)

The price test screen shows four equally weighted choices: ₹199 (the nightly note for one child), ₹399 (up to two children), ₹699 (up to two children plus one twenty-minute call a month with a pramaan teacher), and "i wouldn't pay for this", plus an optional "what would you pay?" number. Nothing is pre-selected, there is no "most popular" badge and no decoy styling. **These price points are a test, not a launch price.** They were chosen by hand to bracket the question, not from any market data.

## what to decide after testing

- Keep the dinner question as the hero, or lead with the child's own questions? Go with whichever part they pointed to in question 1.
- Delivery: on-device only (app or home-screen page) versus WhatsApp. WhatsApp is what parents expect, but it would put a child's questions on Meta's servers, which breaks "no child data leaves a device". Decide before building anything real.
- Price: after five or more parents, compare the unprompted number with the picked tier. If most pick ₹199 or "i wouldn't pay", the note alone is not the product; test what would make it worth more (the call, the check-in) before testing lower prices. If the unprompted number sits above ₹399, test a higher band next.

## contact

- book a call: https://calendly.com/ananyapradhan/30min
- write to ananya: ananyapradhan02@gmail.com

## status

v0.3 · 30.09.26 · price test after Sunday's note: three monthly price points (₹199, ₹399, ₹699) and "i wouldn't pay for this" as equal choices, an optional "what would you pay?" number, the pick kept on the phone and shown back, and a button that opens the parent's own email to Ananya with the pick filled in. English, Hindi and Kannada. Meera and her week are still written by hand, not a real child.

Set in the morning-build design system (`global.css`, verbatim). MIT licence.
