"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnv = exports.i18nextConfig = exports.checkIdObj = exports.checkIdCount = exports.envSelect = exports.console = void 0;
var console_1 = require("./console");
Object.defineProperty(exports, "console", { enumerable: true, get: function () { return __importDefault(console_1).default; } });
var envSelect_1 = require("./envSelect");
Object.defineProperty(exports, "envSelect", { enumerable: true, get: function () { return __importDefault(envSelect_1).default; } });
var decorators_1 = require("./mongo/decorators");
Object.defineProperty(exports, "checkIdCount", { enumerable: true, get: function () { return decorators_1.checkIdCount; } });
Object.defineProperty(exports, "checkIdObj", { enumerable: true, get: function () { return decorators_1.checkIdObj; } });
var i18nextConfig_1 = require("./i18nextConfig");
Object.defineProperty(exports, "i18nextConfig", { enumerable: true, get: function () { return __importDefault(i18nextConfig_1).default; } });
var getEnv_1 = require("./getEnv");
Object.defineProperty(exports, "getEnv", { enumerable: true, get: function () { return __importDefault(getEnv_1).default; } });
