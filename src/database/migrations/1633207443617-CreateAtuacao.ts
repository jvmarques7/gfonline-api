import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAtuacao1633207443617 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"atuacao",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true                       
                    },
                    {
                        name: "atuacao",
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
        await queryRunner.dropTable("atuacao");
    }

}