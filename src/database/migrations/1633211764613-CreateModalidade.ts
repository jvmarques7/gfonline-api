import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateModalidade1633211764613 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"modalidade",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true                       
                    },
                    {
                        name: "modalidade",
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
        await queryRunner.dropTable("modalidade");
    }

}
