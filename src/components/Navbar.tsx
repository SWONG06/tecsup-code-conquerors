"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [pageContent, setPageContent] = useState<SearchResult[]>([]);

  // Efecto para detectar scroll y cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efecto para cargar la preferencia de tema guardada
  useEffect(() => {
    const savedTheme = localStorage?.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Efecto para indexar el contenido de la página
  useEffect(() => {
    const indexPageContent = () => {
      const content: SearchResult[] = [];
      
      // Selectores para diferentes tipos de contenido
      const selectors = [
        'h1, h2, h3, h4, h5, h6', // Títulos
        'p', // Párrafos
        'li', // Elementos de lista
        '[data-searchable]', // Elementos marcados como buscables
        '.searchable', // Elementos con clase searchable
        'button[aria-label]', // Botones con etiquetas
        'a[title]', // Enlaces con títulos
        '[alt]', // Elementos con texto alternativo
        'blockquote', // Citas
        'figcaption', // Pies de imagen
        'span', // Spans con texto
        'div[role="heading"]', // Divs que actúan como encabezados
      ];

      selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
          const text = element.textContent?.trim();
          if (text && text.length > 2) {
            // Encontrar la sección padre
            const section = element.closest('section') || element.closest('[id]');
            const sectionTitle = section?.id || section?.querySelector('h1, h2, h3')?.textContent || 'Contenido general';
            
            content.push({
              element,
              text,
              sectionTitle,
              score: 0
            });
          }
        });
      });

      setPageContent(content);
    };

    // Indexar contenido después de que la página se cargue
    const timer = setTimeout(indexPageContent, 1000);
    
    // Re-indexar cuando cambie el contenido
    const observer = new MutationObserver(() => {
      clearTimeout(timer);
      setTimeout(indexPageContent, 500);
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // Función para calcular la relevancia de búsqueda
  const calculateScore = (text: string, query: string): number => {
    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase();
    let score = 0;

    // Coincidencia exacta de frase
    if (lowerText.includes(lowerQuery)) {
      score += 100;
      
      // Bonus si aparece al principio
      if (lowerText.startsWith(lowerQuery)) {
        score += 50;
      }
      
      // Bonus por coincidencia completa de palabra
      const words = lowerQuery.split(' ');
      words.forEach(word => {
        const wordRegex = new RegExp(`\\b${word}\\b`, 'gi');
        const matches = lowerText.match(wordRegex);
        if (matches) {
          score += matches.length * 20;
        }
      });
    }

    // Coincidencias de palabras individuales
    const queryWords = lowerQuery.split(' ').filter(word => word.length > 2);
    queryWords.forEach(word => {
      if (lowerText.includes(word)) {
        score += 10;
      }
    });

    return score;
  };

  // Función para realizar la búsqueda
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const performSearch = (query: string) => {
    if (!query.trim() || query.length < 2) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const results = pageContent
      .map(item => ({
        ...item,
        score: calculateScore(item.text, query)
      }))
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10); // Limitar a 10 resultados

    setSearchResults(results);
    setShowResults(true);
  };

  // Efecto para búsqueda en tiempo real
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchQuery.length >= 2) {
        performSearch(searchQuery);
      } else {
        setShowResults(false);
      }
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, pageContent, performSearch]);

  // Función para cambiar el tema
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('theme', 'dark');
      }
    } else {
      document.documentElement.classList.remove('dark');
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('theme', 'light');
      }
    }
  };

  // Función para ir a un resultado de búsqueda
  const goToSearchResult = (result: SearchResult) => {
    const element = result.element;
    
    // Hacer scroll suave al elemento sin resaltar
    element.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center' 
    });
    
    // Cerrar la búsqueda
    setShowSearch(false);
    setShowResults(false);
    setSearchQuery("");
  };

  // Manejar el envío del formulario de búsqueda
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      goToSearchResult(searchResults[0]);
    }
  };

  // Función legacy para navegación por secciones
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    
    const navOffset = window.innerWidth < 768 ? 60 : 72;
    const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      {/* Estilos CSS para el resaltado */}
      <style>{`
        .search-highlight {
          animation: highlight 3s ease-in-out;
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          color: white !important;
          padding: 2px 4px;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        
        @keyframes highlight {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .search-results {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(var(--background), 0.98);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(var(--border), 0.5);
          border-radius: 8px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          max-height: 400px;
          overflow-y: auto;
          z-index: 1000;
          margin-top: 4px;
        }
        
        .search-result-item {
          padding: 12px 16px;
          border-bottom: 1px solid rgba(var(--border), 0.3);
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        
        .search-result-item:hover {
          background: rgba(var(--muted), 0.5);
        }
        
        .search-result-item:last-child {
          border-bottom: none;
        }
        
        .search-result-text {
          font-size: 14px;
          color: var(--foreground);
          margin-bottom: 4px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .search-result-section {
          font-size: 12px;
          color: var(--muted-foreground);
          font-weight: 500;
        }
      `}</style>

      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-border ${
          scrolled 
            ? 'bg-navbar/98 backdrop-blur-lg shadow-lg' 
            : 'bg-navbar/95 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              aria-label="Ir al inicio"
              className="flex items-center cursor-pointer shrink-0"
            >
              <img
                className="h-10 sm:h-12 md:h-14 w-auto hover:scale-105 transition-transform duration-300"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVlrhrTzJFhJpHJkZgssGmBXX744DahKGwAA&sv=1"
                alt="TECSUP"
              />
            </button>

            {/* Desktop nav - Oculto en tablet pequeño y móvil */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-foreground text-sm xl:text-base font-medium cursor-pointer px-2 xl:px-3 py-1 rounded-md transition-all duration-300 hover:text-tech-primary hover:bg-white/5"
                  aria-label={`Ir a ${item.name}`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex items-center relative">
              {showSearch ? (
                <form onSubmit={handleSearchSubmit} className="flex items-center animate-fade-in relative">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Buscar en la página..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-64 h-9 bg-background/60 backdrop-blur-md border-border/50 focus:border-tech-primary/50 rounded-lg pr-10 text-sm"
                      autoFocus
                    />
                    <Button
                      type="submit"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-9 w-9 hover:bg-transparent"
                    >
                      <Search className="h-4 w-4 text-muted-foreground" />
                    </Button>
                    
                    {/* Resultados de búsqueda */}
                    {showResults && searchResults.length > 0 && (
                      <div className="search-results">
                        {searchResults.map((result, index) => (
                          <div
                            key={index}
                            className="search-result-item"
                            onClick={() => goToSearchResult(result)}
                          >
                            <div className="search-result-text">{result.text}</div>
                            <div className="search-result-section">En: {result.sectionTitle}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {showResults && searchResults.length === 0 && searchQuery.length >= 2 && (
                      <div className="search-results">
                        <div className="search-result-item">
                          <div className="search-result-text">No se encontraron resultados</div>
                          <div className="search-result-section">Intenta con otros términos</div>
                        </div>
                      </div>
                    )}
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setShowSearch(false);
                      setSearchQuery("");
                      setShowResults(false);
                    }}
                    className="ml-2 h-9 w-9 hover:bg-white/10"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </form>
              ) : null}
            </div>

            {/* Controles de la derecha */}
            <div className="flex items-center gap-2">
              {/* Search Button - Desktop */}
              {!showSearch && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowSearch(true)}
                  className="hidden lg:flex h-9 w-9 hover:bg-white/10 transition-all duration-300"
                  aria-label="Buscar"
                >
                  <Search className="h-5 w-5 text-foreground transition-transform duration-300 hover:scale-110" />
                </Button>
              )}

              {/* Theme Toggle Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="h-9 w-9 hover:bg-white/10 transition-all duration-300"
                aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-foreground transition-transform duration-300 hover:scale-110" />
                ) : (
                  <Moon className="h-5 w-5 text-foreground transition-transform duration-300 hover:scale-110" />
                )}
              </Button>

              {/* Tablet nav - Visible solo en tablet */}
              <div className="hidden md:flex lg:hidden items-center space-x-2">
                {navigation.slice(0, 4).map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-foreground text-xs font-medium cursor-pointer px-2 py-1 rounded-md transition-all duration-300 hover:text-tech-primary hover:bg-white/5"
                    aria-label={`Ir a ${item.name}`}
                  >
                    {item.name}
                  </button>
                ))}
                {/* Menú para elementos restantes en tablet */}
                <Sheet open={open} onOpenChange={setOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs"
                      aria-label="Más opciones"
                    >
                      Más
                    </Button>
                  </SheetTrigger>
                  <SheetContent 
                    side="right" 
                    className="w-[280px] bg-navbar/98 backdrop-blur-lg border-l border-border"
                  >
                    <div className="mt-6 flex flex-col gap-4 px-2">
                      {/* Search in Tablet Sheet */}
                      <div className="mb-4">
                        <form onSubmit={handleSearchSubmit} className="flex gap-2">
                          <Input
                            type="text"
                            placeholder="Buscar en la página..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="flex-1 h-9 bg-background/60 backdrop-blur-md border-border/50 focus:border-tech-primary/50 rounded-lg text-sm"
                          />
                          <Button
                            type="submit"
                            variant="ghost"
                            size="icon"
                            className="h-9 w-9 hover:bg-white/10"
                          >
                            <Search className="h-4 w-4" />
                          </Button>
                        </form>
                        
                        {/* Resultados en tablet */}
                        {showResults && searchResults.length > 0 && (
                          <div className="mt-2 max-h-40 overflow-y-auto">
                            {searchResults.slice(0, 5).map((result, index) => (
                              <div
                                key={index}
                                className="p-2 hover:bg-white/10 rounded cursor-pointer text-sm"
                                onClick={() => goToSearchResult(result)}
                              >
                                <div className="truncate">{result.text}</div>
                                <div className="text-xs text-muted-foreground">{result.sectionTitle}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {navigation.slice(4).map((item) => (
                        <button
                          key={item.name}
                          onClick={() => {
                            setOpen(false);
                            setTimeout(() => scrollToSection(item.href), 100);
                          }}
                          className="text-foreground text-base font-medium text-left w-full py-3 px-3 rounded-md hover:bg-white/10 transition-all duration-200"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              {/* Mobile menu - Solo en móvil */}
              <div className="md:hidden">
                <Sheet open={open} onOpenChange={setOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9"
                      aria-label="Abrir menú"
                    >
                      {open ? (
                        <X className="h-5 w-5" />
                      ) : (
                        <Menu className="h-5 w-5" />
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent 
                    side="right" 
                    className="w-[280px] sm:w-[320px] bg-navbar/98 backdrop-blur-lg border-l border-border"
                  >
                    <div className="mt-8 flex flex-col gap-1 px-2">
                      {/* Search in Mobile Menu */}
                      <div className="mb-6">
                        <form onSubmit={handleSearchSubmit} className="flex gap-2">
                          <Input
                            type="text"
                            placeholder="Buscar en la página..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="flex-1 h-10 bg-background/60 backdrop-blur-md border-border/50 focus:border-tech-primary/50 rounded-lg text-sm"
                          />
                          <Button
                            type="submit"
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 hover:bg-white/10"
                          >
                            <Search className="h-4 w-4" />
                          </Button>
                        </form>
                        
                        {/* Resultados en móvil */}
                        {showResults && searchResults.length > 0 && (
                          <div className="mt-3 max-h-48 overflow-y-auto">
                            {searchResults.slice(0, 5).map((result, index) => (
                              <div
                                key={index}
                                className="p-3 hover:bg-white/10 rounded-lg cursor-pointer"
                                onClick={() => goToSearchResult(result)}
                              >
                                <div className="text-sm line-clamp-2">{result.text}</div>
                                <div className="text-xs text-muted-foreground mt-1">{result.sectionTitle}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {navigation.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => {
                            setOpen(false);
                            setTimeout(() => scrollToSection(item.href), 150);
                          }}
                          className="text-foreground text-lg font-medium text-left w-full py-4 px-4 rounded-lg hover:bg-white/10 transition-all duration-200 active:bg-white/20"
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