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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByName = exports.createUser = void 0;
const mysql_config_1 = require("../database/mysql.config");
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = `insert into user set ?`;
    const [data] = yield mysql_config_1.connection.promise().query(sql, user);
    return data;
});
exports.createUser = createUser;
const getUserByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    // const sql = `select id,name ${flag ? ', password' : ''} from user where name = '${name}'`;
    const sql = `select * from user where name = ?`;
    const [data] = yield mysql_config_1.connection.promise().query(sql, name);
    return data[0];
});
exports.getUserByName = getUserByName;
//# sourceMappingURL=user.service.js.map