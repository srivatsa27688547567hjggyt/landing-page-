"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import AnimatedText from "@/components/AnimatedText";
import ParallaxImage from "@/components/ParallaxImage";
import { motion } from "framer-motion";

export default function CaseStudy() {
    return (
        <section
            id="work"
            aria-labelledby="casestudy-heading"
            style={{
                backgroundColor: "var(--charcoal)",
                borderTop: "1px solid rgba(200,80,26,0.2)",
                overflow: "hidden",
            }}
        >
            {/* Full-bleed hero image with parallax */}
            <ScrollReveal direction="scale">
                <ParallaxImage
                    src="/pdf-assets/page15_img1.jpeg"
                    alt="Ensana Hotels Sairme Resort"
                    speed={0.12}
                    sizes="100vw"
                    objectPosition="center 60%"
                    style={{ height: "60vh" }}
                    overlay={
                        <>
                            <div style={{
                                position: "absolute",
                                inset: 0,
                                zIndex: 1,
                                background: "linear-gradient(180deg, transparent 40%, var(--charcoal) 100%)",
                            }} />
                            {/* Overlay label */}
                            <div style={{
                                position: "absolute",
                                bottom: "2rem",
                                left: "2.5rem",
                                zIndex: 2,
                            }}>
                                <p style={{
                                    fontFamily: "var(--font-inter), sans-serif",
                                    fontSize: "0.65rem",
                                    letterSpacing: "0.25em",
                                    textTransform: "uppercase",
                                    color: "var(--orange)",
                                    marginBottom: "0.5rem",
                                }}>
                                    Selected Project Experience
                                </p>
                            </div>
                        </>
                    }
                />
            </ScrollReveal>

            {/* Content */}
            <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "4rem 2.5rem 8rem" }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "6rem",
                    alignItems: "start",
                }}>
                    {/* Left — title and context */}
                    <div>
                        <ScrollReveal>
                            <h2
                                id="casestudy-heading"
                                style={{
                                    fontFamily: "var(--font-cormorant), serif",
                                    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                                    fontWeight: 400,
                                    color: "var(--bone)",
                                    lineHeight: 1.05,
                                    marginBottom: "1.5rem",
                                }}
                            >
                                Bringing Europe's Leading
                                <br />
                                <em style={{ color: "var(--orange)" }}>Medical Spa Operator to Georgia</em>
                            </h2>
                        </ScrollReveal>

                        <StaggerContainer stagger={0.15} delay={0.1}>
                            <StaggerItem>
                                <p
                                    style={{
                                        fontFamily: "var(--font-inter), sans-serif",
                                        fontSize: "1.1rem",
                                        lineHeight: 1.6,
                                        color: "var(--bone)",
                                        marginBottom: "2rem",
                                        fontWeight: 400,
                                    }}
                                >
                                    How Echelon International structured the market entry of Ensana Hotels into the Caucasus positioning Sairme as an internationally recognized wellness destination.
                                </p>
                            </StaggerItem>

                            <StaggerItem>
                                <div
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.75rem",
                                        padding: "0.5rem 1rem",
                                        backgroundColor: "rgba(200,80,26,0.1)",
                                        border: "1px solid rgba(200,80,26,0.3)",
                                        marginBottom: "2rem",
                                    }}
                                >
                                    <span style={{
                                        fontFamily: "var(--font-inter), sans-serif",
                                        fontSize: "0.65rem",
                                        letterSpacing: "0.15em",
                                        textTransform: "uppercase",
                                        color: "var(--orange)",
                                        fontWeight: 500,
                                    }}>
                                        Market Entry Strategy · Operator Alignment · Brand Positioning
                                    </span>
                                </div>
                            </StaggerItem>

                            <StaggerItem>
                                <p
                                    style={{
                                        fontFamily: "var(--font-inter), sans-serif",
                                        fontSize: "1rem",
                                        lineHeight: 1.8,
                                        color: "var(--bone-dim)",
                                        marginBottom: "2.5rem",
                                    }}
                                >
                                    Echelon International supported the project at the strategic level, including market positioning, communication strategy, and alignment between the international operator and the local asset structure — positioning Sairme as a multi-layered wellness destination.
                                </p>
                            </StaggerItem>
                        </StaggerContainer>

                        {/* Meta */}
                        <ScrollReveal delay={0.3}>
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr 1.5fr",
                                    gap: "0",
                                    border: "1px solid rgba(200,80,26,0.25)",
                                }}
                            >
                                {[
                                    { label: "Year", value: "2025" },
                                    { label: "Sector", value: "Hospitality & Medical Wellness" },
                                    { label: "Role", value: "Market Entry Strategy · Operator Alignment · Brand Positioning" },
                                ].map((meta, i) => (
                                    <div
                                        key={meta.label}
                                        style={{
                                            padding: "1.25rem 1.5rem",
                                            borderRight: i < 2 ? "1px solid rgba(200,80,26,0.25)" : "none",
                                        }}
                                    >
                                        <p style={{
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontSize: "0.6rem",
                                            letterSpacing: "0.2em",
                                            textTransform: "uppercase",
                                            color: "var(--orange)",
                                            marginBottom: "0.4rem",
                                        }}>
                                            {meta.label}
                                        </p>
                                        <p style={{
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontSize: "0.85rem",
                                            color: "var(--bone)",
                                            fontWeight: 400,
                                        }}>
                                            {meta.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                        {/* Three assets note */}
                        <ScrollReveal delay={0.4} direction="left">
                            <p
                                style={{
                                    fontFamily: "var(--font-inter), sans-serif",
                                    fontSize: "0.8rem",
                                    color: "var(--bone-dim)",
                                    marginTop: "1.5rem",
                                    paddingLeft: "1rem",
                                    borderLeft: "2px solid var(--orange)",
                                }}
                            >
                                Three assets: New Sairme · Sairme Resort · Sairme Public Spa — Reopening scheduled for 2026.
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* Right — staggered images */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        <ScrollReveal direction="right" delay={0.1}>
                            <motion.div
                                data-cursor="view"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}
                            >
                                <Image
                                    src="/pdf-assets/page15_img2.jpeg"
                                    alt="Sairme Resort exterior"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="40vw"
                                />
                            </motion.div>
                        </ScrollReveal>
                        <ScrollReveal direction="right" delay={0.25}>
                            <motion.div
                                data-cursor="view"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                style={{
                                    position: "relative",
                                    aspectRatio: "16/9",
                                    overflow: "hidden",
                                    marginLeft: "3rem",
                                }}
                            >
                                <Image
                                    src="/pdf-assets/page15_img4.jpeg"
                                    alt="Sairme Resort interior"
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="40vw"
                                />
                            </motion.div>
                        </ScrollReveal>
                        {/* Ensana Hotels logo */}
                        <ScrollReveal delay={0.35}>
                            <div
                                style={{
                                    marginLeft: "auto",
                                    padding: "1.25rem 2rem",
                                    border: "1px solid rgba(200,80,26,0.2)",
                                    backgroundColor: "rgba(240,235,225,0.04)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Image
                                    src="/pdf-assets/page14_img14.jpeg"
                                    alt="Ensana Hotels"
                                    width={200}
                                    height={80}
                                    style={{ objectFit: "contain", filter: "brightness(0) invert(1) opacity(0.7)" }}
                                />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
