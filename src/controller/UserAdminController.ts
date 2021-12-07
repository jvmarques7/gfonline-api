import {Request, Response, } from "express";
import { UserAdminService } from "../services/UserAdminService";

class UserAdminController{

    async create(req: Request, res: Response){
        const {username, password} = req.body;

        const userAdminService = new UserAdminService();

        const userAdmin = await userAdminService.execute({
            username, 
            password
        });

        return res.json(userAdmin);
    }

    async authenticate(req: Request, res: Response){
        const {username, password} = req.body;

        const userAdminService = new UserAdminService();

        const token = await userAdminService.authenticate({
            username,
            password
        });

        return res.json(token);
    }

}

export {UserAdminController}