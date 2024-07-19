import { getJobs, IJob } from '@/data/get-jobs';
import { Job } from './job';

export const Experience = async () => {
  const jobs = await getJobs() as IJob[];

  return (
    <section className="border-y border-opacity-20 bg-black/5 dark:bg-white/10 p-2 rounded-lg space-y-4">
      <h2 className="text-blue-500 font-semibold text-xl uppercase">Experience</h2>
      {jobs.map((job: IJob, index: number) => (
        <>
          <Job key={job.title} job={job} />
          {index < jobs.length - 1 && (
            <hr className="opacity-20 h-[1px] -ml-2 -mr-2 pl-2 pr-2"></hr>
          )}
        </>
      ))}
    </section>
  );
};
