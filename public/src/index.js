"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
const server_1 = __importDefault(require("./server"));
const utils_1 = require("./utils");
const argsv = (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    .option('m', {
    alias: 'mode',
    default: 'dev',
    demandOption: true,
    choices: ['dev', 'prod'],
    describe: 'Seleccioan modo despliegue',
    type: 'string',
})
    .argv;
try {
    const env = argsv.m;
    (0, utils_1.envSelect)(env);
    server_1.default.listen(process.env.SERVER_PORT);
}
catch (err) {
    utils_1.console.error(err);
}
