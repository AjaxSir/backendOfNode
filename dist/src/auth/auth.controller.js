"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = exports.login = void 0;
const login = (req, res, next) => {
    const { name, token } = req.body.userInfo;
    res.status(200).send({
        message: `hello ${name}`,
        token
    });
};
exports.login = login;
const validateToken = (req, res, next) => {
    res.status(200).send({
        message: "validate success"
    });
};
exports.validateToken = validateToken;
//# sourceMappingURL=auth.controller.js.map