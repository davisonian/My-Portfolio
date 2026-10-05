"use client";
import monogramLogo from '@/assets/id_monogram_transparent.svg';
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import DropDown from "./DropDown";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const { data: session } = useSession();

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    handleStickyMenu();
    window.addEventListener("scroll", handleStickyMenu);

    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-1000 w-full px-3 pt-3 transition-all duration-300 ${
          stickyMenu ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative mx-auto max-w-[1200px] rounded-full border border-sky-200/80 bg-white/70 px-4 py-2.5 shadow-[0_8px_30px_rgba(125,211,252,0.12)] backdrop-blur-md sm:px-5 lg:px-7">
          <div className="flex w-full items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-sky-200 bg-sky-50 shadow-sm">
                <Image src={monogramLogo} alt="Ian Davison logo" width={24} height={24} className="h-6 w-6 object-contain" />
              </span>
              <span className="text-sm font-semibold tracking-[0.14em] text-slate-800 uppercase">Ian Davison</span>
            </Link>

            <div className="hidden items-center gap-6 lg:flex">
              <nav>
                <ul className="flex items-center gap-3.5">
                  {menuData.map((menuItem, key) => (
                    <li
                      key={key}
                      className="nav__menu group relative"
                    >
                      {menuItem.submenu ? (
                        <>
                          <DropDown menuItem={menuItem} />
                        </>
                      ) : (
                        <Link
                          href={`${menuItem.path}`}
                          className={`relative border border-transparent px-3 py-1.5 text-sm transition hover:text-sky-700 ${
                            pathUrl === menuItem.path
                              ? "rounded-full bg-sky-50 text-sky-700"
                              : "text-slate-600"
                          }`}
                        >
                          {menuItem.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {session ? (
                <div className="flex items-center gap-4 pl-2">
                  <p className="text-sm text-slate-700">{session?.user?.name}</p>
                  <button
                    aria-label="Sign Out button"
                    onClick={() => signOut()}
                    className="text-sm text-slate-700 hover:text-sky-700"
                  >
                    Sign Out
                  </button>
                </div>
              ) : null}
            </div>

            <button
              onClick={() => setNavigationOpen(!navigationOpen)}
              className="block lg:hidden"
            >
              <span className="relative block h-5.5 w-5.5 cursor-pointer">
                <span className="du-block absolute right-0 h-full w-full">
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-slate-700 delay-0 duration-200 ease-in-out ${
                      !navigationOpen ? "w-full! delay-300" : "w-0"
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-slate-700 delay-150 duration-200 ease-in-out ${
                      !navigationOpen ? "delay-400 w-full!" : "w-0"
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-slate-700 delay-200 duration-200 ease-in-out ${
                      !navigationOpen ? "w-full! delay-500" : "w-0"
                    }`}
                  ></span>
                </span>
                <span className="du-block absolute right-0 h-full w-full rotate-45">
                  <span
                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-slate-700 delay-300 duration-200 ease-in-out ${
                      !navigationOpen ? "h-0! delay-0" : "h-full"
                    }`}
                  ></span>
                  <span
                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-slate-700 duration-200 ease-in-out ${
                      !navigationOpen ? "h-0! delay-200" : "h-0.5"
                    }`}
                  ></span>
                </span>
              </span>
            </button>
          </div>

          {navigationOpen ? (
            <div className="mt-3 rounded-xl bg-white/90 p-4 shadow-lg lg:hidden">
              <nav>
                <ul className="flex flex-col gap-4">
                  {menuData.map((menuItem, key) => (
                    <li key={key} className="nav__menu group relative">
                      {menuItem.submenu ? (
                        <DropDown menuItem={menuItem} />
                      ) : (
                        <Link
                          href={`${menuItem.path}`}
                          className={`relative block border border-transparent px-3 py-1.5 text-sm transition hover:text-sky-700 ${
                            pathUrl === menuItem.path
                              ? "rounded-full bg-sky-50 text-sky-700"
                              : "text-slate-600"
                          }`}
                        >
                          {menuItem.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ) : null}
        </div>
      </header>
    </>
  );
};

export default Header;
