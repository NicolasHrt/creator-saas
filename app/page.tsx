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
              Transformez votre Audience en <span className="text-primary">5 000 €/mois</span> de
              Revenus Récurrents
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Votre solution SaaS clé en main en 30 jours grâce à un développement accéléré par l'IA
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
          </div>
        </div>
      </div>
    </>
  );
}
