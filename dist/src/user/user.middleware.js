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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodePwd = exports.ValidateUserData = void 0;
const user_service_1 = require("./user.service");
const bcrypt_1 = __importDefault(require("bcrypt"));
const ValidateUserData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, password } = req.body;
    if (!name)
        next(new Error('NAME_IS_REQUIRED'));
    if (!password)
        next(new Error('PASSWORD_IS_REQUIRED'));
    const result = yield (0, user_service_1.getUserByName)(name);
    if (result)
        next(new Error('USER_ALREADY_EXISTS'));
    next();
});
exports.ValidateUserData = ValidateUserData;
const encodePwd = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { password } = req.body;
    req.body.password = yield bcrypt_1.default.hash(password, 10);
    next();
});
exports.encodePwd = encodePwd;
//# sourceMappingURL=user.middleware.js.map