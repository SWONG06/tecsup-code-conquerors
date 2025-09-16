import { Button } from "@/components/ui/button";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-navbar to-background border-t border-border overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-tech-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-tech-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* TECSUP Info */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <img
            className="h-12 sm:h-14 lg:h-16 w-auto mb-3 sm:mb-4 mx-auto drop-shadow-lg"
            src="assets/Logo-Tecsup.png"
            alt="TECSUP"
          />
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground mb-2 sm:mb-3 tracking-tight">
            Hackathon 2025
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base px-2">
            Únete al evento tecnológico más innovador del año. 48 horas de
            código, creatividad y competencia para crear el futuro junto a TECSUP.
          </p>

          {/* Redes sociales */}
          <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 justify-center">
            {[
              { icon: Facebook, href: "#", label: "Facebook" },
              { icon: Twitter, href: "#", label: "Twitter" },
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
            ].map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="h-10 w-10 sm:h-11 sm:w-11 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_var(--tw-shadow-color)] hover:shadow-tech-primary/50"
                asChild
              >
                <a 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Layout en grid para desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-3 sm:mb-4 lg:mb-6">
              Enlaces Rápidos
            </h3>
            <div className="flex flex-col sm:flex-row md:flex-col justify-center md:justify-start gap-3 sm:gap-4 lg:gap-6 px-2 md:px-0">
              {[
                { name: "Información", href: "#info" },
                { name: "Desafíos", href: "#desafios" },
                { name: "Premios", href: "#premios" },
                { name: "Bases", href: "#bases" },
                { name: "FAQ", href: "#faq" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm sm:text-base text-muted-foreground hover:text-tech-primary relative transition-colors duration-300 group py-1 px-1"
                >
                  {link.name}
                  <ExternalLink className="w-3 h-3 inline ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <span className="absolute left-1 bottom-0 w-0 h-0.5 bg-tech-primary transition-all duration-300 group-hover:w-[calc(100%-8px)]"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-3 sm:mb-4 lg:mb-6">
              Contacto
            </h3>
            <div className="space-y-3 sm:space-y-4 max-w-sm sm:max-w-md mx-auto md:mx-0 px-2 md:px-0">
              <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-tech-primary flex-shrink-0" />
                <div className="text-muted-foreground text-center sm:text-left">
                  <div className="font-medium text-sm sm:text-base">Campus TECSUP Lima</div>
                  <div className="text-xs sm:text-sm opacity-90">
                    Av. Cascanueces 2221, Santa Anita
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-tech-secondary flex-shrink-0" />
                <div className="text-muted-foreground text-sm sm:text-base">+51 1 317-3900</div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-tech-accent flex-shrink-0" />
                <div className="text-muted-foreground text-sm sm:text-base break-all sm:break-normal">
                  hackathon@tecsup.edu.pe
                </div>
              </div>
            </div>
          </div>
          
          {/* Legal Links */}
          <div className="flex flex-col items-center md:items-end gap-3 sm:gap-4">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-3 sm:mb-4 lg:mb-6">
              Legal
            </h3>
            <div className="flex flex-col sm:flex-row md:flex-col gap-2 sm:gap-4 lg:gap-6">
              <a href="#" className="text-muted-foreground hover:text-tech-primary transition-colors duration-200 text-sm">
                Términos y Condiciones
              </a>
              <a href="#" className="text-muted-foreground hover:text-tech-primary transition-colors duration-200 text-sm">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>

        {/* Final Bar */}
        <div className="pt-6 border-t border-border/40 mt-8 text-center md:text-left">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © 2025 TECSUP. Todos los derechos reservados .
          </p>
        </div>
      </div>
    </footer>
  );
};
