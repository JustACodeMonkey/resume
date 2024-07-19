'use server';

import { neon } from '@neondatabase/serverless';

export const getMission = async () => {
    const sql = neon(process.env.DATABASE_URL ?? '');
    const [data] = await sql`
      SELECT  mission
        FROM  mission`;
    return data.mission;
};
