"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubject = exports.getTemplate = exports.getChangeLang = exports.getExample = void 0;
const i18next_1 = __importDefault(require("i18next"));
function getExample(req, res) {
    const example = { content: 'test' };
    res.status(200).json(example);
}
exports.getExample = getExample;
function getChangeLang(req, res) {
    const { lang } = req.query;
    i18next_1.default.changeLanguage(lang).then(() => res.redirect('/example/tpl'));
}
exports.getChangeLang = getChangeLang;
function getTemplate(req, res) {
    res.render('main', { title: 'titulo', content: 'contenido' });
}
exports.getTemplate = getTemplate;
function getSubject(req, res) {
    res.render('subject');
}
exports.getSubject = getSubject;
