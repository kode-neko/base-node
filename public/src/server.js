"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const i18next_1 = __importDefault(require("i18next"));
const i18next_http_middleware_1 = __importDefault(require("i18next-http-middleware"));
const hbs_1 = __importDefault(require("hbs"));
const routes_1 = require("./routes");
const i18nextHelper_1 = __importDefault(require("./utils/hbs/i18nextHelper"));
const app = (0, express_1.default)();
// json body
app.use(express_1.default.json());
// template
app.set('view engine', 'hbs');
app.set('views', path_1.default.join(__dirname, '../views'));
hbs_1.default.registerHelper('t', i18nextHelper_1.default);
// i18n
app.use(i18next_http_middleware_1.default.handle(i18next_1.default, {}));
// assets
app.use('/assets/css', express_1.default.static(path_1.default.join(__dirname, '../../node_modules/bootstrap/dist/css')));
app.use('/assets/js', express_1.default.static(path_1.default.join(__dirname, '../../node_modules/bootstrap/dist/js')));
// routes
app.use('/example', routes_1.exampleRouer);
exports.default = app;
