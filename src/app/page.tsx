import { getEducation, IEducation } from '@/data/get-education';
import { getManagementSkills } from '@/data/get-management-skills';
import { getTechnicalSkills } from '@/data/get-technical-skills';
import { Education } from '@/components/education';
import { Experience } from '@/components/experience';
import { Mission } from '@/components/mission';
import { Skills } from '@/components/skills';
import Image from 'next/image';
import { SimpleCard } from '@/components/simple-card';

export default async function Home() {
  
  const technicalSkills = await getTechnicalSkills();
  const managementSkills = await getManagementSkills();
  const education = await getEducation() as IEducation[];

  return (
    <div className="flex flex-col gap-4 space-y-4 py-4">
      <Mission />
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col space-y-4">
          <Skills
            title="Technical Skills"
            skills={technicalSkills.map(skill => ({
              skill: skill.skill,
              years: skill.years
            }))}
          />

          <Skills
            title="Management Skills"
            skills={managementSkills.map(skill => ({
              skill: skill.skill,
              years: skill.years
            }))}
          />

          <Education education={education} />
        </div>
        <Experience />
      </div>

      <SimpleCard title="When I'm not working...">
        <p className="mt-1 text-sm">You might find me biking, drumming, or skiing</p>
        <div className="flex flex-col sm:flex-row justify-around items-center gap-8 w-full">
          <Image
            src="/bike.png"
            width={0}
            height={0}
            sizes='100vw'
            className="max-w-96 w-auto h-64 rounded-3xl"
            alt=""
          />
          <Image
            src="/drums.png"
            width={0}
            height={0}
            sizes='100vw'
            className="max-w-96 w-auto h-64 rounded-3xl"
            alt=""
          />
        </div>
      </SimpleCard>
    </div>
  );
}
