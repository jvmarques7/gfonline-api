import { Request, Response , NextFunction} from "express";
import { verify } from "jsonwebtoken";



export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {

    //Receber o Token
    const authToken = req.headers.authorization;

    //Validar se o token está preenchido
    if(!authToken){
        return res.status(401).end();
    }
    
    const [,token] = authToken.split(" ");

    try {
        //Validar se o token é válido
        const {sub} = verify(token, process.env.SECRET);

        return next();
        
    } catch (err) {
        return res.status(401).end();
    }

    

}