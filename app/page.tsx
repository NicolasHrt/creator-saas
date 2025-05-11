import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Navbar } from '@/components/Navbar';
import { RevenueCalculator } from './components/revenue-calculator';
import {
  TrendingUp,
  Users,
  DollarSign,
  Calendar,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

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

            <div className="mt-20 max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-destructive/5 rounded-3xl transform -rotate-1"></div>
                <div className="relative bg-destructive/5 rounded-3xl p-8 md:p-12">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-destructive/10 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-destructive/10 rounded-full blur-2xl"></div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 relative">
                    Le problème des influenceurs : la dépendance aux sponsors
                  </h3>
                  <div className="space-y-6 text-left">
                    <p className="text-lg text-muted-foreground">
                      Vous passez des heures à créer du contenu de qualité, à construire une
                      communauté fidèle, mais votre revenu dépend toujours des décisions des
                      marques...
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-background/50 p-6 rounded-xl border border-destructive/20">
                        <h4 className="text-xl font-bold mb-4 text-destructive">
                          La réalité actuelle
                        </h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <AlertCircle className="w-5 h-5 text-destructive mt-0.5" />
                            <span>Revenus imprévisibles et instables</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="w-5 h-5 text-destructive mt-0.5" />
                            <span>Dépendance aux budgets marketing des marques</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="w-5 h-5 text-destructive mt-0.5" />
                            <span>Négociations constantes pour chaque collaboration</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="w-5 h-5 text-destructive mt-0.5" />
                            <span>Pas de revenus pendant les périodes creuses</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-background/50 p-6 rounded-xl border border-primary/20">
                        <h4 className="text-xl font-bold mb-4 text-primary">La solution</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                            <span>Votre propre produit à vendre</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
                            <span>Revenus récurrents et prévisibles</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                            <span>Indépendance financière</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                            <span>Contrôle total sur votre business</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-background/50 rounded-xl border border-destructive/20">
                      <h4 className="text-xl font-bold mb-4">Le moment est venu de changer</h4>
                      <p className="text-muted-foreground">
                        Vous avez déjà la chose la plus précieuse : une audience qui vous fait
                        confiance. Ne laissez pas cette confiance se transformer uniquement en
                        revenus pour les marques. Créez votre propre source de revenus récurrents.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 max-w-4xl mx-auto">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5"></div>
                <div className="relative p-8 md:p-12">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"></div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">
                    Qu'est-ce qu'un SaaS et pourquoi c'est parfait pour vous ?
                  </h3>
                  <div className="space-y-6 text-left">
                    <p className="text-lg text-muted-foreground">
                      Un SaaS (Software as a Service) est comme votre abonnement Netflix ou Spotify,
                      mais pour votre expertise. C'est une façon moderne de partager votre
                      savoir-faire avec votre communauté.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-background p-6 rounded-xl">
                        <h4 className="text-xl font-bold mb-4">Avantages pour vous</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
                            <span>Revenus récurrents chaque mois</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                            <span>Pas de livraison physique</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                            <span>Automatisation totale</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Users className="w-5 h-5 text-primary mt-0.5" />
                            <span>Scalable à l'infini</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-background p-6 rounded-xl">
                        <h4 className="text-xl font-bold mb-4">Avantages pour votre audience</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Accès instantané à votre expertise</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Mise à jour régulière du contenu</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Support communautaire</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Investissement rentabilisé</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-primary/10 rounded-xl">
                      <h4 className="text-xl font-bold mb-4">Exemple concret</h4>
                      <p className="text-muted-foreground">
                        Si vous êtes un influenceur fitness, votre SaaS pourrait être une
                        application qui :
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">→</span>
                          <span>Génère des programmes d'entraînement personnalisés</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">→</span>
                          <span>Suivi les progrès de vos abonnés</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">→</span>
                          <span>Offre des recettes et conseils nutritionnels</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl transform rotate-1"></div>
                <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 relative">
                    Pourquoi c'est le moment idéal pour lancer votre SaaS
                  </h3>
                  <div className="space-y-6 text-left">
                    <p className="text-lg text-muted-foreground">
                      L'IA a révolutionné le développement logiciel, rendant possible en 30 jours ce
                      qui prenait autrefois 6 mois. Mais ne vous y trompez pas : derrière chaque
                      ligne de code, il y a toujours un expert qui veille à la qualité.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                      <div className="bg-background/80 p-6 rounded-xl border border-primary/20">
                        <div className="text-primary font-bold text-2xl mb-2">1</div>
                        <h4 className="text-xl font-bold mb-4">Analyse & Design</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Users className="w-4 h-4 text-primary mt-0.5" />
                            <span>Étude de votre audience</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                            <span>Design de l'interface</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                            <span>Architecture technique</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-background/80 p-6 rounded-xl border border-primary/20">
                        <div className="text-primary font-bold text-2xl mb-2">2</div>
                        <h4 className="text-xl font-bold mb-4">Développement IA</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Sparkles className="w-4 h-4 text-primary mt-0.5" />
                            <span>Génération de code optimisé</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                            <span>Tests automatisés</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                            <span>Intégration continue</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-background/80 p-6 rounded-xl border border-primary/20">
                        <div className="text-primary font-bold text-2xl mb-2">3</div>
                        <h4 className="text-xl font-bold mb-4">Expertise Humaine</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Users className="w-4 h-4 text-primary mt-0.5" />
                            <span>Review par des experts</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                            <span>Optimisations manuelles</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                            <span>Tests de performance</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 grid md:grid-cols-2 gap-6">
                      <div className="p-6 bg-background/80 rounded-xl border border-primary/20">
                        <h4 className="text-xl font-bold mb-4">Avantages uniques</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <DollarSign className="w-5 h-5 text-primary mt-0.5" />
                            <span>Coûts divisés par 5</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Calendar className="w-5 h-5 text-primary mt-0.5" />
                            <span>Délai réduit de 80%</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                            <span>Qualité professionnelle garantie</span>
                          </li>
                        </ul>
                      </div>

                      <div className="p-6 bg-background/80 rounded-xl border border-primary/20">
                        <h4 className="text-xl font-bold mb-4">Pourquoi maintenant ?</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                            <span>Technologie mature et fiable</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
                            <span>Coûts historiquement bas</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                            <span>Avantage concurrentiel</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-background/80 rounded-xl border border-primary/20">
                      <h4 className="text-xl font-bold mb-4">La promesse</h4>
                      <p className="text-muted-foreground">
                        Nous combinons la puissance de l'IA avec l'expertise humaine pour créer
                        votre SaaS en 30 jours. Vous obtenez une application professionnelle,
                        performante et évolutive, à un coût accessible. C'est le moment idéal pour
                        transformer votre audience en business durable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 max-w-4xl mx-auto">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5"></div>
                <div className="relative p-8 md:p-12">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"></div>
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

            <div className="mt-20 max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl transform -rotate-1"></div>
                <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">
                      Prêt à transformer votre audience en business durable ?
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8">
                      Lancez votre SaaS en 30 jours et commencez à générer des revenus récurrents
                    </p>
                    <Button size="lg" className="text-lg px-8 py-6">
                      Créer votre solution SaaS
                      <ArrowRight className="ml-2 w-5 h-5" />
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
