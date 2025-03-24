import React, { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ProductSection from "../components/ProductSection";
import NewsSection from "../components/NewsSection";
import AboutSection from "../components/AboutSection";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Index () {
  useEffect(() => {
    // Smooth scroll to the section when URL has hash
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 80,
            behavior: "smooth",
          });
        }
      }
    };

    // Handle hash when component mounts and when it changes
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductSection />
        <NewsSection />
        <AboutSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};