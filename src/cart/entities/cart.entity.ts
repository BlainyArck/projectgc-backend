import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class CartEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'user_id', nullable: false })
  userId: number;

  @CreateDateColumn({ name: 'created_at' })
  createAt: Date;

  @UpdateDateColumn({ name: 'update_at' })
  updaatedAt: Date;
}
