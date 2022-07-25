import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSchedule1658349674077 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: "schedules", 
                columns: [
                    { name: "id", type: "uuid", isPrimary: true },
                    { name: "musician_id", type: "uuid" },
                    { name: "schedule_date", type: "timestamp" },
                    { name: "created_at", type: "timestamp", default: "now()" },
                    { name: "updated_at", type: "timestamp", default: "now()" },
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
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("schedules")
    }

}
