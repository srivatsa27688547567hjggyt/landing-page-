import Image from "next/image";

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
            "Brand strategy, naming & brand books",
            "Go-to-market & pricing strategy",
            "Sales systems, CRM & performance reporting",
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
                    <p className="section-label reveal" style={{ marginBottom: "1.5rem" }}>Services</p>
                    <h2
                        id="services-heading"
                        className="reveal delay-200"
                        style={{
                            fontFamily: "var(--font-cormorant), serif",
                            fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
                            fontWeight: 400,
                            color: "var(--bone)",
                            lineHeight: 1.0,
                        }}
                    >
                        Integrated advisory across every <em style={{ color: "var(--bone-dim)" }}>dimension</em>
                    </h2>
                </div>
                <p
                    className="reveal delay-300"
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
                            <div
                                className="reveal-left"
                                style={{
                                    padding: "5rem 4rem 5rem 0",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                            >
                                <ServiceContent svc={svc} />
                            </div>
                        )}

                        {/* Image */}
                        <div
                            className={svc.imageAlign === "right" ? "reveal-right" : "reveal-left"}
                            style={{ position: "relative", overflow: "hidden", minHeight: "420px" }}
                        >
                            <Image
                                src={svc.image}
                                alt={svc.title}
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 768px) 100vw, 45vw"
                            />
                            <div style={{
                                position: "absolute",
                                inset: 0,
                                background: svc.imageAlign === "right"
                                    ? "linear-gradient(90deg, transparent 60%, rgba(26,24,22,0.3) 100%)"
                                    : "linear-gradient(90deg, rgba(26,24,22,0.3) 0%, transparent 40%)",
                            }} />
                        </div>

                        {/* Text side — left image variant */}
                        {svc.imageAlign === "left" && (
                            <div
                                className="reveal-right"
                                style={{
                                    padding: "5rem 0 5rem 4rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    borderLeft: "1px solid rgba(200,80,26,0.15)",
                                }}
                            >
                                <ServiceContent svc={svc} />
                            </div>
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
            <p style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "6rem",
                fontWeight: 300,
                color: "var(--orange)",
                opacity: 0.25,
                lineHeight: 1,
                marginBottom: "1rem",
            }}>
                {svc.num}
            </p>

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

            <div style={{ width: "40px", height: "1px", backgroundColor: "var(--orange)", marginBottom: "1.5rem" }} />

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                {svc.items.map((item) => (
                    <li
                        key={item}
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
                    </li>
                ))}
            </ul>
        </>
    );
}
