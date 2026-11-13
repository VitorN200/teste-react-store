// Servidor único para produção: serve o front-end (pasta dist) e a API fake (JSON Server) em /api
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import jsonServer from 'json-server';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'data', 'db.json'));
const middlewares = jsonServer.defaults({ static: path.join(__dirname, 'dist'), noCors: false });

server.use(middlewares);
server.use('/api', router);
// Fallback para o React Router (ex.: acessar /product/3 direto pela URL)
server.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')));

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
