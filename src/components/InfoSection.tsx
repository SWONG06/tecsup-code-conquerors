import { Card, CardContent } from "@/components/ui/card";
import { Users, Trophy, Clock, Code, Target, Award } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Desarrollo Innovador",
    description: "Usa las últimas tecnologías para crear soluciones que impacten positivamente en la sociedad.",
    bgColor: "bg-blue-500/10 group-hover:bg-blue-500/20"
  },
  {
    icon: Users,
    title: "Equipos Multidisciplinarios",
    description: "Forma equipos de hasta 4 personas combinando diferentes especialidades y habilidades.",
    bgColor: "bg-purple-500/10 group-hover:bg-purple-500/20"
  },
  {
    icon: Clock,
    title: "48 Horas Intensas",
    description: "Desde el viernes 15 de marzo a las 6:00 PM hasta el domingo 16 a las 6:00 PM.",
    bgColor: "bg-orange-500/10 group-hover:bg-orange-500/20"
  },
  {
    icon: Trophy,
    title: "Mentores Expertos",
    description: "Acceso a mentores de la industria tecnológica que te guiarán durante todo el evento.",
    bgColor: "bg-green-500/10 group-hover:bg-green-500/20"
  }
];

const stats = [
  {
    number: "200+",
    label: "Participantes Esperados",
    icon: Users,
    color: "text-tech-primary",
    bgGradient: "from-tech-primary/10 to-tech-primary/5"
  },
  {
    number: "15+",
    label: "Mentores Expertos",
    icon: Award,
    color: "text-tech-secondary",
    bgGradient: "from-tech-secondary/10 to-tech-secondary/5"
  },
  {
    number: "5",
    label: "Categorías de Desafíos",
    icon: Target,
    color: "text-tech-accent",
    bgGradient: "from-tech-accent/10 to-tech-accent/5"
  }
];

export const InfoSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="group relative border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md 
                       hover:from-card/90 hover:to-card/60 transition-all duration-500 
                       hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-tech-primary/10"
          >
            <CardContent className="p-6 sm:p-8 text-center relative">
              {/* Icono */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 ${feature.bgColor} 
                            rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
              >
                <feature.icon className="relative w-8 h-8 sm:w-10 sm:h-10 text-white z-10" />
              </div>

              {/* Título */}
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-foreground group-hover:text-tech-primary transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Descripción */}
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="group relative">
            <div
              className={`p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${stat.bgGradient} 
                          border border-white/10 backdrop-blur-sm 
                          hover:scale-105 hover:shadow-xl transition-all duration-300`}
            >
              {/* Icono */}
              <div className="flex items-center justify-center mb-4">
                <div
                  className="p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm 
                              group-hover:scale-110 transition-transform duration-300"
                >
                  <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color}`} />
                </div>
              </div>

              {/* Número */}
              <div
                className={`text-4xl sm:text-5xl md:text-6xl font-black ${stat.color} mb-3 
                            group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.number}
              </div>

              {/* Label */}
              <div className="text-sm sm:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
