'use client';

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
