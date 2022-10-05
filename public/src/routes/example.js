"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller");
const router = (0, express_1.Router)();
router.get('/', controller_1.getExample);
router.get('/main', controller_1.getMain);
router.get('/section', controller_1.getSection);
exports.default = router;
