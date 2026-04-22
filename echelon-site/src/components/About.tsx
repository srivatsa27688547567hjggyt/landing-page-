import Image from "next/image";

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
                    <p className="section-label reveal delay-100" style={{ marginBottom: "3rem" }}>
                        Who We Are
                    </p>

                    <h2
                        id="about-heading"
                        className="reveal delay-200"
                        style={{
                            fontFamily: "var(--font-cormorant), serif",
                            fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
                            fontWeight: 400,
                            color: "var(--bone)",
                            lineHeight: 1.05,
                            marginBottom: "2rem",
                        }}
                    >
                        Strategic clarity
                        <br />
                        <em style={{ color: "var(--bone-dim)" }}>determines future value.</em>
                    </h2>

                    <div
                        className="reveal delay-300"
                        style={{
                            width: "40px",
                            height: "1px",
                            backgroundColor: "var(--orange)",
                            marginBottom: "2rem",
                        }}
                    />

                    <p
                        className="reveal delay-400"
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

                    <p
                        className="reveal delay-400"
                        style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "1rem",
                            lineHeight: 1.8,
                            color: "var(--bone-dim)",
                            maxWidth: "480px",
                        }}
                    >
                        We work with developers, investors, and operators at the stage where strategic decisions define long-term value — supporting projects where clarity, positioning, and structure are critical to long-term success.
                    </p>

                    {/* Philosophy anchor */}
                    <div
                        className="reveal delay-500"
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
                </div>

                {/* Right — Editorial image with offset */}
                <div
                    className="reveal-right delay-200"
                    style={{
                        position: "relative",
                    }}
                >
                    <div
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
                    <div
                        className="reveal delay-300"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "0",
                            marginTop: "1.5rem",
                            border: "1px solid rgba(200,80,26,0.25)",
                        }}
                    >
                        {[
                            { num: "17+", label: "Years Combined Experience" },
                            { num: "4", label: "Core Advisory Pillars" },
                            { num: "2", label: "European Offices" },
                            { num: "∞", label: "Long-term Value Focus" },
                        ].map((stat, i) => (
                            <div
                                key={stat.label}
                                style={{
                                    padding: "1.5rem",
                                    borderRight: i % 2 === 0 ? "1px solid rgba(200,80,26,0.25)" : "none",
                                    borderBottom: i < 2 ? "1px solid rgba(200,80,26,0.25)" : "none",
                                }}
                            >
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
                            </div>
                        ))}
                    </div>
                </div>
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
                <p className="section-label reveal" style={{ marginBottom: "2rem" }}>How We Think</p>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "6rem",
                        alignItems: "center",
                    }}
                >
                    <p
                        className="reveal delay-200"
                        style={{
                            fontFamily: "var(--font-cormorant), serif",
                            fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                            fontWeight: 400,
                            color: "var(--bone)",
                            lineHeight: 1.25,
                        }}
                    >
                        We approach projects as integrated systems, not isolated components.
                    </p>
                    <p
                        className="reveal delay-300"
                        style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "1rem",
                            color: "var(--bone-dim)",
                            lineHeight: 1.8,
                        }}
                    >
                        Strategy, market logic, branding, sales management, and capital structuring are developed in parallel to ensure alignment between vision, execution, and long-term asset performance.
                    </p>
                </div>
                <div className="reveal-scale delay-300" style={{ marginTop: "4rem", position: "relative", aspectRatio: "21/9", overflow: "hidden" }}>
                    <Image
                        src="/pdf-assets/page7_img1.jpeg"
                        alt="Integrated strategic approach"
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="100vw"
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, var(--charcoal) 100%)" }} />
                </div>
            </div>
        </section>
    );
}
