"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [cursorText, setCursorText] = useState("");

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            
            // Check for specific hover types
            const viewTarget = target.closest('[data-cursor="view"]');
            const contactTarget = target.closest('[data-cursor="contact"]');
            const clickable = target.closest('a') || target.closest('button') || window.getComputedStyle(target).cursor === 'pointer';
            
            if (viewTarget) {
                setCursorText("View");
                setIsHovering(true);
            } else if (contactTarget) {
                setCursorText("Inquire");
                setIsHovering(true);
            } else if (clickable) {
                setCursorText("");
                setIsHovering(true);
            } else {
                setCursorText("");
                setIsHovering(false);
            }
        };

        const handleMouseDown = () => setIsHovering(true);
        const handleMouseUp = () => setIsHovering(false);
        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        document.body.addEventListener("mouseenter", handleMouseEnter);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [cursorX, cursorY]);

    return (
        <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999 }}>
            {/* Main cursor dot */}
            <motion.div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 8,
                    height: 8,
                    backgroundColor: "var(--orange)",
                    borderRadius: "50%",
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                    opacity: isVisible ? 1 : 0,
                    zIndex: 2,
                }}
            />
            {/* Outer circle / ring */}
            <motion.div
                animate={{
                    scale: isHovering ? (cursorText ? 10 : 2.5) : 1,
                    backgroundColor: cursorText ? "var(--orange)" : isHovering ? "rgba(200,80,26,0.1)" : "transparent",
                    borderColor: cursorText ? "transparent" : "rgba(200,80,26,0.5)",
                }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: "1px solid",
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                    opacity: isVisible ? 1 : 0,
                    zIndex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <AnimatePresence>
                    {cursorText && (
                        <motion.span
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            style={{
                                color: "var(--charcoal)",
                                fontSize: "1px", // Scaled up by the outer circle container
                                fontWeight: 700,
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                                transform: "scale(8)", // Counter-scaling the small font size for crispness
                            }}
                        >
                            {cursorText}
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
