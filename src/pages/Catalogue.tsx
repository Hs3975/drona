import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const productImages = [
  "img/1.png",
  "img/2.png",
  "img/3.png",
  "img/4.png",
  "img/5.png",
  "img/6.png",
  "img/7.png",
  "img/8.png",
  "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=800&auto=format&fit=crop",
];
const CatalogueProduct = ({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) => {
  const anim = useScrollAnimation({
    threshold: 0.2,
  });
  const isEven = index % 2 === 0;
  return (
    <section
      ref={anim.ref}
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-10" />
      <div
        className={cn(
          "absolute w-[600px] h-[600px] rounded-full blur-[200px]",
          isEven
            ? "top-1/4 -right-40 bg-primary/20"
            : "bottom-1/4 -left-40 bg-maroon-glow/30",
        )}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div
          className={cn(
            "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",
            !isEven && "lg:[direction:rtl]",
          )}
        >
          {/* Image */}
          <div
            className={cn(
              "transition-all duration-1000 delay-200 lg:[direction:ltr]",
              anim.isVisible
                ? "opacity-100 translate-x-0"
                : isEven
                  ? "opacity-0 -translate-x-20"
                  : "opacity-0 translate-x-20",
            )}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-maroon-glow/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border group-hover:border-primary/50 transition-colors duration-500">
                <img
                  src={productImages[product.id - 1]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={cn(
              "lg:[direction:ltr] transition-all duration-1000 delay-300",
              anim.isVisible
                ? "opacity-100 translate-x-0"
                : isEven
                  ? "opacity-0 translate-x-20"
                  : "opacity-0 -translate-x-20",
            )}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              {product.category}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              {product.name}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="space-y-4 mb-10">
              {product.features.map((feature, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex items-center gap-3 transition-all duration-700",
                    anim.isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8",
                  )}
                  style={{
                    transitionDelay: `${400 + i * 100}ms`,
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* <Button variant="hero" size="lg" className="group">
                View Details
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Product Number Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <span className="text-6xl font-bold text-primary/20">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-muted-foreground">/</span>
        <span className="text-2xl text-muted-foreground/50">
          {String(products.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
};
const Catalogue = () => {
  const heroAnim = useScrollAnimation({
    threshold: 0.1,
  });
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section
          ref={heroAnim.ref}
          className="min-h-[60vh] flex items-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-glow opacity-20" />
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div
              className={cn(
                "max-w-3xl transition-all duration-1000",
                heroAnim.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12",
              )}
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Our Collection
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6">
                Explore the <span className="text-gradient">Catalogue</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover our complete range of premium stationery, designed for
                those who appreciate excellence in every detail.
              </p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Scroll to explore
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
            </div>
          </div>
        </section>

        {/* Full Page Product Sections */}
        {products.map((product, index) => (
          <CatalogueProduct key={product.id} product={product} index={index} />
        ))}
      </main>

      <Footer />
    </div>
  );
};
export default Catalogue;
