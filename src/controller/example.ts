import { Request, Response } from 'express';
import { IExample } from '../model/example';

function getExample(req: Request, res: Response): void {
  const example : IExample = { content: 'test' };
  res.status(200).json(example);
}

function getTemplate(req: Request, res: Response): void {
  res.render('base', { title: 'Titulo', content: 'content' });
}

export {
  getExample,
  getTemplate,
};
