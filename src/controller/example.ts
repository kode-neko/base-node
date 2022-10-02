import i18next from 'i18next';
import { Request, Response } from 'express';
import { IExample } from '../model/example';

function getExample(req: Request, res: Response): void {
  const example : IExample = { content: 'test' };
  res.status(200).json(example);
}

function getChangeLang(req: Request, res: Response): void {
  const { lang } = req.params;
  i18next.changeLanguage(lang);
  res.redirect('/example/tpl');
}

function getTemplate(req: Request, res: Response): void {
  res.render('base', { title: 'titulo', content: 'contenido' });
}

export {
  getExample,
  getChangeLang,
  getTemplate,
};
