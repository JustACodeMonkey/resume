import { silkscreen } from '@/fonts/silkscreen';

export const TagLine = () => {
  return (
    <p className={silkscreen.className 
      + " flex flex-col justify-center items-center text-center min-h-[calc(100vh_-_166px)] text-4xl sm:text-6xl"
      + " [text-shadow:_3px_3px_4px_#000] text-balance"
    }>
      Biker, Skier, Drummer, but mostly an introverted code nerd.
    </p>
  );
};
