const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./routes/routes');

const app = new Koa();

app.use(bodyParser());
app.use(router.routes());

// Rota inicial de teste
app.use(async (ctx) => {
  ctx.body = 'Hello, Greetings from Koa! 👋';
});

// Iniciar o servidor na porta desejada
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});