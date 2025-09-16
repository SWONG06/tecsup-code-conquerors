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
    bgGradient: "from-blue-500/10 to-cyan-400/5",
    iconBg: "bg-blue-500/20 group-hover:bg-blue-500/30",
    borderColor: "border-blue-500/20 group-hover:border-blue-500/40"
  },
  {
    icon: Globe,
    title: "Desarrollo Web",
    description: "Crea plataformas web escalables y modernas que impacten en diferentes sectores de la sociedad.",
    tags: ["React", "Vue", "Node.js", "Python"],
    gradient: "from-purple-500 to-pink-400",
    bgGradient: "from-purple-500/10 to-pink-400/5",
    iconBg: "bg-purple-500/20 group-hover:bg-purple-500/30",
    borderColor: "border-purple-500/20 group-hover:border-purple-500/40"
  },
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    description: "Implementa soluciones de IA y Machine Learning para automatizar procesos y generar insights valiosos.",
    tags: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision"],
    gradient: "from-emerald-500 to-teal-400",
    bgGradient: "from-emerald-500/10 to-teal-400/5",
    iconBg: "bg-emerald-500/20 group-hover:bg-emerald-500/30",
    borderColor: "border-emerald-500/20 group-hover:border-emerald-500/40"
  },
  {
    icon: Leaf,
    title: "Sostenibilidad & GreenTech",
    description: "Diseña tecnologías que promuevan la sostenibilidad ambiental y el desarrollo responsable.",
    tags: ["IoT", "Sensores", "Análisis de Datos", "Clean Tech"],
    gradient: "from-green-500 to-lime-400",
    bgGradient: "from-green-500/10 to-lime-400/5",
    iconBg: "bg-green-500/20 group-hover:bg-green-500/30",
    borderColor: "border-green-500/20 group-hover:border-green-500/40"
  },
  {
    icon: Shield,
    title: "Ciberseguridad",
    description: "Desarrolla herramientas y sistemas que fortalezcan la seguridad digital y protejan la información.",
    tags: ["Blockchain", "Encriptación", "Pentesting", "DevSecOps"],
    gradient: "from-red-500 to-orange-400",
    bgGradient: "from-red-500/10 to-orange-400/5",
    iconBg: "bg-red-500/20 group-hover:bg-red-500/30",
    borderColor: "border-red-500/20 group-hover:border-red-500/40"
  }
];

export const ChallengesSection = () => {
  return (
    <section id="desafios" className="py-16 sm:py-20 md:py-24 bg-secondary/20 relative overflow-hidden">
      {/* Fondo con efectos */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-tech-primary/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-tech-accent/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-tech-accent/10 border border-tech-accent/20 backdrop-blur-sm mb-4 sm:mb-6">
            <Rocket className="w-4 h-4 text-tech-accent" />
            <span className="text-xs sm:text-sm font-medium text-tech-accent">Desafíos del Hackathon</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black bg-gradient-to-r from-gray-300 via-blue-400 to-white bg-clip-text text-transparent mb-6 leading-tight">
            Categorías de
            <span className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-gray-200 to-blue-300 bg-clip-text text-transparent mt-2 relative">
              Desafíos
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Elige la categoría que más te <span className="text-tech-accent font-semibold">apasione</span> y desarrolla 
            soluciones innovadoras que pueden <span className="text-tech-primary font-semibold">cambiar el mundo</span>.
          </p>
        </div>

        {/* Grid responsive */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {challenges.map((challenge, index) => (
            <Card 
              key={index}
              className={`group relative border-0 bg-gradient-to-br ${challenge.bgGradient} backdrop-blur-md hover:scale-105 hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl hover:shadow-tech-primary/15`}
            >
              <CardHeader className="flex flex-col items-center justify-center pb-3 sm:pb-4 relative">
                <div
                  className={`flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 ${challenge.iconBg} rounded-2xl sm:rounded-3xl mb-4 sm:mb-6`}
                >
                  <challenge.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                </div>
                <CardTitle className="text-base sm:text-lg md:text-xl font-bold text-foreground group-hover:text-tech-primary transition-colors duration-300 text-center">
                  {challenge.title}
                </CardTitle>
              </CardHeader>

              
              <CardContent className="text-center space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {challenge.description}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {challenge.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="text-xs sm:text-sm bg-white/10 text-foreground hover:bg-white/20 transition-all duration-200"
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
          <div className="bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 relative">
            <div className="text-center relative z-10">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-tech-primary/10 border border-tech-primary/20 backdrop-blur-sm mb-4 sm:mb-6">
                <Lightbulb className="w-4 h-4 text-tech-primary animate-pulse" />
                <span className="text-xs sm:text-sm font-medium text-tech-primary">Proyecto Libre</span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-300 via-blue-400 to-white bg-clip-text text-transparent mb-4 sm:mb-6">
                ¿Tienes una idea diferente?
              </h3>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
                ¡También aceptamos <span className="text-tech-primary font-semibold">proyectos libres</span>! 
                Si tu innovación no encaja en ninguna categoría, preséntala de igual manera. 
                <span className="text-tech-accent font-semibold"> La creatividad no tiene límites</span>.
              </p>

              <Button className="w-full sm:w-auto bg-gradient-to-r from-tech-primary to-tech-secondary hover:from-tech-primary/90 hover:to-tech-secondary/90 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
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
