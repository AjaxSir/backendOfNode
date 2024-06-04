## nodejs 后端学习

### 技术栈
express+mysql+typescript+tsc-watch
使用tsc-watch --onSuccess \"node dist/main.js\" 实时监听文件变化并执行

#### 功能点

1. 实现注册登录
使用插件 bcrypt @types/bcrypt
注册时通过await bcrypt.hash(password, 10); 对用户密码加密，
登陆时通过await bcrypt.compare(password, user.password)比较密码是否正确

2.签发凭证 jsonwebtoken @types/jsonwebtoken openssl
-  首先生成公钥和私钥文件
```
openssl
genrsa -out private.key 4096
rsa -in private.key -pubout -out public.key
```
- 在读取私钥和公钥转换为base64 存储在环境变量中
- 在需要权限的路由中使用token验证中间件，将验证的信息写入request中,以便之后的中间件处理

3. 图片上传及预览 multer @types/multer jimp @types/jimp
- multer 创建一个文件拦截器用于处理图片上传请求,在之后的中间件则会在request中拿到file实例
- jimp 通过await jimp.read(request.file.path) 拿到照片中额外信息
