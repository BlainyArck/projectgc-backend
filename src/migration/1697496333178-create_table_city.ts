import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableCity1697496333178 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE city (
            id INTEGER PRIMARY KEY NOT NULL UNIQUE,
            state_id INTEGER NOT NULL,
            city_name INTEGER NOT NULL,
            created_at TIMESTAMP NOT NULL,
            updated_at TIMESTAMP NOT NULL);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        drop table city;    
    `);
  }
}
