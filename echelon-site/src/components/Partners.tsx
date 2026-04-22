import Image from "next/image";

const partnerImages = [
    { file: "page14_img1.png", alt: "Partner 1" },
    { file: "page14_img2.png", alt: "Partner 2" },
    { file: "page14_img3.jpeg", alt: "Partner 3" },
    { file: "page14_img4.png", alt: "Partner 4" },
    { file: "page14_img5.jpeg", alt: "Partner 5" },
    { file: "page14_img6.png", alt: "Partner 6" },
    { file: "page14_img7.png", alt: "Partner 7" },
    { file: "page14_img8.png", alt: "Partner 8" },
    { file: "page14_img9.png", alt: "Partner 9" },
    { file: "page14_img10.png", alt: "Partner 10" },
    { file: "page14_img11.png", alt: "Partner 11" },
    { file: "page14_img12.png", alt: "Partner 12" },
    { file: "page14_img13.png", alt: "Partner 13" },
];

export default function Partners() {
    return (
        <section
            aria-label="Partner brands and operators"
            style={{
                backgroundColor: "var(--charcoal-soft)",
                borderTop: "1px solid rgba(200,80,26,0.2)",
                padding: "7rem 0",
                overflow: "hidden",
            }}
        >
            <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2.5rem", marginBottom: "4rem" }}>
                <div style={{ display: "flex", gap: "4rem", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                        <p className="section-label reveal" style={{ marginBottom: "1rem" }}>Partner Brands & Operators</p>
                        <h2
                            className="reveal delay-200"
                            style={{
                                fontFamily: "var(--font-cormorant), serif",
                                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                                fontWeight: 400,
                                color: "var(--bone)",
                                lineHeight: 1.1,
                                maxWidth: "600px",
                            }}
                        >
                            Collaborating with leading international brands &amp; institutions
                        </h2>
                    </div>
                    <p
                        className="reveal delay-300"
                        style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "0.9rem",
                            color: "var(--bone-dim)",
                            lineHeight: 1.75,
                            maxWidth: "340px",
                            flexShrink: 0,
                        }}
                    >
                        Echelon International partners with leading operators, wellness brands, and professional institutions — including ESPA and Ensana Hotels — across hospitality, wellness, and real estate.
                    </p>
                </div>
            </div>

            {/* Marquee — infinite scroll logos */}
            <div
                className="reveal"
                style={{
                    overflow: "hidden",
                    padding: "2rem 0",
                    borderTop: "1px solid rgba(200,80,26,0.1)",
                    borderBottom: "1px solid rgba(200,80,26,0.1)",
                    backgroundColor: "rgba(200,80,26,0.04)",
                }}
            >
                <div
                    className="marquee-inner"
                    style={{
                        display: "flex",
                        gap: "4rem",
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
                                width: "120px",
                                height: "60px",
                                flexShrink: 0,
                            }}
                        >
                            <Image
                                src={`/pdf-assets/${logo.file}`}
                                alt={logo.alt}
                                fill
                                style={{
                                    objectFit: "contain",
                                    filter: "brightness(0) invert(1)",
                                    opacity: 0.5,
                                }}
                                sizes="120px"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Named partners */}
            <div
                className="reveal delay-200"
                style={{
                    maxWidth: "1400px",
                    margin: "4rem auto 0",
                    padding: "0 2.5rem",
                    display: "flex",
                    gap: "3rem",
                    flexWrap: "wrap",
                }}
            >
                {["ESPA — European Spas Association", "Ensana Hotels", "International hotel operators & development partners (project-based)"].map((name) => (
                    <div
                        key={name}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                        }}
                    >
                        <span style={{
                            display: "inline-block",
                            width: "6px",
                            height: "6px",
                            backgroundColor: "var(--orange)",
                            flexShrink: 0,
                        }} />
                        <span style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "0.8rem",
                            letterSpacing: "0.08em",
                            color: "var(--bone-dim)",
                        }}>
                            {name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
