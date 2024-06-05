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
exports.checkResource = exports.signToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const app_config_1 = require("../app/app.config");
const mysql_config_1 = require("../database/mysql.config");
const signToken = (data) => {
    const { name, id } = data;
    return jsonwebtoken_1.default.sign({ name, id }, app_config_1.PRIVATE_KEY, {
        algorithm: 'RS256',
    });
};
exports.signToken = signToken;
const checkResource = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const { resourceType, resourceId, userId } = options;
    const sql = `select count(${resourceType}.id) as count
    from ${resourceType} 
    where id = ? and userId = ?`;
    const [data] = yield mysql_config_1.connection.promise().query(sql, [resourceId, userId]);
    return data[0].count ? true : false;
});
exports.checkResource = checkResource;
//# sourceMappingURL=auth.service.js.map