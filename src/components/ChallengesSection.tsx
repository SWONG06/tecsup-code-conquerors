import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Bot,
  AlertCircle,
  GraduationCap,
  Heart,
  Users,
  Route,
  Sparkles,
  Lightbulb,
  Rocket,
  Star,
  Target
} from "lucide-react";

const challenges = [
  {
    icon: Bot,
    title: "Asistente Virtual Académico Personalizado",
    description: "Desarrollar un agente de IA que acompañe al estudiante en su trayectoria, recordándole tareas, fechas de entrega, horarios y brindando recomendaciones de estudio personalizadas según su desempeño.",
    tags: ["IA Conversacional", "Personalización", "Recordatorios", "Analytics"],
    gradient: "from-blue-500 to-cyan-400",
    bgGradient: "from-blue-500/10 dark:from-blue-400/10 to-cyan-400/5 dark:to-cyan-300/5",
    iconBg: "bg-blue-500/20 dark:bg-blue-400/20 group-hover:bg-blue-500/30 dark:group-hover:bg-blue-400/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    borderColor: "border-blue-500/20 dark:border-blue-400/20 group-hover:border-blue-500/40 dark:group-hover:border-blue-400/40"
  },
  {
    icon: AlertCircle,
    title: "Detección Temprana de Riesgo de Deserción",
    description: "Crear un sistema de IA capaz de analizar datos académicos y de comportamiento (inasistencias, calificaciones, interacción en plataformas virtuales) para identificar estudiantes en riesgo y sugerir intervenciones oportunas.",
    tags: ["Machine Learning", "Análisis Predictivo", "Big Data", "Alertas"],
    gradient: "from-red-500 to-orange-400",
    bgGradient: "from-red-500/10 dark:from-red-400/10 to-orange-400/5 dark:to-orange-300/5",
    iconBg: "bg-red-500/20 dark:bg-red-400/20 group-hover:bg-red-500/30 dark:group-hover:bg-red-400/30",
    iconColor: "text-red-600 dark:text-red-400",
    borderColor: "border-red-500/20 dark:border-red-400/20 group-hover:border-red-500/40 dark:group-hover:border-red-400/40"
  },
  {
    icon: GraduationCap,
    title: "Tutor Virtual 24/7",
    description: "Diseñar un agente de IA que brinda tutorías inmediatas en asignaturas críticas (ej. matemáticas, programación, escritura académica), adaptándose al nivel de cada estudiante.",
    tags: ["NLP", "Educación Adaptativa", "Chat IA", "Tutorías"],
    gradient: "from-purple-500 to-pink-400",
    bgGradient: "from-purple-500/10 dark:from-purple-400/10 to-pink-400/5 dark:to-pink-300/5",
    iconBg: "bg-purple-500/20 dark:bg-purple-400/20 group-hover:bg-purple-500/30 dark:group-hover:bg-purple-400/30",
    iconColor: "text-purple-600 dark:text-purple-400",
    borderColor: "border-purple-500/20 dark:border-purple-400/20 group-hover:border-purple-500/40 dark:group-hover:border-purple-400/40"
  },
  {
    icon: Heart,
    title: "Agente Motivacional y de Bienestar Emocional",
    description: "Proponer una solución de IA que monitoree el estado emocional del estudiante (mediante chat, encuestas breves o análisis de tono de mensajes) y ofrezca apoyo motivacional, recursos de bienestar y contacto con tutores humanos cuando sea necesario.",
    tags: ["Sentiment Analysis", "Bienestar", "Salud Mental", "Chatbot"],
    gradient: "from-pink-500 to-rose-400",
    bgGradient: "from-pink-500/10 dark:from-pink-400/10 to-rose-400/5 dark:to-rose-300/5",
    iconBg: "bg-pink-500/20 dark:bg-pink-400/20 group-hover:bg-pink-500/30 dark:group-hover:bg-pink-400/30",
    iconColor: "text-pink-600 dark:text-pink-400",
    borderColor: "border-pink-500/20 dark:border-pink-400/20 group-hover:border-pink-500/40 dark:group-hover:border-pink-400/40"
  },
  {
    icon: Users,
    title: "Plataforma de Mentoría Inteligente",
    description: "Diseñar un sistema que conecte a estudiantes de ciclos avanzados o egresados con ingresantes, utilizando IA para hacer 'match' según intereses, carrera y necesidades, reduciendo así el aislamiento académico y social.",
    tags: ["Matching IA", "Networking", "Comunidad", "Mentoring"],
    gradient: "from-emerald-500 to-teal-400",
    bgGradient: "from-emerald-500/10 dark:from-emerald-400/10 to-teal-400/5 dark:to-teal-300/5",
    iconBg: "bg-emerald-500/20 dark:bg-emerald-400/20 group-hover:bg-emerald-500/30 dark:group-hover:bg-emerald-400/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    borderColor: "border-emerald-500/20 dark:border-emerald-400/20 group-hover:border-emerald-500/40 dark:group-hover:border-emerald-400/40"
  },
  {
    icon: Route,
    title: "Optimización de la Ruta Académica",
    description: "Desarrollar un agente de IA que sugiere itinerarios de cursos, talleres extracurriculares y recursos en línea para mejorar la progresión académica y evitar la desmotivación por sobrecarga o malas elecciones de asignaturas.",
    tags: ["Recomendación IA", "Planificación", "Optimización", "Pathfinding"],
    gradient: "from-indigo-500 to-violet-400",
    bgGradient: "from-indigo-500/10 dark:from-indigo-400/10 to-violet-400/5 dark:to-violet-300/5",
    iconBg: "bg-indigo-500/20 dark:bg-indigo-400/20 group-hover:bg-indigo-500/30 dark:group-hover:bg-indigo-400/30",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    borderColor: "border-indigo-500/20 dark:border-indigo-400/20 group-hover:border-indigo-500/40 dark:group-hover:border-indigo-400/40"
  }
];

