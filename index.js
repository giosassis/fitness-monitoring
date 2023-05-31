const env = require('dotenv').config
const Koa = require('koa');

const app = new Koa();

// Rota inicial de teste
app.use(async (ctx) => {
  ctx.body = 'Hello, Greetings from Koa! 👋';
});

// Iniciar o servidor na porta desejada
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});