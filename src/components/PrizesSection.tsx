"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Sparkles, Target, Lightbulb, TrendingUp, Users, Zap } from "lucide-react";

const prizes = [
  {
    id: 1,
    position: "1er Lugar",
    amount: "S/ 2,500",
    icon: Trophy,
    benefits: [
      "Premio en efectivo por equipo",  
      "Reconocimiento oficial"
    ],
  },
];

const evaluationCriteria = [
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Grado de originalidad y creatividad en la solución propuesta",
    color: "text-yellow-600 dark:text-yellow-400"
  },
  {
    icon: Target,
    title: "Impacto",
    description: "Potencial de la solución para mitigar la deserción estudiantil",
    color: "text-blue-600 dark:text-blue-400"
  },
  {
    icon: Zap,
    title: "Factibilidad",
    description: "Viabilidad técnica y económica de implementar la solución",
    color: "text-emerald-600 dark:text-emerald-400"
  },
  {
    icon: Users,
    title: "Usabilidad",
    description: "Facilidad de uso y accesibilidad para los usuarios finales",
    color: "text-purple-600 dark:text-purple-400"
  },
  {
    icon: TrendingUp,
    title: "Escalabilidad",
    description: "Capacidad para ser ampliada y utilizada en diferentes contextos",
    color: "text-pink-600 dark:text-pink-400"
  },
];

export const PrizesSection = () => {
  return (
    <section
      id="premios"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-background via-blue-500/5 to-purple-500/5"
    >
      {/* Fondo con luces */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-500/5 dark:bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 dark:bg-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-4 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-500/20 text-lg px-4 py-2">
            <Trophy className="w-5 h-5 mr-2 inline" />
            Premios EduHack 2025
          </Badge>
          <h2 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 via-blue-600 to-purple-600 dark:from-yellow-300 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent tracking-tight mb-6">
            Premios y Reconocimientos
          </h2>
          <p className="mt-6 text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Premios en efectivo de hasta{" "}
            <span className="text-blue-600 dark:text-blue-400 font-bold">S/ 4,000</span> para
            los equipos ganadores que desarrollen las mejores soluciones.
          </p>
        </div>

        {/* Cuadro principal de premios */}
        <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-10 shadow-2xl mb-20 text-center">
          <h4 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Premio en efectivo por equipo
          </h4>
          <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            S/ 2,500 para el 1er Lugar
          </div>
        </div>

        {/* Criterios de Evaluación */}
        <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-3xl p-10 shadow-xl">
          <h3 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            Criterios de Evaluación
            <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            El jurado calificador evaluará los prototipos según estos criterios clave
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {evaluationCriteria.map((criteria, index) => {
              const CriteriaIcon = criteria.icon;
              return (
                <Card
                  key={index}
                  className="border border-gray-200/40 dark:border-gray-700/40 bg-white/80 dark:bg-gray-800/60 backdrop-blur-md hover:shadow-xl hover:scale-105 transition-all duration-500 rounded-2xl hover:border-blue-500/50 dark:hover:border-blue-400/50"
                >
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl mb-4 ${criteria.color}`}>
                      <CriteriaIcon className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {criteria.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                      {criteria.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Información adicional */}
          <div className="mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-2xl p-8 border border-blue-500/20 dark:border-blue-400/20">
            <h4 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
              Formato de Presentación
            </h4>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 dark:bg-blue-400/20 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">⏱️</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Duración del Pitch</p>
                  <p className="text-base">5 minutos máximo para presentar</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500/20 dark:bg-purple-400/20 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">💬</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Sesión de Preguntas</p>
                  <p className="text-base">3 minutos para responder al jurado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};