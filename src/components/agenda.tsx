'use client';

import {
  Flower2,
  Flame,
  Mic,
  Music,
  Users,
  Utensils,
  Crown,
  Trophy,
  Award,
  Film,
  Cake,
  Handshake,
  PartyPopper,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const agendaItems = [
  { time: '10:00 AM', title: 'Arrival & Welcome', icon: Flower2, description: 'Welcome drinks are served as we greet our seniors with souvenirs or flowers.' },
  { time: '10:30 AM', title: 'Inauguration', icon: Flame, description: 'The lighting of the lamp, a prayer, and the formal welcome address.' },
  { time: '11:00 AM', title: 'Memory Lane', icon: Mic, description: 'Speech sessions, sharing experiences and memories.' },
  { time: '11:30 AM', title: 'Classical Dances', icon: Music, description: 'Graceful and mesmerizing classical dance performances.' },
  { time: '12:00 PM', title: 'Junior Showcase', icon: Users, description: 'Group dances, singing, and instrumental performances by juniors.' },
  { time: '1:00 PM', title: 'Lunch', icon: Utensils, description: 'Enjoy a delicious lunch and refreshments.' },
  { time: '2:00 PM', title: 'Mr. & Ms. Farewell', icon: Crown, description: 'The start of the contest to find our Mr. & Ms. Farewell.' },
  { time: '2:30 PM', title: 'Ramp Walk & Final Round', icon: Trophy, description: 'Contestants grace the ramp and face the final round.' },
  { time: '3:00 PM', title: 'Felicitation', icon: Award, description: 'Distribution of titles, mementos, and certificates.' },
  { time: '3:30 PM', title: 'Nostalgic Journey', icon: Film, description: 'An AV presentation to relive cherished memories.' },
  { time: '4:00 PM', title: 'Cake Cutting', icon: Cake, description: 'The ceremonial cake cutting to celebrate the occasion.' },
  { time: '4:15 PM', title: 'Vote of Thanks', icon: Handshake, description: 'Expressing gratitude to everyone involved.' },
  { time: '4:30 PM - 5:00 PM', title: 'DJ Session & Closing', icon: PartyPopper, description: 'DJ session and closing celebrations.' },
];

export function Agenda() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {agendaItems.map((item, index) => (
        <Card key={index} className="bg-card border-border/60 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
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
      ))}
    </div>
  );
}
