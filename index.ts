import express, { Express } from 'express';
import dotenv from 'dotenv';
import menuRouter from './routes/menu';
import routes from './routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use('/api/menus', routes.menus);
app.use('/api/categories', routes.categories);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
