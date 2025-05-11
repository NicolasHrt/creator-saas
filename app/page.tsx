import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Navbar } from '@/components/Navbar';
import { RevenueCalculator } from './components/revenue-calculator';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Transformez votre Audience en <span className="text-primary">5 000 €/mois</span> de
              Revenus Récurrents
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Votre solution SaaS clé en main en 30 jours grâce au développement accéléré par l'IA
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <Button size="lg">Créer votre solution SaaS</Button>
            </div>

            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8">Découvrez votre potentiel de revenus</h2>
              <RevenueCalculator
                initialSubscriberCount={100000}
                initialConversionRate={1}
                initialSubscriptionPrice={50}
              />
              <p className="text-sm text-muted-foreground mt-4">
                Ajustez les valeurs pour voir votre potentiel de revenus
              </p>
            </div>

            <div className="mt-20 max-w-3xl mx-auto">
              <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Vous avez déjà fait le plus dur : construire une audience fidèle
                </h3>
                <div className="space-y-6 text-left">
                  <p className="text-lg text-muted-foreground">
                    La partie la plus difficile est derrière vous. Vous avez réussi à :
                  </p>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Construire une communauté qui vous fait confiance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Créer du contenu qui résonne avec votre audience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Développer une relation authentique avec vos abonnés</span>
                    </li>
                  </ul>
                  <p className="text-lg text-muted-foreground mt-6">
                    Maintenant, il ne vous reste plus qu'à transformer cette confiance en revenus
                    récurrents. Nous nous occupons de tout le développement technique pendant que
                    vous continuez à faire ce que vous savez le mieux faire : créer du contenu et
                    engager votre communauté.
                  </p>
                  <div className="mt-8">
                    <Button size="lg" className="w-full md:w-auto">
                      Commencer maintenant
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
