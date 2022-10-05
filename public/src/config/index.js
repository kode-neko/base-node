"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongo = exports.urls = exports.es = exports.en = void 0;
var locales_1 = require("./locales");
Object.defineProperty(exports, "en", { enumerable: true, get: function () { return locales_1.en; } });
Object.defineProperty(exports, "es", { enumerable: true, get: function () { return locales_1.es; } });
var urls_json_1 = require("./urls.json");
Object.defineProperty(exports, "urls", { enumerable: true, get: function () { return __importDefault(urls_json_1).default; } });
var mongo_1 = require("./mongo");
Object.defineProperty(exports, "mongo", { enumerable: true, get: function () { return mongo_1.config; } });
