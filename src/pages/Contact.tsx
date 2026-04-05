import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@drona.com",
    href: "mailto:info@drona.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+977-9861613660\n+977-9852023870",
    href: "tel:+9779861613660",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Biratnagar, Nepal",
    href: "#map",
  },
];
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();
  const heroAnim = useScrollAnimation({
    threshold: 0.1,
  });
  const formAnim = useScrollAnimation({
    threshold: 0.2,
  });
  const mapAnim = useScrollAnimation({
    threshold: 0.1,
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section ref={heroAnim.ref} className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-20" />
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />

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
                Get in Touch
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6">
                Let's <span className="text-gradient">Connect</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have a question or want to learn more about our products? We'd
                love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section ref={formAnim.ref} className="py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div
                className={cn(
                  "transition-all duration-1000",
                  formAnim.isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-12",
                )}
              >
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

                <div className="space-y-6 mb-12">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-card transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">
                          {info.label}
                        </span>
                        <p className="text-foreground font-medium">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div
                className={cn(
                  "transition-all duration-1000 delay-200",
                  formAnim.isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-12",
                )}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Name
                      </label>
                      <Input
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        required
                        className="h-12 bg-card border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        required
                        className="h-12 bg-card border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Subject
                    </label>
                    <Input
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          subject: e.target.value,
                        })
                      }
                      required
                      className="h-12 bg-card border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <Textarea
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      required
                      rows={6}
                      className="bg-card border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                  >
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section ref={mapAnim.ref} id="map" className="py-24 bg-card/50">
          <div className="container mx-auto px-6 lg:px-12">
            <div
              className={cn(
                "text-center max-w-2xl mx-auto mb-12 transition-all duration-1000",
                mapAnim.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12",
              )}
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Visit Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4">
                Find Our <span className="text-gradient">Location</span>
              </h2>
            </div>

            <div
              className={cn(
                "rounded-3xl overflow-hidden border border-border glow-effect transition-all duration-1000 delay-200",
                mapAnim.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12",
              )}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d446.5133712200619!2d87.27796669408067!3d26.452280657177113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef744704331cc5%3A0x6d9a85e45c54b3fc!2sBiratnagar%2056613!5e0!3m2!1sen!2snp!4v1767721015684!5m2!1sen!2snp"
                width="100%"
                height="500"
                style={{
                  border: 0,
                  filter: "grayscale(100%) invert(92%) contrast(90%)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DRONA Location"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
export default Contact;
