'use client';

import { 
  GlassWater, 
  Flower2, 
  Flame, 
  Mic, 
  Music, 
  Users, 
  Utensils, 
  Crown, 
  Award, 
  Film, 
  Cake, 
  Handshake,
  PartyPopper 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';


const agendaItems = [
  { time: '10:00 AM', title: 'Arrival & Welcome Drinks', icon: GlassWater, description: 'Check-in and get refreshed with a welcome drink.' },
  { time: '10:30 AM', title: 'Welcoming Seniors', icon: Flower2, description: 'A warm floral welcome for our esteemed seniors.' },
  { time: '11:00 AM', title: 'Inauguration Ceremony', icon: Flame, description: 'The formal start with the lighting of the lamp and a prayer.' },
  { time: '11:30 AM', title: 'Down Memory Lane', icon: Mic, description: 'Speeches and shared experiences from seniors and faculty.' },
  { time: '12:00 PM', title: 'Cultural Showcase', icon: Music, description: 'Mesmerizing classical dance performances.' },
  { time: '12:30 PM', title: 'Junior Performances', icon: Users, description: 'Energetic group dances, songs, and more from the juniors.' },
  { time: '1:00 PM', title: 'Lunch & Refreshments', icon: Utensils, description: 'Indulge in a delicious spread of culinary delights.' },
  { time: '2:00 PM', title: 'Mr. & Ms. Farewell', icon: Crown, description: 'The much-awaited contest begins with a ramp walk and talent rounds.' },
  { time: '2:45 PM', title: 'Felicitation', icon: Award, description: 'Distribution of titles, mementos, and certificates.' },
  { time: '3:15 PM', title: 'A Nostalgic Journey', icon: Film, description: 'An AV presentation to relive cherished moments.' },
  { time: '3:45 PM', title: 'Cake Cutting Ceremony', icon: Cake, description: 'A sweet moment to mark the occasion.' },
  { time: '4:00 PM', title: 'Vote of Thanks', icon: Handshake, description: 'Expressing gratitude to everyone who made the evening special.' },
  { time: '4:15 PM - 5:00 PM', title: 'DJ Session & Closing', icon: PartyPopper, description: 'Hit the dance floor and celebrate!' },
];

export function Agenda() {
  return (
    <div className="relative max-w-5xl mx-auto">
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {agendaItems.map((item, index) => (
            <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="bg-card border-border/60 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
                  <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground flex-shrink-0 mt-1">
                        <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <CardTitle className="font-headline text-xl text-accent leading-tight">{item.title}</CardTitle>
                      <p className="text-sm font-bold text-muted-foreground">{item.time}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 hidden sm:flex" />
        <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 hidden sm:flex" />
      </Carousel>
    </div>
  );
}
