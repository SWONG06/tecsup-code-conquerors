import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Calendar,
  Code,
  Lightbulb,
  Trophy,
  FileText,
  CheckCircle2,
  ExternalLink,
  BookOpen,
  CalendarDays,
} from "lucide-react";

const rules = [
  {
    icon: Users,
    title: "Formación de Equipos",
    description:
      "Participación individual o equipos formados con un máximo de 5 integrantes, de acuerdo a lo indicado en las bases.",
    color: "blue",
  },
  {
    icon: Calendar,
    title: "Elegibilidad",
    description:
      "Estudiantes de universidades, institutos técnicos o escuelas de formación profesional de grado superior, matriculados en el año académico 2025 a nivel nacional.",
    color: "purple",
  },
  {
    icon: Code,
    title: "Desarrollo",
    description:
      "Las propuestas deberán ser originales, que no hayan sido premiadas anteriormente, ya sea en un evento similar o cualquier otro concurso.",
    color: "emerald",
  },
  {
    icon: Lightbulb,
    title: "Originalidad",
    description:
      "Si la información proporcionada por los participantes resulta ser falsa, se excluirá a todo el equipo de la competencia.",
    color: "blue",
  },
  {
    icon: Trophy,
    title: "Presentación",
    description:
      "Los equipos deberán presentar su propuesta en formato PITCH de 5 minutos como máximo y 3 minutos para las preguntas.",
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
  "El registro y participación es gratuita.",
  "Participan estudiantes de educación superior a nivel nacional.",
  "Participas individualmente o en equipos de máximo 5 integrantes.",
  "El cierre de inscripciones es el 31 de octubre.",
  "Presentación de tu propuesta en formato PITCH de 5 minutos.",
  "Desarrollo de talleres con mentores del sector.",
];

export const RulesSection = () => {
  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-500/10 dark:bg-blue-400/10",
        text: "text-blue-600 dark:text-blue-400",
      },
      purple: {
        bg: "bg-purple-500/10 dark:bg-purple-400/10",
        text: "text-purple-600 dark:text-purple-400",
      },
      emerald: {
        bg: "bg-emerald-500/10 dark:bg-emerald-400/10",
        text: "text-emerald-600 dark:text-emerald-400",
      },
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
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
              emocionante
            </span>{" "}
            del año.
          </p>
        </div>

        {/* Document Links Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Bases Document */}
          <a
            href="https://drive.google.com/file/d/1PmdpHLoNqN8WciiHncp8SHnky1bLO8M8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="group h-full border-2 border-blue-500/20 dark:border-blue-400/20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 transition-all duration-500 hover:scale-105 cursor-pointer">
              <CardHeader className="text-center pb-6">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-2xl mb-6 group-hover:rotate-6 transition-transform duration-500 mx-auto">
                  <BookOpen className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  Bases Completas
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Documento oficial con todas las reglas y condiciones del hackathon
                </p>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl transform group-hover:scale-105 transition-all duration-300">
                  Ver Bases Completas
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="mt-4">
                  <Badge
                    variant="secondary"
                    className="bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 px-4 py-2"
                  >
                    Documento Google Docs
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </a>

          {/* Cronograma Document */}
          <a
            href="https://drive.google.com/file/d/1JQoBHkBqczpfC7lDJn8EjvK8Uu51eQvk/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="group h-full border-2 border-emerald-500/20 dark:border-emerald-400/20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl hover:shadow-2xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-400/20 transition-all duration-500 hover:scale-105 cursor-pointer">
              <CardHeader className="text-center pb-6">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 dark:from-emerald-400 dark:to-emerald-500 rounded-2xl mb-6 group-hover:rotate-6 transition-transform duration-500 mx-auto">
                  <CalendarDays className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  Cronograma 2025
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Calendario detallado con todas las fechas y actividades del evento
                </p>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl transform group-hover:scale-105 transition-all duration-300">
                  Ver Cronograma
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="mt-4">
                  <Badge
                    variant="secondary"
                    className="bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 px-4 py-2"
                  >
                    Google Sheets
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </a>
        </div>

        {/* Rules */}
        <div className="mb-24">
          <h3 className="text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Reglas Principales
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {rules.map((rule, index) => {
              const colorClasses = getColorClasses(rule.color);
              const RuleIcon = rule.icon;
              return (
                <Card
                  key={index}
                  className="group relative border border-gray-200/50 dark:border-gray-700/50 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-2xl 
                    transition-all duration-500 hover:scale-105 active:scale-95
                    hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] dark:hover:shadow-[0_0_25px_rgba(147,197,253,0.4)] 
                    cursor-pointer"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 dark:from-blue-400/10 via-emerald-500/10 dark:via-emerald-400/10 to-purple-500/10 dark:to-purple-400/10 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>

                  <CardHeader className="text-center pb-4 relative z-10">
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 ${colorClasses.bg} ${colorClasses.text} rounded-2xl mb-5 
                        group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    >
                      <RuleIcon className="w-10 h-10" />
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
