'use server';

import { neon } from '@neondatabase/serverless';

export interface IJob {
  title: string;
  company: string;
  startdate: string;
  enddate: string;
  details: IJobDetails[];
  logo?: string;
  url?: string;
}
export interface IJobDetails {
  title: string;
  items: {
    item: string;
    subItems: string[];
  }[];
}

export const getJobs = async () => {
    const sql = neon(process.env.DATABASE_URL ?? '');
    const data = await sql`
      SELECT  company,
              title,
              startdate,
              enddate,
              details,
              logo,
              url
        FROM  job 
        ORDER BY 
          _order ASC`;
    return data;
};
