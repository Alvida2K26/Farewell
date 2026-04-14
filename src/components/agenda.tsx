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
  { time: '09:30 AM', title: 'THE PRELUDE: Tradition & Grace', icon: Flower2, description: 'The Prologue: Welcome Address & Grand Opening.' },
  { time: '09:40 AM', title: 'Divine Resonance', icon: Flame, description: 'Invocation Song & The Lighting of the Lamp.' },
  { time: '09:45 AM', title: 'Heritage in Motion', icon: Music, description: 'A Classical Dance Tribute to our roots.' },
  { time: '09:50 AM', title: 'The Handover', icon: Mic, description: 'Curtains up for the Cultural Department.' },
  { time: '10:00 AM', title: 'THE SYMPHONY: Rhythms & Wisdom', icon: Music, description: 'Beats of Joy: High-energy Choreography (Set I).' },
  { time: '10:30 AM', title: 'The Visionary’s Word', icon: Mic, description: 'Keynote Address by our Principal Mam.' },
  { time: '10:50 AM', title: 'Stepping into the Spotlight', icon: Users, description: 'Cultural Showcase (Set II).' },
  { time: '11:10 AM', title: 'Words of Guidance', icon: Mic, description: 'Wisdom Session with the Vice Principal.' },
  { time: '11:30 AM', title: 'The Senior Spotlight', icon: Mic, description: 'The Class of 2026 takes the mic for heart-to-heart reflections.' },
  { time: '12:00 PM', title: 'THE INTERMISSION: Culinary Delights', icon: Utensils, description: 'The Elite Banquet: Faculty & Senior Luncheon.' },
  { time: '12:30 PM', title: 'The Fellowship Feast', icon: Utensils, description: 'Grand Student Lunch.' },
  { time: '01:15 PM', title: 'THE CEREMONY: Gratitude & Prestige', icon: Trophy, description: 'Tokens of Love: The Official Memento & Gift Presentation.' },
  { time: '02:30 PM', title: 'Encore!', icon: Users, description: 'Special Junior Batch Dance Performance.' },
  { time: '03:00 PM', title: 'The Regal Arrival', icon: Crown, description: 'Welcoming the Honorable Chairman Sir.' },
  { time: '03:25 PM', title: 'The Final Wisdom', icon: Mic, description: 'The Chairman’s Closing Address.' },
  { time: '03:45 PM', title: 'THE FINALE: Memories & Magic', icon: Handshake, description: 'The Final Bow: Vote of Thanks & Appreciation.' },
  { time: '04:00 PM', title: 'The Afterparty', icon: PartyPopper, description: 'DJ Session – Let the music take over!' },
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
