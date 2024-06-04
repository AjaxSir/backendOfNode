import express from 'express'
import * as UserController from './user.controller';
import { ValidateUserData } from './user.middleware'
import { encodePwd } from './user.middleware'
const router = express.Router()

router.post('/user',ValidateUserData ,encodePwd,  UserController.index)
export default router;