import { IEducation } from '@/actions/get-education';

interface EducationProps {
  education: IEducation[];
}

export const Education = ({ education }: EducationProps) => {
  return (
    <section className="border-y border-opacity-20 bg-black/5 dark:bg-white/10 p-2 rounded-lg min-w-60 space-y-4">
      <h2 className="text-blue-00 dark:text-blue-500 font-semibold text-xl uppercase">Education</h2>
      {education.map(education => (
        <article
          key={education.school}
          className="flex flex-col font-semibold text-sm"
        >
          <span className="italic">{education.earned}</span>
          <span className="italic">{education.major}</span>
          <span>{education.school}</span>
          <span className="font-normal">[{education.startdate} - {education.enddate}]</span>
        </article>
      ))}
    </section>
  );
};
