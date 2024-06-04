import { connection } from '../database/mysql.config';
import { FileModel } from './file.model';
import fs from 'fs'
import path from 'path'
import Jimp from 'jimp';
export const upload = async (file: FileModel) => {
    let sql = `insert into files set ?`;
    const res = await connection.promise().query(sql, file);
    return res;
}

export const getFile = async (id: number) => {
    let sql = `select * from files where id = ?`;
    const [data] = await connection.promise().query(sql, id) as Record<string, any>[];
    console.log(data, 'services')
    return data[0];
}

export const imageResizer = (image: Jimp, file: Express.Multer.File) => {
    const { width, height } = image.bitmap
    
    const filePath = path.join(file.destination, 'resized', file.filename)

    if (width > 1280) {
        image.resize(1280, Jimp.AUTO)
        .quality(85)
        .write(`${filePath}-large`)
    }
    if (width > 640) {
        image.resize(640, Jimp.AUTO)
        .quality(85)
        .write(`${filePath}-medium`)
    }
    if (width > 320) {
        image.resize(320, Jimp.AUTO)
        .quality(85)
        .write(`${filePath}-small`)
    }
}