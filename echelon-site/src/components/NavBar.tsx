"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#founders", label: "Founders" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
];

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: "0 2.5rem",
                height: "72px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: scrolled ? "rgba(26,24,22,0.92)" : "transparent",
                backdropFilter: scrolled ? "blur(12px)" : "none",
                borderBottom: scrolled ? "1px solid rgba(200,80,26,0.12)" : "1px solid transparent",
                transition: "background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
            }}
            aria-label="Main navigation"
        >
            {/* Logo */}
            <a
                href="#"
                style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                }}
            >
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    style={{
                        position: "relative",
                        width: "clamp(48px, 10vw, 64px)",
                        height: "clamp(48px, 10vw, 64px)",
                        borderRadius: "50%",
                        overflow: "hidden",
                        backgroundColor: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(200,80,26,0.15)",
                        flexShrink: 0
                    }}
                >
                    <Image
                        src="/logo-round.png"
                        alt="Echelon International"
                        fill
                        style={{ objectFit: "contain", padding: "8px" }}
                        priority
                    />
                </motion.div>
            </a>

            {/* Desktop Links */}
            <ul
                style={{
                    display: "flex",
                    gap: "2.5rem",
                    listStyle: "none",
                    alignItems: "center",
                }}
                className="nav-links-desktop"
                onMouseLeave={() => setHoveredLink(null)}
            >
                {navLinks.map((link) => (
                    <li key={link.href} style={{ position: "relative" }}>
                        <a
                            href={link.href}
                            style={{
                                fontFamily: "var(--font-inter), sans-serif",
                                fontSize: "0.725rem",
                                fontWeight: 400,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: hoveredLink === link.href ? "var(--bone)" : "var(--bone-dim)",
                                textDecoration: "none",
                                transition: "color 0.3s ease",
                                padding: "0.5rem 0",
                            }}
                            onMouseEnter={() => setHoveredLink(link.href)}
                        >
                            {link.label}
                        </a>
                        {hoveredLink === link.href && (
                            <motion.div
                                layoutId="nav-underline"
                                style={{
                                    position: "absolute",
                                    bottom: "-2px",
                                    left: 0,
                                    right: 0,
                                    height: "1px",
                                    backgroundColor: "var(--orange)",
                                }}
                                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                            />
                        )}
                    </li>
                ))}
                <li style={{ marginLeft: "1rem" }}>
                    <a
                        href="#contact"
                        data-cursor="contact"
                        style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "0.725rem",
                            fontWeight: 500,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "var(--charcoal)",
                            backgroundColor: "var(--orange)",
                            padding: "0.55rem 1.4rem",
                            textDecoration: "none",
                            transition: "background-color 0.3s ease, transform 0.3s ease",
                            display: "inline-block",
                        }}
                        onMouseEnter={(e) => {
                            (e.target as HTMLElement).style.backgroundColor = "var(--orange-hover)";
                            (e.target as HTMLElement).style.transform = "translateY(-1px)";
                        }}
                        onMouseLeave={(e) => {
                            (e.target as HTMLElement).style.backgroundColor = "var(--orange)";
                            (e.target as HTMLElement).style.transform = "translateY(0)";
                        }}
                    >
                        Inquire
                    </a>
                </li>
            </ul>

            {/* Mobile Hamburger */}
            <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                style={{
                    display: "none",
                    flexDirection: "column",
                    gap: "5px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "4px",
                }}
                className="hamburger"
            >
                {[0, 1, 2].map((i) => (
                    <span
                        key={i}
                        style={{
                            display: "block",
                            width: "24px",
                            height: "1px",
                            backgroundColor: "var(--bone)",
                            transition: "transform 0.3s ease, opacity 0.3s ease",
                        }}
                    />
                ))}
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        backgroundColor: "var(--charcoal)",
                        zIndex: 99,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "2rem",
                    }}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            style={{
                                fontFamily: "var(--font-cormorant), serif",
                                fontSize: "2.5rem",
                                fontWeight: 400,
                                color: "var(--bone)",
                                textDecoration: "none",
                                letterSpacing: "0.05em",
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
        </motion.nav>
    );
}
