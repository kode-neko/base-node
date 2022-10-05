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
function checkIdObj(_target, _propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    const newMethod = (...args) => __awaiter(this, void 0, void 0, function* () {
        let obj;
        try {
            obj = yield originalMethod(...args);
        }
        catch (err) {
            if (err.kind === 'ObjectId') {
                obj = null;
            }
            else
                throw err;
        }
        return obj;
    });
    const newDescriptor = {
        get() { return newMethod; },
    };
    return newDescriptor;
}
exports.default = checkIdObj;
