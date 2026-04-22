import Image from "next/image";

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
            {/* Full-bleed hero image */}
            <div
                className="reveal-scale"
                style={{
                    position: "relative",
                    height: "60vh",
                    overflow: "hidden",
                }}
            >
                <Image
                    src="/pdf-assets/page15_img1.jpeg"
                    alt="Ensana Hotels Sairme Resort"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 60%" }}
                    sizes="100vw"
                />
                <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 40%, var(--charcoal) 100%)",
                }} />

                {/* Overlay label */}
                <div style={{
                    position: "absolute",
                    bottom: "2rem",
                    left: "2.5rem",
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
            </div>

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
                        <h2
                            id="casestudy-heading"
                            className="reveal"
                            style={{
                                fontFamily: "var(--font-cormorant), serif",
                                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                                fontWeight: 400,
                                color: "var(--bone)",
                                lineHeight: 1.05,
                                marginBottom: "1.5rem",
                            }}
                        >
                            Ensana Hotels
                            <br />
                            <em style={{ color: "var(--orange)" }}>× Sairme Resort</em>
                        </h2>

                        <p
                            className="reveal delay-200"
                            style={{
                                fontFamily: "var(--font-inter), sans-serif",
                                fontSize: "1rem",
                                lineHeight: 1.8,
                                color: "var(--bone-dim)",
                                marginBottom: "1.5rem",
                            }}
                        >
                            Strategic advisory and market-entry support for Europe's leading medical spa hotel operator — supporting its expansion into the Georgian market through the Sairme destination.
                        </p>

                        <p
                            className="reveal delay-300"
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

                        {/* Meta */}
                        <div
                            className="reveal delay-400"
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr",
                                gap: "0",
                                border: "1px solid rgba(200,80,26,0.25)",
                            }}
                        >
                            {[
                                { label: "Year", value: "2025" },
                                { label: "Sector", value: "Hospitality & Medical Wellness" },
                                { label: "Role", value: "Strategic Advisory" },
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

                        {/* Three assets note */}
                        <p
                            className="reveal delay-400"
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
                    </div>

                    {/* Right — staggered images */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        <div
                            className="reveal-right delay-100"
                            style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}
                        >
                            <Image
                                src="/pdf-assets/page15_img2.jpeg"
                                alt="Sairme Resort exterior"
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="40vw"
                            />
                        </div>
                        <div
                            className="reveal-right delay-300"
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
                        </div>
                        {/* Ensana Hotels logo from page14 */}
                        <div
                            className="reveal delay-400"
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
                    </div>
                </div>
            </div>
        </section>
    );
}
