import { SimpleCard } from './simple-card';

interface SkillsProps {
  title: string;
  skills: {
    skill: string;
    years: number;
  }[]
}

export const Skills = ({ title, skills }: SkillsProps) => {
  return (
    <SimpleCard title={title}>
      <ul>
        {skills.map(skill => {
          return (
            <li
              key={skill.skill}
              className="flex flex-row justify-between items-center gap-2 text-sm"
            >
              <span className="text-balance">{skill.skill}</span>
              <span className="opacity-80 flex-shrink-0">{skill.years} yrs</span>
            </li>
          );
        })}
      </ul>
    </SimpleCard>
  );
};
