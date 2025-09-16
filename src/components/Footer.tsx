import { Button } from "@/components/ui/button";
import tecsuplogo from "../assets/segundologo.png"; // 👈 Logo para modo oscuro
import tecsuplogoLight from "../assets/modonoche.png"; // 👈 Logo para modo claro
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
    <footer className="relative bg-gradient-to-b from-gray-100 dark:from-gray-900 to-white dark:to-gray-950 border-t border-gray-200 dark:border-gray-800 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-500/20 dark:bg-emerald-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">

        {/* TECSUP Info */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          {/* ✅ Logo que cambia según modo */}
          <div className="relative inline-block mb-3 sm:mb-4">
        {/* Logo modo claro */}
<img
  src={tecsuplogoLight}
  alt="TECSUP Logo Light"
  className="h-16 sm:h-20 lg:h-24 w-auto mx-auto transition-all duration-300 hover:scale-105 dark:hidden object-contain"
  loading="lazy"
/>

{/* Logo modo oscuro */}
<img
  src={tecsuplogo}
  alt="TECSUP Logo Dark"
  className="h-16 sm:h-20 lg:h-24 w-auto mx-auto transition-all duration-300 hover:scale-105 hidden dark:block object-contain"
  loading="lazy"
/>
 
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 dark:text-white mb-2 sm:mb-3 tracking-tight">
            Hackathon 2025
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base px-2">
            Únete al evento tecnológico más innovador del año. 48 horas de
            código, creatividad y competencia para crear el futuro junto a TECSUP.
          </p>

          {/* Redes sociales */}
          <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 justify-center">
            {[
              { icon: Facebook, href: "https://facebook.com/tecsup", label: "Facebook", color: "hover:text-blue-600 dark:hover:text-blue-400" },
              { icon: Twitter, href: "https://twitter.com/tecsup", label: "Twitter", color: "hover:text-sky-500 dark:hover:text-sky-400" },
              { icon: Instagram, href: "https://instagram.com/tecsup", label: "Instagram", color: "hover:text-pink-600 dark:hover:text-pink-400" },
              { icon: Linkedin, href: "https://linkedin.com/company/tecsup", label: "LinkedIn", color: "hover:text-blue-700 dark:hover:text-blue-300" },
            ].map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className={`h-10 w-10 sm:h-11 sm:w-11 rounded-full transition-all duration-300 hover:scale-110 
                           hover:shadow-[0_0_15px_var(--tw-shadow-color)] hover:shadow-current
                           text-gray-700 dark:text-gray-300 ${social.color}
                           hover:bg-current hover:bg-opacity-10 dark:hover:bg-opacity-20
                           border border-transparent hover:border-current hover:border-opacity-30`}
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

        {/* Layout en grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 lg:mb-6">
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
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 relative transition-colors duration-300 group py-1 px-1"
                >
                  {link.name}
                  <ExternalLink className="w-3 h-3 inline ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <span className="absolute left-1 bottom-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-[calc(100%-8px)]"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 lg:mb-6">
              Contacto
            </h3>
            <div className="space-y-3 sm:space-y-4 max-w-sm sm:max-w-md mx-auto md:mx-0 px-2 md:px-0">
              <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <div className="text-gray-600 dark:text-gray-400 text-center sm:text-left">
                  <div className="font-medium text-sm sm:text-base">Campus TECSUP Lima</div>
                  <div className="text-xs sm:text-sm opacity-90">
                    Av. Cascanueces 2221, Santa Anita
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">+51 1 317-3900</div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base break-all sm:break-normal">
                  hackathon@tecsup.edu.pe
                </div>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center md:items-end gap-3 sm:gap-4">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 lg:mb-6">
              Legal
            </h3>
            <div className="flex flex-col sm:flex-row md:flex-col gap-2 sm:gap-4 lg:gap-6">
              <a href="#terminos" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm">
                Términos y Condiciones
              </a>
              <a href="#privacidad" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>

        {/* Final Bar */}
        <div className="pt-6 border-t border-gray-200/40 dark:border-gray-800/40 mt-8 text-center md:text-left">
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
            © 2025 TECSUP. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
