import express from 'express';
import path from 'path';
import i18next from 'i18next';
import i18nextHttpMiddleware from 'i18next-http-middleware';
import hbs from 'hbs';
import { exampleRouer } from './routes';
import i18Nexthelper from './utils/hbs/i18nextHelper';
import { i18nextConfig } from './utils';

const app = express();

// json body
app.use(express.json());

// template
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../views'));
hbs.registerHelper('t', i18Nexthelper);

// i18n
i18nextConfig();
app.use(i18nextHttpMiddleware.handle(i18next, {}));

// assets
app.use('/assets/css', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist/css')));
app.use('/assets/js', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist/js')));

// routes
app.use('/example', exampleRouer);

export default app;
