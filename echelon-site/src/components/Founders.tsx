import Image from "next/image";

const founders = [
    {
        name: "Elena Ristavaara",
        role: "Founder — Investment & Governance, Strategy",
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
        image: "/pdf-assets/page5_img1.jpeg",
        bio: [
            "Sophio has over a decade of hands-on experience working with major development companies, in close collaboration with both local and international investors. Her background is rooted in the commercialization of real estate projects and the translation of development strategy into market performance.",
            "Within Echelon International, Sophio is responsible for go-to-market strategy, commercial structuring, and sales management — ensuring projects function as integrated commercial systems rather than isolated marketing initiatives.",
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
                    <p className="section-label reveal">Founders</p>
                    <h2
                        id="founders-heading"
                        className="reveal delay-200"
                        style={{
                            fontFamily: "var(--font-cormorant), serif",
                            fontSize: "clamp(2rem, 4vw, 3.5rem)",
                            fontWeight: 400,
                            color: "var(--bone)",
                            textAlign: "right",
                            lineHeight: 1.1,
                            maxWidth: "480px",
                        }}
                    >
                        The people behind <em style={{ color: "var(--bone-dim)" }}>the strategy</em>
                    </h2>
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
                        {/* Image — appears in grid order based on align */}
                        {founder.align === "left" && (
                            <div className="reveal-left" style={{ position: "relative" }}>
                                <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
                                    <Image
                                        src={founder.image}
                                        alt={`Portrait of ${founder.name}`}
                                        fill
                                        style={{ objectFit: "cover", objectPosition: "top center" }}
                                        sizes="30vw"
                                    />
                                    {/* Dark gradient at bottom */}
                                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 60%, rgba(26,24,22,0.6) 100%)" }} />
                                </div>
                                {/* Orange corner accent */}
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
                        )}

                        {/* Text block */}
                        <div style={{ paddingTop: "1rem" }}>
                            <h3
                                className={`reveal-${founder.align === "left" ? "right" : "left"}`}
                                style={{
                                    fontFamily: "var(--font-cormorant), serif",
                                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                                    fontWeight: 400,
                                    color: "var(--bone)",
                                    lineHeight: 1.0,
                                    marginBottom: "0.5rem",
                                }}
                            >
                                {founder.name}
                            </h3>
                            <div style={{ width: "40px", height: "1px", backgroundColor: "var(--orange)", marginBottom: "1rem" }} />
                            <p
                                className={`reveal delay-100`}
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
                            {founder.bio.map((para, j) => (
                                <p
                                    key={j}
                                    className={`reveal delay-${(j + 2) * 100}` as string}
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
                            ))}

                            {/* ESPA badge for Elena */}
                            {founder.name === "Elena Ristavaara" && (
                                <div
                                    className="reveal delay-400"
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
                            )}
                        </div>

                        {/* Image — right side for second founder */}
                        {founder.align === "right" && (
                            <div className="reveal-right" style={{ position: "relative" }}>
                                <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
                                    <Image
                                        src={founder.image}
                                        alt={`Portrait of ${founder.name}`}
                                        fill
                                        style={{ objectFit: "cover", objectPosition: "top center" }}
                                        sizes="30vw"
                                    />
                                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 60%, rgba(26,24,22,0.6) 100%)" }} />
                                </div>
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
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
