import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDayDrink1658339476984 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: "daydrinks",
                columns: [
                    {
                        name: "id", 
                        type: "uuid", 
                        isPrimary: true
                    },
                    {
                        name: "description", 
                        type: "varchar", 
                    },
                    {
                        name: "restaurant_id", 
                        type: "uuid", 
                        isNullable: true
                    }, 
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ], 
                foreignKeys: [
                    {
                        name: "FKRestaurantDayDrinks", 
                        referencedTableName: "restaurants",
                        referencedColumnNames: ["id"],
                        columnNames: ["restaurant_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("daydrinks");
    }

}
