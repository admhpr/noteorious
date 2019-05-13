import { Injectable } from '@nestjs/common';
import { IBoard } from './types/interfaces';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
  ) {}

  findAll(): Promise<IBoard[]> {
    return this.boardRepository.find();
  }

  findOne(id: string): Promise<IBoard> {
    return this.boardRepository.findOne(id);
  }
}
