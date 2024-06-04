import multer from 'multer' 
import { Request, Response, NextFunction } from 'express'
import Jimp from 'jimp'
import * as UploadApi from './file.service'
const multerInterceptor = multer({ dest: 'uploads/' })

export const uploadFile = multerInterceptor.single('file')

export const uploadFiles = multerInterceptor.array('files')

export const fileProcesser = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.file) {
        next();
        return;
    }
    const image = await Jimp.read(req.file.path)
    const { width, height } = image.bitmap
    console.log(image.bitmap, 'image.bitmap')
    req.imageMetaData = {
        width,
        height,
    } 

    UploadApi.imageResizer( image,req.file)
    next();
}


