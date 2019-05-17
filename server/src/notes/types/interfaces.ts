import { Note } from '../note.entity';
import { Omit } from 'src/common/types/essentials';

export interface INote extends Omit<Note, 'board'> {}
