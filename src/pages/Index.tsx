import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import ProductSection from "@/components/ProductSection";
import { products } from "@/data/products";

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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <HeroSection />
        <AboutPreview />

        <div id="products">
          {products.map((product, index) => (
            <ProductSection
              key={product.id}
              product={product}
              index={index}
              imageUrl={productImages[index]}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
