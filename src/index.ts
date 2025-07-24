import { Hono } from 'hono';
import { auth } from './lib/better-auth';
import { Variables } from './types/hono-variables';

const app = new Hono<{ Bindings: CloudflareBindings; Variables: Variables }>();

app.use('*', async (c, next) => {
	const session = await auth(c.env).api.getSession({ headers: c.req.raw.headers });

	if (!session) {
		c.set('user', null);
		c.set('session', null);
		return next();
	}

	c.set('user', session.user);
	c.set('session', session.session);
	return next();
});

app.on(['GET', 'POST'], '/api/*', (c) => {
	return auth(c.env).handler(c.req.raw);
});

app.get('/api/auth/signin', async (c) => {
	const data = await auth(c.env).api.signUpEmail({
		body: {
			name: 'John Doe', // required
			email: 'john.doe@example.com', // required
			password: 'password1234', // required
			image: 'https://example.com/image.png',
			callbackURL: 'https://example.com/callback',
		},
	});

	return c.json({ data });
});

export default app;
