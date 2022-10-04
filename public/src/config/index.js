"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongo = exports.es = exports.en = void 0;
var locales_1 = require("./locales");
Object.defineProperty(exports, "en", { enumerable: true, get: function () { return locales_1.en; } });
Object.defineProperty(exports, "es", { enumerable: true, get: function () { return locales_1.es; } });
var mongo_1 = require("./mongo");
Object.defineProperty(exports, "mongo", { enumerable: true, get: function () { return mongo_1.config; } });
