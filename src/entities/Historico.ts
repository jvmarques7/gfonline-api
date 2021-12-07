import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { User } from "./User";

@Entity("historico")
class Historico {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    titulo: string;

    @Column()
    descricao: string;

    @Column()
    data_evento: string;

    @Column()
    tipo: string;

    @Column()
    colocacao: number;

    @Column()
    user_id: string;

    @JoinColumn({name: "user_id"})
    @ManyToOne(() => User)
    user: User;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export { Historico }