import jwt from 'jsonwebtoken'
import { PRIVATE_KEY } from '../app/app.config'
import { connection } from '../database/mysql.config'
interface SignOptions {
    name: string,
    id: number
}

export const signToken = (data: SignOptions) => {
    const { name, id } = data
    return jwt.sign({ name, id }, PRIVATE_KEY!, { 
        algorithm: 'RS256',
     })
}
interface ResourceOptions {
    resourceType: string,
    resourceId: number,
    userId: number
}
export const checkResource = async (options: ResourceOptions) => {
    const { resourceType, resourceId, userId } = options;
    const sql = `select count(${resourceType}.id) as count
    from ${resourceType} 
    where id = ? and userId = ?`;
    const [data] = await connection.promise().query(sql, [resourceId, userId]) as Record<string, any>[];
    return data[0].count ? true: false
}