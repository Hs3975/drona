import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Award, Users, Heart, Globe } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We never compromise on quality. Every product is crafted to exceed expectations.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Building a global community of creators who share our passion for fine stationery.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Our love for the craft drives us to constantly innovate and improve.",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description:
      "Committed to ethical sourcing and environmentally responsible practices.",
  },
];

const stats = [
  { value: "2023", label: "Established" },
  { value: "1M+", label: "Units Produced" },
  { value: "100+", label: "Retail Partners" },
  { value: "Nepal", label: "Manufactured In" },
];

const About = () => {
  const heroAnim = useScrollAnimation({ threshold: 0.1 });
  const storyAnim = useScrollAnimation({ threshold: 0.2 });
  const valuesAnim = useScrollAnimation({ threshold: 0.2 });
  const statsAnim = useScrollAnimation({ threshold: 0.2 });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section
          ref={heroAnim.ref}
          className="min-h-[70vh] flex items-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-glow opacity-20" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

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
                Our Story
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6">
                Crafting <span className="text-gradient">Legacy</span>
                <br />
                Since 2023
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From a small workshop to a national brand, DRONA has been
                dedicated to creating premium stationery that inspires
                creativity and captures thoughts beautifully.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section ref={storyAnim.ref} className="py-24 relative">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div
                className={cn(
                  "transition-all duration-1000",
                  storyAnim.isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-12",
                )}
              >
                <div className="relative">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-card glow-effect">
                    <img
                      src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=800&auto=format&fit=crop"
                      alt="DRONA Workshop"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-2xl bg-primary/20 blur-2xl" />
                </div>
              </div>

              <div
                className={cn(
                  "transition-all duration-1000 delay-200",
                  storyAnim.isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-12",
                )}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  A Journey of <span className="text-gradient">Passion</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong>DRONA</strong> was established in 2023 as a
                    stationery manufacturing brand under its parent company,
                    <strong> Sigdel Group Pvt. Ltd.</strong>, based in
                    Biratnagar, Nepal. Built on a foundation of industrial
                    discipline and entrepreneurial vision, DRONA was created to
                    deliver reliable, high-quality writing and stationery
                    products for everyday use.
                  </p>

                  <p>
                    The company is guided by the strategic leadership of its
                    board members—
                    <strong>
                      Sahil Sigdel, Santosh Sigdel, Lalita Adhikari, and Saramsh
                      Sigdel
                    </strong>
                    —who bring together experience in manufacturing, operations,
                    and business development. Their shared commitment is simple
                    and uncompromising: consistent quality, honest production,
                    and long-term trust.
                  </p>

                  <p>
                    DRONA specializes in{" "}
                    <strong>in-house ball pen manufacturing</strong>, where
                    every stage—from component assembly to ink performance and
                    finishing—is closely monitored. In addition, the company
                    undertakes
                    <strong>contract manufacturing</strong> for a wide range of
                    stationery products including pencils, marker ink, white
                    glue, My Clear, geometry boxes, and other essential items,
                    working with carefully selected partners under strict
                    quality supervision.
                  </p>

                  <p>
                    At the heart of the brand lies the{" "}
                    <strong>DRONA Quality Assurance Promise</strong>. Every
                    product—whether manufactured in-house or through contract
                    production—is tested to meet standards of durability,
                    usability, and performance. From classrooms to offices,
                    DRONA products are designed to perform consistently, day
                    after day.
                  </p>

                  <p>
                    Rooted in Nepal’s growing manufacturing landscape and driven
                    by a culture of responsibility, DRONA continues to evolve as
                    a dependable stationery brand—focused not on excess, but on
                    precision, practicality, and trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={valuesAnim.ref} className="py-24 bg-card/50">
          <div className="container mx-auto px-6 lg:px-12">
            <div
              className={cn(
                "text-center max-w-2xl mx-auto mb-16 transition-all duration-1000",
                valuesAnim.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12",
              )}
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4">
                What <span className="text-gradient">Drives</span> Us
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={cn(
                    "p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 group",
                    valuesAnim.isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12",
                  )}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsAnim.ref} className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-10" />

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={cn(
                    "text-center transition-all duration-1000",
                    statsAnim.isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12",
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="text-5xl md:text-6xl font-bold text-gradient">
                    {stat.value}
                  </span>
                  <p className="text-muted-foreground mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
