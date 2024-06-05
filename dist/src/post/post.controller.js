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
exports.deletePost = exports.update = exports.create = exports.index = void 0;
const lodash_1 = __importDefault(require("lodash"));
const post_service_1 = require("./post.service");
const index = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // if (req.headers['authorization'] !== 'sxl') {
    //     return next(new Error('auth error'));
    // }
    try {
        const data = yield (0, post_service_1.getPost)();
        res.status(200).send({
            message: data
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
    // const data = await getPost();
    // res.status(200).send({
    //     message:data
    // })
});
exports.index = index;
const create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content } = req.body;
        const { id: userId } = req.user;
        const data = yield (0, post_service_1.createPost)({
            title,
            content,
            userId
        });
        res.status(200).send({
            message: data[0]
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.create = create;
const update = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postInfo = lodash_1.default.pick(req.body, ['title', 'content', 'id']);
        console.log(postInfo, 'postInfo');
        const data = yield (0, post_service_1.updatePost)(postInfo);
        res.status(200).send({
            message: data[0]
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.update = update;
const deletePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield (0, post_service_1.deleteById)(+id);
        res.status(200).send({
            message: data[0]
        });
    }
    catch (error) {
        next(error);
    }
});
exports.deletePost = deletePost;
//# sourceMappingURL=post.controller.js.map