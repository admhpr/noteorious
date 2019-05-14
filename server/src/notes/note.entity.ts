import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Board } from 'src/boards/board.entity';

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 255 })
  title: string;

  @Column('text')
  description: string;

  @Column()
  isActive: boolean;

  @Column({ default: Date.now() })
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @ManyToOne(type => Board, board => board.notes)
  board: Board;
}
