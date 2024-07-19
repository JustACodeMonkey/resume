'use server';

import { neon } from '@neondatabase/serverless';

export interface ISkill {
  skill: string;
  years: number;
}

export const getManagementSkills = async () => {
    const sql = neon(process.env.DATABASE_URL ?? '');
    const data = await sql`
      SELECT  skill,
              years
        FROM  managementSKill
        ORDER BY 
          _order ASC`;
    return data;
};
