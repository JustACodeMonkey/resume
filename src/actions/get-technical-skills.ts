'use server';

import { neon } from '@neondatabase/serverless';

export const getTechnicalSkills = async () => {
    const sql = neon(process.env.DATABASE_URL ?? '');
    const data = await sql`
      SELECT  skill,
              years
        FROM  technicalSKill
        ORDER BY 
          _order ASC`;
    return data;
};
