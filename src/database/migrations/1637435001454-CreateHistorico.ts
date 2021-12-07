import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateHistorico1637435001454 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"historico",
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
                        name: "descricao",
                        type: "varchar"
                    },
                    {
                        name: "data_evento",
                        type: "string"
                    },
                    {
                        name: "tipo",
                        type: "varchar"
                    },
                    {
                        name: "colocacao",
                        type: "int"
                    },
                    {
                        name: "user_id",
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
                ],
                foreignKeys: [
                    {
                        name: "FKUser_historico",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "RESTRICT",
                        onUpdate: "CASCADE"
                    }                      
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("historico");
    }

}
