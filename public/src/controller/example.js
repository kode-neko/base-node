"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSection = exports.getMain = exports.getExample = void 0;
function getExample(req, res) {
    const example = { content: 'test' };
    res.status(200).json(example);
}
exports.getExample = getExample;
function getMain(req, res) {
    res.render('main', { title: 'titulo', content: 'contenido' });
}
exports.getMain = getMain;
function getSection(req, res) {
    const elements = [{ name: 'ele01', url: '/' }, { name: 'ele01', url: '/' }, { name: 'ele01', url: '/' }];
    res.render('section', { elements });
}
exports.getSection = getSection;
