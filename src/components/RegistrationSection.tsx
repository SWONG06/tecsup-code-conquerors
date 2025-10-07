import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, Users, Coffee, Lightbulb, Network, Award, Clock
} from "lucide-react";

export const RegistrationSection = () => {
  const benefits = [
    { icon: Clock, title: "Acceso completo al evento de 48 horas", description: "Participa en toda la experiencia del hackathon" },
    { icon: Coffee, title: "Comidas y refrigerios incluidos", description: "Mantente energizado durante todo el evento" },
    { icon: Users, title: "Mentoría de expertos de la industria", description: "Recibe guidance de profesionales experimentados" },
    { icon: Lightbulb, title: "Acceso a herramientas y tecnologías premium", description: "Utiliza las mejores herramientas del mercado" },
    { icon: Network, title: "Networking con profesionales tech", description: "Conecta con líderes de la industria" },
    { icon: Award, title: "Certificado de participación oficial", description: "Añade valor a tu perfil profesional" }
  ];

  return (
    <section id="registro" className="py-24 bg-gradient-to-br from-background via-blue-500/5 to-purple-500/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 text-lg px-4 py-2">
            ¡Únete al Hackathon!
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Formulario de Registro
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
            Regístrate ahora y asegura tu lugar en el evento tecnológico más importante del año.
            Completa tus datos para participar en el Hackathon Tecsup 2025.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Embedded Google Form */}
          <Card className="border-blue-500/20 shadow-2xl backdrop-blur-sm overflow-hidden bg-card dark:bg-card/95">
            <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20">
              <CardTitle className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                Datos de Registro
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground dark:text-muted-foreground">
                Completa el formulario oficial de Google Forms
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative w-full bg-white dark:bg-gray-900/50" style={{ height: '800px' }}>
                <iframe 
                  src="https://docs.google.com/forms/d/1FCJlcKkFrHYLZWw0V4P9SXuEqv98z-jLjvoj2S9b_-c/viewform?embedded=true"
                  width="100%" 
                  height="100%"
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  className="border-0 dark:opacity-95"
                  title="Formulario de Registro Hackathon Tecsup 2025"
                >
                  Cargando…
                </iframe>
              </div>
              <div className="p-6 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10">
                <p className="text-center text-muted-foreground dark:text-muted-foreground text-sm">
                  ¿Problemas con el formulario?{" "}
                  <a 
                    href="https://docs.google.com/forms/d/1FCJlcKkFrHYLZWw0V4P9SXuEqv98z-jLjvoj2S9b_-c/viewform" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-purple-600 dark:text-blue-400 dark:hover:text-purple-400 font-semibold underline"
                  >
                    Ábrelo en una nueva ventana
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Benefits and CTA */}
          <div className="space-y-10">
            {/* Benefits */}
            <div>
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ¿Qué Incluye?
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-card/50 dark:bg-card/30 border border-blue-500/10 dark:border-blue-500/20 hover:border-blue-500/30 dark:hover:border-blue-500/40 transition-all duration-300 hover:bg-blue-500/5 dark:hover:bg-blue-500/10"
                    >
                      <div className="flex-shrink-0 p-2 rounded-full bg-blue-500/10 dark:bg-blue-500/20">
                        <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground dark:text-foreground mb-1 text-xl">{benefit.title}</h4>
                        <p className="text-lg text-muted-foreground dark:text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <Card className="border-pink-500/30 dark:border-pink-500/40 bg-gradient-to-br from-pink-500/10 to-purple-500/10 dark:from-pink-500/20 dark:to-purple-500/20">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-14 h-14 text-pink-600 dark:text-pink-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-2 text-foreground dark:text-foreground">¡Lugares Limitados!</h4>
                <p className="text-muted-foreground dark:text-muted-foreground mb-4 text-lg">
                  Solo 100 participantes tendrán la oportunidad de vivir esta experiencia única.
                </p>
                <a 
                  href="https://docs.google.com/forms/d/1FCJlcKkFrHYLZWw0V4P9SXuEqv98z-jLjvoj2S9b_-c/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Badge variant="secondary" className="bg-pink-500/20 dark:bg-pink-500/30 text-pink-600 dark:text-pink-400 text-lg px-6 py-3 cursor-pointer hover:bg-pink-500/30 dark:hover:bg-pink-500/40 transition-all duration-300 hover:scale-105">
                    Registro gratuito →
                  </Badge>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};