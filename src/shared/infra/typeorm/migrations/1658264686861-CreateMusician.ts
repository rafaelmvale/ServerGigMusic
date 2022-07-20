import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMusician1658264686861 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: "musicians",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {                    
                        name: "style",
                        type: "varchar"
                    },                    
                    {   
                        name: "contact",
                        type: "varchar"
                    },
                    {
                        name: "satisfaction",
                        type: "numeric"
                    },
                    {
                        name: "user_id",
                        type: "uuid",   
                        isNullable: true
                    },
                    {
                        name: "repertory_id",
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
                        name: "FKUserMusician",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKRepertoryMusician",
                        referencedTableName: "repertories",
                        referencedColumnNames: ["id"],
                        columnNames: ["repertory_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
            
        )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("musicians");
    }
}

