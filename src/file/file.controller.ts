import { Request, Response, NextFunction } from 'express';
import _ from 'lodash'
import * as UploadApi from './file.service'
import path from 'path'
import fs from 'fs'
/*
** Description:
*/
export const upload = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.user;
        
        const fileInfo = _.pick(req.file, ['filename', 'mimetype', 'size', 'originalname', 'path'])
        console.log(fileInfo, 'fileInfo')
        const { width, height } = req.imageMetaData;
        const [data] = await UploadApi.upload({
            ...fileInfo,
            userId:+id,
            width, height
        })
       
        res.status(200).send({
            message: data
        })
    } catch (error) {
        next(error)
    }    
}

export const getFile = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params
        const { size } = req.query;        
        const data = await UploadApi.getFile(+id)
        let filename = data.filename;
        let root = 'uploads'
        let resized = 'resized'
        console.log(size, 'size')
        if(size) {
            const allowedSize = ['large', 'medium', 'small']
            if (!allowedSize.includes(size as string)) {
                throw new Error('invalid size')
            }
            const fileExist = fs.existsSync(path.join(root, resized, `${filename}-${size}`))
            console.log(fileExist, 'fileExist')
            if (!fileExist) {
                throw new Error('file not found')
            } else {
                filename = `${filename}-${size}`
                root = path.join(root, resized)
            }
        }
        res.sendFile(filename, {
            root,
            headers: {
                'Content-Type': data.mimetype
            }
        })
    } catch (error) {
        next(error)
    }    
}