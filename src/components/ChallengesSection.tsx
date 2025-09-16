import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Globe, 
  Brain, 
  Leaf, 
  Shield,
  Sparkles,
  Lightbulb,
  Rocket,
  Star,
  Zap
} from "lucide-react";

const challenges = [
  {
    icon: Smartphone,
    title: "Aplicaciones Móviles",
    description: "Desarrolla apps innovadoras que resuelvan problemas cotidianos usando tecnologías móviles nativas o híbridas.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    gradient: "from-blue-500 to-cyan-400",
    bgGradient: "from-blue-500/10 dark:from-blue-400/10 to-cyan-400/5 dark:to-cyan-300/5",
    iconBg: "bg-blue-500/20 dark:bg-blue-400/20 group-hover:bg-blue-500/30 dark:group-hover:bg-blue-400/30",
    borderColor: "border-blue-500/20 dark:border-blue-400/20 group-hover:border-blue-500/40 dark:group-hover:border-blue-400/40"
  },
  {
    icon: Globe,
    title: "Desarrollo Web",
    description: "Crea plataformas web escalables y modernas que impacten en diferentes sectores de la sociedad.",
    tags: ["React", "Vue", "Node.js", "Python"],
    gradient: "from-purple-500 to-pink-400",
    bgGradient: "from-purple-500/10 dark:from-purple-400/10 to-pink-400/5 dark:to-pink-300/5",
    iconBg: "bg-purple-500/20 dark:bg-purple-400/20 group-hover:bg-purple-500/30 dark:group-hover:bg-purple-400/30",
    borderColor: "border-purple-500/20 dark:border-purple-400/20 group-hover:border-purple-500/40 dark:group-hover:border-purple-400/40"
  },
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    description: "Implementa soluciones de IA y Machine Learning para automatizar procesos y generar insights valiosos.",
    tags: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision"],
    gradient: "from-emerald-500 to-teal-400",
    bgGradient: "from-emerald-500/10 dark:from-emerald-400/10 to-teal-400/5 dark:to-teal-300/5",
    iconBg: "bg-emerald-500/20 dark:bg-emerald-400/20 group-hover:bg-emerald-500/30 dark:group-hover:bg-emerald-400/30",
    borderColor: "border-emerald-500/20 dark:border-emerald-400/20 group-hover:border-emerald-500/40 dark:group-hover:border-emerald-400/40"
  },
  {
    icon: Leaf,
    title: "Sostenibilidad & GreenTech",
    description: "Diseña tecnologías que promuevan la sostenibilidad ambiental y el desarrollo responsable.",
    tags: ["IoT", "Sensores", "Análisis de Datos", "Clean Tech"],
    gradient: "from-green-500 to-lime-400",
    bgGradient: "from-green-500/10 dark:from-green-400/10 to-lime-400/5 dark:to-lime-300/5",
    iconBg: "bg-green-500/20 dark:bg-green-400/20 group-hover:bg-green-500/30 dark:group-hover:bg-green-400/30",
    borderColor: "border-green-500/20 dark:border-green-400/20 group-hover:border-green-500/40 dark:group-hover:border-green-400/40"
  },
  {
    icon: Shield,
    title: "Ciberseguridad",
    description: "Desarrolla herramientas y sistemas que fortalezcan la seguridad digital y protejan la información.",
    tags: ["Blockchain", "Encriptación", "Pentesting", "DevSecOps"],
    gradient: "from-red-500 to-orange-400",
    bgGradient: "from-red-500/10 dark:from-red-400/10 to-orange-400/5 dark:to-orange-300/5",
    iconBg: "bg-red-500/20 dark:bg-red-400/20 group-hover:bg-red-500/30 dark:group-hover:bg-red-400/30",
    borderColor: "border-red-500/20 dark:border-red-400/20 group-hover:border-red-500/40 dark:group-hover:border-red-400/40"
  }
];

export const ChallengesSection = () => {
  return (
    <section id="desafios" className="py-16 sm:py-20 md:py-24 bg-gray-100/20 dark:bg-gray-800/20 relative overflow-hidden">
      {/* Fondo con efectos */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-500/8 dark:bg-blue-400/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-emerald-500/6 dark:bg-emerald-400/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/20 dark:border-emerald-400/20 backdrop-blur-sm mb-4 sm:mb-6">
            <Rocket className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-xs sm:text-sm font-medium text-emerald-600 dark:text-emerald-400">Desafíos del Hackathon</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black bg-gradient-to-r from-gray-400 dark:from-gray-300 via-blue-500 dark:via-blue-400 to-gray-900 dark:to-white bg-clip-text text-transparent mb-6 leading-tight">
            Categorías de
            <span className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-600 dark:from-blue-400 via-gray-700 dark:via-gray-200 to-blue-500 dark:to-blue-300 bg-clip-text text-transparent mt-2 relative">
              Desafíos
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Elige la categoría que más te <span className="text-emerald-600 dark:text-emerald-400 font-semibold">apasione</span> y desarrolla 
            soluciones innovadoras que pueden <span className="text-blue-600 dark:text-blue-400 font-semibold">cambiar el mundo</span>.
          </p>
        </div>

        {/* Grid responsive */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {challenges.map((challenge, index) => (
            <Card 
              key={index}
              className={`group relative border-0 bg-gradient-to-br ${challenge.bgGradient} backdrop-blur-md hover:scale-105 hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/15 dark:hover:shadow-blue-400/15`}
            >
              <CardHeader className="text-center pb-3 sm:pb-4 relative">
                <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 ${challenge.iconBg} rounded-2xl sm:rounded-3xl mb-4 sm:mb-6`}>
                  <challenge.icon className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white z-10" />
                </div>
                <CardTitle className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {challenge.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {challenge.description}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {challenge.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="text-xs sm:text-sm bg-white/10 dark:bg-white/15 text-gray-900 dark:text-white hover:bg-white/20 dark:hover:bg-white/25 transition-all duration-200 border-white/20 dark:border-white/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sección proyecto libre */}
        <div className="relative">
          <div className="bg-gradient-to-br from-white/60 dark:from-gray-900/60 to-white/30 dark:to-gray-900/30 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 dark:border-gray-700/10 relative">
            <div className="text-center relative z-10">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/10 dark:bg-blue-400/10 border border-blue-500/20 dark:border-blue-400/20 backdrop-blur-sm mb-4 sm:mb-6">
                <Lightbulb className="w-4 h-4 text-blue-600 dark:text-blue-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400">Proyecto Libre</span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-400 dark:from-gray-300 via-blue-500 dark:via-blue-400 to-gray-900 dark:to-white bg-clip-text text-transparent mb-4 sm:mb-6">
                ¿Tienes una idea diferente?
              </h3>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                ¡También aceptamos <span className="text-blue-600 dark:text-blue-400 font-semibold">proyectos libres</span>! 
                Si tu innovación no encaja en ninguna categoría, preséntala de igual manera. 
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold"> La creatividad no tiene límites</span>.
              </p>

              <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 dark:from-blue-500 to-purple-600 dark:to-purple-500 hover:from-blue-700 dark:hover:from-blue-400 hover:to-purple-700 dark:hover:to-purple-400 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                <Star className="w-4 h-4 mr-2" />
                Enviar Proyecto Libre
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};