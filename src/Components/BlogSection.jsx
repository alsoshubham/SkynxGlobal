import React, { useEffect, useRef } from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Nutritional Benefits of Makhana You Should Know",
    excerpt: "Explore the incredible health benefits of incorporating makhana into your daily diet.",
    date: "June 10, 2023",
    category: "Health",
    imagePath: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1587&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "5 Creative Makhana Recipes to Try This Weekend",
    excerpt: "Discover delicious and innovative ways to enjoy makhana beyond the traditional snack.",
    date: "May 25, 2023",
    category: "Recipes",
    imagePath: "https://images.unsplash.com/photo-1561043433-aaf687c4cf04?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "The Ancient History of Makhana in Traditional Medicine",
    excerpt: "Learn about the historical significance of makhana in Ayurvedic and traditional healing practices.",
    date: "April 18, 2023",
    category: "Culture",
    imagePath: "https://images.unsplash.com/photo-1481671703460-040cb8a2d909?q=80&w=1587&auto=format&fit=crop",
  },
];

const BlogSection = () => {
  const blogsRef = useRef<HTMLDivElement>(null);

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

    const blogElements = blogsRef.current?.querySelectorAll(".blog-item");
    blogElements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      blogElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [blogsRef]);

  return (
    <section id="blog" className="bg-white py-20">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="section-title">Latest from Our Blog</h2>
          <p className="section-description">
            Explore our articles for insights, recipes, and stories about makhana.
          </p>
        </div>

        <div 
          ref={blogsRef}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {blogPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="blog-item opacity-0 overflow-hidden rounded-xl bg-white transition-all duration-300 hover:shadow-lg hover-lift subtle-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.imagePath}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="mb-3 flex items-center space-x-2">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">
                    {post.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-medium">{post.title}</h3>
                <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                
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
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;