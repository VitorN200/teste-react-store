// Função serverless da Vercel: API fake (JSON Server) servida em /api
// Os dados vêm do data/db.json, carregados em memória (somente leitura).
import fs from 'node:fs';
import jsonServer from 'json-server';

const db = JSON.parse(
  fs.readFileSync(new URL('../data/db.json', import.meta.url), 'utf-8')
);

const server = jsonServer.create();
const router = jsonServer.router(db); // objeto => banco em memória, sem gravar em disco

server.use(jsonServer.defaults({ logger: false, readOnly: true }));
server.use('/api', router);

export default server;
