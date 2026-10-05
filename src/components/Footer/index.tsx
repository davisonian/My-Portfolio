import monogramLogo from '@/assets/id_monogram_transparent.svg';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer id="contact" className="relative z-10 pb-10 scroll-mt-28">
        <div className="mx-auto max-w-[1200px] px-4 pt-6 sm:px-8 xl:px-0">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-700/80">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Let’s build something dependable.</h2>
          </div>

          <div className="rounded-[2rem] border border-sky-200/80 bg-white/70 p-6 shadow-[0_16px_50px_rgba(125,211,252,0.1)] backdrop-blur-md sm:p-8">
            <div className="mb-8 flex items-center gap-3">
              <Link href="/" className="inline-flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-sky-200 bg-sky-50">
                  <Image src={monogramLogo} alt="Ian Davison logo" width={28} height={28} className="h-7 w-7 object-contain" />
                </span>
                <span className="text-lg font-semibold tracking-[0.14em] text-slate-800 uppercase">Ian Davison</span>
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-2 md:items-start">
              <div className="rounded-2xl border border-sky-100 bg-slate-50/80 p-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">Email</p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <a
                    href="mailto:davisonian1998@gmail.com?subject=Portfolio%20Inquiry"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-block text-base font-medium text-slate-800 transition hover:text-sky-700"
                  >
                    davisonian1998@gmail.com
                  </a>
                  <a
                    href="mailto:davisonian1998@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Ian%2C%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex w-full justify-center rounded-full bg-sky-500 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-sky-400"
                  >
                    Email Me
                  </a>
                </div>
                <p className="mt-5 text-[11px] uppercase tracking-[0.28em] text-slate-500">Phone</p>
                <p className="mt-3 text-base font-medium text-slate-800">309-360-1918</p>
              </div>

              <div className="rounded-2xl border border-sky-100 bg-slate-50/80 p-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">Connect With Me</p>
                <div className="mt-4 flex flex-col gap-2.5">
                  <a
                    href="https://github.com/davisonian"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full justify-center rounded-full bg-sky-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-sky-400"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ian-davison-usarmy/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full justify-center rounded-full bg-sky-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-sky-400"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
