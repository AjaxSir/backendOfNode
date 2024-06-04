import { connection } from '../database/mysql.config';
import { UserModel } from './user.model'
export const createUser = async (user: UserModel) => {
    const sql = `insert into user set ?`;
    const [data] = await connection.promise().query(sql, user);
    return data;
}

export const getUserByName =  async(name: string) => {
    // const sql = `select id,name ${flag ? ', password' : ''} from user where name = '${name}'`;
    const sql = `select * from user where name = ?`;
    const [data] = await connection.promise().query(sql, name) as Record<string, any>[];
    return data[0];
}