"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import headshot from "@/assets/headshot.jpg";
import { portfolioData } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

function VengeancePanel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[1.75rem] border border-sky-200/80 bg-white/75 p-6 shadow-[0_24px_70px_rgba(125,211,252,0.12)] backdrop-blur-md",
        className,
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.18),_transparent_62%)]" />
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
    <div ref={rootRef} className="bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.18),_transparent_18%),linear-gradient(180deg,#f7fbff_0%,#edf6ff_38%,#f8fafc_100%)] pt-12 text-slate-800 sm:pt-16 lg:pt-20">
      <main className="mx-auto max-w-7xl px-4 pb-24 pt-4 sm:px-6 lg:px-8">
        <section className="scroll-mt-28 relative overflow-hidden rounded-[2rem] border border-sky-200/80 bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.18),_transparent_42%),linear-gradient(180deg,_rgba(255,255,255,0.9),_rgba(239,246,255,0.9))] px-4 py-8 shadow-[0_30px_80px_rgba(125,211,252,0.1)] sm:px-6 sm:py-10 lg:px-10 lg:py-12">
          <div className="parallax-layer absolute inset-x-8 top-10 h-48 rounded-full bg-sky-300/20 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-8 reveal">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-sky-700">
                <span className="inline-block h-2 w-2 rounded-full bg-sky-500" />
                Entry-level full-stack developer
              </div>

              <div className="space-y-5">
                <div className="inline-flex items-center gap-3 rounded-full border border-sky-200 bg-white/70 px-3 py-1.5 shadow-sm">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-sky-500" />
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Ian Davison</p>
                </div>
                <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  I turn <span className="text-sky-600">support workflows</span> into product ideas.
                </h1>
                <p className="max-w-xl text-base text-slate-600 sm:text-lg">
                  {portfolioData.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-full bg-sky-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-sky-400"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-sky-200 bg-white/70 px-5 py-3 text-sm font-medium text-sky-700 transition hover:border-sky-300 hover:bg-sky-50"
                >
                  Contact Me
                </a>
                <a
                  href="/Resume%209.14.2026.pdf"
                  download="Ian_Davison_Resume.pdf"
                  className="rounded-full border border-sky-300 bg-sky-100/80 px-5 py-3 text-sm font-medium text-sky-700 transition hover:bg-sky-100"
                >
                  Download Resume
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  { label: "Experience", value: "4+ years" },
                  { label: "Focus", value: "Full stack" },
                  { label: "Location", value: "Peoria, IL" },
                  { label: "Clearance", value: "Secret" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-sky-100 bg-white/70 p-4 shadow-[0_12px_30px_rgba(125,211,252,0.08)]">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">{item.label}</div>
                    <div className="mt-2 text-lg font-semibold text-slate-900">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal relative mx-auto w-full max-w-md">
              <div className="absolute -inset-6 rounded-[2rem] bg-sky-300/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-sky-100 bg-white/70 p-3 shadow-[0_30px_80px_rgba(14,116,144,0.18)]">
                <Image
                  src={headshot}
                  alt={portfolioData.name}
                  className="h-[440px] w-full rounded-[1.5rem] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-28 mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <VengeancePanel className="reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-700/80">About</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">A developer shaped by systems thinking.</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              I began in healthcare IT, where uptime, process reliability, and communication matter as much as technical competence. That work taught me how to troubleshoot under pressure, document repeatable solutions, and support people with patience and clarity.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              I’m now building toward a full-stack role where I can apply those same strengths to modern web apps: clean front-end experiences, resilient back-end logic, and tools that help real users do their jobs more efficiently.
            </p>
          </VengeancePanel>

          <VengeancePanel className="reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-700/80">Strengths</p>
            <ul className="mt-5 space-y-3">
              {portfolioData.strengths.map((strength) => (
                <li key={strength} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </VengeancePanel>
        </section>

        <section id="experience" className="scroll-mt-28 mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <VengeancePanel className="reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-700/80">Experience</p>
            <div className="mt-6 space-y-5">
              {portfolioData.experience.map((job) => (
                <div key={job.role} className="rounded-2xl border border-sky-100 bg-slate-50/80 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-slate-900">{job.role}</h3>
                    <span className="text-xs uppercase tracking-[0.22em] text-sky-700/80">{job.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-sky-700">{job.company}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{job.description}</p>
                </div>
              ))}
            </div>
          </VengeancePanel>

          <VengeancePanel className="reveal">
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-sky-100 bg-slate-50/80 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Education</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">{portfolioData.education[0].school}</p>
                <p className="mt-1 text-sm text-slate-600">{portfolioData.education[0].degree}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-sky-700/80">{portfolioData.education[0].years}</p>
              </div>

              <div className="rounded-2xl border border-sky-100 bg-slate-50/80 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Certifications</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {portfolioData.certifications.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-8 text-xs uppercase tracking-[0.3em] text-sky-700/80">Skill stack</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {portfolioData.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-sky-200 bg-sky-50 px-3 py-2 text-sm text-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </VengeancePanel>
        </section>

        <section id="projects" className="scroll-mt-28 mt-10">
          <div className="mb-6 reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-700/80">Selected work</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Projects built around clarity and reliability.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {portfolioData.projects.map((project) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="reveal block h-full text-left"
              >
                <VengeancePanel className="flex h-full flex-col transition duration-200 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_24px_70px_rgba(14,116,144,0.12)]">
                  <div className="h-12 w-12 rounded-xl bg-sky-100 ring-1 ring-sky-200" />
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{project.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-sky-200 bg-white/70 px-2.5 py-1.5 text-xs text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-6">
                    <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-sky-700">
                      View project
                    </span>
                  </div>
                </VengeancePanel>
              </a>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
