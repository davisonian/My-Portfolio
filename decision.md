# Design and implementation decisions

## 1. Portfolio direction
The site was converted from a generic AI SaaS template into a personal portfolio for an entry-level full-stack developer with a story grounded in healthcare IT and technical operations. This keeps the brand credible and aligned with the actual resume and work history.

## 2. Visual system
The final design uses a lighter, more modern palette built around pale sky blue, soft white, and cool slate surfaces. This makes the portfolio feel more premium and editorial while staying approachable and technically credible.

## 3. Image treatment
The headshot is displayed in full color instead of grayscale to make the portrait feel more human, polished, and professional. The image is framed with a soft glass-like treatment that supports the light theme without overpowering the layout.

## 4. Shell and navigation styling
The global header and footer were reworked to match the lighter visual language rather than the original AI template shell. The result is a more cohesive portfolio experience with a consistent brand tone across the page.

## 5. Motion and depth
GSAP and ScrollTrigger remain in place for subtle scroll motion and layered depth, but the motion is more restrained than the previous dark design. The effect is meant to feel premium and polished rather than dramatic or noisy.

## 6. Technical decisions
- Keep the content resume-driven and static for production safety
- Preserve minimal dependency usage and keep the app deployment-friendly
- Maintain a consistent light visual system across header, hero, cards, and footer
- Remove lingering template styling that conflicted with the personal portfolio story

## 7. Verification
The portfolio was validated with a production build and live browser screenshots. The final app compiles successfully and renders correctly in the browser with the lighter palette and the colorized headshot treatment.
