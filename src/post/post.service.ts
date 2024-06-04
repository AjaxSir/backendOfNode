import { connection } from "../database/mysql.config"
import { PostModel } from './post.model'
export const getPost = async () => {
    let sql = `select 
    post.id,
    post.title,
    post.content,
    JSON_OBJECT('id', user.id, 'name', user.name) as user
    from post 
        LEFT JOIN user on post.userId = user.id`;
        const res = await connection.promise().query(sql);
        console.log(res, '返回结果')
        return res[0];
        
}

export const createPost = async (data:PostModel) => {
    let sql = `insert into post set ?`;
    const res = await connection.promise().query(sql, data);
    return res;
}

export const updatePost = async (data:PostModel) => {
    let sql = `update post set ? where id = ?`;
    const res = await connection.promise().query(sql, [data, data.id]);
    return res;
}

export const deleteById =  async(id:number) => {
    let sql = `delete from post where id = ?`;
    const res =  await connection.promise().query(sql, id);
    return res;
}