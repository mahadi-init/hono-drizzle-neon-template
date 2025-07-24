import { BetterAuthOptions } from 'better-auth';

/**
 * Custom options for Better Auth
 *
 * Docs: https://www.better-auth.com/docs/reference/options
 */
export const betterAuthOptions: BetterAuthOptions = {
	/**
	 * The name of the application.
	 */
	appName: 'hono-drizzle-hono-template',
	/**
	 * Base path for Better Auth.
	 * @default "/api/auth"
	 */
	basePath: '/api',

	// .... More options
};
