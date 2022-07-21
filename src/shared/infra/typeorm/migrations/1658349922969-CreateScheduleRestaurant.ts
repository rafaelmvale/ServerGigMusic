import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateScheduleRestaurant1658349922969 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: "schedules_restaurants", 
                columns: [
                    { name: "id", type: "uuid", isPrimary: true },
                    { name: "musician_id", type: "uuid" },
                    { name: "restaurant_id", type: "uuid" },
                    { name: "created_at", type: "timestamp", default: "now()" },
                ],
                foreignKeys: [
                    {
                      name: "FKMusicianSchedule",
                      referencedTableName: "musicians",
                      referencedColumnNames: ["id"],
                      columnNames: ["musician_id"],
                      onDelete: "SET NULL",
                      onUpdate: "SET NULL",
                    },
                
                    {
                      name: "FKRestaurantSchedule",
                      referencedTableName: "restaurants",
                      referencedColumnNames: ["id"],
                      columnNames: ["restaurant_id"],
                      onDelete: "SET NULL",
                      onUpdate: "SET NULL",
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("schedules_restaurants")

    }

}
