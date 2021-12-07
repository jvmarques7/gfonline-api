import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEvent1634046005093 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name:"evento",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'                 
                    },
                    {
                        name: "titulo",
                        type: "varchar"
                    },
                    {
                        name: "estado",
                        type: "varchar"
                    },
                    {
                        name: "descricao",
                        type: "varchar"
                    },
                    {
                        name: "tipo",
                        type: "char"
                    },
                    {
                        name: "data",
                        type: "string"
                    },
                    {
                        name: "atuacoes",
                        type: "varchar"
                    },
                    {
                        name: "modalidades",
                        type: "varchar"
                    },
                    {
                        name: "categorias",
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
                    }
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
