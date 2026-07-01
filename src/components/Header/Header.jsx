'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, SITE_NAME, SITE_TAGLINE } from '@/constants/site';
import SiteLogo from '@/components/Brand/SiteLogo';
import { useScrollLock } from '@/hooks/useScrollLock';
import { useScrolled } from '@/hooks/useScrolled';
import styles from './Header.module.css';

function isLinkActive(href, pathname) {
  if (href === '/') return pathname === '/';
  if (href.includes('#')) return pathname === href.split('#')[0];
  return pathname === href || pathname.startsWith(`${href}/`);
}

function HamburgerIcon({ isOpen }) {
  return (
    <span className={styles.hamburger} aria-hidden="true">
      <span className={`${styles.hamburgerLine} ${isOpen ? styles.hamburgerLineTop : ''}`} />
      <span className={`${styles.hamburgerLine} ${isOpen ? styles.hamburgerLineMid : ''}`} />
      <span className={`${styles.hamburgerLine} ${isOpen ? styles.hamburgerLineBot : ''}`} />
    </span>
  );
}

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();
  const isScrolled = useScrolled(16);
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  useScrollLock(isNavOpen);

  const handleCloseNav = useCallback(() => {
    setIsNavOpen(false);
  }, []);

  const handleToggleNav = useCallback(() => {
    setIsNavOpen((prev) => !prev);
  }, []);

  /* Close menu on route change */
  useEffect(() => {
    handleCloseNav();
  }, [pathname, handleCloseNav]);

  /* Close on Escape */
  useEffect(() => {
    if (!isNavOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') handleCloseNav();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isNavOpen, handleCloseNav]);

  /* Close on outside click (desktop fallback) */
  useEffect(() => {
    if (!isNavOpen) return undefined;

    const handlePointerDown = (event) => {
      const target = event.target;
      if (
        menuRef.current?.contains(target) ||
        headerRef.current?.contains(target)
      ) {
        return;
      }
      handleCloseNav();
    };

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [isNavOpen, handleCloseNav]);

  /* Close when clicking the backdrop (not the panel) */
  const handleOverlayClick = useCallback(
    (event) => {
      if (event.target === event.currentTarget) handleCloseNav();
    },
    [handleCloseNav],
  );

  const headerClass = [
    styles.siteHeader,
    isScrolled ? styles.siteHeaderScrolled : '',
    isNavOpen ? styles.siteHeaderMenuOpen : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <header ref={headerRef} className={headerClass}>
        <div className={styles.headerInner}>
          <Link
            href="/"
            className={styles.logo}
            aria-label={`${SITE_NAME} home`}
            onClick={handleCloseNav}
          >
            <SiteLogo className={styles.logoMark} variant="header" decorative />
            <span className={styles.logoWordmark}>
              <span className={styles.logoName}>{SITE_NAME}</span>
              <span className={styles.logoTag}>{SITE_TAGLINE}</span>
            </span>
          </Link>

          <nav className={styles.desktopNav} aria-label="Main navigation">
            <ul className={styles.navList}>
              {NAV_LINKS.map((link) => {
                const isActive = isLinkActive(link.href, pathname);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span className={styles.navLinkText}>{link.label}</span>
                      <span className={styles.navLinkUnderline} aria-hidden="true" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={isNavOpen}
            aria-controls="mobile-navigation"
            aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
            onClick={handleToggleNav}
          >
            <HamburgerIcon isOpen={isNavOpen} />
          </button>
        </div>
      </header>

      {/* Fullscreen mobile menu */}
      <div
        ref={menuRef}
        id="mobile-navigation"
        className={`${styles.mobileOverlay} ${isNavOpen ? styles.mobileOverlayOpen : ''}`}
        aria-hidden={!isNavOpen}
        onClick={handleOverlayClick}
      >
        <div className={styles.mobilePanel} onClick={(event) => event.stopPropagation()}>
          <nav aria-label="Mobile navigation">
            <ul className={styles.mobileNavList}>
              {NAV_LINKS.map((link, index) => {
                const isActive = isLinkActive(link.href, pathname);
                return (
                  <li
                    key={link.href}
                    className={styles.mobileNavItem}
                    style={{ '--item-delay': `${index * 60}ms` }}
                  >
                    <Link
                      href={link.href}
                      className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={handleCloseNav}
                    >
                      {link.label}
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
}
