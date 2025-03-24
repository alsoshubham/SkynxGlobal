import React, { useEffect, useRef } from "react";
import { Check, Leaf, Heart, Award } from "lucide-react";

const Features = () => {
  const featuresRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const featureElements = featuresRef.current?.querySelectorAll(".feature-item");
    featureElements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      featureElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="section-container">
        <div className="mb-16 text-center" style={{ opacity: 0 }} ref={featuresRef}>
          <h2 className="section-title">Why Choose Our Makhana</h2>
          <p className="section-description">
            Our premium makhana stands out with exceptional quality and taste.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="feature-item opacity-0 [animation-delay:100ms]">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/5">
              <Leaf className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Organically Grown</h3>
            <p className="mt-2 text-muted-foreground">
              Cultivated in pristine waters without chemicals or pesticides.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm">Pesticide-free cultivation</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm">Natural growing process</span>
              </li>
            </ul>
          </div>

          <div className="feature-item opacity-0 [animation-delay:200ms]">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/5">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Nutritional Powerhouse</h3>
            <p className="mt-2 text-muted-foreground">
              Packed with essential proteins, vitamins, and minerals.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm">Low in fat, high in protein</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm">Rich in antioxidants</span>
              </li>
            </ul>
          </div>

          <div className="feature-item opacity-0 [animation-delay:300ms]">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/5">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Premium Quality</h3>
            <p className="mt-2 text-muted-foreground">
              Handpicked and processed to maintain freshness and flavor.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm">Carefully selected premium seeds</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm">Consistent size and texture</span>
              </li>
            </ul>
          </div>

          <div className="feature-item opacity-0 [animation-delay:400ms]">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-primary"
              >
                <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                <path d="M7 7h.01" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-semibold">Versatile Flavors</h3>
            <p className="mt-2 text-muted-foreground">
              Available in multiple delicious and innovative flavors.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm">Classic and spicy variants</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm">Sweet and savory options</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;