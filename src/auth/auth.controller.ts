import { Request, Response, NextFunction } from "express";


export const login = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { name, token } = req.body.userInfo;
    res.status(200).send({
        message: `hello ${name}`,
        token
    });
}

export const validateToken = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.status(200).send({
        message: "validate success"
    })
}
