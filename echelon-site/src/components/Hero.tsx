"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedText from "@/components/AnimatedText";
import { HeroImage } from "@/components/ParallaxImage";
import Magnetic from "@/components/Magnetic";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollY } = useScroll();
    
    // Parallax values for content — starts immediately for premium feel, but fades slower for readability
    const y1 = useTransform(scrollY, [0, 1000], [0, -200]); // Aggressive upward scroll for depth
    const bgY = useTransform(scrollY, [0, 1000], [0, 300]); // Background pushes down
    const opacity = useTransform(scrollY, [0, 700], [1, 0]);

    return (
        <section
            ref={containerRef}
            id="hero"
            aria-label="Hero"
            style={{
                position: "relative",
                minHeight: "100vh",
                backgroundColor: "var(--charcoal)",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
            }}
        >
            {/* Background image — editorial bleed on the right with zoom-in */}
            <motion.div
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "52%",
                    height: "100%",
                    zIndex: 1,
                    y: bgY,
                    overflow: "hidden",
                    willChange: "transform"
                }}
            >
                <HeroImage
                    src="/hero-bg.jpg"
                    alt="City skyscrapers shot from below"
                    sizes="52vw"
                    overlay={
                        <>
                            {/* Dark overlay for cinematic feel and text readability (Animated reveal) */}
                            <motion.div
                                initial={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }}
                                animate={{ backgroundColor: "rgba(0, 0, 0, 0.55)" }}
                                transition={{ duration: 2.5, ease: "easeOut" }}
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                }}
                            />
                            {/* Edge blending gradients */}
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(90deg, var(--charcoal) 0%, rgba(26,24,22,0.6) 40%, rgba(26,24,22,0.1) 100%)",
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(180deg, transparent 60%, var(--charcoal) 100%)",
                                }}
                            />
                            {/* Glass glint sweep */}
                            <motion.div
                                animate={{
                                    x: ["-100%", "150%"],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    repeatDelay: 8,
                                    ease: "easeInOut",
                                }}
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.08) 55%, transparent 60%)",
                                    zIndex: 2,
                                    pointerEvents: "none",
                                    willChange: "transform"
                                }}
                            />
                        </>
                    }
                />
            </motion.div>

            {/* Tiny grain texture overlay */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 2,
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
                    backgroundRepeat: "repeat",
                    backgroundSize: "200px",
                    pointerEvents: "none",
                }}
            />

            {/* Content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{
                    position: "relative",
                    zIndex: 3,
                    width: "100%",
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "8rem 2.5rem 4rem",
                    y: y1,
                    opacity: opacity,
                }}
            >
                {/* Floating wrapper for gentle movement */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}
                    >
                        <div style={{ width: "30px", height: "1px", backgroundColor: "var(--orange)" }} />
                        <motion.p
                            initial={{ letterSpacing: "0.5em", filter: "blur(4px)" }}
                            animate={{ letterSpacing: "0.28em", filter: "blur(0px)" }}
                            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                            style={{
                                fontFamily: "var(--font-inter), sans-serif",
                                fontSize: "0.65rem",
                                fontWeight: 500,
                                textTransform: "uppercase",
                                color: "var(--orange)",
                                willChange: "filter, letter-spacing"
                            }}
                        >
                            INTERNATIONAL SALES ADVISORY
                        </motion.p>
                    </motion.div>

                    {/* Main headline — staggered word reveal, Makhno-style */}
                    <div
                        style={{
                            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                            lineHeight: 0.96,
                            letterSpacing: "-0.01em",
                            fontWeight: 400,
                            marginBottom: "2.5rem",
                        }}
                    >
                        {["Hotels.", "Wellness.", "Real Estate."].map((word, i) => (
                            <div key={word} style={{ overflow: "hidden" }}>
                                <motion.span
                                    initial={{ opacity: 0, y: 100, rotateX: 30, filter: "blur(10px)" }}
                                    animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                                    transition={{
                                        duration: 1.5,
                                        delay: 0.4 + i * 0.15,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    style={{
                                        display: "block",
                                        fontSize: "clamp(64px, 10vw, 148px)",
                                        color: "var(--bone)",
                                        marginLeft: `clamp(${i * 12}px, ${i * 3}vw, ${i * 56}px)`,
                                        transformOrigin: "bottom left",
                                        willChange: "transform, opacity, filter",
                                    }}
                                >
                                    {word}
                                </motion.span>
                            </div>
                        ))}
                    </div>

                    {/* Service Rows */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "3.5rem" }}
                    >
                        {[
                            { 
                                icon: (
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter">
                                        <path d="M3 21h18"></path>
                                        <path d="M5 21V7l8-4v18"></path>
                                        <path d="M19 21V11l-6-4"></path>
                                        <path d="M9 9v.01"></path>
                                        <path d="M9 13v.01"></path>
                                        <path d="M9 17v.01"></path>
                                    </svg>
                                ), 
                                title: "Hotels · wellness · spa", 
                                desc: "Bringing international hotel, wellness, and spa brands into high-potential destinations." 
                            },
                            { 
                                icon: (
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                    </svg>
                                ), 
                                title: "REAL ESTATE INVESTMENTS", 
                                desc: "Connecting international investors with landmark real estate opportunities." 
                            },
                            { 
                                icon: (
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                ), 
                                title: "DESTINATION MARKETING", 
                                desc: "World-class expertise, international partners, and strategic market positioning." 
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 + i * 0.2 }}
                                style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
                            >
                                <span style={{ color: "var(--orange)", display: "flex", alignItems: "center", justifyContent: "center", width: "32px" }}>{item.icon}</span>
                                <div style={{ width: "2px", height: "50px", backgroundColor: "var(--orange)" }} />
                                <div>
                                    <h3 style={{
                                        fontFamily: "var(--font-inter), sans-serif",
                                        fontSize: "0.85rem",
                                        letterSpacing: "0.15em",
                                        textTransform: "uppercase",
                                        color: "var(--bone)",
                                        marginBottom: "0.25rem",
                                        fontWeight: 600
                                    }}>{item.title}</h3>
                                    <p style={{
                                        fontFamily: "var(--font-inter), sans-serif",
                                        fontSize: "1rem",
                                        color: "var(--bone-dim)",
                                        fontWeight: 300,
                                        maxWidth: "500px"
                                    }}>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
                        style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}
                    >
                        <Magnetic strength={0.2}>
                            <a
                                href="#services"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                    fontFamily: "var(--font-inter), sans-serif",
                                    fontSize: "0.75rem",
                                    fontWeight: 500,
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    color: "var(--charcoal)",
                                    backgroundColor: "var(--orange)",
                                    padding: "1.1rem 2.4rem",
                                    textDecoration: "none",
                                    position: "relative",
                                    overflow: "hidden",
                                    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
                                    willChange: "background-color, box-shadow",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--orange-hover)";
                                    (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(200,80,26,0.4)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--orange)";
                                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                                }}
                            >
                                <span style={{ position: "relative", zIndex: 1 }}>VIEW INVESTMENT OPPORTUNITIES &rarr;</span>
                            </a>
                        </Magnetic>
                        
                        <Magnetic strength={0.15}>
                            <a
                                href="#contact"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    fontFamily: "var(--font-inter), sans-serif",
                                    fontSize: "0.75rem",
                                    fontWeight: 400,
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    color: "var(--bone-dim)",
                                    textDecoration: "none",
                                    borderBottom: "1px solid rgba(200,80,26,0.3)",
                                    paddingBottom: "4px",
                                    transition: "color 0.3s ease, border-color 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.color = "var(--bone)";
                                    (e.currentTarget as HTMLElement).style.borderColor = "var(--orange)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.color = "var(--bone-dim)";
                                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,80,26,0.3)";
                                }}
                            >
                                DISCUSS YOUR INVESTMENT
                            </a>
                        </Magnetic>
                    </motion.div>
                </motion.div>

                {/* Scroll hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.2 }}
                    style={{
                        position: "absolute",
                        bottom: "-2rem",
                        left: "0",
                        display: "flex",
                        alignItems: "center",
                        gap: "1.5rem",
                    }}
                >
                    <div style={{ 
                        width: "1px", 
                        height: "80px", 
                        backgroundColor: "rgba(200,80,26,0.2)",
                        position: "relative",
                        overflow: "hidden"
                    }}>
                        <motion.div
                            animate={{ y: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            style={{
                                width: "100%",
                                height: "30%",
                                background: "linear-gradient(to bottom, transparent, var(--orange), transparent)",
                                position: "absolute",
                            }}
                        />
                    </div>
                    <span
                        style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "0.6rem",
                            letterSpacing: "0.3em",
                            textTransform: "uppercase",
                            color: "var(--bone-dim)",
                            opacity: 0.6,
                        }}
                    >
                        Keep Exploring
                    </span>
                </motion.div>
            </motion.div>
        </section>
    );
}
