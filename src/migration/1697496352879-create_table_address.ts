import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableAddress1697496352879 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      CREATE TABLE address (
        id INTEGER PRIMARY KEY NOT NULL UNIQUE,
        user_id INTEGER NOT NULL,
        complement CHAR NOT NULL,
        number INTEGER NOT NULL,
        cep CHAR NOT NULL,
        city_id INTEGER NOT NULL,
        created_at TIMESTAMP NOT NULL,
        updated_at TIMESTAMP NOT NULL);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        drop table address;
    `);
  }
}