export const ChallengesSection = () => {
  return (
    <section id="desafios" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50/50 dark:from-gray-900/50 to-white dark:to-gray-950 relative overflow-hidden">
      {/* Fondo con efectos */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-500/8 dark:bg-blue-400/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-emerald-500/6 dark:bg-emerald-400/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-blue-500/10 dark:bg-blue-400/10 border border-blue-500/20 dark:border-blue-400/20 backdrop-blur-sm mb-6 sm:mb-8">
            <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-base sm:text-lg font-medium text-blue-600 dark:text-blue-400">Desafíos EduHack 2025</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-gray-900 dark:from-white via-blue-600 dark:via-blue-400 to-gray-900 dark:to-white bg-clip-text text-transparent mb-6 leading-tight">
            Educación Superior sin
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-600 dark:from-blue-400 via-emerald-600 dark:via-emerald-400 to-purple-600 dark:to-purple-400 bg-clip-text text-transparent mt-2">
              Deserción Estudiantil
            </span>
          </h2>

          <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Desarrolla soluciones con <span className="text-blue-600 dark:text-blue-400 font-semibold">agentes de IA</span> para
            reducir la deserción estudiantil y transformar el <span className="text-emerald-600 dark:text-emerald-400 font-semibold">futuro de la educación superior</span>.
          </p>
        </div>

        {/* Grid responsive de desafíos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {challenges.map((challenge, index) => {
            const ChallengeIcon = challenge.icon;
            return (
              <Card
                key={index}
                className={`group relative border-0 bg-gradient-to-br ${challenge.bgGradient} backdrop-blur-md hover:scale-105 hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/15 dark:hover:shadow-blue-400/15 border ${challenge.borderColor}`}
              >
                <CardHeader className="text-center pb-4 sm:pb-5 relative">
                  <div className={`inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 ${challenge.iconBg} rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 transition-all duration-300`}>
                    <ChallengeIcon className={`relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 ${challenge.iconColor} z-10 transition-colors duration-300`} />
                  </div>
                  <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {challenge.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-center space-y-4 sm:space-y-6">
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {challenge.description}
                  </p>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {challenge.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs sm:text-sm bg-white/40 dark:bg-white/20 text-gray-900 dark:text-white hover:bg-white/50 dark:hover:bg-white/30 transition-all duration-200 border-white/30 dark:border-white/30 px-2 sm:px-3 py-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Información adicional */}
        <div className="relative mb-12">
          <div className="bg-gradient-to-br from-white/80 dark:from-gray-900/80 to-white/40 dark:to-gray-900/40 backdrop-blur-md rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 border border-gray-200/50 dark:border-gray-700/50 shadow-xl relative">
            <div className="text-center relative z-10">
              <div className="inline-flex items-center gap-3 px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/20 dark:border-emerald-400/20 backdrop-blur-sm mb-6 sm:mb-8">
                <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400 animate-pulse" />
                <span className="text-base sm:text-lg font-medium text-emerald-600 dark:text-emerald-400">Contexto del Desafío</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                El Poder de los Agentes de IA
              </h3>

              <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                La deserción estudiantil es uno de los mayores retos de la educación superior, impactando el futuro de miles de jóvenes.
                Las principales causas incluyen <span className="font-semibold text-red-600 dark:text-red-400">dificultades académicas</span>,
                <span className="font-semibold text-purple-600 dark:text-purple-400"> emocionales</span>,
                <span className="font-semibold text-blue-600 dark:text-blue-400"> sociales</span> y
                <span className="font-semibold text-emerald-600 dark:text-emerald-400"> económicas</span>.
              </p>

              <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Tu misión es desarrollar herramientas que brinden <span className="text-blue-600 dark:text-blue-400 font-semibold">acompañamiento</span>,
                detecten <span className="text-red-600 dark:text-red-400 font-semibold">riesgos tempranos</span> y
                fortalezcan la <span className="text-emerald-600 dark:text-emerald-400 font-semibold">permanencia estudiantil</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Sección proyecto libre */}
        <div className="relative">
          <div className="bg-gradient-to-br from-white/80 dark:from-gray-900/80 to-white/40 dark:to-gray-900/40 backdrop-blur-md rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 border border-white/20 dark:border-gray-700/20 shadow-xl relative">
            <div className="text-center relative z-10">
              <div className="inline-flex items-center gap-3 px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-purple-500/10 dark:bg-purple-400/10 border border-purple-500/20 dark:border-purple-400/20 backdrop-blur-sm mb-6 sm:mb-8">
                <Lightbulb className="w-5 h-5 text-purple-600 dark:text-purple-400 animate-pulse" />
                <span className="text-base sm:text-lg font-medium text-purple-600 dark:text-purple-400">Idea Diferente</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 dark:from-gray-200 via-purple-600 dark:via-purple-400 to-gray-900 dark:to-white bg-clip-text text-transparent mb-6 sm:mb-8">
                ¿Tienes otra solución innovadora?
              </h3>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                Si tu propuesta con <span className="text-blue-600 dark:text-blue-400 font-semibold">agentes de IA</span> no
                encaja exactamente en estos desafíos pero aborda la deserción estudiantil,
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold"> ¡preséntala de igual manera!</span>
                La innovación no tiene límites.
              </p>

              <a href="https://docs.google.com/forms/d/1FCJlcKkFrHYLZWw0V4P9SXuEqv98z-jLjvoj2S9b_-c/viewform" target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 dark:from-blue-500 to-purple-600 dark:to-purple-500 hover:from-blue-700 dark:hover:from-blue-400 hover:to-purple-700 dark:hover:to-purple-400 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 text-lg rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                  <Rocket className="w-5 h-5 mr-2" />
                  Comenzar Mi Proyecto
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};