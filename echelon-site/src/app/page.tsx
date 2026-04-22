"use client";

import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Founders from "@/components/Founders";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import CaseStudy from "@/components/CaseStudy";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";

export default function Home() {
  // Wire up scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    const targets = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Founders />
      <Philosophy />
      <Services />
      <CaseStudy />
      <Partners />
      <Contact />
    </main>
  );
}
