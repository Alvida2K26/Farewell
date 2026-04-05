'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UtensilsCrossed, Wheat, Drumstick, Cake, Leaf } from 'lucide-react';

const menu = {
  mainCourseVeg: ['Paneer Curry', 'Cashew Tomato Curry', 'Cabbage Fry'],
  mainCourseNonVeg: ['Chicken Curry', 'Fish Fry'],
  riceAndBreads: ['Naan', 'Baby Corn Biryani', 'White Rice & Sambar'],
  accompaniments: ['Chips', 'Pickle', 'Curd'],
  desserts: ['Gulab Jamun', 'Ice Cream'],
};

export function FoodMenu() {
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
