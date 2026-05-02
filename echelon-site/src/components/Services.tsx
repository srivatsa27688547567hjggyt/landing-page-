"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedText from "@/components/AnimatedText";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const services = [
    {
        num: "01",
        title: "Development Strategy & Feasibility",
        tagline: "Where strategic decisions define long-term asset value.",
        image: "/pdf-assets/page9_img1.jpeg",
        items: [
            "Market analysis & feasibility studies",
            "Highest & Best Use (HBU) analysis",
            "Development phasing & financial structuring",
        ],
        imageAlign: "right" as const,
    },
    {
        num: "02",
        title: "Hospitality, Wellness & Medical Spa",
        tagline: "From early concept to operator alignment and long-term positioning.",
        image: "/pdf-assets/page10_img2.jpeg",
        items: [
            "Concept development for hotels, resorts & wellness destinations",
            "Operator and brand alignment",
            "Asset positioning within mixed-use projects",
        ],
        imageAlign: "left" as const,
    },
    {
        num: "03",
        title: "Branding, Marketing & Sales Systems",
        tagline: "Branding as a strategic commercial instrument, not visual decoration.",
        image: "/pdf-assets/page11_img1.jpeg",
        items: [
            "Brand architecture, naming systems & full brand books",
            "Go-to-market strategy, pricing models & launch sequencing",
            "Sales infrastructure, CRM setup & commercial performance tracking",
        ],
        imageAlign: "right" as const,
    },
    {
        num: "04",
        title: "Investment & Capital Advisory",
        tagline: "Aligning development vision with capital expectations.",
        image: "/pdf-assets/page13_img2.jpeg",
        items: [
            "Investor positioning & partner search",
            "Deal structuring",
            "Investment advisory & operator engagement preparation",
        ],
        imageAlign: "left" as const,
    },
];

export default function Services() {
    return (
        <section
            id="services"
            aria-labelledby="services-heading"
            style={{
                backgroundColor: "var(--charcoal)",
                borderTop: "1px solid rgba(200,80,26,0.2)",
            }}
        >
            {/* Header */}
            <div
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "8rem 2.5rem 5rem",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "4rem",
                    alignItems: "end",
                }}
            >
                <div>
                    <ScrollReveal>
                        <p className="section-label" style={{ marginBottom: "1.5rem" }}>Services</p>
                    </ScrollReveal>
                    <AnimatedText
                        text="Integrated advisory across every dimension"
                        as="h2"
                        splitBy="word"
                        delay={0.1}
                        staggerChildren={0.05}
                        style={{
                            fontFamily: "var(--font-cormorant), serif",
                            fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
                            fontWeight: 400,
                            color: "var(--bone)",
                            lineHeight: 1.0,
                        }}
                    />
                </div>
                <ScrollReveal delay={0.2}>
                    <p
                        style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "1rem",
                            color: "var(--bone-dim)",
                            lineHeight: 1.8,
                            alignSelf: "end",
                        }}
                    >
                        Echelon International provides integrated advisory services across hospitality, wellness, spa, and real estate development — treating each project as a complete strategic system.
                    </p>
                </ScrollReveal>
            </div>

            {/* Service Cards */}
            {services.map((svc, i) => (
                <div
                    key={svc.num}
                    style={{
                        borderTop: "1px solid rgba(200,80,26,0.15)",
                        backgroundColor: i % 2 === 0 ? "var(--charcoal)" : "var(--charcoal-soft)",
                    }}
                >
                    <div
                        style={{
                            maxWidth: "1400px",
                            margin: "0 auto",
                            padding: "0 2.5rem",
                            display: "grid",
                            gridTemplateColumns: svc.imageAlign === "right" ? "1.1fr 0.9fr" : "0.9fr 1.1fr",
                            gap: "0",
                            minHeight: "520px",
                            alignItems: "stretch",
                        }}
                    >
                        {/* Text side */}
                        {svc.imageAlign === "right" && (
                            <ScrollReveal direction="left" style={{
                                padding: "5rem 4rem 5rem 0",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}>
                                <ServiceContent svc={svc} />
                            </ScrollReveal>
                        )}

                        {/* Image with hover zoom */}
                        <ScrollReveal
                            direction={svc.imageAlign === "right" ? "right" : "left"}
                            style={{ position: "relative", overflow: "hidden", minHeight: "420px" }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                style={{ position: "absolute", inset: 0 }}
                            >
                                <Image
                                    src={svc.image}
                                    alt={svc.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="(max-width: 768px) 100vw, 45vw"
                                />
                            </motion.div>
                            <div style={{
                                position: "absolute",
                                inset: 0,
                                background: svc.imageAlign === "right"
                                    ? "linear-gradient(90deg, transparent 60%, rgba(26,24,22,0.3) 100%)"
                                    : "linear-gradient(90deg, rgba(26,24,22,0.3) 0%, transparent 40%)",
                                zIndex: 1,
                            }} />
                        </ScrollReveal>

                        {/* Text side — left image variant */}
                        {svc.imageAlign === "left" && (
                            <ScrollReveal direction="right" style={{
                                padding: "5rem 0 5rem 4rem",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                borderLeft: "1px solid rgba(200,80,26,0.15)",
                            }}>
                                <ServiceContent svc={svc} />
                            </ScrollReveal>
                        )}
                    </div>
                </div>
            ))}
        </section>
    );
}

function ServiceContent({ svc }: { svc: typeof services[0] }) {
    return (
        <>
            <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.25, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "6rem",
                    fontWeight: 300,
                    color: "var(--orange)",
                    lineHeight: 1,
                    marginBottom: "1rem",
                }}
            >
                {svc.num}
            </motion.p>

            <h3 style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(1.7rem, 2.8vw, 2.6rem)",
                fontWeight: 400,
                color: "var(--bone)",
                lineHeight: 1.15,
                marginBottom: "1rem",
            }}>
                {svc.title}
            </h3>

            <p style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "1.15rem",
                fontStyle: "italic",
                color: "var(--bone-dim)",
                marginBottom: "2rem",
                lineHeight: 1.5,
            }}>
                {svc.tagline}
            </p>

            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ width: "40px", height: "1px", backgroundColor: "var(--orange)", marginBottom: "1.5rem", transformOrigin: "left" }}
            />

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                {svc.items.map((item, idx) => (
                    <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "0.9rem",
                            color: "var(--bone-dim)",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.75rem",
                            lineHeight: 1.6,
                        }}
                    >
                        <span style={{
                            display: "inline-block",
                            width: "6px",
                            height: "6px",
                            backgroundColor: "var(--orange)",
                            marginTop: "0.5rem",
                            flexShrink: 0,
                        }} />
                        {item}
                    </motion.li>
                ))}
            </ul>
        </>
    );
}
