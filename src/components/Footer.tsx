import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
<<<<<<< HEAD
=======
import tecsuplogo from "../assets/segundologo.png"; // 👈 Logo para modo oscuro
import tecsuplogoLight from "../assets/modonoche.png"; // 👈 Logo para modo claro
>>>>>>> 90f2637d57a226743dc118e3a383c9e93a1dce61
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
<<<<<<< HEAD
  BookOpen,
  Download,
  FileText,
  X,
=======
>>>>>>> 90f2637d57a226743dc118e3a383c9e93a1dce61
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
<<<<<<< HEAD
  const [showBrandbook, setShowBrandbook] = useState(false);

  // URL del Brandbook en Google Drive (reemplaza con el ID correcto)
  const BRANDBOOK_URL = "https://drive.google.com/file/d/TU_ID_DEL_PDF_AQUI/preview";
  const DRIVE_FOLDER = "https://drive.google.com/drive/folders/1Pp8xyOQhL64n1YowUsRmCi-wYg7TnYG5";
=======
>>>>>>> 90f2637d57a226743dc118e3a383c9e93a1dce61

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
<<<<<<< HEAD
    <>
      <footer className="relative bg-gradient-to-b from-gray-100 dark:from-gray-900 to-white dark:to-gray-950 border-t border-gray-200 dark:border-gray-800 overflow-hidden">
        {/* Glow background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-500/20 dark:bg-emerald-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* TECSUP Info */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            {/* Logo Placeholder */}
            <div className="relative inline-block mb-3 sm:mb-4">
              <div className="h-16 sm:h-20 lg:h-24 w-48 sm:w-56 lg:w-64 mx-auto bg-gradient-to-r from-purple-500/20 to-blue-500/20 dark:from-purple-600/30 dark:to-blue-600/30 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                  TECSUP
                </span>
              </div>
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
                className="w-full"
              />
              <Button type="submit" variant="default" className="flex gap-1">
                <Search className="h-4 w-4" /> Buscar
              </Button>
            </form>

            {/* Resultados */}
            {showResults && searchResults.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 max-w-md mx-auto mb-6 text-left">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                  Resultados:
                </h4>
                <ul className="space-y-2">
                  {searchResults.map((result, i) => (
                    <li key={i}>
                      <button
                        onClick={() => goToSearchResult(result)}
                        className="text-sm text-blue-600 dark:text-blue-400 hover:underline text-left"
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
              EduHack 2025
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto mb-4 sm:mb-6 lg:mb-8 text-base sm:text-lg px-2">
              "Educación Superior sin deserción estudiantil: El poder de los agentes de IA"
            </p>

            {/* 📘 Sección Brandbook */}
            <div className="mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-full border border-purple-200 dark:border-purple-700 mb-4">
                <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">
                  Recursos de Marca
                </span>
              </div>
              
              <div className="flex flex-wrap gap-3 justify-center">
                {/* Botón Ver Brandbook */}
                <Button
                  onClick={() => setShowBrandbook(true)}
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <FileText className="w-4 h-4" />
                  Ver Brandbook
                </Button>

                {/* Botón Carpeta Drive */}
                <Button
                  asChild
                  variant="outline"
                  className="flex items-center gap-2 border-purple-300 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 hover:scale-105"
                >
                  <a
                    href={DRIVE_FOLDER}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Recursos en Drive
                  </a>
                </Button>
              </div>

              {/* Info adicional */}
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 max-w-md mx-auto">
                Manual de identidad visual con lineamientos de diseño, paleta de colores y tipografía oficial
              </p>
            </div>

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
                             hover:shadow-lg text-gray-700 dark:text-gray-300 ${social.color}
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

          {/* Grid de Enlaces */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 lg:mb-12">
            {/* Contacto */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Contacto
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <a
                  href="mailto:info@tecsup.edu.pe"
                  className="flex items-center gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  info@tecsup.edu.pe
                </a>
                <a
                  href="tel:+51123456789"
                  className="flex items-center gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +51 1 234 5678
                </a>
                <div className="flex items-start gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                  <span>Lima, Arequipa, Trujillo</span>
                </div>
              </div>
            </div>

            {/* Enlaces Rápidos */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Enlaces Rápidos
              </h3>
              <ul className="space-y-2">
                {["Carreras", "Admisión", "Campus Virtual", "Empleabilidad"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recursos */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Recursos
              </h3>
              <ul className="space-y-2">
                {["Blog", "Noticias", "Eventos", "Biblioteca"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legal */}
          <div className="pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
              © 2025 TECSUP - Todos los derechos reservados
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Política de Privacidad
              </a>
              <span className="text-gray-400 dark:text-gray-600">•</span>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Términos de Uso
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* 📘 Modal Brandbook */}
      {showBrandbook && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] relative overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 p-4 flex justify-between items-center z-10 shadow-lg">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-white" />
                <h2 className="text-white text-lg sm:text-xl font-bold">
                  📘 Brandbook Tecsup 2023
                </h2>
              </div>
              <button
                onClick={() => setShowBrandbook(false)}
                className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-300 hover:rotate-90"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="w-full h-full pt-16">
              <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-800">
                {/* Información del Brandbook */}
                <div className="text-center max-w-2xl">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <FileText className="w-12 h-12 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    Manual de Identidad Visual
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Para visualizar el Brandbook completo, necesitas configurar el ID del archivo PDF en Google Drive.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-lg">
                      <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">4</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Secciones</div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-lg">
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">43</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Páginas</div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-lg">
                      <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">8</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Colores</div>
                    </div>
                  </div>

                  {/* Botones */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg"
                    >
                      <a href={DRIVE_FOLDER} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Abrir en Google Drive
                      </a>
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={() => setShowBrandbook(false)}
                    >
                      Cerrar
                    </Button>
                  </div>

                  {/* Nota */}
                  <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      💡 <strong>Nota:</strong> Reemplaza <code className="bg-yellow-100 dark:bg-yellow-900/40 px-2 py-1 rounded">TU_ID_DEL_PDF_AQUI</code> con el ID real del archivo PDF desde Google Drive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
=======
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
            EduHack 2025
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto mb-4 sm:mb-6 lg:mb-8 text-lg sm:text-xl px-2">
            “Educación Superior sin deserción estudiantil: El poder de los agentes de IA”
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
>>>>>>> 90f2637d57a226743dc118e3a383c9e93a1dce61
  );
};