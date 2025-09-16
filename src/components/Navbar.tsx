"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

// Logos
import tecsupLogoLight from "@/assets/modonoche.png";
import tecsupLogoDark from "@/assets/segundologo.png";

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

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 🔍 estados del buscador
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
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
            content.push({ element, text, sectionTitle, score: 0 });
          }
        });
      });
      setPageContent(content);
    };
    setTimeout(indexPageContent, 1000);
  }, []);

  // ===== FUNCIONES =====
  const calculateScore = (text: string, query: string): number => {
    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase();
    let score = 0;
    if (lowerText.includes(lowerQuery)) score += 100;
    if (lowerText.startsWith(lowerQuery)) score += 50;
    return score;
  };

  const performSearch = (query: string) => {
    if (!query.trim() || query.length < 2) {
      setSearchResults([]);
      return;
    }
    const results = pageContent
      .map((item) => ({ ...item, score: calculateScore(item.text, query) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);
    setSearchResults(results);
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchQuery.length >= 2) performSearch(searchQuery);
    }, 300);
    return () => clearTimeout(debounceTimer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, pageContent]);

  const toggleTheme = () => {
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
    setSearchQuery("");
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navOffset = window.innerWidth < 768 ? 60 : 72;
    const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // LOGO
  const LogoComponent = () => (
    <button
      onClick={() => scrollToSection("hero")}
      aria-label="Ir al inicio"
      className="flex items-center cursor-pointer shrink-0 group"
    >
      <img
        src={tecsupLogoLight}
        alt="Logo claro"
        className="h-10 sm:h-12 md:h-14 w-auto object-contain dark:hidden"
      />
      <img
        src={tecsupLogoDark}
        alt="Logo oscuro"
        className="h-10 sm:h-12 md:h-14 w-auto object-contain hidden dark:block"
      />
    </button>
  );

  // ===== RENDER =====
  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-md"
            : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* LOGO */}
            <LogoComponent />

            {/* NAV DESKTOP */}
            <div className="hidden lg:flex items-center space-x-5">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium hover:text-blue-500 transition-colors text-gray-800 dark:text-gray-200"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* CONTROLES DERECHA */}
            <div className="flex items-center gap-2 relative text-gray-800 dark:text-gray-200">
              {/* 🔍 BOTÓN BUSCADOR */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowSearch((prev) => !prev)}
                  className="h-9 w-9 hover:bg-muted/50 text-gray-800 dark:text-gray-200"
                >
                  <Search className="h-5 w-5" />
                </Button>

                {/* CAJA DE BÚSQUEDA */}
                {showSearch && (
                  <div className="absolute right-0 mt-2 w-64 bg-background border rounded-lg shadow-lg p-3">
                    <Input
                      placeholder="Buscar..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="mb-2"
                    />
                    <div className="max-h-56 overflow-y-auto space-y-1">
                      {searchResults.length === 0 && searchQuery.length > 1 && (
                        <p className="text-xs text-gray-500 px-2">Sin resultados</p>
                      )}
                      {searchResults.map((result, i) => (
                        <button
                          key={i}
                          onClick={() => goToSearchResult(result)}
                          className="block text-sm text-left w-full px-2 py-1 rounded hover:bg-muted/50 text-gray-800 dark:text-gray-200"
                        >
                          <span className="font-medium">{result.sectionTitle}</span>
                          <div className="truncate text-xs opacity-70">{result.text}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 🌞/🌙 TOGGLE TEMA */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="h-9 w-9 hover:bg-muted/50 text-gray-800 dark:text-gray-200"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>

              {/* 📱 MENÚ MÓVIL */}
              <div className="md:hidden">
                <Sheet open={open} onOpenChange={setOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 text-gray-800 dark:text-gray-200"
                    >
                      {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-72">
                    <div className="mt-8 flex flex-col gap-2">
                      {navigation.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => {
                            setOpen(false);
                            setTimeout(() => scrollToSection(item.href), 150);
                          }}
                          className="py-3 px-4 text-left text-lg hover:bg-muted/50 rounded text-gray-800 dark:text-gray-200"
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