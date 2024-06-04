import * as fs from 'fs';
import path from 'path';

const privateKey = fs.readFileSync(path.join('./private.key'), 'utf8');
const publicKey = fs.readFileSync(path.join('./public.key'), 'utf8');

const privateKeyBase64 = Buffer.from(privateKey).toString('base64');
const publicKeyBase64 = Buffer.from(publicKey).toString('base64');
console.log(privateKeyBase64, '\n')
console.log(publicKeyBase64, '\n')
