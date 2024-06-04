import { Request, Response, NextFunction } from 'express';
import _ from 'lodash';
import { getPost, createPost, updatePost, deleteById } from './post.service'
export const index = async (req:Request, res: Response, next: NextFunction) => {
    // if (req.headers['authorization'] !== 'sxl') {
    //     return next(new Error('auth error'));
    // }
    try {
        const data = await getPost();
        res.status(200).send({
            message:data
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
    // const data = await getPost();
    // res.status(200).send({
    //     message:data
    // })
}

export const create = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const { title, content } = req.body;
        const { id:userId } = req.user;
        const data = await createPost({
            title,
            content,
            userId
        });
        res.status(200).send({
            message:data[0]
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export const update = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const postInfo = _.pick(req.body, ['title', 'content', 'id'])
        console.log(postInfo, 'postInfo')
        const data = await updatePost(postInfo);
        res.status(200).send({
            message:data[0]
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export const deletePost = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const data = await deleteById(+id);
        res.status(200).send({
            message: data[0]
        })
    } catch (error) {
        next(error)
    }
}