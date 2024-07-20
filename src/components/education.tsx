import { IEducation } from '@/data/get-education';
import { SimpleCard } from './simple-card';

interface EducationProps {
  education: IEducation[];
}

export const Education = ({ education }: EducationProps) => {
  return (
    <SimpleCard title="Education">
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
    </SimpleCard>
  );
};
