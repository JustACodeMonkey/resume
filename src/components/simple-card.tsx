import { silkscreen } from '@/fonts/silkscreen';
import React from 'react';

interface SimmpleCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const SimpleCard = ({ children, className, title }: SimmpleCardProps) => {
  return (
    <section className={"border-y border-opacity-20 bg-white/80 dark:bg-black/80 p-2 rounded-lg min-w-60 space-y-4 drop-shadow-md " + className}>
      {title && (
        <h2 className={silkscreen.className + " text-blue-700 dark:text-blue-500 font-semibold text-xl uppercase"}>{title}</h2>
      )}
      {children}
    </section>
  );
};
