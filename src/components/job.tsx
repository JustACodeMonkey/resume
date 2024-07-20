import { IJob, IJobDetails } from '@/data/get-jobs';
import Image from 'next/image';

export interface JobProps {
  job: IJob;
}

export const Job = ({ job }: JobProps) => {
  return (
    <article
      key={job.title}
      className="text-sm"
    >
      <h3 className="flex flex-col font-semibold relative">
        <span className="italic">{job.title}</span>
        <span>{job.company}</span>
        <span className="font-normal">[{job.startdate} - {job.enddate}]</span>

        {job.logo && (
          <a
            href={job.url}
            target="_blank"
            referrerPolicy="no-referrer"
            className="absolute bottom-1 right-0"
          >
            <Image
              src={"/" + job.logo}
              width={0}
              height={0}
              sizes='100vw'
              aria-hidden={true}
              alt={job.company + "logo"}
              className="h-8 w-auto"
            />
          </a>
        )}
        
      </h3>
      
      {job.details.map((details: IJobDetails) => (
        <section
          key={details.title}
          className="my-4"
        >
          <h4 className="text-blue-700 dark:text-blue-500 italic font-semibold">{details.title}</h4>
          <ul className="list-disc ml-5">
            {details.items.map((item: any) => (
              <li key={item.item}>
                {item.item}
                {item.subItems.length > 0 && (
                  <ul className="ml-5" style={{listStyleType: 'circle'}}>
                    {item.subItems.map((subItem: any) => (
                      <li key={subItem}>{subItem}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </article>
  );
};
