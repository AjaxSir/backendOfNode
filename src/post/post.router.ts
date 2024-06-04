import express from 'express';
import { getRequestUrl } from '../app/app.middleware'
import { index, create, update, deletePost } from './post.controller';
import { validateToken, checkPermission } from '../auth/auth.middleware'

const router = express.Router();

router.get('/',getRequestUrl,  index);
router.post('/create',getRequestUrl, validateToken,  create);
router.post('/update',getRequestUrl, validateToken, checkPermission({ permission: true }), update);
router.delete('/post/:id',validateToken,checkPermission({ permission: true }), deletePost)

export default router;