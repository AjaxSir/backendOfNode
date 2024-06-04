import express from 'express';
import * as AuthController from './auth.controller';
import { ValidateLoginData, validateToken } from './auth.middleware'
const router = express.Router()

router.post('/login',ValidateLoginData, AuthController.login)
router.post('/auth/validate',validateToken, AuthController.validateToken)

export default router;