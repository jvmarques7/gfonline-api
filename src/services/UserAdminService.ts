import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UserAdminRepositories } from "../repositories/UserAdminRepository";
import {UserAdmin} from '../entities/UserAdmin';
import { Request, Response } from "express";

const tokenList ={}

interface IUserAdminRequest {
    username: string;
    password: string;
}

interface IAuthenticete {
    username: string;
    password: string;
}

class UserAdminService{

    async execute({username, password} : IUserAdminRequest){
    const userAdminRepository = getCustomRepository(UserAdminRepositories);

        if(!username) {
            throw new Error("Username incorreto!");
        }

        const userAlreadyExists = await userAdminRepository.findOne({
            username,
        });

        if(userAlreadyExists) {
            throw new Error("User already exists");
        }

        if(!password){
            throw new Error("Password needs to exists!");
        }

        const passwordHash = await hash(password, 8);

        const userAdmin = userAdminRepository.create({
            username,
            password: passwordHash
        })

        await userAdminRepository.save(userAdmin);

        return userAdmin;
    }

    async authenticate({username, password} : IAuthenticete){
        const userAdminRepositories = getCustomRepository(UserAdminRepositories);
        var err;
        var response = {"status": "Logged in", "token": "", "error": "Login Incorreto"};

        try{

            const userAdmin = await userAdminRepositories.findOne({
                username
            });

            if( !userAdmin ){
                throw new Error("Email ou senha incorretas!")
            }

            const passwordMatch = await compare(password, userAdmin.password);

            if(!passwordMatch){
                throw new Error("Email ou senha incorretas!")
            }

            const token = sign({
                username: userAdmin.username
            }, 
                process.env.SECRET,
            {
                subject: userAdmin.id,
                expiresIn: "86400" 
            }
            );
    
            response = {
                "status": "Logged in",
                "token": token,
                "error": ""
            }

        }catch(err){
            return response.error
        }

        return response;

    }

}

export {UserAdminService}