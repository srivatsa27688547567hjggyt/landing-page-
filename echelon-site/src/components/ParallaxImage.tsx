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
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
                position: "absolute",
                inset: 0,
            }}
        >
            <Image
                src={src}
                alt={alt}
                fill
                style={{ objectFit: "cover", objectPosition }}
                priority
                sizes={sizes}
            />
            {overlay}
        </motion.div>
    );
}
