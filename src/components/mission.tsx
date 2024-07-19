import { getMission } from '@/data/get-mission';

export const Mission = async () => {
  const mission = await getMission();

  return (
    <article className="border-y border-opacity-20 bg-black/5 dark:bg-white/10 p-2 rounded-lg">{mission}</article>
  );
};
