import {
  Schema, model, Types,
} from 'mongoose';
import ICrud from './ICrud';
import { checkIdCount, checkIdObj } from '../utils';

interface IExample {
  id?: Types.ObjectId;
  content: string;
}

const exampleSchema = new Schema<IExample>({
  content: {
    type: String,
  },
}, {
  collection: 'example',
});

const ExampleModel = model('example', exampleSchema);

class Example implements ICrud<IExample> {
  @checkIdObj
  async selectById(params: Record<string, unknown>): Promise<IExample | null> {
    const article = await ExampleModel.findOne(params);
    return article;
  }

  async selectAll(): Promise<IExample[]> {
    const articles = await ExampleModel.find({});
    return articles;
  }

  async select(params: Record<string, unknown>): Promise<IExample[]> {
    const articles = await ExampleModel.find(params);
    return articles;
  }

  @checkIdObj
  async insert(ele: IExample): Promise<IExample> {
    const article = new ExampleModel(ele);
    await article.save();
    return article;
  }

  @checkIdCount
  async update(ele: Partial<IExample>, params: Record<string, unknown>): Promise<number> {
    const res = await ExampleModel.updateOne(params, ele);
    return res.modifiedCount;
  }

  @checkIdCount
  async delete(params: Record<string, unknown>): Promise<number> {
    const res = await ExampleModel.deleteMany(params);
    return res.deletedCount;
  }
}

export {
  IExample,
  Example,
};
