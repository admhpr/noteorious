import { Injectable } from '@nestjs/common';
import { IBoard } from './types/interfaces';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './boards.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepo: Repository<Board>,
  ) {}

  findAll(): Promise<IBoard[]> {
    return this.boardRepo.find();
  }

  findOne(id: string): Promise<IBoard> {
    return this.boardRepo.findOne(id);
  }
}
