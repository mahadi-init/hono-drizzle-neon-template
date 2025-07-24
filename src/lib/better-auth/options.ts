import { BetterAuthOptions } from 'better-auth';

export const betterAuthOptions: BetterAuthOptions = {
	appName: 'hono-drizzle-hono-template',
	basePath: '/api/auth',
	emailAndPassword: {
		enabled: true,
	},
};
