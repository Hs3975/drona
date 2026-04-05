import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AboutPreview = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="min-h-screen flex items-center py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={cn(
            'transition-all duration-1000',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          )}>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              About DRONA
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 leading-tight text-white">
              Crafted with
              <br />
              <span className="text-gradient">Precision</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              At DRONA, we believe that every stroke tells a story. Our premium stationery 
              is designed for creators, thinkers, and dreamers who appreciate the finer 
              details in life. Each product is a testament to our commitment to quality 
              and craftsmanship.
            </p>
            <Link to="/about">
              <Button variant="glass" size="lg" className="group text-white">
                Our Story
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className={cn(
            'transition-all duration-1000 delay-300',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          )}>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden glow-effect">
                <img
                  src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop"
                  alt="Premium stationery collection"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary/20 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
