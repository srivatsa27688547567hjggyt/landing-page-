"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface ParallaxImageProps {
    src: string;
    alt: string;
    speed?: number;
    sizes?: string;
    priority?: boolean;
    objectPosition?: string;
    overlay?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}

export default function ParallaxImage({
    src,
    alt,
    speed = 0.15,
    sizes = "100vw",
    priority = false,
    objectPosition = "center",
    overlay,
    style,
    className,
}: ParallaxImageProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                position: "relative",
                overflow: "hidden",
                ...style,
            }}
        >
            <motion.div
                style={{
                    position: "absolute",
                    top: "-15%",
                    left: 0,
                    right: 0,
                    bottom: "-15%",
                    y,
                }}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    style={{ objectFit: "cover", objectPosition }}
                    sizes={sizes}
                    priority={priority}
                />
            </motion.div>
            {overlay}
        </div>
    );
}

/* ─── Hero zoom on load ──────────────────────────────────── */

export function HeroImage({
    src,
    alt,
    sizes = "52vw",
    objectPosition = "center",
    overlay,
}: {
    src: string;
    alt: string;
    sizes?: string;
    objectPosition?: string;
    overlay?: React.ReactNode;
}) {
    return (
        <motion.div
            animate={{ scale: [1, 1.05] }}
            transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            style={{
                position: "absolute",
                inset: 0,
                willChange: "transform",
            }}
        >
            <Image
                src={src}
                alt={alt}
                fill
                style={{ objectFit: "cover", objectPosition }}
                priority
                quality={85}
                sizes={sizes}
            />
            {overlay}
        </motion.div>
    );
}
