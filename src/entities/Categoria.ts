import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("categoria")
class Categoria {

    @PrimaryColumn()
    id: string;

    @Column()
    categoria: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export { Categoria }
