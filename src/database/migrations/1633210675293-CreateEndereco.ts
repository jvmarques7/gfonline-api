import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEndereco1633210675293 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"endereco",
                columns:[
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                        generationStrategy: "uuid"
                    },
                    {
                        name: "cep",
                        type: "varchar"
                    },
                    {
                        name: "logradouro",
                        type: "varchar"
                    },
                    {
                        name: "complemento",
                        type: "varchar"
                    },
                    {
                        name: "bairro",
                        type: "varchar"
                    },
                    {
                        name: "numero",
                        type: "varchar"
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
                    },
                    {
                        name:"user_id",
                        type:"varchar",
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("endereco");
    }

}
