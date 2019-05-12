import { Injectable } from '@nestjs/common';
import { IBoard } from './types/interfaces';

@Injectable()
export class BoardsService {
  private readonly boards: IBoard[] = [
    {
      id: '1',
      title: 'Board One',
      description: 'Blah Blah Blah',
    },
    {
      id: '2',
      title: 'Board Two',
      description: 'Blah Blah Blah',
    },
    {
      id: '3',
      title: 'Board Three',
      description: 'Blah Blah Blah',
    },
  ];

  findAll(): IBoard[] {
    return this.boards;
  }

  findOne(id: string): IBoard {
    return this.boards.find(board => board.id === id);
  }
}
