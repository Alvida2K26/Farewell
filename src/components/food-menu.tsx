'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UtensilsCrossed, Wheat, Drumstick, Cake, Leaf } from 'lucide-react';
import { Countdown } from './countdown';
import { useMenu } from '@/context/menu-context';

const menu = {
  mainCourseVeg: ['Paneer Curry', 'Cashew Tomato Curry', 'Cabbage Fry'],
  mainCourseNonVeg: ['Chicken Curry', 'Fish Fry'],
  riceAndBreads: ['Naan', 'Baby Corn Biryani', 'White Rice & Sambar'],
  accompaniments: ['Chips', 'Pickle', 'Curd'],
  desserts: ['Gulab Jamun', 'Ice Cream'],
};

export function FoodMenu() {
  const revealDate = new Date('2026-04-13T00:00:00');
  const [isClient, setIsClient] = useState(false);
  const { showMenu, revealMenu } = useMenu();

  useEffect(() => {
    setIsClient(true);
    // This effect will run only on the client.
    // We can safely check the date here.
    if (new Date() >= revealDate) {
      revealMenu();
    } else {
      // If the menu is not yet to be shown, set up a timer to check again.
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
    // To avoid hydration mismatch, render a placeholder or nothing on the server.
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
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline text-accent"><Leaf/> Main Course (Veg)</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            {menu.mainCourseVeg.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline text-accent"><Drumstick/> Main Course (Non-Veg)</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            {menu.mainCourseNonVeg.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline text-accent"><Wheat/> Rice & Breads</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            {menu.riceAndBreads.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </CardContent>
      </Card>
       <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline text-accent"><UtensilsCrossed/> Accompaniments</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            {menu.accompaniments.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </CardContent>
      </Card>
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline text-accent"><Cake/> Desserts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            {menu.desserts.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
