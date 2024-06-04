import express from 'express';
const router = express.Router();
import { upload, getFile } from './file.controller' 
import { uploadFile, fileProcesser } from './file.middleware'
import { validateToken } from '../auth/auth.middleware'
router.post('/upload',validateToken,uploadFile,fileProcesser, upload)
router.get('/upload/:id',getFile)
export default router;