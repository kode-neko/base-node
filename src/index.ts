import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import app from './server';
import { console, envSelect } from './utils';

const argsv = yargs(hideBin(process.argv))
  .option('m', {
    alias: 'mode',
    default: 'dev',
    demandOption: true,
    choices: ['dev', 'prod'],
    describe: 'Seleccioan modo despliegue',
    type: 'string',
  })
  .argv as { [s: string]: unknown };

try {
  const env = argsv.m as string;
  envSelect(env);
  app.listen(process.env.SERVER_PORT);
} catch (err) {
  console.error(err);
}
