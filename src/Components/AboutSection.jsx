import React, { useEffect, useRef } from "react";

const AboutSection = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftRef.current) {
              entry.target.classList.add("animate-fade-in-left");
            } else if (entry.target === rightRef.current) {
              entry.target.classList.add("animate-fade-in-right");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const leftElement = leftRef.current;
    const rightElement = rightRef.current;

    if (leftElement) observer.observe(leftElement);
    if (rightElement) observer.observe(rightElement);

    return () => {
      if (leftElement) observer.unobserve(leftElement);
      if (rightElement) observer.unobserve(rightElement);
    };
  }, []);

  return (
    <section id="about" className="bg-[#f8f8f8] py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div
            ref={leftRef}
            className="opacity-0"
          >
            <div className="rounded-2xl bg-white p-1 shadow-2xl">
              <div className="aspect-[4/5] overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1492201743405-29dccca3eeff?q=80&w=1664&auto=format&fit=crop"
                  alt="Makhana cultivation"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div
            ref={rightRef}
            className="opacity-0"
          >
            <div className="mb-4 inline-block rounded-full bg-black/5 px-4 py-1.5">
              <span className="text-sm font-medium uppercase tracking-wider text-black/70">Our Story</span>
            </div>
            
            <h2 className="section-title">About Our Brand</h2>
            
            <div className="mt-6 space-y-6 text-muted-foreground">
              <p>
                Our journey began with a simple mission: to bring the finest quality makhana (fox nuts) to health-conscious consumers worldwide. What started as a small family endeavor has grown into a premium brand dedicated to excellence.
              </p>
              
              <p>
                We work directly with farmers who cultivate makhana in the pristine waters of Northern India, maintaining traditional harvesting methods while incorporating modern, sustainable farming practices.
              </p>
              
              <p>
                Every pack of our makhana represents our commitment to quality, taste, and nutritional excellence. We carefully select, process, and package our products to ensure you receive only the best.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                <span className="font-display text-3xl font-medium">10+</span>
                <p className="mt-1 text-sm text-muted-foreground">Years of Experience</p>
              </div>
              
              <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                <span className="font-display text-3xl font-medium">5</span>
                <p className="mt-1 text-sm text-muted-foreground">Unique Flavors</p>
              </div>
              
              <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                <span className="font-display text-3xl font-medium">100%</span>
                <p className="mt-1 text-sm text-muted-foreground">Natural Ingredients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;