var _a;
// ~ ENVIRONMENT CONFIG ~ //
import 'dotenv/config';
// ~ DEBUG CONFIG ~ //
import debug from 'debug';
const logger = debug('EntryPoint');
// ~ EXPRESS CONFIG ~ //
import express from 'express';
const app = express();
// ~ CORS CONFIG ~ //
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
import { router } from './app/router/index.js';
// import { _404 } from './app/service/errorHandling.js';
// ~ LAUNCHER CONFIG ~ //
app.use(router);
// app.use(_404)
// app.get('/', (_req, res) => {
//   res.send('Hello world!');
// });
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.listen(PORT, () => {
    console.log(` \x1b[1;33m⚡⚡ http://localhost:${PORT} ⚡⚡ \x1b[0m`);
});
