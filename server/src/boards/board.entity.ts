import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Note } from 'src/notes/note.entity';

@Entity()
export class Board {
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

  @OneToMany(type => Note, photo => note.board)
  notes: Note[];
}
