import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./CountdownTimer";
import { MapPin, Trophy, Calendar, Sparkles, Users, Code } from "lucide-react";
import hackathonLogo from "@/assets/hackathon-logo.jpg";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      {/* Fondos */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-tech-primary/10 via-background to-tech-secondary/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-tech-accent/5 via-transparent to-tech-primary/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-tech-primary/5 via-transparent to-transparent"></div>
      </div>

      {/* Elementos animados */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-tech-primary/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-tech-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-tech-secondary/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 pt-12 sm:pt-20 pb-8 sm:pb-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 lg:gap-16 items-center min-h-[75vh] sm:min-h-[85vh]">
            
            {/* Lado Izquierdo */}
            <div className="text-center lg:text-left space-y-6 sm:space-y-8 lg:space-y-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tech-primary/10 border border-tech-primary/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-tech-primary" />
                <span className="text-sm font-medium text-tech-primary">Evento Oficial TECSUP</span>
              </div>

              {/* Título */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-tech-primary via-tech-secondary to-tech-accent bg-clip-text text-transparent leading-tight tracking-tight">
                  HACKATHON
                  <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light bg-gradient-to-r from-tech-accent via-tech-primary to-tech-secondary bg-clip-text text-transparent">
                    2025
                  </span>
                </h1>
                <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-tech-primary to-tech-secondary rounded-full mx-auto lg:mx-0"></div>
              </div>

              {/* Descripción */}
              <div className="space-y-4">
                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                  El desafío tecnológico más <span className="text-tech-primary font-semibold">épico</span> del año está aquí.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground/90 leading-relaxed">
                  <span className="inline-flex items-center gap-2 font-bold text-tech-secondary">
                    <Code className="w-5 h-5" />
                    48 horas intensas
                  </span> de innovación, código y creatividad para construir el futuro digital.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 py-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-br from-tech-primary to-tech-secondary bg-clip-text text-transparent">200+</div>
                  <div className="text-sm text-muted-foreground font-medium">Participantes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-br from-tech-secondary to-tech-accent bg-clip-text text-transparent">48h</div>
                  <div className="text-sm text-muted-foreground font-medium">Desarrollo</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-br from-tech-accent to-tech-primary bg-clip-text text-transparent">50K</div>
                  <div className="text-sm text-muted-foreground font-medium">en Premios</div>
                </div>
              </div>

              {/* Countdown */}
              <div className="py-6 lg:py-8">
                <div className="p-6 rounded-2xl bg-gradient-to-r from-tech-primary/5 to-tech-secondary/5 border border-tech-primary/10 backdrop-blur-sm">
                  <CountdownTimer />
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button size="lg" className="bg-gradient-to-r from-tech-primary via-tech-secondary to-tech-primary text-white font-bold px-8 py-5 rounded-2xl w-full sm:w-auto">
                  <Users className="w-5 h-5 mr-2" /> Registrarse Ahora
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-tech-primary/30 text-tech-primary hover:bg-tech-primary/10 px-8 py-5 rounded-2xl w-full sm:w-auto">
                  Ver Más Info
                </Button>
              </div>
            </div>

            {/* Lado Derecho */}
            <div className="flex justify-center lg:justify-end order-first lg:order-last">
              <div className="relative group cursor-pointer">
                <div className="relative overflow-hidden rounded-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px]">
                  <img
                    src={hackathonLogo}
                    alt="Hackathon TECSUP 2025"
                    className="w-full h-auto object-cover rounded-full shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-700"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
