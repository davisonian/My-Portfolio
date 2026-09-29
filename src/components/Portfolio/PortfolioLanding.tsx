"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import headshot from "@/assets/headshot.jpg";
import { portfolioData } from "@/data/portfolio";
import DepthScene from "@/components/Portfolio/DepthScene";

gsap.registerPlugin(ScrollTrigger);

function VengeancePanel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[1.75rem] border border-sky-200/10 bg-slate-900/60 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.34)] backdrop-blur-sm",
        className,
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.2),_transparent_55%)]" />
      <div className="relative">{children}</div>
    </div>
  );
}

export default function PortfolioLanding() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 80%",
          },
        },
      );

      gsap.to(".parallax-layer", {
        yPercent: -14,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="bg-[#071827] text-slate-100">
      <main className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-[2rem] border border-sky-100/10 bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.22),_transparent_42%),linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(7,24,39,0.9))] px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
          <div className="parallax-layer absolute inset-x-8 top-10 h-48 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-8 reveal">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/8 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-sky-100">
                <span className="inline-block h-2 w-2 rounded-full bg-sky-400" />
                Entry-level full-stack developer
              </div>

              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.22em] text-sky-200/80">Ian Davison</p>
                <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  I turn <span className="text-sky-300">support workflows</span> into product ideas.
                </h1>
                <p className="max-w-xl text-base text-slate-300 sm:text-lg">
                  {portfolioData.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-full bg-sky-400 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-300"
                >
                  View projects
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-sky-200/15 bg-white/3 px-5 py-3 text-sm font-medium text-sky-50 transition hover:border-sky-300/40 hover:bg-sky-500/10"
                >
                  Contact me
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Experience", value: "4+ years" },
                  { label: "Focus", value: "Full stack" },
                  { label: "Location", value: "Peoria, IL" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/20 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</div>
                    <div className="mt-2 text-xl font-semibold text-white">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal relative mx-auto w-full max-w-md">
              <div className="absolute -inset-6 rounded-[2rem] bg-sky-400/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/50 p-3 shadow-[0_30px_80px_rgba(14,116,144,0.25)]">
                <Image
                  src={headshot}
                  alt={portfolioData.name}
                  className="h-[440px] w-full rounded-[1.5rem] object-cover grayscale"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <VengeancePanel className="reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-200/70">About</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">A developer shaped by systems thinking.</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              I began in healthcare IT, where uptime, process reliability, and communication matter as much as technical competence. That work taught me how to troubleshoot under pressure, document repeatable solutions, and support people with patience and clarity.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-300">
              I’m now building toward a full-stack role where I can apply those same strengths to modern web apps: clean front-end experiences, resilient back-end logic, and tools that help real users do their jobs more efficiently.
            </p>
          </VengeancePanel>

          <VengeancePanel className="reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-200/70">Strengths</p>
            <ul className="mt-5 space-y-3">
              {portfolioData.strengths.map((strength) => (
                <li key={strength} className="flex items-start gap-3 text-slate-200">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-400" />
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </VengeancePanel>
        </section>

        <section id="experience" className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <VengeancePanel className="reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-200/70">Experience</p>
            <div className="mt-6 space-y-5">
              {portfolioData.experience.map((job) => (
                <div key={job.role} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                    <span className="text-xs uppercase tracking-[0.22em] text-sky-200/70">{job.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-sky-200">{job.company}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{job.description}</p>
                </div>
              ))}
            </div>
          </VengeancePanel>

          <VengeancePanel className="reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-200/70">Skill stack</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {portfolioData.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-sky-200/10 bg-sky-500/8 px-3 py-2 text-sm text-sky-50">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Education</p>
                <p className="mt-3 text-lg font-semibold text-white">{portfolioData.education[0].school}</p>
                <p className="mt-1 text-sm text-slate-300">{portfolioData.education[0].degree}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-sky-200/70">{portfolioData.education[0].years}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Certifications</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {portfolioData.certifications.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </VengeancePanel>
        </section>

        <section className="mt-10 reveal">
          <DepthScene />
        </section>

        <section id="projects" className="mt-10">
          <div className="mb-6 reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-200/70">Selected work</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Projects built around clarity and reliability.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {portfolioData.projects.map((project) => (
              <VengeancePanel key={project.title} className="reveal h-full">
                <div className="h-12 w-12 rounded-xl bg-sky-400/15 ring-1 ring-sky-200/10" />
                <h3 className="mt-5 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{project.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-sky-200/10 bg-slate-950/40 px-2.5 py-1.5 text-xs text-sky-100">
                      {item}
                    </span>
                  ))}
                </div>
              </VengeancePanel>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-10 reveal">
          <VengeancePanel className="overflow-hidden p-8 sm:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-sky-200/70">Contact</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">Let’s build something dependable.</h2>
              </div>
              <a href="mailto:davisonian1998@gmail.com" className="inline-flex rounded-full bg-sky-400 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-300">
                Email me
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Email</p>
                <p className="mt-2 text-sm text-slate-200">{portfolioData.email}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Phone</p>
                <p className="mt-2 text-sm text-slate-200">{portfolioData.phone}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Clearance</p>
                <p className="mt-2 text-sm text-slate-200">{portfolioData.securityClearance}</p>
              </div>
            </div>
          </VengeancePanel>
        </section>
      </main>
    </div>
  );
}
