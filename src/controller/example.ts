import { Request, Response } from 'express';
import { IExample } from '../model/example';

function getExample(req: Request, res: Response): void {
  const example : IExample = { content: 'test' };
  res.status(200).json(example);
}

function getMain(req: Request, res: Response): void {
  res.render('main', { title: 'titulo', content: 'contenido' });
}

function getSection(req: Request, res: Response): void {
  const elements = [{ name: 'ele01', url: '/' }, { name: 'ele01', url: '/' }, { name: 'ele01', url: '/' }];
  res.render('section', { elements });
}

export {
  getExample,
  getMain,
  getSection,
};
