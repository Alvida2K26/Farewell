'use client';

import { useEffect, useState } from 'react';

const calculateTimeLeft = (targetDate: Date) => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const CountdownComponent = ({ targetDate }: { targetDate: Date }) => {
  // By initializing with a static, non-date-dependent value, we ensure server and client render the same initial HTML.
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // This code runs only on the client, after hydration.
    // We set the initial time correctly here.
    setTimeLeft(calculateTimeLeft(targetDate));

    // Then we set up the interval to update it.
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerComponents = Object.entries(timeLeft).map(([unit, value]) => {
    if (value < 0) return null;
    return (
      <div key={unit} className="flex flex-col items-center mx-1 sm:mx-2 p-2 bg-black/20 backdrop-blur-sm rounded-lg min-w-[60px] sm:min-w-[70px]">
        <span className="text-2xl sm:text-3xl font-bold">{value}</span>
        <span className="text-xs uppercase">{unit}</span>
      </div>
    );
  });

  return (
    <div className="flex justify-center my-8">
      {timerComponents}
    </div>
  );
};

export const Countdown = CountdownComponent;
export default CountdownComponent;
