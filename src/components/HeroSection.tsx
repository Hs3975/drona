import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const heroImages = [
  "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&auto=format&fit=crop",
];
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sliding Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={image}
              alt={`Hero slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex justify-center gap-2 opacity-0 animate-fade-up"
        style={{
          animationDelay: "0.8s",
        }}
      >
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-primary w-8" : "bg-white/30 hover:bg-white/50"}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
    </section>
  );
};
export default HeroSection;
