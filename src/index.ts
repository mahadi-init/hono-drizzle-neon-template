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

const api = app.basePath('/api');

api.on(['POST', 'GET'], '/auth/*', (c) => {
	return auth(c.env).handler(c.req.raw);
});

api.get('/', (c) => {
	return c.json({ message: 'Welcome to api' });
});

api.get('/hello', (c) => {
	return c.json({ message: 'Welcome to api' });
});

export default app;
