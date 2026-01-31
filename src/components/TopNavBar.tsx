'use client';
import { toSentenceCase } from '@/helpers';
import { cn } from '@/lib/utils/index';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { LuChevronDown, LuDownloadCloud, LuMenu, LuX } from 'react-icons/lu';
import { landingPages } from '@/assets/data';

import logoDark from '@/assets/images/mainLogo.png';
import logoLight from '@/assets/images/mainLogo.png';
import { MenuItem } from '@/data/appData';

const TopNavBar = ({
  menuItems,
  position,
  hasDownloadButton,
}: {
  menuItems: MenuItem[];
  position: 'sticky' | 'fixed';
  hasDownloadButton?: boolean;
}) => {

  const navbarRef = useRef<HTMLDivElement>(null);
  const hash = typeof window !== 'undefined' ? window.location.hash : '';
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = (e: Event) => {
      // e.preventDefault(); // Do not prevent default scroll behavior
      activeSection();
      if (navbarRef.current) {
        if (window.scrollY >= 40) navbarRef.current.classList.add('nav-sticky');
        else navbarRef.current.classList.remove('nav-sticky');
      }
    };

    document.addEventListener('scroll', handleScroll);

    // Initial check
    if (navbarRef.current) {
      if (window.scrollY >= 40) navbarRef.current.classList.add('nav-sticky');
    }

    const timeout = setTimeout(() => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [hash]);

  const [activation, setActivation] = useState<string>(menuItems[0].href);

  const activeSection = () => {
    const scrollY = window.scrollY;

    for (let i = menuItems.length - 1; i >= 0; i--) {
      const section = menuItems[i];
      const el: HTMLElement | null = document.getElementById(section.href)
      if (el && el.offsetTop <= scrollY + 150) {
        setActivation(section.href);
        return;
      }
    }
  };

  return (
    <>
      <header
        ref={navbarRef}
        id="navbar"
        className={cn(
          position,
          'inset-x-0 top-0 z-[60] w-full border-b border-transparent transition-all duration-300',
          'bg-white/80 dark:bg-default-50/80 backdrop-blur-md lg:bg-transparent lg:dark:bg-transparent', // Mobile default
          '[&.nav-sticky]:bg-white/90 [&.nav-sticky]:shadow-md [&.nav-sticky]:backdrop-blur-3xl dark:[&.nav-sticky]:bg-default-50/90 dark:[&.nav-sticky]:border-default-200'
        )}
      >
        <div className="flex h-full items-center py-4">
          <div className="container">
            <nav className="flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap">
              <div className="flex w-full items-center justify-between lg:w-auto">
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src={logoDark}
                    alt="logo"
                    className="flex w-12 dark:hidden object-cover"
                  />
                  <Image
                    src={logoLight}
                    alt="logo"
                    className="hidden w-12 dark:flex object-cover dark:invert" // Added invert if using same logo for dark mode checking
                  />
                  <span className="text-xl font-bold text-default-800 dark:text-white">FORKAPI</span>
                </Link>
                <div className="flex items-center gap-2">
                  {/* Mobile Menu Toggle */}
                  <button
                    className="hs-collapse-toggle inline-block lg:hidden text-default-600 dark:text-default-300 hover:text-default-900 dark:hover:text-white"
                    data-hs-overlay="#mobile-menu"
                  >
                    <LuMenu className="h-7 w-7" />
                  </button>
                </div>
              </div>

              {/* Desktop Menu */}
              <ul className="menu relative mx-auto hidden grow items-center justify-center lg:flex">
                {menuItems.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className={cn(
                        'menu-item mx-2 font-medium capitalize transition-all duration-300 hover:text-primary',
                        // Kalo mau berdasarkan scroll
                        // activation === item.href ? 'text-primary' : 'text-default-800 dark:text-default-300'

                        pathname === item.href ? 'text-primary' : 'text-default-800 dark:text-default-300'
                      )}
                    >
                      <Link
                        className="inline-flex items-center rounded-full px-2 py-0.5 text-sm lg:text-base"
                        href={`${item.href}`}
                      >
                        {toSentenceCase(item.label)}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="ms-auto hidden shrink gap-2 lg:inline-flex">
                <Link
                  href=""
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-1.5 text-base text-white transition-all hover:bg-primary-700"
                >
                  <LuDownloadCloud className="h-4 w-4 fill-white/40" />
                  <span className="hidden sm:block">Download E-Book</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="hs-overlay fixed bottom-0 left-0 top-0 z-[61] hidden h-screen w-full max-w-[270px] -translate-x-full transform border-r border-default-200 bg-white transition-all [--body-scroll:true] [--overlay-backdrop:false] hs-overlay-open:translate-x-0 dark:bg-default-50 dark:border-default-200"
        tabIndex={-1}
      >
        <div className="flex h-[74px] items-center justify-between border-b border-dashed border-default-200 px-4 transition-all duration-300">
          <Link href="/">
            <span className="text-xl font-bold text-default-800 dark:text-white">FORKAPI</span>
          </Link>
          <div data-hs-overlay="#mobile-menu" className="hs-collapse-toggle text-default-600 dark:text-white cursor-pointer">
            <LuX size={24} />
          </div>
        </div>
        <div className="h-[calc(100%-4rem)] overflow-y-auto">
          <nav className="hs-accordion-group flex h-full w-full flex-col flex-wrap p-4">
            <ul className="space-y-1">
              {menuItems.map((item, idx) => {
                const linkHref = item.href;
                // const linkHref = item === 'home' ? '/' : `/${item === 'tentang kami' ? 'about-us' : item === 'konferensi' ? 'conference' : item === 'kegiatan' ? 'activity' : 'gallery'}`;

                return (
                  <li
                    key={idx}
                    className={cn(
                      'rounded text-sm font-medium capitalize text-default-900 dark:text-default-300 transition-all duration-300 hover:bg-default-100 dark:hover:bg-default-100/10 hover:text-primary [&.active]:bg-default-100 dark:[&.active]:bg-default-100/10 [&.active]:text-primary',
                      (pathname === linkHref || (linkHref !== '/' && pathname.startsWith(linkHref))) && 'active'
                    )}
                  >
                    <Link className="block w-full px-4 py-2.5" href={linkHref}>
                      {toSentenceCase(item.label)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default TopNavBar;
