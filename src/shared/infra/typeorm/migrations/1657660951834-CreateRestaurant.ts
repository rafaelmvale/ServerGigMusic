import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRestaurant1657660951834 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: "restaurants",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    }, 
                    {
                        name: "name",
                        type: "varchar"
                    },{
                        name: "address",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "whatsapp",
                        type: "varchar"
                    },
                    {
                        name: "type",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("restaurants");
    }

}
