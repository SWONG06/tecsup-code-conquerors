import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Calendar,
  Code,
  Lightbulb,
  Trophy,
  FileText,
  CheckCircle2,
} from "lucide-react";

const rules = [
  {
    icon: Users,
    title: "Formación de Equipos",
    description:
      "Equipos de 2 a 4 integrantes. Puedes venir con tu equipo formado o formar uno durante el evento.",
    color: "tech-primary",
  },
  {
    icon: Calendar,
    title: "Elegibilidad",
    description:
      "Estudiantes universitarios, técnicos y profesionales menores de 30 años pueden participar.",
    color: "tech-secondary",
  },
  {
    icon: Code,
    title: "Desarrollo",
    description:
      "El código debe ser desarrollado durante las 48 horas del evento. No se aceptan proyectos previos.",
    color: "tech-accent",
  },
  {
    icon: Lightbulb,
    title: "Originalidad",
    description:
      "Las soluciones deben ser originales y no infringir derechos de autor o propiedad intelectual.",
    color: "tech-primary",
  },
  {
    icon: Trophy,
    title: "Presentación",
    description:
      "Cada equipo tendrá 5 minutos para presentar su solución frente al jurado el domingo.",
    color: "tech-secondary",
  },
  {
    icon: FileText,
    title: "Documentación",
    description:
      "Los proyectos deben incluir documentación técnica, demo funcional y pitch de presentación.",
    color: "tech-accent",
  },
];

const notes = [
  "El registro es gratuito",
  "Se proporcionarán desayuno, almuerzo y cena",
  "Habrá espacios para descanso 24/7",
  "Llevar laptop personal y cargadores",
  "Internet de alta velocidad y espacios de trabajo",
  "Mentores disponibles todo el evento",
  "Material promocional y souvenirs incluidos",
  "Los ganadores tendrán oportunidades laborales",
];

export const RulesSection = () => {
  return (
    <section
      id="bases"
      className="py-24 bg-secondary/40 relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-1/4 w-1/3 h-1/3 bg-gradient-to-l from-tech-accent to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-1/3 h-1/3 bg-gradient-to-r from-tech-primary to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-tech-primary via-tech-accent to-tech-secondary bg-clip-text text-transparent mb-6">
            Bases del Hackathon
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Todo lo que necesitas saber para participar en el hackathon más{" "}
            <span className="text-tech-accent font-semibold">emocionante</span>{" "}
            del año.
          </p>
        </div>

        {/* Rules */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Reglas Principales
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {rules.map((rule, index) => (
              <Card
                key={index}
                className="group relative border border-border/50 bg-card/60 backdrop-blur-md rounded-2xl 
                  transition-all duration-500 hover:scale-105 active:scale-95
                  hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] active:shadow-[0_0_35px_rgba(99,102,241,0.6)]
                  animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Glow border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-tech-primary/10 via-tech-accent/10 to-tech-secondary/10 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>

                <CardHeader className="text-center pb-4 relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-${rule.color}/10 text-${rule.color} rounded-2xl mb-5 
                      group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    <rule.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-tech-accent transition-colors duration-300">
                    {rule.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {rule.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="w-32 h-1 bg-gradient-to-r from-tech-primary via-tech-accent to-tech-secondary mx-auto mb-20 rounded-full"></div>

        {/* Important Notes */}
        <div className="bg-card/50 backdrop-blur-lg rounded-3xl p-6 sm:p-8 lg:p-10 border border-border/50 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 flex items-center justify-center gap-3 text-foreground">
            <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-tech-primary animate-bounce" />
            Notas Importantes
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {notes.map((note, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-background/60 rounded-xl p-3 sm:p-4 border border-border/30 
                  hover:border-tech-primary/40 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]
                  active:shadow-[0_0_30px_rgba(34,197,94,0.6)] active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-tech-primary/10 flex items-center justify-center text-tech-primary">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};