import express from 'express';
import path from 'path';
import mustacheExpress from 'mustache-express';
import {
  exampleRouer,
} from './routes';

const app = express();
console.log('PATATA', __dirname);
app.use('/assets/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')));
app.use('/assets/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')));
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', path.resolve('../templates'));
app.use('/example', exampleRouer);
app.use(express.json());

export default app;
