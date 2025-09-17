import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  Search,
} from "lucide-react";

interface SearchResult {
  element: Element;
  text: string;
  sectionTitle: string;
  score: number;
}

export const Footer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [pageContent, setPageContent] = useState<SearchResult[]>([]);

  // Indexar contenido de la página
  useEffect(() => {
    const indexPageContent = () => {
      const content: SearchResult[] = [];
      const selectors = [
        "h1, h2, h3, h4, h5, h6",
        "p",
        "li",
        "[data-searchable]",
        ".searchable",
      ];
      selectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
          const text = element.textContent?.trim();
          if (text && text.length > 2) {
            const section =
              element.closest("section") || element.closest("[id]");
            const sectionTitle =
              section?.id ||
              section?.querySelector("h1, h2, h3")?.textContent ||
              "Contenido general";
            content.push({ element, text, sectionTitle, score: 0 });
          }
        });
      });
      setPageContent(content);
    };

    indexPageContent();
    const observer = new MutationObserver(() => {
      indexPageContent();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  const calculateScore = (text: string, query: string): number => {
    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase();
    let score = 0;
    if (lowerText.includes(lowerQuery)) {
      score += 100;
      if (lowerText.startsWith(lowerQuery)) score += 50;
    }
    return score;
  };

  const performSearch = (query: string) => {
    if (!query.trim() || query.length < 2) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }
    const results = pageContent
      .map((item) => ({
        ...item,
        score: calculateScore(item.text, query),
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
    setSearchResults(results);
    setShowResults(true);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(searchQuery);
  };

  const goToSearchResult = (result: SearchResult) => {
    result.element.scrollIntoView({ behavior: "smooth", block: "center" });
    setShowResults(false);
    setSearchQuery("");
  };

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
            <img
              src={tecsuplogoLight}
              alt="TECSUP Logo Light"
              className="h-16 sm:h-20 lg:h-24 w-auto mx-auto transition-all duration-300 hover:scale-105 dark:hidden object-contain"
              loading="lazy"
            />
            <img
              src={tecsuplogo}
              alt="TECSUP Logo Dark"
              className="h-16 sm:h-20 lg:h-24 w-auto mx-auto transition-all duration-300 hover:scale-105 hidden dark:block object-contain"
              loading="lazy"
            />
          </div>

          {/* 🔎 Buscador */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex justify-center gap-2 max-w-md mx-auto mb-6"
          >
            <Input
              type="text"
              placeholder="Buscar en la página..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-lg"
            />
            <Button type="submit" variant="default" className="flex gap-1 text-lg">
              <Search className="h-4 w-4" /> Buscar
            </Button>
          </form>

          {/* Resultados */}
          {showResults && searchResults.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 max-w-md mx-auto mb-6 text-left">
              <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Resultados:
              </h4>
              <ul className="space-y-2">
                {searchResults.map((result, i) => (
                  <li key={i}>
                    <button
                      onClick={() => goToSearchResult(result)}
                      className="text-lg text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {result.text.length > 60
                        ? result.text.slice(0, 60) + "..."
                        : result.text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-2 sm:mb-3 tracking-tight">
            Hackathon 2025
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto mb-4 sm:mb-6 lg:mb-8 text-lg sm:text-xl px-2">
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

        {/* ... (el resto de tu grid de enlaces, contacto y legal sigue igual) */}
      </div>
    </footer>
  );
};