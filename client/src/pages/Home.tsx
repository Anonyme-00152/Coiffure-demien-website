import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, Star, Facebook, Instagram } from "lucide-react";
import { SALON_INFO, ABOUT_TEXT } from "@/const";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("homme");

  const services = {
    homme: [
      {
        title: "Shampoing + Coupe + Coiffage",
        duration: "30 min",
        price: "à partir de 24,50 €",
      },
      {
        title: "Coupe spécifique (taper, mulet, dégradé à blanc)",
        duration: "45 min",
        price: "à partir de 27 €",
      },
      {
        title: "Permanente + coupe + coiffage",
        duration: "1h30",
        price: "à partir de 61 €",
      },
      {
        title: "Éclaircissement / mèches",
        duration: "30 min",
        price: "à partir de 45 €",
      },
    ],
    femme: [
      {
        title: "Brushing court",
        duration: "30 min",
        price: "dès 26 €",
      },
      {
        title: "Brushing long",
        duration: "1h",
        price: "dès 32 €",
      },
      {
        title: "Shampoing Coupe Brushing court",
        duration: "45 min",
        price: "dès 42,50 €",
      },
      {
        title: "Coloration INOA sans ammoniaque",
        duration: "Variable",
        price: "Sur devis",
      },
      {
        title: "Balayage & techniques premium",
        duration: "Variable",
        price: "Sur devis",
      },
    ],
    enfants: [
      {
        title: "Coupe 0–2 ans",
        duration: "Variable",
        price: "13 € (1re coupe offerte)",
      },
      {
        title: "Coupe 3–7 ans",
        duration: "Variable",
        price: "dès 16,50 €",
      },
      {
        title: "Garçon 8–12 ans",
        duration: "Variable",
        price: "dès 17,50 €",
      },
      {
        title: "Fille jusqu'à 15 ans",
        duration: "Variable",
        price: "dès 29 €",
      },
      {
        title: "Tarif jeunes 16–17 ans",
        duration: "Variable",
        price: "-15 %",
      },
    ],
    soins: [
      {
        title: "Absolut Repair Molecular – L'Oréal Professionnel",
        description: "Réparation moléculaire → répare jusqu'à 2 ans de dommages",
        duration: "15 min",
        price: "35 €",
      },
      {
        title: "Soin Botox",
        duration: "1h30",
        price: "dès 60 €",
      },
    ],
  };

  const reviews = [
    {
      author: "Tania F.",
      rating: 5,
      text: "Un salon que je conseille vivement, un coiffeur à l'écoute… une vraie passion.",
    },
    {
      author: "MC Riehl",
      rating: 5,
      text: "Il a été très à l'écoute, très bon conseil. Résultat parfait.",
    },
    {
      author: "Patricia C.",
      rating: 5,
      text: "Un immense merci pour ce changement parfait. Coupe et couleur au top.",
    },
  ];

  const collaborators = [
    {
      name: "Damien",
      role: "Coiffeur - Fondateur",
      description: "Véritable passionné avec plus de 15 ans d'expérience",
    },
    {
      name: "Laëtitia",
      role: "Coiffeuse",
      description: "Spécialisée dans les techniques premium et les soins",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-serif font-bold text-foreground">
            Coiffure Damien
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </a>
            <a href="#avis" className="text-sm font-medium hover:text-primary transition-colors">
              Avis
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          <a
            href={SALON_INFO.links.planity}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            Prendre RDV
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] bg-gradient-to-b from-secondary to-background overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="container h-full flex flex-col items-center justify-center relative z-10">
          <div className="text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight">
              Votre moment de détente
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl">
              Bienvenue à Coiffure Damien, votre salon de coiffure premium à Haguenau
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href={SALON_INFO.links.planity}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Réserver maintenant
              </a>
              <a href="#services" className="btn-secondary">
                Découvrir nos services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* À Propos Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-premium">À propos de nous</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {ABOUT_TEXT}
              </p>
              <div className="flex gap-4">
                <a
                  href={SALON_INFO.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-full hover:bg-accent transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={SALON_INFO.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-full hover:bg-accent transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="rounded-lg h-96 animate-slide-in-right overflow-hidden">
              <img
                src="/salon-interior.jpg"
                alt="Intérieur du salon"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-premium">Nos services</h2>
            <p className="text-subtitle mt-4">
              Découvrez notre gamme complète de prestations premium
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["homme", "femme", "enfants", "soins"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground border border-border hover:border-primary"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services[activeTab as keyof typeof services].map((service, idx) => (
              <Card key={idx} className="card-premium animate-scale-in">
                <div className="space-y-3">
                  <h3 className="font-serif font-semibold text-lg text-foreground">
                    {service.title}
                  </h3>
                  {(service as any).description && (
                    <p className="text-sm text-muted-foreground">
                      {(service as any).description}
                    </p>
                  )}
                  <div className="flex justify-between items-center pt-3 border-t border-border">
                    <span className="text-sm text-muted-foreground">
                      {service.duration}
                    </span>
                    <span className="font-semibold text-primary">{service.price}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Avis Section */}
      <section id="avis" className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-premium">Avis de nos clients</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg font-semibold">4,9 / 5 (39 avis)</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card key={idx} className="card-premium animate-fade-in">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-foreground italic">"{review.text}"</p>
                  <p className="text-sm font-semibold text-primary">
                    – {review.author}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborateurs Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-premium">Notre équipe</h2>
            <p className="text-subtitle mt-4">
              Des professionnels passionnés à votre service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collaborators.map((collab, idx) => {
              const imageSrc = idx === 0 ? "/damien-portrait.jpg" : "/laetitia-portrait.jpg";
              return (
              <Card key={idx} className="card-premium animate-fade-in-up">
                <div className="rounded-lg h-64 mb-6 overflow-hidden">
                  <img
                    src={imageSrc}
                    alt={collab.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  {collab.name}
                </h3>
                <p className="text-sm text-primary font-medium mt-2">{collab.role}</p>
                <p className="text-sm text-muted-foreground mt-3">
                  {collab.description}
                </p>
              </Card>
            );
            })}
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="contact" className="section-padding bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <h2 className="text-premium">Nous contacter</h2>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Téléphone</p>
                    <a
                      href={`tel:${SALON_INFO.phone}`}
                      className="text-primary hover:underline"
                    >
                      {SALON_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Adresse</p>
                    <p className="text-muted-foreground">{SALON_INFO.address}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Horaires</p>
                    <div className="text-sm text-muted-foreground space-y-1 mt-2">
                      <p>Lun - Ven: {SALON_INFO.hours.monday}</p>
                      <p>Samedi: {SALON_INFO.hours.saturday}</p>
                      <p>Dimanche: {SALON_INFO.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={SALON_INFO.links.planity}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Réserver sur Planity
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="bg-secondary rounded-lg h-96 animate-slide-in-right flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-4 opacity-30" />
                <p className="text-sm">Google Maps</p>
                <p className="text-xs mt-2">{SALON_INFO.address}</p>
                <p className="text-xs mt-1 text-xs">Intégration en cours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif font-semibold mb-4">Coiffure Damien</h3>
              <p className="text-sm opacity-80">{SALON_INFO.address}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Horaires</h4>
              <div className="text-sm opacity-80 space-y-1">
                <p>Lun - Ven: {SALON_INFO.hours.monday}</p>
                <p>Sam: {SALON_INFO.hours.saturday}</p>
                <p>Dim: {SALON_INFO.hours.sunday}</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="text-sm opacity-80 space-y-1">
                <a href={`tel:${SALON_INFO.phone}`} className="hover:opacity-100">
                  {SALON_INFO.phone}
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Réseaux</h4>
              <div className="flex gap-4">
                <a
                  href={SALON_INFO.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 opacity-80"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={SALON_INFO.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 opacity-80"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            <p>© 2024 Coiffure Damien. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button */}
      <a
        href={SALON_INFO.links.planity}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 btn-primary shadow-lg hover:shadow-xl z-40 animate-fade-in"
      >
        Prendre RDV
      </a>
    </div>
  );
}
