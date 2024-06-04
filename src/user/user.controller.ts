import { Request, Response, NextFunction } from 'express';
import * as UserService from './user.service';
export const index = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const { name, password } = req.body;
        const data = await UserService.createUser({ name, password });
        res.status(200).send({
            message:data
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}