import { Clock, Utensils, Music, Mic, PartyPopper } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const agendaItems = [
  { time: '5:00 PM', title: 'Welcome & Registration', icon: PartyPopper, description: 'Check-in, grab your name tag, and mingle with fellow attendees.' },
  { time: '6:00 PM', title: 'Opening Remarks', icon: Mic, description: 'A warm welcome and overview of the evening\'s festivities.' },
  { time: '6:30 PM', title: 'Dinner is Served', icon: Utensils, description: 'Indulge in a delicious spread of culinary delights.' },
  { time: '8:00 PM', title: 'Awards & Nostalgia', icon: Clock, description: 'A trip down memory lane with awards and shared stories.' },
  { time: '9:00 PM', title: 'Live Music Performance', icon: Music, description: 'Enjoy the soulful tunes from our special musical guest.' },
  { time: '10:00 PM', title: 'DJ Night Begins', icon: PartyPopper, description: 'Hit the dance floor as the DJ spins the latest tracks and classic hits.' },
];

export function Agenda() {
  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border/40"></div>
      
      {agendaItems.map((item, index) => (
        <div key={index} className="relative mb-8">
          <div className="flex items-center">
            <div className="flex-1 text-right pr-12">
              {index % 2 === 0 && (
                <Card className="bg-card border-border/60 hover:border-primary/50 transition-all duration-300 transform hover:-translate-x-2">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl text-accent">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="z-10 w-24 flex-shrink-0 text-center">
              <div className="w-12 h-12 bg-primary rounded-full mx-auto flex items-center justify-center text-primary-foreground ring-8 ring-background">
                <item.icon className="w-6 h-6" />
              </div>
              <p className="mt-2 font-bold text-accent">{item.time}</p>
            </div>

            <div className="flex-1 pl-12">
              {index % 2 !== 0 && (
                 <Card className="bg-card border-border/60 hover:border-primary/50 transition-all duration-300 transform hover:translate-x-2">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl text-accent">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
