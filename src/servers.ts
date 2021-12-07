import "reflect-metadata";
import express, {Request, Response, NextFunction} from "express";
import "express-async-errors";

import { router } from "./routes";
import cors from 'cors';
import "./database";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.use(
    (err: Error, request:Request, response: Response, next:NextFunction) => {
        if(err instanceof Error){
            return response.status(400).json({
                error: err.message,
            });
        }
    }
)

app.listen(3000, () => console.log("Server is running"));