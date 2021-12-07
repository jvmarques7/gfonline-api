import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("useradmin")
class UserAdmin {
    
    @PrimaryColumn()
    readonly id: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}

export {UserAdmin}
