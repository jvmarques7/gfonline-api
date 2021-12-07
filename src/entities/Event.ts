import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity("event")
export class Event {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    estado: string;

    @Column()
    decricao: string;

    @Column()
    tipo: string;

    @Column()
    data: string;
    
    @Column()
    atuacoes: string;

    @Column()
    modalidades: string;

    @Column()
    categorias: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
