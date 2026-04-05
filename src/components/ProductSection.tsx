import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Product } from '@/data/products';
import { Check } from 'lucide-react';
interface ProductSectionProps {
  product: Product;
  index: number;
  imageUrl: string;
}
const ProductSection = ({
  product,
  index,
  imageUrl
}: ProductSectionProps) => {
  const {
    ref,
    isVisible
  } = useScrollAnimation({
    threshold: 0.15
  });
  const isEven = index % 2 === 0;
  return <section ref={ref} className="min-h-screen flex items-center py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className={cn("absolute top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]", isEven ? "left-0" : "right-0")} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className={cn("grid lg:grid-cols-2 gap-12 lg:gap-20 items-center", !isEven && "lg:grid-flow-dense")}>
          {/* Content */}
          <div className={cn("transition-all duration-1000", isVisible ? 'opacity-100 translate-x-0' : isEven ? 'opacity-0 -translate-x-12' : 'opacity-0 translate-x-12', !isEven && "lg:col-start-2")}>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              {product.category}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              {product.name}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {product.description}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {product.features.map((feature, i) => <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>)}
            </div>

            <div className="flex items-baseline gap-2">
              
            </div>
          </div>

          {/* Image */}
          <div className={cn("transition-all duration-1000 delay-200", isVisible ? 'opacity-100 translate-x-0 scale-100' : isEven ? 'opacity-0 translate-x-12 scale-95' : 'opacity-0 -translate-x-12 scale-95', !isEven && "lg:col-start-1")}>
            <div className="relative group">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-card card-shadow">
                <img src={imageUrl} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-primary/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProductSection;