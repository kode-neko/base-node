import i18next from 'i18next';
import { Request, Response } from 'express';
import { IExample } from '../model/example';

function getExample(req: Request, res: Response): void {
  const example : IExample = { content: 'test' };
  res.status(200).json(example);
}

function getChangeLang(req: Request, res: Response): void {
  const { lang } = req.query;
  i18next.changeLanguage(lang as string).then(() => res.redirect('/example/tpl'));
}

function getTemplate(req: Request, res: Response): void {
  res.render('main', { title: 'titulo', content: 'contenido' });
}

function getSubject(req: Request, res: Response): void {
  res.render('subject');
}

export {
  getExample,
  getChangeLang,
  getTemplate,
  getSubject,
};
