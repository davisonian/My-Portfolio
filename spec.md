# Portfolio specification

## Objective
Create a personal portfolio for Ian Davison as an entry-level full-stack developer, emphasizing reliability, systems thinking, and a transition from healthcare IT into web product development.

## Audience
- Hiring managers for junior/full-stack, support-to-dev, or technical operations roles
- Recruiters scanning for transferable technical skills and strong communication
- Startup teams looking for a motivated generalist who can learn quickly and deliver value

## Core narrative
Ian is not a generic portfolio template. He is a practical operator with real-world IT experience, strong troubleshooting habits, and a professional interest in building web systems that improve user experiences.

## Brand direction
- Palette: light sky blue, soft white, pale gray, and cool slate accents
- Emotional tone: calm, credible, modern, technical, and approachable
- Visual style: light editorial glassmorphism with soft gradients, airy spacing, crisp typography, and minimal contrast drama
- Layout intent: one continuous storytelling experience with a strong hero, layered cards, and subtle motion depth

## Content sources
The portfolio content is based on the resume PDF and the headshot asset in the project asset set:
- src/assets/Resume 9.14.2026.pdf
- src/assets/headshot.jpg

## Required sections
1. Hero with headline and concise value proposition
2. About summary with professional narrative and strengths
3. Experience timeline with healthcare IT and Army roles
4. Skill stack and certifications
5. Depth/scene section representing software systems
6. Selected projects
7. Contact CTA

## Visual treatment plan
### Hero treatment
The hero uses a soft, light background with cool blue gradients and a subtle glass-style shell around the main content. The headline remains large and editorial, with a soft grey overlay for an airy, premium feel.

### Headshot treatment
The portrait uses the original full-color version rather than a grayscale filter. The image sits inside a polished, light frame to keep the composition modern without overwhelming the page.

## Scroll-based animation plan
### Parallax prompt
"A clean, light editorial portfolio scene with layered UI panels, soft sky-blue gradients, minimal depth, and subtle motion that feels premium and modern."

### Depth prompt
"A minimal software systems composition using translucent panels, soft shadows, and layered interfaces with a calm, polished visual tone."

### Camera movement prompt
"Slow, gentle orbit movement and soft depth drift across a light portfolio layout with airy cards and restrained motion."

## Motion requirements
- Use GSAP with ScrollTrigger for scroll-driven motion
- Use subtle parallax/distance effects without visual clutter
- Keep transitions smooth and minimal so the experience remains polished and readable
- Maintain desktop and mobile responsiveness with no layout breakage

## Responsive requirements
- Desktop: editorial hero, clean shell layout, generous whitespace, professional layout density
- Mobile: simplified stacking, tighter spacing, readable headlines, preserved contrast and clarity

## Design constraints
- Maintain a production-safe, static-prerender friendly build
- Use a light modern palette instead of a darker AI template aesthetic
- Preserve the portfolio’s professional credibility while keeping the design approachable and contemporary
- Keep the final experience aligned with a personal brand rather than a generic SaaS product template
