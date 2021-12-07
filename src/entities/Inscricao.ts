import {Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne, Column} from "typeorm";
import { Event } from "./Event";
import { User } from "./User";

@Entity("inscricao")
class Inscricao {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    user_id: string

    @Column()
    evento_id: number

    @JoinColumn({name: "user_id"})
    @ManyToOne(() => User)
    user: User;

    @JoinColumn({name: "evento_id"})
    @ManyToOne(() => Event)
    event: Event;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export {Inscricao};
