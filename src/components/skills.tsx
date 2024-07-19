interface SkillsProps {
  title: string;
  skills: {
    skill: string;
    years: number;
  }[]
}

export const Skills = ({ title, skills }: SkillsProps) => {
  return (
    <section className="border-y border-opacity-20 bg-black/5 dark:bg-white/10 p-2 rounded-lg min-w-60 space-y-4">
      <h2 className="text-blue-500 font-semibold text-xl uppercase">{title}</h2>
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
    </section>
  );
};
