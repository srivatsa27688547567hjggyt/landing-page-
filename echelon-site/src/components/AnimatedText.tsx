"use client";

import { motion, type Variants } from "framer-motion";

interface AnimatedTextProps {
    text: string;
    as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
    className?: string;
    style?: React.CSSProperties;
    splitBy?: "word" | "char";
    delay?: number;
    staggerChildren?: number;
    once?: boolean;
    variant?: "default" | "blur" | "skew" | "skew-reveal";
}

const containerVariants: Variants = {
    hidden: {},
    visible: (custom: { stagger: number; delay: number }) => ({
        transition: {
            staggerChildren: custom.stagger,
            delayChildren: custom.delay,
        },
    }),
};

const getVariants = (variant: "default" | "blur" | "skew" | "skew-reveal"): Variants => {
    switch (variant) {
        case "skew-reveal":
            return {
                hidden: {
                    y: "110%",
                    skewY: 10,
                    opacity: 0,
                },
                visible: {
                    y: "0%",
                    skewY: 0,
                    opacity: 1,
                    transition: {
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1],
                    },
                },
            };
        case "blur":
            return {
                hidden: {
                    y: "40%",
                    opacity: 0,
                    filter: "blur(10px)",
                },
                visible: {
                    y: "0%",
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: {
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1],
                    },
                },
            };
        case "skew":
            return {
                hidden: {
                    y: "100%",
                    skewY: 7,
                    opacity: 0,
                },
                visible: {
                    y: "0%",
                    skewY: 0,
                    opacity: 1,
                    transition: {
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1],
                    },
                },
            };
        default:
            return {
                hidden: {
                    y: "100%",
                    opacity: 0,
                },
                visible: {
                    y: "0%",
                    opacity: 1,
                    transition: {
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                    },
                },
            };
    }
};

export default function AnimatedText({
    text,
    as: Tag = "h2",
    className,
    style,
    splitBy = "word",
    delay = 0,
    staggerChildren = 0.04,
    once = true,
    variant = "default",
}: AnimatedTextProps) {
    const MotionTag = motion.create(Tag);
    const itemVariants = getVariants(variant);

    if (splitBy === "char") {
        const words = text.split(" ");
        return (
            <MotionTag
                className={className}
                style={{ ...style, overflow: "hidden" }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once, margin: "-60px" }}
                custom={{ stagger: staggerChildren, delay }}
            >
                {words.map((word, wi) => (
                    <span key={wi} style={{ display: "inline-block", whiteSpace: "pre" }}>
                        {word.split("").map((char, ci) => (
                            <motion.span
                                key={ci}
                                variants={itemVariants}
                                style={{ display: "inline-block" }}
                            >
                                {char}
                            </motion.span>
                        ))}
                        {wi < words.length - 1 && (
                            <span style={{ display: "inline-block" }}>&nbsp;</span>
                        )}
                    </span>
                ))}
            </MotionTag>
        );
    }

    // Word-level split
    const words = text.split(" ");
    return (
        <MotionTag
            className={className}
            style={style}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-60px" }}
            custom={{ stagger: staggerChildren, delay }}
        >
            {words.map((word, i) => (
                <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}>
                    <motion.span
                        variants={itemVariants}
                        style={{ display: "inline-block" }}
                    >
                        {word}
                    </motion.span>
                    {i < words.length - 1 && (
                        <span style={{ display: "inline-block" }}>&nbsp;</span>
                    )}
                </span>
            ))}
        </MotionTag>
    );
}
