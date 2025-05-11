'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState, ChangeEvent } from 'react';

interface RevenueCalculatorProps {
  initialSubscriberCount?: number;
  initialConversionRate?: number;
  initialSubscriptionPrice?: number;
}

export function RevenueCalculator({
  initialSubscriberCount = 100000,
  initialConversionRate = 1,
  initialSubscriptionPrice = 50,
}: RevenueCalculatorProps) {
  const [subscriberCount, setSubscriberCount] = useState(initialSubscriberCount);
  const [conversionRate, setConversionRate] = useState(initialConversionRate);
  const [subscriptionPrice, setSubscriptionPrice] = useState(initialSubscriptionPrice);

  const convertedSubscribers = Math.floor((subscriberCount || 0) * ((conversionRate || 0) / 100));
  const monthlyRevenue = convertedSubscribers * (subscriptionPrice || 0);
  const yearlyRevenue = monthlyRevenue * 12;

  const handleSubscriberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? '' : Number(e.target.value);
    setSubscriberCount(value as number);
  };

  const handleConversionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? '' : Number(e.target.value);
    setConversionRate(value as number);
  };

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? '' : Number(e.target.value);
    setSubscriptionPrice(value as number);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Calculateur de Revenus</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="subscribers">Nombre d'abonnés</Label>
              <Input
                id="subscribers"
                type="number"
                value={subscriberCount || ''}
                onChange={handleSubscriberChange}
                min="0"
                placeholder="0"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="conversion">Taux de conversion (%)</Label>
              <Input
                id="conversion"
                type="number"
                value={conversionRate || ''}
                onChange={handleConversionChange}
                min="0"
                max="100"
                step="0.1"
                placeholder="0"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Prix de l'abonnement (€)</Label>
              <Input
                id="price"
                type="number"
                value={subscriptionPrice || ''}
                onChange={handlePriceChange}
                min="0"
                placeholder="0"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">Abonnés convertis</p>
              <p className="text-2xl font-bold">{convertedSubscribers.toLocaleString()}</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">Revenu mensuel</p>
              <p className="text-2xl font-bold">{monthlyRevenue.toLocaleString()}€</p>
            </div>
          </div>

          <div className="p-4 bg-primary/10 rounded-lg">
            <p className="text-sm text-muted-foreground">Revenu annuel</p>
            <p className="text-2xl font-bold text-primary">{yearlyRevenue.toLocaleString()}€</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
