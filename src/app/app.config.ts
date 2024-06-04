import dotenv from 'dotenv';

dotenv.config();

export const { PORT } = process.env;

export const {
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_DATABASE
} = process.env;

export let { PRIVATE_KEY, PUBLIC_KEY } =process.env;
PRIVATE_KEY = Buffer.from(PRIVATE_KEY!, 'base64').toString()
PUBLIC_KEY = Buffer.from(PUBLIC_KEY!, 'base64').toString()
