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
exports.imageResizer = exports.getFile = exports.upload = void 0;
const mysql_config_1 = require("../database/mysql.config");
const path_1 = __importDefault(require("path"));
const jimp_1 = __importDefault(require("jimp"));
const upload = (file) => __awaiter(void 0, void 0, void 0, function* () {
    let sql = `insert into files set ?`;
    const res = yield mysql_config_1.connection.promise().query(sql, file);
    return res;
});
exports.upload = upload;
const getFile = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let sql = `select * from files where id = ?`;
    const [data] = yield mysql_config_1.connection.promise().query(sql, id);
    console.log(data, 'services');
    return data[0];
});
exports.getFile = getFile;
const imageResizer = (image, file) => {
    const { width, height } = image.bitmap;
    const filePath = path_1.default.join(file.destination, 'resized', file.filename);
    if (width > 1280) {
        image.resize(1280, jimp_1.default.AUTO)
            .quality(85)
            .write(`${filePath}-large`);
    }
    if (width > 640) {
        image.resize(640, jimp_1.default.AUTO)
            .quality(85)
            .write(`${filePath}-medium`);
    }
    if (width > 320) {
        image.resize(320, jimp_1.default.AUTO)
            .quality(85)
            .write(`${filePath}-small`);
    }
};
exports.imageResizer = imageResizer;
//# sourceMappingURL=file.service.js.map