import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableState1697496319346 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      CREATE TABLE state (
        id INTEGER PRIMARY KEY NOT NULL UNIQUE,
        name CHAR NOT NULL,
        uf CHAR(2) NOT NULL,
        created_at TIMESTAMP NOT NULL,
        updated_at TIMESTAMP NOT NULL);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            drop table state;
        `);
  }
}
