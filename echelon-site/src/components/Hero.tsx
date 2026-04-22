import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="hero"
            aria-label="Hero"
            style={{
                position: "relative",
                minHeight: "100vh",
                backgroundColor: "var(--charcoal)",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
            }}
        >
            {/* Background image — editorial bleed on the right */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "52%",
                    height: "100%",
                    zIndex: 1,
                }}
            >
                <Image
                    src="/pdf-assets/page2_img1.jpeg"
                    alt="Luxury resort destination"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    priority
                    sizes="52vw"
                />
                {/* Gradient fade from left — merges image into dark background */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(90deg, var(--charcoal) 0%, rgba(26,24,22,0.6) 40%, rgba(26,24,22,0.1) 100%)",
                    }}
                />
                {/* Vignette bottom */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, transparent 60%, var(--charcoal) 100%)",
                    }}
                />
            </div>

            {/* Tiny grain texture overlay */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 2,
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
                    backgroundRepeat: "repeat",
                    backgroundSize: "200px",
                    pointerEvents: "none",
                }}
            />

            {/* Content */}
            <div
                style={{
                    position: "relative",
                    zIndex: 3,
                    width: "100%",
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "8rem 2.5rem 4rem",
                }}
            >
                {/* Eyebrow */}
                <p
                    className="reveal delay-100"
                    style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "0.65rem",
                        fontWeight: 500,
                        letterSpacing: "0.28em",
                        textTransform: "uppercase",
                        color: "var(--orange)",
                        marginBottom: "2rem",
                    }}
                >
                    Integrated Advisory
                </p>

                {/* Main headline — stacked, massive editorial type */}
                <h1
                    style={{
                        fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif",
                        lineHeight: 0.96,
                        letterSpacing: "-0.01em",
                        fontWeight: 400,
                        marginBottom: "2.5rem",
                    }}
                >
                    <span
                        className="reveal delay-100"
                        style={{
                            display: "block",
                            fontSize: "clamp(64px, 10vw, 148px)",
                            color: "var(--bone)",
                        }}
                    >
                        Hotels.
                    </span>
                    <span
                        className="reveal delay-200"
                        style={{
                            display: "block",
                            fontSize: "clamp(64px, 10vw, 148px)",
                            color: "var(--bone)",
                            marginLeft: "clamp(12px, 3vw, 56px)",
                        }}
                    >
                        Wellness.
                    </span>
                    <span
                        className="reveal delay-300"
                        style={{
                            display: "block",
                            fontSize: "clamp(64px, 10vw, 148px)",
                            color: "var(--bone)",
                            marginLeft: "clamp(24px, 6vw, 112px)",
                        }}
                    >
                        Real Estate.
                    </span>
                </h1>

                {/* Divider line */}
                <div
                    className="reveal delay-400"
                    style={{
                        width: "80px",
                        height: "1px",
                        backgroundColor: "var(--orange)",
                        marginBottom: "1.5rem",
                    }}
                />

                {/* Tagline */}
                <p
                    className="reveal delay-400"
                    style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: "clamp(1.2rem, 2.2vw, 1.75rem)",
                        fontWeight: 300,
                        fontStyle: "italic",
                        color: "var(--bone-dim)",
                        maxWidth: "480px",
                        marginBottom: "3rem",
                        lineHeight: 1.45,
                    }}
                >
                    One Integrated Strategic System — from concept to commercialization and capital.
                </p>

                {/* CTA */}
                <div className="reveal delay-500" style={{ display: "flex", gap: "1.25rem", alignItems: "center", flexWrap: "wrap" }}>
                    <a
                        href="#services"
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
                            padding: "0.9rem 2rem",
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
                        Discover Our Services
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                            <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                        </svg>
                    </a>
                    <a
                        href="#contact"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "0.75rem",
                            fontWeight: 400,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "var(--bone-dim)",
                            textDecoration: "none",
                            borderBottom: "1px solid transparent",
                            paddingBottom: "2px",
                            transition: "color 0.25s ease, border-color 0.25s ease",
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.color = "var(--bone)";
                            (e.currentTarget as HTMLElement).style.borderBottomColor = "var(--orange)";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.color = "var(--bone-dim)";
                            (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent";
                        }}
                    >
                        Get in Touch
                    </a>
                </div>

                {/* Scroll hint */}
                <div
                    className="reveal delay-600"
                    style={{
                        position: "absolute",
                        bottom: "2.5rem",
                        left: "2.5rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                    }}
                >
                    <div
                        style={{
                            width: "1px",
                            height: "40px",
                            backgroundColor: "var(--orange)",
                            animation: "fadeSlideUp 1.5s var(--ease-spring) infinite alternate",
                        }}
                    />
                    <span
                        style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "0.6rem",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "var(--bone-dim)",
                            writingMode: "vertical-lr",
                            transform: "rotate(180deg)",
                        }}
                    >
                        Scroll
                    </span>
                </div>
            </div>
        </section>
    );
}
