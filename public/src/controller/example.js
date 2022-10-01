"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTemplate = exports.getExample = void 0;
function getExample(req, res) {
    const example = { content: 'test' };
    res.status(200).json(example);
}
exports.getExample = getExample;
function getTemplate(req, res) {
    res.render('base', { title: 'Titulo', content: 'content' });
}
exports.getTemplate = getTemplate;
