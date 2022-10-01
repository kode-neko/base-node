"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoConfigExample = exports.mongoConfig = void 0;
const example_json_1 = __importDefault(require("../../../../fixtures/example.json"));
const mongoConfigExample = {
    name: 'example',
    fixtures: example_json_1.default,
};
exports.mongoConfigExample = mongoConfigExample;
const mongoConfig = [mongoConfigExample];
exports.mongoConfig = mongoConfig;
exports.default = mongoConfig;
