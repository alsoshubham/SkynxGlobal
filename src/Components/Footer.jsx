import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const quickLinks = {
  title: "Quick Links",
  links: [
    { title: "Home", href: "#home" },
    { title: "About Us", href: "#about" },
    { title: "Blogs", href: "#blog" },
    { title: "Contact Us", href: "#contact" },
  ],
};

const categories = {
  title: "Categories",
  links: [
    { title: "Original Makhana", href: "#products" },
    { title: "Chili Roasted", href: "#products" },
    { title: "Caramel", href: "#products" },
    { title: "Salt & Pepper", href: "#products" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div>
            <div className="flex items-center">
              <span className="font-display text-xl font-medium tracking-tight">MAKHANA</span>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Premium quality makhana for the health-conscious consumer. Experience the perfect blend of taste and nutrition.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium">{quickLinks.title}</h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.links.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-medium">{categories.title}</h3>
            <ul className="mt-4 space-y-3">
              {categories.links.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium">Subscribe to Our Newsletter</h3>
            <p className="mt-4 text-sm text-white/70">
              Stay updated with our latest products, recipes, and offers.
            </p>
            <form className="mt-4">
              <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur-sm placeholder:text-white/50 focus:border-white/30 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="whitespace-nowrap rounded-lg bg-white px-4 py-2 text-sm font-medium text-[#111] transition-colors hover:bg-white/90"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} Makhana Brand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;