import Koa from 'koa';
import logger from 'koa-logger';
import serve from 'koa-static';
import path from 'path';
import config from './config.json';
import { routes } from './routes';

const app = new Koa();

app.use(logger());
app.use(serve(path.resolve(__dirname, '../public')));
app.use(routes);

app.listen(config.port, () => {
  console.log(`[*] Koa is listening on localhost:${config.port}`);
});
