"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Gift, Sparkles } from "lucide-react";

const prizes = [
  {
    id: 1,
    position: "1er Lugar",
    amount: "S/ 20,000",
    icon: Trophy,
    color: "from-yellow-400 via-yellow-500 to-yellow-600 dark:from-yellow-300 dark:via-yellow-400 dark:to-yellow-500",
    glow: "shadow-[0_0_35px_rgba(250,204,21,0.6)] dark:shadow-[0_0_35px_rgba(253,224,71,0.8)]",
    benefits: [
      "Premio en efectivo",
      "Mentorías personalizadas",
      "Acceso a incubadora TECSUP",
      "Certificación especial",
    ],
  },
  {
    id: 2,
    position: "2do Lugar",
    amount: "S/ 15,000",
    icon: Medal,
    color: "from-gray-300 via-gray-400 to-gray-500 dark:from-gray-200 dark:via-gray-300 dark:to-gray-400",
    glow: "shadow-[0_0_25px_rgba(156,163,175,0.4)] dark:shadow-[0_0_25px_rgba(229,231,235,0.6)]",
    benefits: [
      "Premio en efectivo",
      "Sesiones de networking",
      "Cursos especializados",
      "Certificación de honor",
    ],
  },
  {
    id: 3,
    position: "3er Lugar",
    amount: "S/ 10,000",
    icon: Award,
    color: "from-amber-600 via-amber-700 to-amber-800 dark:from-amber-500 dark:via-amber-600 dark:to-amber-700",
    glow: "shadow-[0_0_25px_rgba(217,119,6,0.4)] dark:shadow-[0_0_25px_rgba(245,158,11,0.6)]",
    benefits: [
      "Premio en efectivo",
      "Workshops exclusivos",
      "Material de estudio",
      "Certificación de mérito",
    ],
  },
];

const specialPrizes = [
  {
    title: "Mejor Innovación Tecnológica",
    amount: "S/ 3,000",
    description: "Para el proyecto más innovador en tecnología",
  },
  {
    title: "Mejor Impacto Social",
    amount: "S/ 2,000",
    description: "Solución con mayor impacto social positivo",
  },
];

export const PrizesSection = () => {
  const [selectedPrize, setSelectedPrize] = useState<number | null>(null);

  return (
    <section
      id="premios"
      className="relative py-24 overflow-hidden bg-background"
    >
      {/* Fondo con luces */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-500/5 dark:bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tech-primary/5 dark:bg-tech-primary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-tech-primary to-tech-accent bg-clip-text text-transparent tracking-tight">
            Premios y Reconocimientos
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Más de{" "}
            <span className="text-tech-primary font-bold">S/ 50,000</span> en
            premios para destacar la excelencia y la innovación.
          </p>
        </div>

        {/* Cuadro principal */}
        <div className="bg-card/50 dark:bg-card/40 backdrop-blur-lg border border-border/50 rounded-3xl p-10 shadow-2xl mb-20">
          <div className="grid lg:grid-cols-3 gap-10">
            {prizes.map((prize) => {
              const isSelected = selectedPrize === prize.id;
              return (
                <Card
                  key={prize.id}
                  onClick={() =>
                    setSelectedPrize(isSelected ? null : prize.id)
                  }
                  className={`relative cursor-pointer rounded-3xl overflow-hidden border transition-all duration-500
                    bg-gradient-to-br ${prize.color}
                    ${isSelected ? `scale-105 ${prize.glow} z-10` : "hover:brightness-110 hover:scale-105"}
                  `}
                >
                  {/* Overlay oscuro para contraste */}
                  <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>

                  {/* Glow extra si está seleccionado */}
                  {isSelected && (
                    <div className="absolute inset-0 bg-gradient-to-br from-tech-primary/20 to-tech-accent/20 animate-pulse"></div>
                  )}

                  <CardHeader className="relative z-10 text-center pb-6">
                    <div className="inline-flex items-center justify-center w-28 h-28 bg-background/90 dark:bg-background/80 rounded-full mb-5 shadow-inner transition-all duration-500">
                      <prize.icon className="w-14 h-14 text-foreground" />
                    </div>
                    <CardTitle className="text-2xl font-extrabold text-white drop-shadow-lg">
                      {prize.position}
                    </CardTitle>
                    <div className="text-4xl font-extrabold text-white drop-shadow-lg">
                      {prize.amount}
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10 text-center space-y-4">
                    <div className="grid gap-2">
                      {prize.benefits.map((benefit, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="px-4 py-1.5 text-sm rounded-full bg-white/30 dark:bg-white/20 text-white border-white/40 dark:border-white/30 backdrop-blur-sm"
                        >
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Premios especiales */}
        <div className="bg-card/60 dark:bg-card/40 backdrop-blur-lg border border-border/50 rounded-3xl p-10 shadow-xl">
          <h3 className="text-3xl md:text-4xl font-extrabold text-center text-foreground mb-12 flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6 text-tech-accent" />
            Premios Especiales
            <Sparkles className="w-6 h-6 text-tech-accent" />
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {specialPrizes.map((prize, index) => (
              <Card
                key={index}
                className="border border-border/40 bg-background/80 dark:bg-background/60 backdrop-blur-md hover:shadow-xl hover:scale-105 transition-all duration-500 rounded-2xl hover:border-tech-accent/50"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-tech-accent/10 dark:bg-tech-accent/20 text-tech-accent rounded-full mb-5 border border-tech-accent/20">
                    <Gift className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    {prize.title}
                  </h4>
                  <div className="text-2xl font-extrabold text-tech-accent mb-3">
                    {prize.amount}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {prize.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};