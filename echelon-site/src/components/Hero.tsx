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
    
    // Parallax values for content
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

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
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "52%",
                    height: "100%",
                    zIndex: 1,
                }}
            >
                <HeroImage
                    src="/pdf-assets/page2_img1.jpeg"
                    alt="Luxury resort destination"
                    sizes="52vw"
                    overlay={
                        <>
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
                            {/* Subtle light glint */}
                            <motion.div
                                animate={{
                                    opacity: [0, 0.15, 0],
                                    x: ["-100%", "100%"],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatDelay: 5,
                                    ease: "easeInOut",
                                }}
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)",
                                    zIndex: 2,
                                    pointerEvents: "none",
                                }}
                            />
                        </>
                    }
                />
            </div>

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
                        <p
                            style={{
                                fontFamily: "var(--font-inter), sans-serif",
                                fontSize: "0.65rem",
                                fontWeight: 500,
                                letterSpacing: "0.28em",
                                textTransform: "uppercase",
                                color: "var(--orange)",
                            }}
                        >
                            Integrated Advisory
                        </p>
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

                    {/* Tagline */}
                    <AnimatedText
                        text="One Integrated Strategic System — from concept to commercialization and capital."
                        as="p"
                        variant="blur"
                        delay={1.2}
                        staggerChildren={0.02}
                        style={{
                            fontFamily: "var(--font-cormorant), serif",
                            fontSize: "clamp(1.2rem, 2.2vw, 1.75rem)",
                            fontWeight: 300,
                            fontStyle: "italic",
                            color: "var(--bone-dim)",
                            maxWidth: "520px",
                            marginBottom: "3.5rem",
                            lineHeight: 1.45,
                        }}
                    />

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
                                    transition: "background-color 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--orange-hover)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--orange)";
                                }}
                            >
                                <span style={{ position: "relative", zIndex: 1 }}>See How We Work</span>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ position: "relative", zIndex: 1 }}>
                                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                                </svg>
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
                                Start a Conversation
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
