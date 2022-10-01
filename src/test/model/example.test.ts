import { Db, MongoClient } from 'mongodb';
import { faker } from '@faker-js/faker';
import { connect, disconnect } from 'mongoose';
import { Example, IExample } from '../../model';
import {
  create, deleteData, drop, getClient, getURL,
} from '../../utils/mongo/db';
import { console, envSelect } from '../../utils';
import populate from '../../utils/mongo/db/populate';

describe('Model Mongo Example', () => {
  let client: MongoClient;
  let db: Db;
  let url: string;
  let example: Example;

  beforeAll(async () => {
    envSelect();
    try {
      url = getURL();
      client = await getClient(url);
      db = client.db(process.env.DB_NAME);
      await create(db);
      await connect(url);
    } catch (err) {
      console.error(err);
    }
  });

  beforeEach(async () => {
    try {
      await populate(db);
      example = new Example();
    } catch (err) {
      console.error(err);
      await disconnect();
      client.close();
    }
  });

  afterEach(async () => {
    try {
      await deleteData(db);
    } catch (err) {
      console.error(err);
      await disconnect();
      client.close();
    }
  });

  afterAll(async () => {
    try {
      await drop(db);
    } catch (err) {
      console.error(err);
    } finally {
      await disconnect();
      client.close();
    }
  });

  it('Model Mongo selectAll', async () => {
    const examples = await example.selectAll();
    expect(examples).toHaveLength(3);
  });

  it('Model Mongo selectByid', async () => {
    const examples = await example.selectAll();
    const { id } = examples[0];
    const exampleById = await example.selectById({ id: examples[0].id });
    expect(exampleById?.id).toBe(id);
  });

  it('Model Mongo select by param', async () => {
    const examples = await example.selectAll();
    const { content } = examples[0];
    const exampleByTitle = await example.select({ content });
    expect(exampleByTitle[0].content || '').toBe(content);
  });

  it('Model Mongo insert', async () => {
    const exampleAux: IExample = {
      content: faker.lorem.text(),
    };
    const exampleInserted = await example.insert(exampleAux);
    expect(exampleInserted.id).not.toBeNull();
  });

  it('Model Mongo update', async () => {
    const examples = await example.selectAll();
    const updates = { content: faker.lorem.words() };
    const afected = await example.update(updates, { id: examples[0].id });
    expect(afected).toBeTruthy();
  });

  it('Model Mongo delete', async () => {
    const examples = await example.selectAll();
    const afected = await example.delete({ _id: examples[0].id });
    const notAfected = await example.delete({ _id: faker.datatype.uuid() });
    expect(afected).toBeTruthy();
    expect(notAfected).toBeFalsy();
  });
});
