"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedText from "@/components/AnimatedText";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const partnerImages = [
    { file: "page14_img1.png", alt: "Sothys" },
    { file: "page14_img2.png", alt: "Hilton" },
    { file: "page14_img3.jpeg", alt: "IHG" },
    { file: "page14_img4.png", alt: "Kempinski" },
    { file: "page14_img5.jpeg", alt: "Marriott" },
    { file: "page14_img6.png", alt: "Hyatt" },
    { file: "page14_img7.png", alt: "Mandarin Oriental" },
    { file: "page14_img8.png", alt: "The Ritz-Carlton" },
    { file: "page14_img9.png", alt: "Ensana" },
    { file: "page14_img10.png", alt: "Six Senses" },
    { file: "page14_img11.png", alt: "Four Seasons" },
    { file: "page14_img12.png", alt: "Accor" },
    { file: "page14_img13.png", alt: "Clinique La Prairie" },
];

export default function Partners() {
    return (
        <section
            aria-label="Partner brands and operators"
            style={{
                backgroundColor: "var(--charcoal-soft)",
                borderTop: "1px solid rgba(200,80,26,0.2)",
                padding: "clamp(4rem, 8vw, 7rem) 0",
                overflow: "hidden",
            }}
        >
            <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2.5rem", marginBottom: "4rem" }}>
                <div
                    style={{
                        display: "flex",
                        gap: "2.5rem",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        flexWrap: "wrap"
                    }}
                    className="partners-header"
                >
                    <div style={{ flex: "1 1 500px" }}>
                        <ScrollReveal>
                            <p className="section-label" style={{ marginBottom: "1rem" }}>Partner Brands & Operators</p>
                        </ScrollReveal>
                        <AnimatedText
                            text="Collaborating with leading international brands & institutions"
                            as="h2"
                            splitBy="word"
                            delay={0.1}
                            staggerChildren={0.04}
                            style={{
                                fontFamily: "var(--font-cormorant), serif",
                                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                                fontWeight: 400,
                                color: "var(--bone)",
                                lineHeight: 1.1,
                                maxWidth: "700px",
                            }}
                        />
                    </div>
                    <ScrollReveal delay={0.2} direction="right">
                        <p
                            style={{
                                fontFamily: "var(--font-inter), sans-serif",
                                fontSize: "0.95rem",
                                color: "var(--bone-dim)",
                                lineHeight: 1.75,
                                maxWidth: "340px",
                                marginTop: "1rem",
                            }}
                        >
                            Echelon International partners with leading operators, wellness brands, and professional institutions — including ESPA and Ensana Hotels — across hospitality, wellness, and real estate.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            {/* Marquee — infinite scroll logos */}
            <ScrollReveal>
                <div
                    style={{
                        overflow: "hidden",
                        padding: "3rem 0",
                        borderTop: "1px solid rgba(200,80,26,0.15)",
                        borderBottom: "1px solid rgba(200,80,26,0.15)",
                        backgroundColor: "rgba(200,80,26,0.02)",
                    }}
                >
                    <div
                        className="marquee-inner"
                        style={{
                            display: "flex",
                            gap: "clamp(2rem, 5vw, 5rem)",
                            width: "max-content",
                            alignItems: "center",
                        }}
                    >
                        {/* Duplicate logos for seamless loop */}
                        {[...partnerImages, ...partnerImages].map((logo, i) => (
                            <div
                                key={`${logo.file}-${i}`}
                                style={{
                                    position: "relative",
                                    width: "clamp(80px, 12vw, 110px)",
                                    height: "clamp(80px, 12vw, 110px)",
                                    flexShrink: 0,
                                    borderRadius: "50%",
                                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                                    border: "1px solid rgba(200, 80, 26, 0.15)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "1.25rem",
                                    transition: "all 0.4s var(--ease-spring)",
                                    cursor: "pointer",
                                    overflow: "hidden",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                }}
                                className="round-logo-container"
                            >
                                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                                    <Image
                                        src={`/pdf-assets/${logo.file}`}
                                        alt={logo.alt}
                                        fill
                                        style={{
                                            objectFit: "contain",
                                            opacity: 0.9,
                                            transition: "all 0.4s ease",
                                        }}
                                        sizes="100px"
                                        className="partner-logo-img"
                                    />
                                </div>
                                <div
                                    className="logo-hover-overlay"
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: "radial-gradient(circle at center, rgba(200, 80, 26, 0.05) 0%, transparent 70%)",
                                        opacity: 0,
                                        transition: "opacity 0.4s ease",
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollReveal>

            {/* Named partners */}
            <div style={{ maxWidth: "1400px", margin: "4rem auto 0", padding: "0 2.5rem" }}>
                <StaggerContainer
                    stagger={0.1}
                    delay={0.15}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "2.5rem",
                    }}
                >
                    {[
                        "ESPA — European Spas Association",
                        "Ensana Hotels",
                        "International hotel operators & development partners (project-based)"
                    ].map((name) => (
                        <StaggerItem key={name}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                    padding: "1.25rem",
                                    backgroundColor: "rgba(200,80,26,0.03)",
                                    border: "1px solid rgba(200,80,26,0.1)",
                                    borderRadius: "4px",
                                }}
                            >
                                <span style={{
                                    display: "inline-block",
                                    width: "8px",
                                    height: "8px",
                                    backgroundColor: "var(--orange)",
                                    borderRadius: "50%",
                                    flexShrink: 0,
                                }} />
                                <span style={{
                                    fontFamily: "var(--font-inter), sans-serif",
                                    fontSize: "0.85rem",
                                    letterSpacing: "0.05em",
                                    color: "var(--bone-dim)",
                                    lineHeight: 1.4,
                                }}>
                                    {name}
                                </span>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>

            <style jsx>{`
                .round-logo-container:hover {
                    border-color: rgba(200, 80, 26, 0.4);
                    transform: scale(1.05);
                    background-color: rgba(255, 255, 255, 1);
                    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
                }
                .round-logo-container:hover .partner-logo-img {
                    opacity: 1 !important;
                    transform: scale(1.02);
                }
                .round-logo-container:hover .logo-hover-overlay {
                    opacity: 1;
                }
                
                @media (max-width: 768px) {
                    .partners-header {
                        flex-direction: column !important;
                        gap: 1.5rem !important;
                    }
                }
            `}</style>
        </section>
    );
}
