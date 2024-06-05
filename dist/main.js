"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app/app"));
const app_config_1 = require("./src/app/app.config");
const mysql_config_1 = require("./src/database/mysql.config");
app_1.default.listen(app_config_1.PORT, () => {
    console.log('🚀 服务已启动!');
});
mysql_config_1.connection.connect((err) => {
    if (err) {
        console.log('数据库连接失败', err);
    }
    else {
        console.log('数据库连接成功');
    }
});
//# sourceMappingURL=main.js.map