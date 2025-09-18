import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Heart, Leaf, Shield, Clock, Star } from "lucide-react";
import heroKit from "@/assets/hero-kit.jpg";
import foamCleanser from "@/assets/foam-cleanser.jpg";
import riceToner from "@/assets/rice-toner.jpg";
import facialOil from "@/assets/facial-oil.jpg";
import serumGel from "@/assets/serum-gel.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-champagne/50 text-primary border-gold/20">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Edición Limitada
                </Badge>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
                  Despierta tu{" "}
                  <span className="bg-gradient-gold bg-clip-text text-transparent font-semibold">
                    porcelana interior
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                  El ritual facial que transforma tu piel… y te recuerda que eres arte en movimiento.
                </p>
              </div>
              <Button 
                variant="luxury" 
                size="xl" 
                className="group"
                onClick={() => window.open('https://wa.me/525530702640?text=Hola,%20quiero%20mi%20ritual%20Cleo', '_blank')}
              >
                Quiero mi ritual Cleo
                <Heart className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-xl rounded-3xl"></div>
              <img
                src={heroKit}
                alt="Kit Facial Cleo Boutique"
                className="relative w-full h-auto rounded-2xl shadow-luxury"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Ritual Cleo Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            ¿Qué es el{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent font-semibold">
              Ritual Cleo
            </span>
            ?
          </h2>
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
            <p className="font-medium text-primary">No vendemos cosméticos. Diseñamos momentos.</p>
            <p>
              El Kit Cleo Boutique es una alquimia de arroz, avena y activos naturales que te envuelve 
              en un cuidado profundo, sin químicos ni artificios.
            </p>
            <p>
              Inspirado en las pieles coreanas de porcelana y formulado con extractos puros de germen de arroz, 
              este ritual devuelve la elasticidad, la luz y la suavidad a tu rostro.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
            ¿Qué contiene el{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent font-semibold">kit</span>?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Foam Cleanser */}
            <Card className="bg-card/50 border-gold/20 shadow-soft hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={foamCleanser}
                    alt="Espuma Limpiadora Facial"
                    className="w-full md:w-48 h-48 object-cover rounded-xl"
                  />
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-primary">Espuma Limpiadora Facial</h3>
                    <Badge variant="outline" className="border-gold/30 text-gold">250 ml</Badge>
                    <p className="text-muted-foreground">
                      Elimina impurezas, calma e hidrata. Desmaquillante suave, apto para piel sensible.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-gold" />
                        Con 60% más Vitamina E que el aceite de argán
                      </li>
                      <li className="flex items-center gap-2">
                        <Leaf className="w-4 h-4 text-gold" />
                        Fórmula cremosa y ligera
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rice Toner */}
            <Card className="bg-card/50 border-gold/20 shadow-soft hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={riceToner}
                    alt="Agua de Arroz Tonificante"
                    className="w-full md:w-48 h-48 object-cover rounded-xl"
                  />
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-primary">Agua de Arroz Tonificante</h3>
                    <Badge variant="outline" className="border-gold/30 text-gold">250 ml</Badge>
                    <p className="text-muted-foreground">
                      Revitaliza, equilibra y aclara. Controla grasa sin resecar.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-gold" />
                        Rica en antioxidantes
                      </li>
                      <li className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-gold" />
                        Aroma sutil tipo Rice Soufflé
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Facial Oil */}
            <Card className="bg-card/50 border-gold/20 shadow-soft hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={facialOil}
                    alt="Aceite Facial de Germen de Arroz"
                    className="w-full md:w-48 h-48 object-cover rounded-xl"
                  />
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-primary">Aceite Facial de Germen de Arroz</h3>
                    <Badge variant="outline" className="border-gold/30 text-gold">30 ml</Badge>
                    <p className="text-muted-foreground">
                      Hidratación profunda y reparación. Ideal para cicatrices, zonas secas y líneas de expresión.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-gold" />
                        Uso facial, corporal y capilar
                      </li>
                      <li className="flex items-center gap-2">
                        <Leaf className="w-4 h-4 text-gold" />
                        Textura de aceite seco, sin sensación grasosa
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Serum Gel */}
            <Card className="bg-card/50 border-gold/20 shadow-soft hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={serumGel}
                    alt="Sérum Gel Reafirmante"
                    className="w-full md:w-48 h-48 object-cover rounded-xl"
                  />
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-primary">Sérum Gel Reafirmante</h3>
                    <Badge variant="outline" className="border-gold/30 text-gold">240 g</Badge>
                    <p className="text-muted-foreground">
                      Gel lechoso que mejora visiblemente la firmeza, textura y tono.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gold" />
                        Ideal para rutina de día y noche
                      </li>
                      <li className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-gold" />
                        Efecto glow tensor suave inmediato
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-16">
            Beneficios{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent font-semibold">
              sensoriales del ritual
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-gold rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary">Repara & Hidrata</h3>
              <p className="text-muted-foreground">Desde la primera aplicación</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-gold rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary">Pieles Sensibles</h3>
              <p className="text-muted-foreground">Ideal para pieles sensibles</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-gold rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary">Reduce Imperfecciones</h3>
              <p className="text-muted-foreground">Manchas, líneas finas y cicatrices</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-gold rounded-full flex items-center justify-center">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary">100% Natural</h3>
              <p className="text-muted-foreground">Fórmulas seguras y veganas</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-gold rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary">Texturas Suaves</h3>
              <p className="text-muted-foreground">Aromas ligeros, resultados visibles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Instructions */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
            Modo de{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent font-semibold">uso</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 border-gold/20 shadow-soft">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">Espuma Facial</h3>
                <p className="text-muted-foreground">
                  Masajea suavemente con movimientos circulares por 2-3 minutos. Aclara con agua tibia.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-gold/20 shadow-soft">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">Agua de Arroz</h3>
                <p className="text-muted-foreground">
                  Agita antes de usar. Aplica con un disco de algodón desde el centro del rostro hacia afuera.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-gold/20 shadow-soft">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">Aceite Facial</h3>
                <p className="text-muted-foreground">
                  Aplícalo directo sobre el rostro, cuello, cuerpo o cabello.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-gold/20 shadow-soft">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold text-primary">Sérum Gel</h3>
                <p className="text-muted-foreground">
                  Usa en rostro limpio por la mañana y noche. Ideal antes de maquillaje.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="w-20 h-20 mx-auto bg-gradient-gold rounded-full flex items-center justify-center mb-8">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-primary">Cleo Boutique</h2>
          <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground">
            Formula productos de alto desempeño, 100% naturales, sintéticos seguros para la piel, probados en humanos no en animales, libres de crueldad animal, extractos naturales.
          </p>
          <p className="text-lg font-medium text-primary">
            Solo lo esencial para tu piel y tu alma.
          </p>
        </div>
      </section>

      {/* Emotional Closing */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            <p className="text-primary font-medium">Esto no es solo una rutina.</p>
            <p className="text-muted-foreground">
              Es el recordatorio de que tu rostro también merece un ritual sagrado.
            </p>
            <p className="text-muted-foreground">
              Cada frasco Cleo contiene una fórmula… Y también una intención:
            </p>
            <div className="space-y-4 text-primary font-medium">
              <p>Recordarte que eres arte.</p>
              <p>Que eres templo.</p>
              <p>Que mereces belleza con propósito.</p>
            </div>
          </div>
          
          <div className="pt-8">
            <Button variant="elegant" size="xl">
              Comenzar mi ritual Cleo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 lg:px-16 border-t border-gold/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-light text-primary">Cleo Boutique</h3>
            <p className="text-muted-foreground">Belleza con propósito</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                Instagram
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                Contacto
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                Garantía
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;