import Image from "next/image";

export default function Philosophy() {
    return (
        <section
            id="philosophy"
            aria-labelledby="philosophy-heading"
            style={{
                position: "relative",
                overflow: "hidden",
                borderTop: "1px solid rgba(200,80,26,0.15)",
            }}
        >
            {/* Full-bleed atmospheric image */}
            <div style={{ position: "relative", minHeight: "70vh", display: "flex", alignItems: "center" }}>
                <div style={{ position: "absolute", inset: 0 }}>
                    <Image
                        src="/pdf-assets/page6_img1.jpeg"
                        alt="Strategic philosophy"
                        fill
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        sizes="100vw"
                    />
                    {/* Heavy dark overlay */}
                    <div style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(135deg, rgba(26,24,22,0.92) 0%, rgba(26,24,22,0.7) 60%, rgba(26,24,22,0.85) 100%)",
                    }} />
                </div>

                {/* Grain texture */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
                    backgroundRepeat: "repeat",
                    backgroundSize: "200px",
                    pointerEvents: "none",
                }} />

                <div style={{
                    position: "relative",
                    zIndex: 2,
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "8rem 2.5rem",
                    width: "100%",
                }}>
                    <p className="section-label reveal" style={{ marginBottom: "2.5rem" }}>Our Philosophy</p>

                    <h2
                        id="philosophy-heading"
                        className="reveal delay-200"
                        style={{
                            fontFamily: "var(--font-cormorant), serif",
                            fontSize: "clamp(2rem, 5.5vw, 5.5rem)",
                            fontWeight: 300,
                            fontStyle: "italic",
                            color: "var(--bone)",
                            lineHeight: 1.1,
                            maxWidth: "900px",
                            marginBottom: "3rem",
                        }}
                    >
                        &ldquo;We engage with projects at the stage where strategic clarity determines future value.&rdquo;
                    </h2>

                    <div className="reveal delay-300" style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                        <div style={{ width: "40px", height: "1px", backgroundColor: "var(--orange)" }} />
                        <p style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "0.85rem",
                            color: "var(--bone-dim)",
                            letterSpacing: "0.05em",
                        }}>
                            Echelon International — Advisory Philosophy
                        </p>
                    </div>
                </div>
            </div>

            {/* Three philosophy pillars below */}
            <div
                style={{
                    backgroundColor: "var(--charcoal)",
                    padding: "6rem 2.5rem",
                }}
            >
                <div
                    style={{
                        maxWidth: "1400px",
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: "0",
                        borderTop: "1px solid rgba(200,80,26,0.2)",
                    }}
                >
                    {[
                        {
                            num: "01",
                            title: "Integrated by Design",
                            body: "Strategy, branding, and capital are never siloed. Every decision is made with the full system in mind.",
                        },
                        {
                            num: "02",
                            title: "Clarity Over Complexity",
                            body: "We simplify what others complicate — aligning market realities with development ambition into coherent, bankable strategies.",
                        },
                        {
                            num: "03",
                            title: "Long-Term Value",
                            body: "Short-term gains are secondary. We position assets for lasting performance, perception, and institutional-grade appeal.",
                        },
                    ].map((pillar, i) => (
                        <div
                            key={pillar.num}
                            className={`reveal delay-${(i + 1) * 100}`}
                            style={{
                                padding: "3.5rem 2.5rem",
                                borderRight: i < 2 ? "1px solid rgba(200,80,26,0.15)" : "none",
                                borderTop: "1px solid rgba(200,80,26,0.15)",
                            }}
                        >
                            <p style={{
                                fontFamily: "var(--font-cormorant), serif",
                                fontSize: "3rem",
                                fontWeight: 300,
                                color: "var(--orange)",
                                opacity: 0.4,
                                lineHeight: 1,
                                marginBottom: "1.5rem",
                            }}>
                                {pillar.num}
                            </p>
                            <h3 style={{
                                fontFamily: "var(--font-cormorant), serif",
                                fontSize: "1.6rem",
                                fontWeight: 400,
                                color: "var(--bone)",
                                marginBottom: "1rem",
                            }}>
                                {pillar.title}
                            </h3>
                            <p style={{
                                fontFamily: "var(--font-inter), sans-serif",
                                fontSize: "0.9rem",
                                lineHeight: 1.75,
                                color: "var(--bone-dim)",
                            }}>
                                {pillar.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
