'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UtensilsCrossed, Wheat, Drumstick, Cake, Leaf, Coffee, Cookie } from 'lucide-react';
import { Countdown } from './countdown';
import { useMenu } from '@/context/menu-context';

const menu = {
  morningTreats: ['Mocktail - seniors', 'Fruit juice'],
  lunch: {
    mainCourseVeg: ['Paneer Curry', 'Cashew Tomato Curry', 'Cabbage Fry'],
    mainCourseNonVeg: ['Chicken Curry', 'Fish Fry'],
    riceAndBreads: ['Naan', 'Baby Corn Biryani', 'White Rice & Sambar'],
    accompaniments: ['Chips', 'Pickle', 'Curd'],
    desserts: ['Gulab Jamun', 'Ice Cream'],
  },
  eveningSnacks: ['Cutlet', 'Swiss roll', 'Badam milk'],
};

export function FoodMenu() {
  const revealDate = new Date('2026-04-13T00:00:00');
  const [isClient, setIsClient] = useState(false);
  const { showMenu, revealMenu } = useMenu();

  useEffect(() => {
    setIsClient(true);
    if (new Date() >= revealDate) {
      revealMenu();
    } else {
      const timer = setInterval(() => {
        if (new Date() >= revealDate) {
          revealMenu();
          clearInterval(timer);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [revealDate, revealMenu]);

  if (!isClient) {
    return (
      <div className="text-center p-8 rounded-lg border-2 border-dashed border-accent/30 max-w-2xl mx-auto animate-pulse">
        <h3 className="font-headline text-2xl md:text-3xl font-bold text-accent mb-4">
          Loading Menu...
        </h3>
      </div>
    );
  }

  if (!showMenu) {
    return (
      <div className="text-center p-8 rounded-lg border-2 border-dashed border-accent/30 max-w-2xl mx-auto">
        <h3 className="font-headline text-2xl md:text-3xl font-bold text-accent mb-4">
          The Menu is a Surprise!
        </h3>
        <p className="text-muted-foreground mb-6">
          Our gastronomic journey will be revealed soon. Countdown to the big reveal:
        </p>
        <Countdown targetDate={revealDate} />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline text-accent"><Coffee/> Morning Treats</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            {menu.morningTreats.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline text-accent"><UtensilsCrossed/> Lunch</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <h4 className="font-semibold text-lg flex items-center gap-2 mb-2 text-accent/90"><Leaf/> Main Course (Veg)</h4>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              {menu.lunch.mainCourseVeg.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg flex items-center gap-2 mb-2 text-accent/90"><Drumstick/> Main Course (Non-Veg)</h4>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              {menu.lunch.mainCourseNonVeg.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg flex items-center gap-2 mb-2 text-accent/90"><Wheat/> Rice & Breads</h4>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              {menu.lunch.riceAndBreads.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg flex items-center gap-2 mb-2 text-accent/90"><UtensilsCrossed/> Accompaniments</h4>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              {menu.lunch.accompaniments.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-semibold text-lg flex items-center gap-2 mb-2 text-accent/90"><Cake/> Desserts</h4>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              {menu.lunch.desserts.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline text-accent"><Cookie/> Evening Snacks</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            {menu.eveningSnacks.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
