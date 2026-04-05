import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="text-3xl font-bold text-gradient">
              DRONA
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
              Premium stationery crafted for those who appreciate the art of
              writing. Every product is designed with precision and passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Catalogue", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>info@drona.com</li>
              <li>
                +977-9861613660 <br />
                +977-9852023870
              </li>
              <li>
                Sigdel Group Pvt. Ltd
                <br />
                Biratnagar, Nepal
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DRONA. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>

            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <SiTiktok className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
