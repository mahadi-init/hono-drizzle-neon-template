import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';

export const db = (c: any) => {
	const sql = neon(c.env.DATABASE_URL);
	const conn = drizzle(sql);
	return conn;
};
