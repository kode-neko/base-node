import supertest from 'supertest';
import { Response } from 'superagent';
import app from '../../server';

describe('Article Ctrl', () => {
  it('Ctrl GET /example', async () => {
    await supertest(app).get('/example')
      .expect(200)
      .then((res: Response) => {
        expect(res.body).toStrictEqual({ content: 'test' });
      });
  });
});
