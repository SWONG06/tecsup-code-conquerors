import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Coffee, Network, Award, Clock, Code, Globe, Lightbulb, Download } from "lucide-react";

export const RegistrationSection = () => {
  const registrationBenefits = [
    { icon: Clock, title: "Acceso completo al evento", description: "Participa en toda la experiencia de la EduHack 2025" },
    { icon: Users, title: "Mentoría de expertos en el sector", description: "Recibe talleres de profesionales experimentados" },
    { icon: Network, title: "Networking con estudiantes", description: "Conecta con estudiantes de otras instituciones" },
    { icon: CheckCircle, title: "Asegura tu lugar ahora", description: "Regístrate antes de que se agoten los cupos" },
  ];

  return (
    <section id="registro" className="py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-950/20 dark:to-purple-950/20 relative overflow-hidden">
      {/* Fondo decorativo mejorado */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-1/2 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-blue-400 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-purple-400 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 text-lg px-6 py-2 font-semibold">
            🚀 ¡Únete al EduHack 2025!
          </Badge>
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Formulario de Registro
          </h2>
          <div className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto space-y-4 mb-10">
            <p className="font-semibold text-gray-900 dark:text-white text-lg leading-relaxed">
              Regístrate ahora y asegura tu lugar en el evento tecnológico más importante del año. Completa tus datos para participar en el EduHack 2025 de Tecsup.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Embedded Google Form - 2 columnas */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-2xl backdrop-blur-xl overflow-hidden bg-white/95 dark:bg-gray-900/95 hover:shadow-3xl transition-all duration-500">
              <CardHeader className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 pb-8">
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  📝 Datos de Registro
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                  Completa el formulario oficial de Google Forms
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative w-full bg-white dark:bg-gray-900/50" style={{ height: '700px' }}>
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
                <div className="p-6 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
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
          </div>

          {/* QR y Beneficios - 1 columna */}
          <div className="space-y-6">
            {/* QR Card */}
            <Card className="border-0 shadow-2xl backdrop-blur-xl overflow-hidden bg-gradient-to-br from-white/95 to-white/90 dark:from-gray-900/95 dark:to-gray-900/90 hover:shadow-3xl transition-all duration-500">
              <CardHeader className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 text-center pb-6">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  🔗 Acceso Rápido
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Escanea para registrarte
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex flex-col items-center gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-lg border-4 border-purple-200 dark:border-purple-800 hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/src/assets/qr.png" 
                    alt="QR Code - Registro EduHack 2025"
                    className="w-40 h-40"
                  />
                </div>
                
                <div className="text-center w-full">
                  <p className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                    ¿Sin acceso al formulario?
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Escanea este código QR desde tu celular
                  </p>
                </div>

                <a
                  href="https://docs.google.com/forms/d/1FCJlcKkFrHYLZWw0V4P9SXuEqv98z-jLjvoj2S9b_-c/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold px-6 py-3 rounded-xl text-base shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Abrir Formulario</span>
                </a>

                <Badge className="bg-purple-500/10 text-purple-600 dark:text-purple-400 px-4 py-2 font-semibold border border-purple-500/30">
                  📋 Google Forms
                </Badge>
              </CardContent>
            </Card>

            {/* Benefits Quick List */}
            <Card className="border-0 shadow-2xl backdrop-blur-xl overflow-hidden bg-gradient-to-br from-white/95 to-white/90 dark:from-gray-900/95 dark:to-gray-900/90">
              <CardHeader className="bg-gradient-to-r from-blue-500/10 to-emerald-500/10 dark:from-blue-500/20 dark:to-emerald-500/20 pb-6">
                <CardTitle className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  ✨ Lo que incluye
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">Acceso completo al evento</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">Mentoría de expertos</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">Networking con estudiantes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">Certificado de participación</span>
                  </div>
                </div>
              </CardContent>
            </Card>
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
      bgColor: "from-yellow-500/20 to-orange-500/20",
      iconColor: "text-yellow-600 dark:text-yellow-400",
      borderColor: "border-yellow-500/30",
    },
    {
      title: "Tecnología",
      description: "Accede a las últimas herramientas y tecnologías para desarrollar soluciones de vanguardia.",
      icon: Code,
      bgColor: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-500/30",
    },
    {
      title: "Networking",
      description: "Conecta con profesionales, mentores y otros estudiantes apasionados por la tecnología.",
      icon: Users,
      bgColor: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-600 dark:text-green-400",
      borderColor: "border-green-500/30",
    },
    {
      title: "Impacto Global",
      description: "Desarrolla soluciones que pueden tener un impacto positivo a nivel global.",
      icon: Globe,
      bgColor: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-600 dark:text-purple-400",
      borderColor: "border-purple-500/30",
    },
  ];

  const stats = [
    {
      number: "48H",
      label: "Duración del Evento",
      icon: Clock,
      color: "text-purple-600 dark:text-purple-400",
      bgGradient: "from-purple-500/30 to-purple-600/30",
    },
    {
      number: "100+",
      label: "Participantes",
      icon: Users,
      color: "text-blue-600 dark:text-blue-400",
      bgGradient: "from-blue-500/30 to-blue-600/30",
    },
    {
      number: "20+",
      label: "Mentores",
      icon: Lightbulb,
      color: "text-yellow-600 dark:text-yellow-400",
      bgGradient: "from-yellow-500/30 to-yellow-600/30",
    },
  ];

  return (
    <section id="info" className="py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-950/20 dark:to-purple-950/20 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-1/2 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-blue-400 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-purple-400 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-base font-semibold">
            💡 ¿Por qué participar?
          </Badge>
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">
            EduHack 2025
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Únete a una experiencia única de innovación y tecnología diseñada para estudiantes de educación superior. Desarrolla soluciones que marquen la diferencia en la educación y la sociedad.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className={`border-2 ${feature.borderColor} shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 bg-gradient-to-br ${feature.bgColor} dark:${feature.bgColor}`}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-white dark:bg-gray-800 shadow-md`}>
                    <IconComponent className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{feature.description}</p>
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
              className="border-0 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl"
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br ${stat.bgGradient}`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-5xl font-black ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};