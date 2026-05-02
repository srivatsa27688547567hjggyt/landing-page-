"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedText from "@/components/AnimatedText";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const founders = [
    {
        name: "Elena Ristavaara",
        role: "Board Member, ESPA - European Spas Association · 25+ Years in International Real Estate & Hospitality",
        image: "/pdf-assets/page4_img1.jpeg",
        bio: [
            "Elena brings extensive international experience in real estate investment, hospitality, wellness, and mixed-use development. Her background spans strategic development, investment structuring, operator alignment, and long-term asset positioning across multiple international markets.",
            "She serves as a Board Member of ESPA – the European Spas Association, one of the world's leading spa and wellness associations, contributing to strategic governance, brand development, and international expansion initiatives.",
        ],
        align: "left" as const,
    },
    {
        name: "Sophio Meshvildishvili",
        role: "Founder — Real Estate Marketing, Commercial & Sales Strategy",
        image: "/founders/sophio_IMG_2411.png",
        bio: [
            "Sophio has over a decade of hands-on experience working with major development companies, in close collaboration with both local and international investors. Her background is rooted in the commercialization of real estate projects and the translation of development strategy into market performance.",
            "Within Echelon International, Sophio is responsible for go-to-market strategy, commercial structuring, and sales management — ensuring projects function as integrated commercial systems rather than isolated marketing initiatives.",
            "She has directly managed the commercialization of over 12 residential and commercial projects across Georgian markets. Sophio is a Member of NAR — the National Association of REALTORS®, one of the world's largest professional real estate associations.",
        ],
        align: "right" as const,
    },
];

export default function Founders() {
    return (
        <section
            id="founders"
            aria-labelledby="founders-heading"
            style={{
                backgroundColor: "var(--charcoal-soft)",
                padding: "10rem 2.5rem",
                borderTop: "1px solid rgba(200,80,26,0.15)",
            }}
        >
            <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6rem" }}>
                    <ScrollReveal>
                        <p className="section-label">Founders</p>
                    </ScrollReveal>
                    <AnimatedText
                        text="The people behind the strategy"
                        as="h2"
                        splitBy="word"
                        staggerChildren={0.06}
                        style={{
                            fontFamily: "var(--font-cormorant), serif",
                            fontSize: "clamp(2rem, 4vw, 3.5rem)",
                            fontWeight: 400,
                            color: "var(--bone)",
                            textAlign: "right",
                            lineHeight: 1.1,
                            maxWidth: "480px",
                        }}
                    />
                </div>

                {founders.map((founder, i) => (
                    <div
                        key={founder.name}
                        style={{
                            display: "grid",
                            gridTemplateColumns: founder.align === "left" ? "1fr 1.8fr" : "1.8fr 1fr",
                            gap: "5rem",
                            alignItems: "start",
                            marginBottom: i === 0 ? "7rem" : 0,
                            paddingBottom: i === 0 ? "7rem" : 0,
                            borderBottom: i === 0 ? "1px solid rgba(200,80,26,0.15)" : "none",
                        }}
                    >
                        {/* Image — left side */}
                        {founder.align === "left" && (
                            <ScrollReveal direction="left">
                                <div style={{ position: "relative" }}>
                                    <motion.div
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                        style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}
                                    >
                                        <Image
                                            src={founder.image}
                                            alt={`Portrait of ${founder.name}`}
                                            fill
                                            style={{ objectFit: "cover", objectPosition: "top center" }}
                                            sizes="30vw"
                                        />
                                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 60%, rgba(26,24,22,0.6) 100%)" }} />
                                    </motion.div>
                                    <div style={{
                                        position: "absolute",
                                        top: "-12px",
                                        left: "-12px",
                                        width: "60px",
                                        height: "60px",
                                        border: "1px solid var(--orange)",
                                        zIndex: -1,
                                    }} />
                                </div>
                            </ScrollReveal>
                        )}

                        {/* Text block */}
                        <div style={{ paddingTop: "1rem" }}>
                            <AnimatedText
                                text={founder.name}
                                as="h3"
                                splitBy="char"
                                staggerChildren={0.02}
                                style={{
                                    fontFamily: "var(--font-cormorant), serif",
                                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                                    fontWeight: 400,
                                    color: "var(--bone)",
                                    lineHeight: 1.0,
                                    marginBottom: "0.5rem",
                                }}
                            />
                            <ScrollReveal delay={0.1}>
                                <div style={{ width: "40px", height: "1px", backgroundColor: "var(--orange)", marginBottom: "1rem" }} />
                            </ScrollReveal>
                            <ScrollReveal delay={0.15}>
                                <p
                                    style={{
                                        fontFamily: "var(--font-inter), sans-serif",
                                        fontSize: "0.7rem",
                                        letterSpacing: "0.15em",
                                        textTransform: "uppercase",
                                        color: "var(--orange)",
                                        marginBottom: "2rem",
                                    }}
                                >
                                    {founder.role}
                                </p>
                            </ScrollReveal>
                            <StaggerContainer stagger={0.15} delay={0.2}>
                                {founder.bio.map((para, j) => (
                                    <StaggerItem key={j}>
                                        <p
                                            style={{
                                                fontFamily: "var(--font-inter), sans-serif",
                                                fontSize: "1rem",
                                                lineHeight: 1.8,
                                                color: "var(--bone-dim)",
                                                marginBottom: j < founder.bio.length - 1 ? "1.25rem" : 0,
                                            }}
                                        >
                                            {para}
                                        </p>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>

                            {/* ESPA badge for Elena */}
                            {founder.name === "Elena Ristavaara" && (
                                <ScrollReveal delay={0.4}>
                                    <div
                                        style={{
                                            marginTop: "2rem",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "0.75rem",
                                            padding: "0.75rem 1.2rem",
                                            border: "1px solid rgba(200,80,26,0.3)",
                                            backgroundColor: "rgba(200,80,26,0.06)",
                                        }}
                                    >
                                        <span style={{
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontSize: "0.65rem",
                                            letterSpacing: "0.15em",
                                            textTransform: "uppercase",
                                            color: "var(--orange)",
                                        }}>
                                            Board Member — ESPA · European Spas Association
                                        </span>
                                    </div>
                                </ScrollReveal>
                            )}
                        </div>

                        {/* Image — right side for second founder */}
                        {founder.align === "right" && (
                            <ScrollReveal direction="right">
                                <div style={{ position: "relative" }}>
                                    <motion.div
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                        style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}
                                    >
                                        <Image
                                            src={founder.image}
                                            alt={`Portrait of ${founder.name}`}
                                            fill
                                            style={{ objectFit: "cover", objectPosition: "top center" }}
                                            sizes="30vw"
                                        />
                                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 60%, rgba(26,24,22,0.6) 100%)" }} />
                                    </motion.div>
                                    <div style={{
                                        position: "absolute",
                                        bottom: "-12px",
                                        right: "-12px",
                                        width: "60px",
                                        height: "60px",
                                        border: "1px solid var(--orange)",
                                        zIndex: -1,
                                    }} />
                                </div>
                            </ScrollReveal>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
