"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.getFile = exports.upload = void 0;
const lodash_1 = __importDefault(require("lodash"));
const UploadApi = __importStar(require("./file.service"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
/*
** Description:
*/
const upload = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.user;
        const fileInfo = lodash_1.default.pick(req.file, ['filename', 'mimetype', 'size', 'originalname', 'path']);
        console.log(fileInfo, 'fileInfo');
        const { width, height } = req.imageMetaData;
        const [data] = yield UploadApi.upload(Object.assign(Object.assign({}, fileInfo), { userId: +id, width, height }));
        res.status(200).send({
            message: data
        });
    }
    catch (error) {
        next(error);
    }
});
exports.upload = upload;
const getFile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { size } = req.query;
        const data = yield UploadApi.getFile(+id);
        let filename = data.filename;
        let root = 'uploads';
        let resized = 'resized';
        console.log(size, 'size');
        if (size) {
            const allowedSize = ['large', 'medium', 'small'];
            if (!allowedSize.includes(size)) {
                throw new Error('invalid size');
            }
            const fileExist = fs_1.default.existsSync(path_1.default.join(root, resized, `${filename}-${size}`));
            console.log(fileExist, 'fileExist');
            if (!fileExist) {
                throw new Error('file not found');
            }
            else {
                filename = `${filename}-${size}`;
                root = path_1.default.join(root, resized);
            }
        }
        res.sendFile(filename, {
            root,
            headers: {
                'Content-Type': data.mimetype
            }
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getFile = getFile;
//# sourceMappingURL=file.controller.js.map