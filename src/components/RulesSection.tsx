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
  Download,
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
      className="py-32 bg-gradient-to-b from-gray-50 via-gray-50/50 to-gray-100 dark:from-gray-900 dark:via-gray-900/50 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Fondo decorativo mejorado */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-1/2 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-blue-500 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-emerald-500 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-24">
          <div className="inline-block mb-4">
            <Badge className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-4 py-2 text-sm font-semibold">
              📋 Documentación Official
            </Badge>
          </div>
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-600 via-emerald-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Bases del Hackathon
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Todo lo que necesitas saber para participar en el hackathon más{" "}
            <span className="text-emerald-600 font-bold">emocionante</span>{" "}
            del año.
          </p>
        </div>

        {/* Sección de documentos - Grid de 2 columnas responsivo */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Bases Completas */}
          <Card className="group relative h-full border-0 bg-gradient-to-br from-white/95 to-white/90 dark:from-gray-800/95 dark:to-gray-900/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
            {/* Efecto de brillo */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardHeader className="text-center pb-6 relative z-10">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 mx-auto shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Bases Completas
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                Documento oficial con todas las reglas y condiciones del hackathon
              </p>
            </CardHeader>

            <CardContent className="relative z-10 pb-8">
              <div className="flex flex-col gap-3">
                <a
                  href="https://docs.google.com/document/d/18O5P6kaXgmeHq76Xc2pyPDoRjBcZf_Wu/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-base shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Ver Bases</span>
                  <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </a>

                <a
                  href="https://docs.google.com/document/d/18O5P6kaXgmeHq76Xc2pyPDoRjBcZf_Wu/export?format=pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 dark:bg-gray-700 dark:hover:bg-gray-600 text-blue-600 dark:text-blue-400 font-semibold px-8 py-4 rounded-xl text-base border-2 border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  <span>Descargar PDF</span>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Cronograma */}
          <Card className="group relative h-full border-0 bg-gradient-to-br from-white/95 to-white/90 dark:from-gray-800/95 dark:to-gray-900/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
            {/* Efecto de brillo */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardHeader className="text-center pb-6 relative z-10">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-6 mx-auto shadow-lg group-hover:shadow-orange-500/50 group-hover:scale-110 transition-all duration-300">
                <CalendarDays className="w-12 h-12 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Cronograma 2025
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                Calendario detallado con todas las fechas y actividades del evento
              </p>
            </CardHeader>

            <CardContent className="relative z-10 pb-8">
              <div className="flex flex-col gap-3">
                <a
                  href="https://drive.google.com/file/d/1h3cTnrcklBstsmN9cIFoY4TwlVpQ5uWs/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-xl text-base shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Ver Cronograma</span>
                  <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </a>

                <a
                  href="https://drive.google.com/file/d/1h3cTnrcklBstsmN9cIFoY4TwlVpQ5uWs/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center justify-center gap-2 bg-white hover:bg-orange-50 dark:bg-gray-700 dark:hover:bg-gray-600 text-orange-600 dark:text-orange-400 font-semibold px-8 py-4 rounded-xl text-base border-2 border-orange-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  <span>Descargar Excel</span>
                </a>
              </div>

              <div className="mt-6 flex justify-center">
                <Badge className="bg-orange-500/10 text-orange-600 dark:text-orange-400 px-4 py-2 font-semibold border border-orange-500/30">
                  📊 Google Sheets
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reglas principales */}
        {/* ... (resto del código de reglas e información importante igual que antes) */}
      </div>
    </section>
  );
};

export default RulesSection;