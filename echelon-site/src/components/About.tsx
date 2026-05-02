"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import AnimatedText from "@/components/AnimatedText";
import ParallaxImage from "@/components/ParallaxImage";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            style={{
                backgroundColor: "var(--charcoal)",
                padding: "10rem 2.5rem",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "6rem",
                    alignItems: "start",
                }}
            >
                {/* Left — Label + Large Quote */}
                <div style={{ paddingTop: "0.5rem" }}>
                    <ScrollReveal delay={0}>
                        <p className="section-label" style={{ marginBottom: "3rem" }}>
                            Who We Are
                        </p>
                    </ScrollReveal>

                    <AnimatedText
                        text="Strategic clarity determines future value."
                        as="h2"
                        splitBy="word"
                        delay={0.1}
                        staggerChildren={0.06}
                        style={{
                            fontFamily: "var(--font-cormorant), serif",
                            fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
                            fontWeight: 400,
                            color: "var(--bone)",
                            lineHeight: 1.05,
                            marginBottom: "2rem",
                        }}
                    />

                    <ScrollReveal delay={0.2}>
                        <div
                            style={{
                                width: "40px",
                                height: "1px",
                                backgroundColor: "var(--orange)",
                                marginBottom: "2rem",
                            }}
                        />
                    </ScrollReveal>

                    <StaggerContainer stagger={0.15} delay={0.2}>
                        <StaggerItem>
                            <p
                                style={{
                                    fontFamily: "var(--font-inter), sans-serif",
                                    fontSize: "1rem",
                                    lineHeight: 1.8,
                                    color: "var(--bone-dim)",
                                    maxWidth: "480px",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                Echelon International is an integrated advisory company specializing in hotels, wellness &amp; spa destinations, and real estate development.
                            </p>
                        </StaggerItem>

                        <StaggerItem>
                            <p
                                style={{
                                    fontFamily: "var(--font-inter), sans-serif",
                                    fontSize: "1rem",
                                    lineHeight: 1.8,
                                    color: "var(--bone-dim)",
                                    maxWidth: "480px",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                We work with developers, investors, and operators at the stage where strategic decisions define long-term value. We enter where the stakes are highest — and build the strategic foundation that makes assets perform.
                            </p>
                        </StaggerItem>
                    </StaggerContainer>

                    {/* Philosophy anchor */}
                    <ScrollReveal delay={0.4} direction="left">
                        <div
                            style={{
                                marginTop: "3rem",
                                padding: "2rem",
                                borderLeft: "2px solid var(--orange)",
                                backgroundColor: "var(--charcoal-soft)",
                            }}
                        >
                            <p
                                style={{
                                    fontFamily: "var(--font-cormorant), serif",
                                    fontSize: "1.4rem",
                                    fontWeight: 300,
                                    fontStyle: "italic",
                                    color: "var(--bone)",
                                    lineHeight: 1.5,
                                }}
                            >
                                &ldquo;We operate at the intersection of strategy, capital, and execution.&rdquo;
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Right — Editorial image with offset */}
                <ScrollReveal direction="right" delay={0.15}>
                    <div style={{ position: "relative" }}>
                        <div
                            data-cursor="view"
                            style={{
                                position: "relative",
                                aspectRatio: "4/3",
                                overflow: "hidden",
                            }}
                        >
                            <Image
                                src="/pdf-assets/page3_img1.jpeg"
                                alt="Echelon International – Advisory"
                                fill
                                style={{ objectFit: "cover", objectPosition: "center" }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        {/* Offset accent box */}
                        <div
                            style={{
                                position: "absolute",
                                bottom: "-2rem",
                                right: "-2rem",
                                width: "140px",
                                height: "140px",
                                border: "1px solid var(--orange)",
                                zIndex: -1,
                            }}
                        />

                        {/* Stats bar */}
                        <StaggerContainer stagger={0.1} delay={0.3} style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "0",
                            marginTop: "1.5rem",
                            border: "1px solid rgba(200,80,26,0.25)",
                        }}>
                            {[
                                { num: "17+", label: "Years Combined Experience" },
                                { num: "4", label: "Core Advisory Pillars" },
                                { num: "2", label: "European Offices" },
                                { num: "∞", label: "Long-term Value Focus" },
                            ].map((stat, i) => (
                                <StaggerItem key={stat.label} style={{
                                    padding: "1.5rem",
                                    borderRight: i % 2 === 0 ? "1px solid rgba(200,80,26,0.25)" : "none",
                                    borderBottom: i < 2 ? "1px solid rgba(200,80,26,0.25)" : "none",
                                }}>
                                    <p
                                        style={{
                                            fontFamily: "var(--font-cormorant), serif",
                                            fontSize: "2.5rem",
                                            fontWeight: 400,
                                            color: "var(--orange)",
                                            lineHeight: 1,
                                            marginBottom: "0.4rem",
                                        }}
                                    >
                                        {stat.num}
                                    </p>
                                    <p
                                        style={{
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontSize: "0.65rem",
                                            letterSpacing: "0.12em",
                                            textTransform: "uppercase",
                                            color: "var(--bone-dim)",
                                        }}
                                    >
                                        {stat.label}
                                    </p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </ScrollReveal>
            </div>

            {/* Bottom section label — How We Think */}
            <div
                style={{
                    maxWidth: "1400px",
                    margin: "8rem auto 0",
                    borderTop: "1px solid rgba(200,80,26,0.2)",
                    paddingTop: "5rem",
                }}
            >
                <ScrollReveal>
                    <p className="section-label" style={{ marginBottom: "2rem" }}>How We Think</p>
                </ScrollReveal>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "6rem",
                        alignItems: "center",
                    }}
                >
                    <AnimatedText
                        text="We approach projects as integrated systems, not isolated components."
                        as="p"
                        splitBy="word"
                        delay={0.15}
                        staggerChildren={0.03}
                        style={{
                            fontFamily: "var(--font-cormorant), serif",
                            fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                            fontWeight: 400,
                            color: "var(--bone)",
                            lineHeight: 1.25,
                        }}
                    />
                    <ScrollReveal delay={0.2}>
                        <p
                            style={{
                                fontFamily: "var(--font-inter), sans-serif",
                                fontSize: "1rem",
                                color: "var(--bone-dim)",
                                lineHeight: 1.8,
                            }}
                        >
                            Strategy, market logic, branding, sales management, and capital structuring are developed in parallel to ensure alignment between vision, execution, and long-term asset performance.
                        </p>
                    </ScrollReveal>
                </div>
                <ScrollReveal delay={0.2} direction="scale">
                    <ParallaxImage
                        src="/pdf-assets/page7_img1.jpeg"
                        alt="Integrated strategic approach"
                        speed={0.1}
                        sizes="100vw"
                        style={{ marginTop: "4rem", aspectRatio: "21/9" }}
                        overlay={
                            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, var(--charcoal) 100%)", zIndex: 1 }} />
                        }
                    />
                </ScrollReveal>
            </div>
        </section>
    );
}
