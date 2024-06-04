import app from './src/app/app';
import { PORT } from './src/app/app.config'
import { connection } from './src/database/mysql.config'

app.listen(PORT, () => {
    console.log('🚀 服务已启动!');
})

connection.connect((err) => {
    if (err) {
        console.log('数据库连接失败', err)
    } else {
        console.log('数据库连接成功')
    }
})