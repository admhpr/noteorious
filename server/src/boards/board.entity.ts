import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Note } from '../notes/note.entity';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 255 })
  title: string;

  @Column('text')
  description: string;

  @Column({ type: 'boolean', default: 1 })
  isActive: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(type => Note, note => note.boardId)
  notes: Note[];
}
