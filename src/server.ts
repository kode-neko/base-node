import express from 'express';
import path from 'path';
import i18next from 'i18next';
import i18nextHttpMiddleware from 'i18next-http-middleware';
import hbs from 'hbs';
import { exampleRouer } from './routes';
import i18Nexthelper from './utils/hbs/i18nextHelper';

const app = express();

// json body
app.use(express.json());

// template
hbs.registerPartials(path.join(__dirname, '../views/partials'));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../views'));
hbs.registerHelper('t', i18Nexthelper);

// i18n
app.use(i18nextHttpMiddleware.handle(i18next, {}));

// assets
app.use('/assets/bootstrap/css', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist/css')));
app.use('/assets/bootstrap-icons/css', express.static(path.join(__dirname, '../../node_modules/bootstrap-icons/font')));
app.use('/assets/bootstrap/js', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist/js')));
app.use('/assets/pics', express.static(path.join(__dirname, '../assets/pics')));

// routes
app.use('/example', exampleRouer);

export default app;
