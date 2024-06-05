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
exports.deleteById = exports.updatePost = exports.createPost = exports.getPost = void 0;
const mysql_config_1 = require("../database/mysql.config");
const getPost = () => __awaiter(void 0, void 0, void 0, function* () {
    let sql = `select 
    post.id,
    post.title,
    post.content,
    JSON_OBJECT('id', user.id, 'name', user.name) as user
    from post 
        LEFT JOIN user on post.userId = user.id`;
    const res = yield mysql_config_1.connection.promise().query(sql);
    console.log(res, '返回结果');
    return res[0];
});
exports.getPost = getPost;
const createPost = (data) => __awaiter(void 0, void 0, void 0, function* () {
    let sql = `insert into post set ?`;
    const res = yield mysql_config_1.connection.promise().query(sql, data);
    return res;
});
exports.createPost = createPost;
const updatePost = (data) => __awaiter(void 0, void 0, void 0, function* () {
    let sql = `update post set ? where id = ?`;
    const res = yield mysql_config_1.connection.promise().query(sql, [data, data.id]);
    return res;
});
exports.updatePost = updatePost;
const deleteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let sql = `delete from post where id = ?`;
    const res = yield mysql_config_1.connection.promise().query(sql, id);
    return res;
});
exports.deleteById = deleteById;
//# sourceMappingURL=post.service.js.map