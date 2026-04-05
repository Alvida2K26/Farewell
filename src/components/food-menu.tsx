'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UtensilsCrossed, Soup, Salad, ChefHat, Cake } from 'lucide-react';

const menu = {
  appetizers: ['Crispy Spring Rolls', 'Chilli Paneer', 'Hara Bhara Kebab'],
  soups: ['Tomato Basil Soup', 'Hot & Sour Soup'],
  salads: ['Classic Caesar Salad', 'Greek Salad'],
  mainCourse: ['Paneer Butter Masala', 'Dal Makhani', 'Vegetable Biryani', 'Assorted Breads'],
  desserts: ['Gulab Jamun with Ice Cream', 'Chocolate Lava Cake', 'Fresh Fruit Platter'],
};

export function FoodMenu() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const revealDate = new Date('2026-04-13T00:00:00Z');
    const now = new Date();
    if (now > revealDate) {
      setShowMenu(true);
    }
  }, []);

  if (!showMenu) {
    return (
      <Card className="max-w-4xl mx-auto text-center p-8 border-dashed border-accent/50 bg-accent/5">
        <CardHeader>
          <UtensilsCrossed className="w-16 h-16 mx-auto text-accent mb-4" />
          <CardTitle className="font-headline text-3xl text-accent">
            A Feast for the Ages
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-foreground/80 mb-4">
            Our curated menu is currently under wraps to build the excitement!
          </p>
          <p className="font-bold text-accent">
            Full menu will be revealed on April 13, 2026.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline text-accent"><ChefHat/> Appetizers</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            {menu.appetizers.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline text-accent"><Soup/> Soups</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            {menu.soups.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline text-accent"><Salad/> Salads</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            {menu.salads.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </CardContent>
      </Card>
      <Card className="md:col-span-2 lg:col-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline text-accent"><UtensilsCrossed/> Main Course</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            {menu.mainCourse.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </CardContent>
      </Card>
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline text-accent"><Cake/> Desserts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            {menu.desserts.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
