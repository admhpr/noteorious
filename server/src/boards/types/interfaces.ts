import { Board } from '../board.entity';
import { Omit } from 'src/common/types/essentials';

export interface IBoard extends Omit<Board, 'notes'> {}
