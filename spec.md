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
- Palette: deep navy, slate, ice blue, and soft white
- Emotional tone: technical, calm, polished, trustworthy, modern
- Visual style: dark glassmorphism with subtle gradients and cinematic depth
- Layout intent: one continuous storytelling experience with a strong hero, layered panels, and scroll-driven depth

## Content sources
The portfolio content is based on the resume PDF located in the project asset set:
- src/assets/Resume 9.14.2026.pdf
- src/assets/headshot.JPG

## Required sections
1. Hero with headline and concise value proposition
2. About summary with professional narrative and strengths
3. Experience timeline with healthcare IT and Army roles
4. Skill stack and certifications
5. 3D depth/scene section representing software systems
6. Selected projects
7. Contact CTA

## Scroll-based animation plan
### Parallax prompt
"An atmospheric developer portfolio scene with layered UI card panels floating in a dark blue environment, subtle parallax motion, soft lighting, and depth-focused camera drift."

### Depth prompt
"A cinematic software systems composition with translucent layers, shadows, project cards, coded interfaces, and a sense of stacked depth that implies a modern developer workflow."

### Camera movement prompt
"Slow orbit camera movement through a layered 3D portfolio environment, smooth easing, realistic lighting, gentle zoom-in and zoom-out, and a polished transition between UI panels."

## Motion requirements
- Use GSAP with ScrollTrigger for scroll-driven motion
- Use Three.js to create a subtle layered 3D scene behind the main content
- Implement smooth easing and soft shadows for realism
- Use scroll to scale and depth-pan panels while keeping a continuous visual narrative
- Maintain desktop and mobile responsiveness with no layout breakage

## Responsive requirements
- Desktop: strong editorial hero, layered cards, wide spacing, immersive scene
- Mobile: simplified stacking layout, tighter spacing, readable headlines, preserved contrast

## Design constraints
- No dependency on unavailable third-party SaaS environment keys
- The page should be production-safe and static-prerender friendly
- Use a neutral + blue palette instead of purple or experimental neon colors
