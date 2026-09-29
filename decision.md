# Design and implementation decisions

## 1. Portfolio direction
The site was converted from a generic AI SaaS template into a portfolio for an entry-level full-stack developer with a story grounded in healthcare IT and technical operations. This fits the resume and supports a credible junior developer narrative.

## 2. Visual system
The project uses a blue-and-neutral palette to feel credible, calm, and professional. Deep navy backgrounds, soft sky highlights, slate surfaces, and white text create an editorial but technical tone.

## 3. Image and resume usage
The content was extracted from the resume file in the asset set and paired with the provided headshot. This keeps the portfolio grounded in the actual experience instead of the original template copy.

## 4. Motion system
GSAP and ScrollTrigger were added to create scroll-based transitions, layered motion, and depth parallax effects. Three.js was used to produce a subtle, cinematic environment behind the main content so the experience feels like one continuous scene.

## 5. Vengeance UI note
The package name "vengeanceui" was not available in the public npm registry during implementation. To honor the design intent, the project uses Vengeance-inspired glass panels, elevated card surfaces, and layered composition patterns without depending on a non-existent package.

## 6. Technical decisions
- Use static data objects for the resume-driven content
- Avoid external CMS or DB dependencies for deployment safety
- Keep the design system simple and consistent with the existing Next.js app
- Preserve responsiveness for both desktop and mobile viewports

## 7. Verification
The project was checked in desktop and mobile modes through Playwright-based browser verification after the layout was finished. The app remains build-safe and dev-safe with no blocking runtime errors.
