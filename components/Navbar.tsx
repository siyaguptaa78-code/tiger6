"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";
import { SITE_CONFIG } from "@/config/constants";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getWhatsAppLink = (menuItem: string) => {
    const text = encodeURIComponent(`Hi! I am visiting your site and want to know more about ${menuItem}.`);
    return `${SITE_CONFIG.whatsappLink}?text=${text}`;
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoWrapper}>
            <Image 
              src="https://tiger365com.com/wp-content/uploads/2025/04/logo-text-768x134.png"
              alt="Tiger365 Logo"
              width={180}
              height={31}
              priority
              className={styles.logoImg}
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className={styles.desktopNav}>
          <div 
            className={styles.navItemDropdown}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className={styles.dropdownToggle}>
              Tiger365 <span className={styles.caret}>▼</span>
            </span>
            {dropdownOpen && (
              <div className={styles.dropdownMenu}>
                <a href={getWhatsAppLink("Tigerexch365")} target="_blank" rel="noopener noreferrer">
                  Tigerexch365
                </a>
                <a href={getWhatsAppLink("Cricket Exchange ID")} target="_blank" rel="noopener noreferrer">
                  Cricket Exchange ID
                </a>
              </div>
            )}
          </div>

          <a href={getWhatsAppLink("Blogs")} target="_blank" rel="noopener noreferrer">Blogs</a>
          <Link href="#about">About Us</Link>
          <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer">Contact Us</a>
        </nav>

        <div className={styles.navActions}>
          <WhatsAppButton className={`${styles.desktopBtn} ${styles.registerBtn}`}>
            Get Instant ID
          </WhatsAppButton>
          
          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileDropdownSection}>
            <div className={styles.mobileDropdownHeader}>Tiger365</div>
            <div className={styles.mobileDropdownItems}>
              <a href={getWhatsAppLink("Tigerexch365")} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                - Tigerexch365
              </a>
              <a href={getWhatsAppLink("Cricket Exchange ID")} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                - Cricket Exchange ID
              </a>
            </div>
          </div>
          <a href={getWhatsAppLink("Blogs")} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>Blogs</a>
          <Link href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <a href={SITE_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
          <div className={styles.mobileActions}>
            <WhatsAppButton className={`${styles.desktopBtn} ${styles.registerBtn}`}>
              Get Instant ID
            </WhatsAppButton>
          </div>
        </div>
      )}
    </header>
  );
}
