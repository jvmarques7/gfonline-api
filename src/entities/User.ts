import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne} from "typeorm";
import { v4 as uuid } from "uuid";
import { Modalidade } from "./Modalidade";
import { Categoria } from "./Categoria";
import { Atuacao } from "./Atuacao";

@Entity("users")
class User {

    @PrimaryColumn()
    readonly id: string;

    @Column({
        nullable: true,
    })
    nomeCompleto: string;
    

    @Column({
        unique: true,
        nullable: true,
    })
    rg: string;

    @Column({
        unique: true,
        nullable: true,
    })
    cpf: string;

    @Column({
        nullable: true,
    })
    nacionalidade: string;

    @Column({
        nullable: true,
    })
    dt_nascimento: string;

    @Column({
        unique: true,
        nullable: false,
    })
    email: string;

    @Column()
    password: string;

    @Column({
        nullable: true,
    })
    sexo: string;

    @Column({
        nullable: true,
    })
    naturalidade: string;

    @Column({
        nullable: true,
    })
    clube: string;

    @Column({
        nullable: true,
    })
    telefone: string;
    
    @Column({
        nullable: true,
    })
    celular: string;

    @Column({
        nullable: true,
    })
    passaporte: string;

    @Column({
        nullable: true,
    })
    modalidade_id: string;

    @JoinColumn({name: "modalidade_id"})
    @ManyToOne(() => Modalidade)
    modalidade: Modalidade;

    @Column({
        nullable: true,
    })
    categoria_id :string;

    @JoinColumn({name: "categoria_id"})
    @ManyToOne(() => Categoria)
    categoria: Categoria;

    @Column({
        nullable: true,
    })
    atuacao_id :string;

    @JoinColumn({name: "atuacao_id"})
    @ManyToOne(() => Atuacao)
    atuacao: Atuacao;

    @CreateDateColumn({
        nullable: true,
    })
    created_at: Date;

    @UpdateDateColumn({
        nullable: true,
    })
    updated_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }

}

export {User}
