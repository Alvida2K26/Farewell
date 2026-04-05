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

const agendaItems = [
  { time: '5:00 PM', title: 'Arrival & Welcome Drinks', icon: GlassWater, description: 'Check-in and get refreshed with a welcome drink.' },
  { time: '5:30 PM', title: 'Welcoming Seniors', icon: Flower2, description: 'A warm floral welcome for our esteemed seniors.' },
  { time: '6:00 PM', title: 'Inauguration Ceremony', icon: Flame, description: 'The formal start with the lighting of the lamp and a prayer.' },
  { time: '6:30 PM', title: 'Down Memory Lane', icon: Mic, description: 'Speeches and shared experiences from seniors and faculty.' },
  { time: '7:00 PM', title: 'Cultural Showcase', icon: Music, description: 'Mesmerizing classical dance performances.' },
  { time: '7:30 PM', title: 'Junior Performances', icon: Users, description: 'Energetic group dances, songs, and more from the juniors.' },
  { time: '8:00 PM', title: 'Dinner & Refreshments', icon: Utensils, description: 'Indulge in a delicious spread of culinary delights.' },
  { time: '9:00 PM', title: 'Mr. & Ms. Farewell', icon: Crown, description: 'The much-awaited contest begins with a ramp walk and talent rounds.' },
  { time: '9:45 PM', title: 'Felicitation', icon: Award, description: 'Distribution of titles, mementos, and certificates.' },
  { time: '10:15 PM', title: 'A Nostalgic Journey', icon: Film, description: 'An AV presentation to relive cherished moments.' },
  { time: '10:45 PM', title: 'Cake Cutting Ceremony', icon: Cake, description: 'A sweet moment to mark the occasion.' },
  { time: '11:00 PM', title: 'Vote of Thanks', icon: Handshake, description: 'Expressing gratitude to everyone who made the evening special.' },
  { time: '11:15 PM', title: 'DJ Night & Closing Celebrations', icon: PartyPopper, description: 'Hit the dance floor and celebrate!' },
];

export function Agenda() {
  return (
    <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {agendaItems.map((item, index) => (
        <Card key={index} className="bg-card border-border/60 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
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
