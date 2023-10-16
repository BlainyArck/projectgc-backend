import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUser1697471250927 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            CREATE TABLE user (
                id INTEGER PRIMARY KEY NOT NULL UNIQUE,
                name VARCHAR(30) NOT NULL,
                email  VARCHAR(30) NOT NULL UNIQUE,
                phone VARCHAR(15) NOT NULL,
                password  VARCHAR(25) NOT NULL,
                type_user INTEGER NOT NULL,
                created_at TIMESTAMP NOT NULL,
                updated_at TIMESTAMP NOT NULL);
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            drop table user;
        `);
  }
}
