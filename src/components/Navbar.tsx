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
  const [activeSection, setActiveSection] = useState("hero");

  // 🔍 estados del buscador
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [pageContent, setPageContent] = useState<SearchResult[]>([]);

  // ===== EFECTOS =====
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Detectar sección activa
      const sections = navigation.map(item => item.href);
      let current = "hero";
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = window.innerWidth < 768 ? 100 : 120;
          if (rect.top <= offset && rect.bottom >= offset) {
            current = sectionId;
          }
        }
      }
      setActiveSection(current);
    };
    
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
    // Esperar a que el DOM se cargue completamente
    const timer = setTimeout(indexPageContent, 2000);
    return () => clearTimeout(timer);
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

  // Función mejorada para navegación a secciones con reintentos
  const scrollToSection = (id: string) => {
    console.log(`🔘 Intentando navegar a: ${id}`);
    
    const findAndScroll = (attempt = 1, maxAttempts = 5) => {
      // Buscar el elemento con múltiples selectores
      let element = document.getElementById(id);
      
      if (!element) {
        element = document.querySelector(`[id="${id}"]`) as HTMLElement;
      }
      if (!element) {
        element = document.querySelector(`section[data-section="${id}"]`) as HTMLElement;
      }
      if (!element) {
        element = document.querySelector(`.section-${id}`) as HTMLElement;
      }
      
      if (element) {
        console.log(`✅ Elemento encontrado en intento ${attempt}:`, id, element);
        
        // Offset ajustado según el tamaño de pantalla
        const navOffset = window.innerWidth < 768 ? 80 : 100;
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        const targetPosition = elementTop - navOffset;
        
        console.log(`📍 Scrolling a posición: ${targetPosition}`);
        
        window.scrollTo({ 
          top: Math.max(0, targetPosition), 
          behavior: "smooth" 
        });
        
        // Actualizar sección activa
        setActiveSection(id);
        return;
      }
      
      // Si no encontró el elemento y aún hay intentos
      if (attempt < maxAttempts) {
        console.log(`⏳ Elemento "${id}" no encontrado, reintentando en ${attempt * 100}ms...`);
        setTimeout(() => findAndScroll(attempt + 1, maxAttempts), attempt * 100);
        return;
      }
      
      // Si agotó todos los intentos
      console.error(`❌ Elemento "${id}" no encontrado después de ${maxAttempts} intentos`);
      console.log(`📋 Elementos con ID disponibles:`, 
        Array.from(document.querySelectorAll('[id]')).map(el => el.id).filter(Boolean)
      );
      
      // Fallback para "hero" - ir al inicio
      if (id === "hero") {
        console.log("🏠 Navegando al inicio como fallback");
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("hero");
      }
    };
    
    findAndScroll();
  };

  // Cerrar búsqueda cuando se hace click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const searchContainer = document.querySelector('.search-container');
      if (searchContainer && !searchContainer.contains(event.target as Node)) {
        setShowSearch(false);
      }
    };

    if (showSearch) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showSearch]);

  // LOGO
  const LogoComponent = () => (
    <button
      onClick={() => scrollToSection("hero")}
      aria-label="Ir al inicio"
      className="flex items-center cursor-pointer shrink-0 group hover:scale-105 transition-transform duration-200"
    >
      <img
        src={tecsupLogoLight}
        alt="Logo claro"
        className="h-12 sm:h-14 md:h-16 w-auto object-contain dark:hidden"
      />
      <img
        src={tecsupLogoDark}
        alt="Logo oscuro"
        className="h-12 sm:h-14 md:h-16 w-auto object-contain hidden dark:block"
      />
    </button>
  );

  // ===== RENDER =====
  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-md border-border/50"
            : "bg-background/80 backdrop-blur-sm border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18">
            {/* LOGO */}
            <LogoComponent />

            {/* NAV DESKTOP */}
            <div className="hidden lg:flex items-center space-x-6">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    console.log(`🔘 Botón clickeado: ${item.name} -> ${item.href}`);
                    scrollToSection(item.href);
                  }}
                  className={`text-lg font-medium transition-all duration-200 hover:scale-105 relative ${
                    activeSection === item.href
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-200 hover:text-blue-500"
                  }`}
                >
                  {item.name}
                  {activeSection === item.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                  )}
                </button>
              ))}
            </div>

            {/* CONTROLES DERECHA */}
            <div className="flex items-center gap-2 relative text-gray-800 dark:text-gray-200">
              {/* 🔍 BOTÓN BUSCADOR */}
              <div className="relative search-container">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowSearch((prev) => !prev)}
                  className="h-10 w-10 hover:bg-muted/50 text-gray-800 dark:text-gray-200 hover:scale-110 transition-transform"
                  aria-label="Abrir búsqueda"
                >
                  <Search className="h-5 w-5" />
                </Button>

                {/* CAJA DE BÚSQUEDA */}
                {showSearch && (
                  <div className="absolute right-0 mt-2 w-80 bg-background/95 backdrop-blur-md border rounded-lg shadow-xl p-3 animate-in slide-in-from-top-2">
                    <Input
                      placeholder="Buscar contenido..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="mb-2 text-base"
                      autoFocus
                    />
                    <div className="max-h-64 overflow-y-auto space-y-1">
                      {searchQuery.length > 1 && searchResults.length === 0 && (
                        <p className="text-sm text-muted-foreground px-2 py-4 text-center">
                          No se encontraron resultados
                        </p>
                      )}
                      {searchQuery.length === 0 && (
                        <p className="text-sm text-muted-foreground px-2 py-4 text-center">
                          Escribe para buscar contenido
                        </p>
                      )}
                      {searchResults.map((result, i) => (
                        <button
                          key={i}
                          onClick={() => goToSearchResult(result)}
                          className="block text-sm text-left w-full px-3 py-2 rounded-md hover:bg-muted/70 text-gray-800 dark:text-gray-200 transition-colors"
                        >
                          <span className="font-medium text-blue-600 dark:text-blue-400">
                            {result.sectionTitle}
                          </span>
                          <div className="truncate text-xs opacity-70 mt-1">
                            {result.text}
                          </div>
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
                className="h-10 w-10 hover:bg-muted/50 text-gray-800 dark:text-gray-200 hover:scale-110 transition-transform"
                aria-label={isDarkMode ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>

              {/* 📱 MENÚ MÓVIL */}
              <div className="lg:hidden">
                <Sheet open={open} onOpenChange={setOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 text-gray-800 dark:text-gray-200"
                      aria-label="Abrir menú"
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
                            console.log(`📱 Menú móvil: ${item.name} -> ${item.href}`);
                            setOpen(false);
                            setTimeout(() => scrollToSection(item.href), 150);
                          }}
                          className={`py-3 px-4 text-left text-lg hover:bg-muted/50 rounded transition-colors ${
                            activeSection === item.href
                              ? "bg-muted text-blue-600 dark:text-blue-400 font-medium"
                              : "text-gray-800 dark:text-gray-200"
                          }`}
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