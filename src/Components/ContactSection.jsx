import React, { useEffect, useRef } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === formRef.current) {
              entry.target.classList.add("animate-fade-in-left");
            } else if (entry.target === infoRef.current) {
              entry.target.classList.add("animate-fade-in-right");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const formElement = formRef.current;
    const infoElement = infoRef.current;

    if (formElement) observer.observe(formElement);
    if (infoElement) observer.observe(infoElement);

    return () => {
      if (formElement) observer.unobserve(formElement);
      if (infoElement) observer.unobserve(infoElement);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Form submitted! This would be connected to a backend in a real implementation.");
  };

  return (
    <section id="contact" className="bg-[#f8f8f8] py-20">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-description">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <form 
            ref={formRef} 
            onSubmit={handleSubmit}
            className="opacity-0 space-y-6 rounded-2xl bg-white p-8 shadow-sm"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-lg border border-border bg-transparent px-4 py-2.5 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border border-border bg-transparent px-4 py-2.5 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full rounded-lg border border-border bg-transparent px-4 py-2.5 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Subject"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full rounded-lg border border-border bg-transparent px-4 py-2.5 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-primary/90"
            >
              Send Message
            </button>
          </form>

          <div 
            ref={infoRef}
            className="opacity-0 space-y-8 lg:pl-8"
          >
            <div>
              <h3 className="text-xl font-medium">Get in Touch</h3>
              <p className="mt-2 text-muted-foreground">
                We're here to answer your questions and provide assistance. Feel free to reach out to us through any of the following methods.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-medium">Our Location</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    123 Makhana Street, Gourmet District
                    <br />
                    New York, NY 10001, USA
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-medium">Email Us</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    info@makhanabrand.com
                    <br />
                    support@makhanabrand.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-medium">Call Us</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    +1 (555) 123-4567
                    <br />
                    +1 (555) 987-6543
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium">Business Hours</h3>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Monday - Friday</span>
                  <span className="text-sm font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Saturday</span>
                  <span className="text-sm font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Sunday</span>
                  <span className="text-sm font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;