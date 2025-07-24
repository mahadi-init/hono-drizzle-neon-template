import { Hono } from 'hono';
import { auth } from './lib/better-auth';

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.use('*', async (c, next) => {
	const session = await auth(c.env).api.getSession({ headers: c.req.raw.headers });

	if (!session) {
		c.set('user', null);
		c.set('message', 'Hono is hot!!');
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

// app.get('/', async (c) => {
// 	try {
// 		const result = await db(c).select().from(products);
//
// 		return c.json({
// 			result,
// 		});
// 	} catch (error) {
// 		console.log(error);
// 		return c.json(
// 			{
// 				error,
// 			},
// 			400,
// 		);
// 	}
// });

app.get('/', async (c) => {
	return c.json({ message: 'Welcome to api' });
});

export default app;
