"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoConfigExample = exports.mongoConfig = void 0;
const _fixtures_1 = require("@fixtures");
const mongoConfigExample = {
    name: 'example',
    fixtures: _fixtures_1.exampleFix,
};
exports.mongoConfigExample = mongoConfigExample;
const mongoConfig = [mongoConfigExample];
exports.mongoConfig = mongoConfig;
exports.default = mongoConfig;
