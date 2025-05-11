import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Transformez votre Audience en Revenus Récurents
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Créez votre propre SaaS en 30 jours et générez jusqu'à 20 000€/mois sans écrire une
              seule ligne de code
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <Button size="lg">Démarrer Maintenant</Button>
              <Button size="lg" variant="outline">
                En Savoir Plus
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-card-foreground">🚀 MVP en 30 Jours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sans écrire une seule ligne de code ni recruter de développeur
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-card-foreground">
                    💰 1 000€ - 20 000€/mois
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Revenus récurrents via des abonnements à votre SaaS
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-card-foreground">
                    🛡️ Garantie Satisfait
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Remboursement partiel si le cahier des charges n'est pas respecté
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
