'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UtensilsCrossed, Wheat, Drumstick, Cake, Leaf } from 'lucide-react';
import { Countdown } from './countdown';

const menu = {
  mainCourseVeg: ['Paneer Curry', 'Cashew Tomato Curry', 'Cabbage Fry'],
  mainCourseNonVeg: ['Chicken Curry', 'Fish Fry'],
  riceAndBreads: ['Naan', 'Baby Corn Biryani', 'White Rice & Sambar'],
  accompaniments: ['Chips', 'Pickle', 'Curd'],
  desserts: ['Gulab Jamun', 'Ice Cream'],
};

export function FoodMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // The menu should appear ON or AFTER April 13, 2026
    const menuRevealDate = new Date('2026-04-13T00:00:00');
    if (new Date() >= menuRevealDate) {
      setShowMenu(true);
    }
  }, []);

  if (!isClient) {
     return (
       <div className="flex justify-center items-center h-48">
         <div className="text-center text-lg text-muted-foreground p-8 rounded-lg border-2 border-dashed">
           Loading menu...
         </div>
       </div>
     );
  }

  if (!showMenu) {
    return (
      <div className="text-center text-lg text-muted-foreground p-8 rounded-lg border-2 border-dashed border-accent/30 max-w-3xl mx-auto bg-card/50">
        <p className="font-headline text-2xl text-accent mb-4">A Gastronomic Surprise Awaits!</p>
        <p>The full menu will be revealed here. The countdown is on!</p>
        <div className='mt-8 scale-75'>
            <Countdown targetDate={new Date('2026-04-13T00:00:00')} />
        </div>
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
