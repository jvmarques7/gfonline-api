import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateFederacao1635861553128 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"federacao",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                        generationStrategy: "uuid"
                    },
                    {
                        name: "is_federado",
                        type: "varchar"
                    },
                    {
                        name: "is_ativo",
                        type: "varchar"
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
                        name: "FKUser",
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
        await queryRunner.dropTable("federacao");
    }

}
