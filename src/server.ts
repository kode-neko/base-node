import express from 'express';
import path from 'path';
import i18next from 'i18next';
import i18nextHttpMiddleware from 'i18next-http-middleware';
import hbs from 'hbs';
import { exampleRouter } from './routes';
import { urlSetHelper, i18NextHelper } from './utils';

const app = express();

// json body
app.use(express.json());

// template
hbs.registerPartials(path.join(__dirname, '../views/partials'));
hbs.registerHelper('t', i18NextHelper);
hbs.registerHelper('urlSet', urlSetHelper);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../views'));

// i18n
app.use(i18nextHttpMiddleware.handle(i18next, {}));

// assets
app.use('/assets/bootstrap/css', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist/css')));
app.use('/assets/bootstrap-icons/css', express.static(path.join(__dirname, '../../node_modules/bootstrap-icons/font')));
app.use('/assets/bootstrap/js', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist/js')));
app.use('/assets/pics', express.static(path.join(__dirname, '../assets/pics')));

// routes
app.use('/', exampleRouter);

export default app;
