"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_middleware_1 = require("../app/app.middleware");
const post_controller_1 = require("./post.controller");
const auth_middleware_1 = require("../auth/auth.middleware");
const router = express_1.default.Router();
router.get('/', app_middleware_1.getRequestUrl, post_controller_1.index);
router.post('/create', app_middleware_1.getRequestUrl, auth_middleware_1.validateToken, post_controller_1.create);
router.post('/update', app_middleware_1.getRequestUrl, auth_middleware_1.validateToken, (0, auth_middleware_1.checkPermission)({ permission: true }), post_controller_1.update);
router.delete('/post/:id', auth_middleware_1.validateToken, (0, auth_middleware_1.checkPermission)({ permission: true }), post_controller_1.deletePost);
exports.default = router;
//# sourceMappingURL=post.router.js.map