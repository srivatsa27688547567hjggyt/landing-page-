"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
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
                backgroundColor: scrolled ? "rgba(26,24,22,0.96)" : "transparent",
                backdropFilter: scrolled ? "blur(10px)" : "none",
                borderBottom: scrolled ? "1px solid rgba(200,80,26,0.15)" : "1px solid transparent",
                transition: "background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
            }}
            aria-label="Main navigation"
        >
            {/* Logo */}
            <a
                href="#"
                style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    color: "var(--bone)",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    lineHeight: 1,
                }}
            >
                Echelon<span style={{ color: "var(--orange)" }}>.</span>
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
            >
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <a
                            href={link.href}
                            style={{
                                fontFamily: "var(--font-inter), sans-serif",
                                fontSize: "0.725rem",
                                fontWeight: 400,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: "var(--bone-dim)",
                                textDecoration: "none",
                                transition: "color 0.25s ease",
                                position: "relative",
                            }}
                            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--bone)")}
                            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--bone-dim)")}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
                <li>
                    <a
                        href="#contact"
                        style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "0.725rem",
                            fontWeight: 500,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "var(--charcoal)",
                            backgroundColor: "var(--orange)",
                            padding: "0.55rem 1.2rem",
                            textDecoration: "none",
                            transition: "background-color 0.25s ease",
                            display: "inline-block",
                        }}
                        onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = "var(--orange-hover)")}
                        onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = "var(--orange)")}
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
        </nav>
    );
}
