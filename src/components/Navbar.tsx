"use client";

// ===== IMPORTS =====
import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

// Importar ambos logos
import tecsupLogoLight from "@/assets/modonoche.png";
import tecsupLogoDark from "@/assets/segundologo.png";

// ===== TIPOS Y CONFIGURACIÓN =====
const navigation: { name: string; href: string }[] = [
  { name: "INICIO", href: "hero" },
  { name: "INFO", href: "info" },
  { name: "DESAFÍOS", href: "desafios" },
  { name: "PREMIOS", href: "premios" },
  { name: "BASES", href: "bases" },
  { name: "REGISTRO", href: "registro" },
];

interface SearchResult {
  element: Element;
  text: string;
  sectionTitle: string;
  score: number;
}

// ===== COMPONENTE PRINCIPAL =====
export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [pageContent, setPageContent] = useState<SearchResult[]>([]);

  // ===== EFECTOS =====
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const savedTheme = localStorage?.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const indexPageContent = () => {
      const content: SearchResult[] = [];
      const selectors = [
        "h1, h2, h3, h4, h5, h6",
        "p",
        "li",
        "[data-searchable]",
        ".searchable",
        "button[aria-label]",
        "a[title]",
        "[alt]",
        "blockquote",
        "figcaption",
        "span",
        'div[role="heading"]',
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
            content.push({
              element,
              text,
              sectionTitle,
              score: 0,
            });
          }
        });
      });
      setPageContent(content);
    };
    const timer = setTimeout(indexPageContent, 1000);
    const observer = new MutationObserver(() => {
      clearTimeout(timer);
      setTimeout(indexPageContent, 500);
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // ===== FUNCIONES =====
  const calculateScore = (text: string, query: string): number => {
    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase();
    let score = 0;
    if (lowerText.includes(lowerQuery)) {
      score += 100;
      if (lowerText.startsWith(lowerQuery)) score += 50;
      const words = lowerQuery.split(" ");
      words.forEach((word) => {
        const wordRegex = new RegExp(`\\b${word}\\b`, "gi");
        const matches = lowerText.match(wordRegex);
        if (matches) score += matches.length * 20;
      });
    }
    const queryWords = lowerQuery.split(" ").filter((w) => w.length > 2);
    queryWords.forEach((word) => {
      if (lowerText.includes(word)) score += 10;
    });
    return score;
  };

  const performSearch = (query: string) => {
    if (!query.trim() || query.length < 2) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }
    const results = pageContent
      .map((item) => ({ ...item, score: calculateScore(item.text, query) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
    setSearchResults(results);
    setShowResults(true);
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchQuery.length >= 2) performSearch(searchQuery);
      else setShowResults(false);
    }, 300);
    return () => clearTimeout(debounceTimer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, pageContent]);

  const toggleTheme = () => {
    if (typeof window === "undefined") return;
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const goToSearchResult = (result: SearchResult) => {
    result.element.scrollIntoView({ behavior: "smooth", block: "center" });
    setShowSearch(false);
    setShowResults(false);
    setSearchQuery("");
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) goToSearchResult(searchResults[0]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navOffset = window.innerWidth < 768 ? 60 : 72;
    const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // ===== COMPONENTE DE LOGO =====
  const LogoComponent = () => (
    <button
      onClick={() => scrollToSection("hero")}
      aria-label="Ir al inicio"
      className="flex items-center cursor-pointer shrink-0 group"
    >
      {/* Logo modo claro */}
      <img
        src={tecsupLogoLight}
        alt="TECSUP Logo Light"
        className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105 dark:hidden"
        loading="eager"
      />
      {/* Logo modo oscuro */}
      <img
        src={tecsupLogoDark}
        alt="TECSUP Logo Dark"
        className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105 hidden dark:block"
        loading="eager"
      />
    </button>
  );

  // ===== RENDER =====
  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-border ${
          scrolled
            ? "bg-background/98 backdrop-blur-lg shadow-lg"
            : "bg-background/95 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
            {/* Logo */}
            <LogoComponent />

            {/* ===== NAVEGACIÓN DESKTOP ===== */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-foreground text-sm xl:text-base font-medium cursor-pointer px-2 xl:px-3 py-1 rounded-md transition-all duration-300 hover:text-tech-primary hover:bg-muted/50"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* ===== CONTROLES DERECHA ===== */}
            <div className="flex items-center gap-2">
              {/* BOTÓN CAMBIO DE TEMA */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="h-9 w-9 hover:bg-muted/50 transition-all duration-300"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>

              {/* MENÚ MÓVIL */}
              <div className="md:hidden">
                <Sheet open={open} onOpenChange={setOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 hover:bg-muted/50"
                    >
                      {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="w-[280px] sm:w-[320px] bg-background/98 backdrop-blur-lg border-l border-border"
                  >
                    <div className="mt-8 flex flex-col gap-1 px-2">
                      {navigation.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => {
                            setOpen(false);
                            setTimeout(() => scrollToSection(item.href), 150);
                          }}
                          className="text-foreground text-lg font-medium text-left w-full py-4 px-4 rounded-lg hover:bg-muted/50 transition-all duration-200 active:bg-muted/70"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
