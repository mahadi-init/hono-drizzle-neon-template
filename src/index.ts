import { db } from './db/connection';
import { products } from './db/schema';
import { Hono } from 'hono';

const app = new Hono();

app.get('/', async (c) => {
	try {
		const result = await db(c).select().from(products);

		return c.json({
			result,
		});
	} catch (error) {
		console.log(error);
		return c.json(
			{
				error,
			},
			400,
		);
	}
});

export default app;
