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
            ALTER TABLE address ADD CONSTRAINT address_user_id_user_id FOREIGN KEY (user_id) REFERENCES user(id);
            ALTER TABLE address ADD CONSTRAINT address_city_id_city_id FOREIGN KEY (city_id) REFERENCES city(id);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        drop table address;
    `);
  }
}
