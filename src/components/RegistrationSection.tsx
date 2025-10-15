import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Coffee, Network, Award, Clock, Code, Globe, Lightbulb } from "lucide-react";

export const RegistrationSection = () => {
  const registrationBenefits = [
    { icon: Clock, title: "Acceso completo al evento ", description: "Participa en toda la experiencia de la EduHack 2025" },
    { icon: Users, title: "Mentoría de expertos en el sector", description: "Recibe talleres de profesionales experimentados" },
    { icon: Network, title: "Networking con estudiantes", description: "Conecta con estudiantes de otras instituciones" },
<<<<<<< HEAD
    { icon: CheckCircle, title: "FALTA POCO", description: "Asegura tu lugar en el evento antes de que se agoten los cupos" },
=======
    { icon: CheckCircle, title: "Certificado de participación", description: "Reciben los integrantes de los equipos ganadores" },
    { icon: CheckCircle, title: "Falta poco", description: "Asegura tu lugar en el evento antes de que se agoten los cupos" },
>>>>>>> 90f2637d57a226743dc118e3a383c9e93a1dce61
  ];

  return (
    <section id="registro" className="py-24 bg-gradient-to-br from-background via-blue-500/5 to-purple-500/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 text-lg px-4 py-2">
            ¡Únete al EduHack 2025!
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Formulario de Registro
          </h2>
          <div className="text-xl text-muted-foreground max-w-4xl mx-auto space-y-4 mb-10">
            <p className="font-semibold text-foreground">
              Regístrate ahora y asegura tu lugar en el evento tecnológico más importante del año. Completa tus datos para participar en el EduHack 2025 de Tecsup.
            </p>
          </div>
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
                  title="Formulario de Registro EduHack 2025"
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
                {registrationBenefits.map((benefit, index) => {
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

          </div>
        </div>
      </div>
    </section>
  );
};

export const InfoSection = () => {
  const features = [
    {
      title: "Innovación",
      description: "Fomenta la creatividad y el pensamiento disruptivo para resolver problemas reales.",
      icon: Lightbulb,
      bgColor: "bg-yellow-100/50 dark:bg-yellow-100/20",
      iconColor: "text-yellow-500",
    },
    {
      title: "Tecnología",
      description: "Accede a las últimas herramientas y tecnologías para desarrollar soluciones de vanguardia.",
      icon: Code,
      bgColor: "bg-blue-100/50 dark:bg-blue-100/20",
      iconColor: "text-blue-500",
    },
    {
      title: "Networking",
      description: "Conecta con profesionales, mentores y otros estudiantes apasionados por la tecnología.",
      icon: Users,
      bgColor: "bg-green-100/50 dark:bg-green-100/20",
      iconColor: "text-green-500",
    },
    {
      title: "Impacto Global",
      description: "Desarrolla soluciones que pueden tener un impacto positivo a nivel global.",
      icon: Globe,
      bgColor: "bg-purple-100/50 dark:bg-purple-100/20",
      iconColor: "text-purple-500",
    },
  ];

  const stats = [
    {
      number: "48H",
      label: "Duración del Evento",
      icon: Clock,
      color: "text-purple-500",
      bgGradient: "from-purple-400/30 to-purple-600/30",
    },
    {
      number: "100+",
      label: "Participantes",
      icon: Users,
      color: "text-blue-500",
      bgGradient: "from-blue-400/30 to-blue-600/30",
    },
    {
      number: "20+",
      label: "Mentores",
      icon: Lightbulb,
      color: "text-yellow-500",
      bgGradient: "from-yellow-400/30 to-yellow-600/30",
    },
  ];

  return (
    <section id="info" className="py-24 bg-gradient-to-br from-background via-blue-500/5 to-purple-500/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            ¿Por qué Participar en el EduHack 2025?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Únete a una experiencia única de innovación y tecnología diseñada para estudiantes de educación superior. Desarrolla soluciones que marquen la diferencia en la educación y la sociedad.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 ${feature.bgColor}`}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full ${feature.bgColor}`}>
                    <IconComponent className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground dark:text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br ${stat.bgGradient}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-lg text-muted-foreground dark:text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};