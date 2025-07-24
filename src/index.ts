import { Hono } from 'hono';
import { auth } from './lib/better-auth';
import { Variables } from './types/hono-variables';

const app = new Hono<{ Bindings: CloudflareBindings; Variables: Variables }>();

app.get('/', (c) => {
	return c.json({ message: 'Welcome to api' });
});

const api = app.basePath('/api');

api.on(['POST', 'GET'], '/auth/*', (c) => {
	return auth(c.env).handler(c.req.raw);
});

export default app;
