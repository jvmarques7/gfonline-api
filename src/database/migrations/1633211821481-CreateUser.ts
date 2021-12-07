import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1633211821481 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"users",
                columns:[
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                        generationStrategy: "uuid"
                    },
                    {
                        name: "nomeCompleto",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "rg",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "nacionalidade",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "dt_nascimento",
                        type: "string",
                        isNullable: true
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "password",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "sexo",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "naturalidade",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "clube",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "telefone",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "celular",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "passaporte",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "modalidade_id",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "categoria_id",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "atuacao_id",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    },
                    {
                        name:"updated_at",
                        type:"timestamp",
                        default:"now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKModalidade",
                        referencedTableName: "modalidade",
                        referencedColumnNames: ["id"],
                        columnNames: ["modalidade_id"],
                        onDelete: "RESTRICT",
                        onUpdate: "CASCADE"
                    },
                    {
                        name: "FKCategoria",
                        referencedTableName: "categoria",
                        referencedColumnNames: ["id"],
                        columnNames: ["categoria_id"],
                        onDelete: "RESTRICT",
                        onUpdate: "CASCADE"
                    },
                    {
                        name: "FKAtuacao",
                        referencedTableName: "atuacao",
                        referencedColumnNames: ["id"],
                        columnNames: ["atuacao_id"],
                        onDelete: "RESTRICT",
                        onUpdate: "CASCADE"
                    }                          
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}

