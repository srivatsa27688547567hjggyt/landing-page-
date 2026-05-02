"use client";

import ScrollReveal from "@/components/ScrollReveal";
import AnimatedText from "@/components/AnimatedText";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            style={{
                backgroundColor: "var(--charcoal)",
                borderTop: "2px solid var(--orange)",
                padding: "8rem 2.5rem",
            }}
        >
            <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                {/* Header */}
                <div style={{ marginBottom: "6rem" }}>
                    <ScrollReveal>
                        <p className="section-label" style={{ marginBottom: "1.5rem" }}>Contact</p>
                    </ScrollReveal>
                    <AnimatedText
                        text="Let's build something lasting."
                        as="h2"
                        splitBy="word"
                        delay={0.1}
                        staggerChildren={0.08}
                        style={{
                            fontFamily: "var(--font-cormorant), serif",
                            fontSize: "clamp(3rem, 8vw, 7rem)",
                            fontWeight: 400,
                            color: "var(--bone)",
                            lineHeight: 1.0,
                        }}
                    />
                </div>

                {/* Main content grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "6rem",
                        borderTop: "1px solid rgba(200,80,26,0.2)",
                        paddingTop: "4rem",
                    }}
                >
                    {/* Offices */}
                    <ScrollReveal direction="left">
                        <div>
                            <h3 style={{
                                fontFamily: "var(--font-inter), sans-serif",
                                fontSize: "0.65rem",
                                letterSpacing: "0.25em",
                                textTransform: "uppercase",
                                color: "var(--orange)",
                                marginBottom: "2.5rem",
                            }}>
                                Offices
                            </h3>

                            <StaggerContainer stagger={0.15}>
                                {[
                                    {
                                        city: "Tbilisi",
                                        country: "Georgia",
                                        address: "Chavchavadze Avenue 49E",
                                    },
                                    {
                                        city: "Helsinki",
                                        country: "Finland",
                                        address: "Office — Finland",
                                    },
                                ].map((office) => (
                                    <StaggerItem key={office.city} style={{ marginBottom: "2.5rem" }}>
                                        <p style={{
                                            fontFamily: "var(--font-cormorant), serif",
                                            fontSize: "1.8rem",
                                            fontWeight: 400,
                                            color: "var(--bone)",
                                            marginBottom: "0.25rem",
                                        }}>
                                            {office.city}
                                            <span style={{
                                                fontFamily: "var(--font-inter), sans-serif",
                                                fontSize: "0.7rem",
                                                letterSpacing: "0.12em",
                                                textTransform: "uppercase",
                                                color: "var(--orange)",
                                                marginLeft: "1rem",
                                                verticalAlign: "middle",
                                            }}>
                                                {office.country}
                                            </span>
                                        </p>
                                        <p style={{
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontSize: "0.9rem",
                                            color: "var(--bone-dim)",
                                        }}>
                                            {office.address}
                                        </p>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>

                            {/* Digital presence */}
                            <ScrollReveal delay={0.3}>
                                <div style={{ borderTop: "1px solid rgba(200,80,26,0.2)", paddingTop: "2rem" }}>
                                    <a
                                        href="https://echeloninternational.ge"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontSize: "0.9rem",
                                            color: "var(--bone-dim)",
                                            textDecoration: "none",
                                            display: "block",
                                            marginBottom: "0.4rem",
                                            transition: "color 0.25s ease",
                                        }}
                                        onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--bone)")}
                                        onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--bone-dim)")}
                                    >
                                        echeloninternational.ge ↗
                                    </a>
                                    <a
                                        href="mailto:contact@echeloninternational.ge"
                                        style={{
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontSize: "0.9rem",
                                            color: "var(--bone-dim)",
                                            textDecoration: "none",
                                            transition: "color 0.25s ease",
                                        }}
                                        onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--orange)")}
                                        onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--bone-dim)")}
                                    >
                                        contact@echeloninternational.ge
                                    </a>
                                </div>
                            </ScrollReveal>
                        </div>
                    </ScrollReveal>

                    {/* Contact persons */}
                    <ScrollReveal direction="right">
                        <div>
                            <h3 style={{
                                fontFamily: "var(--font-inter), sans-serif",
                                fontSize: "0.65rem",
                                letterSpacing: "0.25em",
                                textTransform: "uppercase",
                                color: "var(--orange)",
                                marginBottom: "2.5rem",
                            }}>
                                Contact Persons
                            </h3>

                            <StaggerContainer stagger={0.18}>
                                {[
                                    {
                                        name: "Elena Ristavaara",
                                        role: "Founder — Investment & Strategy",
                                        phone: "+7 919 768-79-77",
                                    },
                                    {
                                        name: "Sophio Meshvildishvili",
                                        role: "Founder — Commercial & Sales Strategy",
                                        phone: "+995 592 66 17 17",
                                    },
                                ].map((person) => (
                                    <StaggerItem key={person.name} style={{ marginBottom: "3rem" }}>
                                        <p style={{
                                            fontFamily: "var(--font-cormorant), serif",
                                            fontSize: "1.8rem",
                                            fontWeight: 400,
                                            color: "var(--bone)",
                                            marginBottom: "0.25rem",
                                        }}>
                                            {person.name}
                                        </p>
                                        <p style={{
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontSize: "0.7rem",
                                            letterSpacing: "0.1em",
                                            textTransform: "uppercase",
                                            color: "var(--orange)",
                                            marginBottom: "0.5rem",
                                        }}>
                                            {person.role}
                                        </p>
                                        <a
                                            href={`tel:${person.phone.replace(/\s/g, "")}`}
                                            style={{
                                                fontFamily: "var(--font-inter), sans-serif",
                                                fontSize: "1rem",
                                                color: "var(--bone-dim)",
                                                textDecoration: "none",
                                                transition: "color 0.25s ease",
                                            }}
                                            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--bone)")}
                                            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--bone-dim)")}
                                        >
                                            {person.phone}
                                        </a>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>

                            {/* CTA */}
                            <ScrollReveal delay={0.3}>
                                <div style={{ marginTop: "0.5rem" }}>
                                    <a
                                        href="mailto:contact@echeloninternational.ge"
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "0.75rem",
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontSize: "0.75rem",
                                            fontWeight: 500,
                                            letterSpacing: "0.12em",
                                            textTransform: "uppercase",
                                            color: "var(--charcoal)",
                                            backgroundColor: "var(--orange)",
                                            padding: "1rem 2.5rem",
                                            textDecoration: "none",
                                            transition: "background-color 0.25s ease, transform 0.25s var(--ease-spring)",
                                        }}
                                        onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLElement).style.backgroundColor = "var(--orange-hover)";
                                            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.currentTarget as HTMLElement).style.backgroundColor = "var(--orange)";
                                            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                                        }}
                                    >
                                        Send an Inquiry
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                                            <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                                        </svg>
                                    </a>
                                </div>
                            </ScrollReveal>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Footer bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    style={{
                        marginTop: "6rem",
                        paddingTop: "2rem",
                        borderTop: "1px solid rgba(200,80,26,0.15)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "1rem",
                    }}
                >
                    <p style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: "1.1rem",
                        fontWeight: 400,
                        letterSpacing: "0.15em",
                        color: "var(--bone-dim)",
                        textTransform: "uppercase",
                    }}>
                        Echelon International
                    </p>
                    <p style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "0.7rem",
                        letterSpacing: "0.08em",
                        color: "var(--bone-dim)",
                        opacity: 0.5,
                    }}>
                        © {new Date().getFullYear()} Echelon International. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
