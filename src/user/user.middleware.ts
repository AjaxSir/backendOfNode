import { Request, Response, NextFunction } from 'express';
import { getUserByName } from './user.service'
import bcrypt from 'bcrypt'
export const ValidateUserData = async (req: Request, res: Response, next: NextFunction) => {
    const { name, password } = req.body;
    if (!name) next(new Error('NAME_IS_REQUIRED'));
    if (!password) next(new Error('PASSWORD_IS_REQUIRED'));
    const result = await getUserByName(name)
    if (result) next(new Error('USER_ALREADY_EXISTS'));
    next();
}

export const encodePwd = async (req:Request, res:Response, next:NextFunction) => {
    const { password } = req.body;
    req.body.password = await bcrypt.hash(password, 10);
    next();
}