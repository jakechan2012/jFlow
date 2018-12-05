import Router from 'koa-router';
import body from 'koa-body';
import path from 'path';
import fs from 'fs';

const router = new Router();

router.all('/api/*', async ctx => {
  console.log(1);
  ctx.body = null;
  ctx.status = 202;
});

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
