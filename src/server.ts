import express from 'express';
import path from 'path';
import mustacheExpress from 'mustache-express';
import {
  exampleRouer,
} from './routes';

const app = express();
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', path.resolve('../templates'));
app.use('/example', exampleRouer);
app.use(express.json());

export default app;
