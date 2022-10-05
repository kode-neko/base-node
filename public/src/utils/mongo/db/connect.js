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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClient = exports.getURL = void 0;
const mongodb_1 = require("mongodb");
function getURL() {
    const { DB_HOST, DB_PORT, DB_NAME, DB_ADMIN, DB_ADMIN_PASS, } = process.env;
    const credentials = `${DB_ADMIN}:${DB_ADMIN_PASS}`;
    const host = `${DB_HOST}:${DB_PORT}`;
    const url = `mongodb://${credentials}@${host}/${DB_NAME}`;
    return url;
}
exports.getURL = getURL;
function getClient(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new mongodb_1.MongoClient(url);
        return client;
    });
}
exports.getClient = getClient;
