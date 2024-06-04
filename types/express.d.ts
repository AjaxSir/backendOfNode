import { SignOptions } from '../src/auth/auth.interface'  
declare global {
    namespace Express {
        interface Request {
            user: SignOptions;
            imageMetaData: {
                width: number,
                height: number,
                metadata?: Record<string, any>
            }
        }
    }
}