import express from 'express';
import PostsRouter from '../post/post.router'
import UserRouter from '../user/user.router'
import AuthRouter from '../auth/auth.router'
import FileRpiter from '../file/file.router'
import { defaultHandlerError } from './app.middleware'
const app = express();

app.use(express.json());


app.use(PostsRouter, UserRouter, AuthRouter, FileRpiter);

app.use(defaultHandlerError);

export default app;
