"use client";

import { useEffect, useRef, useCallback } from "react";

export function useScrollReveal() {
    const observerRef = useRef<IntersectionObserver | null>(null);

    const observe = useCallback((elements: NodeListOf<Element> | Element[]) => {
        if (observerRef.current) observerRef.current.disconnect();

        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observerRef.current?.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
        );

        elements.forEach((el) => observerRef.current?.observe(el));
    }, []);

    useEffect(() => {
        const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
        observe(els);
        return () => observerRef.current?.disconnect();
    }, [observe]);
}
