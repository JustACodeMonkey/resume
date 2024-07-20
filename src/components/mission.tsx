import { getMission } from '@/data/get-mission';
import { SimpleCard } from './simple-card';

export const Mission = async () => {
  const mission = await getMission();

  return (<SimpleCard>{mission}</SimpleCard>);
};
