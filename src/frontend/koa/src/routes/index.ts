import Router from 'koa-router';
import proxy from 'koa-better-http-proxy';
import path from 'path';
import fs from 'fs';
import config from '../config.json';

const router = new Router();
const { host: backendHost, port: backendPort } = config.backend;

router.all('/api/*', proxy(backendHost, { port: backendPort }), async ctx => {});

router.all('*', async ctx => {
  if (process.env.NODE_ENV === 'Development') {
    ctx.body = 'If you see this message, something might be wrong!';
    ctx.status = 202;
  } else {
    ctx.type = 'html';
    ctx.body = fs.createReadStream(path.resolve(__dirname, '../../../dist/public/index.html'));
  }
});

export const routes = router.routes();
