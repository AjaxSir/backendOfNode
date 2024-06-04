import { Request, Response, NextFunction } from 'express';
import { getUserByName } from '../user/user.service'
import bcrypt from 'bcrypt'
import { SignOptions } from './auth.interface';
import { PUBLIC_KEY } from '../app/app.config'
import { signToken, checkResource } from './auth.service'
import jwt from 'jsonwebtoken'
export const ValidateLoginData = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { name, password } = req.body;
    if (!name) next(new Error('NAME_IS_REQUIRED'));
    if (!password) next(new Error('PASSWORD_IS_REQUIRED'));
    const user = await getUserByName(name);
    if (!user) return next(new Error('USER_NOT_FOUND'));
    if (!(await bcrypt.compare(password, user.password))) return next(new Error('PASSWORD_IS_INCORRECT'));
    const token = signToken(user);
    req.body.userInfo = {
        ...user,
        token
    };

    next();
}

export const validateToken = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        let token = req.headers['authorization'] as string;
        if (!token) throw new Error()
        token = token.replace('Bearer ', '');
        const payload = jwt.verify(token, PUBLIC_KEY!, {
            algorithms: ['RS256'],
        })
        console.log(payload, 'payload')
        req.user = payload as SignOptions;
        next()
    } catch (error) {
        next(new Error('INVALID_TOKEN'))
    }
}

interface IcheckPermission {
    permission: boolean
}

export const checkPermission = (options: IcheckPermission) => {
    return async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const { permission } = options
            if (permission) {
                const resourceType = req.path.split('/')[1];
                const resourceId = req.path.split('/')[2];
                const { id } = req.user;
                const hasPremission = await checkResource({
                    resourceId: +resourceId,
                    resourceType,
                    userId: id
                })
                if (!hasPremission) next(new Error('UNAUTHORIZED'));
            }
            next()
        } catch (error) {
            next(error)
        }

    }
}
