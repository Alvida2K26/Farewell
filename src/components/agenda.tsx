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
import { cn } from '@/lib/utils';

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

const AgendaCard = ({ item, index, animationDirection }: { item: typeof agendaItems[0], index: number, animationDirection: 'left' | 'right' }) => (
    <div
      className={cn(
        'w-full animate-in fade-in-0 duration-700',
        'max-w-md',
        animationDirection === 'left' ? 'slide-in-from-left-24' : 'slide-in-from-right-24',
        index % 2 !== 0 && 'text-right'
      )}
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'backwards' }}
    >
      <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
        <CardHeader className={cn(index % 2 !== 0 && 'items-end')}>
          <p className="text-sm font-bold text-muted-foreground">{item.time}</p>
          <CardTitle className="font-headline text-lg md:text-xl text-accent leading-tight">{item.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">{item.description}</p>
        </CardContent>
      </Card>
    </div>
  );

export function Agenda() {
  return (
    <div className="container mx-auto px-4 py-12">
    <div className="relative">
      <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>

      <div className="space-y-12">
        {agendaItems.map((item, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center"
          >
            {index % 2 === 0 ? (
                <>
                    <div className="w-5/12"></div>
                    <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary border-4 border-background text-primary-foreground mx-4">
                        <item.icon className="h-5 w-5" />
                    </div>
                    <div className={'flex w-5/12 justify-start'}>
                        <AgendaCard item={item} index={index} animationDirection="left" />
                    </div>
                </>
            ) : (
                <>
                    <div className={'flex w-5/12 justify-end'}>
                        <AgendaCard item={item} index={index} animationDirection="right" />
                    </div>
                     <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary border-4 border-background text-primary-foreground mx-4">
                        <item.icon className="h-5 w-5" />
                    </div>
                    <div className="w-5/12"></div>
                </>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}
