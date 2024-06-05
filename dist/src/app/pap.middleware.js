"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultHandlerError = void 0;
const defaultHandlerError = (error, req, res, next) => {
    if (req.headers['authorization'] !== 'sxl') {
        return next(new Error('auth error'));
    }
    let statusCode, message;
    switch (error) {
        default:
            statusCode = 500;
            message = 'Something wrong!';
            break;
    }
    res.status(statusCode).send({ message });
};
exports.defaultHandlerError = defaultHandlerError;
//# sourceMappingURL=pap.middleware.js.map