import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("modalidade")
class Modalidade {

    @PrimaryColumn()
    id: string;

    @Column()
    modalidade: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export {Modalidade};
