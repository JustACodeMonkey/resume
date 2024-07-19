'use server';

import { neon } from '@neondatabase/serverless';

export interface IEducation {
  school: string;
  earned: string;
  major: string;
  startdate: string;
  enddate: string;
}

export const getEducation = async () => {
    const sql = neon(process.env.DATABASE_URL ?? '');
    const data = await sql`
      SELECT  school,
              earned,
              major,
              startdate,
              enddate
        FROM  education
        ORDER BY 
          _order ASC`;
    return data;
};
