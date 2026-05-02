"use client";

import SmoothScroll from "@/components/SmoothScroll";
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
  return (
    <SmoothScroll>
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
    </SmoothScroll>
  );
}
