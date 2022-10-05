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
const utils_1 = require("./utils");
const app = (0, express_1.default)();
// json body
app.use(express_1.default.json());
// template
hbs_1.default.registerPartials(path_1.default.join(__dirname, '../views/partials'));
hbs_1.default.registerHelper('t', utils_1.i18NextHelper);
hbs_1.default.registerHelper('urlSet', utils_1.urlSetHelper);
app.set('view engine', 'hbs');
app.set('views', path_1.default.join(__dirname, '../views'));
// i18n
app.use(i18next_http_middleware_1.default.handle(i18next_1.default, {}));
// assets
app.use('/assets/bootstrap/css', express_1.default.static(path_1.default.join(__dirname, '../../node_modules/bootstrap/dist/css')));
app.use('/assets/bootstrap-icons/css', express_1.default.static(path_1.default.join(__dirname, '../../node_modules/bootstrap-icons/font')));
app.use('/assets/bootstrap/js', express_1.default.static(path_1.default.join(__dirname, '../../node_modules/bootstrap/dist/js')));
app.use('/assets/pics', express_1.default.static(path_1.default.join(__dirname, '../assets/pics')));
// routes
app.use('/', routes_1.exampleRouter);
exports.default = app;
