import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, Users, Coffee, Lightbulb, Network, Award, Clock, 
  Mail, Phone, GraduationCap, User, Group 
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

  const gallery = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJs3U2cd6p7Ll1sDLASehQDuiHc1N2QgBoOg&s",
    "https://elbuho.pe/wp-content/uploads/2024/02/nasa-hackathon-Space-Apps-Challenge-arequipa-tecsup-ucsp.jpg",
    "https://www.tecsup.edu.pe/wp-content/uploads/2024/09/sede-trujillo-nf.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv8LLrhquMstSMz_07cnvwITOp_UP6aQ8eXA&s"
  ];
   

  return (
    <section id="registro" className="py-24 bg-gradient-to-br from-background via-tech-primary/5 to-tech-secondary/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-tech-primary/10 text-tech-primary hover:bg-tech-primary/20">
            ¡Únete al Hackathon!
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-tech-primary via-tech-secondary to-tech-accent bg-clip-text text-transparent mb-6">
            Formulario de Registro
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Regístrate ahora y asegura tu lugar en el evento tecnológico más importante del año.
            Completa tus datos para participar en el Hackathon Tecsup 2025.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Registration Form */}
          <Card className="border-tech-primary/20 shadow-2xl backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-tech-primary">
                Datos de Registro
              </CardTitle>
              <CardDescription>
                Completa la información requerida para tu participación
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Nombre y Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2 relative">
                  <Label htmlFor="nombre">Nombre Completo <span className="text-destructive">*</span></Label>
                  <Input id="nombre" placeholder="Tu nombre completo" className="pl-10 border-tech-primary/30 focus:ring-2 focus:ring-tech-primary/50" />
                  <User className="absolute left-3 top-9 w-5 h-5 text-tech-primary/60" />
                </div>
                <div className="space-y-2 relative">
                  <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                  <Input id="email" type="email" placeholder="tu@email.com" className="pl-10 border-tech-primary/30 focus:ring-2 focus:ring-tech-primary/50" />
                  <Mail className="absolute left-3 top-9 w-5 h-5 text-tech-primary/60" />
                </div>
              </div>

              {/* Teléfono e Institución */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2 relative">
                  <Label htmlFor="telefono">Teléfono <span className="text-destructive">*</span></Label>
                  <Input id="telefono" placeholder="+51 999 999 999" className="pl-10 border-tech-primary/30 focus:ring-2 focus:ring-tech-primary/50" />
                  <Phone className="absolute left-3 top-9 w-5 h-5 text-tech-primary/60" />
                </div>
                <div className="space-y-2 relative">
                  <Label htmlFor="institucion">Institución</Label>
                  <Input id="institucion" placeholder="Tu institución educativa" className="pl-10 border-tech-primary/30 focus:ring-2 focus:ring-tech-primary/50" />
                  <GraduationCap className="absolute left-3 top-9 w-5 h-5 text-tech-primary/60" />
                </div>
              </div>

              {/* Experiencia */}
              <div className="space-y-2">
                <Label htmlFor="experiencia">Nivel de Experiencia <span className="text-destructive">*</span></Label>
                <Select>
                  <SelectTrigger className="border-tech-primary/30 focus:ring-2 focus:ring-tech-primary/50">
                    <SelectValue placeholder="Selecciona tu nivel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="principiante">Principiante</SelectItem>
                    <SelectItem value="intermedio">Intermedio</SelectItem>
                    <SelectItem value="avanzado">Avanzado</SelectItem>
                    <SelectItem value="experto">Experto</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Equipo */}
              <div className="space-y-2 relative">
                <Label htmlFor="equipo">Nombre del Equipo (Opcional)</Label>
                <Input id="equipo" placeholder="Si ya tienes equipo, compártenos el nombre" className="pl-10 border-tech-primary/30 focus:ring-2 focus:ring-tech-primary/50" />
                <Group className="absolute left-3 top-9 w-5 h-5 text-tech-primary/60" />
              </div>

              {/* Idea */}
              <div className="space-y-2">
                <Label htmlFor="idea">Idea de Proyecto (Opcional)</Label>
                <Textarea id="idea" placeholder="Cuéntanos brevemente tu idea de proyecto" className="border-tech-primary/30 focus:ring-2 focus:ring-tech-primary/50 min-h-[100px]" />
              </div>

              <Button className="w-full bg-gradient-to-r from-tech-primary to-tech-secondary hover:from-tech-primary/90 hover:to-tech-secondary/90 text-white font-semibold py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Confirmar Registro
              </Button>
            </CardContent>
          </Card>

          {/* Gallery + Benefits */}
          <div className="space-y-10">
            {/* Tecsup Gallery */}
            <div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-tech-secondary to-tech-accent bg-clip-text text-transparent">
                El Ambiente en Tecsup
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {gallery.map((img, i) => (
                  <div key={i} className="relative group overflow-hidden rounded-xl shadow-lg">
                    <img src={img} alt={`Tecsup ${i+1}`} className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-tech-secondary to-tech-accent bg-clip-text text-transparent">
                ¿Qué Incluye?
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-tech-primary/10 hover:border-tech-primary/30 transition-all duration-300 hover:bg-tech-primary/5"
                    >
                      <div className="flex-shrink-0 p-2 rounded-full bg-tech-primary/10">
                        <IconComponent className="w-5 h-5 text-tech-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <Card className="border-tech-accent/30 bg-gradient-to-br from-tech-accent/10 to-tech-secondary/10">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-tech-accent mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">¡Lugares Limitados!</h4>
                <p className="text-muted-foreground mb-4">
                  Solo 100 participantes tendrán la oportunidad de vivir esta experiencia única.
                </p>
                <Badge variant="secondary" className="bg-tech-accent/20 text-tech-accent">
                  Registro gratuito
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
