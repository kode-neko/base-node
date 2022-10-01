"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = void 0;
const mongoose_1 = require("mongoose");
const utils_1 = require("../utils");
const exampleSchema = new mongoose_1.Schema({
    content: {
        type: String,
    },
}, {
    collection: 'example',
});
const ExampleModel = (0, mongoose_1.model)('example', exampleSchema);
class Example {
    selectById(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const article = yield ExampleModel.findOne(params);
            return article;
        });
    }
    selectAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const articles = yield ExampleModel.find({});
            return articles;
        });
    }
    select(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const articles = yield ExampleModel.find(params);
            return articles;
        });
    }
    insert(ele) {
        return __awaiter(this, void 0, void 0, function* () {
            const article = new ExampleModel(ele);
            yield article.save();
            return article;
        });
    }
    update(ele, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield ExampleModel.updateOne(params, ele);
            return res.modifiedCount;
        });
    }
    delete(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield ExampleModel.deleteMany(params);
            return res.deletedCount;
        });
    }
}
__decorate([
    utils_1.checkIdObj
], Example.prototype, "selectById", null);
__decorate([
    utils_1.checkIdObj
], Example.prototype, "insert", null);
__decorate([
    utils_1.checkIdCount
], Example.prototype, "update", null);
__decorate([
    utils_1.checkIdCount
], Example.prototype, "delete", null);
exports.Example = Example;
