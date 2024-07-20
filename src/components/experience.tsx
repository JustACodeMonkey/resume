import { getJobs, IJob } from '@/data/get-jobs';
import { Job } from './job';
import { SimpleCard } from './simple-card';

export const Experience = async () => {
  const jobs = await getJobs() as IJob[];

  return (
    <SimpleCard title="Experience" className="w-full">
      {jobs.map((job: IJob, index: number) => (
        <>
          <Job key={job.title} job={job} />
          {index < jobs.length - 1 && (
            <hr className="opacity-20 h-[1px] -ml-2 -mr-2 pl-2 pr-2"></hr>
          )}
        </>
      ))}
    </SimpleCard>
  );
};
