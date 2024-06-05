"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const file_controller_1 = require("./file.controller");
const file_middleware_1 = require("./file.middleware");
const auth_middleware_1 = require("../auth/auth.middleware");
router.post('/upload', auth_middleware_1.validateToken, file_middleware_1.uploadFile, file_middleware_1.fileProcesser, file_controller_1.upload);
router.get('/upload/:id', file_controller_1.getFile);
exports.default = router;
//# sourceMappingURL=file.router.js.map