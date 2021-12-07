import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";

@Entity("atuacao")
class Atuacao {

    @PrimaryColumn()
    id: string;

    @Column()
    atuacao: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export { Atuacao }
