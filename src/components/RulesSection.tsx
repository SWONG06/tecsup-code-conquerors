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
    color: "blue",
  },
  {
    icon: Calendar,
    title: "Elegibilidad",
    description:
      "Estudiantes universitarios, técnicos y profesionales menores de 30 años pueden participar.",
    color: "purple",
  },
  {
    icon: Code,
    title: "Desarrollo",
    description:
      "El código debe ser desarrollado durante las 48 horas del evento. No se aceptan proyectos previos.",
    color: "emerald",
  },
  {
    icon: Lightbulb,
    title: "Originalidad",
    description:
      "Las soluciones deben ser originales y no infringir derechos de autor o propiedad intelectual.",
    color: "blue",
  },
  {
    icon: Trophy,
    title: "Presentación",
    description:
      "Cada equipo tendrá 5 minutos para presentar su solución frente al jurado el domingo.",
    color: "purple",
  },
  {
    icon: FileText,
    title: "Documentación",
    description:
      "Los proyectos deben incluir documentación técnica, demo funcional y pitch de presentación.",
    color: "emerald",
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
  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-500/10 dark:bg-blue-400/10",
        text: "text-blue-600 dark:text-blue-400"
      },
      purple: {
        bg: "bg-purple-500/10 dark:bg-purple-400/10",
        text: "text-purple-600 dark:text-purple-400"
      },
      emerald: {
        bg: "bg-emerald-500/10 dark:bg-emerald-400/10",
        text: "text-emerald-600 dark:text-emerald-400"
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section
      id="bases"
      className="py-24 bg-gray-100/40 dark:bg-gray-800/40 relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-1/4 w-1/3 h-1/3 bg-gradient-to-l from-emerald-500 dark:from-emerald-400 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-1/3 h-1/3 bg-gradient-to-r from-blue-500 dark:from-blue-400 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-600 dark:from-blue-400 via-emerald-600 dark:via-emerald-400 to-purple-600 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            Bases del Hackathon
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Todo lo que necesitas saber para participar en el hackathon más{" "}
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">emocionante</span>{" "}
            del año.
          </p>
        </div>

        {/* Rules */}
        <div className="mb-24">
          <h3 className="text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Reglas Principales
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {rules.map((rule, index) => {
              const colorClasses = getColorClasses(rule.color);
              return (
                <Card
                  key={index}
                  className="group relative border border-gray-200/50 dark:border-gray-700/50 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-2xl 
                    transition-all duration-500 hover:scale-105 active:scale-95
                    hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] dark:hover:shadow-[0_0_25px_rgba(147,197,253,0.4)] 
                    active:shadow-[0_0_35px_rgba(99,102,241,0.6)] dark:active:shadow-[0_0_35px_rgba(147,197,253,0.6)]
                    animate-fade-in-up cursor-pointer"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Glow border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 dark:from-blue-400/10 via-emerald-500/10 dark:via-emerald-400/10 to-purple-500/10 dark:to-purple-400/10 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>

                  <CardHeader className="text-center pb-4 relative z-10">
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 ${colorClasses.bg} ${colorClasses.text} rounded-2xl mb-5 
                        group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    >
                      <rule.icon className="w-10 h-10" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      {rule.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center relative z-10">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-xl md:text-2xl">
                      {rule.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Separator */}
        <div className="w-32 h-1 bg-gradient-to-r from-blue-600 dark:from-blue-400 via-emerald-600 dark:via-emerald-400 to-purple-600 dark:to-purple-400 mx-auto mb-20 rounded-full"></div>

        {/* Important Notes */}
        <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200/50 dark:border-gray-700/50 shadow-lg dark:shadow-blue-500/10">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 flex items-center justify-center gap-3 text-gray-900 dark:text-white">
            <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 dark:text-blue-400 animate-bounce" />
            Notas Importantes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {notes.map((note, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white/60 dark:bg-gray-800/60 rounded-xl p-3 sm:p-4 border border-gray-200/30 dark:border-gray-700/30 
                  hover:border-blue-500/40 dark:hover:border-blue-400/40 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] dark:hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]
                  active:shadow-[0_0_30px_rgba(34,197,94,0.6)] dark:active:shadow-[0_0_30px_rgba(52,211,153,0.6)] active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-500/10 dark:bg-blue-400/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg md:text-xl">
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