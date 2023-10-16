import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableState1697496319346 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE state (
            id INTEGER PRIMARY KEY NOT NULL UNIQUE,
            state_name CHAR NOT NULL,
            created_at TIMESTAMP NOT NULL,
            updated_at TIMESTAMP NOT NULL);
            ALTER TABLE city ADD CONSTRAINT city_state_id_state_id FOREIGN KEY (state_id) REFERENCES state(id);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            drop table state;
        `);
  }
}
