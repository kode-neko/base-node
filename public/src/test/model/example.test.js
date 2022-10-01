"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const mongoose_1 = require("mongoose");
const model_1 = require("../../model");
const db_1 = require("../../utils/mongo/db");
const utils_1 = require("../../utils");
const populate_1 = __importDefault(require("../../utils/mongo/db/populate"));
describe('Model Mongo Example', () => {
    let client;
    let db;
    let url;
    let example;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        (0, utils_1.envSelect)();
        try {
            url = (0, db_1.getURL)();
            client = yield (0, db_1.getClient)(url);
            db = client.db(process.env.DB_NAME);
            yield (0, db_1.create)(db);
            yield (0, mongoose_1.connect)(url);
        }
        catch (err) {
            utils_1.console.error(err);
        }
    }));
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield (0, populate_1.default)(db);
            example = new model_1.Example();
        }
        catch (err) {
            utils_1.console.error(err);
            yield (0, mongoose_1.disconnect)();
            client.close();
        }
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield (0, db_1.deleteData)(db);
        }
        catch (err) {
            utils_1.console.error(err);
            yield (0, mongoose_1.disconnect)();
            client.close();
        }
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield (0, db_1.drop)(db);
        }
        catch (err) {
            utils_1.console.error(err);
        }
        finally {
            yield (0, mongoose_1.disconnect)();
            client.close();
        }
    }));
    it('Model Mongo selectAll', () => __awaiter(void 0, void 0, void 0, function* () {
        const examples = yield example.selectAll();
        expect(examples).toHaveLength(3);
    }));
    it('Model Mongo selectByid', () => __awaiter(void 0, void 0, void 0, function* () {
        const examples = yield example.selectAll();
        const { id } = examples[0];
        const exampleById = yield example.selectById({ id: examples[0].id });
        expect(exampleById === null || exampleById === void 0 ? void 0 : exampleById.id).toBe(id);
    }));
    it('Model Mongo select by param', () => __awaiter(void 0, void 0, void 0, function* () {
        const examples = yield example.selectAll();
        const { content } = examples[0];
        const exampleByTitle = yield example.select({ content });
        expect(exampleByTitle[0].content || '').toBe(content);
    }));
    it('Model Mongo insert', () => __awaiter(void 0, void 0, void 0, function* () {
        const exampleAux = {
            content: faker_1.faker.lorem.text(),
        };
        const exampleInserted = yield example.insert(exampleAux);
        expect(exampleInserted.id).not.toBeNull();
    }));
    it('Model Mongo update', () => __awaiter(void 0, void 0, void 0, function* () {
        const examples = yield example.selectAll();
        const updates = { content: faker_1.faker.lorem.words() };
        const afected = yield example.update(updates, { id: examples[0].id });
        expect(afected).toBeTruthy();
    }));
    it('Model Mongo delete', () => __awaiter(void 0, void 0, void 0, function* () {
        const examples = yield example.selectAll();
        const afected = yield example.delete({ _id: examples[0].id });
        const notAfected = yield example.delete({ _id: faker_1.faker.datatype.uuid() });
        expect(afected).toBeTruthy();
        expect(notAfected).toBeFalsy();
    }));
});
