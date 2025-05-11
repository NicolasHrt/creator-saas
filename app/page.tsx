'use client';

import { Button } from '@/components/ui/button';
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
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

// Variants pour les animations
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const heroSection = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const heroContent = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const processCard = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.2,
    },
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-transparent pt-16">
        <div className="container mx-auto px-4 mt-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={heroSection}
              className="space-y-6"
            >
              <motion.h1
                variants={heroContent}
                className="text-5xl md:text-6xl font-bold mb-6 text-foreground"
              >
                Transformez votre Audience en{' '}
                <span className="text-primary">5&nbsp;000&nbsp;€/mois</span> de Revenus Récurrents
              </motion.h1>

              <motion.p
                variants={heroContent}
                className="text-xl md:text-2xl text-muted-foreground mb-8"
              >
                Votre solution SaaS clé en main en 30 jours grâce à un développement accéléré par
                l'IA
              </motion.p>

              <motion.div
                variants={heroContent}
                className="flex flex-col md:flex-row gap-4 justify-center mb-12"
              >
                <Button size="lg">Créer votre solution SaaS</Button>
              </motion.div>

              <motion.div
                variants={heroContent}
                className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-12"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span>
                  Garantie de remboursement si vous n'atteignez pas 100 utilisateurs dans le premier
                  mois
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4, ease: 'easeOut' }}
              className="mt-16"
            >
              <h2 className="text-3xl font-bold mb-8">Découvrez votre potentiel de revenus</h2>
              <RevenueCalculator
                initialSubscriberCount={10000}
                initialConversionRate={1}
                initialSubscriptionPrice={50}
              />
              <p className="text-sm text-muted-foreground mt-4">
                Ajustez les valeurs pour voir votre potentiel de revenus
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="mt-20 max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="relative">
                <div className="absolute inset-0 bg-destructive/5 rounded-3xl transform -rotate-1"></div>
                <div className="relative bg-destructive/5 rounded-3xl p-8 md:p-12">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute -top-4 -left-4 w-24 h-24 bg-destructive/10 rounded-full blur-2xl"
                  ></motion.div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute -bottom-4 -right-4 w-32 h-32 bg-destructive/10 rounded-full blur-2xl"
                  ></motion.div>
                  <motion.h3
                    variants={fadeInUp}
                    className="text-2xl md:text-3xl font-bold mb-6 relative"
                  >
                    Le problème des influenceurs : la dépendance aux sponsors
                  </motion.h3>
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
                            <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                            <span>Revenus imprévisibles et instables</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                            <span>Dépendance aux budgets marketing des marques</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                            <span>Négociations constantes pour chaque collaboration</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                            <span>Pas de revenus pendant les périodes creuses</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-background/50 p-6 rounded-xl border border-primary/20">
                        <h4 className="text-xl font-bold mb-4 text-primary">La solution</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>Votre propre produit à vendre</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>Revenus récurrents et prévisibles</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>Indépendance financière</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
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
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="mt-20 max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5"></div>
                <div className="relative p-8 md:p-12">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"></div>
                  <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-bold mb-6">
                    Qu'est-ce qu'un SaaS et pourquoi c'est parfait pour&nbsp;vous&nbsp;?
                  </motion.h3>
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
                            <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>Revenus récurrents chaque mois</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>Pas de livraison physique</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>Automatisation totale</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Users className="w-5 h-5 text-primary shrink-0 mt-0.5" />
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
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="mt-20 max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl transform rotate-1"></div>
                <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12">
                  <motion.h3
                    variants={fadeInUp}
                    className="text-2xl md:text-3xl font-bold mb-6 relative"
                  >
                    Pourquoi c'est le moment idéal pour lancer votre SaaS
                  </motion.h3>
                  <div className="space-y-6 text-left">
                    <p className="text-lg text-muted-foreground">
                      L'IA a révolutionné le développement logiciel, rendant possible en 30 jours ce
                      qui prenait autrefois 6 mois. Mais ne vous y trompez pas : derrière chaque
                      ligne de code, il y a toujours un expert qui veille à la qualité.
                    </p>

                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-100px' }}
                      variants={staggerContainer}
                      className="grid md:grid-cols-3 gap-6 mt-8"
                    >
                      <motion.div
                        variants={processCard}
                        whileHover="hover"
                        className="bg-background/80 p-6 rounded-xl border border-primary/20"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: 'spring' }}
                          className="text-primary font-bold text-2xl mb-2"
                        >
                          1
                        </motion.div>
                        <h4 className="text-xl font-bold mb-4">Analyse & Design</h4>
                        <ul className="space-y-2 text-sm">
                          <motion.li variants={fadeInUp} className="flex items-start gap-2">
                            <Users className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>Étude de votre audience</span>
                          </motion.li>
                          <motion.li variants={fadeInUp} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>Design de l'interface</span>
                          </motion.li>
                          <motion.li variants={fadeInUp} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>Architecture technique</span>
                          </motion.li>
                        </ul>
                      </motion.div>

                      <motion.div
                        variants={processCard}
                        whileHover="hover"
                        className="bg-background/80 p-6 rounded-xl border border-primary/20"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3, type: 'spring' }}
                          className="text-primary font-bold text-2xl mb-2"
                        >
                          2
                        </motion.div>
                        <h4 className="text-xl font-bold mb-4">Développement IA</h4>
                        <ul className="space-y-2 text-sm">
                          <motion.li variants={fadeInUp} className="flex items-start gap-2">
                            <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>Génération de code optimisé</span>
                          </motion.li>
                          <motion.li variants={fadeInUp} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>Tests automatisés</span>
                          </motion.li>
                          <motion.li variants={fadeInUp} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>Intégration continue</span>
                          </motion.li>
                        </ul>
                      </motion.div>

                      <motion.div
                        variants={processCard}
                        whileHover="hover"
                        className="bg-background/80 p-6 rounded-xl border border-primary/20"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.4, type: 'spring' }}
                          className="text-primary font-bold text-2xl mb-2"
                        >
                          3
                        </motion.div>
                        <h4 className="text-xl font-bold mb-4">Expertise Humaine</h4>
                        <ul className="space-y-2 text-sm">
                          <motion.li variants={fadeInUp} className="flex items-start gap-2">
                            <Users className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>Review par des experts</span>
                          </motion.li>
                          <motion.li variants={fadeInUp} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>Optimisations manuelles</span>
                          </motion.li>
                          <motion.li variants={fadeInUp} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>Tests de performance</span>
                          </motion.li>
                        </ul>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-100px' }}
                      variants={staggerContainer}
                      className="mt-8 grid md:grid-cols-2 gap-6"
                    >
                      <motion.div
                        variants={processCard}
                        whileHover="hover"
                        className="p-6 bg-background/80 rounded-xl border border-primary/20"
                      >
                        <h4 className="text-xl font-bold mb-4">Avantages uniques</h4>
                        <ul className="space-y-3">
                          <motion.li variants={fadeInUp} className="flex items-start gap-2">
                            <DollarSign className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>Coûts divisés par 5</span>
                          </motion.li>
                          <motion.li variants={fadeInUp} className="flex items-start gap-2">
                            <Calendar className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>Délai réduit de 80%</span>
                          </motion.li>
                          <motion.li variants={fadeInUp} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>Qualité professionnelle garantie</span>
                          </motion.li>
                        </ul>
                      </motion.div>

                      <motion.div
                        variants={processCard}
                        whileHover="hover"
                        className="p-6 bg-background/80 rounded-xl border border-primary/20"
                      >
                        <h4 className="text-xl font-bold mb-4">Pourquoi maintenant ?</h4>
                        <ul className="space-y-3">
                          <motion.li variants={fadeInUp} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                            <span>Technologie mature et fiable</span>
                          </motion.li>
                          <motion.li variants={fadeInUp} className="flex items-start gap-2">
                            <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
                            <span>Coûts historiquement bas</span>
                          </motion.li>
                          <motion.li variants={fadeInUp} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                            <span>Avantage concurrentiel</span>
                          </motion.li>
                        </ul>
                      </motion.div>
                    </motion.div>

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
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="mt-20 max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5"></div>
                <div className="relative p-8 md:p-12">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"></div>
                  <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-bold mb-6">
                    Vous avez déjà fait le plus dur : construire une audience&nbsp;fidèle
                  </motion.h3>
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
              </motion.div>
            </motion.div>

            {/* Section Témoignages */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="mt-20 max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="relative">
                <div className="absolute inset-0 bg-primary/5 rounded-3xl transform -rotate-1"></div>
                <div className="relative bg-primary/5 rounded-3xl p-8 md:p-12">
                  <motion.h3
                    variants={fadeInUp}
                    className="text-2xl md:text-3xl font-bold mb-8 text-center"
                  >
                    Ce que disent nos clients
                  </motion.h3>
                  <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
                    <motion.div
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02 }}
                      className="bg-background/80 p-6 rounded-xl border border-primary/20"
                    >
                      <a
                        href="https://twitter.com/victortimsit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mb-4 group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden transition-opacity group-hover:opacity-80">
                            <img
                              src="https://pbs.twimg.com/profile_images/1867204249030991872/ubUdcFWb_400x400.jpg"
                              alt="Victor Timsit"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex flex-col text-left">
                            <h4 className="font-bold leading-tight">Victor Timsit</h4>
                            <p className="text-sm text-muted-foreground leading-tight">
                              Klap.app Founder
                            </p>
                          </div>
                        </div>
                      </a>
                      <p className="text-muted-foreground mb-4">
                        "Très content du travail, rapide et quali on recommande :)"
                      </p>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a href="https://klap.app" target="_blank" rel="noopener noreferrer">
                          Voir Klap.app
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </motion.div>

                    <motion.div
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02 }}
                      className="bg-background/80 p-6 rounded-xl border border-primary/20"
                    >
                      <a
                        href="https://x.com/benjamincode"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mb-4 group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden transition-opacity group-hover:opacity-80">
                            <img
                              src="https://pbs.twimg.com/profile_images/1607353032420769793/I8qQSUfQ_400x400.jpg"
                              alt="Benjamin Debon"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex flex-col text-left">
                            <h4 className="font-bold leading-tight">Benjamin Debon</h4>
                            <p className="text-sm text-muted-foreground leading-tight">
                              YouTuber / Meetsponsors Founder
                            </p>
                          </div>
                        </div>
                      </a>
                      <p className="text-muted-foreground mb-4">
                        "Très rapide à comprendre le projet et à livrer des fonctionnalités de
                        qualité. Excellent sens du détail et une bonne sensibilité UX. Je recommande
                        vivement !"
                      </p>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a
                          href="https://meetsponsors.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Voir Meetsponsors
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Section Tarification */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="mt-20 max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="relative">
                <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-1"></div>
                <div className="relative bg-primary/5 rounded-3xl p-8 md:p-12">
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">Votre SaaS en 2 Étapes</h3>
                    <p className="text-lg text-muted-foreground mb-8">
                      Commencez avec une solution complète, puis évoluez à votre rythme
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                      <div className="bg-background/80 p-8 rounded-xl border border-primary/20">
                        <div className="flex items-baseline justify-center gap-2 mb-2">
                          <span className="text-muted-foreground line-through text-lg">5 000€</span>
                          <div className="text-primary font-bold text-4xl">3 999€</div>
                        </div>
                        <div className="text-sm text-primary font-medium text-center mb-4">
                          Économisez 1 001€
                        </div>
                        <h4 className="text-xl font-bold mb-4">Votre SaaS de Base</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Une solution complète et fonctionnelle dès le départ
                        </p>
                        <ul className="space-y-4 text-left">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>Développement sur mesure de votre plateforme</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>Interface personnalisée à votre image</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>Hébergement et mise en ligne inclus</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>Formation complète à l'utilisation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>Support technique initial</span>
                          </li>
                        </ul>
                        <div className="mt-6 pt-6 border-t border-primary/20">
                          <div className="flex items-baseline justify-center gap-2 mb-2">
                            <span className="text-muted-foreground line-through text-lg">
                              2 500€/mois
                            </span>
                            <div className="text-primary font-bold text-2xl">1 999€/mois</div>
                          </div>
                          <div className="text-sm text-primary font-medium text-center mb-4">
                            Économisez 501€ par mois
                          </div>
                          <h5 className="text-lg font-bold mb-2">Pour Évoluer</h5>
                          <p className="text-sm text-muted-foreground mb-4">
                            Une fois votre SaaS lancé, continuez à l'améliorer
                          </p>
                          <ul className="space-y-2 text-left text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>Nouvelles fonctionnalités chaque mois</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>Support prioritaire 24/7</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>Optimisations continues</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-background/80 p-8 rounded-xl border border-primary/20">
                        <div className="text-primary font-bold text-4xl mb-2">Garantie</div>
                        <h4 className="text-xl font-bold mb-4">100 Utilisateurs ou Remboursé</h4>
                        <div className="bg-primary/5 p-4 rounded-lg mb-4">
                          <p className="text-sm text-primary font-medium">
                            Nous sommes tellement confiants dans notre solution que nous vous
                            remboursons intégralement si vous n'atteignez pas 100 utilisateurs dans
                            le premier mois
                          </p>
                        </div>
                        <ul className="space-y-4 text-left">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>30 jours pour atteindre votre objectif</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>Accompagnement personnalisé quotidien</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>Remboursement total sans condition</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>Processus de remboursement simple et rapide</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-8">
                      <Button size="lg" className="text-lg px-8 py-6">
                        Lancer votre SaaS
                        <ArrowRight className="ml-2 w-5 h-5 shrink-0" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Footer */}
            <footer>
              <div className="container mx-auto px-4 py-12">
                <div className="mt-12 pt-8 border-t border-border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-bold text-lg">Contact</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>contact@creator-saas.com</li>
                        <li>+33 1 23 45 67 89</li>
                        <li>Paris, France</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-bold text-lg">Newsletter</h4>
                      <p className="text-muted-foreground text-sm">
                        Restez informé des dernières actualités et conseils.
                      </p>
                      <div className="flex gap-2">
                        <Input type="email" placeholder="Votre email" className="flex-1" />
                        <Button size="sm">S'inscrire</Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                  <p>© {new Date().getFullYear()} Creator SaaS. Tous droits réservés.</p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
