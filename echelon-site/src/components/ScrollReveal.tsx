"use client";

import { motion, type Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "scale" | "fade";

interface ScrollRevealProps {
    children: React.ReactNode;
    direction?: Direction;
    delay?: number;
    duration?: number;
    once?: boolean;
    className?: string;
    style?: React.CSSProperties;
    amount?: number;
}

function getVariants(direction: Direction, duration: number): Variants {
    const dist = 60;
    const base = {
        opacity: 0,
        ...(direction === "up" && { y: dist }),
        ...(direction === "down" && { y: -dist }),
        ...(direction === "left" && { x: -dist }),
        ...(direction === "right" && { x: dist }),
        ...(direction === "scale" && { scale: 0.92 }),
    };

    return {
        hidden: base,
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            transition: {
                duration,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };
}

export default function ScrollReveal({
    children,
    direction = "up",
    delay = 0,
    duration = 0.9,
    once = true,
    className,
    style,
    amount = 0.15,
}: ScrollRevealProps) {
    return (
        <motion.div
            className={className}
            style={style}
            variants={getVariants(direction, duration)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount, margin: "-40px" }}
            transition={{ delay }}
        >
            {children}
        </motion.div>
    );
}

/* ─── Stagger container for child reveals ───────────────── */

interface StaggerContainerProps {
    children: React.ReactNode;
    stagger?: number;
    delay?: number;
    once?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

const staggerParent: Variants = {
    hidden: {},
    visible: (custom: { stagger: number; delay: number }) => ({
        transition: {
            staggerChildren: custom.stagger,
            delayChildren: custom.delay,
        },
    }),
};

const staggerChild: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export function StaggerContainer({
    children,
    stagger = 0.12,
    delay = 0,
    once = true,
    className,
    style,
}: StaggerContainerProps) {
    return (
        <motion.div
            className={className}
            style={style}
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-60px" }}
            custom={{ stagger, delay }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({
    children,
    className,
    style,
}: {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}) {
    return (
        <motion.div className={className} style={style} variants={staggerChild}>
            {children}
        </motion.div>
    );
}
