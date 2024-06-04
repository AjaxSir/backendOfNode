import mysql from 'mysql2';
import {
    MYSQL_DATABASE,
    MYSQL_HOST,
    MYSQL_PASSWORD,
    MYSQL_PORT,
    MYSQL_USER
 } from '../app/app.config'

 export const connection = mysql.createConnection({
     host: MYSQL_HOST,
     user: MYSQL_USER,
     password: MYSQL_PASSWORD,
     database: MYSQL_DATABASE,
     port: Number(MYSQL_PORT)
 })