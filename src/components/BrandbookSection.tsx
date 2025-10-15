// 📁 Crea este archivo en: src/components/BrandbookSection.tsx

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  FileText,
  ExternalLink,
  X,
  Download,
  Palette,
  Type,
  Image as ImageIcon,
} from "lucide-react";

export const BrandbookSection = () => {
  const [showBrandbook, setShowBrandbook] = useState(false);

  // ============================================
  // 📥 URLs DE DESCARGA Y VISUALIZACIÓN
  // ============================================
  // 
  // Para visualizar el PDF en el modal:
  const BRANDBOOK_URL = "https://drive.google.com/file/d/1lJHn6eOPoqeWaTW738RPqjPwyMWHpI3l/preview";
  
  // Carpeta de Google Drive con recursos:
  const DRIVE_FOLDER = "https://drive.google.com/drive/folders/1Pp8xyOQhL64n1YowUsRmCi-wYg7TnYG5";
  
  // 🔽 LINK DE DESCARGA DIRECTA DEL PDF:
  // Puedes descargar el brandbook directamente desde:
  const BRANDBOOK_DOWNLOAD = "https://drive.google.com/uc?export=download&id=1lJHn6eOPoqeWaTW738RPqjPwyMWHpI3l";
  // 
  // ⚠️ IMPORTANTE: Para que funcione la descarga directa:
  // 1. El archivo debe estar en "Compartir con cualquier persona que tenga el enlace"
  // 2. Usa el formato: https://drive.google.com/uc?export=download&id=TU_ID_DE_ARCHIVO
  // 3. Reemplaza TU_ID_DE_ARCHIVO con el ID que está después de /d/ en la URL del PDF
  // 
  // ============================================
  
  // Función para descargar el PDF directamente (abre en nueva pestaña)
  const handleDownload = () => {
    // Abre el link de descarga en una nueva pestaña
    window.open(BRANDBOOK_DOWNLOAD, '_blank');
  };

  return (
    <>
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-purple-50/30 to-blue-50/30 dark:from-gray-950 dark:via-purple-950/20 dark:to-blue-950/20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-full border border-purple-200 dark:border-purple-700 mb-6">
              <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">
                Manual de Identidad Visual
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4">
              Brandbook <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Tecsup 2023</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explora los lineamientos de diseño, paleta de colores oficial y recursos visuales de nuestra marca
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-purple-100 dark:border-purple-900 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">43</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Páginas</div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-blue-100 dark:border-blue-900 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">8</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Colores</div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-cyan-100 dark:border-cyan-900 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Type className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">N27</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Tipografía</div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-emerald-100 dark:border-emerald-900 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <ImageIcon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">3D</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Versiones</div>
            </div>
          </div>

          {/* Content Cards */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {/* Card 1: Contenido */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                📚 Contenido del Manual
              </h3>
              <ul className="space-y-3">
                {[
                  { icon: "01", text: "Propósito de marca y territorio de comunicación" },
                  { icon: "02", text: "Construcción y versiones del logotipo" },
                  { icon: "03", text: "Paleta de colores y tipografía oficial" },
                  { icon: "04", text: "Sistema gráfico y ejemplos de aplicación" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                      {item.icon}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300 pt-1">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: Principios */}
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 sm:p-8 shadow-xl text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                ✨ Principios de Diseño
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-1">DISTINTIVA</h4>
                  <p className="text-white/90 text-sm">
                    Percepción única e inconfundible para Tecsup
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-1">MEMORABLE</h4>
                  <p className="text-white/90 text-sm">
                    Simplicidad y atractivo visual impactante
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-1">FUNCIONAL</h4>
                  <p className="text-white/90 text-sm">
                    Apropiada para entornos digitales y físicos
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => setShowBrandbook(true)}
              className="w-full sm:w-auto text-base sm:text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <FileText className="w-5 h-5 mr-2" />
              Ver Brandbook Completo
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto text-base sm:text-lg px-8 py-6 border-2 border-purple-300 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 hover:scale-105"
            >
              <a href={DRIVE_FOLDER} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                Ver Recursos en Drive
              </a>
            </Button>

            <Button
              onClick={handleDownload}
              variant="outline"
              className="w-full sm:w-auto text-base sm:text-lg px-8 py-6 border-2 border-blue-300 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Descargar PDF
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Para consultas sobre lineamientos de marca, contacta a{" "}
              <a 
                href="mailto:tiene@sentido.com.pe" 
                className="text-purple-600 dark:text-purple-400 hover:underline font-semibold"
              >
                tiene@sentido.com.pe
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Modal del PDF */}
      {showBrandbook && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-in fade-in duration-300">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-7xl h-[95vh] relative overflow-hidden animate-in zoom-in duration-300">
            {/* Header del Modal */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 p-4 flex justify-between items-center z-10 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-white text-lg sm:text-xl font-bold">
                    Brandbook Tecsup 2023
                  </h2>
                  <p className="text-white/80 text-xs sm:text-sm">
                    Manual de Identidad Visual
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowBrandbook(false)}
                className="p-2 sm:p-3 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-300 hover:rotate-90 hover:scale-110"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="w-full h-full pt-20">
              <iframe
                src={BRANDBOOK_URL}
                title="Brandbook Tecsup 2023"
                className="w-full h-full border-0"
                allow="autoplay"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// ========================================
// 📝 INSTRUCCIONES DE USO:
// ========================================
// 
// 1. Crea el archivo: src/components/BrandbookSection.tsx
// 2. Copia todo este código
// 3. Ve a src/App.tsx
// 4. Agrega el import:
//    import { BrandbookSection } from './components/BrandbookSection'
// 5. Agrégalo donde quieras en el orden:
//    <HeroSection />
//    <InfoSection />
//    <BrandbookSection />  ← NUEVO
//    <PrizesSection />
//    <Footer />
// 
// ========================================