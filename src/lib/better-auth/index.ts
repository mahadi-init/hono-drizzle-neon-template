import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { betterAuth } from 'better-auth';
import { betterAuthOptions } from './options';
import { account, session, user, verification } from '../../db/schema/better-auth';

export const auth = (env: CloudflareBindings): ReturnType<typeof betterAuth> => {
	const sql = neon(env.DATABASE_URL);
	const db = drizzle(sql, { schema: { user, account, session, verification } });

	return betterAuth({
		...betterAuthOptions,
		database: drizzleAdapter(db, { provider: 'pg' }),
		baseURL: env.BETTER_AUTH_URL,
		secret: env.BETTER_AUTH_SECRET,
	});
};
