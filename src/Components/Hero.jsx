import React, { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = Math.max(1 - scrollY / 500, 0);
      const transform = `translateY(${scrollY * 0.4}px)`;
      
      if (heroRef.current) {
        heroRef.current.style.opacity = opacity.toString();
        heroRef.current.style.transform = transform;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full overflow-hidden bg-[#f8f8f8] pt-16"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:20px_20px]"></div>
      
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div 
          ref={heroRef}
          className="relative z-10 text-center transition-all duration-300 ease-out"
        >
          <div className="mb-6 inline-block rounded-full bg-black/5 px-4 py-1.5">
            <span className="text-sm font-medium uppercase tracking-wider text-black/70">Premium quality</span>
          </div>
          
          <h1 className="font-display text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Discover the Art of<br />
            <span className="mt-2 block">Perfect Makhana</span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
            Handcrafted with precision, our premium makhana brings nature's goodness to your fingertips.
          </p>
          
          <div className="mt-10 flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <a 
              href="#products" 
              className="buy-now-btn px-8 py-3 text-base"
            >
              Shop Now
            </a>
            <a 
              href="#about" 
              className="rounded-full border bg-white px-8 py-3 text-base font-medium text-primary shadow-sm transition-all hover:bg-secondary"
            >
              Learn More
            </a>
          </div>
        </div>
        
        {/* Hero image */}
        <div className="mt-16 w-full max-w-3xl animate-subtle-float">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=1530&auto=format&fit=crop')] bg-cover bg-center"></div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Scroll</span>
            <div className="h-10 w-[1px] bg-gradient-to-b from-muted-foreground to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;