import React, { useEffect, useRef } from "react";

const newsItems = [
  {
    id: 1,
    title: "The Rising Popularity of Makhana in Health Food Markets",
    excerpt: "Discover why makhana is becoming the favorite snack for health-conscious consumers worldwide.",
    date: "May 15, 2023",
    source: "Health & Wellness Magazine",
    imagePath: "https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=1642&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Our Sustainable Farming Practices Featured in National Geographic",
    excerpt: "National Geographic highlights our eco-friendly makhana cultivation methods.",
    date: "April 3, 2023",
    source: "National Geographic",
    imagePath: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1587&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Celebrity Chef Creates Gourmet Recipes with Our Makhana",
    excerpt: "Renowned chef develops exclusive recipes featuring our premium makhana varieties.",
    date: "March 22, 2023",
    source: "Culinary Trends",
    imagePath: "https://images.unsplash.com/photo-1568625365131-079e026a927d?q=80&w=1587&auto=format&fit=crop",
  },
];

const NewsSection = () => {
  const newsRef = useRef<HTMLDivElement>(null);

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

    const newsElements = newsRef.current?.querySelectorAll(".news-item");
    newsElements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      newsElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [newsRef]);

  return (
    <section id="news" className="bg-white py-20">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="section-title">News & Media</h2>
          <p className="section-description">
            Stay updated with the latest news and media coverage about our brand.
          </p>
        </div>

        <div 
          ref={newsRef}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {newsItems.map((item, index) => (
            <div 
              key={item.id} 
              className="news-item opacity-0 overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:shadow-md hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={item.imagePath}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="mb-3 flex items-center space-x-2">
                  <span className="text-xs font-medium text-muted-foreground">
                    {item.date}
                  </span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs font-medium text-muted-foreground">
                    {item.source}
                  </span>
                </div>
                
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.excerpt}</p>
                
                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary"
                >
                  Read More
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
                    className="ml-1 h-4 w-4"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="rounded-full border bg-white px-8 py-3 text-base font-medium text-primary shadow-sm transition-all hover:bg-secondary"
          >
            View All News
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;