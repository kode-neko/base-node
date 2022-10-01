"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.engine('mustache', (0, mustache_express_1.default)());
app.set('view engine', 'mustache');
app.set('views', path_1.default.resolve('../templates'));
app.use('/example', routes_1.exampleRouer);
app.use(express_1.default.json());
exports.default = app;
