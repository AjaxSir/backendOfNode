"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_router_1 = __importDefault(require("../post/post.router"));
const user_router_1 = __importDefault(require("../user/user.router"));
const auth_router_1 = __importDefault(require("../auth/auth.router"));
const file_router_1 = __importDefault(require("../file/file.router"));
const app_middleware_1 = require("./app.middleware");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(post_router_1.default, user_router_1.default, auth_router_1.default, file_router_1.default);
app.use(app_middleware_1.defaultHandlerError);
exports.default = app;
//# sourceMappingURL=app.js.map