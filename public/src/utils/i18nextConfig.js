"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18next_http_middleware_1 = require("i18next-http-middleware");
const i18next_1 = __importDefault(require("i18next"));
const config_1 = require("../config");
function i18nextConfig() {
    i18next_1.default
        .use(i18next_http_middleware_1.LanguageDetector)
        .init({
        preload: ['en', 'es'],
        supportedLngs: ['en', 'es'],
        lng: 'es',
        debug: false,
        resources: { en: { translation: config_1.en }, es: { translation: config_1.es } },
    });
}
exports.default = i18nextConfig;
