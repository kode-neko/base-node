"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIdObj = exports.checkIdCount = exports.envSelect = exports.console = void 0;
const console_1 = __importDefault(require("./console"));
exports.console = console_1.default;
const envSelect_1 = __importDefault(require("./envSelect"));
exports.envSelect = envSelect_1.default;
const decorators_1 = require("./mongo/decorators");
Object.defineProperty(exports, "checkIdCount", { enumerable: true, get: function () { return decorators_1.checkIdCount; } });
Object.defineProperty(exports, "checkIdObj", { enumerable: true, get: function () { return decorators_1.checkIdObj; } });
