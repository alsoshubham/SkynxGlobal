import React, { useEffect, useRef } from "react";

const products = [
  {
    id: 1,
    name: "Original Makhana",
    description: "Pure and natural fox nuts with no additives.",
    price: "$4.99",
    imagePath: "https://images.unsplash.com/photo-1612762174593-be293ce23fef?q=80&w=1665&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Chili Roasted Makhana",
    description: "Spicy roasted fox nuts with a kick of chili.",
    price: "$5.99",
    imagePath: "https://images.unsplash.com/photo-1640520353891-bfc131a455cb?q=80&w=1772&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Caramel Makhana",
    description: "Sweet caramelized fox nuts for a delightful treat.",
    price: "$5.99",
    imagePath: "https://images.unsplash.com/photo-1620286850653-20c0f0727916?q=80&w=1785&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Salt & Pepper Makhana",
    description: "Classic flavor with a perfect balance of salt and pepper.",
    price: "$5.49",
    imagePath: "https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=1530&auto=format&fit=crop",
  },
];

const ProductSection = () => {
  const productsRef = useRef(null);

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

    const productElements = productsRef.current?.querySelectorAll(".product-card");
    productElements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      productElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="products" className="bg-[#f8f8f8] py-20">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="section-title">Our Premium Makhana</h2>
          <p className="section-description">
            Discover our range of carefully crafted makhana flavors, perfect for any occasion.
          </p>
        </div>

        <div 
          ref={productsRef}
          className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card opacity-0 bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.imagePath}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-medium">{product.price}</span>
                  <button className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-primary/90">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="buy-now-btn inline-flex items-center px-8 py-3 text-base"
          >
            View All Products
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
              className="ml-2 h-4 w-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;