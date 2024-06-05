"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequestUrl = exports.defaultHandlerError = void 0;
const defaultHandlerError = (error, req, res, next) => {
    let statusCode, message;
    console.log(error.message, 'error info');
    switch (error.message) {
        case 'NAME_IS_REQUIRED':
            statusCode = 400;
            message = '请填写用户名称';
            break;
        case 'PASSWORD_IS_REQUIRED':
            statusCode = 400;
            message = '请填写用户密码';
            break;
        case 'USER_ALREADY_EXISTS':
            statusCode = 209;
            message = '用户已存在';
            break;
        case 'USER_NOT_FOUND':
            statusCode = 209;
            message = '用户不存在';
            break;
        case 'PASSWORD_IS_INCORRECT':
            statusCode = 209;
            message = '密码不正确';
            break;
        case 'INVALID_TOKEN':
            statusCode = 401;
            message = '无效的token';
            break;
        case 'UNAUTHORIZED':
            statusCode = 401;
            message = '未授权';
            break;
        default:
            statusCode = 500;
            message = error.message;
            break;
    }
    res.status(statusCode).send({ message });
};
exports.defaultHandlerError = defaultHandlerError;
const getRequestUrl = (req, res, next) => {
    console.log(req.url);
    next();
};
exports.getRequestUrl = getRequestUrl;
//# sourceMappingURL=app.middleware.js.map