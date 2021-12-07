import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateInscricao1636064416730 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"inscricao",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: "user_id",
                        type: "varchar"
                    },
                    {
                        name: "evento_id",
                        type: "int"
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
                        name: "FKUser",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "RESTRICT",
                        onUpdate: "CASCADE"
                    },
                    {
                        name: "FKEvento",
                        referencedTableName: "event",
                        referencedColumnNames: ["id"],
                        columnNames: ["evento_id"],
                        onDelete: "RESTRICT",
                        onUpdate: "CASCADE"
                    }                      
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("federacao");
    }

}
