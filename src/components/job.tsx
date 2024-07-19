import { IJob, IJobDetails } from '@/data/get-jobs';

export interface JobProps {
  job: IJob;
}

export const Job = ({ job }: JobProps) => {
  return (
    <article
      key={job.title}
      className="text-sm"
    >
      <h3 className="flex flex-col font-semibold">
        <span className="italic">{job.title}</span>
        <span>{job.company}</span>
        <span className="font-normal">[{job.startdate} - {job.enddate}]</span>
      </h3>
      
      {job.details.map((details: IJobDetails) => (
        <section
          key={details.title}
          className="my-4"
        >
          <h4 className="text-blue-500 italic font-semibold">{details.title}</h4>
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
