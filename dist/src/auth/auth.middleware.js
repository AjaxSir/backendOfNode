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
exports.checkPermission = exports.validateToken = exports.ValidateLoginData = void 0;
const user_service_1 = require("../user/user.service");
const bcrypt_1 = __importDefault(require("bcrypt"));
const app_config_1 = require("../app/app.config");
const auth_service_1 = require("./auth.service");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ValidateLoginData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, password } = req.body;
    if (!name)
        next(new Error('NAME_IS_REQUIRED'));
    if (!password)
        next(new Error('PASSWORD_IS_REQUIRED'));
    const user = yield (0, user_service_1.getUserByName)(name);
    if (!user)
        return next(new Error('USER_NOT_FOUND'));
    if (!(yield bcrypt_1.default.compare(password, user.password)))
        return next(new Error('PASSWORD_IS_INCORRECT'));
    const token = (0, auth_service_1.signToken)(user);
    req.body.userInfo = Object.assign(Object.assign({}, user), { token });
    next();
});
exports.ValidateLoginData = ValidateLoginData;
const validateToken = (req, res, next) => {
    try {
        let token = req.headers['authorization'];
        if (!token)
            throw new Error();
        token = token.replace('Bearer ', '');
        const payload = jsonwebtoken_1.default.verify(token, app_config_1.PUBLIC_KEY, {
            algorithms: ['RS256'],
        });
        console.log(payload, 'payload');
        req.user = payload;
        next();
    }
    catch (error) {
        next(new Error('INVALID_TOKEN'));
    }
};
exports.validateToken = validateToken;
const checkPermission = (options) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { permission } = options;
            if (permission) {
                const resourceType = req.path.split('/')[1];
                const resourceId = req.path.split('/')[2];
                const { id } = req.user;
                const hasPremission = yield (0, auth_service_1.checkResource)({
                    resourceId: +resourceId,
                    resourceType,
                    userId: id
                });
                if (!hasPremission)
                    next(new Error('UNAUTHORIZED'));
            }
            next();
        }
        catch (error) {
            next(error);
        }
    });
};
exports.checkPermission = checkPermission;
//# sourceMappingURL=auth.middleware.js.map